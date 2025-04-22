import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import Hero from '../components/Hero.js';
import Accordion from '../components/Accordion.js';
import IntroSection from '../components/IntroSection.js';
import TreatmentSection from '../components/TreatmentSection.js';
import FaqSection from '../components/FaqSection.js';
import ContactSection from '../components/ContactSection.js';
import AppLayout from '../components/AppLayout.js';

// Function to check if components exists
function componentExists(component) {
  return component !== undefined && component !== null;
}

// Register components
const Components = {
  install(Alpine) {
    // Register each component
    try {
      Alpine.data('headerComponent', Header);
      Alpine.data('footerComponent', Footer);
      Alpine.data('heroComponent', Hero);
      Alpine.data('accordionComponent', Accordion);
      Alpine.data('introSectionComponent', IntroSection);
      Alpine.data('treatmentSectionComponent', TreatmentSection);
      Alpine.data('faqSectionComponent', FaqSection);
      Alpine.data('contactSectionComponent', ContactSection);
      Alpine.data('appLayout', AppLayout);
      
      console.log('✓ Successfully registered components');
    } catch (error) {
      console.error('✗ Error registering components:', error);
    }
  }
};

export default Components; 