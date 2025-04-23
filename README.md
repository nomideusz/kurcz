# Kurcz.pl - Website about Muscle Cramps

This is a website providing comprehensive information about muscle cramps, their causes, symptoms, treatment, and prevention strategies.

## Technology Stack

- HTML5
- CSS3 with TailwindCSS
- Alpine.js for interactive UI components
- Vite for build and development

## Development

### Prerequisites

- Node.js (v16+)
- pnpm (v7+)

### Setup

1. Clone the repository:
```
git clone <repository-url>
cd kurcz-website
```

2. Install dependencies:
```
pnpm install
```

3. Start development server:
```
pnpm dev
```

The development server will start at http://localhost:5173 with hot reload enabled for both JavaScript and CSS changes.

### Building for Production

To build the site for production:

```
pnpm build
```

The built files will be available in the `dist` directory.

To preview the production build locally:

```
pnpm preview
```

### Deployment with Captain Deploy

This project is configured to work with Captain Deploy:

1. Install [Captain Deploy](https://getcaptain.co/)
2. The project includes a `captain-definition` file for deployment configuration

## Project Structure

- `src/` - Source files
  - `js/` - JavaScript files
    - `components/` - Alpine.js components
      - `accordion.js` - Accordion component 
      - `navigation.js` - Navigation with mobile menu toggle
    - `main.js` - Alpine.js configuration and initialization
  - `css/` - CSS files
    - `styles.css` - Main CSS with Tailwind directives
  - `main.js` - Main entry point
  - `components/` - Website component templates
- `index.html` - Main HTML file
- `public/` - Static assets that don't need processing
- `dist/` - Production build output (generated)

## Alpine.js Components

The website uses a modular Alpine.js architecture where each interactive component is defined in its own file:

- **Accordion Component**: Handles expandable sections like FAQs and treatment steps
- **Navigation Component**: Handles mobile menu toggling and active section highlighting

## Generating Favicon and Icons

The project includes a favicon generator for creating consistent icons:

1. Open `/public/generate-favicon.html` in your browser
2. Click the "Generate All Favicons" button
3. Right-click on each canvas and select "Save Image As" to download
4. Save the files to the appropriate locations in the `/public` directory:
   - favicon.ico
   - favicon-16x16.png
   - favicon-32x32.png
   - apple-touch-icon.png
   - android-chrome-192x192.png
   - android-chrome-512x512.png
   - og-image.jpg

## Quick Start

Run the following commands to get started:

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## External Links

- [Facebook](https://www.facebook.com/profile.php?id=61575552422497)
- [Kompi](https://kompi.pl)
- [Wibroakustyka](https://wibroakustyka.pl)
- [Intertech Poland](https://intertecchpoland.pl)
- [Zaur App](https://zaur.app)

## License

MIT

## Contact Form Setup

To enable the contact form functionality, you need to set up EmailJS:

1. Sign up for a free account at [EmailJS](https://www.emailjs.com/)
2. Create a new email service (Gmail, Outlook, etc.) in your EmailJS dashboard
3. Create a new email template with the following template variables:
   - `from_name` - Sender's name
   - `reply_to` - Sender's email
   - `message` - The message content

4. Get your credentials:
   - Public Key (from Account Settings)
   - Service ID (from the Email Services tab)
   - Template ID (from the Email Templates tab)

5. Set up your credentials using one of these methods:

### Option 1: Update config.js directly (for development)

Open `src/config.js` and replace the placeholder values:

```js
emailjs: {
  publicKey: 'your_actual_public_key_here',
  serviceId: 'your_actual_service_id_here',
  templateId: 'your_actual_template_id_here'
}
```

### Option 2: Use environment variables (recommended for production)

Create a `.env` file in the root directory with:

```
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key_here
VITE_EMAILJS_SERVICE_ID=your_actual_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id_here
```

**Important**: Never commit `.env` files with actual credentials to version control. Add `.env` to your `.gitignore` file.

### Adding Mailtrap for Email Testing

The contact form includes a developer toggle for test mode using Mailtrap:

1. Sign up for a free account at [Mailtrap](https://mailtrap.io/)
2. Go to Email Testing → Inboxes and view your inbox
3. In EmailJS, create a new email service:
   - Go to Email Services → Add New Service → SMTP
   - Enter a unique Service ID like 'mailtrap'
   - Use the SMTP credentials from your Mailtrap inbox:
     - Host: sandbox.smtp.mailtrap.io
     - Port: 2525
     - Username: (from Mailtrap inbox)
     - Password: (from Mailtrap inbox)
   - Select "Sending" as the email feature

4. Add the Mailtrap service ID to your configuration:

```js
// In config.js
emailjs: {
  // ... other settings
  mailtrapServiceId: 'your_mailtrap_service_id_here'
}
```

Or with environment variables:

```
VITE_EMAILJS_MAILTRAP_SERVICE_ID=your_mailtrap_service_id_here
```

5. When developing, click the "Dev Options" text below the contact form to toggle test mode
   - In test mode, emails will be sent to your Mailtrap inbox instead of real recipients

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
``` 