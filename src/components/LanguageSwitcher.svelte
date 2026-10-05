<script lang="ts">
  import { routing, localeLabels, extractLocale, localizeHref, type SupportedLocale, LOCALES } from '../i18n/config';

  let {
    currentPath = '/',
    currentLocale = 'pl',
  }: {
    currentPath?: string;
    currentLocale?: SupportedLocale;
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

  // Header and footer both sit on the green label.
  const buttonClass = 'inline-flex h-10 cursor-pointer items-center justify-center gap-1.5 rounded-full border border-on-label/60 px-3 text-sm font-bold leading-none text-on-label transition-colors hover:bg-label-deep';

  const menuClass = 'absolute right-0 top-full z-50 mt-1.5 w-32 overflow-hidden rounded-[var(--radius-label)] bg-sheet py-1 shadow-[0_8px_24px_rgb(8_67_47/0.25)]';

  function optionClass(loc: SupportedLocale) {
    return `flex w-full cursor-pointer items-center justify-between px-3 py-2 text-left text-sm text-ink transition-colors hover:bg-wash ${
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

    <span class="leading-none">{currentLocale.toUpperCase()}</span>
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
            <svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>
          {/if}
        </button>
      {/each}
    </div>
  {/if}
</div>
