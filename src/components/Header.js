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
        <div class="container mx-auto px-6">
          <div class="flex justify-between items-center w-full">
            <!-- Logo - explicitly on the left -->
            <div class="flex-shrink-0 mr-auto">
              <a 
                href="#home" 
                class="text-2xl font-bold transition-colors duration-300 hover:text-gray-100"
                :class="scrolledDown ? 'text-blue-600 hover:text-blue-800' : 'text-white'"
              >
                Kurcz<span class="text-blue-400 group-hover:text-blue-300">.pl</span>
              </a>
            </div>
            
            <!-- Desktop Navigation - explicitly on the right -->
            <nav class="hidden md:flex space-x-8 ml-auto">
              <a 
                href="#home" 
                @click="activeSection = 'home'" 
                class="relative py-2 px-1 transition-colors duration-300 border-b-2"
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
                class="relative py-2 px-1 transition-colors duration-300 border-b-2"
                :class="isActive('intro') 
                  ? scrolledDown 
                    ? 'text-blue-700 font-medium border-blue-600' 
                    : 'text-white font-medium border-white'
                  : scrolledDown 
                    ? 'text-gray-700 hover:text-blue-600 border-transparent hover:border-blue-600' 
                    : 'text-white/90 hover:text-white border-transparent hover:border-white'"
              >
                <span>O kurczach</span>
              </a>
              <a 
                href="#treatment" 
                @click="activeSection = 'treatment'" 
                class="relative py-2 px-1 transition-colors duration-300 border-b-2"
                :class="isActive('treatment') 
                  ? scrolledDown 
                    ? 'text-blue-700 font-medium border-blue-600' 
                    : 'text-white font-medium border-white'
                  : scrolledDown 
                    ? 'text-gray-700 hover:text-blue-600 border-transparent hover:border-blue-600' 
                    : 'text-white/90 hover:text-white border-transparent hover:border-white'"
              >
                <span>Leczenie</span>
              </a>
              <a 
                href="#faq" 
                @click="activeSection = 'faq'" 
                class="relative py-2 px-1 transition-colors duration-300 border-b-2"
                :class="isActive('faq') 
                  ? scrolledDown 
                    ? 'text-blue-700 font-medium border-blue-600' 
                    : 'text-white font-medium border-white'
                  : scrolledDown 
                    ? 'text-gray-700 hover:text-blue-600 border-transparent hover:border-blue-600' 
                    : 'text-white/90 hover:text-white border-transparent hover:border-white'"
              >
                <span>FAQ</span>
              </a>
              <a 
                href="#contact" 
                @click="activeSection = 'contact'" 
                class="relative py-2 px-1 transition-colors duration-300 border-b-2"
                :class="isActive('contact') 
                  ? scrolledDown 
                    ? 'text-blue-700 font-medium border-blue-600' 
                    : 'text-white font-medium border-white'
                  : scrolledDown 
                    ? 'text-gray-700 hover:text-blue-600 border-transparent hover:border-blue-600' 
                    : 'text-white/90 hover:text-white border-transparent hover:border-white'"
              >
                <span>Kontakt</span>
              </a>
            </nav>
            
            <!-- Mobile Menu Button -->
            <div class="md:hidden flex items-center">
              <button 
                @click="menuOpen = !menuOpen" 
                class="focus:outline-none transition-colors duration-300"
                :class="scrolledDown ? 'text-gray-700' : 'text-white'"
              >
                <svg x-show="!menuOpen" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg x-show="menuOpen" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          
          <!-- Mobile Menu (Pines Dropdown Style) -->
          <div 
            x-show="menuOpen" 
            x-transition:enter="transition ease-out duration-200"
            x-transition:enter-start="opacity-0 transform -translate-y-2"
            x-transition:enter-end="opacity-100 transform translate-y-0"
            x-transition:leave="transition ease-in duration-200"
            x-transition:leave-start="opacity-100 transform translate-y-0"
            x-transition:leave-end="opacity-0 transform -translate-y-2"
            class="md:hidden pt-4 pb-2 bg-white rounded-lg shadow-lg mt-2"
          >
            <nav class="flex flex-col space-y-0 py-1">
              <a 
                href="#home" 
                @click="activeSection = 'home'; menuOpen = false" 
                class="text-gray-700 hover:text-blue-600 transition py-3 px-4 hover:bg-blue-50 border-l-4"
                :class="isActive('home') ? 'bg-blue-50 text-blue-700 font-medium border-blue-600' : 'border-transparent'"
              >
                Strona główna
              </a>
              <a 
                href="#intro" 
                @click="activeSection = 'intro'; menuOpen = false" 
                class="text-gray-700 hover:text-blue-600 transition py-3 px-4 hover:bg-blue-50 border-l-4"
                :class="isActive('intro') ? 'bg-blue-50 text-blue-700 font-medium border-blue-600' : 'border-transparent'"
              >
                O kurczach
              </a>
              <a 
                href="#treatment" 
                @click="activeSection = 'treatment'; menuOpen = false" 
                class="text-gray-700 hover:text-blue-600 transition py-3 px-4 hover:bg-blue-50 border-l-4"
                :class="isActive('treatment') ? 'bg-blue-50 text-blue-700 font-medium border-blue-600' : 'border-transparent'"
              >
                Leczenie
              </a>
              <a 
                href="#faq" 
                @click="activeSection = 'faq'; menuOpen = false" 
                class="text-gray-700 hover:text-blue-600 transition py-3 px-4 hover:bg-blue-50 border-l-4"
                :class="isActive('faq') ? 'bg-blue-50 text-blue-700 font-medium border-blue-600' : 'border-transparent'"
              >
                FAQ
              </a>
              <a 
                href="#contact" 
                @click="activeSection = 'contact'; menuOpen = false" 
                class="text-gray-700 hover:text-blue-600 transition py-3 px-4 hover:bg-blue-50 border-l-4"
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