import Vue from 'vue'
import iziToast from 'izitoast'
import 'izitoast/dist/css/iziToast.min.css'

// Here you can include some "default" settings
iziToast.settings({
  close: false,
  pauseOnHover: false,
  timeout: 3000,
  progressBar: false,
  layout: 2,
  position: 'topRight'
})
// and export it
export default function install() {
  Object.defineProperties(Vue.prototype, {
    $iziToast: {
      get() {
        return iziToast
      }
    }
  })
}
