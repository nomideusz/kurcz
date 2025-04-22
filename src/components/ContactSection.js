export default function() {
  return {
    formSubmitted: false,
    name: '',
    email: '',
    message: '',
    
    submitForm() {
      // Normally this would submit to a server
      this.formSubmitted = true;
      
      // Reset form after submission
      setTimeout(() => {
        this.formSubmitted = false;
        this.name = '';
        this.email = '';
        this.message = '';
      }, 3000);
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
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  class="w-full bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
                >
                  Wyślij wiadomość
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