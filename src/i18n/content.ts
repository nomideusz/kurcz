import type { SupportedLocale } from './config.js';

export const localizedRouteMeta: Record<string, Record<SupportedLocale, { h1?: string; title?: string; description?: string; breadcrumbLabel?: string; ogTitle?: string }>> = {
  '/': {
    pl: {
      h1: 'Co robić, gdy złapie kurcz mięśnia.',
      breadcrumbLabel: 'Strona główna',
      title: 'Kurcze mięśniowe - przyczyny, objawy i skuteczne leczenie | Kurcz.pl',
      description: 'Dowiedz się wszystkiego o kurczach mięśniowych. Poznaj najczęstsze przyczyny, skuteczne metody leczenia, pierwszą pomoc, wibroakustykę i profilaktykę.',
      ogTitle: 'Kurcze mięśniowe - przyczyny i szybka ulga | Kurcz.pl',
    },
    en: {
      h1: 'What to do when muscle cramp strikes.',
      breadcrumbLabel: 'Home',
      title: 'Muscle Cramps - Causes, Symptoms & Effective Relief | Kurcz.pl',
      description: 'Learn everything about muscle cramps. Discover common causes, effective treatment methods, first aid, vibroacoustics, and prevention.',
      ogTitle: 'Muscle Cramps - Causes and Fast Relief | Kurcz.pl',
    },
  },
  '/kurcze-miesniowe': {
    pl: {
      h1: 'Kurcze mięśniowe — przyczyny, objawy i leczenie',
      breadcrumbLabel: 'Kurcze mięśniowe',
      title: 'Kurcze mięśniowe — przyczyny, objawy i leczenie | Kurcz.pl',
      description: 'Poznaj medyczne podłoże kurczy mięśniowych: najczęstsze przyczyny, objawy, czynniki ryzyka oraz sprawdzone metody leczenia i prewencji.',
    },
    en: {
      h1: 'Muscle Cramps — Causes, Symptoms & Treatment',
      breadcrumbLabel: 'Muscle Cramps',
      title: 'Muscle Cramps — Causes, Symptoms & Treatment | Kurcz.pl',
      description: 'Explore the medical background of muscle cramps: common causes, symptoms, risk factors, and proven treatment and prevention methods.',
    },
  },
  '/pierwsza-pomoc': {
    pl: {
      h1: 'Natychmiastowa pomoc przy kurczach mięśniowych',
      breadcrumbLabel: 'Pierwsza pomoc',
      title: 'Pierwsza pomoc przy kurczach mięśniowych — szybka ulga | Kurcz.pl',
      description: 'Natychmiastowa pomoc przy bolesnych kurczach: techniki rozciągania, masaż, ciepło i zimno, nawodnienie oraz ćwiczenia po ustąpieniu kurczu.',
    },
    en: {
      h1: 'First Aid for Muscle Cramps',
      breadcrumbLabel: 'First Aid',
      title: 'First Aid for Muscle Cramps — Fast Relief | Kurcz.pl',
      description: 'Immediate relief for painful cramps: stretching techniques, massage, heat and cold, hydration, and post-cramp exercises.',
    },
  },
  '/profilaktyka': {
    pl: {
      h1: 'Skuteczna profilaktyka kurczy mięśniowych',
      breadcrumbLabel: 'Profilaktyka',
      title: 'Profilaktyka kurczy mięśniowych — jak zapobiegać | Kurcz.pl',
      description: 'Skuteczna profilaktyka kurczy mięśniowych: nawodnienie, dieta bogata w magnez i potas, regularne ćwiczenia rozciągające oraz zdrowe nawyki.',
    },
    en: {
      h1: 'Effective Muscle Cramp Prevention',
      breadcrumbLabel: 'Prevention',
      title: 'Muscle Cramp Prevention — How to Prevent Cramps | Kurcz.pl',
      description: 'Effective cramp prevention: hydration, diet rich in magnesium and potassium, regular stretching exercises, and healthy habits.',
    },
  },
  '/kurcz-vs-skurcz': {
    pl: {
      h1: 'Kurcz czy skurcz — na czym polega różnica?',
      breadcrumbLabel: 'Kurcz vs. skurcz',
      title: 'Kurcz czy skurcz? Różnica wyjaśniona prosto | Kurcz.pl',
      description: 'Kurcz czy skurcz — to nie to samo. Kurcz to bolesne, mimowolne napięcie mięśnia (np. łydki). Skurcz to szersze pojęcie medyczne. Sprawdź różnicę i tłumaczenie po angielsku.',
    },
    en: {
      h1: 'Cramp vs Spasm — What Is the Difference?',
      breadcrumbLabel: 'Cramp vs. Spasm',
      title: 'Cramp vs Spasm: Muscle Difference Explained | Kurcz.pl',
      description: 'Cramp vs spasm — not the same. A cramp is a sudden, painful involuntary contraction (e.g. calf). A spasm is the broader medical term. Also: cramp vs twitch.',
    },
  },
  '/wibroakustyka': {
    pl: {
      h1: 'Wibroakustyka w walce z kurczami mięśniowymi',
      breadcrumbLabel: 'Wibroakustyka',
      title: 'Wibroakustyka a kurcze mięśniowe — terapia | Kurcz.pl',
      description: 'Jak terapia wibroakustyczna pomaga przy kurczach mięśniowych? Poznaj działanie fal dźwiękowych, korzyści i nowoczesne metody profilaktyki.',
    },
    en: {
      h1: 'Vibroacoustics for Muscle Cramps',
      breadcrumbLabel: 'Vibroacoustics',
      title: 'Vibroacoustic Therapy for Muscle Cramps | Kurcz.pl',
      description: 'How vibroacoustic therapy helps relieve muscle cramps. Learn about soundwave action, benefits, and modern prevention methods.',
    },
  },
  '/joga-a-kurcze': {
    pl: {
      h1: 'Joga jako skuteczna metoda na kurcze mięśniowe',
      breadcrumbLabel: 'Joga a kurcze',
      title: 'Joga a kurcze mięśniowe — naturalna profilaktyka | Kurcz.pl',
      description: 'Regularna praktyka jogi zapobiega kurczom mięśniowym. Dowiedz się, jak asany, oddech i rozciąganie wspierają zdrowie mięśni.',
    },
    en: {
      h1: 'Yoga as an Effective Method for Muscle Cramps',
      breadcrumbLabel: 'Yoga & Cramps',
      title: 'Yoga and Muscle Cramps — Natural Prevention | Kurcz.pl',
      description: 'Regular yoga practice prevents muscle cramps. Learn how asanas, conscious breathing, and stretching support muscle health.',
    },
  },
  '/poradniki': {
    pl: {
      h1: 'Poradniki o kurczach mięśniowych',
      breadcrumbLabel: 'Poradniki',
      title: 'Poradniki o kurczach mięśniowych — praktyczne artykuły | Kurcz.pl',
      description: 'Przegląd poradników Kurcz.pl: kurcze łydek i stóp, kurcze nocne, niedobór magnezu, rozciąganie, masaż i profilaktyka.',
    },
    en: {
      h1: 'Muscle Cramp Guides',
      breadcrumbLabel: 'Guides',
      title: 'Muscle Cramp Guides — Practical Articles | Kurcz.pl',
      description: 'Overview of Kurcz.pl guides: leg and foot cramps, night cramps, magnesium deficiency, stretching, massage, and prevention.',
    },
  },
  '/faq': {
    pl: {
      h1: 'Najczęściej zadawane pytania o kurcze mięśniowe',
      breadcrumbLabel: 'FAQ',
      title: 'FAQ — najczęstsze pytania o kurcze mięśniowe | Kurcz.pl',
      description: 'Odpowiedzi na najczęstsze pytania o kurcze mięśniowe: kiedy iść do lekarza, leki, kurcze nocne, niedobory witamin.',
    },
    en: {
      h1: 'Frequently Asked Questions about Muscle Cramps',
      breadcrumbLabel: 'FAQ',
      title: 'FAQ — Frequently Asked Questions | Kurcz.pl',
      description: 'Answers to common questions about muscle cramps: when to see a doctor, medications, night cramps, and vitamin deficiencies.',
    },
  },
  '/kontakt': {
    pl: {
      h1: 'Kontakt — Kurcz.pl',
      breadcrumbLabel: 'Kontakt',
      title: 'Kontakt — Kurcz.pl',
      description: 'Skontaktuj się z zespołem Kurcz.pl. Masz pytania o kurcze mięśniowe? Napisz do nas — chętnie pomożemy.',
    },
    en: {
      h1: 'Contact — Kurcz.pl',
      breadcrumbLabel: 'Contact',
      title: 'Contact — Kurcz.pl',
      description: 'Contact the Kurcz.pl team. Have questions about muscle cramps? Write to us — we are happy to help.',
    },
  },
};

