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
            Create Daily Report
            <small>Create a new daily report</small>
          </h3>
        </div>
      </div>
      <div class="kt-portlet__body">
        <!--begin: Datatable -->
        <div class="row">
          <div class="col-xl-6">
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
          <div class="col-xl-6">
            <div class="form-group">
              <label>Ward</label>
              <select class="form-control" v-model="ward">
                <option disabled selected>Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Children">Children</option>
                <option value="Labour">Labour</option>
                <option value="Private">Private</option>
                <option value="VIP">VIP</option>
              </select>
              <span class="form-text text-muted">Please select patient.</span>
            </div>
          </div>
        </div>
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
                @change="calcBmi"
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
            <div class="form-group">
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
        </div>
        <div class="row">
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
        </div>
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Comment</label>
              <input
                type="text"
                class="form-control"
                v-model="comment"
                placeholder="Comment"
                required
              />
              <span class="form-text text-muted">Please enter comment</span>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Observation</label>
              <textarea
                col="30"
                rows="10"
                class="form-control"
                v-model="observation"
                placeholder="Observation"
                required
              >
              </textarea>
              <span class="form-text text-muted"
                >Please enter observations.</span
              >
            </div>
          </div>
        </div>

        <div>
          <button
            v-if="!loading"
            @click="createReport"
            class="btn btn-brand btn-elevate float-right"
          >
            Create Report
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
  name: 'dailyreportForm',
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
      blood: '',
      spo2: '',
      muac: '',
      comment: '',
      ward: '',
      observation: '',
      patientId: '',

      dailyreportUrl: '/nurse',
      landingpageUrl: '/nurse/dailyreport',
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
    createReport() {
      this.loading = true
      const data = {
        weight: this.weight,
        height: this.height,
        // heartrate: this.heartrate,
        temperature: this.temperature,
        respiration: this.respiration,
        // fheartrate: this.fheartrate,
        bmi: this.bmi,
        rvs: this.rvs,
        diastolic: this.diastolic,
        systolic: this.systolic,
        pulse: this.pulse,
        // blood: this.blood,
        spo2: this.spo2,
        muac: this.muac,
        ward: this.ward,
        comment: this.comment,
        observation: this.observation,
        patientId: this.patientId
      }
      axios
        .post(this.dailyreportUrl, data)
        .then(response => {
          this.weight = ''
          this.height = ''
          //   this.heartrate = ''
          this.temperature = ''
          this.respiration = ''
          //   this.fheartrate = ''
          this.bmi = ''
          this.rvs = ''
          this.diastolic = ''
          this.systolic = ''
          this.pulse = ''
          //   this.blood = ''
          this.spo2 = ''
          this.muac = ''
          this.ward = ''
          this.comment = ''
          this.observation = ''

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
    },

    calcBmi() {
      this.bmi = this.weight / this.height ** 2
    }
  }
}
</script>

<style></style>
