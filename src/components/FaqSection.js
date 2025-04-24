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
      <section id="faq" class="py-20 bg-white">
        <div class="container mx-auto px-6">
          <div class="max-w-6xl mx-auto text-center mb-16">
            <span class="section-subtitle">Pytania i odpowiedzi</span>
            <h2 class="section-title">
              Najczęściej zadawane pytania
            </h2>
            <p class="section-description">
              Zebraliśmy odpowiedzi na najczęściej zadawane pytania dotyczące kurczy mięśniowych.
              Jeśli nie znajdziesz tu odpowiedzi na swoje pytanie, skontaktuj się z nami.
            </p>
          </div>
          
          <div class="max-w-6xl mx-auto">
            <div class="bg-white shadow-soft rounded-xl overflow-hidden">
              <template x-for="(faq, index) in faqs" :key="index">
                <div class="border-b border-gray-200 last:border-0">
                  <button 
                    @click="toggleFaq(index)" 
                    class="w-full text-left px-6 py-5 focus:outline-none flex justify-between items-center"
                    :class="faq.open ? 'bg-blue-50' : 'hover:bg-gray-50'"
                  >
                    <span class="font-semibold text-lg text-gray-800" x-text="faq.question"></span>
                    <svg 
                      class="w-5 h-5 text-blue-500 transition-transform duration-300" 
                      :class="faq.open ? 'transform rotate-180' : ''"
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
                    x-transition:enter-start="opacity-0"
                    x-transition:enter-end="opacity-100"
                    x-transition:leave="transition ease-in duration-150"
                    x-transition:leave-start="opacity-100"
                    x-transition:leave-end="opacity-0"
                    class="px-6 py-5 bg-blue-50 border-t border-blue-100"
                  >
                    <p class="text-gray-600" x-text="faq.answer"></p>
                  </div>
                </div>
              </template>
            </div>
          </div>
          
          <div class="max-w-6xl mx-auto mt-16 bg-gray-50 rounded-xl p-8 text-center">
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">Masz inne pytania?</h3>
            <p class="text-gray-600 mb-6 max-w-3xl mx-auto">
              Jeśli nie znalazłeś odpowiedzi na swoje pytanie lub potrzebujesz więcej informacji,
              skontaktuj się z nami. Nasi specjaliści chętnie odpowiedzą na wszystkie Twoje pytania.
            </p>
            <a 
              @click.prevent="document.getElementById('contact').scrollIntoView({behavior: 'smooth', block: 'start'})" 
              href="#contact" 
              class="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg">
              Skontaktuj się z nami
              <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
    `
  };
} 