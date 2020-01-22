import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { ChatManager, TokenProvider } from '@pusher/chatkit-client'
// import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('user-token') || '',
    user: null,
    isLoggedInUser: null
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
    getUser: state => state.user,

    getPushKitUser: state => state.isLoggedInUser
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
    pushkit_success(state, pushkitUser) {
      state.status = 'success'
      state.isLoggedInUser = pushkitUser
      localStorage.setItem('pushkitUser', JSON.stringify(state.isLoggedInUser))
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
          url: `/staff/login`,
          data: user,
          method: 'POST'
        })
          .then(response => {
            const token = response.data.token
            const user = response.data.data
            localStorage.setItem('user-token', token)
            const chatManager = new ChatManager({
              instanceLocator: process.env.VUE_APP_INSTANCE_LOCATOR,
              userId: user._id,
              tokenProvider: new TokenProvider({
                url: process.env.VUE_APP_TOKEN_PROVIDER
              }),
              connectionTimeout: 20000
            })
            chatManager
              .connect()
              .then(currentUser => {
                console.log('Successful connection', currentUser)
                commit('pushkit_success', currentUser)
              })
              .catch(err => {
                console.log('Error on connection', err)
              })
            axios.defaults.headers.common['x-auth-token'] = token
            commit('auth_success', token, user)
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
