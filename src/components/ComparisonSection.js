export default function() {
  return {
    template: `
      <section id="comparison" class="py-24 md:py-32 bg-white relative overflow-hidden">
        <!-- Background accents -->
        <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div class="absolute top-0 right-[10%] w-[40%] h-[40%] bg-gradient-to-bl from-primary-50/50 to-transparent rounded-full blur-[100px]"></div>
        </div>

        <div class="container mx-auto px-6 relative z-10">
          <div class="max-w-4xl mx-auto text-center mb-16 md:mb-24 animate-slide-up">
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 text-gray-700 rounded-full mb-6 border border-gray-200 font-medium text-sm">
              <svg class="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
              Terminologia medyczna
            </div>
            <h2 class="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Kurcz a skurcz — kluczowe różnice
            </h2>
            <p class="text-lg md:text-xl text-gray-500 font-light leading-relaxed max-w-2xl mx-auto">
              Wiele osób używa zamiennie terminów „kurcz” i „skurcz”, jednak w rzeczywistości 
              istnieją między nimi istotne różnice medyczne.
            </p>
          </div>
          
          <div class="max-w-6xl mx-auto">
            <div class="grid md:grid-cols-2 gap-8 md:gap-12 mb-16 relative">
              <!-- Connector line on desktop -->
              <div class="hidden md:block absolute top-1/2 left-1/2 w-24 h-px bg-gray-200 -translate-x-1/2 -translate-y-1/2 z-0"></div>
              <div class="hidden md:flex absolute top-1/2 left-1/2 w-10 h-10 bg-white border border-gray-200 rounded-full items-center justify-center -translate-x-1/2 -translate-y-1/2 z-10 text-gray-400 font-bold text-sm shadow-sm">VS</div>

              <!-- Kurcz Card -->
              <div class="relative z-10 bg-surface rounded-[2.5rem] p-8 md:p-12 shadow-soft border border-gray-100 hover:shadow-glow-red hover:-translate-y-2 transition-all duration-500 overflow-hidden group">
                <div class="absolute inset-0 bg-gradient-to-br from-rose-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div class="relative z-10">
                  <div class="w-16 h-16 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mb-8 border border-rose-200">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <h3 class="font-heading text-3xl font-bold text-gray-900 mb-8 group-hover:text-rose-600 transition-colors">Kurcz</h3>
                  <ul class="space-y-5">
                    <li class="flex items-start">
                      <div class="w-6 h-6 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
                      </div>
                      <span class="text-gray-700 leading-relaxed">Nagłe, mimowolne i często bolesne napięcie mięśnia</span>
                    </li>
                    <li class="flex items-start">
                      <div class="w-6 h-6 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
                      </div>
                      <span class="text-gray-700 leading-relaxed">Zawsze nieświadomy i patologiczny</span>
                    </li>
                    <li class="flex items-start">
                      <div class="w-6 h-6 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
                      </div>
                      <span class="text-gray-700 leading-relaxed">Stosowany głównie w języku potocznym</span>
                    </li>
                    <li class="flex items-start">
                      <div class="w-6 h-6 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
                      </div>
                      <span class="text-gray-700 leading-relaxed">Przykłady: <em>kurcz łydki, kurcz stopy</em></span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <!-- Skurcz Card -->
              <div class="relative z-10 bg-surface rounded-[2.5rem] p-8 md:p-12 shadow-soft border border-gray-100 hover:shadow-glow-health hover:-translate-y-2 transition-all duration-500 overflow-hidden group">
                <div class="absolute inset-0 bg-gradient-to-br from-health-light/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div class="relative z-10">
                  <div class="w-16 h-16 rounded-2xl bg-health/10 text-health-dark flex items-center justify-center mb-8 border border-health/20">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                  </div>
                  <h3 class="font-heading text-3xl font-bold text-gray-900 mb-8 group-hover:text-health-dark transition-colors">Skurcz</h3>
                  <ul class="space-y-5">
                    <li class="flex items-start">
                      <div class="w-6 h-6 rounded-full bg-health/10 text-health-dark flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
                      </div>
                      <span class="text-gray-700 leading-relaxed">Fizjologiczny proces napinania się mięśnia</span>
                    </li>
                    <li class="flex items-start">
                      <div class="w-6 h-6 rounded-full bg-health/10 text-health-dark flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
                      </div>
                      <span class="text-gray-700 leading-relaxed">Może być świadomy lub mimowolny</span>
                    </li>
                    <li class="flex items-start">
                      <div class="w-6 h-6 rounded-full bg-health/10 text-health-dark flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
                      </div>
                      <span class="text-gray-700 leading-relaxed">Używany częściej w terminologii medycznej</span>
                    </li>
                    <li class="flex items-start">
                      <div class="w-6 h-6 rounded-full bg-health/10 text-health-dark flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
                      </div>
                      <span class="text-gray-700 leading-relaxed">Przykłady: <em>skurcz mięśnia sercowego, skurcz macicy</em></span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <!-- Summary Glass Card -->
            <div class="bg-gray-50/50 backdrop-blur-sm rounded-[2rem] border border-gray-200 p-8 md:p-12 mb-16 shadow-sm">
              <h3 class="font-heading text-2xl font-bold text-gray-900 mb-4 flex items-center">
                Podsumowanie
              </h3>
              <p class="text-gray-600 leading-relaxed text-lg font-light">
                Każdy kurcz jest rodzajem skurczu, ale nie każdy skurcz jest kurczem. 
                <strong class="text-gray-900 font-medium">Kurcz</strong> odnosi się wyłącznie do patologicznych, mimowolnych napięć mięśni, podczas gdy 
                <strong class="text-gray-900 font-medium">skurcz</strong> to szersze pojęcie obejmujące zarówno prawidłowe, jak i nieprawidłowe napięcia mięśniowe.
              </p>
            </div>
            
            <!-- Declension Component -->
            <div class="bg-white rounded-[2.5rem] shadow-glass border border-gray-100 p-8 md:p-12 overflow-hidden relative group">
              <div class="absolute right-0 top-0 w-64 h-64 bg-primary-50 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none group-hover:bg-primary-100 transition-colors duration-500"></div>
              
              <div class="relative z-10">
                <h3 class="font-heading text-2xl font-bold text-gray-900 mb-8 flex items-center">
                  <div class="w-10 h-10 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center mr-4 border border-primary-100">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path></svg>
                  </div>
                  Odmiana słowa „kurcz”
                </h3>
                
                <div class="overflow-x-auto">
                  <table class="w-full text-left border-collapse">
                    <thead>
                      <tr class="border-b-2 border-gray-100">
                        <th class="py-4 px-4 font-heading font-semibold text-gray-500 uppercase tracking-wider text-sm">Przypadek</th>
                        <th class="py-4 px-4 font-heading font-semibold text-gray-500 uppercase tracking-wider text-sm">Liczba pojedyncza</th>
                        <th class="py-4 px-4 font-heading font-semibold text-gray-500 uppercase tracking-wider text-sm">Liczba mnoga</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-50">
                      <tr class="hover:bg-gray-50/50 transition-colors">
                        <td class="py-4 px-4 text-primary-600 font-medium">Mianownik</td>
                        <td class="py-4 px-4 text-gray-800 font-medium">kurcz</td>
                        <td class="py-4 px-4 text-gray-800 font-medium">kurcze</td>
                      </tr>
                      <tr class="hover:bg-gray-50/50 transition-colors">
                        <td class="py-4 px-4 text-primary-600 font-medium">Dopełniacz</td>
                        <td class="py-4 px-4 text-gray-800 font-medium">kurczu</td>
                        <td class="py-4 px-4 text-gray-800 font-medium">kurczy</td>
                      </tr>
                      <tr class="hover:bg-gray-50/50 transition-colors">
                        <td class="py-4 px-4 text-primary-600 font-medium">Celownik</td>
                        <td class="py-4 px-4 text-gray-800 font-medium">kurczowi</td>
                        <td class="py-4 px-4 text-gray-800 font-medium">kurczom</td>
                      </tr>
                      <tr class="hover:bg-gray-50/50 transition-colors">
                        <td class="py-4 px-4 text-primary-600 font-medium">Biernik</td>
                        <td class="py-4 px-4 text-gray-800 font-medium">kurcz</td>
                        <td class="py-4 px-4 text-gray-800 font-medium">kurcze</td>
                      </tr>
                      <tr class="hover:bg-gray-50/50 transition-colors">
                        <td class="py-4 px-4 text-primary-600 font-medium">Narzędnik</td>
                        <td class="py-4 px-4 text-gray-800 font-medium">kurczem</td>
                        <td class="py-4 px-4 text-gray-800 font-medium">kurczami</td>
                      </tr>
                      <tr class="hover:bg-gray-50/50 transition-colors">
                        <td class="py-4 px-4 text-primary-600 font-medium">Miejscownik</td>
                        <td class="py-4 px-4 text-gray-800 font-medium">kurczu</td>
                        <td class="py-4 px-4 text-gray-800 font-medium">kurczach</td>
                      </tr>
                      <tr class="hover:bg-gray-50/50 transition-colors">
                        <td class="py-4 px-4 text-primary-600 font-medium">Wołacz</td>
                        <td class="py-4 px-4 text-gray-800 font-medium">kurczu</td>
                        <td class="py-4 px-4 text-gray-800 font-medium">kurcze</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div class="mt-8 bg-primary-50/50 rounded-2xl p-6 border border-primary-100">
                  <p class="text-primary-900 leading-relaxed text-sm md:text-base">
                    <strong class="font-semibold text-primary-700">Warto wiedzieć:</strong> 
                    W kontekście medycznym często używane są frazy takie jak „zapobiegać kurczom” (celownik, l.mn.), 
                    „doświadczać kurczy” (dopełniacz, l.mn.) czy „borykać się z kurczami” (narzędnik, l.mn.).
                  </p>
                </div>
              </div>
            </div>
            
            <div class="mt-16 text-center">
              <button 
                @click="document.getElementById('treatment').scrollIntoView({behavior: 'smooth', block: 'start'})" 
                class="group relative inline-flex items-center justify-center rounded-2xl bg-primary-600 text-white font-medium px-8 py-4 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-glow"
              >
                <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
                <span class="relative flex items-center gap-2">
                  Zobacz metody leczenia kurczy
                  <svg class="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    `
  };
} 