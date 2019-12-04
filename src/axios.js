import axios from 'axios'
import NProgress from 'nprogress'

const token = localStorage.getItem('user-token')

axios.interceptors.request.use(config => {
  NProgress.start()
  return config
})

axios.interceptors.response.use(response => {
  NProgress.done()
  return response
})

axios.defaults.baseURL = 'http://127.0.0.1:3000/api/'
axios.defaults.headers.common = { 'x-auth-token': token }
export default axios
