<script lang="ts">
  import { routing, localeLabels, extractLocale, localizeHref, type SupportedLocale, LOCALES } from '../i18n/config';

  let {
    currentPath = '/',
    currentLocale = 'pl',
    variant = 'light',
  }: {
    currentPath?: string;
    currentLocale?: SupportedLocale;
    /** `light` = on paper (header). `spot` = on the saffron footer. */
    variant?: 'light' | 'spot';
  } = $props();

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

  // Both variants are ink on their ground; `spot` (footer, on saffron) hovers to ink.
  const buttonClass = $derived(`inline-flex h-10 cursor-pointer items-center justify-center gap-1.5 rounded-xs border border-ink px-3 text-sm font-bold leading-none text-ink transition-colors ${
    variant === 'spot' ? 'hover:bg-ink hover:text-spot' : 'hover:bg-spot-wash'
  }`);

  const menuClass = 'absolute right-0 top-full z-50 mt-1 w-28 border border-ink bg-sheet py-1';

  function optionClass(loc: SupportedLocale) {
    return `flex w-full cursor-pointer items-center justify-between px-3 py-2 text-left text-sm text-ink transition-colors hover:bg-spot-wash ${
      loc === currentLocale ? 'font-bold' : ''
    }`;
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

<div class="lang-switcher-container relative inline-flex items-center text-left">
  <button
    type="button"
    onclick={toggleOpen}
    aria-haspopup="listbox"
    aria-expanded={isOpen}
    aria-label="Wybierz język / Select language"
    class={buttonClass}
  >

    <span class="uppercase tracking-wide leading-none">{currentLocale}</span>
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
    <div role="listbox" class={menuClass}>
      {#each LOCALES as loc}
        <button
          type="button"
          role="option"
          aria-selected={loc === currentLocale}
          onclick={() => selectLocale(loc)}
          class={optionClass(loc)}
        >
          <span>{localeLabels[loc] ?? loc.toUpperCase()}</span>
          {#if loc === currentLocale}
            <svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" aria-hidden="true"><path stroke-linecap="square" d="M5 13l4 4L19 7" /></svg>
          {/if}
        </button>
      {/each}
    </div>
  {/if}
</div>
