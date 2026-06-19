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

export function getTopicFaq(path) {
  return topicFaqByPath[path] ?? null;
}
