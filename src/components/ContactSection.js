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
      <section id="contact" class="py-20 bg-white">
        <div class="container mx-auto px-6">
          <div class="max-w-3xl mx-auto text-center mb-16">
            <span class="text-blue-600 font-semibold text-sm uppercase tracking-wider">Kontakt</span>
            <h2 class="text-3xl md:text-4xl font-bold mt-2 mb-6 text-gray-800">
              Masz pytania? Skontaktuj się z nami
            </h2>
            <p class="text-lg text-gray-600 leading-relaxed">
              Jeśli masz dodatkowe pytania dotyczące kurczy mięśniowych lub chcesz skonsultować się ze specjalistą,
              wypełnij poniższy formularz lub skorzystaj z danych kontaktowych.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-12">
            <!-- Contact Form -->
            <div class="bg-gray-50 rounded-xl shadow-md overflow-hidden p-6 sm:p-8">
              <h3 class="text-2xl font-semibold mb-6 text-gray-800">
                Formularz kontaktowy
              </h3>
              
              <div x-show="formSubmitted" class="mb-6 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                <p class="font-medium">Dziękujemy za wiadomość!</p>
                <p class="text-sm">Odpowiemy najszybciej jak to możliwe.</p>
              </div>
              
              <div x-show="formError" class="mb-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                <p class="font-medium">Błąd!</p>
                <p class="text-sm" x-text="errorMessage"></p>
              </div>
              
              <form x-show="!formSubmitted" @submit.prevent="submitForm">
                <div class="mb-6">
                  <label for="name" class="block text-gray-700 text-sm font-medium mb-2">Imię i nazwisko</label>
                  <input 
                    type="text" 
                    id="name" 
                    x-model="name"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Jan Kowalski"
                    required
                    :disabled="loading"
                  >
                </div>
                
                <div class="mb-6">
                  <label for="email" class="block text-gray-700 text-sm font-medium mb-2">Adres e-mail</label>
                  <input 
                    type="email" 
                    id="email" 
                    x-model="email"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="jan@example.com"
                    required
                    :disabled="loading"
                  >
                </div>
                
                <div class="mb-6">
                  <label for="message" class="block text-gray-700 text-sm font-medium mb-2">Wiadomość</label>
                  <textarea 
                    id="message" 
                    x-model="message"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    rows="4"
                    placeholder="Twoja wiadomość..."
                    required
                    :disabled="loading"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  class="w-full bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
                  :disabled="loading"
                >
                  <span x-show="!loading">Wyślij wiadomość</span>
                  <span x-show="loading" class="flex items-center justify-center">
                    <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Wysyłanie...
                  </span>
                </button>
              </form>
            </div>
            
            <!-- Contact Information -->
            <div class="bg-blue-50 rounded-xl shadow-md overflow-hidden p-6 sm:p-8">
              <h3 class="text-2xl font-semibold mb-6 text-gray-800">
                Dane kontaktowe
              </h3>
              
              <div class="space-y-6">
                <div class="flex items-start">
                  <div class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-4">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-lg font-medium text-gray-800">Telefon</h4>
                    <p class="mt-1 text-gray-600">
                      <a href="tel:+48602846912" class="hover:text-blue-600 transition-colors">+48 602 846 912</a>
                    </p>
                    <p class="text-sm text-gray-500 mt-1">Pon-Pt: 9:00 - 17:00</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-4">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-lg font-medium text-gray-800">Email</h4>
                    <p class="mt-1 text-gray-600">
                      <a href="mailto:s@kurcz.pl" class="hover:text-blue-600 transition-colors">s@kurcz.pl</a>
                    </p>
                    <p class="text-sm text-gray-500 mt-1">Odpowiadamy w ciągu 24 godzin</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-4">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-lg font-medium text-gray-800">Śledź nas</h4>
                    <div class="mt-2 flex space-x-4">
                      <a href="https://www.facebook.com/profile.php?id=61575552422497" target="_blank" class="text-gray-600 hover:text-blue-600 transition-colors">
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `
  };
} 