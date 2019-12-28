/* eslint-disable prettier/prettier */
<template>
  <div class="kt-content  kt-grid__item kt-grid__item--fluid" id="kt_content">
    <!--begin::Portlet-->
    <div class="kt-portlet">
      <div class="kt-portlet__head">
        <div class="kt-portlet__head-label">
          <h3 class="kt-portlet__head-title">
            Create Immunization
          </h3>
        </div>
      </div>
      <div class="kt-portlet__body">
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Patient Name</label>
              <select class="form-control" v-model="input.patientId">
                <option disabled>Select Patient</option>
                <option
                  v-for="patient in patients"
                  :key="patient._id"
                  :value="patient._id"
                  >{{ patient.firstname }} {{ patient.lastname }}</option
                >
              </select>
              <span class="form-text text-muted">Patient Name.</span>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Name of Baby</label>
              <input type="text" class="form-control" v-model="input.name" />
              <span class="form-text text-muted"
                >Please enter baby's name.</span
              >
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Birth Weight</label>
              <input
                type="text"
                class="form-control"
                v-model="input.birthweight"
                placeholder="Birth Weight"
              />
              <span class="form-text text-muted"
                >Please baby's birth weight.</span
              >
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Date of Birth</label>
              <datetime
                type="date"
                input-class="form-control"
                v-model="input.dateofbirth"
                required
              ></datetime>
              <span class="form-text text-muted"
                >Please enter baby's date of birth.</span
              >
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Place of Birth</label>
              <input
                type="text"
                class="form-control"
                v-model="input.placeofbirth"
                placeholder="Place of Birth"
              />
              <span class="form-text text-muted"
                >Please baby's place of birth.</span
              >
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>At Birth</label>
              <v-select
                v-model="input.atBirth"
                :options="['BCG', 'HBV 0', 'OPV 0', 'Vit A mum']"
                multiple
                required
              ></v-select>
              <span class="form-text text-muted">Please choose at birth.</span>
            </div>
          </div>
        </div>
        <div class="form-group">
          <button
            v-if="!loading"
            @click="createAtBirth"
            class="btn btn-brand btn-elevated float-right"
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
      </div>
    </div>

    <!--end::Portlet-->
  </div>
</template>

<script>
import axios from '../../axios'
import vSelect from 'vue-select'
import { Datetime } from 'vue-datetime'
export default {
  name: 'immunizationform',
  components: {
    vSelect,
    datetime: Datetime
  },
  data() {
    return {
      input: {
        patientId: '',
        name: '',
        dateofbirth: '',
        placeofbirth: '',
        birthweight: '',
        atBirth: []
      },
      patientUrl: '/appointment/appointments/',
      patients: [],
      immunizationUrl: '/immunization/atbirth',
      loading: false
    }
  },
  mounted() {
    this.getPatients()
  },
  methods: {
    handleError(error) {
      this.$iziToast.error({
        title: 'Error!',
        message: error.response.data
      })
    },

    getPatients() {
      axios
        .get(this.patientUrl)
        .then(response => {
          this.patients = response.data.data.patients
        })
        .catch(error => {
          this.handleError(error)
        })
    },
    createAtBirth() {
      axios
        .post(this.immunizationUrl, this.input)
        .then(response => {
          this.input = response.data.data
          this.$router.push('/immunization-consultations')
          this.$iziToast.success({
            title: 'Success!',
            message: response.data.message
          })
        })
        .catch(error => {
          this.handleError(error)
        })
    }
  }
}
</script>

<style></style>
