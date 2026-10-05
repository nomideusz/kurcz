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
      rateLimited = /rate limit|neuron|allocation/i.test((e as Error).message);
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
      // Generation runs on the account's Workers AI allocation; once that is spent the
      // endpoint answers 429 with a bare {message} instead of the usual {errors:[...]}.
      if (res.status === 429) {
        rateLimited = true;
        throw new Error('rate limited');
      }
      if (!res.ok || !res.body) throw new Error(String(res.status));
      // Same 200-but-failed case as /search: errors arrive as JSON, not as a stream.
      if (!res.headers.get('content-type')?.includes('event-stream')) {
        const json = await res.json().catch(() => null);
        throw new Error(json?.errors?.[0]?.message ?? json?.message ?? 'ask failed');
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
      rateLimited = /rate limit|neuron|allocation/i.test((e as Error).message);
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

  // Retrieval runs before the first token, so an ask sits silent for a second or two.
  const waitingForFirstToken = $derived(state === 'asking' && answer === '');
  function selectPrompt(prompt: string) {
    query = prompt;
    ask();
  }

  const promptSuggestions = $derived(
    locale === 'en'
      ? [
          'What to do during a sudden cramp?',
          'Night calf cramps causes & relief',
          'Magnesium deficiency symptoms',
          'Safe cramp relief in pregnancy',
          'Electrolytes for muscle cramps',
        ]
      : [
          'Co robić przy nagłym kurczu?',
          'Skurcze łydek w nocy',
          'Niedobór magnezu i minerałów',
          'Bezpieczna ulga w ciąży',
          'Elektrolity a kurcze mięśni',
        ]
  );
</script>

<svelte:window onkeydown={onWindowKey} />

{#snippet spinner()}
  <svg class="h-4 w-4 shrink-0 animate-spin text-label" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" opacity="0.2" />
    <path d="M22 12a10 10 0 0 0-10-10" stroke="currentColor" stroke-width="3" />
  </svg>
{/snippet}

<button
  type="button"
  onclick={open}
  aria-label={t(locale, 'search.open')}
  class="inline-flex h-10 cursor-pointer items-center justify-center gap-2 rounded-full border border-on-label/60 px-3 text-sm leading-none text-on-label transition-colors hover:bg-label-deep"
>
  <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.2" aria-hidden="true">
    <path stroke-linecap="round" stroke-linejoin="round" d="M20 20l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
  </svg>
  <span class="hidden xl:inline">{t(locale, 'search.open')}</span>
  <kbd class="hidden items-center rounded border border-on-label/40 px-1 py-0.5 font-mono text-[0.6875rem] text-on-label-soft xl:inline-flex">⌘K</kbd>
</button>

<dialog
  bind:this={dialog}
  onclose={() => { query = ''; hits = []; answer = ''; sources = []; state = 'idle'; rateLimited = false; }}
  onclick={(e) => { if (e.target === dialog) close(); }}
  aria-label={t(locale, 'search.open')}
  class="fixed inset-x-0 top-[6vh] mx-auto w-[min(94vw,680px)] overflow-hidden rounded-[var(--radius-label)] bg-sheet p-0 text-body shadow-[0_18px_48px_rgb(8_67_47/0.35)] backdrop:bg-label-deep/60 sm:top-[11vh]"
>
  <div class="h-2 bg-label" aria-hidden="true"></div>
  <form onsubmit={onFormSubmit} class="flex items-center gap-3 border-b border-rule px-4 py-3.5 sm:px-5">
    <svg class="h-5 w-5 shrink-0 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.2" aria-hidden="true">
      <path stroke-linecap="round" stroke-linejoin="round" d="M20 20l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
    </svg>
    <input
      bind:this={input}
      bind:value={query}
      oninput={onInput}
      type="search"
      autocomplete="off"
      placeholder={t(locale, 'search.placeholder')}
      aria-label={t(locale, 'search.placeholder')}
      class="min-w-0 flex-1 bg-transparent text-[1.0625rem] text-ink outline-none"
    />
    {#if query}
      <button
        type="button"
        onclick={() => { query = ''; hits = []; answer = ''; sources = []; state = 'idle'; }}
        class="inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-muted hover:bg-wash hover:text-ink"
        aria-label={t(locale, 'search.clear')}
      >
        <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
      </button>
    {/if}
    <button
      type="submit"
      disabled={query.trim().length < 3 || state === 'asking'}
      class="btn-solid min-h-10 shrink-0 px-4 text-sm disabled:cursor-not-allowed disabled:bg-[#7d958a]"
    >
      {t(locale, 'search.ask')}
    </button>
  </form>

  <div class="max-h-[min(72vh,580px)] overflow-y-auto px-4 py-5 sm:px-5">
    {#if state === 'error'}
      <div class="flex items-start gap-3 rounded-[var(--radius-label)] border-2 border-warn bg-warn-wash p-4 text-sm text-ink">
        <svg class="mt-0.5 h-5 w-5 flex-none" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5 1.5 21h21L12 2.5z" fill="var(--color-warn)" /><path d="M12 9v5.5" stroke="#fff" stroke-width="2.4" /><rect x="10.8" y="16.4" width="2.4" height="2.4" fill="#fff" /></svg>
        <p class="font-bold">{t(locale, rateLimited ? 'search.busy' : 'search.error')}</p>
      </div>
    {:else if answer || state === 'asking'}
      <div class="mb-3 flex items-center justify-between border-b border-rule pb-2">
        <h2 class="tag">{t(locale, 'search.answer')}</h2>
        <span class="rounded-full bg-label px-2.5 py-0.5 text-xs font-bold text-on-label">AI Search</span>
      </div>

      {#if waitingForFirstToken}
        <div class="flex items-center gap-2.5 py-2 text-sm text-muted">
          {@render spinner()}
          <span>{t(locale, 'search.thinking')}</span>
        </div>
        <!-- skeleton keeps the dialog from collapsing while retrieval runs -->
        <div class="mt-4 space-y-2.5" aria-hidden="true">
          <div class="h-3.5 w-full animate-pulse bg-panel"></div>
          <div class="h-3.5 w-[92%] animate-pulse bg-panel"></div>
          <div class="h-3.5 w-[70%] animate-pulse bg-panel"></div>
        </div>
      {/if}

      <p class="max-w-[68ch] whitespace-pre-line text-[1.0625rem] leading-relaxed text-ink" aria-live="polite" aria-busy={state === 'asking'}>
        {plain(answer)}{#if state === 'asking' && answer}<span class="ml-0.5 inline-block h-4 w-[2px] animate-pulse bg-label align-middle"></span>{/if}
      </p>

      {#if sources.length}
        <h3 class="tag mb-2 mt-6">{t(locale, 'search.sources')}</h3>
        <ul class="flex flex-col border-t border-rule">
          {#each sources as s (s.url)}
            <li class="border-b border-rule">
              <a href={s.url} class="flex items-center justify-between gap-3 py-2.5 text-[0.9375rem] font-bold text-ink hover:bg-wash">
                <span>{s.title}</span>
                <svg class="h-4 w-4 flex-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 12h15M13 6l6 6-6 6" /></svg>
              </a>
            </li>
          {/each}
        </ul>
      {/if}

      {#if answer && state !== 'asking'}
        <p class="mt-5 rounded-[10px] bg-panel p-3 text-sm leading-relaxed text-muted">
          {t(locale, 'search.disclaimer')}
        </p>
      {/if}
    {:else if hits.length}
      <h2 class="tag mb-2">{t(locale, 'search.pages')}</h2>
      <ul class="border-t border-rule">
        {#each hits as h (h.url)}
          <li class="border-b border-rule">
            <a href={h.url} class="block px-1 py-3 transition-colors hover:bg-wash">
              <span class="block font-head text-lg font-bold leading-snug text-ink">{h.title}</span>
              {#if h.description}
                <span class="mt-1 block line-clamp-2 text-sm leading-relaxed text-muted">{h.description}</span>
              {/if}
            </a>
          </li>
        {/each}
      </ul>
    {:else if state === 'searching'}
      <div class="flex items-center justify-center gap-2.5 py-8 text-sm text-muted">
        {@render spinner()}
        <span>{t(locale, 'search.searching')}</span>
      </div>
    {:else if query.trim().length >= 3}
      <div class="py-8 text-center text-[0.9375rem] text-ink">
        <p>{t(locale, 'search.empty')}</p>
        <p class="mt-1 text-sm text-muted">{locale === 'en' ? 'Try asking a full question with the Ask button.' : 'Możesz też zadać pytanie i kliknąć „Zapytaj”.'}</p>
      </div>
    {:else}
      <!-- Empty state with prompt suggestions -->
      <div>
        <h2 class="tag mb-2">{locale === 'en' ? 'Quick topics' : 'Częste pytania i tematy'}</h2>
        <ul class="border-t border-rule">
          {#each promptSuggestions as prompt}
            <li class="border-b border-rule">
              <button
                type="button"
                onclick={() => selectPrompt(prompt)}
                class="flex w-full cursor-pointer items-center justify-between gap-3 px-1 py-2.5 text-left text-[0.9375rem] text-ink transition-colors hover:bg-wash"
              >
                <span>{prompt}</span>
                <svg class="h-4 w-4 flex-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 12h15M13 6l6 6-6 6" /></svg>
              </button>
            </li>
          {/each}
        </ul>
        <p class="mt-4 text-sm text-muted">
          {t(locale, 'search.hint')}
        </p>
      </div>
    {/if}
  </div>
</dialog>
