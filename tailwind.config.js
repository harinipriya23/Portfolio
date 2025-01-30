/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "serif"],
      },
      backgroundImage: {
        "radial-gradient": "radial-gradient(var(--tw-gradient-stops))",
        "radial-gradient-to-top":
          "radial-gradient(circle at top,var(--tw-gradient-stops))",
        "conic-gradient": "conic-gradient(at top,var(--tw-gradient-stops))",
      "conic-gradient-center": "conic-gradient(var(--tw-gradient-stops))",
     },
      screens: {
        xsm: "350px",
        xs: "476px",
        sm: "640px",
        md: "768px",
        bs: "900px",
        lg: "1024px",
        xl: "1280px",
        '2xl': "1536px",
      },animation: {
        'slow-spin': 'slow-spin 5s linear infinite', // 20s for slow spinning
      },
      keyframes: {
        'slow-spin': {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
      },
         },
  },
  plugins: [],
};
