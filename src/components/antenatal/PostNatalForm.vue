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
            Create Patient Post Natal Information
            <small>Create a new patient post natal information</small>
          </h3>
        </div>
      </div>
      <div class="kt-portlet__body">
        <!--begin: Datatable -->
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>BP</label>
              <input
                v-model="input.bp"
                type="text"
                class="form-control"
                placeholder="BP"
                required
              />

              <span class="form-text text-muted">Please enter bp.</span>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Temperature (°C)</label>
              <input
                type="text"
                v-model="input.temp"
                class="form-control"
                required
                placeholder="Temperature"
              />
              <span class="form-text text-muted"
                >Please enter temperature.</span
              >
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Pulse (b/min)</label>
              <input
                type="text"
                v-model="input.pulse"
                class="form-control"
                placeholder="Pulse"
                required
              />
              <span class="form-text text-muted">Please enter pulse.</span>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Respiration</label>
              <input
                type="text"
                v-model="input.respiration"
                class="form-control"
                placeholder="Respiration"
                required
              />
              <span class="form-text text-muted"
                >Please enter respiration.</span
              >
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>General Condition</label>
              <input
                type="text"
                v-model="input.generalcondition"
                class="form-control"
                placeholder="General Condition"
                required
              />
              <span class="form-text text-muted"
                >Please enter general condition.</span
              >
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label> Involution of Uterus</label>
              <input
                type="text"
                class="form-control"
                v-model="input.involutionofuterus"
                placeholder="Involution of Uterus"
                required
              />
              <span class="form-text text-muted"
                >Please enter involution of uterus.</span
              >
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Lochia</label>
              <input
                type="text"
                class="form-control"
                v-model="input.lochia"
                placeholder="Lochia"
                required
              />
              <span class="form-text text-muted">Please enter lochia.</span>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Operation Scar/Episotomy</label>
              <input
                type="text"
                class="form-control"
                v-model="input.episotomy"
                placeholder="Operation Scar/Episotomy"
                required
              />
              <span class="form-text text-muted">Please enter episotomy.</span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Pelvic Examination</label>
              <input
                type="text"
                class="form-control"
                v-model="input.pelvicexam"
                placeholder="Pelvic Examination*"
                required
              />
              <span class="form-text text-muted"
                >Please enter pelvic examination.</span
              >
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Pap Smear Date*</label>
              <datetime
                type="date"
                input-class="form-control"
                v-model="input.smeardate"
                required
              ></datetime>
              <span class="form-text text-muted"
                >Please select pap smear date.</span
              >
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Result</label>
              <input
                type="text"
                class="form-control"
                v-model="input.result"
                placeholder="Result"
                required
              />
              <span class="form-text text-muted">Please enter result.</span>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>PCV</label>
              <input
                type="text"
                class="form-control"
                v-model="input.pcv"
                placeholder="PCV"
                required
              />
              <span class="form-text text-muted">Please enter pcv.</span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Baby's Condition</label>
              <input
                type="text"
                class="form-control"
                v-model="input.babycondition"
                placeholder="Baby's Condition"
                required
              />
              <span class="form-text text-muted"
                >Please enter baby's condition.</span
              >
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Weight (kg)</label>
              <input
                type="text"
                class="form-control"
                v-model="input.wt"
                placeholder="Weight"
                required
              />
              <span class="form-text text-muted"
                >Please enter weight of baby.</span
              >
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Reflexes</label>
              <input
                type="text"
                class="form-control"
                v-model="input.reflexes"
                placeholder="Reflexes"
                required
              />
              <span class="form-text text-muted">Please enter reflexes.</span>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label> Feeding</label>
              <input
                type="text"
                class="form-control"
                v-model="input.feeding"
                placeholder="Reflexes"
                required
              />
              <span class="form-text text-muted">Please enter feeding.</span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Umbilical Cord</label>
              <input
                type="text"
                class="form-control"
                v-model="input.umbilicalcord"
              />
              <span class="form-text text-muted"
                >Please enter umbilicalcord.</span
              >
            </div>
          </div>
        </div>
        <div>
          <button
            v-if="!loading"
            @click="createPostNatal"
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
import { Datetime } from 'vue-datetime'
export default {
  name: 'deliveryinfoForm',
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
      input: {
        bp: '',
        temp: '',
        pulse: '',
        respiration: '',
        generalcondition: '',
        involutionofuterus: '',
        lochia: '',
        episotomy: '',
        pelvicexam: '',
        smeardate: '',
        result: '',
        pcv: '',
        babycondition: '',
        wt: '',
        reflexes: '',
        feeding: '',
        umbilicalcord: ''
      },

      postnatalUrl: '/antenatal/postnatal/',
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
    createPostNatal() {
      this.loading = true
      axios
        .put(this.postnatalUrl + this.$route.params.id, this.input)
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
