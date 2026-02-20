import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['./app/assets/css/main.css'],

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    // '@nuxtjs/google-adsense',
    '@nuxtjs/i18n'
  ],

  vite: {
    plugins: [
      tailwindcss(),
    ]
  },

  app: {
    head: {
      htmlAttrs: { lang: "es" },
      title: "Mercado Campesino de Acuarela | Mesa de los Santos, Santander",
      meta: [
        {
          name: "description",
          content:
            "Descubre el Mercado Campesino de Acuarela en la Mesa de los Santos, Santander, Colombia. Comida típica, cafeterías, juegos, postres y más. Cerca al Cañón de Chicamocha.",
        },
        {
          name: "keywords",
          content:
            "Mercado Campesino, Acuarela, Mesa de los Santos, Santander, Colombia, turismo, Cañón de Chicamocha",
        },
        {
          name: "theme-color",
          media: "(prefers-color-scheme: light)",
          content: "#432004",
        },
        {
          name: "theme-color",
          media: "(prefers-color-scheme: dark)",
          content: "#18181b",
        },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          property: "og:title",
          content: "Mercado Campesino de Acuarela",
        },
        {
          property: "og:description",
          content:
            "Un mercado con calidad turística en la Mesa de los Santos, Santander. Comida típica, cafeterías, restaurantes y más.",
        },
        { property: "og:type", content: "website" },
      ],
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap",
        },
      ],
    },
  },
})
