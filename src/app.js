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

// Track loading status
let loadingErrors = [];

// Initialize components
let navigation, accordion, Components;

// Load components using an immediately invoked async function
(async function loadComponents() {
  try {
    navigation = (await import('./js/components/navigation.js')).default;
    console.log('Navigation loaded:', navigation);
  } catch (e) {
    loadingErrors.push('navigation');
    logError('Failed to load navigation component', e);
  }

  try {
    accordion = (await import('./js/components/accordion.js')).default;
    console.log('Accordion loaded:', accordion);
  } catch (e) {
    loadingErrors.push('accordion');
    logError('Failed to load accordion component', e);
  }

  try {
    Components = (await import('./js/components.js')).default;
    console.log('Components loaded:', Components);
  } catch (e) {
    loadingErrors.push('components');
    logError('Failed to load components registry', e);
  }
  
  // Register Alpine.js components after loading
  if (document.querySelector('[x-data]')) {
    // Alpine is already initialized
    registerAlpineComponents();
  } else {
    // Alpine is not initialized yet
    document.addEventListener('alpine:init', registerAlpineComponents);
  }
})();

// Register Alpine.js components
function registerAlpineComponents() {
  try {
    // Register core components
    if (navigation) Alpine.data('navigation', navigation);
    if (accordion) Alpine.data('accordion', accordion);
    
    // Register template components
    if (Components) Components.install(Alpine);
  } catch (e) {
    logError('Error during Alpine initialization', e);
  }
}

// Make Alpine available globally for debugging if needed
window.Alpine = Alpine;

// Initialize Alpine
Alpine.start();

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
    
    // Use the registered template components if available
    if (!loadingErrors.includes('components')) {
      const layout = document.createElement('div');
      layout.setAttribute('x-data', 'appLayout');
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
    } else {
      // Fallback to basic layout
      const layout = document.createElement('div');
      layout.setAttribute('x-data', 'appLayout');
      layout.setAttribute('x-html', 'template');
      appContainer.appendChild(layout);
    }
    
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

// Wait for Alpine to be ready and then initialize content
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    // Small delay to ensure Alpine has fully initialized
    setTimeout(initializeContent, 100);
  });
} else {
  // Document already loaded
  setTimeout(initializeContent, 100);
} 