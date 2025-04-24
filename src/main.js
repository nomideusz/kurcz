// Import CSS
import './css/styles.css';

// Import Alpine and components
import Alpine from 'alpinejs';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Hero from './components/Hero.js';
import IntroSection from './components/IntroSection.js';
import TreatmentSection from './components/TreatmentSection.js';
import FaqSection from './components/FaqSection.js';
import ContactSection from './components/ContactSection.js';
import AppLayout from './components/AppLayout.js';
import { emailConfig } from './config.js';

// Log environment information for debugging
console.log("App Environment:", {
  isDev: import.meta?.env?.DEV || false,
  isProd: import.meta?.env?.PROD || false,
  mode: import.meta?.env?.MODE || 'unknown',
  envVars: {
    hasVitePublicKey: Boolean(import.meta?.env?.VITE_EMAILJS_PUBLIC_KEY),
    hasViteServiceId: Boolean(import.meta?.env?.VITE_EMAILJS_SERVICE_ID),
    hasViteTemplateId: Boolean(import.meta?.env?.VITE_EMAILJS_TEMPLATE_ID)
  },
  emailConfig: {
    publicKey: emailConfig.emailjs.publicKey ? (emailConfig.emailjs.publicKey.substring(0, 5) + '...') : null,
    serviceId: emailConfig.emailjs.serviceId,
    templateId: emailConfig.emailjs.templateId
  }
});

// Make components available globally
window.headerComponent = Header;
window.footerComponent = Footer;
window.heroComponent = Hero;
window.introSectionComponent = IntroSection;
window.treatmentSectionComponent = TreatmentSection;
window.faqSectionComponent = FaqSection;
window.contactSectionComponent = ContactSection;
window.appLayout = AppLayout;

// Function to render the app
function renderApp() {
  const appLayout = document.getElementById('app-layout');
  if (appLayout) {
    appLayout.innerHTML = `
      <!-- Header Component -->
      <div x-data="headerComponent()" x-html="template"></div>
      
      <!-- Hero Component -->
      <div x-data="heroComponent()" x-html="template"></div>
      
      <!-- Intro Section Component -->
      <div x-data="introSectionComponent()" x-html="template"></div>
      
      <!-- Treatment Section Component -->
      <div x-data="treatmentSectionComponent()" x-html="template"></div>
      
      <!-- FAQ Section Component -->
      <div x-data="faqSectionComponent()" x-html="template"></div>
      
      <!-- Contact Section Component -->
      <div x-data="contactSectionComponent()" x-html="template"></div>
      
      <!-- Footer Component -->
      <div x-data="footerComponent()" x-html="template"></div>
    `;
  }
}

// When the document is ready
document.addEventListener('DOMContentLoaded', () => {
  console.log('Document loaded, initializing Alpine.js components...');
  
  // Render app content
  renderApp();
  
  // Make Alpine available globally for debugging
  window.Alpine = Alpine;
  
  // Hide loading indicator after a delay
  setTimeout(() => {
    const loadingEl = document.getElementById('loading');
    if (loadingEl) {
      loadingEl.style.display = 'none';
    }
    // Trigger app loaded event
    window.dispatchEvent(new CustomEvent('app-loaded'));
  }, 1000);
  
  console.log('App initialized.');
}); 