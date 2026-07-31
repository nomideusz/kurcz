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
    intro: 'Kurcze łydek to jedna z najczęstszych dolegliwości mięśniowych. Nagłe, bolesne napięcie mięśnia brzuchatego łydki może obudzić Cię w nocy lub przerwać trening. Na szczęście w większości przypadków można szybko sobie pomóc i skutecznie zapobiegać nawrotom.',
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
    title: 'Kurcze nocne a sen — przyczyny i sposoby | Kurcz.pl',
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
    h1: 'Skurcze łydek w ciąży — przyczyny i ulga',
    title: 'Skurcze łydek w ciąży — 2. i 3. trymestr | Kurcz.pl',
    description: 'Skurcze łydek i nóg w ciąży (2. i 3. trymestr): częste przyczyny, bezpieczna pierwsza pomoc, rola magnezu oraz objawy wymagające kontaktu z lekarzem.',
    intro: 'Skurcze (kurcze) łydek w ciąży to nagłe, bolesne napięcie mięśnia — najczęściej w nocy. Według źródeł klinicznych pojawiają się głównie w drugim i trzecim trymestrze; w III trymestrze zgłasza je nawet około połowy do dwóch trzecich ciężarnych. Dokładna przyczyna nie jest w pełni wyjaśniona, ale rolę odgrywają zmiany krążenia, ucisk rosnącej macicy, obciążenie nóg i gospodarka mineralna.',
    sections: [
      {
        heading: 'Skurcze łydek w ciąży w 2. trymestrze',
        body: 'W drugim trymestrze skurcze łydek stają się zauważalnie częstsze niż na początku ciąży — w części badań odsetek kobiet z kurczami rośnie z około jednej piątej w I trymestrze do ok. 25–48% w II. Macica jest już wyraźnie powiększona, zmienia się postawa i sposób chodzenia, a zapotrzebowanie na płyny i minerały wzrasta. Kurcze często budzą w nocy, gdy stopa pozostaje w zgięciu podeszwowym.',
        bullets: [
          'Częstsze niż w I trymestrze, zwykle nadal łagodne',
          'Typowo łydka lub stopa, często w nocy',
          'Pomaga wieczorne rozciąganie łydek i dobre nawodnienie w ciągu dnia',
        ],
      },
      {
        heading: 'Skurcze łydek w ciąży w 3. trymestrze',
        body: 'Trzeci trymestr to szczyt dolegliwości: badania z USA, Iranu, Indii i innych krajów szacują częstość kurczy nóg na ok. 48–65%. Większa masa ciała, silniejszy ucisk na naczynia i nerwy w miednicy, obrzęki oraz mniejsza aktywność dodatkowo obciążają mięśnie łydek. Skurcze bywają silniejsze i bardziej nawracające niż wcześniej — nadal jednak w większości przypadków są nieszkodliwe, jeśli nie towarzyszą im niepokojące objawy opisane poniżej.',
        bullets: [
          'Najwyższa częstość w całej ciąży (ok. połowy–⅔ kobiet w badaniach)',
          'Częste nocne nawroty, czasem bolesność mięśnia jeszcze następnego dnia',
          'Unoszenie nóg, komfortowe obuwie i krótki spacer po kurczu zmniejszają ryzyko powtórki',
        ],
      },
      {
        heading: 'Skurcze nóg w ciąży — nie tylko łydki',
        body: 'Najczęściej boli łydka, ale skurcze w ciąży mogą dotyczyć też stopy, uda albo obu nóg naprzemiennie. Mechanizm jest podobny: obciążenie, krążenie i minerały. Osobno warto odróżnić bolesny skurcz mięśnia od drętwienia nóg — mrowienie bez twardego „kamienia” w mięśniu częściej wiąże się z uciskiem nerwu lub obrzękiem i też warto omówić z lekarzem prowadzącym, zwłaszcza gdy jest jednostronne lub narasta.',
      },
      {
        heading: 'Przyczyny skurczy łydek w ciąży',
        body: 'Nie ma jednej potwierdzonej przyczyny. W praktyce klinicznej wymienia się splot czynników fizjologicznych ciąży — nie każdy musi występować u danej osoby. Po angielsku te same dolegliwości wyszukuje się jako calf cramps in pregnancy lub muscle cramps when pregnant.',
        bullets: [
          'Zmiany krążenia i zatrzymywanie płynów w nogach',
          'Ucisk rosnącej macicy na nerwy i naczynia miednicy',
          'Większe obciążenie mięśni łydek i zmiana chodu',
          'Większe zapotrzebowanie na wapń i magnez; możliwe zaburzenia elektrolitowe',
          'Odwodnienie i długotrwałe stanie lub siedzenie',
        ],
      },
      {
        heading: 'Bezpieczna pierwsza pomoc przy kurczu łydki',
        body: 'Przy ostrym skurczu powoli rozciągnij mięsień łydki: usiądź lub stań, chwyć palce stopy i przyciągnij je w kierunku goleni (pięta w dół). Następnie delikatnie rozmasuj bolące miejsce. Krótki spacer i uniesienie nóg mogą ograniczyć nawrót. Ciepły prysznic, ciepła kąpiel lub zimny okład też bywają pomocne — wybierz to, co przynosi ulgę.',
        bullets: [
          'Powolne rozciągnięcie łydki 20–30 sekund, bez gwałtownych ruchów',
          'Delikatny masaż i kilka kroków',
          'Odpoczynek z uniesionymi nogami',
          'Nie bierz suplementów ani leków na własną rękę',
        ],
      },
      {
        heading: 'Profilaktyka w II i III trymestrze',
        body: 'Mayo Clinic i inne źródła kliniczne zalecają przede wszystkim metody niefarmakologiczne. Dowody na skuteczność magnezu i wapnia w leczeniu kurczy w ciąży są ograniczone i niejednoznaczne (przeglądy Cochrane) — suplementację zawsze ustal z lekarzem prowadzącym.',
        bullets: [
          'Rozciąganie łydek przed snem (ok. 30 sekund na nogę)',
          'Regularna aktywność zaakceptowana przez lekarza (np. spacer)',
          'Odpowiednie nawodnienie — jasny mocz zwykle oznacza dobry poziom płynów',
          'Dieta z wapniem (zalecenie ACOG: ok. 1000 mg/dobę u dorosłych) oraz produktami bogatymi w magnez',
          'Wygodne, stabilne obuwie; unikaj długiego bezruchu',
        ],
      },
      {
        heading: 'Kiedy zgłosić się do lekarza',
        body: 'Typowe kurcze łydek w ciąży są częste i zwykle niegroźne. Skontaktuj się z ginekologiem lub położną, gdy skurcze są bardzo silne albo nawracają mimo profilaktyki, albo gdy bólowi towarzyszy obrzęk, zaczerwienienie, ocieplenie jednej łydki, duszność albo nagły silny ból — wtedy trzeba wykluczyć m.in. zakrzepicę żył głębokich lub inne powikłania.',
      },
    ],
    faq: [
      { question: 'Czy skurcze łydek w ciąży są normalne?', answer: 'Tak — skurcze łydek w ciąży są częste, zwłaszcza w II i III trymestrze, i zwykle nie oznaczają choroby. Przy silnym, jednostronnym bólu z obrzękiem lub zaczerwienieniem skontaktuj się z lekarzem.' },
      { question: 'Dlaczego skurcze łydek w ciąży 3 trymestr są najczęstsze?', answer: 'W III trymestrze największe są masa ciała, ucisk macicy na naczynia i nerwy oraz obciążenie łydek; w badaniach częstość kurczy nóg sięga wtedy często ok. 48–65%. Dlatego nocne skurcze bywają najczęstsze właśnie przed porodem.' },
      { question: 'Czy skurcze łydek w ciąży w 2. trymestrze to powód do niepokoju?', answer: 'W drugim trymestrze kurcze łydek też są typowe i zwykle łagodne. Warto wdrożyć rozciąganie, nawodnienie i wygodne obuwie. Niepokojące są objawy zakrzepowe (obrzęk, zaczerwienienie, ocieplenie jednej nogi) — wtedy nie czekaj do wizyty kontrolnej.' },
      { question: 'Czy magnez pomaga na skurcze łydek w ciąży?', answer: 'Dowody naukowe są mieszane: niektóre kobiety odczuwają ulgę, ale przeglądy Cochrane nie potwierdzają jednoznacznej skuteczności. Nie zaczynaj suplementacji bez konsultacji z lekarzem prowadzącym ciążę; bezpieczniej zacząć od diety bogatej w magnez i rozciągania.' },
      { question: 'Czym różnią się skurcze łydek od skurczów macicy?', answer: 'Kurcz (skurcz) łydki to bolesne, twarde napięcie mięśnia nogi — zwykle krótkotrwałe. Skurcze macicy odczuwa się w brzuchu lub spodzie brzucha. Przy regularnych, bolesnych skurczach brzucha w ciąży zawsze skonsultuj się z lekarzem lub położną.' },
      { question: 'Czy drętwienie nóg w ciąży to to samo co skurcz łydki?', answer: 'Nie. Skurcz to twarde, bolesne napięcie mięśnia. Drętwienie i mrowienie bez takiego „kamienia” częściej wynikają z ucisku nerwu, obrzęku lub pozycji. Oba objawy omów z lekarzem, jeśli są nasilone, jednostronne albo łączą się z obrzękiem i zaczerwienieniem.' },
    ],
    relatedLinks: [
      { path: '/kurcze-lydek', label: 'Kurcze łydek' },
      { path: '/kurcze-nocne', label: 'Kurcze nocne' },
      { path: '/niedobor-magnezu', label: 'Niedobór magnezu' },
      { path: '/rozciaganie-przy-kurczach', label: 'Rozciąganie przy kurczach' },
      { path: '/kurcz-vs-skurcz', label: 'Kurcz czy skurcz?' },
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
    title: 'Niedobór magnezu — kurcze, drżenie mięśni | Kurcz.pl',
    description: 'Niedobór magnezu a kurcze mięśni i drżenie (twitching): objawy, dieta, kiedy zbadać poziom Mg i kiedy rozważyć suplementację z lekarzem.',
    intro: 'Magnez odgrywa kluczową rolę w prawidłowym skurczu i rozluźnieniu mięśni. Jego niedobór to jedna z najczęściej wymienianych przyczyn kurczy mięśniowych — a także drżenia powiek czy drobnych fascykulacji.',
    sections: [
      {
        heading: 'Objawy niedoboru magnezu',
        body: 'Oprócz kurczy mięśni mogą wystąpić drżenie (muscle twitching), zmęczenie, kołatanie serca, bezsenność i wzmożone napięcie mięśniowe. Drżenie powieki bywa wczesnym, łagodnym sygnałem; bolesne kurcze łydek — sygnałem silniejszym.',
        bullets: ['Kurcze łydek i stóp', 'Drżenie powiek i drobne fascykulacje', 'Trudności ze snem', 'Drażliwość i zmęczenie'],
      },
      {
        heading: 'Kurcze a drżenie przy niskim magnezie',
        body: 'Kurcz to bolesne, twarde napięcie całego mięśnia. Drżenie (twitching) to krótkie, zwykle niebolesne „pociągnięcie” włókien. Oba mogą współwystępować przy niedoborze magnezu, ale nie każdy tik powieki oznacza ciężki niedobór — przy nasilonych, nawracających objawach warto zrobić badania i omówić dietę z lekarzem.',
      },
      {
        heading: 'Źródła magnezu w diecie',
        body: 'Produkty bogate w magnez to orzechy, nasiona, ciemna czekolada, zielone warzywa liściaste, pełnoziarniste zboża i ryby.',
      },
    ],
    faq: [
      { question: 'Jak sprawdzić niedobór magnezu?', answer: 'Poziom magnezu we krwi można zbadać laboratoryjnie. Warto skonsultować wynik z lekarzem — objawy kliniczne i dieta też mają znaczenie.' },
      { question: 'Czy niedobór magnezu powoduje drżenie mięśni?', answer: 'Może — zwłaszcza drżenie powiek i drobne fascykulacje. To nie to samo co bolesny kurcz, ale mechanizm nerwowo-mięśniowy bywa powiązany. Przy utrzymującym się drżeniu lub osłabieniu zgłoś się do lekarza.' },
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
  {
    path: '/kurcze-ud',
    hub: { path: '/kurcze-miesniowe', label: 'Kurcze mięśniowe' },
    h1: 'Kurcze ud i mięśni kulszowo-goleniowych',
    title: 'Kurcze ud i mięśni kulszowo-goleniowych — przyczyny | Kurcz.pl',
    description: 'Kurcze ud i tylnej części uda: przyczyny, bezpieczne rozciąganie, pierwsza pomoc oraz objawy wymagające konsultacji lekarskiej.',
    intro: 'Kurcz uda to nagłe, bolesne napięcie mięśni z przodu, po wewnętrznej stronie lub z tyłu uda. Często występuje po wysiłku, przy zmęczeniu mięśni albo w nocy, ale nawracające objawy warto ocenić w szerszym kontekście zdrowotnym.',
    sections: [
      { heading: 'Które mięśnie uda mogą kurczyć się bolesnie', body: 'Kurcz może obejmować mięsień czworogłowy z przodu uda, przywodziciele po stronie wewnętrznej albo mięśnie kulszowo-goleniowe z tyłu uda. Miejsce bólu pomaga dobrać pozycję rozciągającą, ale nie rozstrzyga samodzielnie o przyczynie.' },
      { heading: 'Najczęstsze przyczyny kurczy ud', body: 'Wysiłek większy niż zwykle, niedostateczne przygotowanie do treningu, odwodnienie oraz długie przebywanie w jednej pozycji mogą sprzyjać skurczom. U części osób znaczenie mają też leki, choroby przewlekłe lub zaburzenia gospodarki elektrolitowej.' },
      { heading: 'Pierwsza pomoc i rozciąganie', body: 'Przerwij aktywność i powoli wydłużaj napięty mięsień bez sprężynowania. Przy kurczu tylnej części uda wyprostuj kolano i pochyl tułów tylko do granicy komfortu; przy kurczu z przodu uda podeprzyj się i ostrożnie przyciągnij piętę do pośladka.' },
      { heading: 'Powrót do aktywności i profilaktyka', body: 'Po ustąpieniu bólu zrób krótki spacer i wracaj do wysiłku dopiero, gdy ruch jest swobodny. Stopniowanie obciążeń, rozgrzewka, sen i regularne picie płynów są bezpieczniejszą profilaktyką niż doraźne, samodzielne suplementowanie.' },
      { heading: 'Kiedy potrzebna jest pilna ocena', body: 'Nie zakładaj, że każdy silny ból uda jest kurczem. Nagły obrzęk, zaczerwienienie lub ocieplenie jednej nogi, duszność, uraz, utrzymująca się słabość albo ból nieustępujący po rozciąganiu wymagają pilnej konsultacji medycznej.' },
    ],
    faq: [
      { question: 'Jak rozciągnąć kurcz z tyłu uda?', answer: 'Usiądź lub stań stabilnie, powoli wyprostuj kolano i unieś palce stopy ku sobie. Nie pogłębiaj skłonu przez ból ani nie wykonuj gwałtownych ruchów.' },
      { question: 'Czy kurcz uda po treningu oznacza naderwanie?', answer: 'Nie zawsze. Kurcz zwykle ustępuje po spokojnym rozciąganiu, choć mięsień może być tkliwy następnego dnia. Siniak, obrzęk, nagłe „strzelenie” lub utrzymujący się ból sugerują potrzebę badania.' },
      { question: 'Czy można trenować po kurczu uda?', answer: 'Do treningu wróć dopiero po ustąpieniu bólu i odzyskaniu pełnego, swobodnego ruchu. Jeśli kurcze wracają, zmniejsz obciążenie i omów problem z lekarzem lub fizjoterapeutą.' },
    ],
    relatedLinks: [
      { path: '/kurcze-nog', label: 'Kurcze nóg' },
      { path: '/kurcze-u-sportowcow', label: 'Kurcze u sportowców' },
      { path: '/rozciaganie-przy-kurczach', label: 'Rozciąganie przy kurczach' },
      { path: '/pierwsza-pomoc', label: 'Pierwsza pomoc' },
    ],
  },
  {
    path: '/kurcze-dloni',
    hub: { path: '/kurcze-miesniowe', label: 'Kurcze mięśniowe' },
    h1: 'Kurcze dłoni i palców — przyczyny i ulga',
    title: 'Kurcze dłoni i palców — przyczyny i co robić | Kurcz.pl',
    description: 'Kurcze dłoni i palców: możliwe przyczyny, prosta pierwsza pomoc, profilaktyka przy pracy rękami i sygnały do konsultacji.',
    intro: 'Kurcze dłoni lub palców są nagłym, bolesnym zaciskaniem mięśni ręki. Mogą pojawić się po powtarzalnej pracy, wysiłku, wychłodzeniu lub odwodnieniu; gdy nawracają z drętwieniem albo osłabieniem, wymagają oceny lekarskiej.',
    sections: [
      { heading: 'Co może wywoływać kurcze dłoni', body: 'Długie pisanie, chwytanie narzędzi, gra na instrumencie i praca w chłodzie mogą przeciążać drobne mięśnie ręki. Zdarzają się też zaburzenia płynów i elektrolitów, działania niepożądane leków oraz podrażnienie nerwów.' },
      { heading: 'Jak bezpiecznie przerwać skurcz palców', body: 'Przerwij czynność, rozluźnij chwyt i powoli wyprostuj palce drugą ręką. Delikatnie poruszaj nadgarstkiem, ogrzej dłoń, jeśli jest zimna, i unikaj silnego odciągania bolesnego palca.' },
      { heading: 'Zmiana obciążenia dłoni', body: 'Rób krótkie przerwy w powtarzalnej pracy, zmieniaj ułożenie dłoni i nie zaciskaj narzędzi mocniej niż to konieczne. Ergonomiczne ustawienie klawiatury lub uchwytu może ograniczyć przeciążenie, ale nie zastępuje diagnostyki utrzymujących się objawów.' },
      { heading: 'Kiedy kurcz może nie być prostym przeciążeniem', body: 'Drętwienie, mrowienie, osłabienie chwytu, ból promieniujący od szyi albo częste skurcze obu dłoni mogą wskazywać na problem nerwowy lub metaboliczny. W takiej sytuacji umów konsultację zamiast samodzielnie zwiększać dawki minerałów.' },
    ],
    faq: [
      { question: 'Dlaczego palce kurczą się podczas pisania?', answer: 'Najczęściej sprzyja temu długotrwały, powtarzalny chwyt i napięcie mięśni dłoni. Warto zrobić przerwę, rozluźnić nadgarstek i sprawdzić ergonomię stanowiska.' },
      { question: 'Czy kurcze dłoni oznaczają niedobór magnezu?', answer: 'Mogą współistnieć z zaburzeniami mineralnymi, ale sam kurcz dłoni tego nie potwierdza. Przy nawrotach lekarz oceni objawy, leki i ewentualną potrzebę badań.' },
      { question: 'Kiedy zgłosić kurcze dłoni lekarzowi?', answer: 'Skonsultuj je, jeśli są częste, nasilają się, budzą w nocy lub towarzyszą im drętwienie, słabszy chwyt, obrzęk albo ból po urazie.' },
    ],
    relatedLinks: [
      { path: '/kurcze-a-leki', label: 'Kurcze a leki' },
      { path: '/elektrolity-a-kurcze', label: 'Elektrolity a kurcze' },
      { path: '/masaz-przy-kurczach', label: 'Masaż przy kurczach' },
    ],
  },
  {
    path: '/elektrolity-a-kurcze',
    hub: { path: '/profilaktyka', label: 'Profilaktyka' },
    h1: 'Elektrolity a kurcze mięśniowe',
    title: 'Elektrolity a kurcze — sód, potas, wapń i magnez | Kurcz.pl',
    description: 'Sód, potas, wapń i magnez a kurcze mięśniowe: co oznaczają zaburzenia elektrolitowe, jak bezpiecznie uzupełniać płyny i kiedy zrobić badania.',
    intro: 'Elektrolity, w tym sód, potas, wapń i magnez, uczestniczą w przewodzeniu impulsów nerwowych oraz skurczu mięśni. Kurcze mogą występować przy zaburzeniach ich równowagi, ale pojedynczy skurcz nie pozwala rozpoznać konkretnego niedoboru.',
    sections: [
      { heading: 'Rola sodu, potasu, wapnia i magnezu', body: 'Sód i potas pomagają utrzymać pracę komórek nerwowych i mięśniowych, a wapń oraz magnez uczestniczą w ich pobudzeniu i rozluźnianiu. Organizm ściśle reguluje ich stężenia, dlatego przypadkowe łączenie preparatów nie jest dobrym sposobem na kurcze.' },
      { heading: 'Kiedy równowaga elektrolitowa może się zmienić', body: 'Ryzyko wzrasta przy wymiotach, biegunce, obfitym poceniu, wysokiej gorączce, chorobach nerek oraz stosowaniu niektórych leków, zwłaszcza moczopędnych. W tych sytuacjach sposób uzupełniania płynów warto ustalić z lekarzem lub farmaceutą.' },
      { heading: 'Płyny i dieta zamiast samodzielnego leczenia', body: 'Przy zwykłej aktywności podstawą jest regularne picie i zróżnicowana dieta. Podczas długiego wysiłku lub znacznej utraty płynów przydatny może być odpowiedni płyn nawadniający, ale jego wybór zależy od sytuacji i chorób współistniejących.' },
      { heading: 'Kiedy potrzebne są badania', body: 'Nawracające kurcze z osłabieniem, kołataniem serca, omdleniami, splątaniem lub utrzymującymi się wymiotami wymagają pilnej oceny. Lekarz może zlecić badania krwi i ocenić nerki oraz leki; nie próbuj wyrównywać podejrzanego potasu na własną rękę.' },
    ],
    faq: [
      { question: 'Który elektrolit najczęściej odpowiada za kurcze?', answer: 'Nie ma jednego elektrolitu odpowiedzialnego za wszystkie kurcze. Znaczenie mogą mieć płyny, obciążenie mięśni, leki i różne zaburzenia mineralne, dlatego objawy warto oceniać całościowo.' },
      { question: 'Czy napój izotoniczny zawsze pomaga?', answer: 'Może być użyteczny przy długim wysiłku lub obfitym poceniu, lecz nie jest konieczny na co dzień i nie leczy każdej przyczyny kurczy. Osoby z chorobami nerek, serca lub cukrzycą powinny skonsultować wybór napoju.' },
      { question: 'Czy mogę przyjmować potas na kurcze?', answer: 'Nie bez zalecenia lekarza. Zarówno niedobór, jak i nadmiar potasu może być groźny, zwłaszcza przy chorobach nerek lub lekach wpływających na jego stężenie.' },
    ],
    relatedLinks: [
      { path: '/kurcze-a-odwodnienie', label: 'Kurcze a odwodnienie' },
      { path: '/niedobor-magnezu', label: 'Niedobór magnezu' },
      { path: '/kurcze-a-leki', label: 'Kurcze a leki' },
      { path: '/profilaktyka', label: 'Profilaktyka kurczy' },
    ],
  },
  {
    path: '/zespol-niespokojnych-nog-a-kurcze',
    hub: { path: '/kurcze-miesniowe', label: 'Kurcze mięśniowe' },
    h1: 'Zespół niespokojnych nóg a kurcze',
    title: 'Zespół niespokojnych nóg a kurcze — różnice | Kurcz.pl',
    description: 'Zespół niespokojnych nóg a kurcze mięśniowe: najważniejsze różnice w objawach, porze występowania i sytuacjach wymagających diagnozy.',
    intro: 'Zespół niespokojnych nóg i bolesne kurcze łydek często nasilają się wieczorem, ale nie są tym samym. Rozróżnienie opiera się przede wszystkim na rodzaju odczucia: przymus poruszania nogami różni się od nagłego, twardego skurczu mięśnia.',
    sections: [
      { heading: 'Jak wygląda typowy kurcz mięśnia', body: 'Kurcz to nagłe, mimowolne i zwykle bardzo bolesne napięcie konkretnego mięśnia, najczęściej łydki lub stopy. Mięsień staje się twardy, a ulgę przynosi jego powolne rozciągnięcie; po epizodzie może pozostać tkliwość.' },
      { heading: 'Jak objawia się zespół niespokojnych nóg', body: 'W zespole niespokojnych nóg dominuje nieprzyjemne uczucie w kończynach i silna potrzeba poruszania nimi, zwykle w spoczynku wieczorem lub w nocy. Ruch przynosi przejściową ulgę, ale nie musi występować twardy, bolesny skurcz mięśnia.' },
      { heading: 'Dlaczego prawidłowe rozróżnienie ma znaczenie', body: 'Postępowanie może być inne niż przy okazjonalnych kurczach. Objawy zgodne z zespołem niespokojnych nóg mogą wymagać rozmowy o śnie, lekach, żelazie i chorobach współistniejących; rozpoznanie powinien postawić lekarz.' },
      { heading: 'Kiedy umówić konsultację', body: 'Zgłoś się do lekarza, gdy dolegliwości regularnie zaburzają sen, dotyczą obu nóg, narastają albo współistnieją z osłabieniem, utratą czucia czy obrzękiem. Nagły jednostronny ból i obrzęk nogi wymagają pilnej oceny.' },
    ],
    faq: [
      { question: 'Czy zespół niespokojnych nóg boli jak kurcz?', answer: 'Może być bardzo nieprzyjemny, lecz zwykle nie daje nagłego, twardego zaciśnięcia jednego mięśnia typowego dla kurczu. Częściej opisuje się potrzebę poruszania nogami i ulgę po ruchu.' },
      { question: 'Czy kurcze nocne mogą współistnieć z zespołem niespokojnych nóg?', answer: 'Tak, obie dolegliwości mogą występować u jednej osoby, szczególnie gdy sen jest zaburzony. Nie należy jednak zakładać wspólnej przyczyny bez konsultacji.' },
      { question: 'Czy magnez leczy zespół niespokojnych nóg?', answer: 'Nie jest standardowym leczeniem tego zespołu. Suplementy należy omówić z lekarzem, który najpierw oceni objawy i możliwe przyczyny.' },
    ],
    relatedLinks: [
      { path: '/kurcze-nocne', label: 'Kurcze nocne' },
      { path: '/kurcze-lydek', label: 'Kurcze łydek' },
      { path: '/niedobor-magnezu', label: 'Niedobór magnezu' },
    ],
  },
  {
    path: '/kurcze-u-dzieci',
    hub: { path: '/kurcze-miesniowe', label: 'Kurcze mięśniowe' },
    h1: 'Kurcze mięśniowe u dzieci',
    title: 'Kurcze u dzieci — przyczyny i kiedy do lekarza | Kurcz.pl',
    description: 'Kurcze mięśniowe u dzieci: bezpieczna pierwsza pomoc, możliwe przyczyny i objawy, z którymi należy skontaktować się z pediatrą.',
    intro: 'Pojedynczy kurcz nogi u dziecka po zabawie, wysiłku lub w nocy często szybko ustępuje. U dzieci nie należy jednak samodzielnie rozpoznawać niedoborów ani podawać suplementów — nawracające lub nietypowe objawy warto najpierw omówić z pediatrą.',
    sections: [
      { heading: 'Co może sprzyjać kurczom u dzieci', body: 'Dłuższy wysiłek, małe spożycie płynów podczas upału, zmęczenie i napięcie mięśni po aktywności mogą wywołać pojedynczy skurcz. Kurcze mogą też towarzyszyć infekcji z gorączką, wymiotom lub biegunce, kiedy łatwiej o utratę płynów.' },
      { heading: 'Bezpieczna pierwsza pomoc w domu', body: 'Pomóż dziecku spokojnie rozciągnąć napięty mięsień i zapewnij bezpieczną pozycję. Po ustąpieniu bólu podaj płyn odpowiedni do sytuacji, a jeśli dziecko ma chorobę przewlekłą, leki lub objawy odwodnienia, skontaktuj się z lekarzem.' },
      { heading: 'Czego nie robić na własną rękę', body: 'Nie podawaj magnezu, potasu ani innych preparatów tylko dlatego, że wystąpił kurcz. Dawkowanie u dzieci zależy od wieku, masy ciała, diety i stanu zdrowia, a nadmiar niektórych składników może być szkodliwy.' },
      { heading: 'Kiedy kontakt z pediatrą jest potrzebny', body: 'Skontaktuj się z lekarzem, gdy kurcze powtarzają się, wybudzają dziecko, ograniczają chodzenie lub występują z osłabieniem, drętwieniem, gorączką, wymiotami, obrzękiem albo po urazie. Nagła trudność w oddychaniu, omdlenie lub silny ból wymagają pilnej pomocy.' },
    ],
    faq: [
      { question: 'Czy nocne kurcze nóg u dziecka są normalne?', answer: 'Pojedynczy nocny kurcz może się zdarzyć i zwykle nie jest groźny. Jeśli jednak regularnie zaburza sen, jest silny lub towarzyszą mu inne objawy, skonsultuj dziecko z pediatrą.' },
      { question: 'Czy dziecku można podać magnez na kurcze?', answer: 'Nie bez porady lekarza lub farmaceuty znającego wiek i stan zdrowia dziecka. Najpierw warto ustalić, czy objaw rzeczywiście wymaga suplementacji.' },
      { question: 'Jak odróżnić kurcz od bólu wzrostowego?', answer: 'Kurcz to zwykle nagłe, wyczuwalne napięcie konkretnego mięśnia. Bóle wzrostowe mają inny charakter i rozpoznaje je lekarz po wykluczeniu innych przyczyn; nie należy opierać się wyłącznie na opisie z internetu.' },
    ],
    relatedLinks: [
      { path: '/kurcze-nog', label: 'Kurcze nóg' },
      { path: '/kurcze-a-odwodnienie', label: 'Kurcze a odwodnienie' },
      { path: '/pierwsza-pomoc', label: 'Pierwsza pomoc' },
    ],
  },
];

export const landingPagesEnMap = {
  '/kurcze-nog': {
    h1: 'Leg Cramps — Causes, First Aid & Prevention',
    title: 'Leg Cramps — Causes and Fast Relief Methods | Kurcz.pl',
    description: 'Leg cramps — causes, fast relief techniques, prevention, and specialized advice for calf, foot, and night cramps.',
    intro: 'Leg cramps are sudden, involuntary, and painful contractions of the lower limb muscles — most commonly calves and feet, but also thighs. Learn causes, proven first aid, and preventive measures.',
    sections: [
      {
        heading: 'Common Causes of Leg Cramps',
        body: 'Leg cramps most often result from dehydration, electrolyte imbalances, mineral deficiencies, and muscle strain. Prolonged static posture, pregnancy, aging, and medications are additional contributing factors.',
        bullets: ['Dehydration and electrolyte loss', 'Deficiency in magnesium, potassium, calcium, or sodium', 'Overuse and intense physical activity without warm-up', 'Prolonged sitting or standing in one position'],
      },
      {
        heading: 'First Aid — How to Stop a Leg Cramp',
        body: 'During an acute cramp, slowly stretch the cramped muscle in the opposite direction of contraction, then gently massage the area. Weight-bearing and walking a few steps often helps.',
        bullets: ['Stretch muscle slowly without sudden movements', 'Massage the painful area', 'Stand up and gently apply weight to the leg', 'Rehydrate with electrolyte-rich water'],
      },
      {
        heading: 'Leg Cramps by Location and Timing',
        body: 'Symptoms and management depend on the specific muscle affected. The calves are most commonly affected, followed by feet and thighs. Nocturnal leg cramps represent a distinct nighttime challenge.',
      },
      {
        heading: 'Prevention — How to Avoid Leg Cramps',
        body: 'Consistent hydration, a diet rich in magnesium and potassium, and daily leg stretches significantly reduce recurrences. Progress workout intensity gradually and wear supportive footwear.',
        bullets: ['Drink water regularly throughout the day', 'Eat foods rich in magnesium and potassium', 'Stretch calves and feet before bed and after exercise', 'Gradually increase workout intensity'],
      },
      {
        heading: 'When to Consult a Doctor',
        body: 'Isolated leg cramps are usually benign. Consult a physician if cramps occur frequently, are unusually severe, or are accompanied by weakness, numbness, swelling, or vascular symptoms.',
      },
    ],
    faq: [
      { question: 'How to quickly get rid of a leg cramp?', answer: 'Slowly stretch the cramped muscle, massage it, and gently stand on the leg. The cramp usually subsides within seconds to a few minutes.' },
      { question: 'What is missing in the body when leg cramps occur?', answer: 'Dehydration or deficits in magnesium, potassium, calcium, or sodium are common factors. Consult a healthcare provider for persistent episodes.' },
      { question: 'Can leg cramps signal an underlying condition?', answer: 'While usually harmless, frequent or unprovoked cramps accompanied by swelling or numbness warrant medical evaluation to rule out vascular, metabolic, or neurological issues.' },
    ],
    relatedLinks: [
      { path: '/kurcze-lydek', label: 'Calf Cramps' },
      { path: '/kurcze-nocne', label: 'Night Cramps' },
      { path: '/niedobor-magnezu', label: 'Magnesium Deficiency' },
      { path: '/pierwsza-pomoc', label: 'First Aid' },
    ],
  },
  '/kurcze-lydek': {
    h1: 'Calf Cramps — Causes, First Aid & Prevention',
    title: 'Calf Cramps — How to Quickly Relieve Pain | Kurcz.pl',
    description: 'Painful calf cramps at night or after working out? Learn causes, immediate first aid, stretching techniques, and prevention.',
    intro: 'Calf cramps are among the most frequent muscle complaints. Sudden, painful tension in the gastrocnemius muscle can wake you at night or disrupt exercise.',
    sections: [
      {
        heading: 'Common Causes of Calf Cramps',
        body: 'Calf cramps typically stem from dehydration, magnesium or potassium deficits, running strain, or keeping the calf muscle immobilized in a shortened position for too long.',
        bullets: ['Dehydration and electrolyte depletion', 'Intense exertion without dynamic warm-up', 'Magnesium, potassium, or calcium deficits', 'Improper athletic footwear'],
      },
      {
        heading: 'First Aid for a Calf Cramp',
        body: 'Sit or lie down, gently extend the calf muscle by flexing toes upward toward the knee, and gently massage the painful area.',
      },
      {
        heading: 'Prevention of Calf Cramps',
        body: 'Regular calf stretches before sleep and after workouts, proper hydration, and an electrolyte-rich diet substantially reduce cramp recurrence.',
      },
    ],
    faq: [
      { question: 'Why do calf cramps occur at night?', answer: 'Night calf cramps often occur due to shortened foot posture during sleep, daily dehydration, or mineral deficiencies. Bedtime stretching and loose bedding help.' },
      { question: 'How to stretch the calf muscle after a cramp?', answer: 'In a standing position, place hands against a wall, step the affected leg back keeping the heel flat on the floor, and hold for 20-30 seconds.' },
    ],
    relatedLinks: [
      { path: '/kurcze-nog', label: 'Leg Cramps' },
      { path: '/kurcze-nocne', label: 'Night Cramps' },
      { path: '/rozciaganie-przy-kurczach', label: 'Stretching for Cramps' },
      { path: '/pierwsza-pomoc', label: 'First Aid' },
    ],
  },
  '/kurcze-stop': {
    h1: 'Foot Cramps — Causes & Fast Relief',
    title: 'Foot and Toe Cramps — First Aid | Kurcz.pl',
    description: 'Foot and toe muscle cramps: causes, symptoms, stretching techniques, and prevention. Learn how to quickly ease foot pain.',
    intro: 'Foot cramps affect plantar muscles and toes. They can occur suddenly during walking, swimming, or sleeping and cause sharp, mobility-limiting pain.',
    sections: [
      {
        heading: 'Causes of Foot Cramps',
        body: 'Electrolyte deficits, tight or unsupportive shoes, sports strain, and poor lower limb circulation are primary causes.',
      },
      {
        heading: 'What to Do During a Foot Cramp',
        body: 'Gently flex toes upward, massage the sole from heel to toes, and rest. If cramping while swimming, exit the water and perform gradual stretches.',
        bullets: ['Flex toes upward toward the shin', 'Massage sole in circular motions', 'Rehydrate after pain subsides'],
      },
    ],
    faq: [
      { question: 'Can foot cramps indicate a medical problem?', answer: 'Isolated foot cramps are rarely concerning. Recurrent episodes, numbness, or swelling warrant medical consultation to rule out neuropathy or vascular issues.' },
    ],
    relatedLinks: [
      { path: '/kurcze-nog', label: 'Leg Cramps' },
      { path: '/kurcze-lydek', label: 'Calf Cramps' },
      { path: '/masaz-przy-kurczach', label: 'Massage for Cramps' },
    ],
  },
  '/kurcze-nocne': {
    h1: 'Night Cramps — How to Eliminate Them',
    title: 'Night Cramps and Sleep — Causes and Relief | Kurcz.pl',
    description: 'Waking up with painful muscle cramps? Discover causes of nocturnal cramps and bedtime prevention routines.',
    intro: 'Night cramps are painful involuntary contractions during sleep, most often in calves, feet, or thighs. Though lasting seconds to minutes, they disrupt sleep quality.',
    sections: [
      {
        heading: 'Why Cramps Happen at Night',
        body: 'During sleep, muscles are at rest and feet often remain in a plantar flexed position, combined with daily fluid loss and electrolyte depletion.',
      },
      {
        heading: 'How to Prevent Nocturnal Cramps',
        body: 'Adopt a nightly stretching ritual, maintain daytime hydration, ensure bedding does not weigh down feet, and consider magnesium under medical guidance.',
        bullets: ['Calf and foot stretches before bed', 'Loose bedding so feet are not compressed', 'Regular daytime physical activity', 'Avoid heavy meals right before sleep'],
      },
    ],
    faq: [
      { question: 'Are night cramps dangerous?', answer: 'Most nocturnal cramps have benign causes. However, daily severe cramps or accompanying muscle weakness warrant medical consultation.' },
      { question: 'Does taking magnesium at night help?', answer: 'Magnesium can help individuals with confirmed deficiency. Always consult a doctor before starting supplements, especially with renal conditions.' },
    ],
    relatedLinks: [
      { path: '/kurcze-lydek', label: 'Calf Cramps' },
      { path: '/niedobor-magnezu', label: 'Magnesium Deficiency' },
      { path: '/suplementacja-magnezem', label: 'Magnesium Supplementation' },
    ],
  },
  '/kurcze-u-sportowcow': {
    h1: 'Cramps in Athletes — Causes & Prevention',
    title: 'Muscle Cramps in Athletes — Prevention Strategies | Kurcz.pl',
    description: 'Muscle cramps in runners and athletes: dehydration, electrolytes, warm-ups, and recovery. Practical prevention tips.',
    intro: 'Athletes — especially runners, cyclists, and team sport players — face cramps from sweat electrolyte loss and intense muscle strain.',
    sections: [
      {
        heading: 'Causes of Athletic Cramps',
        body: 'Sodium, potassium, and magnesium loss through heavy sweating, inadequate warm-up, and high heat workouts are major drivers.',
      },
      {
        heading: 'Prevention During Training',
        body: 'Drink isotonic solutions during long sessions, stretch post-workout, and dynamic warm-up beforehand. Monitor urine color to gauge hydration.',
        bullets: ['150-250 ml fluid every 15-20 min during exercise', 'Dynamic warm-up before training', 'Static stretching post-workout', 'Adequate rest and sleep'],
      },
    ],
    faq: [
      { question: 'Do cramps during a marathon require stopping?', answer: 'If the cramp resolves after stretching, you can continue at a reduced pace. Severe pain or repeated recurrences indicate you should stop and seek medical evaluation.' },
    ],
    relatedLinks: [
      { path: '/kurcze-a-odwodnienie', label: 'Cramps & Dehydration' },
      { path: '/profilaktyka', label: 'Prevention' },
    ],
  },
  '/kurcze-u-kobiet-w-ciazy': {
    h1: 'Calf Cramps During Pregnancy',
    title: 'Calf Cramps in Pregnancy — 2nd & 3rd Trimester | Kurcz.pl',
    description: 'Calf and leg cramps when pregnant (2nd & 3rd trimester): how common they are, what causes them, safe first aid, magnesium evidence, and when to call your doctor.',
    intro: 'Calf cramps in pregnancy are sudden, painful muscle spasms — often at night. Clinical sources note they are common in the second and third trimesters; in the third trimester, studies report roughly half to two-thirds of pregnant women experience them. The exact cause is unclear, but circulation changes, pressure from the growing uterus, leg muscle load, and mineral balance all play a role.',
    sections: [
      {
        heading: 'Calf Cramps in the Second Trimester',
        body: 'In the second trimester, calf cramps become clearly more common than early in pregnancy — some studies show rates rising from about one in five women in the first trimester to roughly 25–48% in the second. The uterus is larger, posture and gait change, and fluid and mineral needs increase. Cramps often wake you at night when the foot sits in a pointed (plantar-flexed) position.',
        bullets: [
          'More frequent than in the first trimester, usually still mild',
          'Typically calf or foot, often at night',
          'Evening calf stretches and daytime hydration help many women',
        ],
      },
      {
        heading: 'Calf Cramps in the Third Trimester',
        body: 'The third trimester is the peak: studies from the USA, Iran, India and elsewhere estimate leg-cramp prevalence at about 48–65%. Greater body weight, stronger pressure on pelvic vessels and nerves, swelling, and lower activity further stress the calves. Spasms may be stronger and more recurrent than earlier — still usually harmless when the warning signs below are absent.',
        bullets: [
          'Highest frequency in pregnancy (about half to two-thirds in studies)',
          'Frequent night episodes; muscle tenderness can linger the next day',
          'Elevating legs, supportive shoes, and a short walk after a cramp may limit repeats',
        ],
      },
      {
        heading: 'Leg Cramps in Pregnancy — Not Only Calves',
        body: 'The calf is most common, but pregnancy muscle cramps can also hit the foot or thigh. The drivers are similar: load, circulation, and minerals. Separately, leg numbness or tingling without a hard muscle “knot” is more often nerve pressure or swelling — still worth mentioning to your clinician if it is one-sided or worsening.',
      },
      {
        heading: 'Why Pregnancy Causes Calf Cramps',
        body: 'There is no single proven cause. Clinicians describe a mix of normal pregnancy changes — not every factor applies to every person.',
        bullets: [
          'Circulation changes and fluid retention in the legs',
          'Pressure from the growing uterus on pelvic nerves and vessels',
          'Extra load on calf muscles and altered gait',
          'Higher calcium and magnesium demand; possible electrolyte shifts',
          'Dehydration and long periods of standing or sitting',
        ],
      },
      {
        heading: 'Safe First Aid for a Calf Cramp',
        body: 'During a cramp, slowly stretch the calf: sit or stand, pull the toes toward the shin with the heel down. Then gently massage the area. A short walk and elevating the legs may reduce recurrence. A warm shower, warm bath, or ice massage can also help — use whatever eases the pain.',
        bullets: [
          'Slow calf stretch for 20–30 seconds, no sudden jerks',
          'Gentle massage and a few steps',
          'Rest with legs elevated',
          'Do not start supplements or medicines on your own',
        ],
      },
      {
        heading: 'Prevention in the 2nd and 3rd Trimesters',
        body: 'Mayo Clinic and other clinical sources emphasize non-drug measures first. Evidence that magnesium or calcium treats pregnancy leg cramps is limited and mixed (Cochrane reviews) — always discuss supplements with your obstetrician.',
        bullets: [
          'Stretch calves before bed (about 30 seconds per leg)',
          'Stay active with exercise cleared by your clinician (e.g. walking)',
          'Drink enough fluids — pale urine usually means good hydration',
          'Calcium-rich diet (ACOG: about 1,000 mg/day for most adults) plus magnesium-rich foods',
          'Supportive shoes; avoid long immobility',
        ],
      },
      {
        heading: 'When to Call Your Doctor',
        body: 'Typical pregnancy calf cramps are common and usually benign. Contact your obstetrician or midwife if cramps are severe or keep returning despite self-care, or if pain comes with swelling, redness, warmth in one calf, shortness of breath, or sudden severe pain — those signs need urgent assessment to rule out deep vein thrombosis or other complications.',
      },
    ],
    faq: [
      { question: 'Are calf cramps normal in pregnancy?', answer: 'Yes — pregnancy calf cramps are common, especially in the second and third trimesters, and usually do not mean disease. Seek care for severe one-sided pain with swelling or redness.' },
      { question: 'Why do calf cramps get worse in the third trimester?', answer: 'In the third trimester, body weight, uterine pressure on vessels and nerves, and calf load are greatest; studies often find leg-cramp rates around 48–65%. That is why night cramps peak late in pregnancy.' },
      { question: 'Should I worry about calf cramps in the second trimester?', answer: 'Second-trimester calf cramps are also typical and usually mild. Prioritize stretching, hydration, and comfortable shoes. Do not wait if you have clot-like signs (swelling, redness, warmth in one leg).' },
      { question: 'Does magnesium help pregnancy leg cramps?', answer: 'Evidence is mixed: some women feel better, but Cochrane reviews do not show clear benefit. Do not start supplements without your prenatal clinician; begin with magnesium-rich foods and stretching.' },
      { question: 'How do leg cramps differ from uterine contractions?', answer: 'A calf cramp is a hard, painful tightening in the leg muscle — usually brief. Uterine contractions are felt in the belly or lower abdomen. Regular, painful abdominal contractions in pregnancy always warrant contacting your clinician.' },
      { question: 'Is leg numbness in pregnancy the same as a calf cramp?', answer: 'No. A cramp is a hard, painful muscle lock. Numbness or tingling without that knot often comes from nerve pressure or swelling. Mention either symptom to your clinician if it is severe, one-sided, or paired with swelling and redness.' },
    ],
    relatedLinks: [
      { path: '/kurcze-lydek', label: 'Calf Cramps' },
      { path: '/kurcze-nocne', label: 'Night Cramps' },
      { path: '/niedobor-magnezu', label: 'Magnesium Deficiency' },
      { path: '/rozciaganie-przy-kurczach', label: 'Stretching for Cramps' },
      { path: '/kurcz-vs-skurcz', label: 'Cramp vs Spasm' },
    ],
  },
  '/kurcze-u-osob-starszych': {
    h1: 'Muscle Cramps in Seniors',
    title: 'Cramps in Older Adults — Causes & Care | Kurcz.pl',
    description: 'Muscle cramps in seniors: risk factors, medication effects, vitamin status, and safe prevention.',
    intro: 'In adults over 60, cramps occur more frequently due to metabolic shifts, reduced muscle mass, medications, and lower fluid intake.',
    sections: [
      {
        heading: 'Senior Risk Factors',
        body: 'Statins, diuretics, diabetes, kidney conditions, and reduced physical activity elevate cramp frequency in seniors.',
      },
      {
        heading: 'Prevention for Seniors',
        body: 'Regular gentle exercise (walking, swimming), consistent hydration, and physician review of prescription medications help minimize cramps.',
      },
    ],
    faq: [
      { question: 'Do senior muscle cramps require lab tests?', answer: 'For recurrent cramps, testing magnesium, potassium, calcium, and thyroid status is advisable alongside medication review.' },
    ],
    relatedLinks: [
      { path: '/kurcze-a-leki', label: 'Cramps & Medication' },
      { path: '/profilaktyka', label: 'Prevention' },
    ],
  },
  '/kurcze-u-diabetykow': {
    h1: 'Muscle Cramps in People with Diabetes',
    title: 'Diabetic Cramps — Causes & Treatment | Kurcz.pl',
    description: 'Muscle cramps in diabetes: neuropathy, electrolyte shifts, medications, and safe care.',
    intro: 'Individuals with diabetes have higher rates of muscle cramps related to diabetic neuropathy, glycemic variability, and renal factors.',
    sections: [
      {
        heading: 'Diabetes & Muscle Function',
        body: 'Elevated blood glucose over time can damage peripheral nerves and small blood vessels, precipitating muscle cramps and numbness.',
      },
      {
        heading: 'Cramp Management in Diabetes',
        body: 'Gently stretch cramped muscles, monitor blood sugar, maintain hydration, and report recurrent cramps to your treating physician.',
      },
    ],
    faq: [
      { question: 'Do cramps in diabetes always mean neuropathy?', answer: 'Not always, but recurring cramps warrant neurological evaluation and glycemic review. Early neuropathy detection helps slow progression.' },
    ],
    relatedLinks: [
      { path: '/kurcze-u-osob-starszych', label: 'Senior Cramps' },
      { path: '/kontakt', label: 'Contact' },
    ],
  },
  '/niedobor-magnezu': {
    h1: 'Magnesium Deficiency & Muscle Cramps',
    title: 'Magnesium Deficiency — Cramps & Twitching | Kurcz.pl',
    description: 'Magnesium deficiency muscle cramps and twitching: signs, food sources, when to test, and when to discuss supplements with a doctor.',
    intro: 'Magnesium plays a central role in neuromuscular signaling and muscle relaxation. Low magnesium is often linked to muscle cramps — and to eyelid or muscle twitching.',
    sections: [
      {
        heading: 'Signs of Low Magnesium',
        body: 'Beyond muscle cramps, low magnesium can show up as twitching, fatigue, sleep issues, and irritability. Eyelid twitching is a common mild clue; painful calf cramps are a stronger one.',
        bullets: ['Calf and foot cramps', 'Eyelid twitching and fasciculations', 'Sleep difficulties', 'Irritability and fatigue'],
      },
      {
        heading: 'Cramps vs Twitching with Low Magnesium',
        body: 'A cramp is a painful, hard lock of the whole muscle. A twitch is a brief, usually painless fiber flicker. Both can appear with low magnesium, but an eyelid tic alone does not prove severe deficiency — get checked if symptoms are frequent, progressive, or come with weakness.',
      },
      {
        heading: 'Dietary Sources of Magnesium',
        body: 'Nuts, seeds, dark chocolate, leafy greens, whole grains, and fish are rich dietary sources of magnesium.',
      },
    ],
    faq: [
      { question: 'How to test for magnesium deficiency?', answer: 'Serum magnesium tests can be performed. Discuss clinical symptoms and dietary intake with your physician for complete evaluation.' },
      { question: 'Can magnesium deficiency cause muscle twitching?', answer: 'Yes — especially eyelid twitching and small fasciculations. That is not the same as a painful cramp, though the neuromuscular mechanism can overlap. See a doctor for persistent twitching or weakness.' },
    ],
    relatedLinks: [
      { path: '/suplementacja-magnezem', label: 'Magnesium Supplementation' },
      { path: '/profilaktyka', label: 'Prevention' },
    ],
  },
  '/kurcze-a-odwodnienie': {
    h1: 'Muscle Cramps & Dehydration',
    title: 'Dehydration & Cramps — What to Do | Kurcz.pl',
    description: 'How fluid loss and electrolyte depletion cause muscle cramps.',
    intro: 'Dehydration disrupts fluid and mineral balances, directly impacting muscle contraction and relaxation capacity.',
    sections: [
      {
        heading: 'How Fluid Loss Triggers Cramps',
        body: 'Inadequate fluid intake leads to hyper-excitable muscle cell membranes, especially during hot weather or heavy exercise.',
      },
      {
        heading: 'Proper Hydration Habits',
        body: 'Sip water continuously throughout the day. Opt for electrolyte-rich isotonic drinks during prolonged exercise or high heat.',
      },
    ],
    faq: [
      { question: 'How much water to drink to avoid cramps?', answer: 'Aim for roughly 2 liters daily, increasing during exercise or heat. Pale yellow urine indicates good hydration status.' },
    ],
    relatedLinks: [
      { path: '/kurcze-u-sportowcow', label: 'Athletic Cramps' },
      { path: '/profilaktyka', label: 'Prevention' },
    ],
  },
  '/kurcze-a-leki': {
    h1: 'Muscle Cramps & Medications',
    title: 'Medications That Cause Muscle Cramps | Kurcz.pl',
    description: 'Which drugs list muscle cramps as side effects? Statins, diuretics, beta-blockers, and next steps.',
    intro: 'Various prescription drugs can increase cramp susceptibility. Always consult your prescribing physician before modifying medication regimens.',
    sections: [
      {
        heading: 'Medications Linked to Cramps',
        body: 'Statins, loop diuretics, beta-blockers, certain psychiatric agents, oral contraceptives, and corticosteroids are known potential triggers.',
        bullets: ['Statins (cholesterol drugs)', 'Diuretics (water pills)', 'Beta-blockers', 'Certain antidepressants'],
      },
      {
        heading: 'What to Do if You Suspect a Medication',
        body: 'Track when cramps began relative to your prescriptions and consult your doctor. Dose adjustment or medication switching may be considered.',
      },
    ],
    faq: [
      { question: 'Does stopping a statin always resolve cramps?', answer: 'In many cases cramps improve after adjusting dosage or switching statins, but this must be managed by a doctor. Never stop statins abruptly on your own.' },
    ],
    relatedLinks: [
      { path: '/kurcze-u-osob-starszych', label: 'Senior Cramps' },
      { path: '/faq', label: 'FAQ' },
    ],
  },
  '/rozciaganie-przy-kurczach': {
    h1: 'Stretching for Muscle Cramps',
    title: 'Stretching Techniques for Muscle Cramps | Kurcz.pl',
    description: 'Effective stretching techniques for calf, thigh, and foot cramps. Step-by-step guidance.',
    intro: 'Stretching remains the most immediate first aid intervention for acute skeletal muscle cramps. Slow, controlled lengthening of the affected muscle is essential.',
    sections: [
      {
        heading: 'Calf Stretching Technique',
        body: 'Face a wall, extend the affected leg back keeping the heel flat on the floor, and hold for 20-30 seconds while breathing deeply.',
      },
      {
        heading: 'Thigh Stretching Technique',
        body: 'Stand upright, flex the knee of the affected leg, grasp the ankle, and pull the heel toward the buttocks while balancing against a wall.',
      },
      {
        heading: 'What to Avoid',
        body: 'Never stretch violently or bounce sharply — ballistic movements can cause muscle fiber tears or worsen spasms.',
      },
    ],
    faq: [
      { question: 'How long should you stretch a cramped muscle?', answer: 'Hold the stretch for 20-30 seconds, repeating 2-3 times with brief rest intervals until tension fully dissipates.' },
    ],
    relatedLinks: [
      { path: '/kurcze-lydek', label: 'Calf Cramps' },
      { path: '/pierwsza-pomoc', label: 'First Aid' },
    ],
  },
  '/masaz-przy-kurczach': {
    h1: 'Massage for Muscle Cramps',
    title: 'How to Massage a Cramped Muscle | Kurcz.pl',
    description: 'Massage techniques, heat vs cold, and fast relief guidance.',
    intro: 'Therapeutic massage promotes local circulation and facilitates rapid muscle fiber relaxation. Combine massage with gentle stretching for best results.',
    sections: [
      {
        heading: 'Massage Technique',
        body: 'Begin with gentle surface strokes before applying firm, circular thumb pressure around tight muscle knots. Stroke upward toward the heart on lower limbs.',
      },
      {
        heading: 'Heat vs Cold Therapy',
        body: 'Cold packs can help reduce initial localized inflammation. Once acute pain subsides, warm compresses or warm showers promote deep muscle relaxation.',
      },
    ],
    faq: [
      { question: 'Is using warming massage oils safe?', answer: 'Yes, once acute severe cramping subsides, warming ointments help relax surrounding muscle tissue.' },
    ],
    relatedLinks: [
      { path: '/rozciaganie-przy-kurczach', label: 'Stretching for Cramps' },
      { path: '/pierwsza-pomoc', label: 'First Aid' },
    ],
  },
  '/suplementacja-magnezem': {
    h1: 'Magnesium Supplementation for Cramps',
    title: 'Does Magnesium Help Muscle Cramps? | Kurcz.pl',
    description: 'Dosages, bioavailable forms of magnesium, and safety advice.',
    intro: 'Magnesium supplementation benefits individuals with documented deficits, complementing a balanced nutritional foundation.',
    sections: [
      {
        heading: 'Bioavailable Magnesium Forms',
        body: 'Magnesium citrate, glycinate, and malate offer superior absorption compared to magnesium oxide. Consult a pharmacist or doctor for guidance.',
      },
      {
        heading: 'Supplementation Safety',
        body: 'Excessive magnesium can cause diarrhea and drug interactions. Individuals with kidney disease must avoid unmonitored supplementation.',
      },
    ],
    faq: [
      { question: 'How much magnesium for muscle cramps?', answer: 'Dosage depends on individual needs and blood work. Consult a physician to establish safe and effective daily supplementation.' },
    ],
    relatedLinks: [
      { path: '/niedobor-magnezu', label: 'Magnesium Deficiency' },
      { path: '/profilaktyka', label: 'Prevention' },
    ],
  },
  '/kurcze-ud': {
    h1: 'Thigh and Hamstring Cramps',
    title: 'Thigh and Hamstring Cramps — Causes & Relief | Kurcz.pl',
    description: 'Thigh and hamstring cramps: likely causes, safe stretching, first aid, and warning signs that need medical assessment.',
    intro: 'A thigh cramp is a sudden, painful tightening in the front, inner, or back of the thigh. It often follows exertion or muscle fatigue, but repeated symptoms deserve a wider health assessment.',
    sections: [
      { heading: 'Which thigh muscles can cramp', body: 'Cramps can affect the quadriceps at the front of the thigh, the inner-thigh adductors, or the hamstrings at the back. The location can guide comfortable stretching, but it does not diagnose the cause by itself.' },
      { heading: 'Common triggers', body: 'A training load that exceeds usual activity, inadequate preparation, fluid loss, and holding one position for a long time can contribute. Medicines, chronic conditions, and electrolyte disturbances are other possibilities.' },
      { heading: 'First aid and stretching', body: 'Stop the activity and lengthen the affected muscle slowly, without bouncing. For a hamstring cramp, gradually straighten the knee; for a front-thigh cramp, use support and gently bring the heel toward the buttock.' },
      { heading: 'Prevention and return to activity', body: 'Walk briefly after pain settles and return to exercise only once movement is comfortable. Gradual training progression, warm-ups, adequate sleep, and regular fluids are safer prevention strategies than unsupervised supplements.' },
      { heading: 'When to seek urgent care', body: 'Do not assume every severe thigh pain is a cramp. One-sided swelling, warmth or redness, breathlessness, injury, persistent weakness, or pain that does not settle after stretching needs prompt medical assessment.' },
    ],
    faq: [
      { question: 'How do I stretch a hamstring cramp?', answer: 'Sit or stand securely, slowly straighten the knee, and bring the toes toward you. Do not force a forward bend or make sudden movements.' },
      { question: 'Does a post-exercise thigh cramp mean a tear?', answer: 'Not necessarily. A cramp usually settles with gentle stretching, although tenderness can remain the next day. Bruising, swelling, a popping sensation, or persistent pain should be assessed.' },
      { question: 'Can I exercise after a thigh cramp?', answer: 'Return only when pain has resolved and movement is normal. If cramps recur, reduce the load and discuss them with a clinician or physiotherapist.' },
    ],
    relatedLinks: [
      { path: '/kurcze-nog', label: 'Leg Cramps' },
      { path: '/kurcze-u-sportowcow', label: 'Cramps in Athletes' },
      { path: '/rozciaganie-przy-kurczach', label: 'Stretching for Cramps' },
      { path: '/pierwsza-pomoc', label: 'First Aid' },
    ],
  },
  '/kurcze-dloni': {
    h1: 'Hand and Finger Cramps — Causes & Relief',
    title: 'Hand and Finger Cramps — Causes and What to Do | Kurcz.pl',
    description: 'Hand and finger cramps: possible causes, simple first aid, prevention for repetitive hand use, and when to seek advice.',
    intro: 'Hand or finger cramps are sudden, painful tightening of the small muscles of the hand. Repetitive work, cold, and strain can trigger them; recurring episodes with numbness or weakness should be medically assessed.',
    sections: [
      { heading: 'Possible causes of hand cramps', body: 'Typing, gripping tools, playing an instrument, and working in the cold can overwork the hand muscles. Fluid and electrolyte disturbances, medicine effects, and nerve irritation may also contribute.' },
      { heading: 'How to ease a finger spasm safely', body: 'Stop the task, relax the grip, and slowly straighten the fingers with the other hand. Move the wrist gently, warm a cold hand, and avoid forcefully pulling a painful finger.' },
      { heading: 'Reducing hand strain', body: 'Take short breaks from repetitive work, vary hand position, and avoid gripping tools more tightly than necessary. Better workstation or handle ergonomics can reduce overload but does not replace assessment of persistent symptoms.' },
      { heading: 'When symptoms need evaluation', body: 'Numbness, tingling, weaker grip, pain radiating from the neck, or frequent cramps in both hands can point to a nerve or metabolic issue. Arrange medical advice rather than increasing mineral supplements yourself.' },
    ],
    faq: [
      { question: 'Why do my fingers cramp while typing?', answer: 'Prolonged repetitive gripping and muscle tension are common contributors. Take a break, relax the wrist, and review workstation ergonomics.' },
      { question: 'Do hand cramps mean magnesium deficiency?', answer: 'They can occur alongside mineral disturbances, but a hand cramp alone does not prove deficiency. A clinician can assess symptoms, medication, and whether tests are needed.' },
      { question: 'When should I see a doctor for hand cramps?', answer: 'Seek advice if they are frequent, worsening, disturb sleep, or occur with numbness, weak grip, swelling, or pain after injury.' },
    ],
    relatedLinks: [
      { path: '/kurcze-a-leki', label: 'Cramps & Medications' },
      { path: '/elektrolity-a-kurcze', label: 'Electrolytes & Cramps' },
      { path: '/masaz-przy-kurczach', label: 'Massage for Cramps' },
    ],
  },
  '/elektrolity-a-kurcze': {
    h1: 'Electrolytes and Muscle Cramps',
    title: 'Electrolytes and Cramps — Sodium, Potassium, Calcium & Magnesium | Kurcz.pl',
    description: 'Sodium, potassium, calcium, and magnesium in muscle cramps: electrolyte balance, safe hydration, and when blood tests are needed.',
    intro: 'Electrolytes including sodium, potassium, calcium, and magnesium support nerve signaling and muscle contraction. Cramps can occur with electrolyte imbalance, but one cramp cannot identify a specific deficiency.',
    sections: [
      { heading: 'What the main electrolytes do', body: 'Sodium and potassium support nerve and muscle cell activity, while calcium and magnesium contribute to contraction and relaxation. Because the body regulates their levels closely, combining supplements at random is not a safe cramp treatment.' },
      { heading: 'When electrolyte balance can change', body: 'Risk can rise with vomiting, diarrhoea, heavy sweating, high fever, kidney disease, and certain medicines, particularly diuretics. The right fluid-replacement plan depends on the situation and medical history.' },
      { heading: 'Fluids and food first', body: 'For ordinary daily activity, regular drinking and a varied diet are the foundation. During prolonged exercise or substantial fluid loss, an appropriate rehydration drink may help, but the choice should account for chronic conditions.' },
      { heading: 'When testing is important', body: 'Recurring cramps with weakness, palpitations, fainting, confusion, or ongoing vomiting need urgent assessment. A clinician may order blood tests and review kidney function and medicines; do not attempt to correct suspected potassium imbalance alone.' },
    ],
    faq: [
      { question: 'Which electrolyte causes cramps most often?', answer: 'There is no single electrolyte responsible for every cramp. Fluids, muscle load, medication, and several mineral disturbances can all contribute.' },
      { question: 'Does an electrolyte drink always help?', answer: 'It may be useful during prolonged exercise or heavy sweating but is not required every day and does not treat every cause. People with kidney, heart, or diabetes conditions should seek individual advice.' },
      { question: 'Can I take potassium for cramps?', answer: 'Not without medical guidance. Both low and high potassium can be dangerous, especially with kidney disease or medicines that affect potassium levels.' },
    ],
    relatedLinks: [
      { path: '/kurcze-a-odwodnienie', label: 'Cramps & Dehydration' },
      { path: '/niedobor-magnezu', label: 'Magnesium Deficiency' },
      { path: '/kurcze-a-leki', label: 'Cramps & Medications' },
      { path: '/profilaktyka', label: 'Prevention' },
    ],
  },
  '/zespol-niespokojnych-nog-a-kurcze': {
    h1: 'Restless Legs Syndrome vs Cramps',
    title: 'Restless Legs Syndrome vs Cramps — Key Differences | Kurcz.pl',
    description: 'Restless legs syndrome versus muscle cramps: differences in symptoms, timing, and when a medical diagnosis is needed.',
    intro: 'Restless legs syndrome and painful calf cramps can both worsen in the evening, but they are not the same. The key distinction is the urge to move the legs versus a sudden, hard contraction of a muscle.',
    sections: [
      { heading: 'What a typical muscle cramp feels like', body: 'A cramp is a sudden, involuntary, usually very painful tightening of a specific muscle, often the calf or foot. The muscle feels hard and gentle stretching helps; soreness may remain afterward.' },
      { heading: 'What restless legs syndrome feels like', body: 'Restless legs syndrome involves uncomfortable sensations and an urge to move the legs, usually at rest in the evening or at night. Movement provides temporary relief, while a hard, painful muscle knot may be absent.' },
      { heading: 'Why the distinction matters', body: 'Management can differ from that for occasional cramps. Symptoms consistent with restless legs syndrome may need a discussion of sleep, medicines, iron status, and other conditions; a clinician should make the diagnosis.' },
      { heading: 'When to arrange medical advice', body: 'See a clinician when symptoms regularly disrupt sleep, affect both legs, worsen, or occur with weakness, sensory loss, or swelling. Sudden one-sided leg pain and swelling need urgent assessment.' },
    ],
    faq: [
      { question: 'Does restless legs syndrome hurt like a cramp?', answer: 'It can be very uncomfortable, but it does not usually produce the sudden hard tightening of one muscle typical of a cramp. The urge to move and relief with movement are more characteristic.' },
      { question: 'Can night cramps and restless legs syndrome occur together?', answer: 'Yes, both can occur in the same person, especially when sleep is poor. A shared cause should not be assumed without an evaluation.' },
      { question: 'Does magnesium treat restless legs syndrome?', answer: 'It is not standard treatment for the condition. Discuss supplements with a clinician, who can first assess the symptoms and possible causes.' },
    ],
    relatedLinks: [
      { path: '/kurcze-nocne', label: 'Night Cramps' },
      { path: '/kurcze-lydek', label: 'Calf Cramps' },
      { path: '/niedobor-magnezu', label: 'Magnesium Deficiency' },
    ],
  },
  '/kurcze-u-dzieci': {
    h1: 'Muscle Cramps in Children',
    title: 'Cramps in Children — Causes and When to See a Doctor | Kurcz.pl',
    description: 'Muscle cramps in children: safe first aid, possible causes, and symptoms that require a paediatrician’s advice.',
    intro: 'An isolated leg cramp after play, exercise, or at night often settles quickly in a child. Do not diagnose deficiencies or give supplements without advice: recurring or unusual symptoms should first be discussed with a paediatrician.',
    sections: [
      { heading: 'What can trigger cramps in children', body: 'Long activity, low fluid intake in hot weather, and muscle fatigue can trigger an isolated cramp. Cramps can also happen with fever, vomiting, or diarrhoea, when fluid losses are more likely.' },
      { heading: 'Safe first aid at home', body: 'Help the child slowly stretch the tense muscle in a safe position. Once pain settles, offer suitable fluids; contact a clinician if the child has a chronic condition, takes medicines, or has signs of dehydration.' },
      { heading: 'What not to do without advice', body: 'Do not give magnesium, potassium, or other preparations solely because a cramp occurred. Dosing in children depends on age, weight, diet, and health, and excess supplements can be harmful.' },
      { heading: 'When to contact a paediatrician', body: 'Seek advice when cramps recur, wake the child, limit walking, or occur with weakness, numbness, fever, vomiting, swelling, or injury. Breathing difficulty, fainting, or severe pain require urgent care.' },
    ],
    faq: [
      { question: 'Are night leg cramps normal in children?', answer: 'An isolated nighttime cramp can occur and is usually not dangerous. If it regularly disrupts sleep, is severe, or comes with other symptoms, consult a paediatrician.' },
      { question: 'Can I give my child magnesium for cramps?', answer: 'Not without advice from a doctor or pharmacist who knows the child’s age and health. First establish whether supplementation is needed.' },
      { question: 'How do cramps differ from growing pains?', answer: 'A cramp is usually a sudden, palpable tightening of one muscle. Growing pains have a different pattern and should be diagnosed after other causes are considered.' },
    ],
    relatedLinks: [
      { path: '/kurcze-nog', label: 'Leg Cramps' },
      { path: '/kurcze-a-odwodnienie', label: 'Cramps & Dehydration' },
      { path: '/pierwsza-pomoc', label: 'First Aid' },
    ],
  },
};

const section = (heading, body, bullets) => ({ heading, body, ...(bullets ? { bullets } : {}) });
const faqItem = (question, answer) => ({ question, answer });

const plLandingExpansions = {
  '/kurcze-lydek': {
    sections: [section('Kurcze łydki a inne dolegliwości nogi', 'Twardy, nagły skurcz łydki zwykle ustępuje po rozciąganiu. Jednostronny obrzęk, zaczerwienienie, ocieplenie lub ból utrzymujący się w spoczynku nie powinny być traktowane jak zwykły kurcz i wymagają oceny lekarskiej.')],
    faq: [faqItem('Czy częste kurcze łydek wymagają badań?', 'Tak, zwłaszcza gdy wracają mimo nawodnienia i rozciągania albo towarzyszy im osłabienie, drętwienie czy obrzęk. Lekarz zdecyduje, czy potrzebne są badania lub przegląd leków.')],
    relatedLinks: [{ path: '/elektrolity-a-kurcze', label: 'Elektrolity a kurcze' }],
  },
  '/kurcze-nocne': {
    sections: [
      section('Co robić po przebudzeniu z kurczem', 'Usiądź lub stań stabilnie, powoli przyciągnij palce stopy do goleni i rozmasuj mięsień po ustąpieniu największego napięcia. Nie zrywaj się gwałtownie z łóżka, ponieważ łatwo wtedy stracić równowagę.'),
      section('Sen, pozycja i wieczorna rutyna', 'Pomaga regularna, łagodna aktywność w dzień i krótkie rozciąganie łydek przed snem. Warto też sprawdzić, czy ciężka pościel nie utrzymuje stóp stale w pozycji „na palcach”.'),
    ],
    faq: [faqItem('Dlaczego nocne kurcze psują sen?', 'Silny ból wybudza, a obawa przed nawrotem utrudnia ponowne zaśnięcie. Jeśli dzieje się to regularnie, omów objawy z lekarzem zamiast polegać wyłącznie na suplementach.')],
    relatedLinks: [{ path: '/zespol-niespokojnych-nog-a-kurcze', label: 'Zespół niespokojnych nóg a kurcze' }],
  },
  '/kurcze-stop': {
    sections: [
      section('Obuwie i przeciążenie stopy', 'Ciasne buty, wysokie obcasy, długie chodzenie lub nagłe zwiększenie aktywności mogą przeciążać mięśnie podeszwy i palców. Wybieraj obuwie z miejscem na palce i zwiększaj obciążenia stopniowo.'),
      section('Kiedy zbadać nawracające skurcze stopy', 'Kurcze z bólem promieniującym, zaburzeniami czucia, ranami na stopie albo pogorszeniem chodu wymagają konsultacji. Szczególną ostrożność powinny zachować osoby z cukrzycą lub chorobami naczyń.'),
    ],
    faq: [faqItem('Czy można masować stopę po kurczu?', 'Tak, delikatny masaż podeszwy po powolnym rozciągnięciu może przynieść ulgę. Nie uciskaj mocno miejsca po urazie ani obrzękniętej, zaczerwienionej stopy.'), faqItem('Dlaczego kurcz stopy zdarza się podczas pływania?', 'Zimno, wysiłek i ustawienie stopy mogą sprzyjać skurczowi. Przerwij pływanie, zabezpiecz się przy brzegu i rozciągnij stopę spokojnie.')],
    relatedLinks: [{ path: '/kurcze-dloni', label: 'Kurcze dłoni i palców' }],
  },
  '/kurcze-u-sportowcow': {
    sections: [
      section('Nie tylko elektrolity: zmęczenie mięśni', 'Kurcze wysiłkowe często pojawiają się, gdy tempo lub dystans przekracza przygotowanie organizmu. Same elektrolity nie zastąpią stopniowego treningu, odpowiedniej regeneracji i dopasowania intensywności do warunków.'),
      section('Plan na zawody i upał', 'Pij zgodnie z pragnieniem i planem dobranym do czasu wysiłku, temperatury oraz własnej tolerancji. Nie próbuj nowych napojów, suplementów ani bardzo dużych ilości płynów po raz pierwszy w dniu startu.'),
    ],
    faq: [faqItem('Czy solne tabletki zapobiegają każdemu kurczowi?', 'Nie. Mogą być rozważane w określonych warunkach wysiłku po indywidualnym planie, lecz nadmiar sodu także może szkodzić.'), faqItem('Czy rozciągać przed biegiem?', 'Przed wysiłkiem lepsza jest rozgrzewka dynamiczna; długie statyczne rozciąganie zostaw na czas po treningu lub osobną sesję.')],
    relatedLinks: [{ path: '/elektrolity-a-kurcze', label: 'Elektrolity a kurcze' }],
  },
  '/kurcze-u-osob-starszych': {
    sections: [
      section('Leki i choroby współistniejące', 'Kurcze mogą mieć związek z lekami, odwodnieniem albo chorobami nerek, tarczycy czy naczyń, ale nie należy odstawiać terapii samodzielnie. Przygotuj listę leków i moment pojawienia się objawów na wizytę.'),
      section('Bezpieczny ruch i zapobieganie upadkom', 'Łagodne ćwiczenia równowagi i rozciąganie przy stabilnym podparciu mogą być pomocne. Przy nocnych kurczach wstawaj powoli, włącz światło i korzystaj z pomocy, jeśli równowaga jest niepewna.'),
    ],
    faq: [faqItem('Czy senior powinien pić więcej na kurcze?', 'Nawodnienie powinno być regularne, ale jego ilość należy dopasować do chorób serca i nerek oraz zaleceń lekarza.'), faqItem('Czy kurcze mogą być skutkiem leków moczopędnych?', 'Mogą zmieniać gospodarkę płynów i elektrolitów. Nie zmieniaj dawki samodzielnie — zgłoś objawy lekarzowi prowadzącemu.')],
    relatedLinks: [{ path: '/elektrolity-a-kurcze', label: 'Elektrolity a kurcze' }],
  },
  '/kurcze-u-diabetykow': {
    sections: [
      section('Kurcz, neuropatia i stopa cukrzycowa', 'Kurcz nie jest równoznaczny z neuropatią, jednak drętwienie, pieczenie, utrata czucia lub rany na stopie wymagają oceny. Codziennie oglądaj stopy i nie stosuj silnego ciepła na miejsca o zaburzonym czuciu.'),
      section('Nawodnienie i kontrola leczenia', 'Wahania glikemii, infekcje, biegunka i niektóre leki mogą wpływać na gospodarkę płynów. Nawracające kurcze omów z zespołem leczących cukrzycę, nie zmieniając samodzielnie insuliny ani leków.'),
    ],
    faq: [faqItem('Czy kurcz może wystąpić przy wysokim cukrze?', 'Może współistnieć z odwodnieniem i zaburzeniami metabolicznymi, ale nie pozwala sam w sobie ocenić glikemii. Kontroluj cukier zgodnie z planem leczenia.'), faqItem('Czy ogrzewanie stóp jest bezpieczne?', 'Przy zaburzeniach czucia istnieje ryzyko oparzenia. Wybieraj łagodne ogrzanie i sprawdzaj temperaturę, najlepiej po konsultacji z lekarzem.')],
    relatedLinks: [{ path: '/kurcze-stop', label: 'Kurcze stóp' }],
  },
  '/kurcze-a-odwodnienie': {
    sections: [
      section('Objawy odwodnienia, których nie ignorować', 'Pragnienie, ciemny mocz, suchość w ustach i ból głowy mogą sugerować niedobór płynów, lecz nie są pełną diagnozą. Splątanie, omdlenie, szybkie bicie serca, brak oddawania moczu lub utrzymujące się wymioty wymagają szybkiej pomocy medycznej.'),
      section('Nawadnianie po biegunce, upale i wysiłku', 'Uzupełniaj płyny stopniowo. Przy większej utracie płynów potrzebny może być płyn nawadniający; osoby z chorobami nerek, serca lub przyjmujące diuretyki powinny zapytać lekarza o bezpieczny plan.'),
    ],
    faq: [faqItem('Czy sam kolor moczu wystarczy do oceny nawodnienia?', 'Jest tylko orientacyjną wskazówką i może zmieniać się po lekach lub jedzeniu. Oceniaj też pragnienie, warunki, samopoczucie i zalecenia lekarza.'), faqItem('Czy można wypić za dużo wody?', 'Tak. Bardzo duże ilości wody w krótkim czasie mogą rozcieńczyć sód we krwi. Pij regularnie, a nie „na zapas”.')],
    relatedLinks: [{ path: '/elektrolity-a-kurcze', label: 'Elektrolity a kurcze' }],
  },
  '/kurcze-a-leki': {
    sections: [
      section('Jak przygotować rozmowę o lekach', 'Zapisz nazwę, dawkę, datę rozpoczęcia terapii, porę kurczy oraz inne objawy. Taka informacja pomaga lekarzowi ocenić związek czasowy i rozważyć badania bez ryzykownego samodzielnego odstawiania leków.'),
      section('Interakcje i suplementy', 'Także preparaty bez recepty mogą wpływać na nerki, elektrolity lub wchodzić w interakcje. Przed magnezem, potasem albo „mieszanką na kurcze” zapytaj farmaceutę lub lekarza o cały zestaw przyjmowanych produktów.'),
    ],
    faq: [faqItem('Czy każdy ból mięśni po statynie to kurcz?', 'Nie. Ból, sztywność i osłabienie mięśni mogą mieć różne przyczyny. Nowe lub nasilone objawy zgłoś lekarzowi, zwłaszcza gdy towarzyszy im ciemny mocz.'), faqItem('Czy leki można brać o innej porze, aby uniknąć kurczy?', 'Nie zmieniaj pory ani dawki bez konsultacji. Czas przyjmowania zależy od leku i wskazania.')],
    relatedLinks: [{ path: '/suplementacja-magnezem', label: 'Suplementacja magnezem' }],
  },
  '/masaz-przy-kurczach': {
    sections: [
      section('Masaż jako uzupełnienie rozciągania', 'Najpierw zmniejsz napięcie przez spokojne wydłużenie mięśnia, a potem stosuj lekki masaż. Mocny ucisk w trakcie ostrego bólu może zwiększyć dyskomfort i nie powinien zastępować oceny po urazie.'),
      section('Kiedy nie masować bolesnej nogi', 'Nie masuj miejsca z nagłym jednostronnym obrzękiem, zaczerwienieniem, ociepleniem, urazem lub silnym bólem niewiadomego pochodzenia. Takie objawy mogą wymagać pilnej diagnostyki, a nie rozluźniania tkanek.'),
    ],
    faq: [faqItem('Czy pistolet do masażu pomaga na kurcz?', 'Nie stosuj intensywnej perkusji na świeżo bolesnym, napiętym mięśniu. Bezpieczniejsze jest spokojne rozciąganie i delikatny masaż ręczny po ustąpieniu ostrego bólu.'), faqItem('Czy masaż może zapobiegać kurczom?', 'Może poprawić komfort niektórym osobom, lecz podstawą są stopniowanie wysiłku, nawodnienie i wyjaśnienie przyczyny nawrotów.')],
    relatedLinks: [{ path: '/kurcze-a-leki', label: 'Kurcze a leki' }],
  },
  '/suplementacja-magnezem': {
    sections: [
      section('Dowody i realistyczne oczekiwania', 'Magnez nie jest uniwersalnym lekiem na kurcze. Może mieć znaczenie przy potwierdzonym niedoborze, natomiast przy kurczach idiopatycznych skuteczność suplementacji nie jest pewna.'),
      section('Badania, dieta i interakcje', 'Lekarz może ocenić dietę, objawy, nerki i przyjmowane leki przed zaleceniem preparatu. Magnez może osłabiać wchłanianie niektórych leków, dlatego odstępy i wybór produktu ustala się indywidualnie.'),
    ],
    faq: [faqItem('Czy magnez można brać w ciąży?', 'Tylko po konsultacji z lekarzem prowadzącym ciążę. Bezpieczeństwo i wskazanie zależą od całego stanu zdrowia, a nie wyłącznie od kurczy.'), faqItem('Czy biegunka po magnezie jest normalna?', 'Jest częstym działaniem niepożądanym niektórych preparatów. Skontaktuj się z lekarzem lub farmaceutą zamiast zwiększać albo kontynuować dawkę mimo objawów.')],
    relatedLinks: [{ path: '/elektrolity-a-kurcze', label: 'Elektrolity a kurcze' }],
  },
  '/rozciaganie-przy-kurczach': {
    sections: [section('Pozycja, oddech i bezpieczeństwo', 'Wybierz stabilne podparcie, oddychaj spokojnie i zwiększaj zakres tylko do uczucia łagodnego ciągnięcia. Zatrzymaj się, jeśli pojawia się ostry ból, zawroty głowy lub podejrzenie urazu.')],
    faq: [faqItem('Czy rozciąganie zapobiega kurczom?', 'Regularne, łagodne rozciąganie może pomóc części osób, zwłaszcza przy nocnych kurczach łydek. Nie gwarantuje jednak zapobiegania wszystkim nawrotom.'), faqItem('Czy rozciągać mięsień, jeśli jest obolały następnego dnia?', 'Możesz wykonywać łagodne ruchy w bezbolesnym zakresie. Przy narastającym bólu, obrzęku, siniaku lub podejrzeniu urazu skonsultuj się z lekarzem lub fizjoterapeutą.')],
    relatedLinks: [{ path: '/kurcze-ud', label: 'Kurcze ud' }],
  },
  '/niedobor-magnezu': {
    sections: [section('Co potwierdza niedobór magnezu', 'Objawy są nieswoiste, a pojedynczy wynik magnezu w surowicy nie zawsze odzwierciedla całe zasoby organizmu. Lekarz interpretuje wynik razem z dietą, lekami, pracą nerek i innymi objawami.')],
    faq: [faqItem('Czy dieta wystarczy, aby uzupełnić magnez?', 'U wielu osób zwiększenie udziału produktów bogatych w magnez jest rozsądnym pierwszym krokiem. Przy potwierdzonym niedoborze lub chorobach współistniejących plan leczenia ustala lekarz.')],
    relatedLinks: [{ path: '/elektrolity-a-kurcze', label: 'Elektrolity a kurcze' }],
  },
};

const enLandingExpansions = {
  '/kurcze-lydek': { sections: [section('Calf cramps versus other leg pain', 'A sudden, hard calf spasm usually settles with stretching. One-sided swelling, redness, warmth, or pain that persists at rest should not be assumed to be an ordinary cramp and needs medical assessment.')], faq: [faqItem('Do frequent calf cramps need tests?', 'Yes, particularly if they persist despite hydration and stretching or come with weakness, numbness, or swelling. A clinician can decide whether tests or a medication review are appropriate.')], relatedLinks: [{ path: '/elektrolity-a-kurcze', label: 'Electrolytes & Cramps' }] },
  '/kurcze-nocne': { sections: [section('What to do after waking with a cramp', 'Sit or stand securely, draw the toes toward the shin slowly, and massage the muscle once the tightest contraction has eased. Avoid jumping out of bed, as this can increase the risk of a fall.'), section('Sleep position and an evening routine', 'Gentle daytime activity and a short calf stretch before bed can help. Check that heavy bedding is not holding the feet in a pointed position all night.')], faq: [faqItem('Why do night cramps disrupt sleep?', 'Severe pain wakes you, and fear of recurrence can make it hard to fall asleep again. Discuss regular episodes with a clinician instead of relying solely on supplements.')], relatedLinks: [{ path: '/zespol-niespokojnych-nog-a-kurcze', label: 'Restless Legs Syndrome vs Cramps' }] },
  '/kurcze-stop': { sections: [section('Footwear and foot overload', 'Tight shoes, high heels, prolonged walking, and sudden activity increases can overload the sole and toe muscles. Choose shoes with toe room and increase load gradually.'), section('When recurring foot cramps need review', 'Cramps with radiating pain, sensory changes, foot wounds, or worsening gait need clinical advice. People with diabetes or vascular conditions should be particularly cautious.')], faq: [faqItem('Can I massage my foot after a cramp?', 'Yes, gentle sole massage after slow stretching can help. Do not press firmly on an injured, swollen, or red foot.'), faqItem('Why can a foot cramp happen while swimming?', 'Cold, exertion, and foot position can contribute. Stop swimming, get safely to the edge, and stretch the foot gradually.')], relatedLinks: [{ path: '/kurcze-dloni', label: 'Hand and Finger Cramps' }] },
  '/kurcze-u-sportowcow': { sections: [section('Muscle fatigue, not only electrolytes', 'Exercise-associated cramps often occur when pace or distance exceeds conditioning. Electrolytes alone cannot replace gradual training, recovery, and an intensity suited to the conditions.'), section('A plan for racing and heat', 'Drink according to thirst and a plan suited to exercise duration, heat, and your own tolerance. Do not trial new drinks, supplements, or very large fluid volumes for the first time on race day.')], faq: [faqItem('Do salt tablets prevent every cramp?', 'No. They may be considered in specific endurance settings as part of an individual plan, but excess sodium can also be harmful.'), faqItem('Should I stretch before a run?', 'Dynamic warm-up is usually more appropriate before exercise; save prolonged static stretching for after training or a separate session.')], relatedLinks: [{ path: '/elektrolity-a-kurcze', label: 'Electrolytes & Cramps' }] },
  '/kurcze-u-osob-starszych': { sections: [section('Medicines and coexisting conditions', 'Cramps may relate to medicines, fluid balance, kidney disease, thyroid disease, or vascular conditions, but treatment should never be stopped independently. Bring a medication list and symptom timeline to the appointment.'), section('Safe movement and fall prevention', 'Gentle balance exercise and supported stretching can help. If a night cramp occurs, get up slowly, use a light, and seek support if balance is uncertain.')], faq: [faqItem('Should an older adult drink more for cramps?', 'Fluid intake should be regular but tailored to heart or kidney conditions and the clinician’s advice.'), faqItem('Can diuretics contribute to cramps?', 'They can affect fluid and electrolyte balance. Do not change the dose yourself; report symptoms to the prescriber.')], relatedLinks: [{ path: '/elektrolity-a-kurcze', label: 'Electrolytes & Cramps' }] },
  '/kurcze-u-diabetykow': { sections: [section('Cramps, neuropathy, and diabetic feet', 'A cramp is not the same as neuropathy, but numbness, burning, reduced sensation, or foot wounds need assessment. Inspect feet daily and avoid intense heat on areas with reduced sensation.'), section('Hydration and treatment review', 'Glucose variation, infection, diarrhoea, and some medicines can affect fluid balance. Discuss recurring cramps with the diabetes care team rather than changing insulin or medicines yourself.')], faq: [faqItem('Can a cramp occur with high blood sugar?', 'It may coexist with dehydration or metabolic changes, but it cannot assess blood glucose on its own. Follow your usual glucose-monitoring plan.'), faqItem('Is warming the feet safe?', 'Reduced sensation increases burn risk. Use only gentle warmth and discuss safe options with your clinician.')], relatedLinks: [{ path: '/kurcze-stop', label: 'Foot Cramps' }] },
  '/kurcze-a-odwodnienie': { sections: [section('Dehydration signs not to ignore', 'Thirst, dark urine, dry mouth, and headache can suggest low fluid intake but do not provide a complete diagnosis. Confusion, fainting, rapid heartbeat, very low urine output, or persistent vomiting need prompt care.'), section('Rehydration after illness, heat, or exercise', 'Replace fluids gradually. Major fluid losses may require an oral rehydration solution; people with kidney or heart conditions or diuretic use should ask a clinician for an individual plan.')], faq: [faqItem('Is urine colour enough to assess hydration?', 'It is only a rough clue and can be affected by food or medicines. Consider thirst, conditions, wellbeing, and medical advice as well.'), faqItem('Can you drink too much water?', 'Yes. Very large volumes in a short time can dilute blood sodium. Drink regularly rather than trying to “catch up” all at once.')], relatedLinks: [{ path: '/elektrolity-a-kurcze', label: 'Electrolytes & Cramps' }] },
  '/kurcze-a-leki': { sections: [section('Preparing a medication discussion', 'Record the medicine name, dose, start date, timing of cramps, and other symptoms. This helps a clinician assess timing and consider testing without risky self-discontinuation.'), section('Interactions and supplements', 'Over-the-counter products can also affect kidneys, electrolytes, or drug absorption. Ask a clinician or pharmacist about your full medication list before adding magnesium, potassium, or a “cramp” product.')], faq: [faqItem('Is every muscle pain on a statin a cramp?', 'No. Pain, stiffness, and weakness have several possible causes. Report new or worsening symptoms, especially with dark urine.'), faqItem('Can I change the time I take a medicine?', 'Do not change timing or dose without advice. The best schedule depends on the medicine and its indication.')], relatedLinks: [{ path: '/suplementacja-magnezem', label: 'Magnesium Supplementation' }] },
  '/masaz-przy-kurczach': { sections: [section('Massage after stretching', 'First reduce tension by slowly lengthening the muscle, then use light massage. Firm pressure during severe pain can increase discomfort and should not replace assessment after injury.'), section('When not to massage a painful leg', 'Do not massage sudden one-sided swelling, redness, warmth, injury, or severe pain of unknown cause. These signs may need urgent diagnosis rather than tissue relaxation.')], faq: [faqItem('Does a massage gun help a cramp?', 'Avoid intense percussion on a freshly painful, tight muscle. Slow stretching and gentle manual massage after acute pain settles are safer.'), faqItem('Can massage prevent cramps?', 'It may improve comfort for some people, but gradual training, hydration, and finding the cause of recurring cramps remain central.')], relatedLinks: [{ path: '/kurcze-a-leki', label: 'Cramps & Medications' }] },
  '/suplementacja-magnezem': { sections: [section('Evidence and realistic expectations', 'Magnesium is not a universal cramp remedy. It can matter when deficiency is confirmed, while benefit for idiopathic cramps remains uncertain.'), section('Testing, diet, and interactions', 'A clinician can review diet, symptoms, kidney function, and medicines before recommending a product. Magnesium can reduce absorption of some medicines, so timing and formulation need individual advice.')], faq: [faqItem('Can I take magnesium in pregnancy?', 'Only after discussing it with the clinician managing the pregnancy. Safety and indication depend on overall health, not cramps alone.'), faqItem('Is diarrhoea from magnesium normal?', 'It is a common adverse effect of some products. Ask a clinician or pharmacist rather than increasing or continuing a dose despite symptoms.')], relatedLinks: [{ path: '/elektrolity-a-kurcze', label: 'Electrolytes & Cramps' }] },
  '/rozciaganie-przy-kurczach': { sections: [section('Position, breathing, and safety', 'Use stable support, breathe calmly, and increase range only to a mild pulling sensation. Stop for sharp pain, dizziness, or suspected injury.')], faq: [faqItem('Does stretching prevent cramps?', 'Regular gentle stretching can help some people, especially with nighttime calf cramps, but it cannot guarantee prevention of every recurrence.'), faqItem('Should I stretch a muscle that is sore the next day?', 'Gentle movement within a pain-free range can be reasonable. Increasing pain, swelling, bruising, or suspected injury should be assessed by a clinician or physiotherapist.')], relatedLinks: [{ path: '/kurcze-ud', label: 'Thigh and Hamstring Cramps' }] },
  '/niedobor-magnezu': { sections: [section('What confirms magnesium deficiency', 'Symptoms are non-specific, and a single serum result does not always reflect total body stores. A clinician interprets it alongside diet, medicines, kidney function, and other symptoms.')], faq: [faqItem('Can diet alone restore magnesium?', 'For many people, increasing magnesium-rich foods is a sensible first step. Confirmed deficiency or coexisting illness needs a clinician-led plan.')], relatedLinks: [{ path: '/elektrolity-a-kurcze', label: 'Electrolytes & Cramps' }] },
};

function appendLandingContent(pages, expansions) {
  for (const page of pages) {
    const expansion = expansions[page.path];
    if (expansion) {
      page.sections = [...page.sections, ...expansion.sections];
      page.faq = [...page.faq, ...expansion.faq];
      page.relatedLinks = [...page.relatedLinks, ...expansion.relatedLinks];
    }
  }
}

function appendEnLandingContent(overrides, expansions) {
  for (const [path, page] of Object.entries(overrides)) {
    const expansion = expansions[path];
    if (expansion) {
      page.sections = [...page.sections, ...expansion.sections];
      page.faq = [...page.faq, ...expansion.faq];
      page.relatedLinks = [...page.relatedLinks, ...expansion.relatedLinks];
    }
  }
}

appendLandingContent(landingPages, plLandingExpansions);
appendEnLandingContent(landingPagesEnMap, enLandingExpansions);

export function getLandingPage(path, locale = 'pl') {
  const page = landingPages.find((p) => p.path === path);
  if (!page) return null;
  if (locale === 'en') {
    const enOverrides = landingPagesEnMap[path];
    if (!enOverrides) return page;
    return {
      ...page,
      ...enOverrides,
    };
  }
  return page;
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
