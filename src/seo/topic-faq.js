/** FAQ specyficzne dla podstron tematycznych (schema FAQPage + treść na stronie) */
export const topicFaqByPath = {
  '/kurcze-miesniowe': [
    {
      question: 'Co to są kurcze mięśniowe?',
      answer: 'Kurcze mięśniowe to nagłe, mimowolne i zazwyczaj bolesne napięcie mięśnia. Mogą dotknąć dowolnej grupy mięśniowej, najczęściej łydek, stóp, ud lub pleców.',
    },
    {
      question: 'Jakie są najczęstsze przyczyny kurczy?',
      answer: 'Do najczęstszych przyczyn należą odwodnienie, niedobory elektrolitów (magnez, potas, wapń), przeciążenie mięśni, długotrwała pozycja statyczna oraz niektóre leki.',
    },
    {
      question: 'Czy kurcze mięśniowe są niebezpieczne?',
      answer: 'Pojedyncze, krótkotrwałe kurcze zwykle nie są groźne. Regularne, silne lub długotrwałe kurcze wymagają konsultacji lekarskiej w celu wykluczenia chorób układowych.',
    },
  ],
  '/pierwsza-pomoc': [
    {
      question: 'Co zrobić w pierwszej kolejności przy kurczu mięśnia?',
      answer: 'Przerwij aktywność, delikatnie rozciągnij mięsień w przeciwnym kierunku do kurczu, masuj bolesne miejsce i nawodnij organizm wodą z elektrolitami.',
    },
    {
      question: 'Czy stosować ciepło czy zimno przy kurczu?',
      answer: 'Przy ostrym, bolesnym kurczu pomocne może być chłodzenie przez 10–15 minut. Ciepło stosuj po ustąpieniu ostrego bólu lub przy nawracających kurczach mięśni.',
    },
    {
      question: 'Jak długo trwa typowy kurcz mięśnia?',
      answer: 'Większość kurczy trwa od kilku sekund do kilku minut. Jeśli kurcz utrzymuje się dłużej niż 10 minut mimo rozciągania, skonsultuj się z lekarzem.',
    },
  ],
  '/profilaktyka': [
    {
      question: 'Jak zapobiegać kurczom mięśniowym na co dzień?',
      answer: 'Regularne nawodnienie, dieta bogata w magnez i potas, codzienne rozciąganie, unikanie długotrwałej pozycji statycznej oraz umiarkowana aktywność fizyczna.',
    },
    {
      question: 'Czy suplementacja magnezem pomaga na kurcze?',
      answer: 'Suplementacja magnezem może pomóc osobom z niedoborem tego pierwiastka, ale zawsze powinna być poprzedzona konsultacją lekarską i nie zastępuje zbilansowanej diety.',
    },
    {
      question: 'Jak zapobiegać kurczom nocnym?',
      answer: 'Wykonuj ćwiczenia rozciągające łydek przed snem, zadbaj o luźną pościel nie uciskającą stóp i utrzymuj regularne nawodnienie w ciągu dnia.',
    },
  ],
};

export const topicFaqEnByPath = {
  '/kurcze-miesniowe': [
    {
      question: 'What are muscle cramps?',
      answer: 'Muscle cramps are sudden, involuntary, and usually painful muscle contractions. They can affect any muscle group, most commonly calves, feet, thighs, or back.',
    },
    {
      question: 'What are the most common causes of cramps?',
      answer: 'Common causes include dehydration, electrolyte imbalances (magnesium, potassium, calcium), muscle strain, prolonged static posture, and certain medications.',
    },
    {
      question: 'Are muscle cramps dangerous?',
      answer: 'Isolated, brief cramps are usually harmless. Regular, severe, or persistent cramps warrant medical evaluation to rule out systemic conditions.',
    },
  ],
  '/pierwsza-pomoc': [
    {
      question: 'What should you do first during a muscle cramp?',
      answer: 'Stop physical activity, gently stretch the muscle in the opposite direction of the contraction, massage the area, and rehydrate with electrolyte water.',
    },
    {
      question: 'Should you apply heat or cold to a cramp?',
      answer: 'For acute, severe pain, cold application for 10–15 minutes can help. Use heat after the acute pain subsides or for recurrent muscle tightness.',
    },
    {
      question: 'How long does a typical muscle cramp last?',
      answer: 'Most cramps last from a few seconds to a few minutes. If a cramp persists for longer than 10 minutes despite stretching, seek medical care.',
    },
  ],
  '/profilaktyka': [
    {
      question: 'How to prevent muscle cramps daily?',
      answer: 'Maintain proper hydration, eat a diet rich in magnesium and potassium, stretch daily, avoid prolonged static postures, and exercise moderately.',
    },
    {
      question: 'Does magnesium supplementation prevent cramps?',
      answer: 'Magnesium supplements help individuals with a documented deficiency, but should be discussed with a doctor and do not replace a balanced diet.',
    },
    {
      question: 'How to prevent night cramps?',
      answer: 'Perform calf stretches before sleep, ensure loose bedding that does not compress feet, and maintain consistent daytime hydration.',
    },
  ],
};

export function getTopicFaq(path, locale = 'pl') {
  if (locale === 'en') {
    return topicFaqEnByPath[path] ?? null;
  }
  return topicFaqByPath[path] ?? null;
}
