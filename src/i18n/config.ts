import type { LocaleRoutingConfig } from '@nomideusz/svelte-i18n';
import {
  createI18n,
  interpolate,
  extractLocale,
  localizeHref as baseLocalizeHref,
  alternates,
} from '@nomideusz/svelte-i18n';

import plMessages from './messages/pl.json';
import enMessages from './messages/en.json';

export const LOCALES = ['pl', 'en'] as const;
export type SupportedLocale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: SupportedLocale = 'pl';

export const routing: LocaleRoutingConfig = {
  defaultLocale: DEFAULT_LOCALE,
  supportedLocales: [...LOCALES],
};

export const localeLabels: Record<SupportedLocale, string> = {
  pl: 'PL',
  en: 'EN',
};

const messagesMap: Record<SupportedLocale, Record<string, string>> = {
  pl: plMessages,
  en: enMessages,
};

/**
 * Helper to get translation string for Astro SSR rendering.
 */
export function t(locale: SupportedLocale, key: string, params?: Record<string, string | number>): string {
  const dict = messagesMap[locale] ?? messagesMap[DEFAULT_LOCALE];
  const template = dict[key] ?? key;
  return params ? interpolate(template, params) : template;
}

export const i18n = createI18n({
  defaultLocale: DEFAULT_LOCALE,
  supportedLocales: [...LOCALES],
  loader: (loc) => messagesMap[loc as SupportedLocale] ?? plMessages,
});

export function withTrailingSlash(path: string): string {
  if (!path.startsWith('/') || path.startsWith('//')) return path;

  const match = path.match(/^([^?#]*)(.*)$/);
  const pathname = match?.[1] ?? path;
  const suffix = match?.[2] ?? '';
  if (pathname === '/' || pathname.endsWith('/') || /\.[^/]+$/.test(pathname)) {
    return path;
  }
  return `${pathname}/${suffix}`;
}

export function localizeHref(
  path: string,
  locale: string,
  config: LocaleRoutingConfig = routing,
): string {
  return withTrailingSlash(baseLocalizeHref(path, locale, config));
}

export { extractLocale, alternates, interpolate };
