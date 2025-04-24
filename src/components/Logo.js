export default function() {
  return {
    init() {
      // Loggers to debug visibility issues
      console.log('Logo component initialized');
      
      // Listen for header store changes
      document.addEventListener('alpine:initialized', () => {
        console.log('Alpine initialized in Logo component');
        if (window.Alpine && window.Alpine.store('header')) {
          console.log('Header store state:', window.Alpine.store('header'));
        } else {
          console.warn('Header store not found when Logo initialized');
        }
      });
    },
    
    template: `
      <div class="logo-container block h-9 sm:h-10 relative">
        <!-- Dark logo for scrolled/menu open state -->
        <img 
          x-cloak
          x-show="$store.header.scrolledDown || $store.header.menuOpen"
          src="/img/logo.webp" 
          class="h-9 sm:h-10 w-auto transition-opacity duration-300"
          alt="Logo KURCZ"
        >
        
        <!-- White logo for transparent header state -->
        <img 
          x-cloak
          x-show="!$store.header.scrolledDown && !$store.header.menuOpen"
          src="/img/logo-white.webp" 
          class="h-9 sm:h-10 w-auto transition-opacity duration-300"
          alt="Logo KURCZ"
        >
      </div>
    `
  };
} 