export default function() {
  return {
    features: [
      "Zwiększenie elastyczności tkanek mięśniowych",
      "Redukcję napięcia i zapobieganie kurczom mięśniowym",
      "Poprawę mikrokrążenia w obszarach zagrożonych kurczami",
      "Przyspieszenie regeneracji po wysiłku fizycznym"
    ],
    
    template: `
      <section id="wibroakustyka" class="py-24 md:py-32 bg-background-light relative overflow-hidden">
        <!-- Background elements -->
        <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div class="absolute top-1/4 left-0 w-1/3 h-1/2 bg-primary-100/30 rounded-full blur-[120px]"></div>
          <div class="absolute bottom-0 right-[-10%] w-1/2 h-1/3 bg-health-light/20 rounded-full blur-[120px]"></div>
        </div>

        <div class="container mx-auto px-6 relative z-10">
          <div class="max-w-4xl mx-auto text-center mb-16 md:mb-24 animate-slide-up">
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-700 rounded-full mb-6 border border-primary-100 font-medium text-sm">
              <span class="w-2 h-2 rounded-full bg-primary-500"></span>
              Innowacyjne rozwiązania
            </div>
            <h2 class="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Wibroakustyka w walce z <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">kurczami</span>
            </h2>
            <p class="text-lg md:text-xl text-gray-500 font-light leading-relaxed max-w-3xl mx-auto">
              Odkryj nowoczesne podejście do profilaktyki i redukcji ryzyka kurczy mięśniowych 
              przy pomocy zaawansowanej terapii wibroakustycznej.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
            <!-- Left Card -->
            <div class="group relative bg-surface rounded-[2.5rem] p-8 md:p-12 shadow-soft border border-gray-100 hover:shadow-glow hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col">
              <div class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary-400 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div class="flex-grow">
                <h3 class="font-heading text-3xl font-bold text-gray-900 mb-6 group-hover:text-primary-600 transition-colors duration-300">Jak działa terapia wibroakustyczna?</h3>
                <p class="text-gray-600 leading-relaxed mb-8">
                  Wibroakustyka to nowatorska metoda terapeutyczna wykorzystująca precyzyjnie dobrane częstotliwości dźwięku i wibracji. 
                  Badania kliniczne wykazują jej skuteczność w zakresie poprawy funkcjonowania układu mięśniowego poprzez:
                </p>
                <ul class="space-y-4 mb-10">
                  <template x-for="(feature, index) in features" :key="index">
                    <li class="flex items-start">
                      <div class="w-6 h-6 rounded-full bg-health/10 text-health-dark flex items-center justify-center mr-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
                      </div>
                      <p class="text-gray-700 leading-relaxed font-medium" x-text="feature"></p>
                    </li>
                  </template>
                </ul>
              </div>
              
              <div class="relative rounded-2xl overflow-hidden mt-auto group-hover:shadow-lg transition-shadow duration-500">
                <div class="absolute inset-0 bg-primary-900/10 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0"></div>
                <img 
                  src="/img/wibroakustyka2.webp" 
                  alt="Terapia wibroakustyczna" 
                  class="w-full h-48 md:h-64 object-cover transform transition-transform duration-700 group-hover:scale-105" 
                  width="600" 
                  height="400"
                  loading="lazy"
                />
              </div>
            </div>
            
            <!-- Right Column Cards -->
            <div class="flex flex-col space-y-6">
              <div class="bg-white/80 backdrop-blur-sm rounded-[2rem] shadow-glass border border-gray-100 p-8 transform transition-all duration-300 hover:shadow-soft hover:-translate-y-1 hover:bg-white group">
                <div class="flex items-start">
                  <div class="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0 mr-6 border border-amber-100 group-hover:scale-110 group-hover:bg-amber-100 transition-all duration-300">
                    <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-heading text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">Ważna informacja</h4>
                    <p class="text-gray-600 leading-relaxed">
                      Terapia wibroakustyczna stanowi uzupełnienie konwencjonalnych metod leczenia i profilaktyki kurczy mięśniowych. 
                      Zawsze konsultuj nowe metody terapeutyczne z lekarzem, szczególnie jeśli cierpisz na przewlekłe dolegliwości.
                    </p>
                  </div>
                </div>
              </div>
               
              <div class="bg-white/80 backdrop-blur-sm rounded-[2rem] shadow-glass border border-gray-100 p-8 transform transition-all duration-300 hover:shadow-soft hover:-translate-y-1 hover:bg-white group">
                <div class="flex items-start">
                  <div class="w-14 h-14 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center flex-shrink-0 mr-6 border border-primary-100 group-hover:scale-110 group-hover:bg-primary-100 transition-all duration-300">
                    <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-heading text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">Potwierdzona skuteczność</h4>
                    <p class="text-gray-600 leading-relaxed">
                      Metoda wibroakustyczna posiada udokumentowane badania kliniczne potwierdzające jej skuteczność w redukcji częstotliwości występowania kurczy mięśniowych i przyspieszeniu regeneracji tkanek.
                    </p>
                  </div>
                </div>
              </div>

              <div class="bg-white/80 backdrop-blur-sm rounded-[2rem] shadow-glass border border-gray-100 p-8 transform transition-all duration-300 hover:shadow-soft hover:-translate-y-1 hover:bg-white group">
                <div class="flex items-start">
                  <div class="w-14 h-14 rounded-2xl bg-health/10 text-health-dark flex items-center justify-center flex-shrink-0 mr-6 border border-health/20 group-hover:scale-110 group-hover:bg-health/20 transition-all duration-300">
                    <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-heading text-xl font-bold text-gray-900 mb-3 group-hover:text-health-dark transition-colors">Dostępność terapii</h4>
                    <p class="text-gray-600 leading-relaxed">
                      Technologia wibroakustyczna jest coraz bardziej dostępna zarówno w ośrodkach medycznych, jak i w formie urządzeń do użytku domowego, co czyni ją przystępną opcją terapeutyczną dla osób cierpiących na nawracające kurcze.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="max-w-4xl mx-auto mt-20 relative group">
            <div class="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 rounded-[2.5rem] opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500"></div>
            <div class="relative bg-white rounded-[2.5rem] p-10 md:p-14 shadow-glass border border-gray-100 text-center overflow-hidden">
              <div class="absolute top-0 right-0 w-64 h-64 bg-primary-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
              <div class="absolute top-0 left-0 w-64 h-64 bg-indigo-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
              
              <div class="relative z-10">
                <h3 class="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">Zainteresowany wibroakustyką?</h3>
                <p class="text-lg text-gray-600 mb-10 max-w-2xl mx-auto font-light">Odkryj więcej szczegółów na temat innowacyjnego zastosowania wibroakustyki w terapii kurczy mięśniowych i innych dolegliwości.</p>
                
                <button 
                  @click="window.open('https://wibroakustyka.ai', '_blank')"
                  class="group/btn relative inline-flex items-center justify-center rounded-2xl bg-primary-600 text-white font-medium px-8 py-4 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-glow"
                >
                  <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
                  <span class="relative flex items-center gap-2">
                    <svg class="w-5 h-5 transition-transform group-hover/btn:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                    Odwiedź portal wibroakustyka.ai
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    `
  };
} 