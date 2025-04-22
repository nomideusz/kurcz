export default function() {
  return {
    open: false,
    toggle() {
      this.open = !this.open;
    }
  };
} 