export default function() {
  return {
    template: `
      <section id="intro" class="py-12 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div class="container mx-auto px-4 sm:px-6">
          <div class="max-w-6xl mx-auto text-center mb-12 md:mb-20">
            <span class="section-subtitle block text-sm sm:text-base text-blue-600 font-semibold mb-2">Zaburzenia mięśniowe</span>
            <h1 class="section-title text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Kurcze mięśniowe — przyczyny, objawy i leczenie
            </h1>
            <p class="section-description text-gray-600 max-w-3xl mx-auto text-base sm:text-lg">
              Kurcze mięśniowe to mimowolne, często bolesne skurcze mięśni, które mogą dotknąć każdego z nas.
              Poznaj ich medyczne podłoże, czynniki ryzyka oraz sprawdzone metody prewencji i skutecznego leczenia.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 max-w-6xl mx-auto">
            <!-- Card 1 - Przyczyny -->
            <div class="bg-white rounded-xl shadow-soft overflow-hidden group transform hover:-translate-y-2 transition-all duration-300 hover:shadow-lg">
              <div class="h-2 sm:h-3 bg-blue-500 w-full group-hover:bg-blue-600 transition-colors duration-300"></div>
              <div class="p-6 sm:p-8">
                <div class="w-14 h-14 sm:w-16 sm:h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-5 sm:mb-6 text-blue-600 group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                </div>
                <h3 class="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  Przyczyny kurczy mięśniowych
                </h3>
                <ul class="space-y-2 sm:space-y-3 text-gray-600 mb-5 sm:mb-6">
                  <li class="flex items-start">
                    <svg class="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                    <span>Odwodnienie i zaburzenia elektrolitowe</span>
                  </li>
                  <li class="flex items-start">
                    <svg class="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                    <span>Niedobór minerałów (magnez, potas, wapń, sód)</span>
                  </li>
                  <li class="flex items-start">
                    <svg class="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                    <span>Nadmierne obciążenie i przeciążenie mięśni</span>
                  </li>
                  <li class="flex items-start">
                    <svg class="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                    <span>Długotrwała statyczna pozycja ciała</span>
                  </li>
                </ul>
                <div class="pt-3 sm:pt-4 border-t border-gray-100">
                  <button 
                    @click="document.getElementById('comparison').scrollIntoView({behavior: 'smooth', block: 'start'})" 
                    type="button"
                    class="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors group relative"
                  >
                    <span class="group-hover:mr-1 transition-all duration-300">Poznaj różnice kurcz vs. skurcz</span>
                    <svg class="ml-1 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                    <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                  </button>
                </div>
              </div>
            </div>
            
            <!-- Card 2 - Objawy -->
            <div class="bg-white rounded-xl shadow-soft overflow-hidden group transform hover:-translate-y-2 transition-all duration-300 hover:shadow-lg">
              <div class="h-2 sm:h-3 bg-green-500 w-full group-hover:bg-green-600 transition-colors duration-300"></div>
              <div class="p-6 sm:p-8">
                <div class="w-14 h-14 sm:w-16 sm:h-16 bg-green-100 rounded-lg flex items-center justify-center mb-5 sm:mb-6 text-green-600 group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"></path>
                  </svg>
                </div>
                <h3 class="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-800 group-hover:text-green-600 transition-colors duration-300">
                  Rozpoznawanie objawów
                </h3>
                <ul class="space-y-2 sm:space-y-3 text-gray-600 mb-5 sm:mb-6">
                  <li class="flex items-start">
                    <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                    <span>Nagły, przeszywający ból mięśnia</span>
                  </li>
                  <li class="flex items-start">
                    <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                    <span>Widoczne stwardnienie i napięcie mięśnia</span>
                  </li>
                  <li class="flex items-start">
                    <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                    <span>Krótkotrwałe ograniczenie ruchomości</span>
                  </li>
                  <li class="flex items-start">
                    <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                    <span>Dyskomfort utrzymujący się po ustąpieniu skurczu</span>
                  </li>
                </ul>
                <div class="pt-3 sm:pt-4 border-t border-gray-100">
                  <button 
                    @click="document.getElementById('treatment').scrollIntoView({behavior: 'smooth', block: 'start'})" 
                    type="button"
                    class="inline-flex items-center text-sm font-medium text-green-600 hover:text-green-800 transition-colors group relative"
                  >
                    <span class="group-hover:mr-1 transition-all duration-300">Metody pierwszej pomocy</span>
                    <svg class="ml-1 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                    <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
                  </button>
                </div>
              </div>
            </div>
            
            <!-- Card 3 - Grupy ryzyka -->
            <div class="bg-white rounded-xl shadow-soft overflow-hidden group transform hover:-translate-y-2 transition-all duration-300 hover:shadow-lg">
              <div class="h-2 sm:h-3 bg-purple-500 w-full group-hover:bg-purple-600 transition-colors duration-300"></div>
              <div class="p-6 sm:p-8">
                <div class="w-14 h-14 sm:w-16 sm:h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-5 sm:mb-6 text-purple-600 group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <h3 class="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
                  Grupy podwyższonego ryzyka
                </h3>
                <ul class="space-y-2 sm:space-y-3 text-gray-600 mb-5 sm:mb-6">
                  <li class="flex items-start">
                    <svg class="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                    <span>Sportowcy i osoby intensywnie trenujące</span>
                  </li>
                  <li class="flex items-start">
                    <svg class="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                    <span>Seniorzy powyżej 65. roku życia</span>
                  </li>
                  <li class="flex items-start">
                    <svg class="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                    <span>Kobiety w ciąży (zwłaszcza III trymestr)</span>
                  </li>
                  <li class="flex items-start">
                    <svg class="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                    <span>Pacjenci z chorobami metabolicznymi (cukrzyca, zaburzenia tarczycy)</span>
                  </li>
                </ul>
                <div class="pt-3 sm:pt-4 border-t border-gray-100">
                  <button 
                    @click="document.getElementById('prevention').scrollIntoView({behavior: 'smooth', block: 'start'})" 
                    type="button"
                    class="inline-flex items-center text-sm font-medium text-purple-600 hover:text-purple-800 transition-colors group relative"
                  >
                    <span class="group-hover:mr-1 transition-all duration-300">Skuteczna profilaktyka</span>
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
          <div class="mt-12 md:mt-16 max-w-6xl mx-auto bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 sm:p-8 shadow-soft text-center">
            <h3 class="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">Doświadczasz bolesnych kurczy mięśniowych?</h3>
            <p class="text-gray-600 mb-5 sm:mb-6 max-w-3xl mx-auto">Poniżej znajdziesz specjalistyczne informacje o przyczynach, pierwszej pomocy oraz długoterminowej profilaktyce kurczy. Zastosuj te metody, aby szybko uzyskać ulgę i zapobiegać nawrotom w przyszłości.</p>
            <div class="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                @click="document.getElementById('treatment').scrollIntoView({behavior: 'smooth', block: 'start'})" 
                type="button"
                class="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg">
                Pierwsza pomoc
                <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </button>
              <button 
                @click="document.getElementById('prevention').scrollIntoView({behavior: 'smooth', block: 'start'})" 
                type="button"
                class="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 border border-blue-200 font-medium rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg">
                Profilaktyka długoterminowa
                <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    `
  };
} 