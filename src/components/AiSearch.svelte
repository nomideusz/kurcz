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
          'Co robić przy nagłym skurczu?',
          'Skurcze łydek w nocy',
          'Niedobór magnezu i minerałów',
          'Bezpieczna ulga w ciąży',
          'Elektrolity a kurcze mięśni',
        ]
  );
</script>

<svelte:window onkeydown={onWindowKey} />

{#snippet spinner()}
  <svg class="h-4 w-4 shrink-0 animate-spin text-accent" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" opacity="0.25" />
    <path d="M22 12a10 10 0 0 0-10-10" stroke="currentColor" stroke-width="3" stroke-linecap="round" />
  </svg>
{/snippet}

<button
  type="button"
  onclick={open}
  aria-label={t(locale, 'search.open')}
  class="group inline-flex h-[38px] cursor-pointer items-center justify-center gap-2 rounded border border-line bg-card px-3 text-sm font-medium leading-none text-ink shadow-[0_1px_2px_rgba(22,34,52,0.03)] transition-all hover:border-accent hover:bg-accent-bg/40 focus:outline-none focus:ring-2 focus:ring-accent"
>
  <svg class="h-4 w-4 text-faint transition-colors group-hover:text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
  </svg>
  <span class="hidden sm:inline text-body group-hover:text-ink">{t(locale, 'search.open')}</span>
  <kbd class="hidden md:inline-flex items-center rounded border border-line-soft bg-paper px-1.5 py-0.5 font-mono text-[10px] text-faint shadow-xs">⌘K</kbd>
</button>

<dialog
  bind:this={dialog}
  onclose={() => { query = ''; hits = []; answer = ''; sources = []; state = 'idle'; rateLimited = false; }}
  onclick={(e) => { if (e.target === dialog) close(); }}
  aria-label={t(locale, 'search.open')}
  class="fixed inset-x-0 top-[8vh] sm:top-[12vh] mx-auto w-[min(94vw,660px)] rounded-2xl border border-line bg-card p-0 text-body shadow-2xl backdrop:bg-ink/60 backdrop:backdrop-blur-sm"
>
  <form onsubmit={onFormSubmit} class="flex items-center gap-3 border-b border-line bg-paper/60 px-5 py-4">
    <svg class="h-5 w-5 shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true">
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
      class="min-w-0 flex-1 bg-transparent text-[16px] text-ink outline-none placeholder:text-muted/70"
    />
    {#if query}
      <button
        type="button"
        onclick={() => { query = ''; hits = []; answer = ''; sources = []; state = 'idle'; }}
        class="cursor-pointer text-xs font-mono text-faint hover:text-ink"
        aria-label="Wyczyść"
      >
        ✕
      </button>
    {/if}
    <button
      type="submit"
      disabled={query.trim().length < 3 || state === 'asking'}
      class="shrink-0 cursor-pointer rounded-lg bg-accent px-3.5 py-2 text-sm font-medium leading-none text-white shadow-xs transition-all hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-40"
    >
      {t(locale, 'search.ask')}
    </button>
  </form>


  <div class="max-h-[min(72vh,580px)] overflow-y-auto px-5 py-5">
    {#if state === 'error'}
      <div class="rounded-xl border border-red-200 bg-red-50/60 p-5 text-center text-sm text-red-800">
        <p class="font-medium">{t(locale, rateLimited ? 'search.busy' : 'search.error')}</p>
      </div>
    {:else if answer || state === 'asking'}
      <div class="mb-3 flex items-center justify-between">
        <p class="font-mono text-[11.5px] uppercase tracking-wider text-accent font-medium">{t(locale, 'search.answer')}</p>
        <span class="rounded-full bg-accent-bg px-2.5 py-0.5 font-mono text-[10.5px] text-accent">AI Search</span>
      </div>

      {#if waitingForFirstToken}
        <div class="flex items-center gap-2.5 py-2 text-sm text-muted">
          {@render spinner()}
          <span>{t(locale, 'search.thinking')}</span>
        </div>
        <!-- skeleton keeps the dialog from collapsing while retrieval runs -->
        <div class="mt-4 space-y-2.5" aria-hidden="true">
          <div class="h-3.5 w-full animate-pulse rounded-md bg-line-soft"></div>
          <div class="h-3.5 w-[92%] animate-pulse rounded-md bg-line-soft"></div>
          <div class="h-3.5 w-[70%] animate-pulse rounded-md bg-line-soft"></div>
        </div>
      {/if}

      <div class="rounded-xl border border-line-soft bg-paper p-4">
        <p class="whitespace-pre-line text-[15.5px] leading-relaxed text-ink" aria-live="polite" aria-busy={state === 'asking'}>
          {plain(answer)}{#if state === 'asking' && answer}<span class="ml-0.5 inline-block h-4 w-[2px] animate-pulse bg-accent align-middle"></span>{/if}
        </p>
      </div>

      {#if sources.length}
        <p class="mt-5 mb-2 font-mono text-[11.5px] uppercase tracking-wider text-faint">{t(locale, 'search.sources')}</p>
        <ul class="flex flex-wrap gap-2">
          {#each sources as s (s.url)}
            <li>
              <a href={s.url} class="inline-flex items-center gap-1.5 rounded-md border border-accent-border bg-accent-bg px-2.5 py-1 text-[13px] font-medium text-accent transition-colors hover:bg-accent hover:text-white">
                <svg class="h-3.5 w-3.5 flex-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                </svg>
                <span>{s.title}</span>
              </a>
            </li>
          {/each}
        </ul>
      {/if}

      {#if answer && state !== 'asking'}
        <p class="mt-5 flex items-start gap-2 border-t border-line-soft pt-3 text-[12px] leading-relaxed text-faint">
          <svg class="mt-0.5 h-3.5 w-3.5 flex-none text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
            <path d="M12 2v20" />
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            <circle cx="12" cy="2" r="1" />
          </svg>
          <span>{t(locale, 'search.disclaimer')}</span>
        </p>
      {/if}
    {:else if hits.length}
      <p class="mb-2 font-mono text-[11.5px] uppercase tracking-wider text-faint">{t(locale, 'search.pages')}</p>
      <ul class="divide-y divide-line-soft">
        {#each hits as h (h.url)}
          <li>
            <a href={h.url} class="block rounded-lg p-3 transition-colors hover:bg-paper">
              <span class="block text-[15.5px] font-semibold text-ink">{h.title}</span>
              {#if h.description}
                <span class="mt-1 block line-clamp-2 text-[13.5px] leading-relaxed text-muted">{h.description}</span>
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
      <div class="py-8 text-center text-sm text-muted">
        <p>{t(locale, 'search.empty')}</p>
        <p class="mt-1 text-xs text-faint">{locale === 'en' ? 'Try asking a full question with the Ask button.' : 'Możesz też zadać pytanie i kliknąć „Zapytaj”.'}</p>
      </div>
    {:else}
      <!-- Empty state with prompt suggestions -->
      <div class="py-2">
        <p class="mb-3 font-mono text-[11.5px] uppercase tracking-wider text-faint">
          {locale === 'en' ? 'Quick topics:' : 'Częste pytania i tematy:'}
        </p>
        <div class="flex flex-wrap gap-2">
          {#each promptSuggestions as prompt}
            <button
              type="button"
              onclick={() => selectPrompt(prompt)}
              class="inline-flex cursor-pointer items-center gap-1.5 rounded-lg border border-line bg-paper px-3 py-2 text-left text-xs font-medium text-ink transition-all hover:border-accent-border hover:bg-accent-bg hover:text-accent"
            >

              <span>{prompt}</span>
              <span class="text-accent/60" aria-hidden="true">→</span>
            </button>
          {/each}
        </div>
        <p class="mt-5 text-center font-mono text-xs text-faint">
          {t(locale, 'search.hint')}
        </p>
      </div>
    {/if}
  </div>
</dialog>

