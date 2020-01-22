<template>
  <div
    class="kt-quick-panel--right kt-demo-panel--right kt-offcanvas-panel--right 
    kt-header--fixed kt-header-mobile--fixed kt-subheader--fixed kt-subheader--enabled 
    kt-subheader--solid kt-aside--enabled kt-aside--fixed kt-page--loading"
  >
    <!-- begin:: Page -->
    <div class="kt-grid kt-grid--ver kt-grid--root">
      <div
        class="kt-grid kt-grid--hor kt-grid--root  kt-login kt-login--v3 kt-login--signin"
        id="kt_login"
      >
        <div
          class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor"
          :style="{
            backgroundImage:
              'url(' + require('@/assets/images/svsh' + '.jpg') + ')'
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
              <div
                style="background:#fff;padding: 30px 25px;border-radius:10px"
                class="kt-login__signin"
              >
                <div class="kt-login__head">
                  <h3 class="kt-login__title">Sign In</h3>
                </div>
                <ValidationObserver ref="observer">
                  <form class="kt-form" @submit.prevent="login">
                    <ValidationProvider
                      rules="required"
                      name="Username"
                      v-slot="{ valid, errors }"
                    >
                      <div class="input-group">
                        <input
                          class="form-control"
                          type="text"
                          placeholder="Username"
                          :style="{ backgroundColor: '#b6d3ea30' }"
                          :state="errors[0] ? false : valid ? true : null"
                          required
                          v-model="username"
                          autocomplete="off"
                        />
                        <div class="invalid-feedback">{{ errors[0] }}</div>
                      </div>
                    </ValidationProvider>
                    <ValidationProvider
                      rules="required"
                      name="Password"
                      v-slot="{ valid, errors }"
                    >
                      <div class="input-group">
                        <input
                          class="form-control"
                          type="password"
                          placeholder="Password"
                          :style="{ backgroundColor: '#b6d3ea30' }"
                          :state="errors[0] ? false : valid ? true : null"
                          required
                          v-model="password"
                          autocomplete="off"
                        />
                        <div class="invalid-feedback">{{ errors[0] }}</div>
                      </div>
                    </ValidationProvider>
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
                          class="kt-login__link"
                          >Forget Password ?</a
                        >
                      </div>
                    </div>
                    <div class="kt-login__actions">
                      <button
                        v-if="!loading"
                        class="btn btn-brand btn-elevate kt-login__btn-primary"
                      >
                        Sign In
                      </button>
                      <button
                        v-else
                        class="btn btn-brand kt-spinner kt-spinner--right 
                      kt-spinner--sm kt-spinner--light btn-elevate  kt-login__btn-primary"
                        disabled
                      >
                        Validating...
                      </button>
                    </div>
                  </form>
                </ValidationObserver>
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
import { ValidationObserver, ValidationProvider } from 'vee-validate'
export default {
  name: 'login',
  components: {
    ValidationObserver,
    ValidationProvider
  },
  data() {
    return {
      backgroundId: '-3',
      username: '',
      password: '',
      loading: false,
      user: ''
    }
  },
  methods: {
    login() {
      this.loading = true
      let username = this.username
      let password = this.password
      this.$store
        .dispatch('login', { username, password })
        .then(() => {
          this.loading = false
          this.$router.push('/dashboard')
        })
        .catch(error => {
          this.loading = false
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
@import url('../../assets/css/login.css');
</style>
