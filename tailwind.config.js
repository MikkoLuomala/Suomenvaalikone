// tailwind.config.js
module.exports = {
  purge: {
    preserveHtmlElements: true,
    content: [
      './src/**/*.html',
      './src/**/*.vue',
      './src/**/*.jsx',
      './components/**/*.{js,vue,ts}',
      './pages/**/*.vue',
      './layouts/**/.vue',
      './plugins/**/*.{js,ts}',
      './nuxt.config.{js,ts}',
    ],
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ]
}
