<template>
  <div>
    <!-- begin:: Page -->
    <div class="kt-grid kt-grid--ver kt-grid--root">
      <div
        class="kt-grid kt-grid--hor kt-grid--root kt-login kt-login--v2 kt-login--signin"
        id="kt_login"
      >
        <div
          class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor"
          :style="{
            backgroundImage:
              'url(' + require('@/assets/images/bg6' + '.jpg') + ')'
          }"
          style="padding-bottom: 14.6%;background-size:cover"
        >
          <div class="kt-grid__item kt-grid__item--fluid kt-login__wrapper">
            <div class="kt-login__container">
              <div class="kt-login__logo">
                <a href="#">
                  <img src="../../assets/ms.png" />
                </a>
              </div>
              <div class="kt-login__signin">
                <div class="kt-login__head">
                  <h3 class="kt-login__title">Sign In</h3>
                </div>
                <div class="kt-form">
                  <div class="input-group">
                    <input
                      style="color: #fff"
                      class="form-control"
                      type="text"
                      placeholder="Username"
                      v-model="username"
                      autocomplete="off"
                      required
                    />
                  </div>
                  <div class="input-group">
                    <input
                      style="color: #fff"
                      class="form-control"
                      type="password"
                      placeholder="Password"
                      v-model="password"
                      required
                    />
                  </div>
                  <div class="row kt-login__extra">
                    <div class="col">
                      <label class="kt-checkbox">
                        <input type="checkbox" name="remember" /> Remember me
                        <span></span>
                      </label>
                    </div>
                    <div class="col kt-align-right">
                      <a
                        href="javascript:;"
                        id="kt_login_forgot"
                        class="kt-link kt-login__link"
                        >Forget Password ?</a
                      >
                    </div>
                  </div>
                  <div class="kt-login__actions">
                    <button
                      v-if="!loading"
                      class="btn btn-pill kt-login__btn-primary"
                      @click="login"
                    >
                      Sign In
                    </button>
                    <button
                      v-else
                      class="btn btn-pill kt-spinner kt-spinner--right 
                      kt-spinner--sm kt-spinner--light btn-elevate  kt-login__btn-primary"
                      disabled
                    >
                      Validating...
                    </button>
                  </div>
                </div>
              </div>

              <div class="kt-login__forgot">
                <div class="kt-login__head">
                  <h3 class="kt-login__title">Forgotten Password ?</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- end:: Page -->
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'vendorlogin',
  data() {
    return {
      username: '',
      password: '',
      loading: false,
      vendorlogin: '/vendor/login'
    }
  },
  methods: {
    login() {
      this.loading = true
      let username = this.username
      let password = this.password
      axios
        .post(this.vendorlogin, { username, password })
        .then(response => {
          const token = response.data.token
          localStorage.setItem('user-token', token)

          axios.defaults.headers.common['x-auth-token'] = token
          this.loading = false
          this.$router.push('/dashboard')
        })
        .catch(error => {
          this.loading = false
          localStorage.removeItem('user-token')
          this.$iziToast.error({
            title: 'Error!',
            message: error.response.data
          })
        })
    }
  }
}
</script>

<style scoped>
@import url('../../assets/css/vendorlogin.css');
</style>
