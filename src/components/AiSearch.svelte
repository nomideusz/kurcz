<script lang="ts">
  import { t, type SupportedLocale } from '../i18n/config';
  import { toHits } from '../utils/search-links.js';

  // Cloudflare AI Search public endpoint (unauthenticated + CORS-open by design).
  // Rotating the instance changes this id — it is the only thing to update here.
  const ENDPOINT = 'https://60e20057-3f8f-4bb7-bcaa-f27904731da3.search.ai.cloudflare.com';

  let { locale = 'pl' as SupportedLocale }: { locale?: SupportedLocale } = $props();

  type Hit = { url: string; title: string; description: string; score: number };

  let dialog = $state<HTMLDialogElement | null>(null);
  let input = $state<HTMLInputElement | null>(null);
  let query = $state('');
  let hits = $state<Hit[]>([]);
  let answer = $state('');
  let sources = $state<Hit[]>([]);
  let state = $state<'idle' | 'searching' | 'asking' | 'error'>('idle');
  // Generation runs on a much tighter inference budget than /search and is the one
  // failure real visitors will meet, so it gets its own "try again shortly" copy.
  let rateLimited = $state(false);

  let debounce: ReturnType<typeof setTimeout>;
  let inflight: AbortController | null = null;

  async function runSearch(q: string) {
    inflight?.abort();
    inflight = new AbortController();
    rateLimited = false;
    state = 'searching';
    try {
      const res = await fetch(`${ENDPOINT}/search`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: q }),
        signal: inflight.signal,
      });
      if (!res.ok) throw new Error(String(res.status));
      const json = await res.json();
      // Rate limiting comes back as HTTP 200 with success:false — without this the
      // widget would quietly render "no results" instead of saying something went wrong.
      if (json?.success === false) throw new Error(json?.errors?.[0]?.message ?? 'search failed');
      hits = toHits(json?.result?.chunks, locale);
      state = 'idle';
    } catch (e) {
      if ((e as Error).name === 'AbortError') return;
      rateLimited = /rate limit/i.test((e as Error).message);
      state = 'error';
    }
  }

  function onInput() {
    answer = '';
    sources = [];
    clearTimeout(debounce);
    const q = query.trim();
    if (q.length < 3) {
      inflight?.abort();
      hits = [];
      state = 'idle';
      return;
    }
    // 350ms debounce + 3-char floor keeps search-as-you-type inside the endpoint's rate limit
    debounce = setTimeout(() => runSearch(q), 350);
  }

  async function ask() {
    const q = query.trim();
    if (q.length < 3 || state === 'asking') return;
    clearTimeout(debounce);
    inflight?.abort();
    inflight = new AbortController();
    answer = '';
    sources = [];
    rateLimited = false;
    state = 'asking';
    try {
      const res = await fetch(`${ENDPOINT}/chat/completions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // Nothing but the question goes in `content` — the instance rewrites the whole
        // message into its retrieval query, so appended instructions wreck recall.
        body: JSON.stringify({ messages: [{ role: 'user', content: q }], stream: true }),
        signal: inflight.signal,
      });
      if (!res.ok || !res.body) throw new Error(String(res.status));
      // Same 200-but-failed case as /search: errors arrive as JSON, not as a stream.
      if (!res.headers.get('content-type')?.includes('event-stream')) {
        const json = await res.json().catch(() => null);
        throw new Error(json?.errors?.[0]?.message ?? 'ask failed');
      }

      const reader = res.body.pipeThrough(new TextDecoderStream()).getReader();
      let buf = '';
      let event = '';
      for (;;) {
        const { value, done } = await reader.read();
        if (done) break;
        buf += value;
        const lines = buf.split('\n');
        buf = lines.pop() ?? '';
        for (const line of lines) {
          if (line.startsWith('event:')) {
            event = line.slice(6).trim();
          } else if (line.startsWith('data:')) {
            const payload = line.slice(5).trim();
            if (payload === '[DONE]') continue;
            try {
              const parsed = JSON.parse(payload);
              if (event === 'chunks') {
                sources = toHits(parsed, locale);
                event = '';
              } else {
                answer += parsed?.choices?.[0]?.delta?.content ?? '';
              }
            } catch {
              /* partial frame — the next read completes it */
            }
          }
        }
      }
      state = 'idle';
    } catch (e) {
      if ((e as Error).name === 'AbortError') return;
      rateLimited = /rate limit/i.test((e as Error).message);
      state = 'error';
    }
  }

  function open() {
    dialog?.showModal();
    queueMicrotask(() => input?.focus());
  }

  function close() {
    inflight?.abort();
    clearTimeout(debounce);
    dialog?.close();
  }

  function onWindowKey(e: KeyboardEvent) {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      dialog?.open ? close() : open();
    }
  }

  function onFormSubmit(e: SubmitEvent) {
    e.preventDefault();
    ask();
  }

  // The model emits light markdown; strip the emphasis markers rather than pull in a parser.
  const plain = (s: string) => s.replace(/\*\*/g, '').replace(/^#+\s*/gm, '');
</script>

<svelte:window onkeydown={onWindowKey} />

<button
  type="button"
  onclick={open}
  aria-label={t(locale, 'search.open')}
  class="inline-flex h-[38px] items-center justify-center gap-2 rounded border border-ink px-[14px] text-sm font-medium leading-none text-ink transition-colors hover:bg-ink hover:text-paper focus:outline-none focus:ring-1 focus:ring-accent"
>
  <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
  </svg>
  <span class="hidden sm:inline">{t(locale, 'search.open')}</span>
</button>

<dialog
  bind:this={dialog}
  onclose={() => { query = ''; hits = []; answer = ''; sources = []; state = 'idle'; rateLimited = false; }}
  onclick={(e) => { if (e.target === dialog) close(); }}
  aria-label={t(locale, 'search.open')}
  class="w-[min(92vw,640px)] rounded-lg border border-line bg-paper p-0 text-body shadow-xl backdrop:bg-ink/40 backdrop:backdrop-blur-sm"
>
  <form onsubmit={onFormSubmit} class="flex items-center gap-3 border-b border-line px-5 py-4">
    <svg class="h-5 w-5 shrink-0 text-faint" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
      <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
    </svg>
    <input
      bind:this={input}
      bind:value={query}
      oninput={onInput}
      type="search"
      autocomplete="off"
      placeholder={t(locale, 'search.placeholder')}
      aria-label={t(locale, 'search.placeholder')}
      class="min-w-0 flex-1 bg-transparent text-[16px] text-ink outline-none placeholder:text-faint"
    />
    <button
      type="submit"
      disabled={query.trim().length < 3 || state === 'asking'}
      class="shrink-0 rounded bg-accent px-3 py-1.5 text-sm font-medium leading-none text-white transition-opacity hover:opacity-90 disabled:opacity-40"
    >
      {t(locale, 'search.ask')}
    </button>
  </form>

  <div class="max-h-[min(70vh,560px)] overflow-y-auto px-5 py-4">
    {#if state === 'error'}
      <p class="py-6 text-center text-sm text-muted">{t(locale, rateLimited ? 'search.busy' : 'search.error')}</p>
    {:else if answer || state === 'asking'}
      <p class="mb-2 font-mono text-[11.5px] uppercase tracking-wider text-faint">{t(locale, 'search.answer')}</p>
      <p class="whitespace-pre-line text-[15.5px] leading-relaxed text-ink" aria-live="polite">
        {plain(answer)}{#if state === 'asking'}<span class="ml-0.5 inline-block h-4 w-[2px] animate-pulse bg-accent align-middle"></span>{/if}
      </p>

      {#if sources.length}
        <p class="mt-5 mb-2 font-mono text-[11.5px] uppercase tracking-wider text-faint">{t(locale, 'search.sources')}</p>
        <ul class="flex flex-wrap gap-2">
          {#each sources as s (s.url)}
            <li>
              <a href={s.url} class="inline-block rounded border border-accent-border bg-accent-bg px-2.5 py-1 text-[13px] text-accent hover:bg-accent hover:text-white">
                {s.title}
              </a>
            </li>
          {/each}
        </ul>
      {/if}

      {#if answer && state !== 'asking'}
        <p class="mt-5 border-t border-line-soft pt-3 text-[12.5px] leading-relaxed text-faint">
          {t(locale, 'search.disclaimer')}
        </p>
      {/if}
    {:else if hits.length}
      <p class="mb-2 font-mono text-[11.5px] uppercase tracking-wider text-faint">{t(locale, 'search.pages')}</p>
      <ul class="divide-y divide-line-soft">
        {#each hits as h (h.url)}
          <li>
            <a href={h.url} class="block py-3 transition-colors hover:bg-card">
              <span class="block text-[15.5px] font-medium text-ink">{h.title}</span>
              {#if h.description}
                <span class="mt-0.5 block line-clamp-2 text-[13.5px] leading-relaxed text-muted">{h.description}</span>
              {/if}
            </a>
          </li>
        {/each}
      </ul>
    {:else if state === 'searching'}
      <p class="py-6 text-center text-sm text-muted">…</p>
    {:else if query.trim().length >= 3}
      <p class="py-6 text-center text-sm text-muted">{t(locale, 'search.empty')}</p>
    {:else}
      <p class="py-6 text-center text-sm text-muted">{t(locale, 'search.hint')}</p>
    {/if}
  </div>
</dialog>
