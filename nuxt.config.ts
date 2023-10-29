// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  ssr: false,
  routeRules: {
    "/": { prerender: false, ssr: false },
  },
  css: ["~/assets/css/main.css"],
});
