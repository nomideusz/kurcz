// Reading time, ~200 words a minute. The article meta line and the composition-table
// rows both read it, so a guide shows the same minutes everywhere.
import { getTopicPageContent } from '../content/topic-pages.js';
import { getLandingPage } from '../content/landing-pages.js';
import { extractLocale } from '../i18n/config.ts';

export function readMinutes(intro = '', sections: any[] = []) {
  const words = (intro + ' ' + sections.map((s) => `${s.heading ?? ''} ${s.body ?? ''} ${(s.bullets ?? []).join(' ')}`).join(' '))
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(2, Math.round(words / 200));
}

/** Minutes for an internal guide href in any locale; undefined for pages without article content. */
export function guideMinutes(href: string) {
  const { locale, pathname } = extractLocale(href);
  const page = getTopicPageContent(pathname, locale) ?? getLandingPage(pathname, locale);
  return page?.sections?.length ? readMinutes(page.intro ?? '', page.sections) : undefined;
}
