export default function() {
  return {
    features: [
      "Zwiększenie elastyczności tkanek mięśniowych",
      "Redukcję napięcia i zapobieganie kurczom mięśniowym",
      "Poprawę mikrokrążenia w obszarach zagrożonych kurczami",
      "Przyspieszenie regeneracji po wysiłku fizycznym"
    ],
    
    template: `
      <section id="wibroakustyka" class="py-20 bg-gray-50">
        <div class="container mx-auto px-6">
          <div class="text-center max-w-6xl mx-auto mb-8">
            <span class="section-subtitle">Innowacyjne rozwiązania</span>
            <h2 class="section-title">Wibroakustyka w walce z kurczami</h2>
            <p class="section-description">
              Odkryj nowoczesne podejście do profilaktyki i redukcji ryzyka kurczy mięśniowych 
              przy pomocy zaawansowanej terapii wibroakustycznej.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div class="bg-white rounded-xl shadow-soft overflow-hidden transform transition-all duration-300 hover:shadow-lg">
              <div class="h-3 bg-blue-500 w-full"></div>
              <div class="p-8 pb-0">
                <h3 class="text-2xl font-semibold text-gray-800 mb-5">Jak działa terapia wibroakustyczna?</h3>
                <p class="text-gray-600 mb-4">
                  Wibroakustyka to nowatorska metoda terapeutyczna wykorzystująca precyzyjnie dobrane częstotliwości dźwięku i wibracji. 
                  Badania kliniczne wykazują jej skuteczność w zakresie poprawy funkcjonowania układu mięśniowego poprzez:
                </p>
                <ul class="space-y-2 mb-5">
                  <template x-for="(feature, index) in features" :key="index">
                    <li class="flex items-start">
                      <div class="flex-shrink-0">
                        <svg class="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p class="ml-3 text-base text-gray-700" x-text="feature"></p>
                    </li>
                  </template>
                </ul>
              </div>
              
              <img 
                src="/img/wibroakustyka2.webp" 
                alt="Terapia wibroakustyczna" 
                class="w-full h-auto object-cover rounded-b-xl" 
                width="600" 
                height="400"
                loading="lazy"
              />
            </div>
            
            <div class="flex flex-col space-y-6">
              <div class="bg-white rounded-xl shadow-soft overflow-hidden p-6 transform transition-all duration-300 hover:shadow-lg">
                <div class="flex items-start">
                  <div class="icon-circle icon-circle-md bg-amber-100 text-amber-600 flex-shrink-0 mr-4">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-xl font-semibold mb-3 text-gray-800">Ważna informacja</h4>
                    <p class="text-gray-600">
                      Terapia wibroakustyczna stanowi uzupełnienie konwencjonalnych metod leczenia i profilaktyki kurczy mięśniowych. 
                      Zawsze konsultuj nowe metody terapeutyczne z lekarzem, szczególnie jeśli cierpisz na przewlekłe dolegliwości.
                    </p>
                  </div>
                </div>
              </div>
               
              <div class="bg-white rounded-xl shadow-soft overflow-hidden p-6 transform transition-all duration-300 hover:shadow-lg">
                <div class="flex items-start">
                  <div class="icon-circle icon-circle-md bg-blue-100 text-blue-600 flex-shrink-0 mr-4">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-xl font-semibold mb-3 text-gray-800">Potwierdzona skuteczność</h4>
                    <p class="text-gray-600">
                      Metoda wibroakustyczna posiada udokumentowane badania kliniczne potwierdzające jej skuteczność w redukcji częstotliwości występowania kurczy mięśniowych i przyspieszeniu regeneracji tkanek.
                    </p>
                  </div>
                </div>
              </div>

              <div class="bg-white rounded-xl shadow-soft overflow-hidden p-6 transform transition-all duration-300 hover:shadow-lg">
                <div class="flex items-start">
                  <div class="icon-circle icon-circle-md bg-green-100 text-green-600 flex-shrink-0 mr-4">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-xl font-semibold mb-3 text-gray-800">Dostępność terapii</h4>
                    <p class="text-gray-600">
                      Technologia wibroakustyczna jest coraz bardziej dostępna zarówno w ośrodkach medycznych, jak i w formie urządzeń do użytku domowego, co czyni ją przystępną opcją terapeutyczną dla osób cierpiących na nawracające kurcze mięśniowe.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="max-w-6xl mx-auto mt-8 bg-white rounded-xl p-6 md:p-8 shadow-soft text-center">
            <h3 class="text-2xl font-bold text-gray-800 mb-4">Zainteresowany wibroakustyką?</h3>
            <p class="text-gray-600 mb-5">Odkryj więcej szczegółów na temat zastosowania wibroakustyki w terapii kurczy mięśniowych i innych dolegliwości.</p>
            <button 
              @click="window.open('https://wibroakustyka.ai', '_blank')"
              class="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg"
            >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
              Odwiedź wibroakustyka.ai
            </button>
          </div>
        </div>
      </section>
    `
  };
} 