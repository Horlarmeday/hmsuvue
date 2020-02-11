<template>
  <!-- begin:: Content -->
  <div class="kt-content  kt-grid__item kt-grid__item--fluid" id="kt_content">
    <!--Begin::Dashboard 1-->

    <!--begin:: Widgets/Stats-->
    <div class="kt-portlet">
      <div class="kt-portlet__body  kt-portlet__body--fit">
        <div class="row row-no-padding row-col-separator-xl">
          <div class="col-md-12 col-lg-6 col-xl-3">
            <!--begin::Total Profit-->
            <div class="kt-widget24">
              <div class="kt-widget24__details">
                <div class="kt-widget24__info">
                  <h4 class="kt-widget24__title">
                    Patients
                  </h4>
                  <span class="kt-widget24__desc">
                    Total number of patients
                  </span>
                </div>
                <span class="kt-widget24__stats kt-font-brand">
                  {{ totalPatients }}
                </span>
              </div>
              <div class="progress progress--sm">
                <div
                  class="progress-bar kt-bg-brand"
                  role="progressbar"
                  style="width: 78%;"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div class="kt-widget24__action">
                <span class="kt-widget24__change">
                  Change
                </span>
                <span class="kt-widget24__number">
                  78%
                </span>
              </div>
            </div>

            <!--end::Total Profit-->
          </div>
          <div class="col-md-12 col-lg-6 col-xl-3">
            <!--begin::New Feedbacks-->
            <div class="kt-widget24">
              <div class="kt-widget24__details">
                <div class="kt-widget24__info">
                  <h4 class="kt-widget24__title">
                    Attended Patient
                  </h4>
                  <span class="kt-widget24__desc">
                    Number of times attended to patients
                  </span>
                </div>
                <span class="kt-widget24__stats kt-font-warning">
                  {{ triagesCount }}
                </span>
              </div>
              <div class="progress progress--sm">
                <div
                  class="progress-bar kt-bg-warning"
                  role="progressbar"
                  style="width: 84%;"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div class="kt-widget24__action">
                <span class="kt-widget24__change">
                  Change
                </span>
                <span class="kt-widget24__number">
                  84%
                </span>
              </div>
            </div>

            <!--end::New Feedbacks-->
          </div>
          <div class="col-md-12 col-lg-6 col-xl-3">
            <!--begin::New Orders-->
            <div class="kt-widget24">
              <div class="kt-widget24__details">
                <div class="kt-widget24__info">
                  <h4 class="kt-widget24__title">
                    Appointments
                  </h4>
                  <span class="kt-widget24__desc">
                    Number of appointments created
                  </span>
                </div>
                <span class="kt-widget24__stats kt-font-danger">
                  {{ appointmentCount }}
                </span>
              </div>
              <div class="progress progress--sm">
                <div
                  class="progress-bar kt-bg-danger"
                  role="progressbar"
                  style="width: 69%;"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div class="kt-widget24__action">
                <span class="kt-widget24__change">
                  Change
                </span>
                <span class="kt-widget24__number">
                  69%
                </span>
              </div>
            </div>

            <!--end::New Orders-->
          </div>
          <div class="col-md-12 col-lg-6 col-xl-3">
            <!--begin::New Users-->
            <div class="kt-widget24">
              <div class="kt-widget24__details">
                <div class="kt-widget24__info">
                  <h4 class="kt-widget24__title">
                    Medical Imaging
                  </h4>
                  <span class="kt-widget24__desc">
                    Total number of imaging personnel
                  </span>
                </div>
                <span class="kt-widget24__stats kt-font-success">
                  {{ imagingCount }}
                </span>
              </div>
              <div class="progress progress--sm">
                <div
                  class="progress-bar kt-bg-success"
                  role="progressbar"
                  style="width: 90%;"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div class="kt-widget24__action">
                <span class="kt-widget24__change">
                  Change
                </span>
                <span class="kt-widget24__number">
                  90%
                </span>
              </div>
            </div>

            <!--end::New Users-->
          </div>
        </div>
      </div>
    </div>

    <!--end:: Widgets/Stats-->

    <!--Begin::Section-->
    <div class="row">
      <div class="col-xl-12">
        <!--begin:: Widgets/Tasks -->
        <div class="kt-portlet kt-portlet--tabs kt-portlet--height-fluid">
          <div class="kt-portlet__head">
            <div class="kt-portlet__head-label">
              <h3 class="kt-portlet__head-title">
                Imaging Requests
              </h3>
            </div>
          </div>
          <div class="kt-portlet__body">
            <!--begin: Search Form -->
            <div
              class="kt-form kt-form--label-right kt-margin-t-20 kt-margin-b-10"
            >
              <div class="row align-items-center">
                <div class="col-xl-8 order-2 order-xl-1">
                  <div class="row align-items-center">
                    <div class="col-md-4 kt-margin-b-20-tablet-and-mobile">
                      <div class="kt-input-icon kt-input-icon--left">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Search..."
                          v-model="input"
                          @keyup="dashboard"
                        />
                        <span
                          class="kt-input-icon__icon kt-input-icon__icon--left"
                        >
                          <span><i class="la la-search"></i></span>
                        </span>
                      </div>
                    </div>
                    <div class="col-md-4 kt-margin-b-20-tablet-and-mobile">
                      <div class="kt-form__group kt-form__group--inline">
                        <div class="kt-form__label">
                          <label>Filter:</label>
                        </div>
                        <div class="kt-form__control">
                          <select
                            class="form-control bootstrap-select"
                            id="kt_form_status"
                            v-model="date"
                          >
                            <option value="">Select</option>
                            <option value="today">Today</option>
                            <option value="week">This Week</option>
                            <option value="30days">Last 30 Days</option>
                            <option value="total">Total</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 order-1 order-xl-2 kt-align-right">
                  <a href="#" class="btn btn-default kt-hidden">
                    <i class="la la-cart-plus"></i> New Order
                  </a>
                  <div
                    class="kt-separator kt-separator--border-dashed kt-separator--space-lg d-xl-none"
                  ></div>
                </div>
              </div>
            </div>

            <!--end: Search Form -->
          </div>
          <div class="kt-portlet__body ">
            <!--begin: Datatable -->
            <div class="dt-responsive table-responsive">
              <table class="table table-striped table-bordered nowrap">
                <thead>
                  <tr>
                    <th>S/N</th>
                    <th>Patient Name</th>
                    <th>Reason for visit</th>
                    <th>Diagnosis</th>
                    <th>Imaging Test</th>
                    <th>Imaging Result</th>
                    <th>Payment Status</th>
                    <th>Created</th>
                    <th>Result</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody v-if="consultations.length == 0">
                  <tr>
                    <td colspan="9" align="center">
                      No Medical Investigations
                    </td>
                  </tr>
                </tbody>
                <tbody
                  v-for="(consultation, index) in consultations"
                  :key="consultation._id"
                >
                  <tr>
                    <td>
                      {{ index + 1 }}
                    </td>
                    <td>
                      <router-link
                        v-if="consultation.patient"
                        :to="consultation.url"
                      >
                        {{ consultation.patient.firstname }}
                        {{ consultation.patient.lastname }}
                      </router-link>
                      <router-link v-else to="#">
                        {{ consultation.patient.firstname }}
                        {{ consultation.patient.lastname }}
                      </router-link>
                    </td>
                    <td>{{ consultation.reasonforvisit }}</td>
                    <td>{{ consultation.diagnosis }}</td>

                    <td v-if="consultation.imagings.length > 0">
                      <p
                        v-for="imaging in consultation.imagings"
                        :key="imaging._id"
                      >
                        <span>{{ imaging.investigation.name }}</span>
                      </p>
                    </td>
                    <td v-else>No Investigations</td>
                    <td>
                      <router-link to="#">View Result</router-link>
                    </td>
                    <td>
                      <label
                        v-if="consultation.imagingpaid"
                        class="kt-badge kt-badge--success kt-badge--inline"
                        >Paid</label
                      >
                      <label
                        v-else
                        class="kt-badge kt-badge--warning kt-badge--inline"
                        >Pending</label
                      >
                    </td>

                    <td>
                      {{ consultation.updatedAt | moment('DD/MM/YYYY, ha') }}
                    </td>
                    <td>
                      <router-link
                        :to="consultation.scanurl"
                        class="btn btn-brand btn-elevated btn-sm mr-2"
                      >
                        Add Result (Scan)
                      </router-link>
                      <router-link
                        to="#"
                        class="btn btn-brand btn-elevated btn-sm mr-2"
                      >
                        Add Result (X-ray)
                      </router-link>
                    </td>
                    <td>
                      <button
                        :disabled="!consultation.imagingpaid"
                        class="btn btn-success"
                        @click="doneImagingResult(consultation)"
                      >
                        Done
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="card-footer">
              <p class="float-left">
                Showing {{ pageSize }} of {{ rows }} entries
              </p>
              <button
                class="btn btn-outline-brand btn-sm ml-3 float-right"
                :disabled="isNextButtonDisabled"
                @click="pageChangeHandle('next')"
              >
                Next →
              </button>

              <button
                class="btn btn-outline-brand btn-sm float-right"
                :disabled="isPreviousButtonDisabled"
                @click="pageChangeHandle('previous')"
              >
                ← Prev
              </button>
            </div>

            <!--end: Datatable -->
          </div>
        </div>

        <!--end:: Widgets/Tasks -->
      </div>
    </div>
    <!--End::Section-->

    <!--End::Dashboard 1-->
  </div>
  <!-- end:: Content -->
