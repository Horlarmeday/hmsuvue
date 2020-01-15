import axios from 'axios'
import NProgress from 'nprogress'

const token = localStorage.getItem('user-token')

const calculatePercentage = (loaded, total) =>
  Math.floor((loaded * 1.0) / total)

axios.defaults.onDownloadProgress = e => {
  const percentage = calculatePercentage(e.loaded, e.total)
  NProgress.set(percentage)
}

axios.interceptors.request.use(
  config => {
    NProgress.start()
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  response => {
    NProgress.done(true)
    return response
  },
  error => {
    NProgress.done(true)
    return Promise.reject(error)
  }
)

axios.defaults.baseURL = '/api'
axios.defaults.headers.common = { 'x-auth-token': token }
axios.defaults.timeout = 180000
export default axios
