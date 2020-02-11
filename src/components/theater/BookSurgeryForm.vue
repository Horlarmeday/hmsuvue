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
            Book Patient Surgery
            <small>Book a new patient surgery</small>
          </h3>
        </div>
      </div>
      <div class="kt-portlet__body">
        <!--begin: Datatable -->
        <div class="row">
          <div class="col-xl-12">
            <div class="form-group">
              <label>Patient </label>
              <v-select
                v-model="input.patientId"
                label="firstname"
                :reduce="patients => patients._id"
                :options="patients"
              ></v-select>
              <span class="form-text text-muted">Please select patient.</span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-12">
            <div class="form-group">
              <label>Surgery</label>
              <select v-model="input.book" class="form-control">
                <option selected disabled>Select</option>
                <option value="Antenatal (CS)">Antenatal (CS)</option>
                <option value="Myomectomy">Myomectomy</option>
                <option value="Ovarian Cystectomy">Ovarian Cystectomy</option>
                <option value="Hysterectomy">Hysterectomy</option>
                <option value="Salpingectomy">Salpingectomy</option>
              </select>
              <span class="form-text text-muted">Please select surgery.</span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-12">
            <div class="form-group">
              <label>Comments</label>
              <textarea
                col="30"
                class="form-control"
                rows="10"
                v-model="input.comment"
                placeholder="Comment"
              >
              </textarea>
              <span class="form-text text-muted">Please enter comments.</span>
            </div>
          </div>
        </div>
        <div>
          <button
            v-if="!loading"
            @click="bookSurgery"
            class="btn btn-brand btn-elevate float-right"
          >
            Create Request
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
import vSelect from 'vue-select'
export default {
  name: 'booksurgery',
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
        patientId: '',
        book: '',
        comment: ''
      },
      patients: [],

      booksurgeryurl: '/theater',
      landingpageurl: '/theater/surgerypage',
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
    bookSurgery() {
      this.loading = true
      axios
        .post(this.booksurgeryurl, this.input)
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
        .get(this.landingpageurl)
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
