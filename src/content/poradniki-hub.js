import { getLandingPage } from './landing-pages.js';

export const poradnikiHubPath = '/poradniki';

const categoryDefinitions = [
  {
    title: { pl: 'Kurcze według lokalizacji i sytuacji', en: 'Cramps by Location & Context' },
    description: {
      pl: 'Dolegliwości w konkretnych partiach ciała oraz w charakterystycznych okolicznościach — noc, sport, ciąża, starzenie.',
      en: 'Muscle cramps in specific body areas and situations — night, sports, pregnancy, aging.',
    },
    paths: [
      '/kurcze-nog',
      '/kurcze-lydek',
      '/kurcze-stop',
      '/kurcze-nocne',
      '/kurcze-u-sportowcow',
      '/kurcze-u-kobiet-w-ciazy',
      '/kurcze-u-osob-starszych',
      '/kurcze-u-diabetykow',
    ],
  },
  {
    title: { pl: 'Przyczyny i czynniki ryzyka', en: 'Causes & Risk Factors' },
    description: {
      pl: 'Co może wywoływać kurcze mięśniowe — niedobory minerałów, odwodnienie i wpływ leków.',
      en: 'What causes muscle cramps — mineral deficiencies, dehydration, and medication side effects.',
    },
    paths: ['/niedobor-magnezu', '/kurcze-a-odwodnienie', '/kurcze-a-leki'],
  },
  {
    title: { pl: 'Metody ulgi i profilaktyki', en: 'Relief & Prevention Methods' },
    description: {
      pl: 'Praktyczne techniki rozciągania, masażu oraz bezpieczna suplementacja magnezem.',
      en: 'Practical stretching techniques, therapeutic massage, and magnesium supplementation.',
    },
    paths: ['/rozciaganie-przy-kurczach', '/masaz-przy-kurczach', '/suplementacja-magnezem'],
  },
];

function toGuideCard(path, locale = 'pl') {
  const page = getLandingPage(path, locale);
  if (!page) {
    return null;
  }

  return {
    path: page.path,
    title: page.h1.split(' — ')[0] ?? page.h1,
    description: page.description,
  };
}

export function getPoradnikiCategories(locale = 'pl') {
  return categoryDefinitions.map((category) => ({
    title: category.title[locale] ?? category.title.pl,
    description: category.description[locale] ?? category.description.pl,
    guides: category.paths.map((p) => toGuideCard(p, locale)).filter(Boolean),
  }));
}

export const poradnikiHub = {
  path: poradnikiHubPath,
  h1: 'Poradniki o kurczach mięśniowych',
  title: 'Poradniki o kurczach mięśniowych — praktyczne artykuły | Kurcz.pl',
  description: 'Przegląd poradników Kurcz.pl: kurcze łydek i stóp, kurcze nocne, niedobór magnezu, rozciąganie, masaż i profilaktyka dla sportowców, kobiet w ciąży i seniorów.',
  breadcrumbLabel: 'Poradniki',
  intro:
    'Zebraliśmy praktyczne artykuły pod konkretne pytania o kurcze mięśniowe — od bolesnych skurczów łydek w nocy po profilaktykę u sportowców. Wybierz temat i poznaj przyczyny, pierwszą pomoc oraz sposoby zapobiegania nawrotom.',
  categories: getPoradnikiCategories('pl'),
};

export const poradnikiHubEn = {
  path: poradnikiHubPath,
  h1: 'Muscle Cramp Guides',
  title: 'Muscle Cramp Guides — Practical Articles | Kurcz.pl',
  description: 'Overview of Kurcz.pl guides: leg and foot cramps, night cramps, magnesium deficiency, stretching, massage, and prevention.',
  breadcrumbLabel: 'Guides',
  intro:
    'Practical guides answering common questions about muscle cramps — from painful nighttime calf cramps to athletic prevention. Choose a topic below to discover causes, first aid, and prevention.',
  categories: getPoradnikiCategories('en'),
};

export function getPoradnikiHub(locale = 'pl') {
  if (locale === 'en') {
    return {
      ...poradnikiHubEn,
      categories: getPoradnikiCategories('en'),
    };
  }
  return {
    ...poradnikiHub,
    categories: getPoradnikiCategories('pl'),
  };
}

export const poradnikiHubRoute = {
  path: poradnikiHubPath,
  type: 'hub',
  h1: poradnikiHub.h1,
  breadcrumbLabel: poradnikiHub.breadcrumbLabel,
  title: poradnikiHub.title,
  description: poradnikiHub.description,
  ogImage: 'https://kurcz.pl/og-image.jpg',
  priority: 0.88,
  changefreq: 'weekly',
};
