export default function() {
  return {
    accordion: [
      {
        id: 1,
        title: 'Rozciąganie mięśni',
        content: 'Delikatne rozciąganie skurczonego mięśnia może pomóc w zmniejszeniu napięcia i złagodzeniu bólu. W przypadku łydki, spróbuj wyprostować nogę i zgiąć stopę w kierunku kolana, delikatnie pociągając za palce. Jeśli skurcz dotyka stopy lub palców, możesz delikatnie naciągnąć i wyprostować bolesny obszar ręką.',
        isOpen: false
      },
      {
        id: 2,
        title: 'Masaż',
        content: 'Delikatny masaż skurczonego mięśnia może pomóc w rozluźnieniu napięcia i poprawie krążenia krwi. Używaj delikatnych, okrężnych ruchów, aby rozmasować bolesny obszar. Nie masuj zbyt mocno, gdyż może to pogorszyć stan.',
        isOpen: false
      },
      {
        id: 3,
        title: 'Aplikacja ciepła lub zimna',
        content: 'Po ustąpieniu ostrego skurczu, przyłożenie ciepłego kompresu może pomóc w rozluźnieniu mięśnia i zmniejszeniu bólu. Jeśli skurcz jest wynikiem stanu zapalnego, zimny kompres może być bardziej odpowiedni. Nie stosuj ekstremalnych temperatur i zawsze używaj ręcznika jako bariery między skórą a kompresem.',
        isOpen: false
      },
      {
        id: 4,
        title: 'Nawodnienie',
        content: 'Picie wody może pomóc w łagodzeniu skurczów, szczególnie jeśli są one spowodowane odwodnieniem. Pij małe łyki wody w regularnych odstępach czasu. Rozważ również napoje zawierające elektrolity, jeśli skurcze są związane z intensywnym wysiłkiem fizycznym.',
        isOpen: false
      },
      {
        id: 5,
        title: 'Lekki ruch',
        content: 'Jeśli to możliwe, spróbuj delikatnie poruszać kończyną dotkniętą skurczem. Łagodna aktywność może pomóc w rozluźnieniu mięśni i poprawie krążenia krwi, co z kolei może złagodzić ból i przyspieszyć ustąpienie skurczu.',
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
      <section id="treatment" class="py-20 bg-gray-50">
        <div class="container mx-auto px-6">
          <!-- Emergency Relief Card -->
          <div class="max-w-5xl mx-auto mb-16 bg-red-50 rounded-xl shadow-lg overflow-hidden border-l-4 border-red-500 transform transition-all duration-300 hover:shadow-xl">
            <div class="p-6 md:p-8">
              <div class="flex items-center mb-6">
                <svg class="w-10 h-10 text-red-600 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                </svg>
                <h2 class="text-2xl md:text-3xl font-bold text-red-800">Natychmiastowa pomoc przy kurczach</h2>
              </div>
              
              <div class="grid md:grid-cols-3 gap-4 mb-6">
                <div class="bg-white p-5 rounded-lg shadow-md border-l-4 border-red-400 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div class="flex items-center mb-3">
                    <span class="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-600 mr-3 font-bold text-lg">1</span>
                    <h3 class="font-semibold text-gray-800 text-lg">Rozciąganie</h3>
                  </div>
                  <p class="text-gray-600">Delikatnie rozciągnij skurczony mięsień. Przy skurczu łydki - wyprostuj nogę i przyciągnij palce w kierunku ciała.</p>
                </div>
                
                <div class="bg-white p-5 rounded-lg shadow-md border-l-4 border-red-400 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div class="flex items-center mb-3">
                    <span class="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-600 mr-3 font-bold text-lg">2</span>
                    <h3 class="font-semibold text-gray-800 text-lg">Masaż</h3>
                  </div>
                  <p class="text-gray-600">Delikatnie masuj skurczony mięsień okrężnymi ruchami, stopniowo zwiększając nacisk do momentu ustąpienia skurczu.</p>
                </div>
                
                <div class="bg-white p-5 rounded-lg shadow-md border-l-4 border-red-400 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div class="flex items-center mb-3">
                    <span class="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-600 mr-3 font-bold text-lg">3</span>
                    <h3 class="font-semibold text-gray-800 text-lg">Nawodnienie</h3>
                  </div>
                  <p class="text-gray-600">Wypij wodę z elektrolitami. Uzupełnij elektrolity (sód, potas, magnez) - możesz dodać szczyptę soli do wody.</p>
                </div>
              </div>
              
              <div class="bg-white p-5 rounded-lg shadow-md border-l-4 border-red-400">
                <p class="text-red-700 font-medium flex items-start">
                  <svg class="w-6 h-6 inline-block mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
                  </svg>
                  <span>Skurcze utrzymujące się dłużej niż 10 minut, bardzo bolesne, lub występujące regularnie wymagają konsultacji lekarskiej.</span>
                </p>
              </div>
            </div>
          </div>
          
          <div class="max-w-3xl mx-auto text-center mb-16">
            <span class="text-blue-600 font-semibold text-sm uppercase tracking-wider">Leczenie i Profilaktyka</span>
            <h2 class="text-3xl md:text-4xl font-bold mt-2 mb-6 text-gray-800">
              Jak radzić sobie z kurczami mięśniowymi?
            </h2>
            <p class="text-lg text-gray-600 leading-relaxed">
              Poznaj skuteczne metody natychmiastowej ulgi oraz długoterminowe strategie zapobiegania kurczom mięśniowym.
              Pamiętaj, że w przypadku nawracających lub dotkliwych kurczów, zawsze należy skonsultować się z lekarzem.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-12">
            <!-- Immediate Relief Methods -->
            <div>
              <h3 class="text-2xl font-semibold mb-6 text-gray-800 text-center md:text-left">
                Natychmiastowa ulga
              </h3>
              
              <div class="bg-white rounded-xl shadow-md overflow-hidden">
                <div class="divide-y divide-gray-200">
                  <template x-for="item in accordion" :key="item.id">
                    <div>
                      <button 
                        @click="toggleAccordion(item.id)" 
                        class="w-full text-left px-6 py-4 focus:outline-none flex justify-between items-center"
                        :class="item.isOpen ? 'bg-blue-50' : ''"
                      >
                        <span class="text-lg font-medium text-gray-800" x-text="item.title"></span>
                        <svg 
                          class="w-5 h-5 text-gray-500 transition-transform duration-300 ease-in-out" 
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
                        x-transition:enter="transition ease-out duration-300"
                        x-transition:enter-start="opacity-0 transform -translate-y-2"
                        x-transition:enter-end="opacity-100 transform translate-y-0"
                        x-transition:leave="transition ease-in duration-300"
                        x-transition:leave-start="opacity-100 transform translate-y-0"
                        x-transition:leave-end="opacity-0 transform -translate-y-2"
                        class="px-6 py-4 bg-blue-50"
                      >
                        <p class="text-gray-600" x-text="item.content"></p>
                      </div>
                    </div>
                  </template>
                </div>
              </div>
            </div>
            
            <!-- Prevention Strategies -->
            <div>
              <h3 class="text-2xl font-semibold mb-6 text-gray-800 text-center md:text-left">
                Strategie zapobiegania
              </h3>
              
              <div class="bg-white rounded-xl shadow-md overflow-hidden p-6">
                <ul class="space-y-4">
                  <li class="flex flex-row items-start">
                    <div class="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3 mt-0.5">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                      </svg>
                    </div>
                    <div class="flex-1">
                      <h4 class="font-medium text-gray-800 mt-0">Utrzymuj odpowiednie nawodnienie</h4>
                      <p class="text-gray-600">Pij regularnie wodę przez cały dzień, szczególnie przed, w trakcie i po aktywności fizycznej.</p>
                    </div>
                  </li>
                  
                  <li class="flex flex-row items-start">
                    <div class="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3 mt-0.5">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                      </svg>
                    </div>
                    <div class="flex-1">
                      <h4 class="font-medium text-gray-800 mt-0">Zrównoważona dieta</h4>
                      <p class="text-gray-600">Spożywaj pokarmy bogate w potas, magnez i wapń, kluczowe minerały dla prawidłowej funkcji mięśni.</p>
                    </div>
                  </li>
                  
                  <li class="flex flex-row items-start">
                    <div class="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3 mt-0.5">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                      </svg>
                    </div>
                    <div class="flex-1">
                      <h4 class="font-medium text-gray-800 mt-0">Regularne rozciąganie</h4>
                      <p class="text-gray-600">Wykonuj ćwiczenia rozciągające przed i po aktywności fizycznej, szczególnie skupiając się na mięśniach podatnych na skurcze.</p>
                    </div>
                  </li>
                  
                  <li class="flex flex-row items-start">
                    <div class="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3 mt-0.5">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                      </svg>
                    </div>
                    <div class="flex-1">
                      <h4 class="font-medium text-gray-800 mt-0">Stopniowe zwiększanie intensywności ćwiczeń</h4>
                      <p class="text-gray-600">Unikaj nagłego zwiększania intensywności lub czasu trwania aktywności fizycznej. Pozwól swoim mięśniom dostosować się stopniowo.</p>
                    </div>
                  </li>
                  
                  <li class="flex flex-row items-start">
                    <div class="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3 mt-0.5">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                      </svg>
                    </div>
                    <div class="flex-1">
                      <h4 class="font-medium text-gray-800 mt-0">Regularny przegląd leków</h4>
                      <p class="text-gray-600">Konsultuj z lekarzem leki, które przyjmujesz, ponieważ niektóre mogą zwiększać ryzyko wystąpienia skurczów mięśni.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div class="mt-16 max-w-3xl mx-auto bg-blue-50 rounded-xl shadow-md overflow-hidden p-6 sm:p-8">
            <div class="flex items-start">
              <div class="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-4">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <h4 class="text-xl font-semibold text-gray-800 mt-0">Kiedy skontaktować się z lekarzem?</h4>
                <ul class="mt-2 space-y-2 text-gray-600">
                  <li class="flex flex-row items-center">
                    <svg class="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                    <span class="flex-1">Skurcze są częste i nawracające, mimo stosowania metod profilaktyki</span>
                  </li>
                  <li class="flex flex-row items-center">
                    <svg class="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                    <span class="flex-1">Skurczom towarzyszy silny ból, obrzęk lub zaczerwienienie</span>
                  </li>
                  <li class="flex flex-row items-center">
                    <svg class="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                    <span class="flex-1">Skurcze występują bez wyraźnej przyczyny lub w spoczynku</span>
                  </li>
                  <li class="flex flex-row items-center">
                    <svg class="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                    <span class="flex-1">Masz choroby przewlekłe jak cukrzyca, choroby nerwów lub naczyń krwionośnych</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    `
  };
} 