<template>
  <div class="kt-content  kt-grid__item kt-grid__item--fluid" id="kt_content">
    <div class="row">
      <div class="col-xl-12">
        <!--begin::Portlet-->
        <div class="kt-portlet kt-portlet--tab">
          <div class="kt-portlet__head">
            <div class="kt-portlet__head-label">
              <span class="kt-portlet__head-icon kt-hide">
                <i class="la la-gear"></i>
              </span>
              <h3 class="kt-portlet__head-title">
                Patient Account Type
              </h3>
            </div>
          </div>
          <div class="kt-portlet__body">
            <!--begin::Section-->
            <div class="kt-section">
              <span class="kt-section__info">
                Choose a patient account type
              </span>
              <div class="kt-section__content kt-section__content--solid">
                <p class="lead">
                  Click on the type of patient account you want to create
                </p>
              </div>
            </div>

            <!--end::Section-->
          </div>
        </div>

        <!--end::Portlet-->
      </div>
    </div>
    <div class="row">
      <div class="col-xl-3">
        <!--begin::Portlet-->
        <div
          class="kt-portlet kt-portlet--skin-solid kt-bg-danger pointer"
          @click="goToCreatePatient('Cash')"
        >
          <div class="kt-portlet__head">
            <div class="kt-portlet__head-label">
              <span class="kt-portlet__head-icon">
                <i class="flaticon2-graphic"></i>
              </span>
              <h3 class="kt-portlet__head-title">
                Cash Patient
              </h3>
            </div>
          </div>
          <div class="kt-portlet__body">
            Create a new patient account that has no health insurance.
          </div>
        </div>

        <!--end::Portlet-->
      </div>
      <div class="col-xl-3">
        <!--begin::Portlet-->
        <div
          class="kt-portlet kt-portlet--skin-solid kt-portlet-- kt-bg-brand pointer"
          @click="goToCreatePatient('NHIS')"
        >
          <div class="kt-portlet__head">
            <div class="kt-portlet__head-label">
              <span class="kt-portlet__head-icon">
                <i class="flaticon-notes"></i>
              </span>
              <h3 class="kt-portlet__head-title">
                NHIS Patient
              </h3>
            </div>
          </div>
          <div class="kt-portlet__body">
            Create a new patient account that has NHIS health insurance.
          </div>
        </div>
        <!--end::Portlet-->
      </div>
      <div class="col-xl-3">
        <!--begin::Portlet-->
        <div
          class="kt-portlet kt-portlet--skin-solid kt-portlet-- kt-bg-dark pointer"
          @click="goToCreatePatient('FHSS')"
        >
          <div class="kt-portlet__head">
            <div class="kt-portlet__head-label">
              <span class="kt-portlet__head-icon">
                <i class="flaticon-notes"></i>
              </span>
              <h3 class="kt-portlet__head-title">
                FHSS Patient
              </h3>
            </div>
          </div>
          <div class="kt-portlet__body">
            Create a new patient account that has FHSS health insurance
          </div>
        </div>
        <!--end::Portlet-->
      </div>
      <div class="col-xl-3">
        <!--begin::Portlet-->
        <div
          class="kt-portlet kt-portlet--skin-solid kt-portlet-- kt-bg-success pointer"
          @click="goToCreatePatient('Private')"
        >
          <div class="kt-portlet__head">
            <div class="kt-portlet__head-label">
              <span class="kt-portlet__head-icon">
                <i class="flaticon-notes"></i>
              </span>
              <h3 class="kt-portlet__head-title">
                Private Patient
              </h3>
            </div>
          </div>
          <div class="kt-portlet__body">
            Create a new patient account that has a private health insurance.
          </div>
        </div>
        <!--end::Portlet-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'createpatientlandingpageform',
  data() {
    return {}
  },
  methods: {
    goToCreatePatient(value) {
      localStorage.setItem('patienttype', value)
      this.$router.push('/create-patient')
    }
  }
}
</script>

<style>
.form-control[readonly] {
  background: rgb(224, 224, 224) !important;
}
.pointer {
  cursor: pointer;
}
</style>
