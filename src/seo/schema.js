import { getLandingPage } from '../content/landing-pages.js';
import { faqItems } from './faq-data.js';
import { getTopicFaq } from './topic-faq.js';
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from './routes.js';

export function buildOrganizationSchema() {
  return {
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/img/logo.webp`,
    sameAs: [
      'https://www.facebook.com/profile.php?id=61575552422497',
      'https://instagram.com/kurcz.pl',
    ],
    description: 'Kompendium wiedzy o kurczach mięśniowych — przyczyny, leczenie i profilaktyka.',
  };
}

export function buildWebSiteSchema() {
  return {
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description: 'Rzetelne informacje edukacyjne o kurczach mięśniowych.',
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export function buildBreadcrumbSchema(route) {
  if (route.path === '/') {
    return null;
  }

  const items = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Strona główna',
      item: SITE_URL,
    },
  ];

  if (route.hubPath && route.hubLabel) {
    items.push({
      '@type': 'ListItem',
      position: 2,
      name: route.hubLabel,
      item: `${SITE_URL}${route.hubPath}`,
    });
    items.push({
      '@type': 'ListItem',
      position: 3,
      name: route.breadcrumbLabel ?? route.h1,
      item: `${SITE_URL}${route.path}`,
    });
  } else {
    items.push({
      '@type': 'ListItem',
      position: 2,
      name: route.breadcrumbLabel ?? route.h1,
      item: `${SITE_URL}${route.path}`,
    });
  }

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

export function buildMedicalWebPageSchema(route) {
  return {
    '@type': 'MedicalWebPage',
    name: route.title,
    headline: route.h1,
    description: route.description,
    url: `${SITE_URL}${route.path}`,
    inLanguage: 'pl-PL',
    isPartOf: {
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export function buildWebPageSchema(route) {
  return {
    '@type': 'WebPage',
    name: route.title,
    headline: route.h1,
    description: route.description,
    url: `${SITE_URL}${route.path}`,
    inLanguage: 'pl-PL',
    isPartOf: {
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export function buildPageSchema(route) {
  const graphs = [buildOrganizationSchema(), buildWebSiteSchema()];

  const breadcrumb = buildBreadcrumbSchema(route);
  if (breadcrumb) {
    graphs.push(breadcrumb);
  }

  if (route.path === '/faq') {
    graphs.push(buildFAQPageSchema(faqItems));
  } else if (route.type === 'landing') {
    const landing = getLandingPage(route.path);
    if (landing?.faq?.length) {
      graphs.push(buildFAQPageSchema(landing.faq));
    }
  } else {
    const topicFaq = getTopicFaq(route.path);
    if (topicFaq?.length) {
      graphs.push(buildFAQPageSchema(topicFaq));
    }
  }

  if (route.type === 'static' || route.type === 'hub') {
    graphs.push(buildWebPageSchema(route));
  } else if (route.path !== '/') {
    graphs.push(buildMedicalWebPageSchema(route));
  }

  return graphs;
}

export function schemaToJsonLd(graphs) {
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graphs });
}

export { DEFAULT_OG_IMAGE as OG_IMAGE };
