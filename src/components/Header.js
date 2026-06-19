import { getRouteByPath, navItems } from '../seo/routes.js';

export default function() {
  return {
    menuOpen: false,
    activeSection: 'home',
    scrolledDown: false,
    moreMenuOpen: false,
    
    navItems,
    
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
      this.menuOpen = !this.menuOpen;
      // Try to update store if available, but don't fail if it's not
      try {
        if (Alpine.store && Alpine.store('header')) {
          Alpine.store('header').menuOpen = this.menuOpen;
        }
      } catch (e) {
        console.warn('Alpine store update failed:', e);
      }
    },
    
    // Toggle More dropdown
    toggleMoreMenu() {
      this.moreMenuOpen = !this.moreMenuOpen;
    },
    
    init() {
      const route = getRouteByPath(window.location.pathname);
      const navMatch = navItems.find((item) => item.path === route.path);
      this.activeSection = navMatch?.id ?? route.sectionId ?? 'home';
      
      // Check initial state - if we're already scrolled down on page load
      this.scrolledDown = window.scrollY > 50;
      
      // Update the Alpine store with the current state if available
      try {
        if (Alpine.store && Alpine.store('header')) {
          Alpine.store('header').scrolledDown = this.scrolledDown;
          Alpine.store('header').menuOpen = this.menuOpen;
        }
      } catch (e) {
        console.warn('Alpine store initialization failed:', e);
      }
      
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
          // Update the store if available
          try {
            if (Alpine.store && Alpine.store('header')) {
              Alpine.store('header').scrolledDown = this.scrolledDown;
            }
          } catch (e) {
            console.warn('Alpine store update failed:', e);
          }
          
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
          try {
            if (Alpine.store && Alpine.store('header')) {
              Alpine.store('header').menuOpen = false;
            }
          } catch (e) {
            console.warn('Alpine store update failed:', e);
          }
        }
        
        if (e.key === 'Escape' && this.moreMenuOpen) {
          this.moreMenuOpen = false;
        }
      });

      // Add/remove blur class to main content when mobile menu is toggled
      this.$watch('menuOpen', (isOpen) => {
        // Update the store if available
        try {
          if (Alpine.store && Alpine.store('header')) {
            Alpine.store('header').menuOpen = isOpen;
          }
        } catch (e) {
          console.warn('Alpine store update failed:', e);
        }
        
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
        :class="scrolledDown || menuOpen ? 'bg-white/80 backdrop-blur-xl shadow-glass border-b border-white/20 py-3' : 'bg-transparent py-6'"
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
          <div class="flex justify-between items-center w-full max-w-7xl mx-auto">
            <!-- Logo on the left -->
            <div class="flex-shrink-0 mr-auto">
              <a 
                href="/"
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
                <a 
                  :href="item.path"
                  @click="activeSection = item.id; menuOpen = false"
                  class="relative font-heading font-semibold py-2 px-1 transition-all duration-300 cursor-pointer focus:outline-none text-sm lg:text-base no-underline"
                  :class="isActive(item.id) 
                    ? scrolledDown 
                      ? 'text-primary-600' 
                      : 'text-white' 
                    : scrolledDown 
                      ? 'text-gray-700 hover:text-primary-600' 
                      : 'text-white/90 hover:text-white'"
                >
                  <span class="relative z-10" x-text="item.label"></span>
                  <span 
                    x-show="isActive(item.id)" 
                    class="absolute top-full left-0 w-full h-0.5 rounded-full"
                    :class="scrolledDown ? 'bg-primary-600' : 'bg-white'"
                  ></span>
                </a>
              </template>
              
              <!-- Secondary Items - grouped in "Więcej" dropdown on all screen sizes -->
              <div class="relative" @click.away="moreMenuOpen = false">
                <button 
                  id="more-menu-button"
                  @click="toggleMoreMenu()"
                  type="button"
                  class="relative font-heading font-semibold py-2 px-1 transition-all duration-300 bg-transparent cursor-pointer focus:outline-none flex items-center text-sm lg:text-base"
                  :class="secondaryNavItems.some(item => isActive(item.id))
                    ? scrolledDown 
                      ? 'text-primary-600' 
                      : 'text-white' 
                    : scrolledDown 
                      ? 'text-gray-700 hover:text-primary-600' 
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
                    class="absolute top-full left-0 w-full h-0.5 rounded-full"
                    :class="scrolledDown ? 'bg-primary-600' : 'bg-white'"
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
                    <a
                      :href="item.path"
                      @click="activeSection = item.id; moreMenuOpen = false"
                      class="w-full text-left block px-4 py-2 text-sm font-heading font-medium transition-colors text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-md no-underline"
                      :class="isActive(item.id) ? 'bg-primary-50 text-primary-600 font-semibold' : ''"
                      x-text="item.label"
                    ></a>
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
                    <a 
                      :href="item.path"
                      @click="menuOpen = false"
                      class="w-full flex items-center px-4 py-3 text-base font-heading font-semibold rounded-xl transition-all duration-200 no-underline"
                      :class="isActive(item.id) ? 'text-white bg-primary-600 shadow-md' : 'text-gray-800 hover:bg-primary-50 hover:text-primary-600'"
                    >
                      <svg class="mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x-bind:d="item.icon"></path>
                      </svg>
                      <span x-text="item.label"></span>
                    </a>
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