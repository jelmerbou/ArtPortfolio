export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
  ],

  css: [
    '~/assets/style/tailwind.scss', 
    '~/assets/style/main.scss',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],

  tailwindcss: {
    configPath: '~/tailwind.config.ts', 
  },

  build: {
    transpile: ['@fortawesome/vue-fontawesome']
  },  

  compatibilityDate: '2025-02-26',
});