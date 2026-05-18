export default function() {
  return {
    template: `
      <section id="intro" class="relative py-24 md:py-32 bg-background-light overflow-hidden">
        <!-- Decorative subtle background elements -->
        <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none" aria-hidden="true">
          <div class="absolute top-[-10%] right-[-5%] w-[40%] h-[50%] bg-primary-100/50 rounded-full blur-[100px]"></div>
          <div class="absolute bottom-[-10%] left-[-5%] w-[30%] h-[40%] bg-health-light/20 rounded-full blur-[100px]"></div>
        </div>

        <div class="container mx-auto px-6 relative z-10">
          <div class="max-w-6xl mx-auto text-center mb-16 md:mb-24 animate-slide-up">
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-700 rounded-full mb-6 border border-primary-100 font-medium text-sm">
              <span class="w-2 h-2 rounded-full bg-primary-500"></span>
              Zaburzenia mięśniowe
            </div>
            <h2 class="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Kurcze mięśniowe — <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-health">przyczyny, objawy i leczenie</span>
            </h2>
            <p class="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              Kurcze mięśniowe to mimowolne, często bolesne kurcze mięśni, które mogą dotknąć każdego z nas.
              Poznaj ich medyczne podłoże, czynniki ryzyka oraz sprawdzone metody prewencji i skutecznego leczenia.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-7xl mx-auto">
            <!-- Card 1 - Przyczyny -->
            <div class="group bg-surface rounded-[2rem] p-8 shadow-soft border border-gray-100 hover:shadow-glow hover:-translate-y-2 transition-all duration-300 relative overflow-hidden flex flex-col h-full">
              <div class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary-400 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div class="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mb-8 text-primary-600 group-hover:scale-110 group-hover:bg-primary-100 transition-all duration-300 shadow-sm border border-primary-100/50">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              
              <h3 class="font-heading text-2xl font-bold mb-4 text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                Przyczyny kurczy mięśniowych
              </h3>
              
              <ul class="space-y-4 text-gray-600 mb-8 flex-grow">
                <li class="flex items-start">
                  <span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary-50 flex items-center justify-center mr-3 mt-0.5 text-primary-500">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
                  </span>
                  <span>Odwodnienie i zaburzenia elektrolitowe</span>
                </li>
                <li class="flex items-start">
                  <span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary-50 flex items-center justify-center mr-3 mt-0.5 text-primary-500">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
                  </span>
                  <span>Niedobór minerałów (magnez, potas, wapń, sód)</span>
                </li>
                <li class="flex items-start">
                  <span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary-50 flex items-center justify-center mr-3 mt-0.5 text-primary-500">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
                  </span>
                  <span>Nadmierne obciążenie i przeciążenie mięśni</span>
                </li>
                <li class="flex items-start">
                  <span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary-50 flex items-center justify-center mr-3 mt-0.5 text-primary-500">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
                  </span>
                  <span>Długotrwała statyczna pozycja ciała</span>
                </li>
              </ul>
              
              <div class="pt-6 mt-auto border-t border-gray-100">
                <button @click="document.getElementById('comparison').scrollIntoView({behavior: 'smooth', block: 'start'})" class="inline-flex items-center text-sm font-semibold text-primary-600 hover:text-primary-800 transition-colors group/btn">
                  <span class="group-hover/btn:mr-2 transition-all duration-300">Poznaj różnice kurcz vs. skurcz</span>
                  <svg class="ml-1 w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </button>
              </div>
            </div>
            
            <!-- Card 2 - Objawy -->
            <div class="group bg-surface rounded-[2rem] p-8 shadow-soft border border-gray-100 hover:shadow-glow-health hover:-translate-y-2 transition-all duration-300 relative overflow-hidden flex flex-col h-full">
              <div class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-health to-health-light opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div class="w-16 h-16 bg-health/10 rounded-2xl flex items-center justify-center mb-8 text-health group-hover:scale-110 group-hover:bg-health/20 transition-all duration-300 shadow-sm border border-health/20">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"></path>
                </svg>
              </div>
              
              <h3 class="font-heading text-2xl font-bold mb-4 text-gray-900 group-hover:text-health-dark transition-colors duration-300">
                Rozpoznawanie objawów
              </h3>
              
              <ul class="space-y-4 text-gray-600 mb-8 flex-grow">
                <li class="flex items-start">
                  <span class="flex-shrink-0 w-6 h-6 rounded-full bg-health/10 flex items-center justify-center mr-3 mt-0.5 text-health">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
                  </span>
                  <span>Nagły, przeszywający ból mięśnia</span>
                </li>
                <li class="flex items-start">
                  <span class="flex-shrink-0 w-6 h-6 rounded-full bg-health/10 flex items-center justify-center mr-3 mt-0.5 text-health">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
                  </span>
                  <span>Widoczne stwardnienie i napięcie mięśnia</span>
                </li>
                <li class="flex items-start">
                  <span class="flex-shrink-0 w-6 h-6 rounded-full bg-health/10 flex items-center justify-center mr-3 mt-0.5 text-health">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
                  </span>
                  <span>Krótkotrwałe ograniczenie ruchomości</span>
                </li>
                <li class="flex items-start">
                  <span class="flex-shrink-0 w-6 h-6 rounded-full bg-health/10 flex items-center justify-center mr-3 mt-0.5 text-health">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
                  </span>
                  <span>Dyskomfort utrzymujący się po ustąpieniu kurczu</span>
                </li>
              </ul>
              
              <div class="pt-6 mt-auto border-t border-gray-100">
                <button @click="document.getElementById('treatment').scrollIntoView({behavior: 'smooth', block: 'start'})" class="inline-flex items-center text-sm font-semibold text-health hover:text-health-dark transition-colors group/btn">
                  <span class="group-hover/btn:mr-2 transition-all duration-300">Metody pierwszej pomocy</span>
                  <svg class="ml-1 w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </button>
              </div>
            </div>
            
            <!-- Card 3 - Grupy ryzyka -->
            <div class="group bg-surface rounded-[2rem] p-8 shadow-soft border border-gray-100 hover:shadow-glow hover:-translate-y-2 transition-all duration-300 relative overflow-hidden flex flex-col h-full md:col-span-2 lg:col-span-1">
              <div class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div class="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mb-8 text-indigo-600 group-hover:scale-110 group-hover:bg-indigo-100 transition-all duration-300 shadow-sm border border-indigo-100/50">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              
              <h3 class="font-heading text-2xl font-bold mb-4 text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                Grupy podwyższonego ryzyka
              </h3>
              
              <ul class="space-y-4 text-gray-600 mb-8 flex-grow">
                <li class="flex items-start">
                  <span class="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-50 flex items-center justify-center mr-3 mt-0.5 text-indigo-500">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
                  </span>
                  <span>Sportowcy i osoby intensywnie trenujące</span>
                </li>
                <li class="flex items-start">
                  <span class="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-50 flex items-center justify-center mr-3 mt-0.5 text-indigo-500">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
                  </span>
                  <span>Seniorzy powyżej 65. roku życia</span>
                </li>
                <li class="flex items-start">
                  <span class="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-50 flex items-center justify-center mr-3 mt-0.5 text-indigo-500">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
                  </span>
                  <span>Kobiety w ciąży (zwłaszcza III trymestr)</span>
                </li>
                <li class="flex items-start">
                  <span class="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-50 flex items-center justify-center mr-3 mt-0.5 text-indigo-500">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
                  </span>
                  <span>Pacjenci z chorobami metabolicznymi (cukrzyca)</span>
                </li>
              </ul>
              
              <div class="pt-6 mt-auto border-t border-gray-100">
                <button @click="document.getElementById('prevention').scrollIntoView({behavior: 'smooth', block: 'start'})" class="inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors group/btn">
                  <span class="group-hover/btn:mr-2 transition-all duration-300">Skuteczna profilaktyka</span>
                  <svg class="ml-1 w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </button>
              </div>
            </div>
          </div>
          
          <!-- Call to action Glass Card -->
          <div class="mt-16 md:mt-24 max-w-5xl mx-auto relative group">
            <div class="absolute inset-0 bg-gradient-to-r from-primary-400 to-health rounded-[2.5rem] opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500"></div>
            <div class="relative bg-surface/60 backdrop-blur-xl border border-white/40 rounded-[2.5rem] p-8 md:p-12 shadow-glass text-center">
              <h3 class="font-heading text-2xl md:text-3xl font-bold text-gray-900 mb-4">Doświadczasz bolesnych kurczy mięśniowych?</h3>
              <p class="text-gray-600 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">Poniżej znajdziesz specjalistyczne informacje o przyczynach, pierwszej pomocy oraz długoterminowej profilaktyce kurczy. Zastosuj te metody, aby szybko uzyskać ulgę i zapobiegać nawrotom w przyszłości.</p>
              
              <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  @click="document.getElementById('treatment').scrollIntoView({behavior: 'smooth', block: 'start'})" 
                  class="group relative inline-flex items-center justify-center rounded-2xl bg-primary-600 text-white font-medium px-8 py-4 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-glow"
                >
                  <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
                  <span class="relative flex items-center gap-2">
                    Pierwsza pomoc
                    <svg class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </span>
                </button>
                <button 
                  @click="document.getElementById('prevention').scrollIntoView({behavior: 'smooth', block: 'start'})" 
                  class="group inline-flex items-center justify-center rounded-2xl bg-white text-primary-600 border border-primary-200 font-medium px-8 py-4 transition-all duration-300 hover:bg-primary-50 hover:border-primary-300 hover:scale-105"
                >
                  Profilaktyka długoterminowa
                  <svg class="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    `
  };
} 