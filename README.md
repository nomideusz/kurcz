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
pnpm install

# Start development server with hot reload
pnpm dev
```

## External Links

- [Facebook](https://www.facebook.com/profile.php?id=61575552422497)
- [Kompi](https://kompi.pl)
- [Wibroakustyka](https://wibroakustyka.pl)
- [Intertech Poland](https://intertecchpoland.pl)
- [Zaur App](https://zaur.app)

## License

MIT 