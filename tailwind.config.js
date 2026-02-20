/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#1A2B3C',      // Azul medianoche
        'oil-blue': '#2C3E50',    // Azul petróleo
        'bright-blue': '#3498DB', // Azul brillante
        'gray-light': '#ECF0F1',  // Gris claro
        white: '#FFFFFF',
        coral: '#E74C3C',         // Rojo coral
        success: '#27AE60',        // Verde éxito
        warning: '#F39C12',        // Naranja
        'gray-medium': '#7F8C8D',  // Gris medio
      }
    },
  },
  plugins: [],
}