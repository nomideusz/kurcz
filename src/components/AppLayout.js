export default function() {
  return {
    template: `
      <div class="min-h-screen bg-white">
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
    `
  };
} 