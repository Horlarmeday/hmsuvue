<template>
  <!-- begin:: Content -->
  <div class="kt-content  kt-grid__item kt-grid__item--fluid" id="kt_content">
    <div class="kt-portlet kt-portlet--mobile">
      <div class="kt-portlet__head kt-portlet__head--lg">
        <div class="kt-portlet__head-label">
          <span class="kt-portlet__head-icon">
            <i class="kt-font-brand flaticon2-line-chart"></i>
          </span>
          <h3 v-if="patient" class="kt-portlet__head-title">
            {{ patient.firstname }} {{ patient.lastname }} Scan Photos
            <small>scan images</small>
          </h3>
          <!-- <h3 v-if="dependant" class="kt-portlet__head-title">
            {{ dependant.name }} Scan Photos
            <small>scan images</small>
          </h3> -->
        </div>
      </div>
      <div class="kt-portlet__body">
        <!--begin: Datatable -->
        <div class="row">
          <div v-for="image in images" :key="image" class="col-xl-3">
            <img
              :src="image"
              class="rounded img-fluid img-thumbnail"
              alt="Responsive image"
            />
          </div>
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
  name: 'scanphotos',
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {
      patient: '',
      dependant: '',
      images: [],
      imagingUrl: '/imaging/scanned/images/',
      scanurl:
        process.env.VUE_APP_SCAN_URL ||
        'http://localhost:3000/static/scanphotos/'
    }
  },
  mounted() {
    this.getScannedImages()
  },
  methods: {
    handleError(error) {
      this.$iziToast.error({
        title: 'Error!',
        message: error.response.data
      })
    },

    getScannedImages() {
      axios
        .get(this.imagingUrl + this.$route.params.id)
        .then(response => {
          this.images = response.data.data.scanPhoto
          let images = this.images
          for (let i = 0; i < images.length; i++) {
            images[i] = this.scanurl + images[i]
          }
          if (response.data.data.patient) {
            this.patient = response.data.data.patient
          }
          if (response.data.data.dependant) {
            this.dependant = response.data.data.dependant
          }
        })
        .catch(error => {
          this.handleError(error)
        })
    }
  }
}
</script>

<style></style>
