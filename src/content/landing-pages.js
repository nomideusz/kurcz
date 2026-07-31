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
    h1: 'Skurcze łydek w ciąży — przyczyny i ulga',
    title: 'Skurcze łydek w ciąży — 2. i 3. trymestr | Kurcz.pl',
    description: 'Skurcze łydek i nóg w ciąży (2. i 3. trymestr): jak często się pojawiają, przyczyny, bezpieczna pierwsza pomoc, magnez i kiedy wezwać lekarza. Także po angielsku: calf cramps in pregnancy.',
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
    title: 'Night Cramps — Causes and Effective Solutions | Kurcz.pl',
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
};

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
