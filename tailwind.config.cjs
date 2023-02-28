/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["GeneralSans-Variable", "Arial", "sans-serif"],
    },
    extend: {
      spacing: {
        "5%": "5%",
        "8%": "8%",
        "10%": "10%",
      },
    },
  },
  plugins: [],
};
