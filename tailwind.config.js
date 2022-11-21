/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  // purge: [
  //   "./assets/**/*.{css}",
  //   "./components/*.{vue,js}",
  //   "./components/**/*.{vue,js}",
  //   "./pages/*.vue",
  //   "./pages/**/*.vue",
  //   "./plugins/**/*.{js,ts}",
  //   "./*.{vue,js,ts}",
  //   "./nuxt.config.{js,ts}",
  // ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    // https://github.com/tailwindlabs/tailwindcss-forms
    require('@tailwindcss/forms'),
    // https://github.com/tailwindlabs/tailwindcss-aspect-ratio
  ],
}
