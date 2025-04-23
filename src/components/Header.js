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
        this.scrolledDown = window.scrollY > 50;
        
        // Update active section based on scroll position
        this.updateActiveSection();
      });

      // Close menu when escape key is pressed
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.menuOpen) {
          this.menuOpen = false;
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
        class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        :class="scrolledDown ? 'bg-white/95 backdrop-blur-sm shadow-md py-4' : 'bg-transparent py-6'"
      >
        <!-- Fullscreen backdrop for mobile menu -->
        <div 
          x-cloak
          x-show="menuOpen" 
          x-transition:enter="transition-opacity ease-out duration-300"
          x-transition:enter-start="opacity-0"
          x-transition:enter-end="opacity-100"
          x-transition:leave="transition-opacity ease-in duration-300"
          x-transition:leave-start="opacity-100"
          x-transition:leave-end="opacity-0"
          @click="menuOpen = false"
          class="fixed inset-0 bg-black/50 z-40"
          aria-hidden="true"
        ></div>

        <div class="container mx-auto px-6 relative">
          <div class="flex justify-between items-center w-full">
            <!-- Logo - explicitly on the left -->
            <div class="flex-shrink-0 mr-auto group">
              <a 
                href="#home" 
                class="text-2xl font-bold transition-colors duration-300"
                :class="scrolledDown ? 'text-blue-600 hover:text-blue-800' : 'text-white hover:text-blue-200'"
              >
                Kurcz<span class="text-blue-400 group-hover:text-blue-300">.pl</span>
              </a>
            </div>
            
            <!-- Desktop Navigation - explicitly on the right -->
            <nav class="hidden md:flex space-x-8 ml-auto">
              <a 
                href="#home" 
                @click="activeSection = 'home'" 
                class="relative py-2 px-1 transition-all duration-300 border-b-2"
                :class="isActive('home') 
                  ? scrolledDown 
                    ? 'text-blue-700 font-medium border-blue-600' 
                    : 'text-white font-medium border-white' 
                  : scrolledDown 
                    ? 'text-gray-700 hover:text-blue-600 border-transparent hover:border-blue-600' 
                    : 'text-white/90 hover:text-white border-transparent hover:border-white'"
              >
                <span>Strona główna</span>
              </a>
              <a 
                href="#intro" 
                @click="activeSection = 'intro'" 
                class="relative py-2 px-1 transition-all duration-300 border-b-2"
                :class="isActive('intro') 
                  ? scrolledDown 
                    ? 'text-blue-700 font-medium border-blue-600' 
                    : 'text-white font-medium border-white'
                  : scrolledDown 
                    ? 'text-gray-700 hover:text-blue-600 border-transparent hover:border-blue-600' 
                    : 'text-white/90 hover:text-blue-200 border-transparent hover:border-blue-200'"
              >
                <span>O kurczach</span>
              </a>
              <a 
                href="#treatment" 
                @click="activeSection = 'treatment'" 
                class="relative py-2 px-1 transition-all duration-300 border-b-2"
                :class="isActive('treatment') 
                  ? scrolledDown 
                    ? 'text-blue-700 font-medium border-blue-600' 
                    : 'text-white font-medium border-white'
                  : scrolledDown 
                    ? 'text-gray-700 hover:text-blue-600 border-transparent hover:border-blue-600' 
                    : 'text-white/90 hover:text-blue-200 border-transparent hover:border-blue-200'"
              >
                <span>Leczenie</span>
              </a>
              <a 
                href="#faq" 
                @click="activeSection = 'faq'" 
                class="relative py-2 px-1 transition-all duration-300 border-b-2"
                :class="isActive('faq') 
                  ? scrolledDown 
                    ? 'text-blue-700 font-medium border-blue-600' 
                    : 'text-white font-medium border-white'
                  : scrolledDown 
                    ? 'text-gray-700 hover:text-blue-600 border-transparent hover:border-blue-600' 
                    : 'text-white/90 hover:text-blue-200 border-transparent hover:border-blue-200'"
              >
                <span>FAQ</span>
              </a>
              <a 
                href="#contact" 
                @click="activeSection = 'contact'" 
                class="relative py-2 px-1 transition-all duration-300 border-b-2"
                :class="isActive('contact') 
                  ? scrolledDown 
                    ? 'text-blue-700 font-medium border-blue-600' 
                    : 'text-white font-medium border-white'
                  : scrolledDown 
                    ? 'text-gray-700 hover:text-blue-600 border-transparent hover:border-blue-600' 
                    : 'text-white/90 hover:text-blue-200 border-transparent hover:border-blue-200'"
              >
                <span>Kontakt</span>
              </a>
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
          
          <!-- Mobile Menu (Pines Dropdown Style) -->
          <div 
            x-cloak
            x-show="menuOpen" 
            x-transition:enter="transition ease-out duration-200"
            x-transition:enter-start="opacity-0 transform -translate-y-2"
            x-transition:enter-end="opacity-100 transform translate-y-0"
            x-transition:leave="transition ease-in duration-200"
            x-transition:leave-start="opacity-100 transform translate-y-0"
            x-transition:leave-end="opacity-0 transform -translate-y-2"
            class="absolute top-full left-0 right-0 z-40 mt-2 px-6"
            id="mobile-menu"
            @click.away="menuOpen = false"
          >
            <nav class="bg-white rounded-xl shadow-lg py-3 flex flex-col w-full max-h-[calc(100vh-150px)] overflow-y-auto">
              <a 
                href="#home" 
                @click="activeSection = 'home'; menuOpen = false" 
                class="text-gray-700 hover:text-blue-600 transition-all duration-300 py-3 px-4 hover:bg-blue-50 border-l-4"
                :class="isActive('home') ? 'bg-blue-50 text-blue-700 font-medium border-blue-600' : 'border-transparent'"
              >
                Strona główna
              </a>
              <a 
                href="#intro" 
                @click="activeSection = 'intro'; menuOpen = false" 
                class="text-gray-700 hover:text-blue-600 transition-all duration-300 py-3 px-4 hover:bg-blue-50 border-l-4"
                :class="isActive('intro') ? 'bg-blue-50 text-blue-700 font-medium border-blue-600' : 'border-transparent'"
              >
                O kurczach
              </a>
              <a 
                href="#treatment" 
                @click="activeSection = 'treatment'; menuOpen = false" 
                class="text-gray-700 hover:text-blue-600 transition-all duration-300 py-3 px-4 hover:bg-blue-50 border-l-4"
                :class="isActive('treatment') ? 'bg-blue-50 text-blue-700 font-medium border-blue-600' : 'border-transparent'"
              >
                Leczenie
              </a>
              <a 
                href="#faq" 
                @click="activeSection = 'faq'; menuOpen = false" 
                class="text-gray-700 hover:text-blue-600 transition-all duration-300 py-3 px-4 hover:bg-blue-50 border-l-4"
                :class="isActive('faq') ? 'bg-blue-50 text-blue-700 font-medium border-blue-600' : 'border-transparent'"
              >
                FAQ
              </a>
              <a 
                href="#contact" 
                @click="activeSection = 'contact'; menuOpen = false" 
                class="text-gray-700 hover:text-blue-600 transition-all duration-300 py-3 px-4 hover:bg-blue-50 border-l-4"
                :class="isActive('contact') ? 'bg-blue-50 text-blue-700 font-medium border-blue-600' : 'border-transparent'"
              >
                Kontakt
              </a>
            </nav>
          </div>
        </div>
      </header>
    `
  };
} 