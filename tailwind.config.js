/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bgDesktop': "url('/images/bg-intro-desktop.svg')",
        'bgMobile': "url('/images/bg-intro-mobile.svg')",
      },
      colors: {
        primary: {
          blue: "hsl(233, 26%, 24%)",
          green: "hsl(136, 65%, 51%)",
          cyan: "hsl(192, 70%, 51%)"
        },
        neutral: {
          grayishBlue: "hsl(233, 8%, 62%)",
          lightGrayishBlue: "hsl(220, 16%, 96%)",  
          lightGray: "hsl(0, 0%, 98%)",
          white: "hsl(0, 0%, 100%)"
        }
      }
    },
  },
  plugins: [],
};
