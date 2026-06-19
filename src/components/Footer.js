import { footerLegalLinks } from '../seo/routes.js';
import { footerLandingLinks } from '../content/landing-pages.js';
import { trackOutboundClick } from '../js/umami.js';

export default function () {
  return {
    currentYear: new Date().getFullYear(),
    legalLinks: footerLegalLinks,
    landingLinks: footerLandingLinks,

    openPartner(url, label) {
      trackOutboundClick(url, label, 'footer');
      window.open(url, '_blank');
    },

    openFacebook() {
      trackOutboundClick('https://www.facebook.com/profile.php?id=61575552422497', 'Facebook', 'footer');
      window.open('https://www.facebook.com/profile.php?id=61575552422497', '_blank');
    },

    template: `
      <footer id="footer" class="bg-gray-900 text-white pt-20 pb-10 relative overflow-hidden">
        <!-- Decorative subtle background -->
        <div class="absolute inset-0 pointer-events-none opacity-20" aria-hidden="true">
          <div class="absolute -top-24 -right-24 w-96 h-96 bg-primary-900 rounded-full blur-[100px]"></div>
          <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-primary-900 rounded-full blur-[100px]"></div>
        </div>

        <div class="container mx-auto px-6 relative z-10">
          <!-- Upper Footer -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16 max-w-7xl mx-auto">
            <!-- About Column -->
            <div class="col-span-1 lg:col-span-2">
              <h2 class="font-heading text-3xl md:text-4xl font-bold mb-6 group inline-block">
                Kurcz<span class="text-primary-400 group-hover:text-primary-300 transition-colors duration-300">.pl</span>
              </h2>
              <p class="text-gray-400 mb-8 max-w-md leading-relaxed font-light">
                Kurcz.pl to kompendium wiedzy o kurczach mięśniowych, ich przyczynach,
                objawach, leczeniu i profilaktyce. Nasza misja to dostarczanie rzetelnych informacji
                opartych na najnowszych badaniach medycznych.
              </p>
              <div class="p-5 bg-gray-800/40 rounded-2xl border border-gray-700/50 backdrop-blur-sm">
                <p class="text-gray-400 text-sm leading-relaxed">
                  <strong class="text-gray-300">Zastrzeżenie:</strong> Informacje zawarte na stronie mają charakter edukacyjny i nie zastępują porady lekarskiej.
                  <a href="/disclaimer-medyczny" class="text-primary-400 hover:text-primary-300 underline">Disclaimer medyczny</a>
                </p>
              </div>
            </div>
            
            <!-- Quick Links -->
            <div>
              <h3 class="font-heading text-sm font-bold tracking-wider uppercase text-gray-300 mb-6 relative inline-block">
                Nawigacja
                <span class="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-primary-500 rounded-full"></span>
              </h3>
              <ul class="space-y-4 text-sm font-medium">
                <li>
                  <a 
                    href="/"
                    class="text-gray-400 hover:text-primary-300 transition-colors duration-300 flex items-center no-underline group"
                  >
                    <span class="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center mr-3 group-hover:bg-primary-900/50 group-hover:text-primary-300 transition-colors duration-300">
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                      </svg>
                    </span>
                    <span class="group-hover:translate-x-1 transition-transform duration-300">Strona główna</span>
                  </a>
                </li>
                
                <li>
                  <a 
                    href="/kurcze-miesniowe"
                    class="text-gray-400 hover:text-primary-300 transition-colors duration-300 flex items-center no-underline group"
                  >
                    <span class="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center mr-3 group-hover:bg-primary-900/50 group-hover:text-primary-300 transition-colors duration-300">
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
                      </svg>
                    </span>
                    <span class="group-hover:translate-x-1 transition-transform duration-300">Informacje</span>
                  </a>
                </li>
                
                <li>
                  <a 
                    href="/pierwsza-pomoc"
                    class="text-gray-400 hover:text-primary-300 transition-colors duration-300 flex items-center no-underline group"
                  >
                    <span class="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center mr-3 group-hover:bg-primary-900/50 group-hover:text-primary-300 transition-colors duration-300">
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path>
                      </svg>
                    </span>
                    <span class="group-hover:translate-x-1 transition-transform duration-300">Pierwsza pomoc</span>
                  </a>
                </li>
                
                <li>
                  <a 
                    href="/profilaktyka"
                    class="text-gray-400 hover:text-primary-300 transition-colors duration-300 flex items-center no-underline group"
                  >
                    <span class="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center mr-3 group-hover:bg-primary-900/50 group-hover:text-primary-300 transition-colors duration-300">
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                      </svg>
                    </span>
                    <span class="group-hover:translate-x-1 transition-transform duration-300">Profilaktyka</span>
                  </a>
                </li>
                
                <li>
                  <a 
                    href="/kurcz-vs-skurcz"
                    class="text-gray-400 hover:text-primary-300 transition-colors duration-300 flex items-center no-underline group"
                  >
                    <span class="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center mr-3 group-hover:bg-primary-900/50 group-hover:text-primary-300 transition-colors duration-300">
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z" clip-rule="evenodd"></path>
                      </svg>
                    </span>
                    <span class="group-hover:translate-x-1 transition-transform duration-300">Kurcz vs. skurcz</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="/wibroakustyka"
                    class="text-gray-400 hover:text-primary-300 transition-colors duration-300 flex items-center no-underline group"
                  >
                    <span class="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center mr-3 group-hover:bg-primary-900/50 group-hover:text-primary-300 transition-colors duration-300">
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z"></path>
                      </svg>
                    </span>
                    <span class="group-hover:translate-x-1 transition-transform duration-300">Wibroakustyka</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="/faq"
                    class="text-gray-400 hover:text-primary-300 transition-colors duration-300 flex items-center no-underline group"
                  >
                    <span class="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center mr-3 group-hover:bg-primary-900/50 group-hover:text-primary-300 transition-colors duration-300">
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path>
                      </svg>
                    </span>
                    <span class="group-hover:translate-x-1 transition-transform duration-300">FAQ</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="/kontakt"
                    class="text-gray-400 hover:text-primary-300 transition-colors duration-300 flex items-center no-underline group"
                  >
                    <span class="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center mr-3 group-hover:bg-primary-900/50 group-hover:text-primary-300 transition-colors duration-300">
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                      </svg>
                    </span>
                    <span class="group-hover:translate-x-1 transition-transform duration-300">Kontakt</span>
                  </a>
                </li>
              </ul>
            </div>
            
            <!-- Partners -->
            <div>
              <h3 class="font-heading text-sm font-bold tracking-wider uppercase text-gray-300 mb-6 relative inline-block">
                <span class="relative z-10">Partnerzy</span>
                <span class="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-primary-500 z-0 rounded-full"></span>
              </h3>
              <ul class="space-y-4">
                <li>
                  <button 
                    @click="openPartner('https://wibroakustyka.ai', 'Wibroakustyka.ai')" 
                    type="button"
                    class="text-gray-400 hover:text-primary-300 transition-colors duration-300 flex items-center bg-transparent border-0 p-0 cursor-pointer group"
                  >
                    <span class="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center mr-3 group-hover:bg-primary-900/50 group-hover:text-primary-300 transition-colors duration-300">
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clip-rule="evenodd"></path>
                      </svg>
                    </span>
                    <span class="group-hover:translate-x-1 transition-transform duration-300">Wibroakustyka.ai</span>
                  </button>
                </li>
                <li>
                  <button 
                    @click="openPartner('https://kompi.pl', 'Kompi.pl')" 
                    type="button"
                    class="text-gray-400 hover:text-primary-300 transition-colors duration-300 flex items-center bg-transparent border-0 p-0 cursor-pointer group"
                  >
                    <span class="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center mr-3 group-hover:bg-primary-900/50 group-hover:text-primary-300 transition-colors duration-300">
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clip-rule="evenodd"></path>
                      </svg>
                    </span>
                    <span class="group-hover:translate-x-1 transition-transform duration-300">Kompi.pl</span>
                  </button>
                </li>

                <li>
                  <button 
                    @click="openPartner('https://intertechpoland.pl', 'Intertech Poland')" 
                    type="button"
                    class="text-gray-400 hover:text-primary-300 transition-colors duration-300 flex items-center bg-transparent border-0 p-0 cursor-pointer group"
                  >
                    <span class="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center mr-3 group-hover:bg-primary-900/50 group-hover:text-primary-300 transition-colors duration-300">
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clip-rule="evenodd"></path>
                      </svg>
                    </span>
                    <span class="group-hover:translate-x-1 transition-transform duration-300">Intertech Poland</span>
                  </button>
                </li>
                <li>
                  <button 
                    @click="openPartner('https://szkolyjogi.pl', 'Szkoły Jogi')" 
                    type="button"
                    class="text-gray-400 hover:text-primary-300 transition-colors duration-300 flex items-center bg-transparent border-0 p-0 cursor-pointer group"
                  >
                    <span class="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center mr-3 group-hover:bg-primary-900/50 group-hover:text-primary-300 transition-colors duration-300">
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clip-rule="evenodd"></path>
                      </svg>
                    </span>
                    <span class="group-hover:translate-x-1 transition-transform duration-300">Szkoły Jogi</span>
                  </button>
                </li>
              </ul>
            </div>

            <!-- Poradniki -->
            <div>
              <h3 class="font-heading text-sm font-bold tracking-wider uppercase text-gray-300 mb-6 relative inline-block">
                Poradniki
                <span class="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-primary-500 rounded-full"></span>
              </h3>
              <ul class="space-y-3 text-sm">
                <template x-for="link in landingLinks" :key="link.path">
                  <li>
                    <a :href="link.path" class="text-gray-400 hover:text-primary-300 transition-colors no-underline" x-text="link.label"></a>
                  </li>
                </template>
              </ul>
            </div>

            <!-- Legal links -->
            <div class="col-span-1 md:col-span-2 lg:col-span-1">
              <h3 class="font-heading text-sm font-bold tracking-wider uppercase text-gray-300 mb-6 relative inline-block">
                Informacje prawne
                <span class="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-primary-500 rounded-full"></span>
              </h3>
              <ul class="space-y-3 text-sm">
                <template x-for="link in legalLinks" :key="link.path">
                  <li>
                    <a :href="link.path" class="text-gray-400 hover:text-primary-300 transition-colors no-underline" x-text="link.label"></a>
                  </li>
                </template>
              </ul>
            </div>
          </div>
          
          <!-- Bottom Footer -->
          <div class="border-t border-gray-800/80 pt-8 flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto">
            <p class="text-gray-500 text-sm order-2 md:order-1 mt-6 md:mt-0">
              © <span x-text="currentYear"></span> Kurcz.pl. Wszelkie prawa zastrzeżone.
            </p>
            
            <!-- Social Media Links -->
            <div class="flex space-x-4 order-1 md:order-2">
              <button 
                @click="openFacebook()" 
                type="button"
                class="text-gray-400 hover:text-primary-300 transition-colors duration-300 bg-transparent border-0 p-0 cursor-pointer"
                aria-label="Facebook"
              >
                <span class="sr-only">Facebook</span>
                <div class="w-10 h-10 bg-gray-800 hover:bg-primary-900/50 hover:text-primary-400 rounded-full flex items-center justify-center transition-colors duration-300">
                  <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </footer>
    `
  };
} 