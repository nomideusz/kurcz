export default function() {
  return {
    init() {
      // We'll use text-based logo until images are available
    },
    
    template: `
      <div class="logo-container">
        <!-- Text logo for scrolled/menu open state (dark background) -->
        <div 
          x-show="$store.header.scrolledDown || $store.header.menuOpen"
          class="h-9 sm:h-10 flex items-center font-bold text-gray-800 text-xl transition-all duration-300"
        >
          KURCZ.PL
        </div>
        
        <!-- Text logo for transparent header state (light text on dark background) -->
        <div 
          x-show="!$store.header.scrolledDown && !$store.header.menuOpen"
          class="h-9 sm:h-10 flex items-center font-bold text-white text-xl transition-all duration-300"
        >
          KURCZ.PL
        </div>
      </div>
    `
  };
} 