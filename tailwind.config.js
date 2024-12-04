// tailwind.config.js
/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Add custom colors if needed
        // Example:
        // 'custom-dark': '#333',
      },
    },
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: [
      {
        dark: {
          "primary": "#1d4ed8", // Blue
          "secondary": "#9333ea", // Purple
          "accent": "#22c55e", // Green
          "neutral": "#2d3748", // Dark gray
          "base-100": "#1a202c", // Dark background
        },
      },
      "light", // You can keep the light theme as a fallback
    ],
  },
}
