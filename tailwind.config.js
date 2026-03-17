/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F4EBE1',       // Much deeper cream to prevent "white out"
        linen: '#EADCC9',       // Darker linen for sections
        warmBrown: '#5C3317',   // Deep chocolate
        mediumBrown: '#8B5A2B',
        blush: '#E8879A',       
        deepRose: '#C45C74',    
        softRose: '#DEA5A4',    
        sageGreen: '#A8B89A',   
        goldAccent: '#D4AF37',  // Adjusted to a truer gold for visibility against darker cream
        champagne: '#F7E7CE'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Cormorant Garamond', 'serif'],
        body: ['Outfit', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
