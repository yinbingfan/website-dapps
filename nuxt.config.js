const pkg = require("./package")

module.exports = {
  mode: "universal",

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "green" },

  /*
   ** Global CSS
   */
  css: ["~assets/css/element-ui.css", "~assets/css/normalize.css"],
  router: {
    middleware: "i18n"
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "~plugins/i18n.js",
    "~plugins/filters.js",
    "~plugins/vue-social-sharing.js",
    "~plugins/vue-clipboard.js",
    "~plugins/vue-qriously.js",
    "~plugins/vue-lazyload.js",
    "~plugins/mixin.js",
    '~/plugins/axios',
    { src: "~plugins/element-ui.js", ssr: true }
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    "@nuxtjs/axios"
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    credentials: false,
    // baseURL: "https://apid.thedbit.com",
    // browserBaseURL: "https://apid.thedbit.com",
    baseURL: process.env.API_URL || 'http://172.30.10.50:39080',//开发环境
    browserBaseURL: process.env.API_URL || 'http://172.30.10.50:39080',//开发环境
    //  baseURL: 'http://172.30.10.50:39080',//开发环境
    // browserBaseURL:'http://172.30.10.50:39080',//开发环境
    // baseURL: 'http://172.30.30.186:9080',//newk
    // browserBaseURL: 'http://172.30.30.186:9080',//newk
    // baseURL: 'http://172.30.30.99:9080',//john
    // browserBaseURL: 'http://172.30.30.99:9080',//john
    retry: { retries: 3 }
    // proxyHeaders: false,
    // prefix: '/json/',
    // proxy: true,
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend() {}
  }
}
