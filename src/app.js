// Import styles
import './css/styles.css';

// Import Alpine.js and components
import Alpine from 'alpinejs';

// Simple debugging function to log errors
function logError(message, error) {
  console.error(`ERROR: ${message}`, error);
  
  // Dispatch error event
  window.dispatchEvent(new CustomEvent('app-error', { 
    detail: { message, error } 
  }));
  
  // Only create visible error if no loading element exists
  if (!document.getElementById('loading')) {
    // Create a visible error message on the page
    const errorDiv = document.createElement('div');
    errorDiv.style.backgroundColor = 'red';
    errorDiv.style.color = 'white';
    errorDiv.style.padding = '20px';
    errorDiv.style.margin = '20px';
    errorDiv.style.borderRadius = '5px';
    errorDiv.innerHTML = `<h2>Error Loading Components</h2><p>${message}</p><pre>${error?.stack || error}</pre>`;
    document.body.appendChild(errorDiv);
  }
}

// Make Alpine available globally for debugging if needed
window.Alpine = Alpine;

// Wait until components and modules are loaded before initializing Alpine
let componentsLoaded = false;

// Ensure Alpine.js doesn't start until we're ready
document.addEventListener('alpine:init', () => {
  // We'll register our components through the separate loadComponents function
});

// Initialize Alpine only after components are loaded
function startAlpine() {
  if (componentsLoaded) {
    console.log('Starting Alpine.js with all components loaded');
    Alpine.start();
    
    // Initialize UI after a small delay to ensure Alpine is running
    setTimeout(initializeContent, 100);
  } else {
    console.log('Waiting for components to load...');
    setTimeout(startAlpine, 50);
  }
}

// Load and register components
async function loadComponents() {
  // Track loading status
  let loadingErrors = [];
  let navigation, accordion, Components;
  
  try {
    const navigationModule = await import('./js/components/navigation.js');
    navigation = navigationModule.default;
    console.log('Navigation loaded:', navigation);
  } catch (e) {
    loadingErrors.push('navigation');
    logError('Failed to load navigation component', e);
  }

  try {
    const accordionModule = await import('./js/components/accordion.js');
    accordion = accordionModule.default;
    console.log('Accordion loaded:', accordion);
  } catch (e) {
    loadingErrors.push('accordion');
    logError('Failed to load accordion component', e);
  }

  try {
    const componentsModule = await import('./js/components.js');
    Components = componentsModule.default;
    console.log('Components loaded:', Components);
  } catch (e) {
    loadingErrors.push('components');
    logError('Failed to load components registry', e);
  }
  
  // Register Alpine.js components
  try {
    // Register core components
    if (navigation) Alpine.data('navigation', navigation);
    if (accordion) Alpine.data('accordion', accordion);
    
    // Register template components
    if (Components) Components.install(Alpine);
    
    // Mark components as loaded
    componentsLoaded = true;
    console.log('All components registered successfully');
  } catch (e) {
    logError('Error during Alpine component registration', e);
  }
  
  // Start Alpine.js now that components are registered
  startAlpine();
  
  return { loadingErrors };
}

// Function to initialize the main content after Alpine is ready
function initializeContent() {
  // Hide loading indicator and show main content
  const loadingEl = document.getElementById('loading');
  if (loadingEl) {
    loadingEl.style.display = 'none';
  }
  
  // If we're adding content directly to the body
  if (!document.getElementById('app-container')) {
    const appContainer = document.createElement('div');
    appContainer.id = 'app-container';
    
    // Create layout
    const layout = document.createElement('div');
    layout.setAttribute('x-data', 'appLayout');
    
    // Add the template HTML
    layout.innerHTML = `
      <div>
        <!-- Header Component -->
        <div x-data="headerComponent" x-html="template"></div>
        
        <!-- Hero Component -->
        <div x-data="heroComponent" x-html="template"></div>
        
        <!-- Intro Section Component -->
        <div x-data="introSectionComponent" x-html="template"></div>
        
        <!-- Treatment Section Component -->
        <div x-data="treatmentSectionComponent" x-html="template"></div>
        
        <!-- FAQ Section Component -->
        <div x-data="faqSectionComponent" x-html="template"></div>
        
        <!-- Contact Section Component -->
        <div x-data="contactSectionComponent" x-html="template"></div>
        
        <!-- Footer Component -->
        <div x-data="footerComponent" x-html="template"></div>
      </div>
    `;
    
    appContainer.appendChild(layout);
    document.body.appendChild(appContainer);
  }
  
  // Dispatch loaded event
  window.dispatchEvent(new CustomEvent('app-loaded'));
  
  // Add reload button functionality
  setTimeout(() => {
    const reloadBtn = document.getElementById('reload-btn');
    if (reloadBtn) {
      reloadBtn.addEventListener('click', () => {
        window.location.reload();
      });
    }
  }, 100);
}

// Start loading components
loadComponents();

// Wait for document to be ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    // Document loaded, but we'll wait for components before starting Alpine
    console.log('Document loaded, waiting for components...');
  });
} 