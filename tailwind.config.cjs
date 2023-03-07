/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xsx: '0.6rem',
        xlx: '1.35rem',
        date: '40px',
        day: '13px',
        small: '11px',
        head: '15px',
        most: '1.125rem',
        extrasmall: '10px'
      },
      colors: {
        'palatte-1' : '#1D2F6F',
        'palatte-2' : '#8390FA',
        'palatte-3' : '#FAC748',
        'palatte-4' : '#F9E9EC',
        'palatte-5' : '#F88DAD',
      }
    },
  }
}
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      opacity: {
        '16': '.16',
        '0': '0',
        '100': '100'
      },
      backgroundImage: {
        "head-img": "../public/images/head-bg.png"
      },
      colors: {
        'palatte-1' : '#1D2F6F',
        'palatte-2' : '#8390FA',
        'palatte-3' : '#FAC748',
        'palatte-4' : '#F9E9EC',
        'palatte-5' : '#F88DAD',
        'palatte-6' : '#fb8500',
        'palatte-7' : '#90be6d',
        'palatte-8' : '#00b4d8',
        "fb" : "#4267b2",
        "tw" : "#00acee",
        "ln" : "#0072b1",
        "wp" : "#1e7d34",
        "reddit" : "#ED001C",
        "from": "#1B62D4",
        "to": "#0B4A84",
        "contact": "#258DDE",
        "switch": "#0A2ECC",
        "lowVol": "#EEFFF5",
        "middleVol": "#FFFAEB",
        "highVol": "#FFF2F2",
        "warning": "#FFBF00",
        "clear": "#128745",
        "danger": "#DC2A2A",
        "user": "#F5F7FA",
        "subtitle": "#666666",
        "yuzyuze": "#F0E6FF",
        "cevrimici": "#F3FAFF",
        "icon": "#F5F7FA",
        "footer-bg": "#F5F5F5",
        "footer-bg-border": "#E1E1E1",
        "footer-text": "#292929"
      },
      fontSize: {
        xsx: '0.6rem',
        xlx: '1.35rem',
        date: '40px',
        day: '12px',
        small: '11px',
        head: '15px',
        most: '1.125rem',
        extrasmall: '10px',
        filterHead: '16px'
      },
    },
  },
  plugins: [],
});