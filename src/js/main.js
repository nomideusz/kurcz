import Alpine from 'alpinejs';
import navigation from './components/navigation';
import accordion from './components/accordion';
import darkMode from './components/darkMode';
import Components from './components';

// Wait for document to be ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('Document loaded, initializing Alpine.js components...');
    
    // Register Alpine.js components
    document.addEventListener('alpine:init', () => {
        // Register core components
        Alpine.data('navigation', navigation);
        Alpine.data('accordion', accordion);
        Alpine.data('darkMode', darkMode);
        
        // Register template components
        Components.install(Alpine);
        
        // Add any other global Alpine.js data or stores here
        Alpine.store('theme', {
            dark: false,
            toggle() {
                this.dark = !this.dark;
                localStorage.setItem('dark', this.dark);
            },
            init() {
                this.dark = localStorage.getItem('dark') === 'true' || false;
            }
        });
        
        console.log('Alpine.js components registered successfully');
    });

    // Make Alpine available globally for debugging if needed
    window.Alpine = Alpine;

    // Initialize Alpine
    Alpine.start();
    console.log('Alpine.js started');
}); 