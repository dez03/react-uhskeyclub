module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      md: "410px",
      tb: "750px",
      lg: "765px",
      xl: "1024px",
    },
  },
  plugins: [
	  require('@tailwindcss/aspect-ratio'),
],

};
