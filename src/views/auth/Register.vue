<template>
  <!-- begin:: Page -->
  <div class="kt-grid kt-grid--ver kt-grid--root">
    <div
      class="kt-grid kt-grid--hor kt-grid--root  kt-login kt-login--v3 kt-login--signin"
      id="kt_login"
    >
      <div
        class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor"
        style="background-image: url(../../assets/images/bg-3.jpg)"
      >
        <div class="kt-grid__item kt-grid__item--fluid kt-login__wrapper">
          <div class="kt-login__container">
            <div class="kt-login__logo">
              <a href="#">
                <img src="../../assets/logo.png" />
              </a>
            </div>
            <div class="">
              <div class="kt-login__head">
                <h3 class="kt-login__title">Sign Up</h3>
                <div class="kt-login__desc">
                  Enter your details to create your account:
                </div>
              </div>
              <div class="kt-form">
                <div class="input-group">
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Firstname"
                    v-model="firstname"
                  />
                </div>
                <div class="input-group">
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Lastname"
                    v-model="lastname"
                  />+
                </div>
                <div class="input-group">
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Username"
                    v-model="username"
                    autocomplete="off"
                  />
                </div>
                <div class="input-group">
                  <input
                    class="form-control"
                    type="email"
                    placeholder="Email"
                    v-model="email"
                    autocomplete="off"
                  />
                </div>
                <div class="input-group">
                  <input
                    class="form-control"
                    type="password"
                    placeholder="Password"
                    v-model="password"
                  />
                </div>
                <div class="input-group">
                  <input
                    class="form-control"
                    type="password"
                    placeholder="Confirm Password"
                    v-model="rpassword"
                  />
                </div>

                <div class="kt-login__actions">
                  <button
                    @click="register"
                    class="btn btn-brand btn-elevate kt-login__btn-primary"
                  >
                    Sign Up</button
                  >&nbsp;&nbsp;
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- end:: Page -->
</template>

<script>
export default {
  name: 'register',
  data() {
    return {
      username: '',
      password: '',
      rpassword: '',
      email: '',
      firstname: '',
      lastname: ''
    }
  },
  methods: {
    register: function() {
      let data = {
        firstname: this.firstname,
        lastname: this.lastname,
        username: this.username,
        email: this.email,
        password: this.password,
        role: 'Super Admin'
      }
      this.$store
        .dispatch('register', data)
        .then(() => this.$router.push('/dashboard'))
        .catch(error => this.$toast.error('Error', error.response.data.message))
    }
  }
}
</script>

<style scoped>
@import url('../../assets/css/login.css');
</style>
