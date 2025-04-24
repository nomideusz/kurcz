export default function() {
  return {
    testimonials: [
      {
        quote: "Leżąc w fotelu doświadczyłem nieznanego dotąd uczucia bycia integralną częścią muzyki. Poprzez wibrację, która docierała do każdej komórki mojego ciała, dźwięki rezonowały wewnątrz, stapiając mnie z muzyką w jedno. Poprzez akt fizyczny, przeżyłem akt metafizyczny przeniesienia się w czasie i przestrzeni.",
        author: ""
      },
      {
        quote: "Komórkowe doświadczenie muzyki, głęboko relaksujące. Widzę możliwość we wsparciu terapii holistycznych / PTSD / oddechowych / terapii dzieci. Zastanawia mnie efekt gdy wibracje przechodzą też na głowę.",
        author: ""
      },
      {
        quote: "Zaskakujące odczucia. Proponuję oddziaływać konkretną częstotliwością. Przyjemne rozluźnienie dzięki przenikającej wibracji.",
        author: ""
      },
      {
        quote: "Fotel Graal umożliwia pełne ekstazy doznania muzyczne i relaksacyjne. Pozwala uspokoić układ nerwowy i odpocząć. Bardzo wygodny fotel umożliwia pełnię odpoczynku. Pozycja \"zero gravity\" sprwawdza się w praktyce.",
        author: ""
      }
    ],
    activeTestimonial: 0,
    
    nextTestimonial() {
      this.activeTestimonial = (this.activeTestimonial + 1) % this.testimonials.length;
    },
    
    prevTestimonial() {
      this.activeTestimonial = (this.activeTestimonial - 1 + this.testimonials.length) % this.testimonials.length;
    },
    
    template: `
      <section id="partner" class="py-24 bg-white overflow-hidden">
        <div class="container mx-auto px-6">
          <div class="text-center mb-16">
            <span class="text-blue-600 font-semibold text-sm uppercase tracking-wider">Nasz Partner</span>
            <h2 class="text-3xl md:text-4xl font-bold mt-2 mb-6 text-gray-800">Wibroakustyka.ai</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              Odkryj nowy wymiar relaksu i regeneracji z Wibroakustyka.ai. Ich innowacyjna technologia może pomóc zredukować ryzyko kurczy mięśniowych poprzez głęboką relaksację i przywracanie równowagi organizmu.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-10 items-center mb-20">
            <div class="order-2 md:order-1">
              <div class="relative">
                <div class="absolute -top-6 -left-6 w-24 h-24 bg-blue-100 rounded-full opacity-70 blur-md animate-pulse"></div>
                <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-200 rounded-full opacity-50 blur-md animate-pulse animation-delay-2000"></div>
                <img src="/img/wibroakustyka.webp" alt="Wibroakustyka.ai fotel do immersyjnego doświadczania muzyki" class="relative z-10 rounded-xl shadow-xl w-full object-cover transform hover:scale-[1.02] transition-transform duration-500" />
              </div>
            </div>
            
            <div class="order-1 md:order-2">
              <div class="bg-blue-50 rounded-2xl p-8 shadow-lg border-l-4 border-blue-500 mb-8">
                <h3 class="text-2xl font-bold text-gray-800 mb-4">Immersyjna muzyka</h3>
                <p class="text-gray-600 mb-4 font-medium">Poczuj dźwięk...</p>
                <ul class="space-y-2">
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Pozycja "zero gravity"</span>
                  </li>
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Jakość audio klasy Hi-End</span>
                  </li>
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Emocje jak na koncercie "na żywo"</span>
                  </li>
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Odczuwanie dźwięku poprzez wibracje</span>
                  </li>
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Zastosowanie w muzykoterapii</span>
                  </li>
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Połączenie z dźwiękiem wielokanałowym i VR</span>
                  </li>
                </ul>
              </div>
              
              <div class="bg-green-50 rounded-2xl p-8 shadow-lg border-l-4 border-green-500">
                <h3 class="text-2xl font-bold text-gray-800 mb-4">Wellness</h3>
                <p class="text-gray-600 mb-4 font-medium">Daj się unieść...</p>
                <ul class="space-y-2">
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Pozycja "zero gravity"</span>
                  </li>
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Wspomaganie regeneracji</span>
                  </li>
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Wibracje dostrajane przez "biofeedback"</span>
                  </li>
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Wprowadzenie w stan głębokiego relaksu</span>
                  </li>
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Poprawa sprawności fizycznej i umysłowej</span>
                  </li>
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Przywracanie równowagi autonomicznego układu nerwowego</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <!-- Testimonials -->
          <div class="max-w-4xl mx-auto">
            <h3 class="text-2xl font-bold text-center text-gray-800 mb-8">Co o nas mówią?</h3>
            
            <div class="bg-gray-50 rounded-2xl p-8 shadow-lg relative">
              <!-- Testimonial Navigation -->
              <div class="absolute top-1/2 left-4 -translate-y-1/2">
                <button 
                  @click="prevTestimonial()" 
                  class="bg-white p-2 rounded-full shadow-md hover:bg-blue-50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                  </svg>
                </button>
              </div>
              
              <div class="absolute top-1/2 right-4 -translate-y-1/2">
                <button 
                  @click="nextTestimonial()" 
                  class="bg-white p-2 rounded-full shadow-md hover:bg-blue-50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
              
              <div class="px-6 md:px-10">
                <template x-for="(testimonial, index) in testimonials" :key="index">
                  <div 
                    x-show="activeTestimonial === index"
                    x-transition:enter="transition ease-out duration-300"
                    x-transition:enter-start="opacity-0 transform translate-y-4"
                    x-transition:enter-end="opacity-100 transform translate-y-0"
                    x-transition:leave="transition ease-in duration-200"
                    x-transition:leave-start="opacity-100 transform translate-y-0"
                    x-transition:leave-end="opacity-0 transform translate-y-4"
                    class="text-center"
                  >
                    <svg class="w-12 h-12 text-blue-300 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"></path>
                    </svg>
                    <p class="text-lg md:text-xl text-gray-700 italic mb-8" x-text="testimonial.quote"></p>
                    <div class="flex items-center justify-center space-x-3">
                      <div 
                        x-for="(dot, i) in testimonials.length" 
                        :class="{'bg-blue-600': activeTestimonial === i, 'bg-gray-300': activeTestimonial !== i}"
                        class="w-2.5 h-2.5 rounded-full cursor-pointer transition-colors duration-300"
                        @click="activeTestimonial = i"
                      ></div>
                    </div>
                  </div>
                </template>
              </div>
            </div>
            
            <div class="text-center mt-12">
              <a 
                href="https://wibroakustyka.pl" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="inline-flex items-center justify-center rounded-lg bg-blue-600 text-white font-semibold px-8 py-4 shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <span>Odwiedź Wibroakustyka.ai</span>
                <svg class="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    `
  };
} 