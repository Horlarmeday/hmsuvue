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
            Create Operation Note

            <small>Create a new operation note</small>
          </h3>
        </div>
      </div>
      <div class="kt-portlet__body">
        <!--begin: Datatable -->
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Anesthetist</label>
              <select v-model="input.anesthetist" class="form-control" required>
                <option disabled>Select</option>
                <option
                  v-for="anesthetist in anesthetists"
                  :key="anesthetist._id"
                  :value="anesthetist._id"
                  >{{ anesthetist.firstname }}
                  {{ anesthetist.lastname }}</option
                >
              </select>
              <span class="form-text text-muted"
                >Please select anesthetist.</span
              >
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Surgeon</label>
              <select v-model="input.surgeon" class="form-control" required>
                <option disabled>Select</option>
                <option
                  v-for="surgeon in surgeons"
                  :key="surgeon._id"
                  :value="surgeon._id"
                  >{{ surgeon.firstname }} {{ surgeon.lastname }}</option
                >
              </select>
              <span class="form-text text-muted">Please select surgeon.</span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Scrub Nurse</label>
              <select v-model="input.scrubnurse" class="form-control" required>
                <option disabled>Select</option>
                <option
                  v-for="nurse in nurses"
                  :key="nurse._id"
                  :value="nurse._id"
                  >{{ nurse.firstname }} {{ nurse.lastname }}</option
                >
              </select>
              <span class="form-text text-muted"
                >Please select scrub nurse.</span
              >
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Assistances</label>
              <v-select
                multiple
                v-model="input.assistance"
                label="firstname"
                :reduce="staffs => staffs._id"
                :options="staffs"
              >
              </v-select>
              <span class="form-text text-muted"
                >Please select assistances.</span
              >
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Surgery</label>
              <textarea
                col="30"
                class="form-control"
                rows="10"
                v-model="input.surgery"
                placeholder="Surgery"
              >
              </textarea>
              <span class="form-text text-muted">Please enter surgery.</span>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Indications</label>
              <textarea
                col="30"
                class="form-control"
                rows="10"
                v-model="input.indications"
                placeholder="Indications"
              >
              </textarea>
              <span class="form-text text-muted"
                >Please enter indications.</span
              >
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Anaesthesia</label>
              <textarea
                col="30"
                class="form-control"
                rows="10"
                v-model="input.anaesthesia"
                placeholder="Anesthesia"
              ></textarea>
              <span class="form-text text-muted"
                >Please enter anaesthesia.</span
              >
            </div>
          </div>
        </div>
        <h5 style="margin-bottom: 30px;color:#5d78ff;">PROCEDURE</h5>
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Procedure</label>
              <textarea
                col="30"
                class="form-control"
                rows="10"
                v-model="input.procedure"
                placeholder="Procedure"
              ></textarea>
              <span class="form-text text-muted">Please enter procedure.</span>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Findings</label>
              <textarea
                col="30"
                class="form-control"
                rows="10"
                v-model="input.findings"
                placeholder="Findings"
              ></textarea>
              <span class="form-text text-muted">Please enter findings.</span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Post-Operation Order</label>
              <textarea
                col="30"
                class="form-control"
                rows="10"
                v-model="input.order"
                placeholder="Post-Operation Order"
              ></textarea>
              <span class="form-text text-muted"
                >Please enter post-operation order.</span
              >
            </div>
          </div>
        </div>

        <div>
          <button
            v-if="!loading"
            @click="createOperation"
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
import vSelect from 'vue-select'
export default {
  name: 'operationnoteForm',
  props: {
    title: {
      type: String
    }
  },
  components: {
    vSelect
  },
  data() {
    return {
      input: {
        surgery: '',
        indications: '',
        anaesthesia: '',
        findings: '',
        procedure: '',
        order: '',
        assistance: [],
        surgeon: '',
        scrubnurse: '',
        anesthetist: ''
      },
      nurses: [],
      anesthetists: [],
      surgeons: [],
      staffs: [],

      operationoteUrl: '/theater/operation/note/',
      landingpageurl: '/appointment/appointments',
      loading: false
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
        .get(this.landingpageurl)
        .then(response => {
          this.nurses = response.data.data.examiners
          this.anesthetists = response.data.data.examiners
          this.surgeons = response.data.data.examiners
          this.staffs = response.data.data.examiners
        })
        .catch(error => {
          this.handleError(error)
        })
    },
    createOperation() {
      this.loading = true
      axios
        .put(this.operationoteUrl + this.$route.params.id, this.input)
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
