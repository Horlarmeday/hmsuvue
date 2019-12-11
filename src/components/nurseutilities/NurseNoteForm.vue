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
            Create Nursing Note
            <small>Create a new nursing note</small>
          </h3>
        </div>
      </div>
      <div class="kt-portlet__body">
        <!--begin: Datatable -->
        <div class="row">
          <div class="col-xl-12">
            <div class="form-group">
              <label>Patient Name</label>
              <select class="form-control" v-model="patientId">
                <option disabled selected>Select Patient</option>
                <option
                  v-for="patient in patients"
                  :key="patient._id"
                  :value="patient._id"
                  >{{ patient.firstname }} {{ patient.lastname }}</option
                >
              </select>
              <span class="form-text text-muted">Please select patient.</span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-12">
            <div class="form-group">
              <label>Type of Duty</label>
              <input type="text" class="form-control" v-model="type" required />
              <span class="form-text text-muted"
                >Please enter type of duty.</span
              >
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-12">
            <div class="form-group">
              <label>Note</label>
              <textarea
                col="30"
                rows="10"
                class="form-control"
                v-model="note"
                required
              ></textarea>
              <span class="form-text text-muted">Please enter note.</span>
            </div>
          </div>
        </div>
        <div>
          <button
            v-if="!loading"
            @click="createNote"
            class="btn btn-brand btn-elevate float-right"
          >
            Create Note
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
      type: '',
      note: '',
      patientId: '',

      nursenoteUrl: '/nurse/nursing/note',
      landingpageUrl: '/patient',
      loading: false,
      patients: []
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
    createNote() {
      this.loading = true
      let data = {
        type: this.type,
        note: this.note,
        patientId: this.patientId
      }
      axios
        .post(this.nursenoteUrl, data)
        .then(response => {
          this.loading = false
          this.type = ''
          this.note = ''

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
          this.patients = response.data.data
        })
        .catch(error => {
          this.handleError(error)
        })
    }
  }
}
</script>

<style></style>
