/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
    "./src/components/**/*.{js,html}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3b82f6',
          dark: '#2563eb',
          light: '#60a5fa'
        },
        secondary: {
          DEFAULT: '#10b981',
          dark: '#059669',
          light: '#34d399'
        },
        background: {
          light: '#f9fafb',
          dark: '#f3f4f6'
        },
        text: {
          DEFAULT: '#374151',
          light: '#6b7280',
          dark: '#1f2937'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'sans-serif']
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      }
    },
  },
  plugins: [],
}