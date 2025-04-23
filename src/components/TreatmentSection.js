export default function() {
  return {
    accordionItems: [
      { 
        id: 'stretching',
        title: 'Rozciąganie mięśnia',
        content: 'Delikatnie rozciągnij dotknięty mięsień. Na przykład, jeśli kurcz dotyczy łydki, wyprostuj nogę i zegnij stopę w kierunku ciała. Utrzymaj tę pozycję przez 20-30 sekund lub dopóki kurcz nie ustąpi.',
        open: false
      },
      {
        id: 'massage',
        title: 'Masaż mięśnia',
        content: 'Delikatnie masuj i uciskaj skurczony mięsień, aby pomóc mu się rozluźnić. Masaż pomaga przywrócić właściwe krążenie krwi oraz przyspiesza ustąpienie skurczu.',
        open: false
      },
      {
        id: 'temperature',
        title: 'Ciepło i zimno',
        content: 'Zastosuj ciepły kompres na skurczony mięsień, aby zwiększyć przepływ krwi i rozluźnić go. W przypadku bólu po ustąpieniu skurczu, zimny kompres może pomóc zmniejszyć stan zapalny.',
        open: false
      }
    ],
    
    toggleAccordion(id) {
      this.accordionItems = this.accordionItems.map(item => ({
        ...item,
        open: item.id === id ? !item.open : false
      }));
    },
    
    template: `
      <section id="treatment" class="py-20 bg-blue-50">
        <div class="container mx-auto px-6">
          <div class="max-w-3xl mx-auto text-center mb-16">
            <span class="text-blue-600 font-semibold text-sm uppercase tracking-wider">Pomoc i profilaktyka</span>
            <h2 class="text-3xl md:text-4xl font-bold mt-2 mb-6 text-gray-800">
              Leczenie i zapobieganie kurczom
            </h2>
            <p class="text-lg text-gray-600 leading-relaxed">
              Poznaj metody natychmiastowej pomocy przy kurczach mięśniowych oraz 
              sprawdzone strategie zapobiegania ich występowaniu.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-12">
            <!-- Immediate relief with Pines Accordion -->
            <div class="bg-white rounded-xl shadow-md overflow-hidden">
              <div class="p-6 sm:p-8">
                <h3 class="text-2xl font-semibold mb-8 text-gray-800 border-b pb-4">
                  <span class="border-b-2 border-blue-500 pb-2">Natychmiastowa pomoc</span>
                </h3>
                
                <!-- Accordion Items -->
                <div class="space-y-5">
                  <template x-for="item in accordionItems" :key="item.id">
                    <div class="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-200">
                      <button 
                        @click="toggleAccordion(item.id)" 
                        class="flex justify-between items-center w-full px-5 py-4 bg-white hover:bg-gray-50 transition-colors duration-200 focus:outline-none"
                      >
                        <span class="font-medium text-gray-800 flex items-center" x-text="item.title"></span>
                        <div class="flex items-center text-blue-500">
                          <span class="mr-2 text-sm" x-show="!item.open">Pokaż</span>
                          <span class="mr-2 text-sm" x-show="item.open">Ukryj</span>
                          <svg 
                            class="w-5 h-5 transition-transform duration-300 ease-in-out" 
                            :class="{'rotate-180': item.open}" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </button>
                      <div 
                        x-show="item.open" 
                        x-collapse
                        x-transition:enter="transition ease-out duration-200"
                        x-transition:enter-start="opacity-0 transform -translate-y-2"
                        x-transition:enter-end="opacity-100 transform translate-y-0"
                        x-transition:leave="transition ease-in duration-200"
                        x-transition:leave-start="opacity-100 transform translate-y-0"
                        x-transition:leave-end="opacity-0 transform -translate-y-2"
                        class="px-5 py-4 text-gray-600 bg-gray-50 border-t border-gray-100"
                      >
                        <p class="leading-relaxed" x-text="item.content"></p>
                      </div>
                    </div>
                  </template>
                </div>
              </div>
            </div>
            
            <!-- Prevention using Pines List -->
            <div class="bg-white rounded-xl shadow-md overflow-hidden">
              <div class="p-6 sm:p-8">
                <h3 class="text-2xl font-semibold mb-8 text-gray-800 border-b pb-4">
                  <span class="border-b-2 border-green-500 pb-2">Profilaktyka</span>
                </h3>
                
                <ul class="space-y-6">
                  <li class="flex">
                    <div class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                      </svg>
                    </div>
                    <div class="ml-4">
                      <h4 class="text-lg font-medium text-gray-800">Nawodnienie</h4>
                      <p class="mt-2 text-gray-600">
                        Pij wystarczającą ilość wody każdego dnia, szczególnie podczas i po wysiłku fizycznym. 
                        Zaleca się minimum 2 litry płynów dziennie, a podczas intensywnych treningów nawet więcej.
                      </p>
                    </div>
                  </li>
                  
                  <li class="flex">
                    <div class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                      </svg>
                    </div>
                    <div class="ml-4">
                      <h4 class="text-lg font-medium text-gray-800">Równowaga elektrolitów</h4>
                      <p class="mt-2 text-gray-600">
                        Utrzymuj odpowiedni poziom elektrolitów (potas, magnez, wapń) poprzez zrównoważoną dietę 
                        i w razie potrzeby suplementację (zawsze skonsultuj się z lekarzem).
                      </p>
                    </div>
                  </li>
                  
                  <li class="flex">
                    <div class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                      </svg>
                    </div>
                    <div class="ml-4">
                      <h4 class="text-lg font-medium text-gray-800">Rozciąganie mięśni</h4>
                      <p class="mt-2 text-gray-600">
                        Regularnie rozciągaj mięśnie, szczególnie przed i po wysiłku fizycznym. 
                        Zwróć szczególną uwagę na mięśnie łydek, ud i stóp, które są najczęściej dotknięte kurczami.
                      </p>
                    </div>
                  </li>
                  
                  <li class="flex">
                    <div class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                      </svg>
                    </div>
                    <div class="ml-4">
                      <h4 class="text-lg font-medium text-gray-800">Właściwe obuwie</h4>
                      <p class="mt-2 text-gray-600">
                        Noszenie wygodnego obuwia, które dobrze wspiera stopę, może zapobiec kurczom 
                        związanym z nadmiernym obciążeniem mięśni stopy i łydki.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <!-- Call to Action -->
          <div class="mt-20 text-center">
            <a 
              href="#contact" 
              class="inline-flex items-center justify-center rounded-lg bg-blue-600 text-white font-semibold px-8 py-4 shadow-lg hover:bg-blue-700 transition duration-300"
            >
              Skonsultuj się z lekarzem
              <svg class="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    `
  };
} 