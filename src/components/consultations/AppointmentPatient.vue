<template>
  <div class="kt-content  kt-grid__item kt-grid__item--fluid" id="kt_content">
    <div class="row">
      <div class="col-xl-4">
        <!--begin::Portlet-->
        <div
          style="border: 1px solid #fd397a;"
          class="kt-portlet kt-portlet--skin-solid"
        >
          <div
            style="background: #fd397a;"
            class="kt-portlet__head kt-portlet__head--noborder"
          >
            <div class="kt-portlet__head-label">
              <span class="kt-portlet__head-icon">
                <i class="flaticon2-graphic"></i>
              </span>
              <h3 class="kt-portlet__head-title">
                PATIENT DETAILS
              </h3>
            </div>
          </div>
          <div class="kt-portlet__body">
            <div class="kt-widget4">
              <div style="padding-bottom: 0px" class="kt-widget4__item">
                <span class="kt-widget4__icon">
                  <i class="flaticon-pie-chart-1 kt-font-info"></i>
                </span>
                <a href="#" class="kt-widget4__title kt-widget4__title--light">
                  Full Name
                </a>
                <span style="color: #000000" class="kt-widget4__number"
                  >{{ patient.firstname }} {{ patient.lastname }}</span
                >
              </div>
              <div style="padding-bottom: 0px" class="kt-widget4__item">
                <span class="kt-widget4__icon">
                  <i
                    class="flaticon-safe-shield-protection  kt-font-success"
                  ></i>
                </span>
                <a href="#" class="kt-widget4__title kt-widget4__title--light">
                  Marital Status
                </a>
                <span style="color: #000" class="kt-widget4__number">{{
                  patient.maritalstatus
                }}</span>
              </div>
              <div style="padding-bottom: 0px" class="kt-widget4__item">
                <span class="kt-widget4__icon">
                  <i class="flaticon2-line-chart kt-font-danger"></i>
                </span>
                <a href="#" class="kt-widget4__title kt-widget4__title--light">
                  Phone Number
                </a>
                <span style="color: #000" class="kt-widget4__number">{{
                  patient.phonenumber
                }}</span>
              </div>
              <div style="padding-bottom: 0px" class="kt-widget4__item">
                <span class="kt-widget4__icon">
                  <i class="flaticon2-pie-chart-1 kt-font-primary"></i>
                </span>
                <a href="#" class="kt-widget4__title kt-widget4__title--light">
                  Age
                </a>
                <span style="color: #000" class="kt-widget4__number">{{
                  patient.birthday | moment('from', 'now', true)
                }}</span>
              </div>
              <div style="padding-bottom: 0px" class="kt-widget4__item">
                <span class="kt-widget4__icon">
                  <i class="flaticon2-rocket kt-font-brand"></i>
                </span>
                <a href="#" class="kt-widget4__title kt-widget4__title--light">
                  Gender
                </a>
                <span style="color: #000" class="kt-widget4__number">{{
                  patient.gender
                }}</span>
              </div>

              <div class="kt-widget4__item"></div>
            </div>
          </div>
        </div>
        <!--end::Portlet-->
      </div>
      <div class="col-xl-4">
        <!--begin::Portlet-->
        <div
          style="border: 1px solid #5d78ff"
          class="kt-portlet kt-portlet--skin-solid kt-portlet-- "
        >
          <div style="background: #5d78ff" class="kt-portlet__head">
            <div class="kt-portlet__head-label">
              <span class="kt-portlet__head-icon">
                <i class="flaticon-notes"></i>
              </span>
              <h3 class="kt-portlet__head-title">
                NURSE TRIAGE - PHYSICAL EXAMINATION
              </h3>
            </div>
          </div>
          <div class="kt-portlet__body">
            <div class="kt-widget4">
              <div style="padding-bottom: 0px" class="kt-widget4__item">
                <span class="kt-widget4__icon">
                  <i class="flaticon-pie-chart-1 kt-font-info"></i>
                </span>
                <a href="#" class="kt-widget4__title kt-widget4__title--light">
                  Weight
                </a>
                <span style="color: #000000" class="kt-widget4__number"
                  >{{ triage.weight }} (kg)</span
                >
              </div>
              <div style="padding-bottom: 0px" class="kt-widget4__item">
                <span class="kt-widget4__icon">
                  <i
                    class="flaticon-safe-shield-protection  kt-font-success"
                  ></i>
                </span>
                <a href="#" class="kt-widget4__title kt-widget4__title--light">
                  Height
                </a>
                <span style="color: #000" class="kt-widget4__number"
                  >{{ triage.height }} (cm)</span
                >
              </div>
              <div style="padding-bottom: 0px" class="kt-widget4__item">
                <span class="kt-widget4__icon">
                  <i class="flaticon2-line-chart kt-font-danger"></i>
                </span>
                <a href="#" class="kt-widget4__title kt-widget4__title--light">
                  BMI
                </a>
                <span style="color: #000" class="kt-widget4__number"
                  >{{ triage.bmi }} (kg/m^2)</span
                >
              </div>
              <div style="padding-bottom: 0px" class="kt-widget4__item">
                <span class="kt-widget4__icon">
                  <i class="flaticon2-pie-chart-1 kt-font-primary"></i>
                </span>
                <a href="#" class="kt-widget4__title kt-widget4__title--light">
                  MUAC
                </a>
                <span
                  v-if="triage.muac == 'Green'"
                  class="kt-badge kt-badge--success kt-badge--inline"
                  >Green</span
                >
                <span
                  v-if="triage.muac == 'Yellow'"
                  class="kt-badge kt-badge--warning kt-badge--inline"
                  >Yellow</span
                >
                <span
                  v-if="triage.muac == 'red'"
                  class="kt-badge kt-badge--danger kt-badge--inline"
                  >Red</span
                >
              </div>
              <div style="padding-bottom: 0px" class="kt-widget4__item">
                <span class="kt-widget4__icon">
                  <i class="flaticon2-rocket kt-font-brand"></i>
                </span>
                <a href="#" class="kt-widget4__title kt-widget4__title--light">
                  Created
                </a>
                <span style="color: #000" class="kt-widget4__number">{{
                  triage.createdAt | moment('ddd, MMM Do YYYY, h:mm a')
                }}</span>
              </div>

              <div class="kt-widget4__item"></div>
            </div>
          </div>
        </div>
        <!--end::Portlet-->
      </div>
      <div class="col-xl-4">
        <!--begin::Portlet-->
        <div
          style="border: 1px solid #0abb87;"
          class="kt-portlet kt-portlet--skin-solid kt-portlet--"
        >
          <div style="background: #0abb87;" class="kt-portlet__head">
            <div class="kt-portlet__head-label">
              <span class="kt-portlet__head-icon">
                <i class="flaticon-notes"></i>
              </span>
              <h3 class="kt-portlet__head-title">
                NURSE TRIAGE - VITAL SIGNS
              </h3>
            </div>
          </div>
          <div class="kt-portlet__body">
            <div class="kt-widget4">
              <div style="padding-bottom: 0px" class="kt-widget4__item">
                <span class="kt-widget4__icon">
                  <i class="flaticon-pie-chart-1 kt-font-info"></i>
                </span>
                <a href="#" class="kt-widget4__title kt-widget4__title--light">
                  RVS
                </a>
                <span style="color: #000000" class="kt-widget4__number"
                  >{{ triage.rvs }} (rvs)</span
                >
              </div>
              <div style="padding-bottom: 0px" class="kt-widget4__item">
                <span class="kt-widget4__icon">
                  <i
                    class="flaticon-safe-shield-protection  kt-font-success"
                  ></i>
                </span>
                <a href="#" class="kt-widget4__title kt-widget4__title--light">
                  Temperature
                </a>
                <span style="color: #000" class="kt-widget4__number"
                  >{{ triage.temperature }} (°C)</span
                >
              </div>
              <div style="padding-bottom: 0px" class="kt-widget4__item">
                <span class="kt-widget4__icon">
                  <i class="flaticon2-line-chart kt-font-danger"></i>
                </span>
                <a href="#" class="kt-widget4__title kt-widget4__title--light">
                  Respiration
                </a>
                <span style="color: #000" class="kt-widget4__number"
                  >{{ triage.respiration }} (C/min)</span
                >
              </div>
              <div
                v-if="age > 0"
                style="padding-bottom: 0px"
                class="kt-widget4__item"
              >
                <span class="kt-widget4__icon">
                  <i class="flaticon2-pie-chart-1 kt-font-primary"></i>
                </span>
                <a href="#" class="kt-widget4__title kt-widget4__title--light">
                  Pulse
                </a>
                <span style="color: #000" class="kt-widget4__number"
                  >{{ triage.pulse }} (B/min)</span
                >
              </div>
              <div v-else style="padding-bottom: 0px" class="kt-widget4__item">
                <span class="kt-widget4__icon">
                  <i class="flaticon2-pie-chart-1 kt-font-primary"></i>
                </span>
                <a href="#" class="kt-widget4__title kt-widget4__title--light">
                  Heart Rate
                </a>
                <span style="color: #000" class="kt-widget4__number"
                  >{{ triage.heartrate }} (B/min)</span
                >
              </div>
              <div style="padding-bottom: 0px" class="kt-widget4__item">
                <span class="kt-widget4__icon">
                  <i class="flaticon2-rocket kt-font-brand"></i>
                </span>
                <a href="#" class="kt-widget4__title kt-widget4__title--light">
                  Blood Pressure
                </a>
                <span style="color: #000" class="kt-widget4__number"
                  >{{ triage.diastolic }}/{{ triage.systolic }} (mmHg)</span
                >
              </div>

              <div class="kt-widget4__item"></div>
            </div>
          </div>
        </div>
        <!--end::Portlet-->
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6">
        <!--begin::Portlet-->
        <div class="kt-portlet">
          <div class="kt-portlet__head">
            <div class="kt-portlet__head-label">
              <span class="kt-portlet__head-icon">
                <i class="flaticon2-calendar-2"></i>
              </span>
              <h3 class="kt-portlet__head-title kt-font-brand">
                HISTORY
              </h3>
            </div>
          </div>
          <div class="kt-portlet__body">
            <div class="form-group form-group-last">
              <label for="exampleTextarea">Reason of Visit</label>
              <textarea
                v-model="input.reasonforvisit"
                class="form-control"
                id="exampleTextarea"
                rows="20"
              ></textarea>
            </div>
          </div>
        </div>

        <!--end::Portlet-->

        <!--begin::Portlet-->
        <div class="kt-portlet">
          <div class="kt-portlet__head">
            <div class="kt-portlet__head-label">
              <h3 class="kt-portlet__head-title kt-font-brand">
                DIAGNOSIS
              </h3>
            </div>
            <div class="kt-portlet__head-toolbar">
              <div class="kt-portlet__head-actions"></div>
            </div>
          </div>
          <div class="kt-portlet__body">
            <div class="form-group form-group-last">
              <label for="exampleTextarea">Diagnosis</label>
              <textarea
                v-model="input.diagnosis"
                class="form-control"
                id="exampleTextarea"
                rows="20"
              ></textarea>
            </div>
          </div>
        </div>

        <!--end::Portlet-->
      </div>
      <div class="col-lg-6">
        <!--begin::Portlet-->
        <div class="kt-portlet kt-portlet--responsive-mobile">
          <div class="kt-portlet__head">
            <div class="kt-portlet__head-label">
              <span class="kt-portlet__head-icon">
                <i class="flaticon-technology kt-font-success"></i>
              </span>
              <h3 class="kt-portlet__head-title kt-font-brand">
                PHYSICAL EXAMINATION
              </h3>
            </div>
          </div>
          <div class="kt-portlet__body">
            <div class="form-group row">
              <label class="col-2 col-form-label">General Examination</label>
              <div class="col-10">
                <textarea
                  v-model="input.observation"
                  class="form-control"
                  rows="3"
                ></textarea>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-2 col-form-label">Chest</label>
              <div class="col-10">
                <input class="form-control" type="text" v-model="input.chest" />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-2 col-form-label">CVS</label>
              <div class="col-10">
                <input class="form-control" type="text" v-model="input.cvs" />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-2 col-form-label">Abdomen</label>
              <div class="col-10">
                <input
                  class="form-control"
                  type="text"
                  v-model="input.abdomen"
                />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-2 col-form-label">MSS</label>
              <div class="col-10">
                <input class="form-control" type="text" v-model="input.mss" />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-2 col-form-label">Other</label>
              <div class="col-10">
                <input class="form-control" type="text" v-model="input.other" />
              </div>
            </div>
          </div>
        </div>

        <!--end::Portlet-->

        <!--begin::Portlet-->
        <div class="kt-portlet kt-portlet--responsive-tablet-and-mobile">
          <div class="kt-portlet__head">
            <div class="kt-portlet__head-label">
              <h3 class="kt-portlet__head-title kt-font-brand">
                TREATMENT
              </h3>
            </div>
          </div>
          <div class="kt-portlet__body">
            <div class="form-group form-group-last">
              <label for="exampleTextarea">Treatment</label>
              <textarea
                v-model="input.treatment"
                class="form-control"
                id="exampleTextarea"
                rows="10"
              ></textarea>
            </div>
          </div>
          <div class="kt-portlet__foot">
            <div class="kt-form__actions">
              <button
                v-if="!loading"
                type="button"
                @click="createAppointmentConsultation"
                class="btn btn-brand"
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
    </div>
  </div>
</template>

<script>
import axios from '../../axios'
export default {
  name: 'appointmentpatient',
  data() {
    return {
      age: '',
      triage: '',
      patient: '',
      loading: false,
      appointmentPatientUrl: '/consultation/consultation/',
      createconsultationUrl: '/consultation/appointment/',
      consultation: '',
      input: {
        reasonforvisit: '',
        diagnosis: '',
        treatment: '',
        observation: '',
        chest: '',
        cvs: '',
        abdomen: '',
        mss: '',
        other: ''
      }
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
    getPage() {
      axios
        .get(this.appointmentPatientUrl + this.$route.params.id)
        .then(response => {
          this.patient = response.data.data.patient
          this.triage = response.data.data.triage
          this.age = response.data.data.age
        })
        .catch(error => {
          this.handleError(error)
        })
    },
    createAppointmentConsultation() {
      this.loading = true
      axios
        .post(this.createconsultationUrl + this.$route.params.id, this.input)
        .then(response => {
          this.loading = false
          this.consultation = response.data.data
          this.$router.push({ path: `/consultation/${this.consultation._id}` })
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
