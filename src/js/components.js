import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import Hero from '../components/Hero.js';
import Accordion from '../components/Accordion.js';
import IntroSection from '../components/IntroSection.js';
import TreatmentSection from '../components/TreatmentSection.js';
import FaqSection from '../components/FaqSection.js';
import ContactSection from '../components/ContactSection.js';
import AppLayout from '../components/AppLayout.js';

// Directly export all components for immediate use
export const components = {
  headerComponent: Header,
  footerComponent: Footer,
  heroComponent: Hero,
  accordionComponent: Accordion,
  introSectionComponent: IntroSection,
  treatmentSectionComponent: TreatmentSection,
  faqSectionComponent: FaqSection,
  contactSectionComponent: ContactSection,
  appLayout: AppLayout
};

// Function to check if component exists and has template property
function validateComponent(component, name) {
  if (!component) {
    console.error(`Component ${name} is undefined`);
    return false;
  }
  
  if (typeof component !== 'function') {
    console.error(`Component ${name} is not a function`, component);
    return false;
  }
  
  // Check if component returns an object with template property
  try {
    const instance = component();
    if (!instance || !instance.template) {
      console.error(`Component ${name} does not return an object with template property`, instance);
      return false;
    }
  } catch (e) {
    console.error(`Error initializing component ${name}`, e);
    return false;
  }
  
  return true;
}

// Register components
const Components = {
  install(Alpine) {
    if (!Alpine) {
      console.error('Alpine.js instance not provided to components installer');
      return;
    }
    
    console.log('Registering components with Alpine.js...');
    
    // Component registration map with validation
    const componentMap = Object.entries(components).map(([name, component]) => ({ name, component }));
    
    // Register each component with validation
    let successCount = 0;
    let failCount = 0;
    
    componentMap.forEach(({ name, component }) => {
      try {
        if (validateComponent(component, name)) {
          Alpine.data(name, component);
          console.log(`✓ Registered '${name}' successfully`);
          successCount++;
        } else {
          console.error(`✗ Failed to register '${name}': validation failed`);
          failCount++;
        }
      } catch (error) {
        console.error(`✗ Error registering component '${name}':`, error);
        failCount++;
      }
    });
    
    console.log(`Component registration complete: ${successCount} succeeded, ${failCount} failed`);
  }
};

// Also register components globally if window is available (for direct script use)
if (typeof window !== 'undefined') {
  Object.entries(components).forEach(([name, component]) => {
    window[name] = component;
  });
}

export default Components; 