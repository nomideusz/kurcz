export default function() {
  return {
    template: `
      <section id="prevention" class="relative py-24 md:py-32 bg-background-light overflow-hidden">
        <!-- Background elements -->
        <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div class="absolute top-1/4 right-0 w-1/3 h-1/2 bg-primary-100/30 rounded-full blur-[120px]"></div>
          <div class="absolute bottom-0 left-[-10%] w-1/2 h-1/3 bg-health-light/20 rounded-full blur-[120px]"></div>
        </div>

        <div class="container mx-auto px-6 relative z-10">
          <div class="max-w-4xl mx-auto text-center mb-16 md:mb-24 animate-slide-up">
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-700 rounded-full mb-6 border border-primary-100 font-medium text-sm">
              <span class="w-2 h-2 rounded-full bg-primary-500"></span>
              Długoterminowa ochrona
            </div>
            <h2 class="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Skuteczna profilaktyka <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">kurczy mięśniowych</span>
            </h2>
            <p class="text-lg md:text-xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
              Poznaj sprawdzone strategie profilaktyczne, które pomogą Ci zapobiec nawrotom bolesnych kurczy. Właściwe podejście łączy odpowiednie nawyki żywieniowe z regularnymi ćwiczeniami.
            </p>
          </div>
          
          <!-- Main Content Cards -->
          <div class="max-w-6xl mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              <!-- Card 1 -->
              <div class="group relative bg-surface rounded-[2rem] p-8 md:p-10 shadow-soft border border-gray-100 hover:shadow-glow hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col h-full">
                <div class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div class="w-16 h-16 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-primary-100 transition-all duration-300 border border-primary-100">
                  <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                  </svg>
                </div>
                <h3 class="font-heading text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">Regularne nawodnienie</h3>
                <p class="text-gray-600 leading-relaxed mb-8 flex-grow">
                  Wypijaj minimum 2 litry wody dziennie, zwiększając ilość podczas upałów i aktywności fizycznej. Napoje izotoniczne są szczególnie wartościowe przy intensywnym wysiłku.
                </p>
                <ul class="space-y-4">
                  <li class="flex items-start">
                    <div class="w-6 h-6 rounded-full bg-primary-50 text-primary-500 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <span class="text-gray-600 font-medium">Pij małe ilości przez cały dzień</span>
                  </li>
                  <li class="flex items-start">
                    <div class="w-6 h-6 rounded-full bg-primary-50 text-primary-500 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <span class="text-gray-600 font-medium">Monitoruj kolor moczu — jasny wskazuje na dobre nawodnienie</span>
                  </li>
                </ul>
              </div>
              
              <!-- Card 2 -->
              <div class="group relative bg-surface rounded-[2rem] p-8 md:p-10 shadow-soft border border-gray-100 hover:shadow-glow-health hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col h-full">
                <div class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-health to-health-light opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div class="w-16 h-16 rounded-2xl bg-health/10 text-health-dark flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-health/20 transition-all duration-300 border border-health/20">
                  <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </div>
                <h3 class="font-heading text-2xl font-bold text-gray-900 mb-4 group-hover:text-health-dark transition-colors duration-300">Dieta bogata w elektrolity</h3>
                <p class="text-gray-600 leading-relaxed mb-8 flex-grow">
                  Włącz do diety pokarmy zasobne w magnez (ciemna czekolada, orzechy, nasiona), potas (banany, ziemniaki) i wapń (nabiał, zielone warzywa) — kluczowe minerały zapobiegające kurczom.
                </p>
                <ul class="space-y-4">
                  <li class="flex items-start">
                    <div class="w-6 h-6 rounded-full bg-health/10 text-health-dark flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <span class="text-gray-600 font-medium">Jedz regularnie małe posiłki</span>
                  </li>
                  <li class="flex items-start">
                    <div class="w-6 h-6 rounded-full bg-health/10 text-health-dark flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <span class="text-gray-600 font-medium">Suplementuj magnez po konsultacji z lekarzem</span>
                  </li>
                </ul>
              </div>
              
              <!-- Card 3 -->
              <div class="group relative bg-surface rounded-[2rem] p-8 md:p-10 shadow-soft border border-gray-100 hover:shadow-glow hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col h-full">
                <div class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div class="w-16 h-16 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-indigo-100 transition-all duration-300 border border-indigo-100">
                  <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 class="font-heading text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors duration-300">Ćwiczenia rozciągające</h3>
                <p class="text-gray-600 leading-relaxed mb-8 flex-grow">
                  Wykonuj 5-10 minutową rozgrzewkę przed treningiem i 10-15 minutowe rozciąganie po nim. Szczególnie ważne dla łydek, ud i stóp — najczęstszych miejsc występowania kurczy.
                </p>
                <ul class="space-y-4">
                  <li class="flex items-start">
                    <div class="w-6 h-6 rounded-full bg-indigo-50 text-indigo-500 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <span class="text-gray-600 font-medium">Utrzymuj każde rozciągnięcie przez 20-30 sekund</span>
                  </li>
                  <li class="flex items-start">
                    <div class="w-6 h-6 rounded-full bg-indigo-50 text-indigo-500 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <span class="text-gray-600 font-medium">Wykonuj rozciąganie minimum 3 razy w tygodniu</span>
                  </li>
                </ul>
              </div>
              
              <!-- Card 4 -->
              <div class="group relative bg-surface rounded-[2rem] p-8 md:p-10 shadow-soft border border-gray-100 hover:shadow-glow hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col h-full">
                <div class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div class="w-16 h-16 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-amber-100 transition-all duration-300 border border-amber-100">
                  <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 class="font-heading text-2xl font-bold text-gray-900 mb-4 group-hover:text-amber-600 transition-colors duration-300">Właściwa progresja treningowa</h3>
                <p class="text-gray-600 leading-relaxed mb-8 flex-grow">
                  Zwiększaj intensywność treningu maksymalnie o 10% tygodniowo. Dawaj mięśniom czas na regenerację, wprowadzając dni odpoczynku między intensywnymi sesjami treningowymi.
                </p>
                <ul class="space-y-4">
                  <li class="flex items-start">
                    <div class="w-6 h-6 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <span class="text-gray-600 font-medium">Wprowadź minimum 1-2 dni regeneracyjne tygodniowo</span>
                  </li>
                  <li class="flex items-start">
                    <div class="w-6 h-6 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <span class="text-gray-600 font-medium">Słuchaj sygnałów swojego ciała</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <!-- Additional Prevention Tips - Glassmorphic Approach -->
          <div class="mt-20 md:mt-32 max-w-6xl mx-auto relative group">
            <div class="absolute inset-0 bg-gradient-to-b from-primary-200 to-transparent rounded-[2.5rem] opacity-20 blur-xl"></div>
            <div class="relative bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 shadow-glass border border-white/60">
              <h3 class="font-heading text-3xl font-bold text-gray-900 mb-10 text-center">Dodatkowe zalecenia profilaktyczne</h3>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                <div class="flex items-start bg-white/50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-soft transition-all duration-300 hover:bg-white">
                  <div class="w-12 h-12 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center flex-shrink-0 mr-4 border border-primary-100">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                  </div>
                  <div>
                    <h4 class="font-heading text-xl font-bold text-gray-900 mb-2">Regularne badania</h4>
                    <p class="text-gray-600 leading-relaxed text-sm md:text-base">Badania krwi mogą wykryć niedobory elektrolitów i minerałów. Monitoruj szczególnie poziom potasu, magnezu i wapnia.</p>
                  </div>
                </div>

                <div class="flex items-start bg-white/50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-soft transition-all duration-300 hover:bg-white">
                  <div class="w-12 h-12 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center flex-shrink-0 mr-4 border border-primary-100">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
                  </div>
                  <div>
                    <h4 class="font-heading text-xl font-bold text-gray-900 mb-2">Higiena snu</h4>
                    <p class="text-gray-600 leading-relaxed text-sm md:text-base">Zadbaj o 7-8 godzin snu. Nocne kurcze często wynikają z przemęczenia. Rozważ podkładkę podnoszącą stopy.</p>
                  </div>
                </div>

                <div class="flex items-start bg-white/50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-soft transition-all duration-300 hover:bg-white">
                  <div class="w-12 h-12 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center flex-shrink-0 mr-4 border border-primary-100">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                  </div>
                  <div>
                    <h4 class="font-heading text-xl font-bold text-gray-900 mb-2">Właściwe obuwie</h4>
                    <p class="text-gray-600 leading-relaxed text-sm md:text-base">Odpowiednie obuwie sportowe z dobrym podparciem łuku stopy zmniejsza ryzyko kurczy. Unikaj obcasów.</p>
                  </div>
                </div>

                <div class="flex items-start bg-white/50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-soft transition-all duration-300 hover:bg-white">
                  <div class="w-12 h-12 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center flex-shrink-0 mr-4 border border-primary-100">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path></svg>
                  </div>
                  <div>
                    <h4 class="font-heading text-xl font-bold text-gray-900 mb-2">Unikanie używek</h4>
                    <p class="text-gray-600 leading-relaxed text-sm md:text-base">Ogranicz alkohol, kofeinę i nikotynę, które mogą przyczyniać się do odwodnienia i zwiększać ryzyko kurczy.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Disclaimer -->
          <div class="mt-16 text-center max-w-4xl mx-auto">
            <p class="text-sm text-gray-400">
              <strong>Zastrzeżenie medyczne:</strong> Informacje zawarte na tej stronie mają charakter edukacyjny i nie zastępują profesjonalnej konsultacji medycznej. W przypadku poważnych problemów zdrowotnych skonsultuj się z lekarzem.
            </p>
          </div>
        </div>
      </section>
    `
  };
} 