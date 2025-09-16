/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary colors
        'primary': '#6E07F3',
        'secondary': '#0096FF',
        'accent': '#2ECC71',
        
        // Neutrals
        'rich-black': '#121212',
        'off-white': '#F9F9F9',
        'slate-gray': '#6C757D',
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        'heading': ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 8px 30px rgba(0,0,0,0.12)',
        'card-hover': '0 10px 40px rgba(0,0,0,0.15)',
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(135deg, #6E07F3 0%, #0096FF 100%)',
        'secondary-gradient': 'linear-gradient(135deg, #0096FF 0%, #2ECC71 100%)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.7s ease-in-out forwards',
        'slide-up': 'slideUp 0.7s ease-out forwards',
        'slide-down': 'slideDown 0.7s ease-out forwards',
      },
    },
  },
  plugins: [],
}