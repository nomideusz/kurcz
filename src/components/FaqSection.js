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
      <section id="faq" class="py-24 md:py-32 bg-white relative overflow-hidden">
        <!-- Background accents -->
        <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div class="absolute top-0 right-[-10%] w-[40%] h-[50%] bg-gradient-to-bl from-gray-50 to-transparent rounded-full blur-[100px]"></div>
        </div>

        <div class="container mx-auto px-6 relative z-10">
          <div class="max-w-4xl mx-auto text-center mb-16 md:mb-24 animate-slide-up">
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 text-gray-700 rounded-full mb-6 border border-gray-200 font-medium text-sm">
              <span class="w-2 h-2 rounded-full bg-primary-500"></span>
              Pytania i odpowiedzi
            </div>
            <h2 class="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Najczęściej zadawane pytania
            </h2>
            <p class="text-lg md:text-xl text-gray-500 font-light leading-relaxed max-w-2xl mx-auto">
              Zebraliśmy szczegółowe odpowiedzi na specjalistyczne pytania dotyczące kurczy mięśniowych,
              których nie poruszono w innych sekcjach strony.
            </p>
          </div>
          
          <div class="max-w-4xl mx-auto">
            <div class="bg-surface rounded-[2rem] shadow-glass border border-gray-100 overflow-hidden divide-y divide-gray-100">
              <template x-for="(faq, index) in faqs" :key="index">
                <div class="group">
                  <button 
                    @click="toggleFaq(index)" 
                    class="w-full text-left px-8 py-6 focus:outline-none flex justify-between items-center transition-colors"
                    :class="faq.open ? 'bg-primary-50/30' : 'hover:bg-gray-50'"
                  >
                    <span class="font-heading font-semibold text-lg md:text-xl text-gray-900 group-hover:text-primary-600 transition-colors pr-6" x-text="faq.question"></span>
                    <div class="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors"
                         :class="faq.open ? 'bg-primary-100 text-primary-600' : 'bg-gray-50 text-gray-400 group-hover:bg-primary-50 group-hover:text-primary-500'">
                      <svg 
                        class="w-5 h-5 transition-transform duration-300" 
                        :class="faq.open ? 'transform rotate-180' : ''"
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </div>
                  </button>
                  
                  <div 
                    x-show="faq.open"
                    x-transition:enter="transition ease-out duration-300"
                    x-transition:enter-start="opacity-0 -translate-y-2"
                    x-transition:enter-end="opacity-100 translate-y-0"
                    x-transition:leave="transition ease-in duration-200"
                    x-transition:leave-start="opacity-100 translate-y-0"
                    x-transition:leave-end="opacity-0 -translate-y-2"
                    class="px-8 pb-8 pt-2 bg-primary-50/30"
                  >
                    <p class="text-gray-600 leading-relaxed text-lg font-light" x-text="faq.answer"></p>
                  </div>
                </div>
              </template>
            </div>
          </div>
          
          <div class="max-w-4xl mx-auto mt-16 bg-gray-50/80 backdrop-blur-sm rounded-[2rem] border border-gray-200 p-10 md:p-14 text-center">
            <h3 class="font-heading text-2xl md:text-3xl font-bold text-gray-900 mb-4">Masz inne pytania?</h3>
            <p class="text-gray-600 font-light text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Jeśli nie znalazłeś odpowiedzi na swoje pytanie lub potrzebujesz bardziej spersonalizowanej informacji,
              nasi specjaliści chętnie Ci pomogą.
            </p>
            <button 
              @click="document.getElementById('contact').scrollIntoView({behavior: 'smooth', block: 'start'})" 
              type="button"
              class="group relative inline-flex items-center justify-center rounded-2xl bg-primary-600 text-white font-medium px-8 py-4 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-glow"
            >
              <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
              <span class="relative flex items-center gap-2">
                Skontaktuj się z nami
                <svg class="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>
    `
  };
} 