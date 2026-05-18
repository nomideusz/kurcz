export default function() {
  return {
    accordion: [
      {
        id: 1,
        title: 'Techniki rozciągania',
        content: 'Istnieją różne techniki rozciągania w zależności od lokalizacji kurczu. Dla łydki: wykonaj wyprost nogi i przyciągnij palce stopy w kierunku kolana używając ręcznika lub paska. Dla uda: leżąc na plecach, przyciągnij kolano do klatki piersiowej. Dla stopy: chwyć palce stopy i delikatnie odciągnij je do góry. Rozciąganie powinno być powolne i stopniowe — nigdy gwałtowne, co mogłoby pogorszyć stan.',
        isOpen: false
      },
      {
        id: 2,
        title: 'Skuteczny masaż',
        content: 'Podczas masażu mięśnia dotkniętego kurczem, zacznij od delikatnych, powierzchownych ruchów, stopniowo zwiększając nacisk. Używaj kciuków do wykonywania małych, okrężnych ruchów wokół najbardziej napiętego obszaru. Możesz także zastosować oliwkę lub balsam rozgrzewający, który wspomaga rozluźnienie tkanki mięśniowej. Masując kończyny dolne, zawsze kieruj ruchy od stóp w górę, zgodnie z przepływem krwi żylnej.',
        isOpen: false
      },
      {
        id: 3,
        title: 'Terapia ciepłem i zimnem',
        content: 'Wybór między ciepłem a zimnem zależy od rodzaju i czasu trwania kurczu. Ciepło (37-40°C) jest najlepsze dla przewlekłych kurczy i po ustąpieniu ostrego epizodu — stosuj przez 15-20 minut co 2-3 godziny. Zimno (okłady z lodu owinięte w cienki ręcznik) jest wskazane przy stanach zapalnych i ostrych kurczach — aplikuj na 10-15 minut z 1-godzinnymi przerwami. Nigdy nie stosuj lodu bezpośrednio na skórę.',
        isOpen: false
      },
      {
        id: 4,
        title: 'Prawidłowe nawodnienie',
        content: 'Przy kurczach związanych z odwodnieniem, najszybciej działają napoje zawierające zarówno elektrolity jak i węglowodany. Przygotuj domowy napój izotoniczny: 1 litr wody, 1/2 łyżeczki soli, 6 łyżeczek cukru i sok z cytryny. Alternatywnie, spożywaj pokarmy bogate w elektrolity: banany (potas), orzechy (magnez), nabiał (wapń). Przy intensywnym wysiłku fizycznym, wypijaj 150-250 ml płynów co 15-20 minut, a nie tylko gdy odczuwasz pragnienie.',
        isOpen: false
      },
      {
        id: 5,
        title: 'Aktywność fizyczna',
        content: 'Po ustąpieniu kurczu wprowadź ćwiczenia przywracające sprawność: 1) „Pisanie alfabetu” stopą w powietrzu dla kurczy łydek, 2) Powolne przysiady przy ścianie dla kurczy ud, 3) Zginanie i prostowanie palców stóp z oporem dla kurczy stóp. Każde ćwiczenie wykonuj przez 30 sekund, powtarzając 3 razy z przerwami. Rozpoczynaj od niskiej intensywności, stopniowo ją zwiększając przez kilka dni po epizodzie kurczu.',
        isOpen: false
      }
    ],
    
    toggleAccordion(id) {
      this.accordion = this.accordion.map(item => {
        if (item.id === id) {
          return { ...item, isOpen: !item.isOpen };
        }
        // Optional: close other items when one is opened
        // return { ...item, isOpen: false };
        return item;
      });
    },
    
    template: `
      <section id="treatment" class="py-24 md:py-32 bg-surface">
        <div class="container mx-auto px-6">
          <!-- Main Section Heading -->
          <div class="max-w-4xl mx-auto text-center mb-16 md:mb-24 animate-slide-up">
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-health/10 text-health-dark rounded-full mb-6 border border-health/20 font-medium text-sm">
              <span class="w-2 h-2 rounded-full bg-health animate-pulse"></span>
              Pierwsza pomoc
            </div>
            <h2 class="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Natychmiastowa pomoc przy <span class="text-transparent bg-clip-text bg-gradient-to-r from-health to-primary-500">kurczach mięśniowych</span>
            </h2>
            <p class="text-lg md:text-xl text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
              Poznaj sprawdzone techniki szybkiej ulgi, które pomogą Ci natychmiast złagodzić ból i dyskomfort podczas kurczu mięśnia. Szybka reakcja jest kluczowa dla efektywnego radzenia sobie z tą dolegliwością.
            </p>
          </div>
        
          <!-- Emergency Relief Glass Card -->
          <div class="max-w-6xl mx-auto mb-20 md:mb-32 relative group">
            <div class="absolute inset-0 bg-gradient-to-r from-red-400 to-rose-400 rounded-[2.5rem] opacity-10 blur-xl group-hover:opacity-20 transition-opacity duration-500"></div>
            <div class="relative bg-white border border-red-100 rounded-[2.5rem] shadow-glass p-8 md:p-12 overflow-hidden">
              <!-- Decorative element -->
              <div class="absolute top-0 right-0 w-64 h-64 bg-red-50 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none"></div>

              <div class="flex flex-col md:flex-row items-start md:items-center gap-6 mb-10 md:mb-12 relative z-10">
                <div class="w-16 h-16 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center flex-shrink-0 border border-red-100">
                  <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-2">Natychmiastowa ulga w bólu</h3>
                  <p class="text-gray-500 text-lg">Zastosuj te 3 kroki, aby szybko przerwać bolesny kurcz mięśnia.</p>
                </div>
              </div>
              
              <!-- Emergency Cards Grid -->
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 relative z-10">
                <div class="group/card bg-gray-50 hover:bg-white rounded-2xl p-6 border border-gray-100 hover:border-red-100 hover:shadow-soft transition-all duration-300 relative overflow-hidden">
                  <div class="absolute -right-4 -top-4 text-gray-100 font-heading font-bold text-8xl group-hover/card:text-red-50 transition-colors duration-300 pointer-events-none select-none">1</div>
                  <div class="relative z-10">
                    <h4 class="font-heading text-xl font-bold mb-3 text-gray-900 group-hover/card:text-red-600 transition-colors">Techniki rozciągania</h4>
                    <p class="text-gray-600 leading-relaxed">Delikatnie rozciągnij mięsień poprzez wyprostowanie kończyny i przytrzymanie pozycji przez 20-30 sekund, oddychając głęboko.</p>
                  </div>
                </div>
                
                <div class="group/card bg-gray-50 hover:bg-white rounded-2xl p-6 border border-gray-100 hover:border-red-100 hover:shadow-soft transition-all duration-300 relative overflow-hidden">
                  <div class="absolute -right-4 -top-4 text-gray-100 font-heading font-bold text-8xl group-hover/card:text-red-50 transition-colors duration-300 pointer-events-none select-none">2</div>
                  <div class="relative z-10">
                    <h4 class="font-heading text-xl font-bold mb-3 text-gray-900 group-hover/card:text-red-600 transition-colors">Prawidłowe nawodnienie</h4>
                    <p class="text-gray-600 leading-relaxed">Uzupełnij elektrolity i nawodnienie poprzez picie wody z dodatkiem soli mineralnych (sód, potas, magnez) lub napojów izotoniczych.</p>
                  </div>
                </div>
                
                <div class="group/card bg-gray-50 hover:bg-white rounded-2xl p-6 border border-gray-100 hover:border-red-100 hover:shadow-soft transition-all duration-300 relative overflow-hidden">
                  <div class="absolute -right-4 -top-4 text-gray-100 font-heading font-bold text-8xl group-hover/card:text-red-50 transition-colors duration-300 pointer-events-none select-none">3</div>
                  <div class="relative z-10">
                    <h4 class="font-heading text-xl font-bold mb-3 text-gray-900 group-hover/card:text-red-600 transition-colors">Masaż leczniczy</h4>
                    <p class="text-gray-600 leading-relaxed">Wykonuj okrężne, delikatne ruchy masujące na mięśniu dotkniętym kurczem, stopniowo zwiększając nacisk do momentu rozluźnienia.</p>
                  </div>
                </div>
              </div>
              
              <div class="bg-red-50/50 rounded-xl p-4 border border-red-100 flex items-start gap-3 relative z-10">
                <svg class="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
                </svg>
                <p class="text-red-800 text-sm md:text-base font-medium">
                  Natychmiastowa konsultacja medyczna konieczna przy: kurczach utrzymujących się ponad 10 minut, bardzo bolesnych, występujących regularnie lub z obrzękiem i zaczerwienieniem.
                </p>
              </div>
            </div>
          </div>
          
          <div class="max-w-4xl mx-auto">
            <h3 class="font-heading text-3xl font-bold mb-8 text-center text-gray-900">
              Szczegółowe metody leczenia
            </h3>
            
            <div class="space-y-4">
              <template x-for="(item, index) in accordion" :key="item.id">
                <div class="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-soft" :class="item.isOpen ? 'ring-1 ring-primary-200' : ''">
                  <button 
                    @click="toggleAccordion(item.id)" 
                    class="w-full text-left px-6 py-5 focus:outline-none flex justify-between items-center transition-colors duration-300"
                    :class="item.isOpen ? 'bg-primary-50/50' : 'hover:bg-gray-50'"
                  >
                    <span class="font-heading text-lg font-semibold text-gray-900" :class="item.isOpen ? 'text-primary-700' : ''" x-text="item.title"></span>
                    <div class="w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300" :class="item.isOpen ? 'bg-primary-100 text-primary-600' : 'bg-gray-100 text-gray-400'">
                      <svg 
                        class="w-5 h-5 transition-transform duration-300" 
                        :class="item.isOpen ? 'transform rotate-180' : ''"
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </div>
                  </button>
                  
                  <div 
                    x-show="item.isOpen" 
                    x-collapse
                    class="px-6 pb-6 pt-2 bg-primary-50/50"
                  >
                    <p class="text-gray-600 leading-relaxed" x-text="item.content"></p>
                  </div>
                </div>
              </template>
            </div>
          </div>
          
          <div class="mt-16 md:mt-24 max-w-4xl mx-auto bg-surface border border-gray-200 rounded-[2rem] shadow-soft overflow-hidden p-8 md:p-12 relative">
            <div class="absolute top-0 right-0 w-40 h-40 bg-gray-100 rounded-full blur-[60px] -mr-20 -mt-20 pointer-events-none"></div>
            <div class="flex flex-col md:flex-row items-start gap-8 relative z-10">
              <div class="w-16 h-16 rounded-2xl bg-gray-50 text-gray-500 flex items-center justify-center flex-shrink-0 border border-gray-200">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-heading text-2xl font-bold text-gray-900 mb-6">Kiedy skontaktować się z lekarzem?</h4>
                <ul class="space-y-4 text-gray-600">
                  <li class="flex items-start">
                    <span class="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mr-4 mt-0.5 text-gray-500">
                      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
                    </span>
                    <span>Częste, nawracające kurcze mimo stosowania metod profilaktycznych</span>
                  </li>
                  <li class="flex items-start">
                    <span class="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mr-4 mt-0.5 text-gray-500">
                      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
                    </span>
                    <span>Kurcze wyjątkowo silne lub utrzymujące się ponad 10 minut</span>
                  </li>
                  <li class="flex items-start">
                    <span class="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mr-4 mt-0.5 text-gray-500">
                      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
                    </span>
                    <span>Występowanie obrzęku, zaczerwienienia, widocznych deformacji lub silnego bólu</span>
                  </li>
                  <li class="flex items-start">
                    <span class="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mr-4 mt-0.5 text-gray-500">
                      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
                    </span>
                    <span>Kurcze pojawiające się po urazie lub współwystępujące z innymi niepokojącymi objawami</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <!-- Disclaimer -->
          <div class="mt-12 max-w-4xl mx-auto text-center">
            <p class="text-sm text-gray-400">
              <strong>Zastrzeżenie medyczne:</strong> Informacje zawarte na tej stronie mają charakter edukacyjny i nie zastępują profesjonalnej konsultacji medycznej. W przypadku poważnych problemów zdrowotnych zawsze skonsultuj się z wykwalifikowanym lekarzem.
            </p>
          </div>
        </div>
      </section>
    `
  };
}