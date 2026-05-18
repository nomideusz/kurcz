export default function() {
  return {
    template: `
      <section id="home" class="relative bg-background-dark py-32 lg:py-48 text-white overflow-hidden min-h-[800px] flex items-center">
        <!-- Modern Animated Mesh Background -->
        <div class="absolute inset-0 w-full h-full overflow-hidden pointer-events-none" aria-hidden="true" style="contain: strict;">
          <div class="absolute inset-0 bg-[#020617]"></div>
          
          <!-- Animated Glow Orbs -->
          <div class="absolute top-[-10%] left-[-10%] w-[50%] h-[60%] bg-primary-600/30 rounded-full blur-[120px] animate-blob"></div>
          <div class="absolute bottom-[-10%] right-[-10%] w-[60%] h-[70%] bg-health-dark/30 rounded-full blur-[130px] animate-blob animation-delay-2000"></div>
          <div class="absolute top-[20%] right-[20%] w-[40%] h-[40%] bg-indigo-600/20 rounded-full blur-[100px] animate-blob animation-delay-4000"></div>
          
          <!-- Grid Overlay for texture -->
          <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik00MCAwaC00MHY0MGg0MFYweiIgZmlsbD0ibm9uZSIvPgo8cGF0aCBkPSJNMCAwaDQwdjQwSDB6IiBmaWxsPSJub25lIi8+CjxwYXRoIGQ9Ik0wIDB2NDBoNDBWMEgweiIgZmlsbD0ibm9uZSIvPgo8cGF0aCBkPSJNMCAwdjQwIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIHN0cm9rZS13aWR0aD0iMSIvPgo8cGF0aCBkPSJNMCAwaDQwIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIHN0cm9rZS13aWR0aD0iMSIvPgo8L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
        </div>
        
        <div class="container mx-auto px-6 relative z-10">
          <div class="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8 max-w-7xl mx-auto">
            
            <div class="lg:w-1/2 text-center lg:text-left flex flex-col justify-center animate-slide-up">
              
              <!-- Premium Badge -->
              <div class="inline-flex items-center gap-2 px-4 py-2 bg-surface-dark/40 backdrop-blur-md rounded-full mb-8 border border-white/10 shadow-glass w-fit mx-auto lg:mx-0">
                <span class="flex h-2 w-2 rounded-full bg-health-light animate-pulse"></span>
                <span class="text-sm font-medium tracking-wide text-gray-200 uppercase">Pomoc przy kurczach mięśniowych</span>
              </div>
              
              <h1 class="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] text-white tracking-tight">
                Zrozumieć <br/>
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-health-light">Skurcze Mięśni</span>
              </h1>
              
              <p class="text-xl md:text-2xl mb-8 text-gray-300 font-light max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Kompleksowa wiedza medyczna w jednym miejscu. Poznaj najczęstsze przyczyny bolesnych skurczy nóg i mięśni, znajdź natychmiastową ulgę oraz skutecznie zapobiegaj ich nawrotom na co dzień.
              </p>
              
              <div class="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <button 
                  type="button"
                  @click="document.getElementById('treatment').scrollIntoView({behavior: 'smooth', block: 'start'})"
                  class="group relative inline-flex items-center justify-center rounded-2xl bg-primary-600 text-white font-medium px-8 py-4 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-glow"
                >
                  <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
                  <span class="relative flex items-center gap-2">
                    Natychmiastowa pomoc
                    <svg class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </span>
                </button>
                <button 
                  type="button"
                  @click="document.getElementById('intro').scrollIntoView({behavior: 'smooth', block: 'start'})"
                  class="group inline-flex items-center justify-center rounded-2xl bg-surface-dark/40 backdrop-blur-md text-white border border-white/10 font-medium px-8 py-4 transition-all duration-300 hover:bg-surface-dark/60 hover:border-white/20 hover:scale-105"
                >
                  Dowiedz się więcej
                </button>
              </div>
            </div>
            
            <div class="lg:w-1/2 w-full max-w-lg lg:max-w-none relative flex justify-center animate-fade-in delay-200">
              <!-- Glassmorphism Image Container -->
              <div class="relative w-full aspect-square max-w-[500px] rounded-[2.5rem] bg-surface-dark/20 backdrop-blur-xl border border-white/10 shadow-2xl p-4 md:p-6 rotate-3 hover:rotate-0 transition-transform duration-500 ease-out overflow-hidden group">
                <div class="absolute inset-0 bg-gradient-to-tr from-primary-600/20 to-health-dark/20 opacity-50"></div>
                <div class="relative w-full h-full rounded-[1.5rem] overflow-hidden border border-white/10 shadow-inner">
                  <img 
                    src="/img/hero_square.webp" 
                    alt="Ilustracja kurczu mięśniowego" 
                    class="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                    width="500" 
                    height="500" 
                    loading="eager" 
                    fetchpriority="high" 
                  />
                  <!-- Gradient Overlay -->
                  <div class="absolute inset-0 bg-gradient-to-t from-[#020617]/80 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    `
  };
} 