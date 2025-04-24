export default function() {
  return {
    template: `
      <section id="intro" class="py-20 bg-white">
        <div class="container mx-auto px-6">
          <div class="max-w-3xl mx-auto text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Czym są kurcze mięśniowe?
            </h2>
            <p class="text-lg text-gray-600 leading-relaxed">
              Kurcze mięśniowe to niekontrolowane, często bolesne skurcze mięśni, które mogą dotknąć każdego.
              Poznaj ich przyczyny i skuteczne metody zapobiegania.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <!-- Card 1 - Pines Card Style -->
            <div class="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div class="h-3 bg-blue-500 w-full group-hover:bg-blue-600 transition-colors duration-300"></div>
              <div class="p-6">
                <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  Najczęstsze przyczyny
                </h3>
                <p class="text-gray-600">
                  Najczęstsze przyczyny kurczy mięśniowych to odwodnienie, niedobór elektrolitów, 
                  przeciążenie mięśni i długotrwałe utrzymywanie jednej pozycji.
                </p>
                <div class="mt-6 pt-6 border-t border-gray-100">
                  <button 
                    @click="window.location.href='#treatment'" 
                    type="button"
                    class="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
                  >
                    Dowiedz się więcej
                    <svg class="ml-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            <!-- Card 2 - Pines Card Style -->
            <div class="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div class="h-3 bg-green-500 w-full group-hover:bg-green-600 transition-colors duration-300"></div>
              <div class="p-6">
                <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6 text-green-600 group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold mb-3 text-gray-800 group-hover:text-green-600 transition-colors duration-300">
                  Objawy towarzyszące
                </h3>
                <p class="text-gray-600">
                  Kurczom mięśniowym często towarzyszą uczucie zmęczenia, bóle głowy, 
                  osłabienie, a w przypadku niedoboru elektrolitów również zaburzenia rytmu serca.
                </p>
                <div class="mt-6 pt-6 border-t border-gray-100">
                  <button 
                    @click="window.location.href='#treatment'" 
                    type="button"
                    class="inline-flex items-center text-sm font-medium text-green-600 hover:text-green-800"
                  >
                    Dowiedz się więcej
                    <svg class="ml-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            <!-- Card 3 - Pines Card Style -->
            <div class="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div class="h-3 bg-purple-500 w-full group-hover:bg-purple-600 transition-colors duration-300"></div>
              <div class="p-6">
                <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6 text-purple-600 group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold mb-3 text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
                  Osoby w grupie ryzyka
                </h3>
                <p class="text-gray-600">
                  Sportowcy, osoby starsze, kobiety w ciąży oraz osoby z pewnymi schorzeniami 
                  (np. cukrzycą) są bardziej narażone na występowanie kurczy mięśniowych.
                </p>
                <div class="mt-6 pt-6 border-t border-gray-100">
                  <button 
                    @click="window.location.href='#treatment'" 
                    type="button"
                    class="inline-flex items-center text-sm font-medium text-purple-600 hover:text-purple-800"
                  >
                    Dowiedz się więcej
                    <svg class="ml-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `
  };
} 