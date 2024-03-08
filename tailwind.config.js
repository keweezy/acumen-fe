/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "active-orange": "#EA8D51",
        "border-gray": "#EFF1F6",
        "text-black": "#131316",
        "light-gray": "#8D9091",
        "icon-gray-bg": "#F5F7FC",
        "light=gray-200": "#566BA0",
        "almost-gray": "#E7E9FF",
        "table-title": "#9999BC",
        "deep-black": "#071439",
        "brand-blue": "#4568D1",
        "dark-02": "#51545C",
        "light-orange": "#FFF1E9",
        "brand-green": "#15AE73",
        "brand-blue": "#0546E0",
        "disabled-gray": "#919EAB",
        "almost-white":"#C4CDD5"
      },
    },
  },
  plugins: [],
};
