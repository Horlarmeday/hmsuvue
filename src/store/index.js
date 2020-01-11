import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('user-token') || '',
    user: {}
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
    getUser: state => {
      return state.user
    }
  },
  mutations: {
    auth_request(state) {
      state.status = 'loading'
    },
    auth_success(state, token, staff) {
      state.status = 'success'
      state.token = token
      state.user = staff
    },
    auth_error(state) {
      state.status = 'error'
    },
    logout(state) {
      state.status = ''
      state.token = ''
    }
  },
  actions: {
    // Login action
    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({
          url: process.env.STAFF_LOGIN,
          data: user,
          method: 'POST'
        })
          .then(response => {
            const token = response.data.token
            const staff = response.data.data
            localStorage.setItem('user-token', token)
            axios.defaults.headers.common['x-auth-token'] = token
            commit('auth_success', token, staff)
            resolve(response)
          })
          .catch(err => {
            commit('auth_error')
            localStorage.removeItem('user-token')
            reject(err)
          })
      })
    },

    // register action
    register({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({
          url: 'localhost:8088/api/staff',
          data: user,
          method: 'POST'
        })
          .then(response => {
            const token = response.data.token
            const user = response.data.data
            localStorage.setItem('user-token', token)
            axios.defaults.headers.common['x-auth-token'] = token
            commit('auth_success', token, user)
            resolve(response)
          })
          .catch(err => {
            commit('auth_error', err)
            localStorage.removeItem('token')
            reject(err)
          })
      })
    },

    logout({ commit }) {
      // eslint-disable-next-line no-unused-vars
      return new Promise((resolve, reject) => {
        commit('logout')
        localStorage.removeItem('user-token')
        delete axios.defaults.headers.common['x-auth-token']
        resolve()
      })
    }
  },
  modules: {}
})
