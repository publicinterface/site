// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'Public Interface Exhibtion Society',
      meta: [
        {name: 'description', content: 'An artist-run centre that interfaces with the public'},
        {name: 'author', content: 'tryl.es'}
      ],
      link: [
        {
          href: 'https://fonts.googleapis.com/css2?family=Helvetica:wght@100',
          rel: 'stylesheet',
        },
      ]
    }
  },
  modules: [
    '@nuxt/content',
    '@nuxt/image-edge',
    // '@pinia/nuxt'
  ],
  content: {
    // https://content.nuxtjs.org/api/configuration
  },
  image: {
    dir: 'public/img',
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
