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
  // - Add these values to environment variables using a .env file
  // - For Vite projects: VITE_EMAILJS_PUBLIC_KEY, VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID
  emailjs: {
    // Direct values for EmailJS config
    publicKey: 'PCz-HGcaS0b9F2HgU',
    serviceId: 'service_odredbg',
    templateId: 'template_58mu3e2'
    // Removed mailtrapServiceId to prevent authentication issues
  }
};

// Note: If you need environment variables in the future:
// 1. Create a .env file in the project root
// 2. Add values like: VITE_EMAILJS_PUBLIC_KEY=your_key
// 3. Access them via import.meta.env.VITE_EMAILJS_PUBLIC_KEY 