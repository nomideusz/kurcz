import type { LocaleRoutingConfig } from '@nomideusz/svelte-i18n';
import {
  createI18n,
  interpolate,
  extractLocale as baseExtractLocale,
  localizeHref as baseLocalizeHref,
  negotiateLocale,
  resolveLocale,
} from '@nomideusz/svelte-i18n';

import plMessages from './messages/pl.json';
import enMessages from './messages/en.json';
import { normalizePath, toLocalePath, toLogicalPath } from './paths.js';

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

/**
 * Extract locale and return the *logical* (Polish) pathname for content lookup.
 * EN English slugs are mapped back to PL paths.
 */
export function extractLocale(pathname: string, config: LocaleRoutingConfig = routing) {
  const extracted = baseExtractLocale(pathname, config);
  return {
    locale: extracted.locale as SupportedLocale,
    pathname: toLogicalPath(extracted.pathname),
  };
}

/**
 * Localize an internal href. Accepts a logical PL path; for EN emits English slugs.
 */
export function localizeHref(
  path: string,
  locale: string,
  config: LocaleRoutingConfig = routing,
): string {
  if (!path.startsWith('/') || path.startsWith('//')) return path;

  const match = path.match(/^([^?#]*)(.*)$/);
  const pathname = match?.[1] ?? path;
  const suffix = match?.[2] ?? '';

  const logical = toLogicalPath(pathname);
  const localizedPath = toLocalePath(logical, locale);
  const prefixed = baseLocalizeHref(localizedPath, locale, config);
  return withTrailingSlash(`${prefixed}${suffix}`);
}

/**
 * hreflang alternates using logical PL path → correct PL/EN URL forms.
 */
export function alternates(logicalPath: string, config: LocaleRoutingConfig = routing, origin: string) {
  const base = origin.replace(/\/$/, '');
  const path = normalizePath(logicalPath);
  const toAbsolute = (locale: string) => {
    const localized = localizeHref(path, locale, config);
    return `${base}${localized === '/' ? '/' : localized}`;
  };
  const links = config.supportedLocales.map((locale) => ({
    hreflang: locale,
    href: toAbsolute(locale),
  }));
  links.push({
    hreflang: 'x-default',
    href: toAbsolute(config.defaultLocale),
  });
  return links;
}

export { interpolate, negotiateLocale, resolveLocale, toLocalePath, toLogicalPath, normalizePath };
