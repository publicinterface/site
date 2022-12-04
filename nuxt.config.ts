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
      // link: [
      //   {rel: 'stylesheet', href: 'some-link.com'}
      // ]
    }
  },
  modules: [
    '@nuxt/content',
    '@nuxt/image-edge'
  ],
  content: {
    // https://content.nuxtjs.org/api/configuration
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
