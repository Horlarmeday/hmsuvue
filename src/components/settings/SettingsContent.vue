<template>
  <!-- begin:: Content -->
  <div class="kt-content  kt-grid__item kt-grid__item--fluid" id="kt_content">
    <div class="kt-portlet kt-portlet--height-fluid">
      <div class="kt-portlet__head">
        <div class="kt-portlet__head-label">
          <h3 class="kt-portlet__head-title">
            Change Password<small>change or reset your account password</small>
          </h3>
        </div>
        <div class="kt-portlet__head-toolbar kt-hidden">
          <div class="kt-portlet__head-toolbar">
            <div class="dropdown dropdown-inline">
              <button
                type="button"
                class="btn btn-clean btn-sm btn-icon btn-icon-md"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="la la-sellsy"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="kt-form kt-form--label-right">
        <div class="kt-portlet__body">
          <div class="kt-section kt-section--first">
            <div class="kt-section__body">
              <div
                class="alert alert-solid-danger alert-bold fade show kt-margin-t-20 kt-margin-b-40"
                role="alert"
              >
                <div class="alert-icon">
                  <i class="fa fa-exclamation-triangle"></i>
                </div>
                <div class="alert-text">
                  Configure user passwords to expire periodically. Users will
                  need warning that their passwords are going to expire,
                  <br />or they might inadvertently get locked out of the
                  system!
                </div>
                <div class="alert-close">
                  <button
                    type="button"
                    class="close"
                    data-dismiss="alert"
                    aria-label="Close"
                  >
                    <span aria-hidden="true"><i class="la la-close"></i></span>
                  </button>
                </div>
              </div>
              <div class="row">
                <label class="col-xl-3"></label>
                <div class="col-lg-9 col-xl-6">
                  <h3 class="kt-section__title kt-section__title-sm">
                    Change Or Recover Your Password:
                  </h3>
                </div>
              </div>
              <div class="form-group row">
                <label class="col-xl-3 col-lg-3 col-form-label"
                  >Current Password</label
                >
                <div class="col-lg-9 col-xl-6">
                  <input
                    type="password"
                    class="form-control"
                    v-model="oldPassword"
                    placeholder="Current password"
                  />
                  <a
                    href="#"
                    class="kt-link kt-font-sm kt-font-bold kt-margin-t-5"
                    >Forgot password ?</a
                  >
                </div>
              </div>
              <div class="form-group row">
                <label class="col-xl-3 col-lg-3 col-form-label"
                  >New Password</label
                >
                <div class="col-lg-9 col-xl-6">
                  <input
                    type="password"
                    class="form-control"
                    v-model="newPassword"
                    placeholder="New password"
                  />
                </div>
              </div>
              <div class="form-group form-group-last row">
                <label class="col-xl-3 col-lg-3 col-form-label"
                  >Verify Password</label
                >
                <div class="col-lg-9 col-xl-6">
                  <input
                    type="password"
                    class="form-control"
                    v-model="confirmPassword"
                    placeholder="Verify password"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="kt-portlet__foot">
          <div class="kt-form__actions">
            <div class="row">
              <div class="col-lg-3 col-xl-3"></div>
              <div class="col-lg-9 col-xl-9">
                <button
                  v-if="!loading"
                  @click="changePassword"
                  type="button"
                  class="btn btn-brand btn-bold"
                >
                  Change Password</button
                >&nbsp;
                <button
                  v-else
                  class="btn btn-brand kt-spinner kt-spinner--right 
                      kt-spinner--sm kt-spinner--light btn-elevate float-right"
                  disabled
                >
                  Changing...
                </button>
                <button type="button" class="btn btn-secondary">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- end:: Content -->
</template>

<script>
import axios from '../../axios'
export default {
  name: 'changepassword',
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
      changepasswordUrl: '/staff/change-password',
      loading: false
    }
  },
  methods: {
    handleError(error) {
      this.$iziToast.error({
        title: 'Error!',
        message: error.response.data
      })
    },
    changePassword() {
      if (this.newPassword !== this.confirmPassword) {
        this.$iziToast.error({
          title: 'Success!',
          message: 'New password does not equal Confirm password'
        })
        return
      }
      this.loading = true
      const data = {
        oldPassword: this.oldPassword,
        newPassword: this.newPassword,
        confirmPassword: this.confirmPassword
      }
      axios
        .post(this.changepasswordUrl, data)
        .then(response => {
          this.oldPassword = ''
          this.newPassword = ''
          this.confirmPassword = ''
          this.loading = false
          this.$iziToast.success({
            title: 'Success!',
            message: response.data.message
          })
        })
        .catch(error => {
          this.loading = false
          this.handleError(error)
        })
    }
  }
}
</script>

<style></style>
