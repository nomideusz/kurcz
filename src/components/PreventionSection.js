export default function() {
  return {
    template: `
      <section id="prevention" class="py-12 md:py-20 bg-white">
        <div class="container mx-auto px-4 sm:px-6">
          <div class="max-w-6xl mx-auto text-center mb-10 md:mb-16">
            <span class="section-subtitle block text-sm sm:text-base">Długoterminowa ochrona</span>
            <h2 class="section-title text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">
              Skuteczna profilaktyka kurczy mięśniowych
            </h2>
            <p class="section-description text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Poznaj sprawdzone strategie profilaktyczne, które pomogą Ci zapobiec nawrotom bolesnych kurczy mięśniowych. Właściwe podejście łączy odpowiednie nawyki żywieniowe z regularnymi ćwiczeniami i świadomością własnego ciała.
            </p>
            <div class="mt-3 sm:mt-4">
              <button 
                @click="document.getElementById('treatment').scrollIntoView({behavior: 'smooth', block: 'start'})" 
                type="button"
                class="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors mx-auto relative"
              >
                <span>Wróć do metod doraźnej pomocy</span>
                <svg class="ml-1 w-5 h-5 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
                <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 hover:w-full transition-all duration-300"></span>
              </button>
            </div>
          </div>
          
          <!-- Main Content Cards -->
          <div class="max-w-6xl mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 md:gap-10">
              <!-- Card 1 -->
              <div class="bg-white rounded-xl shadow-soft overflow-hidden transform hover:-translate-y-1 transition-all duration-300 hover:shadow-lg border-t-4 border-blue-500 h-full">
                <div class="p-6 sm:p-8">
                  <div class="icon-circle icon-circle-md bg-blue-100 text-blue-600 mb-5">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.168 1.168a4 4 0 01-2.212-.904l-1.114-1.114a4 4 0 01-1.157-2.83l-.9-.243V4.414l.9.243a2 2 0 00-1.218 0l.9-.243v3.758a4 4 0 01-1.156 2.83L2.318 15.56a4 4 0 01-1.3.924C.58 16.9.721 16.23.913 15.56l-.9.243.5-1.5a4 4 0 01.67-3.86l-.242.9 4-4 .243-.9a2 2 0 00.816-.816l-.9.243z" clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  <h3 class="text-xl font-semibold mb-3 text-gray-800">Regularne nawodnienie</h3>
                  <p class="text-base text-gray-600 mb-5">
                    Wypijaj minimum 2 litry wody dziennie, zwiększając ilość podczas upałów i aktywności fizycznej. Napoje izotoniczne są szczególnie wartościowe przy intensywnym wysiłku.
                  </p>
                  <ul class="space-y-3 text-sm text-gray-600">
                    <li class="flex items-start">
                      <svg class="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                      </svg>
                      <span>Pij małe ilości przez cały dzień</span>
                    </li>
                    <li class="flex items-start">
                      <svg class="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                      </svg>
                      <span>Monitoruj kolor moczu — jasny wskazuje na dobre nawodnienie</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <!-- Card 2 -->
              <div class="bg-white rounded-xl shadow-soft overflow-hidden transform hover:-translate-y-1 transition-all duration-300 hover:shadow-lg border-t-4 border-green-500 h-full">
                <div class="p-6 sm:p-8">
                  <div class="icon-circle icon-circle-md bg-green-100 text-green-600 mb-5">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
                    </svg>
                  </div>
                  <h3 class="text-xl font-semibold mb-3 text-gray-800">Dieta bogata w elektrolity</h3>
                  <p class="text-base text-gray-600 mb-5">
                    Włącz do diety pokarmy zasobne w magnez (ciemna czekolada, orzechy, nasiona), potas (banany, ziemniaki, awokado) i wapń (nabiał, zielone warzywa) — kluczowe minerały zapobiegające kurczom.
                  </p>
                  <ul class="space-y-3 text-sm text-gray-600">
                    <li class="flex items-start">
                      <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                      </svg>
                      <span>Jedz regularnie małe posiłki</span>
                    </li>
                    <li class="flex items-start">
                      <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                      </svg>
                      <span>Suplementuj magnez po konsultacji z lekarzem</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <!-- Card 3 -->
              <div class="bg-white rounded-xl shadow-soft overflow-hidden transform hover:-translate-y-1 transition-all duration-300 hover:shadow-lg border-t-4 border-purple-500 h-full">
                <div class="p-6 sm:p-8">
                  <div class="icon-circle icon-circle-md bg-purple-100 text-purple-600 mb-5">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z" clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  <h3 class="text-xl font-semibold mb-3 text-gray-800">Systematyczne ćwiczenia rozciągające</h3>
                  <p class="text-base text-gray-600 mb-5">
                    Wykonuj 5-10 minutową rozgrzewkę przed treningiem i 10-15 minutowe rozciąganie po nim. Szczególnie ważne dla łydek, ud i stóp — najczęstszych miejsc występowania kurczy.
                  </p>
                  <ul class="space-y-3 text-sm text-gray-600">
                    <li class="flex items-start">
                      <svg class="w-4 h-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                      </svg>
                      <span>Utrzymuj każde rozciągnięcie przez 20-30 sekund</span>
                    </li>
                    <li class="flex items-start">
                      <svg class="w-4 h-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                      </svg>
                      <span>Wykonuj rozciąganie minimum 3 razy w tygodniu</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <!-- Card 4 -->
              <div class="bg-white rounded-xl shadow-soft overflow-hidden transform hover:-translate-y-1 transition-all duration-300 hover:shadow-lg border-t-4 border-yellow-500 h-full">
                <div class="p-6 sm:p-8">
                  <div class="icon-circle icon-circle-md bg-yellow-100 text-yellow-600 mb-5">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  <h3 class="text-xl font-semibold mb-3 text-gray-800">Właściwa progresja treningowa</h3>
                  <p class="text-base text-gray-600 mb-5">
                    Zwiększaj intensywność treningu maksymalnie o 10% tygodniowo. Dawaj mięśniom czas na regenerację, wprowadzając dni odpoczynku między intensywnymi sesjami treningowymi.
                  </p>
                  <ul class="space-y-3 text-sm text-gray-600">
                    <li class="flex items-start">
                      <svg class="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                      </svg>
                      <span>Wprowadź minimum 1-2 dni regeneracyjne tygodniowo</span>
                    </li>
                    <li class="flex items-start">
                      <svg class="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                      </svg>
                      <span>Słuchaj sygnałów swojego ciała</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Additional Prevention Tips -->
          <div class="mt-16 md:mt-20 max-w-6xl mx-auto bg-gray-50 rounded-xl shadow-soft overflow-hidden p-6 sm:p-8 md:p-10">
            <h3 class="text-xl sm:text-2xl font-bold text-gray-800 mb-8 text-center">Dodatkowe zalecenia profilaktyczne</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <!-- Left Column -->
              <div>
                <ul class="space-y-6">
                  <li class="feature-list-item">
                    <div class="flex items-start">
                      <div class="icon-circle icon-circle-sm bg-blue-100 text-blue-600 mr-3 flex-shrink-0">
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                        </svg>
                      </div>
                      <div class="flex-1">
                        <h4 class="text-base font-medium text-gray-800 mb-2">Regularne badania kontrolne</h4>
                        <p class="text-gray-600">Badania krwi mogą wykryć niedobory elektrolitów i minerałów, które przyczyniają się do kurczy. Monitoruj szczególnie poziom potasu, magnezu i wapnia.</p>
                      </div>
                    </div>
                  </li>
                  <li class="feature-list-item">
                    <div class="flex items-start">
                      <div class="icon-circle icon-circle-sm bg-blue-100 text-blue-600 mr-3 flex-shrink-0">
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                        </svg>
                      </div>
                      <div class="flex-1">
                        <h4 class="text-base font-medium text-gray-800 mb-2">Odpowiednia higiena snu</h4>
                        <p class="text-gray-600">Zadbaj o 7-8 godzin snu dziennie. Nocne kurcze często wynikają z przemęczenia i stresu. Rozważ stosowanie podkładki podnoszącej stopy, aby zmniejszyć ryzyko nocnych kurczy łydek.</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              
              <!-- Right Column -->
              <div>
                <ul class="space-y-6">
                  <li class="feature-list-item">
                    <div class="flex items-start">
                      <div class="icon-circle icon-circle-sm bg-blue-100 text-blue-600 mr-3 flex-shrink-0">
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                        </svg>
                      </div>
                      <div class="flex-1">
                        <h4 class="text-base font-medium text-gray-800 mb-2">Właściwe obuwie</h4>
                        <p class="text-gray-600">Noszenie odpowiedniego obuwia sportowego z dobrym podparciem łuku stopy i amortyzacją zmniejsza ryzyko kurczy. Unikaj długotrwałego noszenia butów na wysokim obcasie.</p>
                      </div>
                    </div>
                  </li>
                  <li class="feature-list-item">
                    <div class="flex items-start">
                      <div class="icon-circle icon-circle-sm bg-blue-100 text-blue-600 mr-3 flex-shrink-0">
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                        </svg>
                      </div>
                      <div class="flex-1">
                        <h4 class="text-base font-medium text-gray-800 mb-2">Unikanie używek</h4>
                        <p class="text-gray-600">Ogranicz spożycie alkoholu, kofeiny i nikotyny, które mogą przyczyniać się do odwodnienia organizmu i zwiększać ryzyko występowania kurczy mięśniowych.</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <!-- Disclaimer -->
          <div class="mt-10 md:mt-16 max-w-6xl mx-auto text-center">
            <div class="p-4 sm:p-5 bg-gray-50 border border-gray-200 rounded-lg">
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