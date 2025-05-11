export default function() {
  return {
    faqs: [
      {
        question: 'Jaka jest różnica między kurczem a skurczem mięśni?',
        answer: 'Choć w języku potocznym terminy te bywają używane zamiennie, mają różne znaczenia medyczne. Kurcz to nagłe, mimowolne i zazwyczaj bolesne napięcie mięśnia, zawsze nieświadome i patologiczne (np. kurcz łydki, stopy). Skurcz natomiast to szersze pojęcie — fizjologiczny proces napinania się mięśnia, który może być świadomy lub mimowolny. W terminologii medycznej preferowany jest termin „skurcz”, natomiast w mowie potocznej częściej używa się określenia „kurcz” dla bolesnych, nagłych napięć mięśniowych. Można powiedzieć, że każdy kurcz jest rodzajem skurczu, ale nie każdy skurcz jest kurczem.',
        open: false
      },
      {
        question: 'Kiedy kurcze mięśniowe wymagają konsultacji z lekarzem?',
        answer: 'Natychmiastowej konsultacji lekarskiej wymagają kurcze, które: utrzymują się dłużej niż 10 minut mimo rozciągania, występują regularnie (kilka razy w tygodniu), powodują silny ból lub obrzęk, dotyczą wielu grup mięśniowych jednocześnie, pojawiają się po kontakcie z potencjalnym alergenem, lub towarzyszą im inne objawy neurologiczne (drętwienie, mrowienie, osłabienie). Również kurcze u osób z cukrzycą, chorobami nerek lub wątroby zawsze powinny być konsultowane.',
        open: false
      },
      {
        question: 'Jakie leki mogą powodować kurcze mięśniowe jako skutek uboczny?',
        answer: 'Wiele powszechnie stosowanych leków może zwiększać ryzyko kurczy mięśniowych. Należą do nich: statyny (leki obniżające cholesterol), diuretyki (leki moczopędne), beta-blokery (na nadciśnienie), niektóre leki psychiatryczne, doustne środki antykoncepcyjne, steroidy oraz leki na osteoporozę. Jeśli doświadczasz kurczy po rozpoczęciu nowej terapii, skonsultuj się z lekarzem — nigdy nie odstawiaj leków na własną rękę.',
        open: false
      },
      {
        question: 'Czy kurcze nocne można skutecznie wyeliminować?',
        answer: 'Tak, nocne kurcze można często wyeliminować lub znacząco zredukować poprzez: wykonywanie ćwiczeń rozciągających przed snem (szczególnie łydek i stóp), spanie w pozycji zapobiegającej zgięciu stopy podeszwowemu, stosowanie łóżka z luźno ułożoną pościelą (aby stopy nie były przyciśnięte), utrzymywanie odpowiedniego nawodnienia wieczorem (bez nadmiaru), oraz przyjmowanie magnezu i potasu na noc po konsultacji z lekarzem. Regularna aktywność fizyczna w ciągu dnia również zmniejsza częstotliwość nocnych kurczy.',
        open: false
      },
      {
        question: 'Jaki związek mają kurcze mięśniowe z niedoborami witamin?',
        answer: 'Niedobory witamin z grupy B (szczególnie B6 i B12), witaminy D i witaminy E mogą przyczyniać się do występowania kurczy mięśniowych. Witamina B6 i B12 są kluczowe dla prawidłowego funkcjonowania układu nerwowego, witamina D wpływa na gospodarkę wapniową i funkcje mięśni, a witamina E działa jako przeciwutleniacz chroniący komórki mięśniowe. Diagnostyka poziomu witamin we krwi może być istotnym elementem w przypadku nawracających kurczy niewiadomego pochodzenia.',
        open: false
      },
      {
        question: 'Jak wibroakustyka pomaga w leczeniu kurczy mięśniowych?',
        answer: 'Terapia wibroakustyczna wykorzystuje fale dźwiękowe o niskiej częstotliwości (20-120 Hz), które penetrują tkanki głęboko, powodując ich mikrowibracje. Ten rodzaj terapii pomaga przy kurczach mięśniowych poprzez: zwiększenie przepływu krwi w mikrokrążeniu, poprawę dostarczania tlenu i składników odżywczych do mięśni, przyspieszenie usuwania produktów przemiany materii, relaksację mięśni i redukcję napięcia, oraz stymulację uwalniania endorfin — naturalnych przeciwbólowych substancji organizmu. Efekty są często odczuwalne już po pierwszej sesji.',
        open: false
      },
      {
        question: 'Czy istnieją grupy zawodowe szczególnie narażone na kurcze mięśniowe?',
        answer: 'Tak, do grup zawodowych o podwyższonym ryzyku kurczy mięśniowych należą: pracownicy fizyczni wykonujący powtarzalne ruchy (np. operatorzy maszyn, kasjerzy), osoby pracujące w pozycji statycznej przez długi czas (programiści, kierowcy, pracownicy biurowi), zawodnicy sportów wytrzymałościowych, muzycy (szczególnie instrumentaliści), pracownicy pracujący w wysokich temperaturach (hutnicy, piekarze, kucharze) oraz osoby narażone na silny stres (menedżerowie, pracownicy służb ratunkowych). Dla każdej z tych grup istnieją dedykowane strategie profilaktyczne.',
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
            <span class="section-subtitle block text-sm sm:text-base text-blue-600 font-semibold mb-2">Pytania i odpowiedzi</span>
            <h2 class="section-title text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Najczęściej zadawane pytania
            </h2>
            <p class="section-description text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Zebraliśmy szczegółowe odpowiedzi na specjalistyczne pytania dotyczące kurczy mięśniowych,
              których nie poruszono w innych sekcjach strony. Jeśli nie znajdziesz tu odpowiedzi na swoje pytanie, skontaktuj się z nami.
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
                    <span class="font-semibold text-base sm:text-lg text-gray-800" x-text="faq.question"></span>
                    <svg 
                      class="w-5 h-5 text-blue-500 transition-transform duration-300 flex-shrink-0" 
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
                    <p class="text-base sm:text-lg text-gray-600" x-text="faq.answer"></p>
                  </div>
                </div>
              </template>
            </div>
          </div>
          
          <div class="max-w-6xl mx-auto mt-12 md:mt-16 bg-gray-50 rounded-xl p-6 sm:p-8 text-center">
            <h3 class="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">Masz inne pytania?</h3>
            <p class="text-base sm:text-lg text-gray-600 mb-5 sm:mb-6 max-w-3xl mx-auto">
              Jeśli nie znalazłeś odpowiedzi na swoje pytanie lub potrzebujesz bardziej spersonalizowanej informacji,
              skontaktuj się z nami. Nasi specjaliści chętnie odpowiedzą na wszystkie Twoje wątpliwości dotyczące kurczy mięśniowych.
            </p>
            <button 
              @click="document.getElementById('contact').scrollIntoView({behavior: 'smooth', block: 'start'})" 
              type="button"
              class="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg">
              Skontaktuj się z nami
              <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </button>
          </div>
        </div>
      </section>
    `
  };
} 