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
            Create Service
            <small>Create a new service </small>
          </h3>
        </div>
        <div class="kt-portlet__head-toolbar">
          <div class="kt-portlet__head-wrapper">
            <div class="kt-portlet__head-actions">
              <router-link
                to="/services"
                class="btn btn-brand btn-elevate btn-icon-sm"
              >
                <i class="la la-plus"></i>
                Services
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="kt-portlet__body">
        <!--begin: Datatable -->
        <div class="row">
          <div class="col-xl-12">
            <div class="form-group">
              <label>Name</label>
              <input
                type="text"
                class="form-control"
                v-model="name"
                placeholder="Name of Service"
                required
              />
              <span class="form-text text-muted"
                >Please enter name of service.</span
              >
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-12">
            <div class="form-group">
              <label>Price</label>
              <input
                type="number"
                class="form-control"
                v-model="price"
                placeholder="Price of Service"
                required
              />
              <span class="form-text text-muted"
                >Please enter price of service.</span
              >
            </div>
          </div>
        </div>
        <div>
          <button
            v-if="!loading"
            @click="createService"
            class="btn btn-brand btn-elevate float-right"
          >
            Create Service
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
  name: 'nursenoteForm',
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {
      name: '',
      price: '',

      serviceUrl: '/admin/service',
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
    createService() {
      this.loading = true
      let data = {
        name: this.name,
        price: this.price
      }
      axios
        .post(this.serviceUrl, data)
        .then(response => {
          this.loading = false
          this.name = ''
          this.price = ''

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
