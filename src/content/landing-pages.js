/** @typedef {{ path: string, label: string }} RelatedLink */
/** @typedef {{ question: string, answer: string }} FaqItem */
/** @typedef {{ heading: string, body: string, bullets?: string[] }} ContentSection */

/**
 * @typedef {Object} LandingPage
 * @property {string} path
 * @property {{ path: string, label: string }} hub
 * @property {string} h1
 * @property {string} title
 * @property {string} description
 * @property {string} intro
 * @property {ContentSection[]} sections
 * @property {FaqItem[]} faq
 * @property {RelatedLink[]} relatedLinks
 */

/** @type {LandingPage[]} */
export const landingPages = [
  {
    path: '/kurcze-nog',
    hub: { path: '/kurcze-miesniowe', label: 'Kurcze mięśniowe' },
    h1: 'Kurcze nóg — przyczyny, pierwsza pomoc i profilaktyka',
    title: 'Kurcze nóg — przyczyny i szybkie sposoby na ulgę | Kurcz.pl',
    description: 'Kurcze nóg — co je wywołuje i jak szybko przerwać bolesny skurcz. Przyczyny, pierwsza pomoc, profilaktyka oraz porady dla łydek, stóp i kurczy nocnych.',
    intro: 'Kurcze nóg to nagłe, mimowolne i bolesne skurcze mięśni kończyn dolnych — najczęściej łydek i stóp, ale także ud. W większości przypadków są niegroźne i szybko mijają, choć potrafią obudzić w nocy lub przerwać trening. Poniżej znajdziesz przyczyny, sprawdzoną pierwszą pomoc i profilaktykę, a także odnośniki do bardziej szczegółowych poradników.',
    sections: [
      {
        heading: 'Najczęstsze przyczyny kurczy nóg',
        body: 'Kurcze nóg najczęściej wynikają z odwodnienia i zaburzeń elektrolitowych, niedoboru minerałów oraz przeciążenia mięśni. Sprzyjają im też długa statyczna pozycja, ciąża, starszy wiek, niektóre leki i choroby przewlekłe, takie jak cukrzyca czy niewydolność żylna.',
        bullets: ['Odwodnienie i utrata elektrolitów', 'Niedobór magnezu, potasu, wapnia lub sodu', 'Przeciążenie i intensywny wysiłek bez rozgrzewki', 'Długie stanie lub siedzenie w jednej pozycji'],
      },
      {
        heading: 'Pierwsza pomoc — jak przerwać kurcz nogi',
        body: 'Przy ostrym kurczu powoli rozciągnij napięty mięsień w kierunku przeciwnym do skurczu, a następnie delikatnie go rozmasuj. Obciążenie nogi i kilka kroków często przyspiesza ustąpienie bólu. Po wszystkim uzupełnij płyny i minerały.',
        bullets: ['Rozciągnij mięsień powoli i bez gwałtownych ruchów', 'Rozmasuj bolesne miejsce', 'Wstań i delikatnie obciąż nogę', 'Nawodnij się wodą z elektrolitami'],
      },
      {
        heading: 'Kurcze nóg według lokalizacji i pory',
        body: 'Objawy i postępowanie zależą od tego, którego mięśnia dotyczy kurcz. Najczęściej skurcz obejmuje łydki, rzadziej stopy lub uda, a osobnym problemem są bolesne kurcze pojawiające się w nocy. Szczegółowe instrukcje znajdziesz w dedykowanych poradnikach.',
      },
      {
        heading: 'Profilaktyka — jak zapobiegać kurczom nóg',
        body: 'Regularne nawodnienie, dieta bogata w magnez i potas oraz codzienne rozciąganie mięśni nóg znacząco ograniczają nawroty. Wprowadzaj wysiłek stopniowo, zadbaj o wygodne obuwie i unikaj długiego bezruchu.',
        bullets: ['Pij wodę regularnie przez cały dzień', 'Jedz produkty bogate w magnez i potas', 'Rozciągaj łydki i stopy przed snem i po treningu', 'Stopniowo zwiększaj intensywność ćwiczeń'],
      },
      {
        heading: 'Kiedy zgłosić się do lekarza',
        body: 'Pojedyncze kurcze nóg zwykle nie są groźne. Skonsultuj się z lekarzem, gdy są bardzo częste lub silne, towarzyszy im osłabienie, drętwienie albo obrzęk, nie mają związku z wysiłkiem lub utrzymują się mimo profilaktyki — mogą wtedy wskazywać na zaburzenia elektrolitowe, neurologiczne lub krążeniowe.',
      },
    ],
    faq: [
      { question: 'Jak szybko pozbyć się kurczu w nodze?', answer: 'Powoli rozciągnij napięty mięsień w kierunku przeciwnym do skurczu, rozmasuj go i delikatnie obciąż nogę, stając na niej. Kurcz zwykle ustępuje w ciągu kilkudziesięciu sekund do kilku minut.' },
      { question: 'Czego brakuje organizmowi, gdy łapią kurcze nóg?', answer: 'Najczęściej wymienia się niedobór magnezu, potasu, wapnia lub sodu oraz odwodnienie. Nie zawsze jednak przyczyną jest niedobór — warto omówić nawracające kurcze z lekarzem.' },
      { question: 'Czy kurcze nóg mogą być objawem choroby?', answer: 'Zwykle są niegroźne, ale częste, silne lub niezwiązane z wysiłkiem kurcze, zwłaszcza z drętwieniem lub obrzękiem, wymagają konsultacji lekarskiej w celu wykluczenia chorób metabolicznych, neurologicznych lub żylnych.' },
    ],
    relatedLinks: [
      { path: '/kurcze-lydek', label: 'Kurcze łydek' },
      { path: '/kurcze-nocne', label: 'Kurcze nocne' },
      { path: '/niedobor-magnezu', label: 'Niedobór magnezu' },
      { path: '/pierwsza-pomoc', label: 'Pierwsza pomoc' },
    ],
  },
  {
    path: '/kurcze-lydek',
    hub: { path: '/kurcze-miesniowe', label: 'Kurcze mięśniowe' },
    h1: 'Kurcze łydek — przyczyny, pierwsza pomoc i profilaktyka',
    title: 'Kurcze łydek — jak szybko ulżyć bólowi? | Kurcz.pl',
    description: 'Bolesne kurcze łydek w nocy lub po treningu? Poznaj przyczyny, skuteczną pierwszą pomoc, techniki rozciągania i sposoby zapobiegania nawrotom.',
    intro: 'Kurcze łydek to jedna z najczęstszych dolegliwości mięśniowych. Nagłe, bolesne napięcie mięśnia brzuchaty łydki może obudzić Cię w nocy lub przerwać trening. Na szczęście w większości przypadków można szybko sobie pomóc i skutecznie zapobiegać nawrotom.',
    sections: [
      {
        heading: 'Najczęstsze przyczyny kurczy łydek',
        body: 'Kurcze łydek najczęściej wynikają z odwodnienia, niedoboru magnezu lub potasu, przeciążenia podczas biegu lub pracy na stojąco oraz długotrwałego unieruchomienia mięśnia w skróconej pozycji.',
        bullets: ['Odwodnienie i utrata elektrolitów', 'Intensywny wysiłek bez rozgrzewki', 'Niedobór magnezu, potasu lub wapnia', 'Niewłaściwe obuwie podczas treningu'],
      },
      {
        heading: 'Pierwsza pomoc przy kurczu łydki',
        body: 'Usiądź lub połóż się, delikatnie rozciągnij mięsień łydki — chwyć palce stopy i przyciągnij je w kierunku kolana. Masuj bolesny obszar i nawodnij organizm wodą z elektrolitami.',
      },
      {
        heading: 'Profilaktyka kurczy łydek',
        body: 'Regularne rozciąganie łydek przed snem i po treningu, odpowiednie nawodnienie oraz dieta bogata w magnez i potas znacząco zmniejszają ryzyko nawrotów.',
      },
    ],
    faq: [
      { question: 'Dlaczego kurcze łydek pojawiają się w nocy?', answer: 'Nocne kurcze łydek często wynikają ze skróconej pozycji stopy podczas snu, odwodnienia w ciągu dnia lub niedoborów minerałów. Rozciąganie przed snem i luźna pościel mogą pomóc.' },
      { question: 'Jak rozciągać mięsień łydki po kurczu?', answer: 'W pozycji stojącej oprzyj dłonie o ścianę, cofnij bolącą nogę do tyłu i zepnij piętę w podłoże. Utrzymuj rozciągnięcie 20–30 sekund bez gwałtownych ruchów.' },
    ],
    relatedLinks: [
      { path: '/kurcze-nog', label: 'Kurcze nóg' },
      { path: '/kurcze-nocne', label: 'Kurcze nocne' },
      { path: '/rozciaganie-przy-kurczach', label: 'Rozciąganie przy kurczach' },
      { path: '/pierwsza-pomoc', label: 'Pierwsza pomoc' },
    ],
  },
  {
    path: '/kurcze-stop',
    hub: { path: '/kurcze-miesniowe', label: 'Kurcze mięśniowe' },
    h1: 'Kurcze stóp — przyczyny i szybka ulga',
    title: 'Kurcze stóp i palców — pierwsza pomoc | Kurcz.pl',
    description: 'Kurcze mięśni stóp i palców: przyczyny, objawy, techniki rozciągania oraz profilaktyka. Dowiedz się, jak szybko ulżyć bólowi.',
    intro: 'Kurcze stóp dotyczą mięśni podeszwy, łydek oraz mięśni unoszących palce. Mogą pojawiać się nagle podczas chodzenia, pływania lub w nocy i powodować silny, ograniczający ruch ból.',
    sections: [
      {
        heading: 'Przyczyny kurczy stóp',
        body: 'Do typowych przyczyn należą niedobory elektrolitów, niewłaściwe obuwie, przeciążenie podczas sportu oraz problemy z krążeniem w kończynach dolnych.',
      },
      {
        heading: 'Co zrobić przy kurczu stopy',
        body: 'Delikatnie rozciągnij palce stopy w górę, masuj podeszwę od pięty do palców i na chwilę odpocznij. Jeśli kurcz wystąpił w wodzie — wyjdź na brzeg i wykonaj powolne rozciąganie.',
        bullets: ['Rozciągnij palce stopy w kierunku góry', 'Masuj podeszwę okrężnymi ruchami', 'Nawodnij się po ustąpieniu bólu'],
      },
    ],
    faq: [
      { question: 'Czy kurcze stóp mogą wskazywać na chorobę?', answer: 'Pojedyncze kurcze stóp zwykle nie są niepokojące. Nawracające epizody, drętwienie lub obrzęk wymagają konsultacji lekarskiej w celu wykluczenia neuropatii lub zaburzeń krążenia.' },
    ],
    relatedLinks: [
      { path: '/kurcze-nog', label: 'Kurcze nóg' },
      { path: '/kurcze-lydek', label: 'Kurcze łydek' },
      { path: '/masaz-przy-kurczach', label: 'Masaż przy kurczach' },
    ],
  },
  {
    path: '/kurcze-nocne',
    hub: { path: '/kurcze-miesniowe', label: 'Kurcze mięśniowe' },
    h1: 'Kurcze nocne — jak je zlikwidować',
    title: 'Kurcze nocne — przyczyny i skuteczne sposoby | Kurcz.pl',
    description: 'Budzisz się z bolesnym kurczem mięśnia? Poznaj przyczyny kurczy nocnych, techniki ulgi i sprawdzone metody profilaktyki przed snem.',
    intro: 'Kurcze nocne to bolesne, mimowolne skurcze mięśni występujące podczas snu — najczęściej w łydkach, stopach lub udach. Choć trwają zwykle kilkadziesiąt sekund, potrafią znacząco obniżyć jakość snu.',
    sections: [
      {
        heading: 'Dlaczego kurcze pojawiają się w nocy',
        body: 'W nocy mięśnie są w stanie spoczynku, a stopy często pozostają w zgiętej pozycji podeszwowej. Do tego dochodzą odwodnienie, niedobory minerałów i zmęczenie mięśniowe po dniu pełnym aktywności.',
      },
      {
        heading: 'Jak zapobiegać kurczom nocnym',
        body: 'Wprowadź wieczorny rytuał rozciągania, zadbaj o nawodnienie w ciągu dnia (nie tuż przed snem w nadmiarze) i rozważ suplementację magnezu po konsultacji z lekarzem.',
        bullets: ['Rozciąganie łydek i stóp przed snem', 'Luźna pościel — stopy nie powinny być uciskane', 'Regularna aktywność fizyczna w ciągu dnia', 'Unikaj ciężkich posiłków tuż przed snem'],
      },
    ],
    faq: [
      { question: 'Czy kurcze nocne są groźne?', answer: 'Większość kurczy nocnych ma łagodne podłoże. Jeśli jednak występują codziennie, są bardzo bolesne lub towarzyszy im osłabienie mięśni — skonsultuj się z lekarzem.' },
      { question: 'Czy magnez na noc pomaga na kurcze?', answer: 'Magnez może pomóc osobom z potwierdzonym niedoborem. Nie stosuj suplementów bez konsultacji z lekarzem, szczególnie przy chorobach nerek.' },
    ],
    relatedLinks: [
      { path: '/kurcze-lydek', label: 'Kurcze łydek' },
      { path: '/niedobor-magnezu', label: 'Niedobór magnezu' },
      { path: '/suplementacja-magnezem', label: 'Suplementacja magnezem' },
    ],
  },
  {
    path: '/kurcze-u-sportowcow',
    hub: { path: '/kurcze-miesniowe', label: 'Kurcze mięśniowe' },
    h1: 'Kurcze u sportowców — przyczyny i profilaktyka',
    title: 'Kurcze mięśni u sportowców — jak zapobiegać | Kurcz.pl',
    description: 'Kurcze mięśniowe u biegaczy i sportowców: odwodnienie, elektrolity, rozgrzewka i regeneracja. Praktyczne wskazówki profilaktyczne.',
    intro: 'Sportowcy — szczególnie biegacze, piłkarze i triathloniści — narażeni są na kurcze mięśniowe z powodu intensywnego wysiłku, utraty elektrolitów z potem i przeciążenia mięśni.',
    sections: [
      {
        heading: 'Przyczyny kurczy u sportowców',
        body: 'Główne czynniki to utrata sodu, potasu i magnezu z potem, niewystarczająca rozgrzewka, zmęczenie mięśniowe oraz trening w wysokiej temperaturze.',
      },
      {
        heading: 'Profilaktyka podczas treningu',
        body: 'Pij napoje izotoniczne podczas długich treningów, rozciągaj mięśnie po wysiłku i nie pomijaj rozgrzewki. Monitoruj objętość moczu — ciemny kolor sygnalizuje odwodnienie.',
        bullets: ['150–250 ml płynów co 15–20 min wysiłku', 'Rozgrzewka dynamiczna przed treningiem', 'Rozciąganie statyczne po treningu', 'Regeneracja i sen'],
      },
    ],
    faq: [
      { question: 'Czy kurcze podczas maratonu wymagają rezygnacji?', answer: 'Jeśli kurcz ustępuje po rozciąganiu i nie powraca — możesz kontynuować w wolniejszym tempie. Przy silnym bólu, obrzęku lub wielokrotnych nawrotach — przerwij i oceń stan z medykiem.' },
    ],
    relatedLinks: [
      { path: '/kurcze-a-odwodnienie', label: 'Kurcze a odwodnienie' },
      { path: '/profilaktyka', label: 'Profilaktyka kurczy' },
    ],
  },
  {
    path: '/kurcze-u-kobiet-w-ciazy',
    hub: { path: '/kurcze-miesniowe', label: 'Kurcze mięśniowe' },
    h1: 'Kurcze mięśniowe w ciąży',
    title: 'Kurcze w ciąży — przyczyny i bezpieczna ulga | Kurcz.pl',
    description: 'Kurcze łydek i nóg w ciąży: dlaczego się pojawiają, jak bezpiecznie sobie pomóc i kiedy skonsultować się z lekarzem prowadzącym.',
    intro: 'Kurcze mięśniowe w ciąży dotykają nawet połowy kobiet, głównie w trymestrze trzecim. Zmiany hormonalne, zwiększona masa ciała i ucisk na naczynia krwionośne sprzyjają ich występowaniu.',
    sections: [
      {
        heading: 'Przyczyny kurczy w ciąży',
        body: 'Do czynników ryzyka należą niedobór magnezu i wapnia, ucisk na nerwy w miednicy, odwodnienie oraz zwiększone obciążenie mięśni nóg.',
      },
      {
        heading: 'Bezpieczna pierwsza pomoc',
        body: 'Delikatnie rozciągnij mięsień łydki, masuj bolące miejsce i odpocznij z uniesionymi nogami. Unikaj suplementów bez zgody lekarza prowadzącego ciążę.',
      },
    ],
    faq: [
      { question: 'Czy kurcze w ciąży są normalne?', answer: 'Tak, kurcze łydek w ciąży są częste i zwykle niegroźne. Jeśli jednak są bardzo silne, utrzymują się długo lub towarzyszy im obrzęk — skontaktuj się z ginekologiem.' },
    ],
    relatedLinks: [
      { path: '/kurcze-lydek', label: 'Kurcze łydek' },
      { path: '/niedobor-magnezu', label: 'Niedobór magnezu' },
    ],
  },
  {
    path: '/kurcze-u-osob-starszych',
    hub: { path: '/kurcze-miesniowe', label: 'Kurcze mięśniowe' },
    h1: 'Kurcze mięśniowe u osób starszych',
    title: 'Kurcze u seniorów — przyczyny i profilaktyka | Kurcz.pl',
    description: 'Kurcze mięśni u osób starszych: czynniki ryzyka, leki, niedobory witamin i bezpieczne metody profilaktyki dla seniorów.',
    intro: 'U osób powyżej 60. roku życia kurcze mięśniowe występują częściej z powodu zmian w metabolizmie, przyjmowanych leków, zmniejszonej masy mięśniowej i gorszego nawodnienia.',
    sections: [
      {
        heading: 'Czynniki ryzyka u seniorów',
        body: 'Statyny, diuretyki, cukrzyca, choroby nerek i zmniejszona aktywność fizyczna zwiększają ryzyko kurczy mięśniowych u osób starszych.',
      },
      {
        heading: 'Profilaktyka dla seniorów',
        body: 'Regularne, łagodne ćwiczenia (spacery, tai chi, pływanie), odpowiednie nawodnienie i kontrola przyjmowanych leków u lekarza pomagają ograniczyć kurcze.',
      },
    ],
    faq: [
      { question: 'Czy kurcze u seniora wymagają badań?', answer: 'Przy nawracających kurczach warto zbadać poziom magnezu, potasu, wapnia i funkcję tarczycy. Lekarz oceni też listę przyjmowanych leków.' },
    ],
    relatedLinks: [
      { path: '/kurcze-a-leki', label: 'Kurcze a leki' },
      { path: '/profilaktyka', label: 'Profilaktyka' },
    ],
  },
  {
    path: '/kurcze-u-diabetykow',
    hub: { path: '/kurcze-miesniowe', label: 'Kurcze mięśniowe' },
    h1: 'Kurcze mięśniowe u osób z cukrzycą',
    title: 'Kurcze u diabetyków — przyczyny i leczenie | Kurcz.pl',
    description: 'Kurcze mięśni u osób z cukrzycą: neuropatia, niedobory elektrolitów, leki i bezpieczna profilaktyka. Kiedy iść do lekarza.',
    intro: 'Osoby z cukrzycą częściej doświadczają kurczy mięśniowych z powodu neuropatii cukrzycowej, zaburzeń elektrolitowych, nefropatii i niektórych leków obniżających cukier.',
    sections: [
      {
        heading: 'Związek cukrzycy z kurczami',
        body: 'Podwyższony poziom glukozy uszkadza nerwy obwodowe i naczynia krwionośne, co może prowadzić do kurczy, drętwienia i mrowienia w kończynach dolnych.',
      },
      {
        heading: 'Co robić przy kurczach',
        body: 'Rozciągaj mięsień delikatnie, kontroluj poziom cukru we krwi i nawodnienie. Każdy nawracający kurcz u diabetyka powinien być omówiony z lekarzem prowadzącym.',
      },
    ],
    faq: [
      { question: 'Czy kurcze u diabetyka zawsze oznaczają neuropatię?', answer: 'Nie zawsze, ale nawracające kurcze u diabetyka wymagają oceny neurologicznej i kontroli glikemii. Wczesna diagnostyka neuropatii pozwala spowolnić jej postęp.' },
    ],
    relatedLinks: [
      { path: '/kurcze-u-osob-starszych', label: 'Kurcze u seniorów' },
      { path: '/kontakt', label: 'Kontakt' },
    ],
  },
  {
    path: '/niedobor-magnezu',
    hub: { path: '/profilaktyka', label: 'Profilaktyka' },
    h1: 'Niedobór magnezu a kurcze mięśniowe',
    title: 'Niedobór magnezu — kurcze mięśni i objawy | Kurcz.pl',
    description: 'Czy niedobór magnezu powoduje kurcze mięśni? Poznaj objawy, źródła magnezu w diecie i kiedy rozważyć suplementację po konsultacji z lekarzem.',
    intro: 'Magnez odgrywa kluczową rolę w prawidłowym skurczu i rozluźnieniu mięśni. Jego niedobór to jedna z najczęściej wymienianych przyczyn kurczy mięśniowych.',
    sections: [
      {
        heading: 'Objawy niedoboru magnezu',
        body: 'Oprócz kurczy mięśni mogą wystąpić drżenie, zmęczenie, kołatanie serca, bezsenność i wzmożone napięcie mięśniowe.',
        bullets: ['Kurcze łydek i stóp', 'Drżenie powiek', 'Trudności ze snem', 'Drażliwość i zmęczenie'],
      },
      {
        heading: 'Źródła magnezu w diecie',
        body: 'Produkty bogate w magnez to orzechy, nasiona, ciemna czekolada, zielone warzywa liściaste, pełnoziarniste zboża i ryby.',
      },
    ],
    faq: [
      { question: 'Jak sprawdzić niedobór magnezu?', answer: 'Poziom magnezu we krwi można zbadać laboratoryjnie. Warto skonsultować wynik z lekarzem — objawy kliniczne i dieta też mają znaczenie.' },
    ],
    relatedLinks: [
      { path: '/suplementacja-magnezem', label: 'Suplementacja magnezem' },
      { path: '/profilaktyka', label: 'Profilaktyka' },
    ],
  },
  {
    path: '/kurcze-a-odwodnienie',
    hub: { path: '/profilaktyka', label: 'Profilaktyka' },
    h1: 'Kurcze mięśniowe a odwodnienie',
    title: 'Odwodnienie a kurcze mięśni — co robić | Kurcz.pl',
    description: 'Jak odwodnienie i utrata elektrolitów powodują kurcze mięśni. Dowiedz się, ile pić i jak uzupełniać minerały.',
    intro: 'Odwodnienie zaburza równowagę elektrolitową — sodu, potasu, magnezu i wapnia — co bezpośrednio wpływa na zdolność mięśni do prawidłowego kurczenia się i rozluźniania.',
    sections: [
      {
        heading: 'Jak odwodnienie wywołuje kurcze',
        body: 'Przy niedoborze wody i minerałów błony komórkowe mięśni stają się bardziej podatne na mimowolne, bolesne skurcze — szczególnie w upały i podczas wysiłku.',
      },
      {
        heading: 'Jak prawidłowo nawadniać organizm',
        body: 'Pij regularnie małe ilości wody w ciągu dnia. Przy intensywnym wysiłku lub upale sięgaj po napoje izotoniczne zamiast samej wody.',
      },
    ],
    faq: [
      { question: 'Ile wody pić, żeby uniknąć kurczy?', answer: 'Orientacyjnie 2 litry dziennie, więcej w upały i przy treningu. Słuchaj pragnienia i obserwuj kolor moczu — jasno-słomkowy to dobry znak.' },
    ],
    relatedLinks: [
      { path: '/kurcze-u-sportowcow', label: 'Kurcze u sportowców' },
      { path: '/profilaktyka', label: 'Profilaktyka' },
    ],
  },
  {
    path: '/kurcze-a-leki',
    hub: { path: '/kurcze-miesniowe', label: 'Kurcze mięśniowe' },
    h1: 'Kurcze mięśniowe a leki',
    title: 'Leki powodujące kurcze mięśni — lista | Kurcz.pl',
    description: 'Które leki mogą powodować kurcze mięśni jako skutek uboczny? Statyny, diuretyki, beta-blokery i inne. Co zrobić — konsultacja z lekarzem.',
    intro: 'Wiele powszechnie stosowanych leków może zwiększać ryzyko kurczy mięśniowych. Jeśli kurcze pojawiły się po rozpoczęciu nowej terapii — skonsultuj to z lekarzem. Nigdy nie odstawiaj leków samodzielnie.',
    sections: [
      {
        heading: 'Leki zwiększające ryzyko kurczy',
        body: 'Do grupy leków potencjalnie powodujących kurcze należą statyny, diuretyki, beta-blokery, niektóre leki psychiatryczne, doustne środki antykoncepcyjne i kortykosteroidy.',
        bullets: ['Statyny (leki na cholesterol)', 'Diuretyki (leki moczopędne)', 'Beta-blokery', 'Niektóre leki przeciwdepresyjne'],
      },
      {
        heading: 'Co zrobić, gdy podejrzewasz lek',
        body: 'Zanotuj, kiedy kurcze się pojawiły i jakie leki przyjmujesz. Umów się na wizytę u lekarza — możliwa jest zmiana dawki lub preparatu, ale decyzję podejmuje specjalista.',
      },
    ],
    faq: [
      { question: 'Czy odstawienie statyny zawsze usuwa kurcze?', answer: 'U wielu osób kurcze ustępują po zmianie leku lub dawki, ale wymaga to konsultacji z lekarzem. Nagłe odstawienie statyny bez kontroli może być niebezpieczne.' },
    ],
    relatedLinks: [
      { path: '/kurcze-u-osob-starszych', label: 'Kurcze u seniorów' },
      { path: '/faq', label: 'FAQ' },
    ],
  },
  {
    path: '/rozciaganie-przy-kurczach',
    hub: { path: '/pierwsza-pomoc', label: 'Pierwsza pomoc' },
    h1: 'Rozciąganie przy kurczach mięśniowych',
    title: 'Rozciąganie przy kurczu mięśnia — techniki | Kurcz.pl',
    description: 'Skuteczne techniki rozciągania przy kurczach łydek, ud i stóp. Instrukcja krok po kroku — bezpiecznie i bez pogarszania bólu.',
    intro: 'Rozciąganie to najskuteczniejsza metoda pierwszej pomocy przy ostrym kurczu mięśnia. Kluczowe jest powolne, kontrolowane wydłużenie mięśnia w kierunku przeciwnym do skurczu.',
    sections: [
      {
        heading: 'Rozciąganie łydki',
        body: 'Stań twarzą do ściany, oprzyj dłonie, cofnij bolącą nogę do tyłu i trzymaj piętę na podłożu. Kolano tylnej nogi wyprostuj. Utrzymuj 20–30 sekund.',
      },
      {
        heading: 'Rozciąganie uda',
        body: 'Stań, zegnij kolano bolącej nogi i chwyć stopę za kostką, przyciągając piętę do pośladka. Utrzymaj równowagę, wspierając się wolną ręką o ścianę.',
      },
      {
        heading: 'Czego unikać',
        body: 'Nigdy nie rozciągaj mięśnia gwałtownie ani nie wykonuj szybkich, bolesnych ruchów — może to pogorszyć stan lub uszkodzić włókna mięśniowe.',
      },
    ],
    faq: [
      { question: 'Jak długo rozciągać mięsień przy kurczu?', answer: 'Utrzymuj rozciągnięcie 20–30 sekund, powtarzaj 2–3 razy z krótką przerwą. Kurcz zwykle ustępuje w ciągu kilkunastu sekund do kilku minut.' },
    ],
    relatedLinks: [
      { path: '/kurcze-lydek', label: 'Kurcze łydek' },
      { path: '/pierwsza-pomoc', label: 'Pierwsza pomoc' },
    ],
  },
  {
    path: '/masaz-przy-kurczach',
    hub: { path: '/pierwsza-pomoc', label: 'Pierwsza pomoc' },
    h1: 'Masaż przy kurczach mięśniowych',
    title: 'Masaż przy kurczu mięśnia — jak wykonać | Kurcz.pl',
    description: 'Masaż przy kurczach mięśni: technika, ciepło vs zimno, kiedy stosować. Praktyczna instrukcja pierwszej pomocy.',
    intro: 'Masaż bolesnego mięśnia wspomaga rozluźnienie tkanki i poprawę krążenia. Najlepiej łączyć go z rozciąganiem i nawodnieniem — razem dają szybszą ulgę niż każda metoda osobno.',
    sections: [
      {
        heading: 'Technika masażu',
        body: 'Zacznij od delikatnych, powierzchownych ruchów, stopniowo zwiększając nacisk. Wykonuj okrężne ruchy kciukami wokół najbardziej napiętego miejsca. Przy kończynach dolnych kieruj ruchy od stóp w górę.',
      },
      {
        heading: 'Ciepło czy zimno',
        body: 'Przy ostrym kurczu chłodzenie może pomóc w pierwszych minutach. Po ustąpieniu bólu ciepło (okład, ciepły prysznic) wspomaga rozluźnienie mięśnia.',
      },
    ],
    faq: [
      { question: 'Czy masaż olejkiem rozgrzewającym jest bezpieczny?', answer: 'Po ustąpieniu ostrego kurczu tak — rozgrzewające maści mogą wspomóc rozluźnienie. Nie stosuj ich na uszkodzoną skórę ani tuż po silnym, ostrym bólu.' },
    ],
    relatedLinks: [
      { path: '/rozciaganie-przy-kurczach', label: 'Rozciąganie przy kurczach' },
      { path: '/pierwsza-pomoc', label: 'Pierwsza pomoc' },
    ],
  },
  {
    path: '/suplementacja-magnezem',
    hub: { path: '/profilaktyka', label: 'Profilaktyka' },
    h1: 'Suplementacja magnezem przy kurczach mięśniowych',
    title: 'Magnez na kurcze mięśni — czy pomaga? | Kurcz.pl',
    description: 'Czy suplementacja magnezem pomaga na kurcze mięśni? Dawki, formy magnezu, bezpieczeństwo i kiedy skonsultować się z lekarzem.',
    intro: 'Suplementacja magnezem bywa pomocna u osób z potwierdzonym niedoborem, ale nie zastępuje zbilansowanej diety ani leczenia przyczyny kurczy. Zawsze konsultuj suplementację z lekarzem.',
    sections: [
      {
        heading: 'Formy magnezu',
        body: 'Najlepiej przyswajalne formy to cytrynian, chelat i glinokian magnezu. Siarczan magnezu może działać przeczyszczająco — wybór formy omów z farmaceutą lub lekarzem.',
      },
      {
        heading: 'Bezpieczeństwo suplementacji',
        body: 'Nadmiar magnezu może powodować biegunkę i interakcje z lekami. Szczególną ostrożność zachowują osoby z chorobami nerek — suplementacja bez konsultacji jest przeciwwskazana.',
      },
    ],
    faq: [
      { question: 'Ile magnezu na kurcze mięśni?', answer: 'Dawkowanie zależy od indywidualnych potrzeb i wyników badań. Nie stosuj samodzielnie wysokich dawek — skonsultuj się z lekarzem, który dobierze odpowiednią formę i ilość.' },
    ],
    relatedLinks: [
      { path: '/niedobor-magnezu', label: 'Niedobór magnezu' },
      { path: '/profilaktyka', label: 'Profilaktyka' },
    ],
  },
];

export function getLandingPage(path) {
  return landingPages.find((page) => page.path === path) ?? null;
}

export function toLandingRoute(page) {
  return {
    path: page.path,
    type: 'landing',
    h1: page.h1,
    breadcrumbLabel: page.h1.split(' — ')[0] ?? page.h1,
    hubPath: '/poradniki',
    hubLabel: 'Poradniki',
    topicPath: page.hub.path,
    topicLabel: page.hub.label,
    title: page.title,
    description: page.description,
    ogImage: 'https://kurcz.pl/og-image.jpg',
    priority: 0.85,
    changefreq: 'monthly',
  };
}

export const landingRoutes = landingPages.map(toLandingRoute);

export const footerLandingLinks = landingPages.map((page) => ({
  path: page.path,
  label: page.h1.split(' — ')[0] ?? page.h1,
}));
