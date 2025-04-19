import Alpine from 'alpinejs'

// Make Alpine available globally (optional but useful for debugging)
window.Alpine = Alpine

// Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    Alpine.start()
})