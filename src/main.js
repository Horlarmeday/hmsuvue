import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iziToast from '../src/assets/js/izitoast'
// App Styles
import '../node_modules/nprogress/nprogress.css'
import './assets/css/style.css'
import 'izitoast/dist/css/iziToast.css'
import 'vue-datetime/dist/vue-datetime.css'
import 'vue-select/dist/vue-select.css'
import './vee-validate'

import { CollapsePlugin } from 'bootstrap-vue'
import { Datetime } from 'vue-datetime'

Vue.use(Datetime)
Vue.use(CollapsePlugin)
Vue.use(iziToast)
Vue.use(require('vue-moment'))

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
