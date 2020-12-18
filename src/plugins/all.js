import Vue from 'vue'
import carousel from 'vue-owl-carousel'
import vmodal from 'vue-js-modal'

import lineClamp from 'vue-line-clamp'
import FlatSurfaceShader from 'vue-flat-surface-shader'
import VuePageTransition from 'vue-page-transition'

import VueSlider from 'vue-slider-component'

Vue.use(VuePageTransition)
Vue.component('carousel', carousel)
Vue.use(vmodal)
Vue.component('VueSlider', VueSlider)
// Vue.use(VueSlider)
Vue.use(lineClamp)
Vue.use(FlatSurfaceShader)
