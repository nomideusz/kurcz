import { emailConfig } from '../config.js';

export default function() {
  return {
    formSubmitted: false,
    formError: false,
    errorMessage: '',
    loading: false,
    name: '',
    email: '',
    message: '',
    isTestMode: false,
    isEmailJSReady: false,
    
    init() {
      // Usunięto test mode, zawsze używamy produkcyjnego
      this.isTestMode = false;
      
      // Load EmailJS script if it's not already loaded
      this.loadEmailJS();
    },
    
    loadEmailJS() {
      if (window.emailjs) {
        // EmailJS is already loaded
        this.initializeEmailJS();
        return;
      }
      
      // Use the latest EmailJS SDK (v4)
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
      script.async = true;
      document.head.appendChild(script);
      
      script.onload = () => {
        this.initializeEmailJS();
      };
      
      script.onerror = () => {
        console.error("Failed to load EmailJS script");
        this.formError = true;
        this.errorMessage = "Nie udało się załadować biblioteki do wysyłania e-maili. Prosimy o kontakt telefoniczny.";
      };
    },
    
    initializeEmailJS() {
      try {
        // Initialize EmailJS with your public key from config using the new API format
        window.emailjs.init({
          publicKey: emailConfig.emailjs.publicKey
        });
        
        this.isEmailJSReady = true;
        console.log("EmailJS initialized successfully with version:", window.emailjs.version);
      } catch (error) {
        console.error("Error initializing EmailJS:", error);
        this.formError = true;
        this.errorMessage = "Wystąpił błąd podczas inicjalizacji systemu kontaktowego. Prosimy o kontakt telefoniczny.";
      }
    },
    
    validateConfig() {
      const { publicKey, serviceId, templateId } = emailConfig.emailjs;
      
      if (!this.isEmailJSReady) {
        return "System kontaktowy nie jest gotowy. Odśwież stronę lub spróbuj ponownie później.";
      }
      
      if (!publicKey || publicKey === 'your_emailjs_public_key') {
        return "Brak klucza publicznego EmailJS.";
      }
      
      if (!serviceId || serviceId === 'your_emailjs_service_id') {
        return "Usługa EmailJS nie jest poprawnie skonfigurowana.";
      }
      
      if (!templateId || templateId === 'your_emailjs_template_id') {
        return "Szablon EmailJS nie jest poprawnie skonfigurowany.";
      }
      
      return null; // Config is valid
    },
    
    submitForm() {
      this.loading = true;
      this.formError = false;
      
      // Validate form data
      if (!this.name || !this.email || !this.message) {
        this.formError = true;
        this.errorMessage = "Proszę wypełnić wszystkie pola formularza.";
        this.loading = false;
        return;
      }
      
      // Check if EmailJS is ready
      if (!this.isEmailJSReady) {
        this.formError = true;
        this.errorMessage = "System do wysyłania e-maili nie jest gotowy. Odśwież stronę i spróbuj ponownie.";
        this.loading = false;
        return;
      }
      
      // Check if EmailJS is properly configured
      const configError = this.validateConfig();
      if (configError) {
        console.error("EmailJS configuration error:", configError);
        this.formError = true;
        this.errorMessage = `Błąd konfiguracji: ${configError} Prosimy o kontakt telefoniczny.`;
        this.loading = false;
        return;
      }
      
      const { serviceId, templateId } = emailConfig.emailjs;
      
      // Prepare data for submission
      const templateParams = {
        from_name: this.name,
        reply_to: this.email,
        message: this.message
      };
      
      // Send email using EmailJS with values from config (with updated API for v4)
      window.emailjs
        .send(serviceId, templateId, templateParams)
        .then((response) => {
          // Success
          console.log("Email sent successfully:", response);
          this.formSubmitted = true;
          this.loading = false;
          
          // Reset form after submission
          setTimeout(() => {
            this.formSubmitted = false;
            this.name = '';
            this.email = '';
            this.message = '';
          }, 3000);
        })
        .catch((error) => {
          // Error with more details
          console.error("Email sending failed:", error);
          
          // Get detailed error message
          let errorMessage = "Spróbuj ponownie później.";
          if (error) {
            if (error.text) errorMessage = error.text;
            else if (error.message) errorMessage = error.message;
          }
          
          this.formError = true;
          this.errorMessage = `Wystąpił błąd podczas wysyłania wiadomości: ${errorMessage}`;
          this.loading = false;
        });
    },
    
    template: `
      <section id="contact" class="py-20">
        <div class="container mx-auto px-6">
          <div class="text-center mb-16">
            <span class="text-blue-600 font-semibold text-sm uppercase tracking-wider">Kontakt</span>
            <h2 class="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-800">Jak się z nami skontaktować?</h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
              Masz pytania lub potrzebujesz dodatkowych informacji? Skontaktuj się z nami. 
              Jesteśmy do Twojej dyspozycji.
            </p>
          </div>
          
          <div class="max-w-5xl mx-auto bg-white rounded-xl shadow-md overflow-hidden md:flex">
            <div class="w-full md:w-1/2 p-8 md:p-12 bg-blue-50">
              <h3 class="text-2xl font-semibold text-gray-800 mb-6">Dane kontaktowe</h3>
              
              <div class="space-y-8">
                <div class="flex items-center">
                  <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div class="ml-4">
                    <p class="text-sm text-gray-500 font-medium">Telefon</p>
                    <button @click="window.location.href='tel:+48602846912'" type="button" class="hover:text-blue-600 transition-colors">+48 602 846 912</button>
                  </div>
                </div>
                
                <div class="flex items-center">
                  <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div class="ml-4">
                    <p class="text-sm text-gray-500 font-medium">Email</p>
                    <button @click="window.location.href='mailto:s@kurcz.pl'" type="button" class="hover:text-blue-600 transition-colors">s@kurcz.pl</button>
                  </div>
                </div>
                
                <div class="flex items-center">
                  <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div class="ml-4">
                    <p class="text-sm text-gray-500 font-medium">Adres</p>
                    <p class="text-gray-600">Słomniki, Polska</p>
                  </div>
                </div>
                
                <div class="flex items-center">
                  <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div class="ml-4">
                    <p class="text-sm text-gray-500 font-medium">Media społecznościowe</p>
                    <button @click="window.open('https://www.facebook.com/profile.php?id=61575552422497', '_blank')" type="button" class="text-gray-600 hover:text-blue-600 transition-colors">
                      <span class="flex items-center mt-1">
                        <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                        </svg>
                        Facebook
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="w-full md:w-1/2 p-8 md:p-12">
              <h3 class="text-2xl font-semibold text-gray-800 mb-6">Formularz kontaktowy</h3>
              
              <form class="space-y-6">
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Imię i nazwisko</label>
                  <input type="text" id="name" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                </div>
                
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" id="email" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                </div>
                
                <div>
                  <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Wiadomość</label>
                  <textarea id="message" rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"></textarea>
                </div>
                
                <div>
                  <button type="submit" class="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors">
                    Wyślij wiadomość
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    `
  };
} 