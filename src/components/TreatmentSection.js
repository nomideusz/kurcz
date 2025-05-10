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
        content: 'Po ustąpieniu kurczu wprowadź ćwiczenia przywracające sprawność: 1) "Pisanie alfabetu" stopą w powietrzu dla kurczy łydek, 2) Powolne przysiady przy ścianie dla kurczy ud, 3) Zginanie i prostowanie palców stóp z oporem dla kurczy stóp. Każde ćwiczenie wykonuj przez 30 sekund, powtarzając 3 razy z przerwami. Rozpoczynaj od niskiej intensywności, stopniowo ją zwiększając przez kilka dni po epizodzie kurczu.',
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
      <section id="treatment" class="py-12 md:py-20 bg-gray-50">
        <div class="container mx-auto px-4 sm:px-6">
          <!-- Main Section Heading -->
          <div class="max-w-6xl mx-auto text-center mb-10 md:mb-16">
            <span class="section-subtitle block text-sm sm:text-base">Pierwsza pomoc</span>
            <h2 class="section-title text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">
              Natychmiastowa pomoc przy kurczach mięśniowych
            </h2>
            <p class="section-description text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Poznaj sprawdzone techniki szybkiej ulgi, które pomogą Ci natychmiast złagodzić ból i dyskomfort podczas kurczu mięśnia. Szybka reakcja jest kluczowa dla efektywnego radzenia sobie z tą dolegliwością.
            </p>
            <div class="mt-3 sm:mt-4">
              <button 
                @click="document.getElementById('prevention').scrollIntoView({behavior: 'smooth', block: 'start'})" 
                type="button"
                class="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors mx-auto relative"
              >
                <span>Przejdź do metod profilaktyki</span>
                <svg class="ml-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
                <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 hover:w-full transition-all duration-300"></span>
              </button>
            </div>
          </div>
        
          <!-- Emergency Relief Card -->
          <div class="max-w-6xl mx-auto mb-10 md:mb-16 bg-red-50 rounded-xl shadow-soft overflow-hidden border-l-4 border-red-500 transform transition-all duration-300 hover:shadow-md">
            <div class="p-4 sm:p-6 md:p-8">
              <div class="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-6">
                <div class="flex-shrink-0 mr-4 mb-3 sm:mb-0">
                  <div class="icon-circle icon-circle-lg bg-red-100 text-red-600">
                    <svg class="w-7 h-7 md:w-9 md:h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                    </svg>
                  </div>
                </div>
                <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-red-800 leading-tight">Natychmiastowa ulga przy kurczach mięśniowych</h2>
              </div>
              
              <!-- Emergency Cards Grid -->
              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-6">
                <div class="card p-3 sm:p-5 sm:border-l-4 sm:border-red-400 hover-lift relative overflow-hidden bg-white sm:bg-transparent rounded-lg sm:rounded-none shadow-sm sm:shadow-none">
                  <div class="absolute right-0 top-0 text-red-100 opacity-30 leading-none" style="font-size: 8rem; line-height: 0.8; transform: translate(10%, -10%);">1</div>
                  <div class="relative z-10">
                    <h3 class="card-title text-base sm:text-lg mb-1 sm:mb-2">Techniki rozciągania</h3>
                    <p class="text-base sm:text-lg text-gray-600">Delikatnie rozciągnij mięsień poprzez wyprostowanie kończyny i przytrzymanie pozycji przez 20-30 sekund, oddychając głęboko.</p>
                  </div>
                </div>
                
                <div class="card p-3 sm:p-5 sm:border-l-4 sm:border-red-400 hover-lift relative overflow-hidden bg-white sm:bg-transparent rounded-lg sm:rounded-none shadow-sm sm:shadow-none">
                  <div class="absolute right-0 top-0 text-red-100 opacity-30 leading-none" style="font-size: 8rem; line-height: 0.8; transform: translate(10%, -10%);">2</div>
                  <div class="relative z-10">
                    <h3 class="card-title text-base sm:text-lg mb-1 sm:mb-2">Prawidłowe nawodnienie</h3>
                    <p class="text-base sm:text-lg text-gray-600">Uzupełnij elektrolity i nawodnienie poprzez picie wody z dodatkiem soli mineralnych (sód, potas, magnez) lub napojów izotoniczych.</p>
                  </div>
                </div>
                
                <div class="card p-3 sm:p-5 sm:border-l-4 sm:border-red-400 hover-lift relative overflow-hidden bg-white sm:bg-transparent rounded-lg sm:rounded-none shadow-sm sm:shadow-none">
                  <div class="absolute right-0 top-0 text-red-100 opacity-30 leading-none" style="font-size: 8rem; line-height: 0.8; transform: translate(10%, -10%);">3</div>
                  <div class="relative z-10">
                    <h3 class="card-title text-base sm:text-lg mb-1 sm:mb-2">Masaż leczniczy</h3>
                    <p class="text-base sm:text-lg text-gray-600">Wykonuj okrężne, delikatne ruchy masujące na mięśniu dotkniętym kurczem, stopniowo zwiększając nacisk do momentu rozluźnienia.</p>
                  </div>
                </div>
              </div>
              
              <div class="card p-3 sm:p-5 sm:border-l-4 sm:border-red-400 bg-white sm:bg-transparent rounded-lg sm:rounded-none shadow-sm sm:shadow-none">
                <p class="text-red-700 font-medium flex items-start text-base sm:text-lg">
                  <svg class="w-5 h-5 sm:w-6 sm:h-6 inline-block mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
                  </svg>
                  <span>Natychmiastowa konsultacja medyczna konieczna przy: kurczach utrzymujących się ponad 10 minut, bardzo bolesnych, występujących regularnie lub z obrzękiem i zaczerwienieniem.</span>
                </p>
              </div>
            </div>
          </div>
          
          <div class="max-w-6xl mx-auto">
            <h3 class="component-title text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-center">
              Szczegółowe metody doraźnego leczenia
            </h3>
            
            <div class="rounded-xl overflow-hidden shadow-soft">
              <template x-for="(item, index) in accordion" :key="item.id">
                <div class="border-b border-gray-200 last:border-0">
                  <button 
                    @click="toggleAccordion(item.id)" 
                    class="w-full text-left px-4 sm:px-5 py-3 sm:py-4 focus:outline-none flex justify-between items-center transition-colors duration-200"
                    :class="item.isOpen ? 'bg-blue-50' : 'bg-white hover:bg-gray-50'"
                  >
                    <span class="text-base sm:text-lg font-medium text-gray-800" x-text="item.title"></span>
                    <svg 
                      class="w-5 h-5 text-blue-500 transition-transform duration-200" 
                      :class="item.isOpen ? 'transform rotate-180' : ''"
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                  
                  <div 
                    x-show="item.isOpen" 
                    x-transition:enter="transition ease-out duration-200"
                    x-transition:enter-start="opacity-0 transform -translate-y-2"
                    x-transition:enter-end="opacity-100 transform translate-y-0"
                    x-transition:leave="transition ease-in duration-200"
                    x-transition:leave-start="opacity-100 transform translate-y-0"
                    x-transition:leave-end="opacity-0 transform -translate-y-2"
                    class="px-4 sm:px-5 py-3 sm:py-4 bg-blue-50 border-t border-blue-100"
                  >
                    <p class="text-base sm:text-lg text-gray-600" x-text="item.content"></p>
                  </div>
                </div>
              </template>
            </div>
          </div>
          
          <div class="mt-10 md:mt-16 max-w-6xl mx-auto bg-blue-50 rounded-xl shadow-soft overflow-hidden p-4 sm:p-6 md:p-8">
            <div class="flex flex-col sm:flex-row items-start">
              <div class="flex-shrink-0 icon-circle icon-circle-md bg-blue-100 text-blue-600 mb-4 sm:mb-0 sm:mr-5">
                <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <h4 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">Kiedy skontaktować się z lekarzem?</h4>
                <ul class="space-y-2 sm:space-y-3 text-gray-600 text-base sm:text-lg">
                  <li class="feature-list-item">
                    <svg class="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2 sm:mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                    <span>Częste, nawracające kurcze mimo stosowania metod profilaktycznych</span>
                  </li>
                  <li class="feature-list-item">
                    <svg class="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2 sm:mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                    <span>Kurcze wyjątkowo silne lub utrzymujące się ponad 10 minut</span>
                  </li>
                  <li class="feature-list-item">
                    <svg class="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2 sm:mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                    <span>Występowanie obrzęku, zaczerwienienia, widocznych deformacji lub silnego bólu</span>
                  </li>
                  <li class="feature-list-item">
                    <svg class="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2 sm:mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                    <span>Kurcze pojawiające się po urazie lub współwystępujące z innymi niepokojącymi objawami</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <!-- Disclaimer -->
          <div class="mt-8 md:mt-12 max-w-6xl mx-auto text-center">
            <div class="p-3 sm:p-4 bg-gray-50 border border-gray-200 rounded-lg">
              <p class="text-sm sm:text-base text-gray-600">
                <svg class="w-3 h-3 sm:w-4 sm:h-4 inline-block mr-1 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
                </svg>
                <strong>Zastrzeżenie medyczne:</strong> Informacje zawarte na tej stronie mają charakter edukacyjny i nie zastępują profesjonalnej konsultacji medycznej.
                W przypadku poważnych lub nawracających problemów zdrowotnych zawsze skonsultuj się z wykwalifikowanym lekarzem.
              </p>
            </div>
          </div>
        </div>
      </section>
    `
  };
} 