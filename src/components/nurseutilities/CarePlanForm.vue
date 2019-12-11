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
            Create Care Plan
            <small>Create a new care plan</small>
          </h3>
        </div>
      </div>
      <div class="kt-portlet__body">
        <!--begin: Datatable -->
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Nursing Diagnosis </label>
              <input
                type="text"
                class="form-control"
                v-model="diagnosis"
                placeholder="Nursing Diagnosis"
                required
              />
              <span class="form-text text-muted">Please enter diagnosis.</span>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Nursing Objective</label>
              <input
                type="number"
                class="form-control"
                v-model="objective"
                placeholder="Nursing Objective"
                required
              />
              <span class="form-text text-muted">Please enter objective.</span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Nursing Action</label>
              <input
                type="number"
                class="form-control"
                v-model="action"
                placeholder="Nursing Action"
                required
              />
              <span class="form-text text-muted">Please enter action.</span>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Scientific Principle</label>
              <input
                type="text"
                class="form-control"
                placeholder="Scientific Principle"
                v-model="scientificprinciple"
                required
              />
              <span class="form-text text-muted"
                >Please enter scientific principle.</span
              >
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Evaluation</label>
              <input
                type="text"
                class="form-control"
                v-model="evaluation"
                placeholder="Evaluation"
                required
              />
              <span class="form-text text-muted">Please enter evaluation.</span>
            </div>
          </div>
        </div>
        <div>
          <button
            v-if="!loading"
            @click="createReport"
            class="btn btn-brand btn-elevate float-right"
          >
            Create Careplan
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
      evaluation: '',
      action: '',
      scientificprinciple: '',
      diagnosis: '',
      objective: '',

      careplanUrl: '/nurse/nursing/careplan',
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
    createReport() {
      this.loading = true
      const data = {
        evaluation: this.evaluation,
        action: this.action,
        scientificprinciple: this.scientificprinciple,
        diagnosis: this.diagnosis,
        objective: this.objective
      }
      axios
        .post(this.careplanUrl, data)
        .then(response => {
          this.evaluation = ''
          this.action = ''
          this.scientificprinciple = ''
          this.diagnosis = ''
          this.objective = ''

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
