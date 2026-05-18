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
      <section id="contact" class="py-24 md:py-32 bg-background-light relative overflow-hidden">
        <!-- Background elements -->
        <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div class="absolute bottom-0 left-0 w-full h-[60%] bg-gradient-to-t from-primary-50/50 to-transparent"></div>
          <div class="absolute top-[20%] right-[-5%] w-[30%] h-[40%] bg-primary-100/30 rounded-full blur-[120px]"></div>
          <div class="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-health-light/20 rounded-full blur-[120px]"></div>
        </div>

        <div class="container mx-auto px-6 relative z-10">
          <div class="max-w-4xl mx-auto text-center mb-16 md:mb-24 animate-slide-up">
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-white text-gray-700 rounded-full mb-6 border border-gray-200 font-medium text-sm shadow-sm">
              <span class="w-2 h-2 rounded-full bg-primary-500 animate-pulse-soft"></span>
              Jesteśmy dla Ciebie
            </div>
            <h2 class="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Skontaktuj się z nami
            </h2>
            <p class="text-lg md:text-xl text-gray-500 font-light leading-relaxed max-w-2xl mx-auto">
              Masz pytania? Chcesz dowiedzieć się więcej o kurczach mięśniowych lub nowoczesnych formach terapii? Nasi specjaliści chętnie Ci pomogą.
            </p>
          </div>

          <div class="grid lg:grid-cols-5 gap-8 md:gap-12 max-w-7xl mx-auto">
            
            <!-- Contact Info Column -->
            <div class="lg:col-span-2 flex flex-col space-y-6">
              <div class="bg-surface rounded-[2rem] shadow-soft border border-gray-100 p-8 md:p-10 flex-grow relative overflow-hidden group">
                <div class="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div class="relative z-10">
                  <h3 class="font-heading text-2xl font-bold text-gray-900 mb-8">Informacje kontaktowe</h3>
                  
                  <div class="space-y-8">
                    <!-- Phone -->
                    <div class="flex items-start group/item">
                      <div class="w-12 h-12 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center flex-shrink-0 mr-5 border border-primary-100 group-hover/item:scale-110 group-hover/item:bg-primary-600 group-hover/item:text-white transition-all duration-300">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                        </svg>
                      </div>
                      <div>
                        <p class="text-sm text-gray-500 font-medium mb-1">Infolinia</p>
                        <button @click="window.location.href='tel:+48602846912'" type="button" class="text-lg text-gray-900 font-semibold group-hover/item:text-primary-600 transition-colors focus:outline-none text-left">+48 602 846 912</button>
                      </div>
                    </div>
                    
                    <!-- Email -->
                    <div class="flex items-start group/item">
                      <div class="w-12 h-12 rounded-2xl bg-health/10 text-health-dark flex items-center justify-center flex-shrink-0 mr-5 border border-health/20 group-hover/item:scale-110 group-hover/item:bg-health-dark group-hover/item:text-white transition-all duration-300">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                      </div>
                      <div>
                        <p class="text-sm text-gray-500 font-medium mb-1">Adres e-mail</p>
                        <button @click="window.location.href='mailto:s@kurcz.pl'" type="button" class="text-lg text-gray-900 font-semibold group-hover/item:text-health-dark transition-colors focus:outline-none text-left">s@kurcz.pl</button>
                      </div>
                    </div>
                    
                    <!-- Address -->
                    <div class="flex items-start group/item">
                      <div class="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0 mr-5 border border-amber-100 group-hover/item:scale-110 group-hover/item:bg-amber-500 group-hover/item:text-white transition-all duration-300">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                      </div>
                      <div>
                        <p class="text-sm text-gray-500 font-medium mb-1">Lokalizacja</p>
                        <p class="text-lg text-gray-900 font-semibold">Kraków, Polska</p>
                      </div>
                    </div>
                  </div>
                  
                  <div class="mt-10 pt-8 border-t border-gray-100">
                    <p class="text-sm text-gray-500 font-medium mb-4">Znajdź nas w sieci</p>
                    <button @click="window.open('https://www.facebook.com/profile.php?id=61575552422497', '_blank')" type="button" class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-50 text-gray-600 hover:bg-blue-600 hover:text-white transition-colors duration-300">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Contact Form Column -->
            <div class="lg:col-span-3">
              <div class="bg-white rounded-[2.5rem] shadow-glass border border-gray-100 p-8 md:p-12 relative overflow-hidden group/form h-full">
                <!-- Decorative element -->
                <div class="absolute top-0 right-0 w-32 h-32 bg-primary-50 rounded-bl-[4rem] flex items-center justify-center transform translate-x-10 -translate-y-10 group-hover/form:translate-x-0 group-hover/form:-translate-y-0 transition-transform duration-500">
                  <div class="w-8 h-8 rounded-full bg-primary-200/50"></div>
                </div>
                
                <div class="relative z-10">
                  <h3 class="font-heading text-3xl font-bold text-gray-900 mb-2">Napisz do nas</h3>
                  <p class="text-gray-500 mb-8 font-light">Wypełnij formularz, a skontaktujemy się z Tobą jak najszybciej.</p>
                  
                  <div x-show="formSubmitted" 
                       x-transition:enter="transition ease-out duration-300"
                       x-transition:enter-start="opacity-0 transform translate-y-4"
                       x-transition:enter-end="opacity-100 transform translate-y-0"
                       class="mb-8 bg-green-50 border border-green-200 text-green-700 px-6 py-5 rounded-2xl shadow-sm flex items-start">
                    <div class="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-4 flex-shrink-0 mt-0.5">
                      <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div>
                      <p class="font-bold text-lg">Wiadomość wysłana pomyślnie!</p>
                      <p class="text-green-600/80 mt-1">Dziękujemy za kontakt. Nasz zespół odpowie na Twoje zapytanie tak szybko, jak to możliwe.</p>
                    </div>
                  </div>
                  
                  <div x-show="formError"
                       x-transition:enter="transition ease-out duration-300"
                       x-transition:enter-start="opacity-0 transform translate-y-4"
                       x-transition:enter-end="opacity-100 transform translate-y-0"
                       class="mb-8 bg-red-50 border border-red-200 text-red-700 px-6 py-5 rounded-2xl shadow-sm flex items-start">
                    <div class="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mr-4 flex-shrink-0 mt-0.5">
                      <svg class="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <p class="font-bold text-lg">Błąd wysyłania!</p>
                      <p class="text-red-600/80 mt-1" x-text="errorMessage"></p>
                    </div>
                  </div>
                  
                  <form x-show="!formSubmitted" @submit.prevent="submitForm" class="space-y-6">
                    <div class="grid md:grid-cols-2 gap-6">
                      <div>
                        <label for="name" class="block text-sm font-semibold text-gray-700 mb-2">Imię i nazwisko</label>
                        <input 
                          type="text" 
                          id="name" 
                          x-model="name"
                          @blur="setTouched('name')"
                          @input="validateField('name')"
                          placeholder="Jan Kowalski"
                          class="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 focus:bg-white transition-all text-gray-900 placeholder-gray-400"
                          :class="{'border-red-300 focus:ring-red-500 focus:border-red-500 bg-red-50/30': touched.name && errors.name}"
                          :disabled="loading"
                        >
                        <p x-show="touched.name && errors.name" x-transition class="mt-2 text-sm text-red-500 flex items-center">
                          <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                          <span x-text="errors.name"></span>
                        </p>
                      </div>
                      
                      <div>
                        <label for="email" class="block text-sm font-semibold text-gray-700 mb-2">Adres e-mail</label>
                        <input 
                          type="email" 
                          id="email" 
                          x-model="email"
                          @blur="setTouched('email')"
                          @input="validateField('email')"
                          placeholder="jan@example.com"
                          class="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 focus:bg-white transition-all text-gray-900 placeholder-gray-400"
                          :class="{'border-red-300 focus:ring-red-500 focus:border-red-500 bg-red-50/30': touched.email && errors.email}"
                          :disabled="loading"
                        >
                        <p x-show="touched.email && errors.email" x-transition class="mt-2 text-sm text-red-500 flex items-center">
                          <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                          <span x-text="errors.email"></span>
                        </p>
                      </div>
                    </div>
                    
                    <div>
                      <label for="message" class="block text-sm font-semibold text-gray-700 mb-2">Twoja wiadomość</label>
                      <textarea 
                        id="message" 
                        rows="5" 
                        x-model="message"
                        @blur="setTouched('message')"
                        @input="validateField('message')"
                        placeholder="W czym możemy Ci pomóc?"
                        class="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 focus:bg-white transition-all text-gray-900 placeholder-gray-400 resize-none"
                        :class="{'border-red-300 focus:ring-red-500 focus:border-red-500 bg-red-50/30': touched.message && errors.message}"
                        :disabled="loading"
                      ></textarea>
                      <p x-show="touched.message && errors.message" x-transition class="mt-2 text-sm text-red-500 flex items-center">
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <span x-text="errors.message"></span>
                      </p>
                    </div>
                    
                    <div class="pt-4">
                      <button 
                        type="submit" 
                        class="group relative w-full inline-flex items-center justify-center rounded-2xl bg-primary-600 text-white font-medium px-8 py-4 overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-glow disabled:opacity-70 disabled:hover:scale-100 disabled:hover:shadow-none"
                        :disabled="loading"
                      >
                        <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
                        
                        <span x-show="!loading" class="relative flex items-center gap-2">
                          Wyślij wiadomość
                          <svg class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                          </svg>
                        </span>
                        
                        <span x-show="loading" class="relative flex items-center justify-center gap-2" style="display: none;">
                          <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Trwa wysyłanie...
                        </span>
                      </button>
                      <p class="text-xs text-gray-400 mt-4 text-center font-medium">
                        Administratorem Twoich danych osobowych jest Kurcz.pl. Dane przetwarzane są w celu udzielenia odpowiedzi.
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `
  };
} 