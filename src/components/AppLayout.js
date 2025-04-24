export default function() {
  return {
    emergencyBannerVisible: true,
    
    closeEmergencyBanner() {
      this.emergencyBannerVisible = false;
    },
    
    template: `
      <div class="relative">
        <!-- Emergency Help Banner -->
        <div 
          x-show="emergencyBannerVisible"
          x-transition:enter="transition ease-out duration-300"
          x-transition:enter-start="opacity-0 transform -translate-y-4"
          x-transition:enter-end="opacity-100 transform translate-y-0"
          class="bg-red-600 sticky top-0 z-[60] shadow-md"
        >
          <div class="container mx-auto px-4 py-3">
            <div class="flex flex-col md:flex-row items-center justify-between text-white">
              <div class="flex items-center mb-2 md:mb-0">
                <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                </svg>
                <span class="font-semibold">Natychmiastowa pomoc przy kurczach:</span>
              </div>
              <div class="flex-1 text-center md:text-left px-4">
                <span>Rozciągnij delikatnie mięsień, masuj bolesne miejsce, nawodnij organizm wodą z elektrolitami</span>
              </div>
              <div class="flex space-x-2 mt-2 md:mt-0">
                <button 
                  @click="window.location.href='#treatment'" 
                  class="bg-white text-red-600 hover:bg-red-100 px-4 py-1 rounded-md text-sm font-medium transition-colors"
                >
                  Więcej pomocy
                </button>
                <button 
                  @click="closeEmergencyBanner()" 
                  class="text-white hover:text-red-200 p-1"
                  aria-label="Zamknij"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <slot></slot>
        </div>
      </div>
    `
  };
} 