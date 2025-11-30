/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
    corePlugins: {
      preflight: false, // Keeps your existing styles safe
    },
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        borderRadius: {
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2px)",
          sm: "calc(var(--radius) - 4px)",
        },
        colors: {
          background: "hsl(var(--background))",
          foreground: "hsl(var(--foreground))",
          card: {
            DEFAULT: "hsl(var(--card))",
            foreground: "hsl(var(--card-foreground))",
          },
          border: "hsl(var(--border))",
          input: "hsl(var(--input))",
          ring: "hsl(var(--ring))",
          primary: {
            DEFAULT: "hsl(var(--primary))",
            foreground: "hsl(var(--primary-foreground))",
          },
      },
      fontFamily: {
        alex: ['alexBrush', 'cursive'],
        courier: ['courierPrime', 'monospace'],
        gothic: ['allRoundGothic', 'allRoundGothicBold', 'sans-serif'],
        gothicBold: ['allRoundGothicBold'],

      },
    },
  },
    plugins: [require("tailwindcss-animate")],
  }