</template>

<script>
import axios from '../../axios'

export default {
  name: 'imagingdashboard',
  data() {
    return {
      consultations: [],
      consultationId: '',
      totalPatients: '',
      triagesCount: '',
      imagingCount: '',
      appointmentCount: '',

      date: '',
      status: '',
      loading: false,

      landingPageUrl: '/dashboard/imaging',
      finishimagingtesturl: '/imaging/finish/imaging/',
      currentPage: 1,
      pageCount: '',
      pageSize: '',
      rows: '',
      meta: '',
      input: ''
    }
  },
  mounted() {
    this.dashboard()
  },
  methods: {
    handleError(error) {
      this.$iziToast.error({
        title: 'Error!',
        message: error.response.data
      })
    },
    dashboard() {
      axios
        .get(
          `${this.landingPageUrl}?currentPage=${this.currentPage}&search=${this.input}`
        )
        .then(response => {
          this.consultations = response.data.data.consultations
          this.totalPatients = response.data.data.patientCount
          this.triagesCount = response.data.data.triagesCount
          this.imagingCount = response.data.data.imagingCount
          this.appointmentCount = response.data.data.appointmentCount
          this.meta = response.data.data.meta
          this.rows = this.meta.count
          this.pageSize = this.meta.pageSize
          this.pageCount = this.meta.pageCount

          let consultations = this.consultations

          for (let i = 0; i < consultations.length; i++) {
            if (consultations[i].patient) {
              consultations[i].url = '/patient/' + consultations[i].patient._id
            }
            consultations[i].scanurl =
              '/ultrasound-scan-result/' + consultations[i]._id
          }
        })
        .catch(error => {
          this.handleError(error)
        })
    },
    doneImagingResult(consultation) {
      const data = {
        consultationId: consultation._id
      }
      axios
        .post(this.finishimagingtesturl, data)
        .then(response => {
          this.consultations = response.data.data
          this.$iziToast.success({
            title: 'Success!',
            message: response.data.message
          })
        })
        .catch(error => {
          this.handleError(error)
        })
    },

    pageChangeHandle(value) {
      if (value === 'next') {
        this.currentPage += 1
        this.dashboard()
      } else if (value === 'previous') {
        this.currentPage -= 1
        this.dashboard()
      }
    }
  },
  filters: {
    toCurrency: function(value) {
      if (typeof value !== 'number') {
        var formatCurreny = new Intl.NumberFormat('en-US').format(
          parseInt(value)
        )
        return formatCurreny
      }
      var formatter = new Intl.NumberFormat('en-US').format(value)
      return formatter
    }
  },
  computed: {
    isPreviousButtonDisabled() {
      return this.currentPage === 1
    },
    isNextButtonDisabled() {
      return this.currentPage === this.pageCount
    }
  }
}
</script>

<style></style>
