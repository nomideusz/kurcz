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
    isEmailJSReady: false,
    
    // Form validation
    errors: {
      name: '',
      email: '',
      message: ''
    },
    touched: {
      name: false,
      email: false,
      message: false
    },
    
    init() {
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
        // Initialize EmailJS with your public key from config
        window.emailjs.init({
          publicKey: emailConfig.emailjs.publicKey
        });
        
        this.isEmailJSReady = true;
        console.log("EmailJS initialized successfully");
      } catch (error) {
        console.error("Error initializing EmailJS:", error);
        this.formError = true;
        this.errorMessage = "Wystąpił błąd podczas inicjalizacji systemu kontaktowego. Prosimy o kontakt telefoniczny.";
      }
    },
    
    setTouched(field) {
      this.touched[field] = true;
      this.validateField(field);
    },
    
    validateField(field) {
      // Reset the error for this field
      this.errors[field] = '';
      
      // Validate based on field type
      if (field === 'name') {
        if (!this.name.trim()) {
          this.errors.name = 'Imię i nazwisko jest wymagane';
        } else if (this.name.length < 2) {
          this.errors.name = 'Imię i nazwisko jest za krótkie';
        }
      } else if (field === 'email') {
        if (!this.email.trim()) {
          this.errors.email = 'Email jest wymagany';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)) {
          this.errors.email = 'Proszę podać poprawny adres email';
        }
      } else if (field === 'message') {
        if (!this.message.trim()) {
          this.errors.message = 'Wiadomość jest wymagana';
        } else if (this.message.length < 10) {
          this.errors.message = 'Wiadomość jest za krótka (min. 10 znaków)';
        }
      }
      
      return !this.errors[field]; // Return true if no error
    },
    
    validateForm() {
      // Set all fields as touched
      this.touched.name = true;
      this.touched.email = true;
      this.touched.message = true;
      
      // Validate all fields
      const nameValid = this.validateField('name');
      const emailValid = this.validateField('email');
      const messageValid = this.validateField('message');
      
      // Return true only if all validations passed
      return nameValid && emailValid && messageValid;
    },
    
    submitForm() {
      this.loading = true;
      this.formError = false;
      
      // Validate form data
      if (!this.validateForm()) {
        this.formError = true;
        this.errorMessage = "Proszę wypełnić poprawnie wszystkie pola formularza.";
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
      
      // Use the direct service and template IDs
      // Hardcoding these values ensures we never accidentally use Mailtrap
      const serviceId = 'service_odredbg';
      const templateId = 'template_58mu3e2';
      
      // Prepare data for submission
      const templateParams = {
        from_name: this.name,
        reply_to: this.email,
        message: this.message
      };
      
      // Send email using EmailJS
      window.emailjs
        .send(serviceId, templateId, templateParams)
        .then((response) => {
          // Success
          console.log("Email sent successfully");
          this.formSubmitted = true;
          this.loading = false;
          
          // Reset form after submission
          setTimeout(() => {
            this.formSubmitted = false;
            this.name = '';
            this.email = '';
            this.message = '';
            // Reset validation state
            this.errors = { name: '', email: '', message: '' };
            this.touched = { name: false, email: false, message: false };
          }, 3000);
        })
        .catch((error) => {
          // Error handling
          console.error("Email sending failed:", error);
          
          // Check for specific error messages
          let errorMessage = "Spróbuj ponownie później.";
          
          // Check for specific error types
          if (error) {
            if (error.text && error.text.includes("Mailtrap")) {
              // This should never happen now, but just in case
              errorMessage = "Problem z konfiguracją usługi email. Prosimy o kontakt telefoniczny.";
            } else if (error.text) {
              errorMessage = error.text;
            } else if (error.message) {
              errorMessage = error.message;
            }
          }
          
          this.formError = true;
          this.errorMessage = `Wystąpił błąd podczas wysyłania wiadomości: ${errorMessage}`;
          this.loading = false;
        });
    },
    
    template: `
      <section id="contact" class="py-20 bg-white">
        <div class="container mx-auto px-6">
          <div class="max-w-3xl mx-auto text-center mb-12">
            <span class="section-subtitle">Skontaktuj się z nami</span>
            <h2 class="section-title">Kontakt</h2>
            <p class="section-description">
              Masz pytania? Skontaktuj się z nami, a nasi specjaliści chętnie odpowiedzą na wszystkie Twoje pytania.
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            <div class="bg-white rounded-xl shadow-soft p-6 md:p-8">
              <h3 class="text-2xl font-semibold text-gray-800 mb-6">Wyślij wiadomość</h3>
              
              <div class="space-y-6">
                <div class="flex items-center group">
                  <div class="icon-circle icon-circle-md bg-blue-100 flex-shrink-0 transition-all duration-300 group-hover:bg-blue-200">
                    <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div class="ml-4">
                    <p class="text-sm text-gray-500 font-medium">Telefon</p>
                    <button @click="window.location.href='tel:+48602846912'" type="button" class="text-gray-800 font-medium group-hover:text-blue-600 transition-colors focus:outline-none focus:text-blue-600">+48 602 846 912</button>
                  </div>
                </div>
                
                <div class="flex items-center group">
                  <div class="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-blue-200">
                    <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div class="ml-4">
                    <p class="text-sm text-gray-500 font-medium">Email</p>
                    <button @click="window.location.href='mailto:s@kurcz.pl'" type="button" class="text-gray-800 font-medium group-hover:text-blue-600 transition-colors focus:outline-none focus:text-blue-600">s@kurcz.pl</button>
                  </div>
                </div>
                
                <div class="flex items-center group">
                  <div class="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-blue-200">
                    <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div class="ml-4">
                    <p class="text-sm text-gray-500 font-medium">Adres</p>
                    <p class="text-gray-800 font-medium">Kraków, Polska</p>
                  </div>
                </div>
                
                <div class="flex items-center group">
                  <div class="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-blue-200">
                    <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div class="ml-4">
                    <p class="text-sm text-gray-500 font-medium">Media społecznościowe</p>
                    <button @click="window.open('https://www.facebook.com/profile.php?id=61575552422497', '_blank')" type="button" class="text-gray-800 font-medium group-hover:text-blue-600 transition-colors focus:outline-none focus:text-blue-600 flex items-center mt-1">
                      <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                      </svg>
                      Facebook
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="bg-white rounded-xl shadow-soft p-6 md:p-8">
              <h3 class="text-2xl font-semibold text-gray-800 mb-8">Formularz kontaktowy</h3>
              
              <div x-show="formSubmitted" 
                   x-transition:enter="transition ease-out duration-300"
                   x-transition:enter-start="opacity-0 transform -translate-y-4"
                   x-transition:enter-end="opacity-100 transform translate-y-0"
                   class="mb-6 bg-green-50 border border-green-200 text-green-700 px-5 py-4 rounded-lg shadow-sm">
                <p class="font-medium flex items-center">
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Dziękujemy za wiadomość!
                </p>
                <p class="text-sm mt-1">Odpowiemy najszybciej jak to możliwe.</p>
              </div>
              
              <div x-show="formError"
                   x-transition:enter="transition ease-out duration-300"
                   x-transition:enter-start="opacity-0 transform -translate-y-4"
                   x-transition:enter-end="opacity-100 transform translate-y-0"
                   class="mb-6 bg-red-50 border border-red-200 text-red-700 px-5 py-4 rounded-lg shadow-sm">
                <p class="font-medium flex items-center">
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  Błąd!
                </p>
                <p class="text-sm mt-1" x-text="errorMessage"></p>
              </div>
              
              <form x-show="!formSubmitted" @submit.prevent="submitForm" class="space-y-6">
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Imię i nazwisko</label>
                  <input 
                    type="text" 
                    id="name" 
                    x-model="name"
                    @blur="setTouched('name')"
                    @input="validateField('name')"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    :class="{'border-red-300 focus:ring-red-500 focus:border-red-500': touched.name && errors.name}"
                    :disabled="loading"
                  >
                  <p x-show="touched.name && errors.name" class="mt-1 text-sm text-red-600" x-text="errors.name"></p>
                </div>
                
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    x-model="email"
                    @blur="setTouched('email')"
                    @input="validateField('email')"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    :class="{'border-red-300 focus:ring-red-500 focus:border-red-500': touched.email && errors.email}"
                    :disabled="loading"
                  >
                  <p x-show="touched.email && errors.email" class="mt-1 text-sm text-red-600" x-text="errors.email"></p>
                </div>
                
                <div>
                  <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Wiadomość</label>
                  <textarea 
                    id="message" 
                    rows="4" 
                    x-model="message"
                    @blur="setTouched('message')"
                    @input="validateField('message')"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    :class="{'border-red-300 focus:ring-red-500 focus:border-red-500': touched.message && errors.message}"
                    :disabled="loading"
                  ></textarea>
                  <p x-show="touched.message && errors.message" class="mt-1 text-sm text-red-600" x-text="errors.message"></p>
                </div>
                
                <div>
                  <button 
                    type="submit" 
                    class="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg"
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
                  <p class="text-sm text-gray-500 mt-4 text-center">
                    Jeśli masz problemy z wysłaniem formularza, skorzystaj z bezpośredniego kontaktu telefonicznego lub email.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    `
  };
} 