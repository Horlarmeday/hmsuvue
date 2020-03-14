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
import 'sweetalert2/dist/sweetalert2.min.css'
import './vee-validate'
import dotenv from 'dotenv'

dotenv.config()

import {
  CollapsePlugin,
  PaginationPlugin,
  TabsPlugin,
  ModalPlugin
} from 'bootstrap-vue'
import { Datetime } from 'vue-datetime'
import VueSweetalert2 from 'vue-sweetalert2'

Vue.use(Datetime)
Vue.use(CollapsePlugin)
Vue.use(PaginationPlugin)
Vue.use(TabsPlugin)
Vue.use(ModalPlugin)
Vue.use(iziToast)
Vue.use(VueSweetalert2)
Vue.use(require('vue-moment'))

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
