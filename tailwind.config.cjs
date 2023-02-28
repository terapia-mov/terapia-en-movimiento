/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["GeneralSans-Variable", "Arial", "sans-serif"],
    },
    colors: {
      "m-white": "#FFFFFF",
      "m-black": "#000000",
      "m-orange": "#E5A861",
      "m-yellow": "#F1CB7E",
      "m-pink": "#F5B9A3",
      "m-off-white": "#F6F5F3",
      "m-dark-blue": "#273A54",
      "m-blue": "#869DC1",
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
