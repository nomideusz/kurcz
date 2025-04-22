# Kurcz.pl Project Structure

This document explains the project structure for the Kurcz.pl website, which has been modernized with a proper build system and modular architecture.

## Directory Structure

```
kurcz/
├── dist/                  # Production build output (generated)
├── node_modules/          # Dependencies (generated)
├── public/                # Static assets that won't be processed
├── src/                   # Source code
│   ├── css/               # CSS styles
│   │   ├── legacy/        # Legacy CSS (original styles)
│   │   └── styles.css     # Main CSS file with Tailwind directives
│   ├── js/                # JavaScript files
│   │   ├── components/    # Alpine.js components
│   │   │   ├── accordion.js
│   │   │   ├── counter.js
│   │   │   ├── darkMode.js
│   │   │   └── navigation.js
│   │   └── main.js        # Main JavaScript entry point
│   └── main.js            # Main entry point that imports CSS and JS
├── index.html             # Main HTML file
├── package.json           # Project metadata and dependencies
├── postcss.config.js      # PostCSS configuration
├── README.md              # Project documentation
├── tailwind.config.js     # Tailwind CSS configuration
└── vite.config.js         # Vite build tool configuration
```

## Core Technologies

- **Vite**: Modern build tool for fast development and optimized production builds
- **Alpine.js**: Lightweight JavaScript framework for interactive UI components
- **Tailwind CSS**: Utility-first CSS framework for modern styling
- **PostCSS**: CSS processing pipeline

## Component Structure

The project uses Alpine.js for interactive components. Each component is defined in its own file in the `src/js/components/` directory:

- **navigation.js**: Handles the navigation menu, including mobile toggle and active section highlighting
- **accordion.js**: Reusable accordion component for expandable sections
- **darkMode.js**: Manages dark mode functionality with localStorage persistence
- **counter.js**: Example component for demonstrating Alpine.js state management

## CSS Organization

The CSS is organized into several layers:

1. **Legacy styles**: The original site styles are maintained in `src/css/legacy/styles.css`
2. **Tailwind layers**: We use Tailwind's layer system (@layer) to organize new CSS:
   - `@layer base`: Core styles for HTML elements
   - `@layer components`: Reusable UI components
   - `@layer utilities`: Custom utility classes

## Development Workflow

1. **Development**: Run `npm run dev` to start the development server with hot module reloading
2. **Building**: Run `npm run build` to create an optimized production build
3. **Preview**: Run `npm run preview` to preview the production build locally

## Deployment

The project is set up for deployment with Docker. The Dockerfile includes:

1. A build stage that compiles the source code
2. A production stage that serves the built files with Nginx 