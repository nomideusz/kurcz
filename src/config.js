// Email service configuration
export const emailConfig = {
  // EmailJS configuration
  // To set up EmailJS:
  // 1. Sign up at https://www.emailjs.com/
  // 2. Create a new email service (Gmail, Outlook, etc.)
  // 3. Create a new email template with template variables: from_name, reply_to, message
  // 4. Get your keys and IDs from the EmailJS dashboard
  // 5. Replace the values below with your actual keys
  //
  // For better security in production:
  // - Add these values to environment variables
  // - For Vite/webpack projects: VITE_EMAILJS_PUBLIC_KEY, VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID
  // - For other environments: EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID
  //
  // To use Mailtrap for testing:
  // 1. Sign up for Mailtrap (https://mailtrap.io/)
  // 2. Create a testing inbox
  // 3. In EmailJS, create a second email service using SMTP settings from Mailtrap
  // 4. Add the service ID for that Mailtrap service below
  emailjs: {
    // Najpierw spróbuj użyć zmiennych środowiskowych, jeśli nie są dostępne, użyj stałych wartości
    // Te dane są TYLKO DO TESTOWANIA i NIE będą działać w produkcji
    publicKey: tryGetEnv('VITE_EMAILJS_PUBLIC_KEY', 'EMAILJS_PUBLIC_KEY') || 
               'PCz-HGcaS0b9F2HgU',
    
    serviceId: tryGetEnv('VITE_EMAILJS_SERVICE_ID', 'EMAILJS_SERVICE_ID') || 
               'service_odredbg',
    
    // Zaktualizowany poprawny ID szablonu dla produkcji
    templateId: tryGetEnv('VITE_EMAILJS_TEMPLATE_ID', 'EMAILJS_TEMPLATE_ID') || 
                'template_58mu3e2',
                
    // Service ID dla usługi Mailtrap w EmailJS - używane tylko w trybie deweloperskim
    mailtrapServiceId: tryGetEnv('VITE_EMAILJS_MAILTRAP_SERVICE_ID', 'EMAILJS_MAILTRAP_SERVICE_ID') || 
                       'service_mailtrap'
  }
};

// Pomocnicza funkcja do bezpiecznego pobierania zmiennych środowiskowych
function tryGetEnv(...keys) {
  // Próbuj pobrać wartość z import.meta.env
  if (typeof import.meta !== 'undefined' && import.meta.env) {
    for (const key of keys) {
      if (import.meta.env[key]) {
        return import.meta.env[key];
      }
    }
  }
  
  // Próbuj pobrać wartość z process.env
  if (typeof process !== 'undefined' && process.env) {
    for (const key of keys) {
      if (process.env[key]) {
        return process.env[key];
      }
    }
  }
  
  // Nie znaleziono żadnej wartości
  return null;
} 