/**
 * Apply infra/ai-search.json to the Cloudflare AI Search instance that powers the
 * site search widget (src/components/AiSearch.svelte).
 *
 *   CLOUDFLARE_ACCOUNT_ID=... CLOUDFLARE_API_TOKEN=... npm run infra:ai-search
 *   ... --dry-run    print the local/remote diff and exit without writing
 *
 * Why this file exists: the update endpoint is a full replace, not a merge. Any field
 * left out of the request is silently reset to its default — omitting `crawl_options`
 * wipes it, omitting `use_browser_rendering` flips it back on. Editing the dashboard by
 * hand and hoping is how the config drifts; this keeps the whole object in git.
 *
 * Note: deleting and recreating an instance issues a NEW public endpoint id, which is
 * hardcoded in AiSearch.svelte. If this script has to create the instance, update the
 * ENDPOINT constant there with the id it prints.
 */
import { readFileSync } from 'node:fs';

const API = 'https://api.cloudflare.com/client/v4';
const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
const token = process.env.CLOUDFLARE_API_TOKEN;
const dryRun = process.argv.includes('--dry-run');

if (!accountId || !token) {
  console.error('Missing CLOUDFLARE_ACCOUNT_ID or CLOUDFLARE_API_TOKEN.');
  process.exit(1);
}

const config = JSON.parse(readFileSync(new URL('../infra/ai-search.json', import.meta.url), 'utf8'));
const { id } = config;
if (!id) {
  console.error('infra/ai-search.json is missing "id".');
  process.exit(1);
}

async function call(method, path, body) {
  const res = await fetch(`${API}/accounts/${accountId}${path}`, {
    method,
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined,
  });
  const json = await res.json().catch(() => ({}));
  return { status: res.status, json };
}

const current = await call('GET', `/autorag/rags/${id}`);
const exists = current.json?.success === true;

if (dryRun) {
  if (!exists) {
    console.log(`Instance "${id}" does not exist — a run would create it.`);
    process.exit(0);
  }
  const remote = current.json.result;
  const drift = Object.keys(config).filter(
    (k) => JSON.stringify(remote[k]) !== JSON.stringify(config[k]),
  );
  if (!drift.length) {
    console.log(`Instance "${id}" already matches infra/ai-search.json.`);
    process.exit(0);
  }
  console.log(`Drift in "${id}":`);
  for (const k of drift) {
    console.log(`  ${k}\n    remote: ${JSON.stringify(remote[k])}\n    local:  ${JSON.stringify(config[k])}`);
  }
  process.exit(0);
}

const { status, json } = exists
  ? await call('PUT', `/autorag/rags/${id}`, config)
  : await call('POST', '/ai-search/instances', config);

if (!json?.success) {
  console.error(`Failed to ${exists ? 'update' : 'create'} "${id}" (HTTP ${status}):`);
  console.error(JSON.stringify(json?.errors ?? json, null, 2));
  process.exit(1);
}

console.log(`${exists ? 'Updated' : 'Created'} AI Search instance "${id}".`);
if (!exists) {
  console.log(`Public endpoint id: ${json.result.public_endpoint_id}`);
  console.log('Update ENDPOINT in src/components/AiSearch.svelte to match.');
}
console.log('A reindex is triggered automatically; content changes take a sync to appear.');
