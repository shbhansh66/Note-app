// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // यहाँ अपने कॉम्पोनेंट फ़ाइलों के पाथ जोड़ें, जैसे:
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // 👇 कस्टम यूटिलिटी जोड़ने के लिए यह प्लगइन जोड़ें
    function ({ addUtilities }) {
      const newUtilities = {
        '.scroll-smooth': {
          'scroll-behavior': 'smooth',
        },
      }
      addUtilities(newUtilities, ['responsive'])
    }
  ],
}