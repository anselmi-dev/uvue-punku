import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import AuthRouter from '@/helpers/auth-router'

Vue.use(VueRouter)

export default () => {
  return new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior(to, from, savedPosition) {
      return { x: 0, y: 0 }
    },
    beforeEach(to, from, next) {

    }
  })
}
