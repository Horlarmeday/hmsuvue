<template>
  <!-- begin:: Content -->
  <div class="kt-content  kt-grid__item kt-grid__item--fluid" id="kt_content">
    <div class="kt-portlet kt-portlet--mobile">
      <div class="kt-portlet__head kt-portlet__head--lg">
        <div class="kt-portlet__head-label">
          <span class="kt-portlet__head-icon">
            <i class="kt-font-brand flaticon2-line-chart"></i>
          </span>
          <h3 class="kt-portlet__head-title">
            Create Vendor
            <small>Create a new vendor account</small>
          </h3>
        </div>
        <div class="kt-portlet__head-toolbar">
          <div class="kt-portlet__head-wrapper">
            <div class="kt-portlet__head-actions">
              <router-link
                to="/vendor-list"
                class="btn btn-brand btn-elevate btn-icon-sm"
              >
                <i class="la la-plus"></i>
                Vendors
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="kt-portlet__body">
        <!--begin: Datatable -->
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>First Name</label>
              <input
                type="text"
                class="form-control"
                v-model="input.firstname"
                placeholder="First Name"
                required
              />
              <span class="form-text text-muted">Please enter first name.</span>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Last Name</label>
              <input
                type="text"
                class="form-control"
                v-model="input.lastname"
                placeholder="Last Name"
                required
              />
              <span class="form-text text-muted">Please enter last name.</span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Email</label>
              <input
                type="email"
                class="form-control"
                v-model="input.email"
                placeholder="Email"
                required
              />
              <span class="form-text text-muted">Please enter email.</span>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Password</label>
              <input
                type="text"
                class="form-control"
                v-model="input.password"
                placeholder="Password"
                required
              />
              <span class="form-text text-muted">Please enter password.</span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Address</label>
              <input
                type="text"
                class="form-control"
                v-model="input.address"
                placeholder="Address"
                required
              />
              <span class="form-text text-muted">Please enter address.</span>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Company</label>
              <input
                type="text"
                class="form-control"
                v-model="input.company"
                placeholder="Company"
                required
              />
              <span class="form-text text-muted">Please enter company.</span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Username</label>
              <input
                type="text"
                class="form-control"
                v-model="input.username"
                placeholder="Username"
                required
              />
              <span class="form-text text-muted">Please enter username.</span>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Phone Number</label>
              <input
                type="text"
                class="form-control"
                v-model="input.phonenumber"
                placeholder="Phone Number"
                required
              />
              <span class="form-text text-muted"
                >Please enter phone number.</span
              >
            </div>
          </div>
        </div>

        <div>
          <button
            v-if="!loading"
            @click="createVendor"
            class="btn btn-brand btn-elevate float-right"
          >
            Create Vendor
          </button>
          <button
            v-else
            class="btn btn-brand kt-spinner kt-spinner--right 
                      kt-spinner--sm kt-spinner--light btn-elevate float-right"
            disabled
          >
            Creating...
          </button>
        </div>
        <!--end: Datatable -->
      </div>
    </div>
  </div>
  <!-- end:: Content -->
</template>

<script>
import axios from '../../axios'
export default {
  name: 'createvendor',
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {
      input: {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        address: '',
        company: '',
        username: '',
        phonenumber: ''
      },

      vendorUrl: '/vendor',
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
    createVendor() {
      this.loading = true
      axios
        .post(this.vendorUrl, this.input)
        .then(response => {
          this.input = ''
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
