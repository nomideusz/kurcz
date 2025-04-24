export default function() {
  return {
    scrolledDown: false,
    
    init() {
      // Listen for custom event from the Header component
      window.addEventListener('scroll-state-changed', (e) => {
        this.scrolledDown = e.detail.scrolledDown;
      });
      
      // Check initial state - if we're already scrolled down on page load
      this.scrolledDown = window.scrollY > 50;
    },
    
    template: `
      <div class="logo-container">
        <img 
          src="/img/logo.png" 
          class="h-10 w-auto transition-all duration-300"
          :class="scrolledDown ? '' : 'invert'" 
          alt="Logo"
        >
      </div>
    `
  };
} 