export default function() {
  return {
    init() {
      // We'll now rely on the Alpine store for state
      // Check if logo images exist
      this.checkLogoAvailability();
    },
    
    // Flags to track if logos are available
    standardLogoAvailable: true,
    whiteLogoAvailable: true,
    
    // Function to check if logo images are available
    checkLogoAvailability() {
      const standardLogo = new Image();
      const whiteLogo = new Image();
      
      standardLogo.onerror = () => {
        this.standardLogoAvailable = false;
        console.warn('Standard logo image not found: /img/logo.webp');
      };
      
      whiteLogo.onerror = () => {
        this.whiteLogoAvailable = false;
        console.warn('White logo image not found: /img/logo-white.webp');
      };
      
      standardLogo.src = '/img/logo.webp';
      whiteLogo.src = '/img/logo-white.webp';
    },
    
    template: `
      <div class="logo-container">
        <!-- Standard logo (dark version) -->
        <img 
          x-show="($store.header.scrolledDown || $store.header.menuOpen) && standardLogoAvailable"
          src="/img/logo.webp" 
          @error="standardLogoAvailable = false"
          class="h-9 sm:h-10 w-auto transition-opacity duration-300"
          alt="Logo"
        >
        
        <!-- White logo (light version) -->
        <img 
          x-show="!$store.header.scrolledDown && !$store.header.menuOpen && whiteLogoAvailable"
          src="/img/logo-white.webp" 
          @error="whiteLogoAvailable = false"
          class="h-9 sm:h-10 w-auto transition-opacity duration-300"
          alt="Logo"
        >
        
        <!-- Text fallback for standard logo -->
        <div 
          x-show="($store.header.scrolledDown || $store.header.menuOpen) && !standardLogoAvailable"
          class="h-9 sm:h-10 flex items-center font-bold text-gray-800 text-xl"
        >
          KURCZ
        </div>
        
        <!-- Text fallback for white logo -->
        <div 
          x-show="!$store.header.scrolledDown && !$store.header.menuOpen && !whiteLogoAvailable"
          class="h-9 sm:h-10 flex items-center font-bold text-white text-xl"
        >
          KURCZ
        </div>
      </div>
    `
  };
} 