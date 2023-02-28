/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["GeneralSans-Variable", "Arial", "sans-serif"],
    },
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      orange: "#E5A861",
      yellow: "#F1CB7E",
      pink: "#F5B9A3",
      "off-white": "#F6F5F3",
      "dark-blue": "#273A54",
      blue: "#869DC1",
    },
    extend: {
      spacing: {
        "5%": "5%",
        "8%": "8%",
        "10%": "10%",
      },
      scale: {
        102: "1.025",
        105: "1.05",
      },
    },
  },
  plugins: [],
};
