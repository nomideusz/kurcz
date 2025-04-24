export default function() {
  return {
    template: `
      <section id="home" class="relative bg-gradient-to-br from-blue-600 to-blue-500 py-24 pt-24 pb-36 text-white overflow-hidden">
        <!-- Decorative Elements -->
        <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div class="absolute h-96 w-96 -top-12 -left-16 bg-blue-600 rounded-full opacity-20 blur-3xl animate-blob"></div>
          <div class="absolute h-96 w-96 top-1/2 right-0 bg-blue-400 rounded-full opacity-20 blur-3xl animate-blob animation-delay-2000"></div>
          <div class="absolute bottom-24 left-1/3 h-64 w-64 bg-blue-300 rounded-full opacity-20 blur-3xl animate-blob animation-delay-4000"></div>
          
          <!-- Additional decorative elements for more visual interest -->
          <div class="absolute top-1/4 right-1/4 h-24 w-24 bg-blue-200 rounded-full opacity-30 blur-2xl animate-pulse"></div>
          <div class="absolute bottom-1/3 right-1/3 h-32 w-32 bg-blue-300 rounded-full opacity-25 blur-2xl animate-pulse animation-delay-1000"></div>
        </div>
        
        <div class="container mx-auto px-6 relative z-10">
          <div class="flex flex-col md:flex-row items-center justify-between">
            <div class="md:w-1/2 text-center md:text-left mb-10 md:mb-0 mt-8">
              <div class="inline-block px-3 py-1 bg-blue-700/30 backdrop-blur-sm rounded-full mb-4 border border-blue-400/30">
                <span class="text-sm font-medium text-blue-100">Pomoc przy kurczach mięśniowych</span>
              </div>
              
              <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-sm">
                Wiedza o kurczach mięśniowych
              </h1>
              
              <p class="text-xl md:text-2xl mb-6 text-blue-100 drop-shadow-sm">
                Kompleksowe informacje w jednym miejscu
              </p>
              
              <p class="text-blue-50 mb-10 max-w-lg leading-relaxed drop-shadow-sm">
                Kurcze mięśniowe mogą być niezwykle bolesne i utrudniać codzienne funkcjonowanie. 
                Na tej stronie znajdziesz informacje o przyczynach, zapobieganiu i leczeniu kurczy mięśniowych.
              </p>
              
              <div class="flex flex-col sm:flex-row justify-center md:justify-start gap-5 mb-8">
                <button 
                  type="button"
                  @click="window.location.href='#treatment'"
                  class="inline-flex items-center justify-center rounded-lg bg-red-600 text-white font-semibold px-6 py-4 shadow-lg hover:bg-red-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                  </svg>
                  Natychmiastowa pomoc
                </button>
                <button 
                  type="button"
                  @click="window.location.href='#intro'"
                  class="inline-flex items-center justify-center rounded-lg bg-white text-blue-700 font-semibold px-6 py-4 shadow-lg hover:bg-blue-50 hover:text-blue-800 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  Dowiedz się więcej
                  <svg class="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div class="md:w-1/2 flex justify-center md:justify-end">
              <div class="relative w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-blue-400 to-blue-300 rounded-full shadow-2xl flex items-center justify-center p-3 transform hover:scale-105 transition-transform duration-500">
                <!-- Multiple layered elements for depth -->
                <div class="absolute w-full h-full rounded-full animate-pulse bg-gradient-to-br from-white to-blue-200 opacity-20"></div>
                <div class="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/30 to-blue-700/30 blur-sm"></div>
                <div class="absolute w-full h-full rounded-full border-2 border-white/20 animate-spin-slow"></div>
                <div class="w-full h-full rounded-full border-8 border-white border-opacity-30 flex items-center justify-center text-white overflow-hidden">
                  <img src="/img/hero_square.png" alt="Ilustracja kurczu mięśniowego" class="w-full h-full object-cover rounded-full" loading="lazy" fetchpriority="high" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Wave Shape Divider -->
        <div class="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg class="relative block w-full h-16 md:h-24 lg:h-32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="fill-gray-50"></path>
          </svg>
        </div>
      </section>
    `
  };
} 