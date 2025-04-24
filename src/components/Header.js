export default function() {
  return {
    menuOpen: false,
    activeSection: 'home',
    scrolledDown: false,
    
    init() {
      // Set initial active section based on URL hash if present
      if (window.location.hash) {
        this.activeSection = window.location.hash.substring(1);
      }
      
      // Add scroll event listener to track scrolling state and update active section
      window.addEventListener('scroll', () => {
        // Check if page is scrolled down for sticky header styling
        const wasScrolledDown = this.scrolledDown;
        this.scrolledDown = window.scrollY > 50;
        
        // Dispatch custom event when scrolledDown state changes
        if (wasScrolledDown !== this.scrolledDown) {
          window.dispatchEvent(new CustomEvent('scroll-state-changed', {
            detail: { scrolledDown: this.scrolledDown }
          }));
        }
        
        // Update active section based on scroll position
        this.updateActiveSection();
      });

      // Dispatch initial scroll state
      window.dispatchEvent(new CustomEvent('scroll-state-changed', {
        detail: { scrolledDown: this.scrolledDown }
      }));

      // Close menu when escape key is pressed
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.menuOpen) {
          this.menuOpen = false;
        }
      });

      // Add/remove blur class to main content when mobile menu is toggled
      this.$watch('menuOpen', (isOpen) => {
        if (isOpen) {
          document.body.classList.add('content-blurred');
        } else {
          document.body.classList.remove('content-blurred');
        }
      });
    },
    
    updateActiveSection() {
      const sections = document.querySelectorAll('section[id]');
      
      // Find the current visible section
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          this.activeSection = sectionId;
        }
      });
    },
    
    isActive(section) {
      return this.activeSection === section;
    },
    
    template: `
      <header 
        class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        :class="scrolledDown || menuOpen ? 'bg-white/95 backdrop-blur-sm shadow-lg py-3' : 'bg-transparent py-6'"
      >
        <!-- Full-page content overlay (blurs content behind menu) -->
        <div 
          x-cloak
          x-show="menuOpen" 
          x-transition:enter="transition-opacity ease-out duration-300"
          x-transition:enter-start="opacity-0"
          x-transition:enter-end="opacity-100"
          x-transition:leave="transition-opacity ease-in duration-300"
          x-transition:leave-start="opacity-100"
          x-transition:leave-end="opacity-0"
          class="fixed inset-0 bg-transparent z-30 pointer-events-none"
          style="backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px);"
          aria-hidden="true"
        ></div>
        
        <!-- Fullscreen backdrop for mobile menu -->
        <div 
          x-cloak
          x-show="menuOpen" 
          x-transition:enter="transition ease-out duration-300"
          x-transition:enter-start="opacity-0 backdrop-blur-none"
          x-transition:enter-end="opacity-100 backdrop-blur-sm"
          x-transition:leave="transition ease-in duration-300"
          x-transition:leave-start="opacity-100 backdrop-blur-sm"
          x-transition:leave-end="opacity-0 backdrop-blur-none"
          @click="menuOpen = false"
          class="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
          style="backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px);"
          aria-hidden="true"
        ></div>

        <div class="container mx-auto px-6 relative">
          <div class="flex justify-between items-center w-full">
            <!-- Logo on the left -->
            <div class="flex-shrink-0 mr-auto">
              <a 
                href="#home"
                class="block focus:outline-none"
              >
                <div x-data="logoComponent()" x-init="init()" x-html="template"></div>
              </a>
            </div>
            
            <!-- Desktop Navigation - explicitly on the right -->
            <nav class="hidden md:flex space-x-6 ml-auto">
              <button 
                @click="activeSection = 'home'; window.location.href='#home'" 
                type="button"
                class="relative font-medium py-2 px-1 transition-all duration-300 bg-transparent cursor-pointer focus:outline-none"
                :class="isActive('home') 
                  ? scrolledDown 
                    ? 'text-blue-700' 
                    : 'text-white' 
                  : scrolledDown 
                    ? 'text-gray-700 hover:text-blue-600' 
                    : 'text-white/90 hover:text-white'"
              >
                <span>Strona główna</span>
                <span 
                  class="absolute bottom-0 left-0 w-full h-0.5 bg-current transform origin-left transition-transform duration-300"
                  :class="isActive('home') ? 'scale-x-100' : 'scale-x-0'"
                ></span>
              </button>
              <button 
                @click="activeSection = 'intro'; window.location.href='#intro'" 
                type="button"
                class="relative font-medium py-2 px-1 transition-all duration-300 bg-transparent cursor-pointer focus:outline-none"
                :class="isActive('intro') 
                  ? scrolledDown 
                    ? 'text-blue-700' 
                    : 'text-white'
                  : scrolledDown 
                    ? 'text-gray-700 hover:text-blue-600' 
                    : 'text-white/90 hover:text-blue-200'"
              >
                <span>O kurczach</span>
                <span 
                  class="absolute bottom-0 left-0 w-full h-0.5 bg-current transform origin-left transition-transform duration-300"
                  :class="isActive('intro') ? 'scale-x-100' : 'scale-x-0'"
                ></span>
              </button>
              <button 
                @click="activeSection = 'treatment'; window.location.href='#treatment'" 
                type="button"
                class="relative font-medium py-2 px-1 transition-all duration-300 bg-transparent cursor-pointer focus:outline-none"
                :class="isActive('treatment') 
                  ? scrolledDown 
                    ? 'text-blue-700' 
                    : 'text-white'
                  : scrolledDown 
                    ? 'text-gray-700 hover:text-blue-600' 
                    : 'text-white/90 hover:text-blue-200'"
              >
                <span>Leczenie</span>
                <span 
                  class="absolute bottom-0 left-0 w-full h-0.5 bg-current transform origin-left transition-transform duration-300"
                  :class="isActive('treatment') ? 'scale-x-100' : 'scale-x-0'"
                ></span>
              </button>
              <button 
                @click="activeSection = 'wibroakustyka'; window.location.href='#wibroakustyka'" 
                type="button"
                class="relative font-medium py-2 px-1 transition-all duration-300 bg-transparent cursor-pointer focus:outline-none"
                :class="isActive('wibroakustyka') 
                  ? scrolledDown 
                    ? 'text-blue-700' 
                    : 'text-white'
                  : scrolledDown 
                    ? 'text-gray-700 hover:text-blue-600' 
                    : 'text-white/90 hover:text-blue-200'"
              >
                <span>Wibroakustyka</span>
                <span 
                  class="absolute bottom-0 left-0 w-full h-0.5 bg-current transform origin-left transition-transform duration-300"
                  :class="isActive('wibroakustyka') ? 'scale-x-100' : 'scale-x-0'"
                ></span>
              </button>
              <button 
                @click="activeSection = 'faq'; window.location.href='#faq'" 
                type="button"
                class="relative font-medium py-2 px-1 transition-all duration-300 bg-transparent cursor-pointer focus:outline-none"
                :class="isActive('faq') 
                  ? scrolledDown 
                    ? 'text-blue-700' 
                    : 'text-white'
                  : scrolledDown 
                    ? 'text-gray-700 hover:text-blue-600' 
                    : 'text-white/90 hover:text-blue-200'"
              >
                <span>FAQ</span>
                <span 
                  class="absolute bottom-0 left-0 w-full h-0.5 bg-current transform origin-left transition-transform duration-300"
                  :class="isActive('faq') ? 'scale-x-100' : 'scale-x-0'"
                ></span>
              </button>
              <button 
                @click="activeSection = 'contact'; window.location.href='#contact'" 
                type="button"
                class="relative font-medium py-2 px-1 transition-all duration-300 bg-transparent cursor-pointer focus:outline-none"
                :class="isActive('contact') 
                  ? scrolledDown 
                    ? 'text-blue-700' 
                    : 'text-white'
                  : scrolledDown 
                    ? 'text-gray-700 hover:text-blue-600' 
                    : 'text-white/90 hover:text-blue-200'"
              >
                <span>Kontakt</span>
                <span 
                  class="absolute bottom-0 left-0 w-full h-0.5 bg-current transform origin-left transition-transform duration-300"
                  :class="isActive('contact') ? 'scale-x-100' : 'scale-x-0'"
                ></span>
              </button>
            </nav>
            
            <!-- Mobile Menu Button -->
            <div class="md:hidden flex items-center ml-4">
              <button 
                @click="menuOpen = !menuOpen" 
                class="focus:outline-none transition-colors duration-300 p-2 rounded-md z-50"
                :class="scrolledDown ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/20'"
                aria-label="Toggle menu"
                aria-expanded="menuOpen"
                aria-controls="mobile-menu"
              >
                <svg x-cloak x-show="!menuOpen" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg x-cloak x-show="menuOpen" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          
          <!-- Mobile Menu -->
          <div 
            x-cloak
            x-show="menuOpen" 
            x-transition:enter="transition ease-out duration-300"
            x-transition:enter-start="opacity-0 transform -translate-y-4"
            x-transition:enter-end="opacity-100 transform translate-y-0"
            x-transition:leave="transition ease-in duration-300"
            x-transition:leave-start="opacity-100 transform translate-y-0"
            x-transition:leave-end="opacity-0 transform -translate-y-4"
            class="absolute top-full left-0 right-0 z-50 mt-4 px-6 no-blur"
            id="mobile-menu"
            style="filter: none !important; backdrop-filter: none !important;"
            @click.away="menuOpen = false"
          >
            <nav class="bg-white rounded-xl shadow-xl py-4 flex flex-col w-full max-h-[calc(100vh-150px)] overflow-y-auto no-blur"
                 style="filter: none !important; backdrop-filter: none !important;">
              <button 
                @click="activeSection = 'home'; menuOpen = false; window.location.href='#home'" 
                type="button"
                class="text-gray-700 hover:text-blue-600 transition-all duration-300 py-4 px-6 hover:bg-blue-50 border-l-4 text-left bg-transparent cursor-pointer w-full font-medium no-blur"
                :class="isActive('home') ? 'bg-blue-50 text-blue-700 border-blue-600' : 'border-transparent'"
              >
                <div class="flex items-center">
                  <svg class="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                  </svg>
                  Strona główna
                </div>
              </button>
              <button 
                @click="activeSection = 'intro'; menuOpen = false; window.location.href='#intro'" 
                type="button"
                class="text-gray-700 hover:text-blue-600 transition-all duration-300 py-4 px-6 hover:bg-blue-50 border-l-4 text-left bg-transparent cursor-pointer w-full font-medium no-blur"
                :class="isActive('intro') ? 'bg-blue-50 text-blue-700 border-blue-600' : 'border-transparent'"
              >
                <div class="flex items-center">
                  <svg class="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
                  </svg>
                  O kurczach
                </div>
              </button>
              <button 
                @click="activeSection = 'treatment'; menuOpen = false; window.location.href='#treatment'" 
                type="button"
                class="text-gray-700 hover:text-blue-600 transition-all duration-300 py-4 px-6 hover:bg-blue-50 border-l-4 text-left bg-transparent cursor-pointer w-full font-medium no-blur"
                :class="isActive('treatment') ? 'bg-blue-50 text-blue-700 border-blue-600' : 'border-transparent'"
              >
                <div class="flex items-center">
                  <svg class="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path>
                  </svg>
                  Leczenie
                </div>
              </button>
              <button 
                @click="activeSection = 'wibroakustyka'; menuOpen = false; window.location.href='#wibroakustyka'" 
                type="button"
                class="text-gray-700 hover:text-blue-600 transition-all duration-300 py-4 px-6 hover:bg-blue-50 border-l-4 text-left bg-transparent cursor-pointer w-full font-medium no-blur"
                :class="isActive('wibroakustyka') ? 'bg-blue-50 text-blue-700 border-blue-600' : 'border-transparent'"
              >
                <div class="flex items-center">
                  <svg class="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z"></path>
                  </svg>
                  Wibroakustyka
                </div>
              </button>
              <button 
                @click="activeSection = 'faq'; menuOpen = false; window.location.href='#faq'" 
                type="button"
                class="text-gray-700 hover:text-blue-600 transition-all duration-300 py-4 px-6 hover:bg-blue-50 border-l-4 text-left bg-transparent cursor-pointer w-full font-medium no-blur"
                :class="isActive('faq') ? 'bg-blue-50 text-blue-700 border-blue-600' : 'border-transparent'"
              >
                <div class="flex items-center">
                  <svg class="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path>
                  </svg>
                  FAQ
                </div>
              </button>
              <button 
                @click="activeSection = 'contact'; menuOpen = false; window.location.href='#contact'" 
                type="button"
                class="text-gray-700 hover:text-blue-600 transition-all duration-300 py-4 px-6 hover:bg-blue-50 border-l-4 text-left bg-transparent cursor-pointer w-full font-medium no-blur"
                :class="isActive('contact') ? 'bg-blue-50 text-blue-700 border-blue-600' : 'border-transparent'"
              >
                <div class="flex items-center">
                  <svg class="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  Kontakt
                </div>
              </button>
            </nav>
          </div>
        </div>
      </header>
    `
  };
} 