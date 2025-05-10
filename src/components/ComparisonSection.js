export default function() {
  return {
    template: `
      <section id="comparison" class="py-12 md:py-20 bg-white">
        <div class="container mx-auto px-4 sm:px-6">
          <div class="max-w-6xl mx-auto text-center mb-12 md:mb-16">
            <span class="section-subtitle block text-sm sm:text-base text-blue-600 font-semibold mb-2">Terminologia medyczna</span>
            <h2 class="section-title text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Kurcz a skurcz — kluczowe różnice
            </h2>
            <p class="section-description text-gray-600 max-w-3xl mx-auto text-base sm:text-lg">
              Wiele osób używa zamiennie terminów „kurcz” i „skurcz”, jednak w rzeczywistości 
              istnieją między nimi istotne różnice dotyczące znaczenia medycznego i praktycznego zastosowania.
            </p>
          </div>
          
          <div class="max-w-6xl mx-auto">
            <div class="grid md:grid-cols-2 gap-6 md:gap-10 mb-10">
              <!-- Kurcz Card -->
              <div class="bg-white rounded-xl shadow-soft overflow-hidden border-t-4 border-red-500 transform hover:-translate-y-1 transition-all duration-300 hover:shadow-lg">
                <div class="p-6 sm:p-8">
                  <h3 class="text-2xl font-bold text-gray-800 mb-5 flex items-center">
                    <div class="icon-circle icon-circle-md bg-red-100 text-red-600 mr-3 flex-shrink-0">
                      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    Kurcz
                  </h3>
                  <ul class="space-y-4 mb-2">
                    <li class="flex items-start">
                      <svg class="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                      <span class="text-gray-700">Nagłe, mimowolne i często bolesne napięcie mięśnia</span>
                    </li>
                    <li class="flex items-start">
                      <svg class="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                      <span class="text-gray-700">Zawsze nieświadomy i patologiczny</span>
                    </li>
                    <li class="flex items-start">
                      <svg class="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                      <span class="text-gray-700">Stosowany głównie w języku potocznym</span>
                    </li>
                    <li class="flex items-start">
                      <svg class="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                      <span class="text-gray-700">Przykłady: kurcz łydki, kurcz stopy</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <!-- Skurcz Card -->
              <div class="bg-white rounded-xl shadow-soft overflow-hidden border-t-4 border-blue-500 transform hover:-translate-y-1 transition-all duration-300 hover:shadow-lg">
                <div class="p-6 sm:p-8">
                  <h3 class="text-2xl font-bold text-gray-800 mb-5 flex items-center">
                    <div class="icon-circle icon-circle-md bg-blue-100 text-blue-600 mr-3 flex-shrink-0">
                      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                      </svg>
                    </div>
                    Skurcz
                  </h3>
                  <ul class="space-y-4 mb-2">
                    <li class="flex items-start">
                      <svg class="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                      <span class="text-gray-700">Fizjologiczny proces napinania się mięśnia</span>
                    </li>
                    <li class="flex items-start">
                      <svg class="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                      <span class="text-gray-700">Może być świadomy lub mimowolny</span>
                    </li>
                    <li class="flex items-start">
                      <svg class="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                      <span class="text-gray-700">Używany częściej w terminologii medycznej</span>
                    </li>
                    <li class="flex items-start">
                      <svg class="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                      <span class="text-gray-700">Przykłady: skurcz mięśnia sercowego, skurcz macicy</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <!-- Summary Card -->
            <div class="bg-gray-50 rounded-xl shadow-soft p-6 sm:p-8 border-l-4 border-purple-500">
              <h3 class="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <div class="icon-circle icon-circle-sm bg-purple-100 text-purple-600 mr-3 flex-shrink-0">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                Podsumowanie
              </h3>
              <p class="text-gray-700 leading-relaxed">
                Podsumowując: każdy kurcz jest rodzajem skurczu, ale nie każdy skurcz jest kurczem. 
                Kurcz odnosi się wyłącznie do patologicznych, mimowolnych napięć mięśni, podczas gdy 
                skurcz to szersze pojęcie obejmujące zarówno prawidłowe, jak i nieprawidłowe napięcia mięśniowe. 
                W języku medycznym preferowany jest termin „skurcz”, natomiast w mowie potocznej częściej spotykamy 
                określenie „kurcz” dla bolesnych, nagłych napięć mięśniowych.
              </p>
            </div>
            
            <!-- Declension Card -->
            <div class="mt-8 bg-white rounded-xl shadow-soft p-6 sm:p-8 border-l-4 border-teal-500">
              <h3 class="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <div class="icon-circle icon-circle-sm bg-teal-100 text-teal-600 mr-3 flex-shrink-0">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path>
                  </svg>
                </div>
                Odmiana słowa „kurcz”
              </h3>
              
              <div class="bg-teal-50/50 rounded-lg p-4 shadow-sm mb-6">
                <table class="w-full border-collapse">
                  <thead>
                    <tr class="border-b border-teal-100">
                      <th class="py-2 text-left text-gray-800 font-medium">Przypadek</th>
                      <th class="py-2 text-left text-gray-800 font-medium">Liczba pojedyncza</th>
                      <th class="py-2 text-left text-gray-800 font-medium">Liczba mnoga</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-b border-teal-100/50">
                      <td class="py-2 pr-4 text-teal-600 font-medium">Mianownik</td>
                      <td class="py-2 pr-4 text-gray-700 font-semibold">kurcz</td>
                      <td class="py-2 text-gray-700 font-semibold">kurcze</td>
                    </tr>
                    <tr class="border-b border-teal-100/50">
                      <td class="py-2 pr-4 text-teal-600 font-medium">Dopełniacz</td>
                      <td class="py-2 pr-4 text-gray-700 font-semibold">kurczu</td>
                      <td class="py-2 text-gray-700 font-semibold">kurczy</td>
                    </tr>
                    <tr class="border-b border-teal-100/50">
                      <td class="py-2 pr-4 text-teal-600 font-medium">Celownik</td>
                      <td class="py-2 pr-4 text-gray-700 font-semibold">kurczowi</td>
                      <td class="py-2 text-gray-700 font-semibold">kurczom</td>
                    </tr>
                    <tr class="border-b border-teal-100/50">
                      <td class="py-2 pr-4 text-teal-600 font-medium">Biernik</td>
                      <td class="py-2 pr-4 text-gray-700 font-semibold">kurcz</td>
                      <td class="py-2 text-gray-700 font-semibold">kurcze</td>
                    </tr>
                    <tr class="border-b border-teal-100/50">
                      <td class="py-2 pr-4 text-teal-600 font-medium">Narzędnik</td>
                      <td class="py-2 pr-4 text-gray-700 font-semibold">kurczem</td>
                      <td class="py-2 text-gray-700 font-semibold">kurczami</td>
                    </tr>
                    <tr class="border-b border-teal-100/50">
                      <td class="py-2 pr-4 text-teal-600 font-medium">Miejscownik</td>
                      <td class="py-2 pr-4 text-gray-700 font-semibold">kurczu</td>
                      <td class="py-2 text-gray-700 font-semibold">kurczach</td>
                    </tr>
                    <tr>
                      <td class="py-2 pr-4 text-teal-600 font-medium">Wołacz</td>
                      <td class="py-2 pr-4 text-gray-700 font-semibold">kurczu</td>
                      <td class="py-2 text-gray-700 font-semibold">kurcze</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div class="bg-teal-50/30 p-4 rounded-lg">
                <p class="text-gray-700">
                  <span class="font-medium text-teal-700">Warto wiedzieć:</span> 
                  W kontekście medycznym często używane są frazy takie jak „zapobiegać kurczom” (celownik, l.mn.), 
                  „doświadczać kurczy” (dopełniacz, l.mn.) czy „borykać się z kurczami” (narzędnik, l.mn.).
                </p>
              </div>
            </div>
            
            <!-- Call to Action -->
            <div class="mt-10 text-center">
              <button 
                @click="document.getElementById('treatment').scrollIntoView({behavior: 'smooth', block: 'start'})" 
                type="button"
                class="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg"
              >
                Zobacz metody leczenia kurczy mięśniowych
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