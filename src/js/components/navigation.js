export default function() {
  return {
    isOpen: false,
    activeSection: 'home',
    
    init() {
      // Set the active section based on the current URL
      const path = window.location.pathname;
      if (path.includes('treatment')) {
        this.activeSection = 'treatment';
      } else if (path.includes('about')) {
        this.activeSection = 'about';
      } else if (path.includes('contact')) {
        this.activeSection = 'contact';
      }
      
      // Add scroll listener to update active section
      window.addEventListener('scroll', () => this.updateActiveSection());
    },
    
    toggle() {
      this.isOpen = !this.isOpen;
    },
    
    updateActiveSection() {
      // Logic to update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.pageYOffset;
      
      sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          this.activeSection = sectionId;
        }
      });
    }
  };
} 