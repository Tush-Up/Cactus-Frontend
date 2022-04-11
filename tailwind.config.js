module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0px 104px 80px 32px rgba(33, 33, 33, 0.03)",
      },
      colors: {
        "cactus-dark-brown": "#B38B59",
        "black": "#212121",
        "light-white": "#ffffff",
      },
      backgroundImage: {
        auth: "url('/src/assets/auth-bg.png')",
      },
    },
  },
  plugins: [],
};
