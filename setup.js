#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

console.log('Starting setup script for Kurcz.pl website...');

// Ensure directories exist
const dirs = [
  path.join(__dirname, 'src', 'js', 'components'),
  path.join(__dirname, 'public')
];

dirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    console.log(`Creating directory: ${dir}`);
    fs.mkdirSync(dir, { recursive: true });
  } else {
    console.log(`Directory already exists: ${dir}`);
  }
});

// Copy component files from src/components to src/js/components if they don't exist
const componentsToMove = {
  'accordion': {
    content: `export default function() {
  return {
    open: false,
    toggle() {
      this.open = !this.open;
    }
  };
}`
  },
  'darkMode': {
    content: `export default function() {
  return {
    isDark: false,
    init() {
      this.isDark = localStorage.getItem('darkMode') === 'true';
      this.toggleDarkMode();
    },
    toggleDarkMode() {
      this.isDark = !this.isDark;
      localStorage.setItem('darkMode', this.isDark);
      document.documentElement.classList.toggle('dark', this.isDark);
    }
  };
}`
  },
  'navigation': {
    content: `export default function() {
  return {
    isOpen: false,
    activeSection: 'home',
    
    init() {
      // Set the active section based on the current URL
      const path = window.location.pathname;
      if (path.includes('treatment')) {
        this.activeSection = 'treatment';
      } else if (path.includes('about')) {
        this.activeSection = 'about';
      } else if (path.includes('contact')) {
        this.activeSection = 'contact';
      }
      
      // Add scroll listener to update active section
      window.addEventListener('scroll', () => this.updateActiveSection());
    },
    
    toggle() {
      this.isOpen = !this.isOpen;
    },
    
    updateActiveSection() {
      // Logic to update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.pageYOffset;
      
      sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          this.activeSection = sectionId;
        }
      });
    }
  };
}`
  }
};

Object.entries(componentsToMove).forEach(([component, info]) => {
  const targetFile = path.join(__dirname, 'src', 'js', 'components', `${component}.js`);
  
  if (!fs.existsSync(targetFile)) {
    console.log(`Creating component file: ${targetFile}`);
    fs.writeFileSync(targetFile, info.content);
  } else {
    console.log(`Component file already exists: ${targetFile}`);
  }
});

// Ensure public/tailwind.css exists
const tailwindCssPath = path.join(__dirname, 'public', 'tailwind.css');
if (!fs.existsSync(tailwindCssPath)) {
  console.log('Creating empty tailwind.css file');
  fs.writeFileSync(tailwindCssPath, '/* This file will be populated by the tailwind build process */');
}

console.log('Setup completed successfully!');
console.log('Now run: npm run dev'); 