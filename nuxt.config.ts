// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Landing page",
      link: [
        { rel: "icon", type: "image/*", href: "/favicon.ico" },
        {
          rel: "stylesheet",
          href: "https://use.typekit.net/xom8nwh.css",
        },
      ],
    },
  },
  css: [
    // SCSS file in the project
    "~/assets/css/main.scss",
  ],
  modules: ["@nuxtjs/i18n", "@nuxt/image-edge"],
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
});
