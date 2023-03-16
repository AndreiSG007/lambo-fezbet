// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Lambo Promo - Fezbet",
      link: [{ rel: "icon", type: "image/*", href: "/favicon.ico" }],
    },
    baseURL: '/mateadmin/fezbet/',
  },
  css: [
    // SCSS file in the project
    "~/assets/css/main.scss",
  ],
  modules: ["@nuxtjs/i18n", "@nuxt/image-edge"],
  buildModules: ["@nuxtjs/google-fonts"],
  i18n: {
    strategy: "prefix_except_default",
    locales: [
      {
        code: "en",
        file: "en.json",
      },
      {
        code: "de",
        file: "de.json",
      },
      {
        code: "it",
        file: "it.json",
      },
      {
        code: "fi",
        file: "fi.json",
      },
      {
        code: "pl",
        file: "pl.json",
      },
    ],
    defaultLocale: "en", // default locale of your project for Nuxt pages and routings
    detectBrowserLanguage: false,
    langDir: "lang",
  },
  googleFonts: {
    families: {
      Oswald: [400, 500, 700],
    },
    display: "swap",
  },
  generate: {
    routes: ['/', '/de', '/it', '/pl', '/fi']
  }
});
