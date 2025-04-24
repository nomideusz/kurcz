export default function() {
  return {
    template: `
      <section id="intro" class="py-24 bg-gray-50">
        <div class="container mx-auto px-6">
          <div class="max-w-3xl mx-auto text-center mb-20">
            <span class="text-blue-600 font-semibold text-sm uppercase tracking-wider">Wprowadzenie</span>
            <h2 class="text-3xl md:text-4xl font-bold mt-2 mb-6 text-gray-800">
              Czym są kurcze mięśniowe?
            </h2>
            <p class="text-lg text-gray-600 leading-relaxed">
              Kurcze mięśniowe to niekontrolowane, często bolesne skurcze mięśni, które mogą dotknąć każdego.
              Poznaj ich przyczyny i skuteczne metody zapobiegania.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            <!-- Card 1 - Pines Card Style -->
            <div class="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-2">
              <div class="h-3 bg-blue-500 w-full group-hover:bg-blue-600 transition-colors duration-300"></div>
              <div class="p-8">
                <div class="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold mb-4 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  Najczęstsze przyczyny
                </h3>
                <p class="text-gray-600 leading-relaxed">
                  Najczęstsze przyczyny kurczy mięśniowych to odwodnienie, niedobór elektrolitów, 
                  przeciążenie mięśni i długotrwałe utrzymywanie jednej pozycji.
                </p>
                <div class="mt-8 pt-6 border-t border-gray-100">
                  <button 
                    @click="window.location.href='#treatment'" 
                    type="button"
                    class="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors group relative"
                  >
                    <span class="group-hover:mr-1 transition-all duration-300">Dowiedz się więcej</span>
                    <svg class="ml-1 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                    <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                  </button>
                </div>
              </div>
            </div>
            
            <!-- Card 2 - Pines Card Style -->
            <div class="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-2">
              <div class="h-3 bg-green-500 w-full group-hover:bg-green-600 transition-colors duration-300"></div>
              <div class="p-8">
                <div class="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6 text-green-600 group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold mb-4 text-gray-800 group-hover:text-green-600 transition-colors duration-300">
                  Objawy towarzyszące
                </h3>
                <p class="text-gray-600 leading-relaxed">
                  Kurczom mięśniowym często towarzyszą uczucie zmęczenia, bóle głowy, 
                  osłabienie, a w przypadku niedoboru elektrolitów również zaburzenia rytmu serca.
                </p>
                <div class="mt-8 pt-6 border-t border-gray-100">
                  <button 
                    @click="window.location.href='#treatment'" 
                    type="button"
                    class="inline-flex items-center text-sm font-medium text-green-600 hover:text-green-800 transition-colors group relative"
                  >
                    <span class="group-hover:mr-1 transition-all duration-300">Dowiedz się więcej</span>
                    <svg class="ml-1 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                    <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
                  </button>
                </div>
              </div>
            </div>
            
            <!-- Card 3 - Pines Card Style -->
            <div class="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-2">
              <div class="h-3 bg-purple-500 w-full group-hover:bg-purple-600 transition-colors duration-300"></div>
              <div class="p-8">
                <div class="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6 text-purple-600 group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold mb-4 text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
                  Osoby w grupie ryzyka
                </h3>
                <p class="text-gray-600 leading-relaxed">
                  Sportowcy, osoby starsze, kobiety w ciąży oraz osoby z pewnymi schorzeniami 
                  (np. cukrzycą) są bardziej narażone na występowanie kurczy mięśniowych.
                </p>
                <div class="mt-8 pt-6 border-t border-gray-100">
                  <button 
                    @click="window.location.href='#treatment'" 
                    type="button"
                    class="inline-flex items-center text-sm font-medium text-purple-600 hover:text-purple-800 transition-colors group relative"
                  >
                    <span class="group-hover:mr-1 transition-all duration-300">Dowiedz się więcej</span>
                    <svg class="ml-1 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                    <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Call to action -->
          <div class="mt-16 max-w-3xl mx-auto bg-blue-50 rounded-xl p-8 shadow-md text-center">
            <h3 class="text-2xl font-bold text-gray-800 mb-4">Doświadczasz kurczy mięśniowych?</h3>
            <p class="text-gray-600 mb-6">Przejdź do sekcji leczenia, aby uzyskać natychmiastową pomoc i praktyczne rozwiązania.</p>
            <button 
              @click="window.location.href='#treatment'" 
              class="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg"
            >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path>
              </svg>
              Sprawdź metody leczenia
            </button>
          </div>
        </div>
      </section>
    `
  };
} 