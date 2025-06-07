// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "bounce-faster": {
          "0%, 100%": { transform: "translateY(-25%)", animationTimingFunction: "cubic-bezier(0.8,0,1,1)" },
          "50%": { transform: "translateY(0)", animationTimingFunction: "cubic-bezier(0,0,0.2,1)" },
        },
      },
        fontFamily: {
        'roboto-serif': ['Roboto Serif', 'serif'],
      },
      animation: {
        "bounce-faster": "bounce-faster 0.3s infinite", // faster duration
      },
    },
  },
  plugins: [],
};
