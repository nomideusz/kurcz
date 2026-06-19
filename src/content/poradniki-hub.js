import { landingPages } from './landing-pages.js';

/** @typedef {{ path: string, title: string, description: string }} GuideCard */
/** @typedef {{ title: string, description: string, guides: GuideCard[] }} GuideCategory */

export const poradnikiHubPath = '/poradniki';

/** @type {{ title: string, description: string, paths: string[] }[]} */
const categoryDefinitions = [
  {
    title: 'Kurcze według lokalizacji i sytuacji',
    description: 'Dolegliwości w konkretnych partiach ciała oraz w charakterystycznych okolicznościach — noc, sport, ciąża, starzenie.',
    paths: [
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
    title: 'Przyczyny i czynniki ryzyka',
    description: 'Co może wywoływać kurcze mięśniowe — niedobory minerałów, odwodnienie i wpływ leków.',
    paths: ['/niedobor-magnezu', '/kurcze-a-odwodnienie', '/kurcze-a-leki'],
  },
  {
    title: 'Metody ulgi i profilaktyki',
    description: 'Praktyczne techniki rozciągania, masażu oraz bezpieczna suplementacja magnezem.',
    paths: ['/rozciaganie-przy-kurczach', '/masaz-przy-kurczach', '/suplementacja-magnezem'],
  },
];

function toGuideCard(path) {
  const page = landingPages.find((entry) => entry.path === path);
  if (!page) {
    return null;
  }

  return {
    path: page.path,
    title: page.h1.split(' — ')[0] ?? page.h1,
    description: page.description,
  };
}

/** @type {GuideCategory[]} */
export const poradnikiCategories = categoryDefinitions.map((category) => ({
  title: category.title,
  description: category.description,
  guides: category.paths.map(toGuideCard).filter(Boolean),
}));

export const poradnikiHub = {
  path: poradnikiHubPath,
  h1: 'Poradniki o kurczach mięśniowych',
  title: 'Poradniki o kurczach mięśniowych — praktyczne artykuły | Kurcz.pl',
  description: 'Przegląd poradników Kurcz.pl: kurcze łydek i stóp, kurcze nocne, niedobór magnezu, rozciąganie, masaż i profilaktyka dla sportowców, kobiet w ciąży i seniorów.',
  breadcrumbLabel: 'Poradniki',
  intro:
    'Zebraliśmy praktyczne artykuły pod konkretne pytania o kurcze mięśniowe — od bolesnych skurczów łydek w nocy po profilaktykę u sportowców. Wybierz temat i poznaj przyczyny, pierwszą pomoc oraz sposoby zapobiegania nawrotom.',
  categories: poradnikiCategories,
};

export function getPoradnikiHub() {
  return poradnikiHub;
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
