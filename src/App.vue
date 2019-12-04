<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view />
  </div>
</template>

<script>
import axios from 'axios'
export default {
  created: function() {
    axios.interceptors.response.use(undefined, function(err) {
      // eslint-disable-next-line no-unused-vars
      return new Promise(function(resolve, reject) {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          this.$store.dispatch('logout')
        }
        throw err
      })
    })
  }
}
</script>

<style>
#app {
  font-family: 'Poppins', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
/* #nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
} */

#sidebar.kt-menu__link:hover {
  color: #ffffff;
}

#sidebar a.router-link-exact-active {
  color: #42b983;
}

.kt-menu__subnav {
  background: #000628;
}

/* NPROGRESS */
#nprogress .bar {
  background: rgb(24, 212, 6) !important;
}
#nprogress .spinner-icon {
  border-left-color: rgb(252, 96, 122) !important;
  border-top-color: #5d78ff !important;
}
</style>