export function getLocalizedRoute(route: any, locale: SupportedLocale) {
  const overrides = localizedRouteMeta[route.path]?.[locale];
  if (!overrides) return { ...route };
  return {
    ...route,
    ...overrides,
  };
}

export function getLocalizedReliefSteps(locale: SupportedLocale) {
  if (locale === 'en') {
    return [
      { n: 1, title: 'Stretch the muscle', body: 'Gently straighten the limb and hold for 20–30 seconds while breathing deeply.' },
      { n: 2, title: 'Hydrate', body: 'Replenish electrolytes — mineralized water or an isotonic drink.' },
      { n: 3, title: 'Massage gently', body: 'Circular, gentle movements with increasing pressure until relaxed.' },
    ];
  }
  return [
    { n: 1, title: 'Rozciągnij mięsień', body: 'Delikatnie wyprostuj kończynę i przytrzymaj 20–30 sekund, oddychając głęboko.' },
    { n: 2, title: 'Nawodnij się', body: 'Uzupełnij elektrolity — woda z solą mineralną lub napój izotoniczny.' },
    { n: 3, title: 'Rozmasuj', body: 'Okrężne, delikatne ruchy z rosnącym naciskiem aż do rozluźnienia.' },
  ];
}

export function getLocalizedTopics(locale: SupportedLocale) {
  if (locale === 'en') {
    return [
      { n: '01', path: '/kurcze-miesniowe', title: 'Causes of Cramps', desc: 'Dehydration, mineral deficiencies, and strain — what really causes cramps.' },
      { n: '02', path: '/pierwsza-pomoc', title: 'First Aid', desc: 'Three steps of immediate relief, stretching, massage, and heat/cold therapy.' },
      { n: '03', path: '/profilaktyka', title: 'Prevention', desc: 'Hydration, electrolyte-rich diet, and stretching to prevent recurrence.' },
      { n: '04', path: '/kurcz-vs-skurcz', title: 'Cramp vs Spasm', desc: 'Quick answer: not synonyms — a cramp is painful lock-up; spasm is the broader medical term.' },
      { n: '05', path: '/wibroakustyka', title: 'Vibroacoustics', desc: 'Sound frequency therapy as a modern complement to cramp prevention.' },
      { n: '06', path: '/joga-a-kurcze', title: 'Yoga & Cramps', desc: 'Asanas, conscious breathing, and improved circulation for flexible muscles.' },
    ];
  }
  return [
    { n: '01', path: '/kurcze-miesniowe', title: 'Przyczyny kurczy', desc: 'Odwodnienie, niedobory minerałów i przeciążenie — co naprawdę wywołuje kurcze.' },
    { n: '02', path: '/pierwsza-pomoc', title: 'Pierwsza pomoc', desc: 'Trzy kroki natychmiastowej ulgi, rozciąganie, masaż oraz terapia ciepłem i zimnem.' },
    { n: '03', path: '/profilaktyka', title: 'Profilaktyka', desc: 'Nawodnienie, dieta bogata w elektrolity i rozciąganie, które zapobiegają nawrotom.' },
    { n: '04', path: '/kurcz-vs-skurcz', title: 'Kurcz czy skurcz?', desc: 'Szybka odpowiedź: to nie synonimy — kurcz to bolesne napięcie, skurcz szersze pojęcie medyczne.' },
    { n: '05', path: '/wibroakustyka', title: 'Wibroakustyka', desc: 'Terapia częstotliwościami dźwięku jako uzupełnienie profilaktyki kurczy.' },
    { n: '06', path: '/joga-a-kurcze', title: 'Joga a kurcze', desc: 'Asany, świadomy oddech i lepsze ukrwienie w służbie elastycznych mięśni.' },
  ];
}

export function getLocalizedDoctorSigns(locale: SupportedLocale) {
  if (locale === 'en') {
    return [
      'Cramps lasting longer than 10 minutes',
      'Frequent, recurring cramps despite prevention',
      'Swelling, redness, or severe pain',
      'Cramps occurring after injury or with other symptoms',
    ];
  }
  return [
    'Kurcze utrzymujące się ponad 10 minut',
    'Częste, nawracające mimo profilaktyki',
    'Obrzęk, zaczerwienienie lub silny ból',
    'Kurcze po urazie lub z innymi objawami',
  ];
}
