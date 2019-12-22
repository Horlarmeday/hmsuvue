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
            Create Appointment
            <small
              >Create a new appointment for {{ patient.firstname }}
              {{ patient.lastname }}</small
            >
          </h3>
        </div>
      </div>
      <div class="kt-portlet__body">
        <!--begin: Datatable -->
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Appointment Type</label>
              <select class="form-control" v-model="type">
                <option disabled selected>Select</option>
                <option>Consultation</option>
                <option>Ante-Natal</option>
                <option>Immunization</option>
              </select>
              <span class="form-text text-muted"
                >Please select appointment type.</span
              >
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Examiner</label>
              <select class="form-control" v-model="examinerId">
                <option disabled selected>Select Examiner</option>
                <option
                  v-for="staff in staffs"
                  :key="staff._id"
                  :value="staff._id"
                  >{{ staff.firstname }} {{ staff.lastname }}</option
                >
              </select>
              <span class="form-text text-muted">Please select examiner.</span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Department</label>
              <select class="form-control" v-model="department">
                <option disabled selected>Select</option>
                <option>Consulting Unit</option>
                <option>ANC</option>
                <option>Outpatient Unit</option>
              </select>
              <span class="form-text text-muted"
                >Please select department.</span
              >
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Appointment Date</label>
              <datetime
                type="date"
                input-class="form-control"
                v-model="appointmentdate"
              ></datetime>
              <!-- <input
                type="date"
                class="form-control"
                v-model="appointmentdate"
                placeholder="Phone Number"
              /> -->
              <span class="form-text text-muted"
                >Please select appointment date.</span
              >
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Appointment Time</label>
              <datetime
                type="time"
                input-class="form-control"
                v-model="appointmenttime"
              ></datetime>
              <!-- <input
                type="date"
                class="form-control"
                v-model="appointmenttime"
                placeholder="Time"
              /> -->
              <span class="form-text text-muted"
                >Please select appointment time.</span
              >
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Problem</label>
              <textarea
                col="30"
                rows="10"
                class="form-control"
                v-model="problem"
                placeholder="Problem"
              />
              <span class="form-text text-muted">Please enter problem.</span>
            </div>
          </div>
        </div>

        <div>
          <button
            v-if="!loading"
            @click="createAppointment"
            class="btn btn-brand btn-elevate float-right"
          >
            Create Appointment
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
import { Datetime } from 'vue-datetime'
export default {
  name: 'appointmentparamsForm',
  props: {
    title: {
      type: String
    }
  },
  components: {
    datetime: Datetime
  },
  data() {
    return {
      patient: '',
      examinerId: '',
      appointmentdate: '',
      appointmenttime: '',
      type: '',
      problem: '',
      department: '',

      appointmentUrl: '/appointment/',
      landingpageUrl: '/appointment/appointments/',
      loading: false,
      staffs: []
    }
  },
  mounted() {
    this.getPage()
  },
  methods: {
    handleError(error) {
      this.$iziToast.error({
        title: 'Error!',
        message: error.response.data
      })
    },
    createAppointment() {
      this.loading = true
      const data = {
        examinerId: this.examinerId,
        appointmentdate: this.appointmentdate,
        appointmenttime: this.appointmenttime,
        type: this.type,
        problem: this.problem,
        department: this.department
      }
      axios
        .post(this.appointmentUrl + this.$route.params.id, data)
        .then(response => {
          this.loading = false
          this.examinerId = ''
          this.appointmentdate = ''
          this.appointmenttime = ''
          this.type = ''
          this.problem = ''
          this.department = ''
          this.$router.push('/dashboard')

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
        .get(this.landingpageUrl + this.$route.params.id)
        .then(response => {
          this.patient = response.data.data.patient
          this.staffs = response.data.data.examiners
        })
        .catch(error => {
          this.handleError(error)
        })
    }
  }
}
</script>

<style></style>
