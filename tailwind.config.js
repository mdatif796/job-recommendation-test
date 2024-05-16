/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        whitesmoke: "#f6f6f6",
        white: "#fff",
        darkgray: {
          "100": "#a2a3a7",
          "200": "rgba(162, 163, 167, 0.5)",
        },
        darkorange: "#ff9800",
        black: "#000",
        gainsboro: {
          "100": "#e8e7ec",
          "200": "#e4e4e4",
        },
        floralwhite: "#fffbf5",
        darkslategray: "#222c4d",
        slategray: "#545e80",
        silver: "#c9c9c9",
      },
      spacing: {},
      fontFamily: {
        montserrat: "Montserrat",
        inter: "Inter",
      },
      borderRadius: {
        "3xs": "10px",
        "64xl": "83px",
        "31xl": "50px",
        "8xs": "5px",
        xl: "20px",
      },
    },
    fontSize: {
      "5xl": "1.5rem",
      lg: "1.125rem",
      xl: "1.25rem",
      base: "1rem",
      "107xl-2": "7.888rem",
      "13xl": "2rem",
      "31xl": "3.125rem",
      lgi: "1.188rem",
      sm: "0.875rem",
      inherit: "inherit",
    },
    // screens: {
    //   mq1350: {
    //     raw: "screen and (min-width: 1350px)",
    //   },
    //   mq1150: {
    //     raw: "screen and (max-width: 1150px)",
    //   },
    //   mq800: {
    //     raw: "screen and (max-width: 800px)",
    //   },
    //   mq450: {
    //     raw: "screen and (max-width: 450px)",
    //   },
    // },
  },
  corePlugins: {
    preflight: false,
  },
};
