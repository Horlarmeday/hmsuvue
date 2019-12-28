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
            Create Billing
            <small>Create a new billing</small>
          </h3>
        </div>
      </div>
      <div class="kt-portlet__body">
        <!--begin: Datatable -->
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Patient Name</label>
              <select class="form-control" v-model="input.patientId">
                <option disabled selected>Select Patient</option>
                <option
                  v-for="patient in patients"
                  :key="patient._id"
                  :value="patient._id"
                  >{{ patient.firstname }} {{ patient.lastname }}</option
                >
              </select>
              <!-- <v-select
                label="firstname"
                :reduce="patients => patients._id"
                :options="patients"
              ></v-select> -->
              <span class="form-text text-muted">Please select patient.</span>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Services</label>
              <v-select
                @input="getPrice"
                v-model="input.serviceId"
                label="name"
                :reduce="services => services._id"
                :options="services"
                multiple
              ></v-select>
              <span class="form-text text-muted"
                >Please select service(s).</span
              >
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Total Amount</label>
              <input
                type="number"
                class="form-control"
                v-model="input.amount"
                readonly
                required
              />
              <span class="form-text text-muted">Total Amount.</span>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Mode of Payment</label>
              <select
                class="form-control"
                v-model="input.modeofpayment"
                required
              >
                <option disabled>Select</option>
                <option>Cash</option>
                <option>Transfer</option>
                <option>POS</option>
                <option>Bank Deposit</option>
              </select>
              <span class="form-text text-muted"
                >Please select mode of payment.</span
              >
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Comments</label>
              <input
                type="text"
                class="form-control"
                v-model="input.comment"
                placeholder="Optional"
              />
              <span class="form-text text-muted">Please enter comment.</span>
            </div>
          </div>
        </div>
        <div>
          <button
            v-if="!loading"
            @click="createBilling"
            class="btn btn-brand btn-elevate float-right"
          >
            Submit
          </button>
          <button
            v-else
            class="btn btn-brand kt-spinner kt-spinner--right 
                      kt-spinner--sm kt-spinner--light btn-elevate float-right"
            disabled
          >
            Submitting...
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
// import { Datetime } from 'vue-datetime'
import vSelect from 'vue-select'
export default {
  name: 'employeeForm',
  props: {
    title: {
      type: String
    }
  },
  components: {
    // datetime: Datetime
    vSelect
  },
  data() {
    return {
      input: {
        patientId: '',
        serviceId: '',
        amount: '',
        modeofpayment: '',
        comment: ''
      },

      billingUrl: '/account/billing',
      landingpageUrl: '/account/billing/page',
      getpriceurl: '/ajax/service/price',
      loading: false,
      patients: [],
      services: []
    }
  },
  mounted() {
    this.getPage()
  },
  methods: {
    handleError(error) {
      console.log(error)
      this.$iziToast.error({
        title: 'Error!',
        message: error.response.data
      })
    },
    createBilling() {
      this.loading = true
      axios
        .post(this.billingUrl, this.input)
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
    },
    getPage() {
      axios
        .get(this.landingpageUrl)
        .then(response => {
          this.patients = response.data.data.patients
          this.services = response.data.data.services
          console.log(response.data.data)
        })
        .catch(error => {
          this.handleError(error)
        })
    },
    getPrice() {
      const data = {
        serviceId: this.input.serviceId
      }
      axios
        .post(this.getpriceurl, data)
        .then(response => {
          this.input.amount = response.data.data
          console.log(response.data)
        })
        .catch(error => {
          this.handleError(error)
        })
    }
  }
}
</script>

<style></style>
