export default function() {
  return {
    template: `
      <section id="experts" class="py-20 bg-blue-50">
        <div class="container mx-auto px-6">
          <div class="max-w-3xl mx-auto text-center mb-16">
            <span class="text-blue-600 font-semibold text-sm uppercase tracking-wider">Opinie ekspertów</span>
            <h2 class="text-3xl md:text-4xl font-bold mt-2 mb-6 text-gray-800">
              Specjaliści o kurczach mięśniowych
            </h2>
            <p class="text-lg text-gray-600 leading-relaxed">
              Poznaj opinie fizjoterapeutów, ortopedów i neurologów na temat przyczyn,
              zapobiegania i leczenia kurczy mięśniowych.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Expert 1 -->
            <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div class="p-6">
                <div class="flex items-center mb-6">
                  <div class="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold text-gray-800">dr Mateusz Kowalski</h3>
                    <p class="text-gray-600">Neurolog</p>
                  </div>
                </div>
                <blockquote class="text-gray-600 italic border-l-4 border-blue-500 pl-4 py-2 mb-4">
                  "Kurcze mięśniowe, choć z reguły niegroźne, mogą być sygnałem alarmowym wskazującym na niedobory 
                  elektrolitów bądź nieprawidłowości w funkcjonowaniu układu nerwowego. Regularne badania 
                  i prawidłowe nawodnienie to podstawa profilaktyki."
                </blockquote>
                <p class="text-gray-500 text-sm">
                  Specjalista w dziedzinie neurologii z 12-letnim doświadczeniem. Autor publikacji 
                  naukowych dotyczących schorzeń układu nerwowego.
                </p>
              </div>
            </div>
            
            <!-- Expert 2 -->
            <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div class="p-6">
                <div class="flex items-center mb-6">
                  <div class="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold text-gray-800">mgr Anna Nowak</h3>
                    <p class="text-gray-600">Fizjoterapeutka</p>
                  </div>
                </div>
                <blockquote class="text-gray-600 italic border-l-4 border-blue-500 pl-4 py-2 mb-4">
                  "W mojej praktyce często spotykam pacjentów cierpiących na nawracające kurcze mięśniowe. 
                  Kluczowe jest połączenie odpowiednich technik rozciągających z prawidłowo zbilansowaną dietą 
                  i odpowiednią suplementacją magnezu."
                </blockquote>
                <p class="text-gray-500 text-sm">
                  Specjalistka rehabilitacji sportowej z 8-letnim doświadczeniem. Współpracuje z drużynami 
                  sportowymi, prowadzi szkolenia z zakresu profilaktyki urazów.
                </p>
              </div>
            </div>
            
            <!-- Expert 3 -->
            <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div class="p-6">
                <div class="flex items-center mb-6">
                  <div class="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold text-gray-800">dr hab. Piotr Wiśniewski</h3>
                    <p class="text-gray-600">Ortopeda</p>
                  </div>
                </div>
                <blockquote class="text-gray-600 italic border-l-4 border-blue-500 pl-4 py-2 mb-4">
                  "Kurcze mięśniowe u sportowców to częsty problem wynikający z przeciążenia, niewłaściwej 
                  techniki czy niewystarczającej regeneracji. Kluczowe jest zrównoważone podejście 
                  do treningu i odpowiednio długie okresy odpoczynku."
                </blockquote>
                <p class="text-gray-500 text-sm">
                  Ortopeda sportowy z 15-letnim doświadczeniem. Zajmuje się leczeniem urazów sportowych 
                  oraz profilaktyką kontuzji u sportowców wyczynowych.
                </p>
              </div>
            </div>
          </div>
          
          <!-- Call to Action -->
          <div class="mt-16 text-center">
            <a href="#contact" class="inline-flex items-center justify-center rounded-lg bg-blue-700 text-white font-semibold px-8 py-4 shadow-lg hover:bg-blue-800 hover:shadow-xl transition-all duration-300">
              Umów konsultację
              <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
    `
  };
} 