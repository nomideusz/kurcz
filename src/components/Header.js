export default function() {
  return {
    menuOpen: false,
    activeSection: 'home',
    scrolledDown: false,
    moreMenuOpen: false,
    
    // Navigation items data structure
    navItems: [
      { id: 'home', label: 'Strona główna', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6', priority: 1 },
      { id: 'intro', label: 'Informacje', icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z', priority: 1 },
      { id: 'treatment', label: 'Pierwsza pomoc', icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z', priority: 1 },
      { id: 'prevention', label: 'Profilaktyka', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', priority: 1 },
      { id: 'comparison', label: 'Kurcz vs. skurcz', icon: 'M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6', priority: 2 },
      { id: 'wibroakustyka', label: 'Wibroakustyka', icon: 'M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z', priority: 2 },
      { id: 'faq', label: 'FAQ', icon: 'M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z', priority: 2 },
      { id: 'contact', label: 'Kontakt', icon: 'M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z', priority: 1 }
    ],
    
    // Get primary navigation items
    get primaryNavItems() {
      return this.navItems.filter(item => item.priority === 1);
    },
    
    // Get secondary navigation items (for dropdown)
    get secondaryNavItems() {
      return this.navItems.filter(item => item.priority === 2);
    },
    
    // Toggle mobile menu
    toggleMobileMenu() {
      if (Alpine.store('header')) {
        this.menuOpen = !this.menuOpen;
        Alpine.store('header').menuOpen = this.menuOpen;
      } else {
        console.error('Header store is not initialized; menu toggle skipped.');
        // Optionally, you could initialize it here as a fallback, but it's better handled globally.
      }
    },
    
    // Toggle More dropdown
    toggleMoreMenu() {
      this.moreMenuOpen = !this.moreMenuOpen;
    },
    
    init() {
      // Set initial active section based on URL hash if present
      if (window.location.hash) {
        this.activeSection = window.location.hash.substring(1);
      }
      
      // Check initial state - if we're already scrolled down on page load
      this.scrolledDown = window.scrollY > 50;
      
      // Update the Alpine store with the current state
      Alpine.store('header').scrolledDown = this.scrolledDown;
      Alpine.store('header').menuOpen = this.menuOpen;
      
      // Debug header state
      console.log('Header initialized with state:', {
        scrolledDown: this.scrolledDown,
        menuOpen: this.menuOpen,
        activeSection: this.activeSection
      });
      
      // Add scroll event listener to track scrolling state and update active section
      window.addEventListener('scroll', () => {
        // Check if page is scrolled down for sticky header styling
        const wasScrolledDown = this.scrolledDown;
        this.scrolledDown = window.scrollY > 50;
        
        // Dispatch custom event when scrolledDown state changes
        if (wasScrolledDown !== this.scrolledDown) {
          // Update the store
          Alpine.store('header').scrolledDown = this.scrolledDown;
          
          // Keep the custom event for backward compatibility
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
          Alpine.store('header').menuOpen = false;
        }
        
        if (e.key === 'Escape' && this.moreMenuOpen) {
          this.moreMenuOpen = false;
        }
      });

      // Add/remove blur class to main content when mobile menu is toggled
      this.$watch('menuOpen', (isOpen) => {
        // Update the store
        Alpine.store('header').menuOpen = isOpen;
        
        if (isOpen) {
          document.body.classList.add('content-blurred');
        } else {
          document.body.classList.remove('content-blurred');
        }
      });
      
      // Close more menu when clicking outside
      document.addEventListener('click', (event) => {
        const moreButton = document.getElementById('more-menu-button');
        const moreDropdown = document.getElementById('more-dropdown');
        
        if (this.moreMenuOpen && 
            moreButton && 
            moreDropdown && 
            !moreButton.contains(event.target) && 
            !moreDropdown.contains(event.target)) {
          this.moreMenuOpen = false;
        }
      });
    },
    
    updateActiveSection() {
      const sections = document.querySelectorAll('section[id]');
      
      // Find the current visible section
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 80;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          // Match footer's ID 'contact' for consistency
          if (sectionId === 'contact') {
            this.activeSection = 'contact';
          } else {
            this.activeSection = sectionId;
          }
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
          <div class="flex justify-between items-center w-full max-w-6xl mx-auto">
            <!-- Logo on the left -->
            <div class="flex-shrink-0 mr-auto">
              <a 
                href="#home"
                class="block focus:outline-none h-9 sm:h-10"
              >
                <!-- Logo component directly embedded -->
                <div class="logo-container block h-9 sm:h-10 relative">
                  <!-- Dark logo for scrolled/menu open state -->
                  <img 
                    x-cloak
                    x-show="scrolledDown || menuOpen"
                    src="/img/logo.webp" 
                    class="h-9 sm:h-10 w-auto transition-opacity duration-300"
                    width="160"
                    height="40"
                    alt="Logo KURCZ"
                  >
                  
                  <!-- White logo for transparent header state -->
                  <img 
                    x-cloak
                    x-show="!scrolledDown && !menuOpen"
                    src="/img/logo-white.webp" 
                    class="h-9 sm:h-10 w-auto transition-opacity duration-300"
                    width="160"
                    height="40"
                    alt="Logo KURCZ"
                  >
                </div>
              </a>
            </div>
            
            <!-- Desktop Navigation - explicitly on the right -->
            <nav class="hidden md:flex space-x-4 lg:space-x-6 ml-auto">
              <!-- Primary Navigation Items - always visible -->
              <template x-for="item in primaryNavItems" :key="item.id">
                <button 
                  @click="activeSection = item.id; document.getElementById(item.id).scrollIntoView({behavior: 'smooth', block: 'start'});" 
                  type="button"
                  class="relative font-medium py-2 px-1 transition-all duration-300 bg-transparent cursor-pointer focus:outline-none text-sm lg:text-base"
                  :class="isActive(item.id) 
                    ? scrolledDown 
                      ? 'text-blue-700' 
                      : 'text-white' 
                    : scrolledDown 
                      ? 'text-gray-700 hover:text-blue-600' 
                      : 'text-white/90 hover:text-white'"
                >
                  <span class="relative z-10" x-text="item.label"></span>
                  <span 
                    x-show="isActive(item.id)" 
                    class="absolute top-full left-0 w-full h-0.5"
                    :class="scrolledDown ? 'bg-blue-700' : 'bg-white'"
                  ></span>
                </button>
              </template>
              
              <!-- Secondary Items - grouped in "Więcej" dropdown on all screen sizes -->
              <div class="relative" @click.away="moreMenuOpen = false">
                <button 
                  id="more-menu-button"
                  @click="toggleMoreMenu()"
                  type="button"
                  class="relative font-medium py-2 px-1 transition-all duration-300 bg-transparent cursor-pointer focus:outline-none flex items-center text-sm lg:text-base"
                  :class="secondaryNavItems.some(item => isActive(item.id))
                    ? scrolledDown 
                      ? 'text-blue-700' 
                      : 'text-white' 
                    : scrolledDown 
                      ? 'text-gray-700 hover:text-blue-600' 
                      : 'text-white/90 hover:text-white'"
                >
                  <span class="relative z-10">Więcej</span>
                  <svg 
                    class="w-4 h-4 ml-1 transition-transform"
                    :class="moreMenuOpen ? 'transform rotate-180' : ''"
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                  <span 
                    x-show="secondaryNavItems.some(item => isActive(item.id))" 
                    class="absolute top-full left-0 w-full h-0.5"
                    :class="scrolledDown ? 'bg-blue-700' : 'bg-white'"
                  ></span>
                </button>
                
                <!-- Dropdown Menu -->
                <div 
                  id="more-dropdown"
                  x-cloak
                  x-show="moreMenuOpen" 
                  x-transition:enter="transition ease-out duration-200"
                  x-transition:enter-start="opacity-0 transform scale-95"
                  x-transition:enter-end="opacity-100 transform scale-100"
                  x-transition:leave="transition ease-in duration-150"
                  x-transition:leave-start="opacity-100 transform scale-100"
                  x-transition:leave-end="opacity-0 transform scale-95"
                  class="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 z-50"
                >
                  <template x-for="item in secondaryNavItems" :key="item.id">
                    <button
                      @click="activeSection = item.id; moreMenuOpen = false; document.getElementById(item.id).scrollIntoView({behavior: 'smooth', block: 'start'});"
                      class="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-md"
                      :class="isActive(item.id) ? 'bg-blue-50 text-blue-700' : ''"
                      x-text="item.label"
                    ></button>
                  </template>
                </div>
              </div>
            </nav>
            
            <!-- Mobile Menu Button -->
            <div class="md:hidden flex items-center ml-4">
              <button 
                @click="toggleMobileMenu()" 
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
              <div class="pt-2 pb-2">
                <div class="space-y-1 px-2">
                  <template x-for="item in navItems" :key="item.id">
                    <button 
                      @click="toggleMobileMenu(); setTimeout(() => { if (document.getElementById(item.id)) { activeSection = item.id; document.getElementById(item.id).scrollIntoView({behavior: 'smooth', block: 'start'}); } }, 100);" 
                      class="w-full flex items-center px-3 py-2 text-base font-medium rounded-md"
                      :class="isActive(item.id) ? 'text-white bg-blue-800' : 'text-gray-800 hover:bg-gray-100'"
                    >
                      <svg class="mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x-bind:d="item.icon"></path>
                      </svg>
                      <span x-text="item.label"></span>
                    </button>
                  </template>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    `
  };
} 