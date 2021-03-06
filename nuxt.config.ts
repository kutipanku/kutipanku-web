import colors from 'vuetify/es5/util/colors';

export default {
  ssr: true,
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s',
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      {
        hid: 'google-site-verification',
        name: 'google-site-verification',
        content: '96JgKVL4hD45lgoAB2MKKLbS-jbGsbUajQPmTBAGM8A'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/styles/global.stylus'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '~/plugins/persistedstate', ssr: false }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/vuetify'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    'cookie-universal-nuxt',
    '@nuxtjs/sitemap'
  ],
  // @nuxtjs/pwa module configuration
  pwa: {
    manifest: {
      name: 'Kutipanku',
      short_name: 'Kutipanku', // eslint-disable-line @typescript-eslint/camelcase
      lang: 'id',
      useWebmanifestExtension: false,
      start_url: '/', // eslint-disable-line @typescript-eslint/camelcase
      theme_color: '#ff6666' // eslint-disable-line @typescript-eslint/camelcase
    }
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/styles/variables.scss'],
    theme: {
      dark: false,
      options: { customProperties: true },
      themes: {
        dark: {
          primary: '#d74046',
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          background: colors.grey.darken3,
          active: '#ffffff',
          inverse: '#ffffff'
        },
        light: {
          primary: '#d74046',
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          background: colors.grey.lighten2,
          active: '#ff6666',
          inverse: '#ffffff'
        }
      }
    }
  },
  sitemap: {
    hostname: 'https://kutipanku.id',
    routes: ['/quotes/1', '/quotes/2', '/quotes/3', '/quotes/4', '/quotes/5']
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    templates: [
      {
        src: './templates/robots.txt',
        dst: '../static/robots.txt',
        options: {
          env: process.env.NODE_ENV
        }
      }
    ]
  }
};
