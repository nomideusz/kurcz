export default function() {
  return {
    init() {
      // We'll now rely on the Alpine store for state
    },
    
    template: `
      <div class="logo-container">
        <img 
          x-show="$store.header.scrolledDown || $store.header.menuOpen"
          src="/img/logo.webp" 
          class="h-9 sm:h-10 w-auto transition-opacity duration-300"
          alt="Logo"
        >
        <img 
          x-show="!$store.header.scrolledDown && !$store.header.menuOpen"
          src="/img/logo-white.webp" 
          class="h-9 sm:h-10 w-auto transition-opacity duration-300"
          alt="Logo"
        >
      </div>
    `
  };
} 