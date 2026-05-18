export default function() {
  return {
    template: `
      <section id="yoga" class="py-24 md:py-32 bg-surface relative overflow-hidden">
        <!-- Background accents -->
        <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div class="absolute top-1/4 left-[-10%] w-[40%] h-[50%] bg-gradient-to-tr from-emerald-100 to-transparent rounded-full blur-[120px] opacity-60"></div>
          <div class="absolute bottom-1/4 right-[-5%] w-[30%] h-[40%] bg-primary-100/40 rounded-full blur-[100px]"></div>
        </div>

        <div class="container mx-auto px-6 relative z-10">
          <div class="max-w-6xl mx-auto">
            <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              <!-- Content -->
              <div class="animate-slide-up">
                <div class="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full mb-6 border border-emerald-100 font-medium text-sm">
                  <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Naturalna profilaktyka
                </div>
                
                <h2 class="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                  Joga jako skuteczna metoda na <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-primary-500">kurcze mięśniowe</span>
                </h2>
                
                <p class="text-lg text-gray-600 font-light leading-relaxed mb-8">
                  Regularna praktyka jogi to nie tylko wyciszenie umysłu, ale przede wszystkim doskonałe narzędzie do pracy z ciałem. Głębsze rozciąganie, świadomy oddech i poprawa ukrwienia to kluczowe czynniki, które zapobiegają bolesnym kurczom mięśniowym i pomagają w szybkiej regeneracji po ich wystąpieniu.
                </p>

                <ul class="space-y-4 text-gray-600 mb-10">
                  <li class="flex items-start">
                    <span class="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center mr-4 text-emerald-600 border border-emerald-100">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
                    </span>
                    <div>
                      <strong class="text-gray-900 font-medium block">Zwiększona elastyczność</strong>
                      <span class="text-sm">Asany skutecznie wydłużają włókna mięśniowe, zmniejszając ich podatność na nagłe kurcze.</span>
                    </div>
                  </li>
                  <li class="flex items-start">
                    <span class="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center mr-4 text-emerald-600 border border-emerald-100">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
                    </span>
                    <div>
                      <strong class="text-gray-900 font-medium block">Lepsze ukrwienie i dotlenienie</strong>
                      <span class="text-sm">Świadomy oddech (Pranajama) dostarcza więcej tlenu do tkanek, zapobiegając niedotlenieniu mięśni.</span>
                    </div>
                  </li>
                  <li class="flex items-start">
                    <span class="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center mr-4 text-emerald-600 border border-emerald-100">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
                    </span>
                    <div>
                      <strong class="text-gray-900 font-medium block">Redukcja napięcia stresowego</strong>
                      <span class="text-sm">Zmniejszenie ogólnego napięcia nerwowego obniża ryzyko nocnych kurczy nóg.</span>
                    </div>
                  </li>
                </ul>
              </div>

              <!-- CTA Card -->
              <div class="relative group lg:mt-0 animate-fade-in delay-200">
                <div class="absolute inset-0 bg-gradient-to-tr from-emerald-400 to-primary-400 rounded-[2.5rem] opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500"></div>
                <div class="relative bg-white/80 backdrop-blur-xl border border-white rounded-[2.5rem] shadow-glass p-10 overflow-hidden">
                  <!-- Decorative circle -->
                  <div class="absolute top-0 right-0 w-40 h-40 bg-emerald-50 rounded-full blur-[40px] -mr-20 -mt-20 pointer-events-none"></div>
                  
                  <div class="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-2xl flex items-center justify-center mb-8 text-emerald-600 border border-emerald-200/50 shadow-sm">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                  </div>
                  
                  <h3 class="font-heading text-3xl font-bold text-gray-900 mb-4">
                    Znajdź idealne studio jogi
                  </h3>
                  
                  <p class="text-gray-600 mb-8 leading-relaxed">
                    Niezależnie od tego, czy dopiero zaczynasz swoją przygodę, czy szukasz zaawansowanych praktyk - odkryj najlepsze szkoły jogi w swojej okolicy i zacznij dbać o swoje ciało już dziś.
                  </p>
                  
                  <button 
                    @click="window.open('https://szkolyjogi.pl', '_blank')"
                    class="group relative inline-flex items-center justify-center w-full rounded-2xl bg-primary-600 text-white font-medium px-8 py-4 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-glow"
                  >
                    <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
                    <span class="relative flex items-center gap-2">
                      Sprawdź na szkolyjogi.pl
                      <svg class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                      </svg>
                    </span>
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
