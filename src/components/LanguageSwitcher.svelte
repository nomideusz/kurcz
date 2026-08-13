<script lang="ts">
  import { routing, localeLabels, extractLocale, localizeHref, type SupportedLocale, LOCALES } from '../i18n/config';

  let {
    currentPath = '/',
    currentLocale = 'pl',
    variant = 'light',
  }: {
    currentPath?: string;
    currentLocale?: SupportedLocale;
    /** `light` = dark ink on paper (header). `dark` = light controls on navy (footer). */
    variant?: 'light' | 'dark';
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

  const buttonClass =
    variant === 'dark'
      ? 'inline-flex h-[38px] cursor-pointer items-center justify-center gap-1.5 rounded border border-[#2c3a52] bg-[#142030] px-3 text-sm font-medium leading-none text-[#f4efe6] transition-all hover:border-accent-light hover:bg-[#1c2c42] hover:text-white focus:outline-none focus:ring-2 focus:ring-accent-light'
      : 'inline-flex h-[38px] cursor-pointer items-center justify-center gap-1.5 rounded border border-line bg-card px-3 text-sm font-medium leading-none text-ink shadow-[0_1px_2px_rgba(22,34,52,0.03)] transition-all hover:border-accent hover:bg-accent-bg/40 focus:outline-none focus:ring-2 focus:ring-accent';

  const menuClass =
    variant === 'dark'
      ? 'absolute right-0 top-full mt-1.5 w-24 rounded-lg border border-[#2c3a52] bg-[#142030] py-1 shadow-xl z-50'
      : 'absolute right-0 top-full mt-1.5 w-24 rounded-lg border border-line bg-card py-1 shadow-xl z-50';

  function optionClass(loc: SupportedLocale) {
    if (variant === 'dark') {
      return `flex w-full cursor-pointer items-center justify-between px-3 py-1.5 text-xs font-mono font-medium transition-colors hover:bg-[#1c2c42] hover:text-white text-left ${
        loc === currentLocale ? 'font-bold text-accent-light' : 'text-[#d9dce2]'
      }`;
    }
    return `flex w-full cursor-pointer items-center justify-between px-3 py-1.5 text-xs font-mono font-medium transition-colors hover:bg-accent-bg hover:text-accent text-left ${
      loc === currentLocale ? 'font-bold text-accent' : 'text-ink'
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
            <span class={variant === 'dark' ? 'text-accent-light' : 'text-accent'}>✓</span>
          {/if}
        </button>
      {/each}
    </div>
  {/if}
</div>
