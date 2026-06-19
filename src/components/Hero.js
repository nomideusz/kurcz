import { getClientRoutePath } from '../js/route-path.js';

export default function() {
  const path = getClientRoutePath();

  return {
    isHome: path === '/',

    init() {
      window.addEventListener('route-changed', (event) => {
        this.isHome = event.detail.path === '/';
      });
    },

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
              
              <h1
                x-show="isHome"
                class="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] text-white tracking-tight"
              >
                Zrozumieć <br/>
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-health-light">Kurcze Mięśni</span>
              </h1>
              <p
                x-show="!isHome"
                x-cloak
                class="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] text-white tracking-tight"
                aria-hidden="true"
              >
                Zrozumieć <br/>
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-health-light">Kurcze Mięśni</span>
              </p>
              
              <p class="text-xl md:text-2xl mb-8 text-gray-300 font-light max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Kompleksowa wiedza medyczna w jednym miejscu. Poznaj najczęstsze przyczyny bolesnych kurczy nóg i mięśni, znajdź natychmiastową ulgę oraz skutecznie zapobiegaj ich nawrotom na co dzień.
              </p>
              
              <div class="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <a 
                  href="/pierwsza-pomoc"
                  class="group relative inline-flex items-center justify-center rounded-2xl bg-primary-600 text-white font-medium px-8 py-4 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-glow no-underline"
                >
                  <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
                  <span class="relative flex items-center gap-2">
                    Natychmiastowa pomoc
                    <svg class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </span>
                </a>
                <a 
                  href="/kurcze-miesniowe"
                  class="group inline-flex items-center justify-center rounded-2xl bg-surface-dark/40 backdrop-blur-md text-white border border-white/10 font-medium px-8 py-4 transition-all duration-300 hover:bg-surface-dark/60 hover:border-white/20 hover:scale-105 no-underline"
                >
                  Dowiedz się więcej
                </a>
              </div>
            </div>
            
            <div class="lg:w-1/2 w-full max-w-lg lg:max-w-none relative flex justify-center animate-fade-in delay-200">
              <!-- Advanced Glassmorphism UI Container -->
              <div class="relative w-full aspect-[4/3] lg:aspect-square max-w-[600px] rounded-[2rem] bg-surface-dark/40 backdrop-blur-2xl border border-teal-500/30 shadow-[0_0_50px_rgba(20,184,166,0.15)] p-2 md:p-4 transition-all duration-700 hover:shadow-[0_0_80px_rgba(20,184,166,0.3)] hover:border-teal-400/50 group overflow-hidden">
                
                <!-- Glowing accents inside frame -->
                <div class="absolute -top-20 -right-20 w-40 h-40 bg-teal-500/30 rounded-full blur-[50px] group-hover:bg-teal-400/40 transition-colors duration-500"></div>
                <div class="absolute -bottom-20 -left-20 w-60 h-60 bg-blue-600/20 rounded-full blur-[60px] group-hover:bg-blue-500/30 transition-colors duration-500"></div>

                <div class="relative w-full h-full rounded-[1.5rem] overflow-hidden border border-white/5 shadow-inner bg-gray-900/50">
                  <img 
                    src="/img/hero_anatomy.png" 
                  alt="Schemat układu mięśniowego — ilustracja edukacyjna o kurczach mięśniowych" 
                    class="w-full h-full object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out" 
                    width="600" 
                    height="600" 
                    loading="eager" 
                    fetchpriority="high" 
                  />
                  <!-- Gradient Overlays to blend with dark bg -->
                  <div class="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-80"></div>
                  <div class="absolute inset-0 bg-gradient-to-r from-[#020617]/50 via-transparent to-transparent"></div>
                  
                  <!-- HUD Elements overlay -->
                  <div class="absolute top-4 left-4 flex gap-2">
                    <span class="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
                    <span class="w-2 h-2 rounded-full bg-teal-400/50"></span>
                    <span class="w-2 h-2 rounded-full bg-teal-400/30"></span>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    `
  };
} 