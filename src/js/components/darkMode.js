export default function() {
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
} 