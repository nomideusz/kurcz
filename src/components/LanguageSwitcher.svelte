<script lang="ts">
  import { routing, localeLabels, extractLocale, localizeHref, type SupportedLocale, LOCALES } from '../i18n/config';

  let { currentPath = '/', currentLocale = 'pl' }: { currentPath?: string; currentLocale?: SupportedLocale } = $props();

  let isOpen = $state(false);
  const { pathname } = extractLocale(currentPath, routing);

  function selectLocale(nextLocale: SupportedLocale) {
    isOpen = false;
    if (nextLocale === currentLocale) return;
    const nextHref = localizeHref(pathname, nextLocale, routing);
    window.location.href = nextHref;
  }

  function toggleOpen() {
    isOpen = !isOpen;
  }

  function onKeyDown(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      isOpen = false;
    }
  }
</script>

<svelte:window
  onkeydown={onKeyDown}
  onclick={(e) => {
    const target = e.target as HTMLElement;
    if (!target.closest('.lang-switcher-container')) {
      isOpen = false;
    }
  }}
/>

<div class="lang-switcher-container relative inline-block text-left">
  <button
    type="button"
    onclick={toggleOpen}
    aria-haspopup="listbox"
    aria-expanded={isOpen}
    aria-label="Wybierz język / Select language"
    class="inline-flex h-[38px] items-center justify-center gap-1.5 rounded border border-ink px-[14px] text-sm font-medium leading-none text-ink transition-colors hover:bg-ink hover:text-paper focus:outline-none focus:ring-1 focus:ring-accent"
  >
    <span class="font-mono text-xs uppercase tracking-wider leading-none">{currentLocale}</span>
    <svg
      class="h-3.5 w-3.5 transition-transform duration-200"
      class:rotate-180={isOpen}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  </button>

  {#if isOpen}
    <div
      role="listbox"
      class="absolute right-0 mt-1.5 w-24 rounded border border-ink bg-paper py-1 shadow-md z-50"
    >
      {#each LOCALES as loc}
        <button
          type="button"
          role="option"
          aria-selected={loc === currentLocale}
          onclick={() => selectLocale(loc)}
          class="flex w-full items-center justify-between px-3 py-1.5 text-xs font-mono font-medium transition-colors hover:bg-ink hover:text-paper text-left {loc === currentLocale ? 'font-bold text-accent' : 'text-ink'}"
        >
          <span>{localeLabels[loc] ?? loc.toUpperCase()}</span>
          {#if loc === currentLocale}
            <span class="text-accent">✓</span>
          {/if}
        </button>
      {/each}
    </div>
  {/if}
</div>
