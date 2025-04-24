export default function() {
  return {
    template: `
      <section id="wibroakustyka" class="py-20 bg-gray-50">
        <div class="container mx-auto px-6">
          <div class="text-center mb-12">
            <span class="text-blue-600 font-semibold text-sm uppercase tracking-wider">Nowoczesne podejście</span>
            <h2 class="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-800">Wibroakustyka</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              Innowacyjne podejście do profilaktyki i redukcji ryzyka kurczów mięśniowych przy użyciu terapii wibroakustycznej.
            </p>
          </div>
          
          <div class="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden mb-10">
            <div class="w-full flex justify-center bg-gray-50 p-4">
              <img 
                src="/img/wibroakustyka.webp" 
                alt="Terapia wibroakustyczna" 
                class="max-w-full h-auto object-contain rounded" 
                width="768" 
                height="584"
              />
            </div>
            <div class="p-6 md:p-8">
              <h3 class="text-2xl font-semibold text-gray-800 mb-4">Jak wibroakustyka może pomóc?</h3>
              <p class="text-gray-600 mb-6">
                Wibroakustyka to metoda terapeutyczna wykorzystująca dźwięk i wibracje do oddziaływania na organizm. Badania sugerują, że może być pomocna w zapobieganiu kurczom mięśniowym poprzez:
              </p>
              <ul class="space-y-3 mb-6">
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-blue-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Poprawę mikrokrążenia w tkankach mięśniowych</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-blue-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Redukcję napięcia mięśniowego i głęboki relaks</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-blue-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Przywracanie równowagi autonomicznego układu nerwowego</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-blue-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Wspomaganie procesów regeneracyjnych organizmu</span>
                </li>
              </ul>
              <p class="text-gray-600 text-sm">
                Więcej informacji na temat wibroakustyki i jej zastosowań można znaleźć na stronie 
                <a href="https://wibroakustyka.ai" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">wibroakustyka.ai</a>.
                Badania nad terapeutycznym zastosowaniem wibroakustyki w redukcji ryzyka kurczów mięśniowych są wciąż w toku, jednak wstępne rezultaty są obiecujące.
              </p>
            </div>
          </div>
          
          <div class="max-w-3xl mx-auto text-center text-gray-600">
            <p>
              Zawsze konsultuj nowe metody terapeutyczne z lekarzem, szczególnie jeśli cierpisz na przewlekłe lub nawracające kurcze mięśniowe. 
              Wibroakustyka może być uzupełnieniem tradycyjnych metod leczenia, ale nie powinna ich zastępować.
            </p>
          </div>
        </div>
      </section>
    `
  };
} 