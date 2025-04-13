module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      colors: {
        'primaryColor': '#246819',
        'ashColorBG': '#f2f6f1',
        'darkAshColor': '#eceef1',
        'successBGColor': '#e5e5e5'
      },
      spacing: {
        84: '22rem',
        100: '26rem',
        120: '33rem',
        130: '38rem'
      }
    },
  },
  plugins: [],
  prefix: "tw-",
}
