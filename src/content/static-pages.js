export const staticPages = {
  '/o-nas': {
    h1: 'O nas — Kurcz.pl',
    title: 'O nas — Kurcz.pl',
    description: 'Poznaj misję Kurcz.pl — portalu edukacyjnego o kurczach mięśniowych. Rzetelne informacje oparte na wiedzy medycznej.',
    breadcrumbLabel: 'O nas',
    sections: [
      {
        heading: 'Nasza misja',
        body: 'Kurcz.pl to kompendium wiedzy o kurczach mięśniowych — ich przyczynach, objawach, leczeniu i profilaktyce. Naszym celem jest dostarczanie rzetelnych, zrozumiałych informacji edukacyjnych, które pomagają zrozumieć tę powszechną dolegliwość i skutecznie sobie z nią radzić.',
      },
      {
        heading: 'Dla kogo tworzymy treści',
        body: 'Tworzymy treści dla osób doświadczających kurczy mięśniowych — sportowców, osób pracujących fizycznie, seniorów, kobiet w ciąży oraz wszystkich, którzy szukają praktycznej wiedzy o pierwszej pomocy i profilaktyce.',
      },
      {
        heading: 'Współpraca i partnerzy',
        body: 'Współpracujemy z ekspertami z dziedzin medycyny, fizjoterapii, wibroakustyki i jogi. Na stronie znajdziesz linki do naszych partnerów: Wibroakustyka.ai, Kompi.pl, Intertech Poland oraz Szkoły Jogi.',
      },
    ],
  },
  '/regulamin': {
    h1: 'Regulamin serwisu Kurcz.pl',
    title: 'Regulamin — Kurcz.pl',
    description: 'Regulamin korzystania z serwisu Kurcz.pl — zasady użytkowania, odpowiedzialność i prawa użytkowników.',
    breadcrumbLabel: 'Regulamin',
    sections: [
      {
        heading: 'Postanowienia ogólne',
        body: 'Serwis Kurcz.pl (dalej: „Serwis”) udostępnia treści edukacyjne o kurczach mięśniowych. Korzystanie z Serwisu oznacza akceptację niniejszego regulaminu.',
      },
      {
        heading: 'Charakter treści',
        body: 'Treści publikowane w Serwisie mają charakter wyłącznie edukacyjny i informacyjny. Nie stanowią porady medycznej, diagnozy ani zaleceń terapeutycznych. W razie problemów zdrowotnych skonsultuj się z lekarzem.',
      },
      {
        heading: 'Prawa autorskie',
        body: 'Wszystkie treści, grafiki i materiały w Serwisie są chronione prawem autorskim. Kopiowanie, rozpowszechnianie lub wykorzystywanie komercyjne bez zgody administratora jest zabronione.',
      },
      {
        heading: 'Kontakt',
        body: 'W sprawach związanych z regulaminem skontaktuj się z nami przez formularz na stronie /kontakt.',
      },
    ],
  },
  '/polityka-prywatnosci': {
    h1: 'Polityka prywatności — Kurcz.pl',
    title: 'Polityka prywatności — Kurcz.pl',
    description: 'Polityka prywatności Kurcz.pl — informacje o przetwarzaniu danych osobowych, plikach cookies i analityce.',
    breadcrumbLabel: 'Polityka prywatności',
    sections: [
      {
        heading: 'Administrator danych',
        body: 'Administratorem danych osobowych przekazywanych przez formularz kontaktowy jest operator serwisu Kurcz.pl. Dane przetwarzane są wyłącznie w celu udzielenia odpowiedzi na zapytanie.',
      },
      {
        heading: 'Pliki cookies i analityka',
        body: 'Serwis może wykorzystywać pliki cookies oraz narzędzia analityczne (np. Google Analytics przez Google Tag Manager) w celu analizy ruchu i poprawy jakości serwisu. Możesz zarządzać cookies w ustawieniach przeglądarki.',
      },
      {
        heading: 'Twoje prawa',
        body: 'Przysługuje Ci prawo dostępu do danych, ich sprostowania, usunięcia, ograniczenia przetwarzania oraz wniesienia skargi do Prezesa UODO.',
      },
      {
        heading: 'Kontakt w sprawach RODO',
        body: 'W sprawach związanych z ochroną danych osobowych skontaktuj się z nami przez formularz na stronie /kontakt.',
      },
    ],
  },
  '/disclaimer-medyczny': {
    h1: 'Disclaimer medyczny — Kurcz.pl',
    title: 'Disclaimer medyczny — Kurcz.pl',
    description: 'Disclaimer medyczny Kurcz.pl — informacje edukacyjne nie zastępują porady lekarskiej. Ważne zastrzeżenia YMYL.',
    breadcrumbLabel: 'Disclaimer medyczny',
    sections: [
      {
        heading: 'Charakter informacji',
        body: 'Wszystkie treści publikowane na Kurcz.pl mają charakter wyłącznie edukacyjny i informacyjny. Nie stanowią porady medycznej, diagnozy klinicznej ani planu leczenia.',
      },
      {
        heading: 'Konsultacja lekarska',
        body: 'W przypadku problemów zdrowotnych, nawracających kurczy mięśniowych, silnego bólu lub objawów towarzyszących zawsze skonsultuj się z lekarzem lub fizjoterapeutą. Nie stosuj informacji ze strony jako substytutu profesjonalnej opieki medycznej.',
      },
      {
        heading: 'Leki i suplementy',
        body: 'Informacje o lekach, suplementach diety i metodach leczenia nie zastępują konsultacji z lekarzem. Nigdy nie rozpoczynaj ani nie odstawiaj leków na własną rękę.',
      },
      {
        heading: 'Pilne przypadki',
        body: 'W sytuacji zagrożenia życia lub zdrowia natychmiast zadzwoń pod numer alarmowy 112 lub udaj się do najbliższego szpitala.',
      },
    ],
  },
};

export function getStaticPage(path) {
  return staticPages[path] ?? null;
}
