/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        //main background
        "primary-bg": "#0F172A",
        "secondary-bg": "#0F172A",
        //main text
        "primary-txt": "#E5E7EB",
        "secondary-txt": "#9CA3AF",
        "blur-txt": "#6B7280",
        //Effect
        "primary-accent": "#3B82F6",
        "soft-accent": "#2563EB",
        "hover-active": "#60A5FA",
        //Border
        "primary-border": "#60A5FA",
        "light-divider": "#374151",
        //Navbar
        "navbar-bg": "#374151",
        "navbar-txt": "#9CA3AF",
        "navbar-hover": "#E5E7EB",
        "navbar-txt-active": "#3B82F6",
        "navbar-underline": "#3B82F6",
      },
    },
  },
  plugins: [],
};
