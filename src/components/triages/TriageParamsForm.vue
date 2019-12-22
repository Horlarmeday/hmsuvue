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
            Create Triage
            <small
              >Create a new triage for {{ patient.firstname }}
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
              <label>Temperature (°C*)</label>
              <input
                type="text"
                class="form-control"
                v-model="temperature"
                required
              />
              <span class="form-text text-muted"
                >Please enter patient temperature.</span
              >
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Weight(kg*)</label>
              <input
                type="number"
                class="form-control"
                v-model="weight"
                @change="calcBmi"
                required
              />
              <span class="form-text text-muted"
                >Please enter patient weight.</span
              >
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Height (m*)</label>
              <input
                type="number"
                class="form-control"
                v-model="height"
                required
                @keyup="calcBmi"
              />
              <span class="form-text text-muted"
                >Please enter patient height.</span
              >
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>BMI (kg/m^2*)</label>
              <input
                type="text"
                class="form-control"
                v-model="bmi"
                required
                readonly
              />
              <span class="form-text text-muted">Patient BMI.</span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <div v-if="age > 0" class="form-group">
              <label>Pulse (b/min*)</label>
              <input
                type="text"
                class="form-control"
                v-model="pulse"
                placeholder="Pulse"
                required
              />
              <span class="form-text text-muted"
                >Please enter patient pulse.</span
              >
            </div>
            <div v-else class="form-group">
              <label>Heart Rate (b/min*)</label>
              <input
                type="text"
                class="form-control"
                v-model="heartrate"
                placeholder="Pulse"
                required
              />
              <span class="form-text text-muted"
                >Please enter patient heart rate.</span
              >
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Respiration (C/min*)</label>
              <input
                type="text"
                class="form-control"
                v-model="respiration"
                placeholder="Respiration"
                required
              />
              <span class="form-text text-muted"
                >Please enter patient respiration.</span
              >
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Systolic (mmHg*)</label>
              <input
                type="text"
                class="form-control"
                v-model="systolic"
                placeholder="Systolic"
                required
              />
              <span class="form-text text-muted"
                >Please enter patient systolic.</span
              >
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Diastolic (mmHg*)</label>
              <input
                type="text"
                class="form-control"
                v-model="diastolic"
                placeholder="Diastolic"
                required
              />
              <span class="form-text text-muted"
                >Please enter patient diastolic.</span
              >
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>MUAC (muac*)</label>
              <select v-model="muac" class="form-control">
                <option selected disabled>Select</option>
                <option value="Green">Green</option>
                <option value="Yellow">Yellow</option>
                <option value="Red">Red</option>
              </select>
              <span class="form-text text-muted"
                >Please select patient muac.</span
              >
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>RVST (rvs*)</label>
              <select v-model="rvs" class="form-control">
                <option selected disabled>Select</option>
                <option value="+ve">+ve</option>
                <option value="-ve">-ve</option>
              </select>
              <span class="form-text text-muted"
                >Please select patient rvs.</span
              >
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>SPO2 (%*)</label>
              <input
                type="text"
                class="form-control"
                v-model="spo2"
                placeholder="SPO2"
                required
              />
              <span class="form-text text-muted"
                >Please enter patient SPO2.</span
              >
            </div>
          </div>
          <div v-if="age <= 0" class="col-xl-6">
            <div class="form-group">
              <label>Fetal Heart Rate (b/min*)</label>
              <input
                type="text"
                class="form-control"
                v-model="fheartrate"
                placeholder="Fetal Heart Rate"
              />
              <span class="form-text text-muted"
                >Please enter patient Fetal heart rate.</span
              >
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>QMS</label>
              <input
                type="text"
                class="form-control"
                v-model="qms"
                placeholder="Queue Management System"
              />
              <span class="form-text text-muted"
                >Please enter patient qms number.</span
              >
            </div>
          </div>
        </div>

        <div>
          <button
            v-if="!loading"
            @click="createTriage"
            class="btn btn-brand btn-elevate float-right"
          >
            Create Triage
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
  name: 'triageparamsForm',
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {
      weight: '',
      height: '',
      heartrate: '',
      temperature: '',
      respiration: '',
      fheartrate: '',
      bmi: '',
      rvs: '',
      diastolic: '',
      systolic: '',
      pulse: '',
      spo2: '',
      muac: '',
      qms: '',

      triageUrl: '/triage/',
      landingpageUrl: '/triage/param/page/',
      loading: false,
      patients: [],
      patient: '',
      age: ''
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
    createTriage() {
      this.loading = true
      const data = {
        weight: this.weight,
        height: this.height,
        heartrate: this.heartrate,
        temperature: this.temperature,
        respiration: this.respiration,
        fheartrate: this.fheartrate,
        bmi: this.bmi,
        rvs: this.rvs,
        diastolic: this.diastolic,
        systolic: this.systolic,
        pulse: this.pulse,
        spo2: this.spo2,
        muac: this.muac,
        patientId: this.patientId,
        qms: this.qms
      }
      axios
        .post(this.triageUrl + this.$route.params.id, data)
        .then(response => {
          this.weight = ''
          this.height = ''
          this.heartrate = ''
          this.temperature = ''
          this.respiration = ''
          this.fheartrate = ''
          this.bmi = ''
          this.rvs = ''
          this.diastolic = ''
          this.systolic = ''
          this.pulse = ''
          this.spo2 = ''
          this.muac = ''

          this.loading = false
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
          this.age = response.data.data.age
        })
        .catch(error => {
          this.handleError(error)
        })
    },

    calcBmi() {
      this.bmi = this.weight / this.height ** 2
    }
  }
}
</script>

<style></style>
