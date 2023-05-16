/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "navbar-color": "#3a4457",
        "navbar-mobile-menu-color": "#eaf1ff",
        "navbar-hover-color": "#F21C73",
      },
      fontFamily: {
        sourceCode: "'Source Code Pro', monospace",
      },
    },
  },
  plugins: [],
};
