// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    ["@pinia/nuxt", {
      autoImports: [
        "defineStore",
        "acceptHMRUpdate"
      ]
    }],
  ],
  imports: {
    dirs: ["stores"]
  },
  alias: {
    pinia: '/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs'    
  },
  routeRules: {
    '/spa': { ssr: false },
    '/static' : { static: true },
    '/swr' : { swr: true },
  }
})
