export default function() {
  return {
    faqs: [
      {
        question: 'Czy kurcz można wyleczyć?',
        answer: 'Tak, kurcze mięśniowe można skutecznie wyleczyć. Skuteczność leczenia zależy od wielu czynników, w tym od indywidualnych predyspozycji pacjenta, czasu trwania dolegliwości i zastosowanego programu terapeutycznego. Najlepsze efekty osiąga się przy kompleksowym podejściu łączącym fizjoterapię, odpowiednie nawodnienie i suplementację.',
        open: false
      },
      {
        question: 'Jak długo trwa rehabilitacja?',
        answer: 'Czas trwania rehabilitacji jest indywidualny dla każdego pacjenta i zależy od stopnia nasilenia dolegliwości. Zazwyczaj pierwsze rezultaty są widoczne po 3-4 tygodniach systematycznej pracy, a pełny proces rehabilitacji może trwać od 2 do 6 miesięcy. Kluczowa jest regularność wykonywania zaleconych ćwiczeń.',
        open: false
      },
      {
        question: 'Czy mogę ćwiczyć samodzielnie w domu?',
        answer: 'Tak, jednak kluczowe jest najpierw nauczenie się prawidłowego wykonywania ćwiczeń pod okiem specjalisty. Po opanowaniu prawidłowej techniki ćwiczeń, pacjent otrzymuje indywidualnie dobrany program ćwiczeń do samodzielnego wykonywania w domu. Regularne wykonywanie zaleconych ćwiczeń przyspiesza proces zdrowienia.',
        open: false
      },
      {
        question: 'Czy mogę biegać podczas rehabilitacji?',
        answer: 'Na początkowym etapie rehabilitacji zazwyczaj zaleca się ograniczenie lub czasowe zaprzestanie biegania, aby zmniejszyć obciążenie stawów i mięśni. W miarę postępów w terapii, aktywność biegowa jest stopniowo przywracana, często z modyfikacjami techniki biegu. Zawsze konsultuj się z fizjoterapeutą przed powrotem do biegania.',
        open: false
      },
      {
        question: 'Jakie są objawy kurczu mięśniowego?',
        answer: 'Objawy mogą obejmować nagły, intensywny ból mięśnia, wyczuwalny twardy skurcz lub guzek w mięśniu, czasową niemożność używania mięśnia, a w przypadku kurczy łydki - uczucie ściągnięcia lub skrócenia mięśnia. Kurcze mogą wystąpić podczas aktywności fizycznej, w nocy lub po długotrwałym pozostawaniu w jednej pozycji.',
        open: false
      },
      {
        question: 'Jak zapobiegać kurczom mięśniowym?',
        answer: 'Regularne nawadnianie, odpowiednia dieta bogata w elektrolity (magnez, potas, wapń), rozgrzewka przed aktywnością fizyczną i stretching po niej, unikanie przeciążeń mięśniowych oraz stopniowe zwiększanie intensywności treningów to kluczowe elementy profilaktyki kurczy mięśniowych. Warto również zadbać o odpowiednią suplementację, zwłaszcza przy intensywnym wysiłku fizycznym.',
        open: false
      }
    ],
    toggleFaq(index) {
      this.faqs = this.faqs.map((faq, i) => ({
        ...faq,
        open: i === index ? !faq.open : false
      }));
    },
    
    template: `
      <section id="faq" class="py-20 bg-gray-50">
        <div class="container mx-auto px-6">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Najczęściej zadawane pytania</h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
              Odpowiedzi na najczęstsze pytania dotyczące kurczy mięśniowych i ich leczenia
            </p>
          </div>
          
          <div class="max-w-3xl mx-auto">
            <template x-for="(faq, index) in faqs" :key="index">
              <div class="mb-4 border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm transition-all duration-200">
                <button 
                  @click="toggleFaq(index)"
                  class="flex justify-between items-center w-full p-5 text-left"
                >
                  <span class="text-lg font-semibold text-gray-800" x-text="faq.question"></span>
                  <svg 
                    class="w-5 h-5 text-blue-500 transform transition-transform duration-200"
                    :class="faq.open ? 'rotate-180' : ''"
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div 
                  x-show="faq.open" 
                  x-transition:enter="transition ease-out duration-200"
                  x-transition:enter-start="opacity-0 transform -translate-y-2"
                  x-transition:enter-end="opacity-100 transform translate-y-0"
                  x-transition:leave="transition ease-in duration-150"
                  x-transition:leave-start="opacity-100 transform translate-y-0"
                  x-transition:leave-end="opacity-0 transform -translate-y-2"
                  class="px-5 pb-5 pt-0"
                >
                  <p class="text-gray-600" x-text="faq.answer"></p>
                </div>
              </div>
            </template>
          </div>
          
          <div class="text-center mt-12">
            <p class="text-gray-600 mb-6">Masz inne pytanie? Skontaktuj się z nami!</p>
            <button 
              type="button"
              @click="window.location.href='#contact'"
              class="inline-flex items-center justify-center rounded-lg bg-blue-700 text-white font-semibold px-6 py-3 shadow-lg hover:bg-blue-800 hover:text-white hover:shadow-xl transition-all duration-300"
            >
              Skontaktuj się
              <svg class="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </button>
          </div>
        </div>
      </section>
    `
  };
} 