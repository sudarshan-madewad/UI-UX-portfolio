/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        base: "rgb(var(--base) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        text: "rgb(var(--text) / <alpha-value>)",
        subtle: "rgb(var(--subtle) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        accent2: "rgb(var(--accent2) / <alpha-value>)",
        ring: "rgb(var(--ring) / <alpha-value>)"
      },
      fontFamily: {
        display: ["Poppins", "ui-sans-serif", "system-ui"],
        body: ["Poppins", "ui-sans-serif", "system-ui"]
      },
      boxShadow: {
        lift: "0 20px 40px -24px rgba(0, 0, 0, 0.4)",
        liftLight: "0 20px 40px -24px rgba(10, 25, 47, 0.25)"
      }
    }
  },
  plugins: []
};
