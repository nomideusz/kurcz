import { getLandingPage } from '../content/landing-pages.js';
import { getFaqItems } from './faq-data.js';
import { getTopicFaq } from './topic-faq.js';
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from './routes.js';

function localizedUrl(path, locale = 'pl') {
  const prefix = locale === 'en' ? '/en' : '';
  const normalizedPath = path === '/' ? '' : `/${path.replace(/^\/+|\/+$/g, '')}`;
  return `${SITE_URL}${prefix}${normalizedPath}/`;
}

function languageTag(locale) {
  return locale === 'en' ? 'en-US' : 'pl-PL';
}

export function buildOrganizationSchema(locale = 'pl') {
  return {
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/img/logo.webp`,
    sameAs: [
      'https://www.facebook.com/profile.php?id=61575552422497',
      'https://instagram.com/kurcz.pl',
    ],
    description:
      locale === 'en'
        ? 'An educational guide to muscle cramps — causes, relief, and prevention.'
        : 'Kompendium wiedzy o kurczach mięśniowych — przyczyny, leczenie i profilaktyka.',
  };
}

export function buildWebSiteSchema(locale = 'pl') {
  return {
    '@type': 'WebSite',
    name: SITE_NAME,
    url: localizedUrl('/', locale),
    inLanguage: languageTag(locale),
    description:
      locale === 'en'
        ? 'Reliable educational information about muscle cramps.'
        : 'Rzetelne informacje edukacyjne o kurczach mięśniowych.',
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export function buildBreadcrumbSchema(route, { locale = 'pl', canonicalUrl } = {}) {
  if (route.path === '/') {
    return null;
  }

  const items = [
    {
      '@type': 'ListItem',
      position: 1,
      name: locale === 'en' ? 'Home' : 'Strona główna',
      item: localizedUrl('/', locale),
    },
  ];

  const hasHub = route.hubPath && route.hubLabel;
  if (hasHub) {
    items.push({
      '@type': 'ListItem',
      position: 2,
      name: route.hubLabel,
      item: localizedUrl(route.hubPath, locale),
    });
  }
  items.push({
    '@type': 'ListItem',
    position: hasHub ? 3 : 2,
    name: route.breadcrumbLabel ?? route.h1,
    item: canonicalUrl ?? localizedUrl(route.path, locale),
  });

  return {
    '@type': 'BreadcrumbList',
    itemListElement: items,
  };
}

export function buildFAQPageSchema(items) {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function buildMedicalWebPageSchema(route, { locale = 'pl', canonicalUrl } = {}) {
  return {
    '@type': 'MedicalWebPage',
    name: route.title,
    headline: route.h1,
    description: route.description,
    url: canonicalUrl ?? localizedUrl(route.path, locale),
    inLanguage: languageTag(locale),
    author: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    isPartOf: {
      '@type': 'WebSite',
      name: SITE_NAME,
      url: localizedUrl('/', locale),
    },
  };
}

export function buildWebPageSchema(route, { locale = 'pl', canonicalUrl } = {}) {
  return {
    '@type': 'WebPage',
    name: route.title,
    headline: route.h1,
    description: route.description,
    url: canonicalUrl ?? localizedUrl(route.path, locale),
    inLanguage: languageTag(locale),
    isPartOf: {
      '@type': 'WebSite',
      name: SITE_NAME,
      url: localizedUrl('/', locale),
    },
  };
}

export function buildPageSchema(route, { locale = 'pl', canonicalUrl } = {}) {
  const options = { locale, canonicalUrl };
  const graphs = [buildOrganizationSchema(locale), buildWebSiteSchema(locale)];

  const breadcrumb = buildBreadcrumbSchema(route, options);
  if (breadcrumb) {
    graphs.push(breadcrumb);
  }

  if (route.path === '/') {
    graphs.push(buildFAQPageSchema(getFaqItems(locale).slice(0, 4)));
  } else if (route.path === '/faq') {
    graphs.push(buildFAQPageSchema(getFaqItems(locale)));
  } else if (route.type === 'landing') {
    const landing = getLandingPage(route.path, locale);
    if (landing?.faq?.length) {
      graphs.push(buildFAQPageSchema(landing.faq));
    }
  } else {
    const topicFaq = getTopicFaq(route.path, locale);
    if (topicFaq?.length) {
      graphs.push(buildFAQPageSchema(topicFaq));
    }
  }

  if (route.path === '/' || route.type === 'static' || route.type === 'hub') {
    graphs.push(buildWebPageSchema(route, options));
  } else {
    graphs.push(buildMedicalWebPageSchema(route, options));
  }

  return graphs;
}

export function schemaToJsonLd(graphs) {
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graphs });
}

export { DEFAULT_OG_IMAGE as OG_IMAGE };
