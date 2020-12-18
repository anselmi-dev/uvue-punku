const Cookies = require('js-cookie')

export default {
  plugins: [
    [
      '@uvue/core/plugins/middlewares',
      {
        middlewares: [
          /**
           * If user come to this application we check is already logged.
           * Result will be stored in Vuex to be used anywhere in Vue application.
           */
          async ({ store, $http }) => {
            const {data} = await $http.get('/users/myProfile');
            store.commit('auth/user', data.user)
          },
        ],
      },
    ],
    // Add asyncData() process to page components
    '@uvue/core/plugins/asyncData',
    // Vuex plugin
    [
      '@uvue/core/plugins/vuex',
      {
        onHttpRequest: true,
        fetch: true,
      },
    ],
    // Catch errors
    '@uvue/core/plugins/errorHandler',
    // HTTP client to get data from API
    '@/plugins/httpClient',
    // Clear errors on routes changes
    '@/plugins/errorClear',
  ],
  imports: [
    // v-calendar.js
    { src: '@/plugins/v-calendar.js', ssr: false },
    // Import your lib automatically
    { src: '@/plugins/all.js', ssr: false },
  ],
}
