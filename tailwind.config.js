export default {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    fontFamily:{
      // titilium: ["'Titilium Web'", 'sans-serif']
      amaranth: ["'Amaranth'", "sans-serif"],
      titillium: ["'Titillium Web'", "sans-serif"]
    },
    extend: {
      dropShadow: {
        glow: [
          "0 0px 20px rgba(255,255, 255, 0.35)",
          "0 0px 65px rgba(255, 255,255, 0.2)"
        ]
      }
    },
  },
  plugins: [],
}