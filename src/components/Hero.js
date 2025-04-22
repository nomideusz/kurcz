export default function() {
  return {
    template: `
      <section id="home" class="relative bg-gradient-to-br from-blue-600 to-blue-500 py-24 pt-32 text-white overflow-hidden">
        <!-- Decorative Elements -->
        <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div class="absolute h-96 w-96 -top-12 -left-16 bg-blue-600 rounded-full opacity-20 blur-3xl"></div>
          <div class="absolute h-96 w-96 top-1/2 right-0 bg-blue-400 rounded-full opacity-20 blur-3xl"></div>
        </div>
        
        <div class="container mx-auto px-6 relative z-10">
          <div class="flex flex-col md:flex-row items-center justify-between">
            <div class="md:w-1/2 text-center md:text-left mb-10 md:mb-0 mt-8">
              <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                Wiedza o kurczach mięśniowych
              </h1>
              
              <p class="text-xl md:text-2xl mb-6 text-blue-100">
                Kompleksowe informacje w jednym miejscu
              </p>
              
              <p class="text-blue-100 mb-8 max-w-lg">
                Kurcze mięśniowe mogą być niezwykle bolesne i utrudniać codzienne funkcjonowanie. 
                Na tej stronie znajdziesz informacje o przyczynach, zapobieganiu i leczeniu kurczy mięśniowych.
              </p>
              
              <div class="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                <a 
                  href="#intro" 
                  class="inline-flex items-center justify-center rounded-lg bg-white text-blue-700 font-semibold px-6 py-3 shadow-lg hover:bg-blue-50 hover:shadow-xl transition duration-300"
                >
                  Dowiedz się więcej
                  <svg class="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </a>
                <a 
                  href="#treatment" 
                  class="inline-flex items-center justify-center rounded-lg bg-blue-600 bg-opacity-20 text-white border border-blue-200 border-opacity-30 font-semibold px-6 py-3 hover:bg-opacity-30 hover:shadow-lg transition duration-300"
                >
                  Metody leczenia
                </a>
              </div>
            </div>
            
            <div class="md:w-1/2 flex justify-center md:justify-end">
              <div class="relative w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-blue-400 to-blue-200 rounded-full shadow-2xl flex items-center justify-center p-3">
                <div class="absolute w-full h-full rounded-full animate-pulse bg-gradient-to-br from-white to-blue-200 opacity-20"></div>
                <div class="w-full h-full rounded-full border-8 border-white border-opacity-20 flex items-center justify-center text-white">
                  <img src="hero_square.png" alt="Muscle cramp illustration" class="w-full h-full object-cover rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Wave Shape Divider -->
        <div class="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg class="relative block w-full h-12 md:h-16 lg:h-24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="fill-white"></path>
          </svg>
        </div>
      </section>
    `
  };
} 