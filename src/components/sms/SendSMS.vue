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
            Send SMS to {{ patient.firstname }} {{ patient.lastname }}
            <small>Send a new SMS</small>
          </h3>
        </div>
      </div>
      <div class="kt-portlet__body">
        <!--begin: Datatable -->
        <div class="row">
          <div class="col-xl-12">
            <div class="form-group">
              <label>Patient</label>
              <input
                type="text"
                class="form-control"
                v-model="patient.firstname"
                disabled
              />
              <span class="form-text text-muted">Patient name.</span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-12">
            <div class="form-group">
              <label>Message</label>
              <textarea
                col="30"
                class="form-control"
                rows="10"
                v-model="message"
                placeholder="Enter a Message"
                required
              >
              </textarea>
              <span class="form-text text-muted">Please enter message.</span>
            </div>
          </div>
        </div>
        <div>
          <button
            v-if="!loading"
            @click="sendSMS"
            class="btn btn-brand btn-elevate float-right"
          >
            Send SMS
          </button>
          <button
            v-else
            class="btn btn-brand kt-spinner kt-spinner--right 
                      kt-spinner--sm kt-spinner--light btn-elevate float-right"
            disabled
          >
            Sending...
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
  name: 'message',
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {
      patient: '',
      message: '',
      sendsmsurl: '/staff/send/sms/',
      landingpageurl: '/patient/',
      loading: false
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
    sendSMS() {
      this.loading = true
      const data = {
        message: this.message
      }
      axios
        .post(this.sendsmsurl + this.$route.params.id, data)
        .then(response => {
          this.message = ''
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
        .get(this.landingpageurl + this.$route.params.id)
        .then(response => {
          this.patient = response.data.data
        })
        .catch(error => {
          this.handleError(error)
        })
    }
  }
}
</script>

<style></style>
