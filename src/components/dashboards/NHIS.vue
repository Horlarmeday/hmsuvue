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
                    Total number of NHIS patients
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
                    NHIS
                  </h4>
                  <span class="kt-widget24__desc">
                    Total number of NHIS personnel
                  </span>
                </div>
                <span class="kt-widget24__stats kt-font-success">
                  {{ nhisCount }}
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
      <div class="col-xl-6">
        <!--begin:: Widgets/Tasks -->
        <div class="kt-portlet kt-portlet--tabs kt-portlet--height-fluid">
          <div class="kt-portlet__head">
            <div class="kt-portlet__head-label">
              <h3 class="kt-portlet__head-title">
                Patients
              </h3>
            </div>
          </div>
          <div class="kt-portlet__body">
            <!--begin: Search Form -->
            <div class="kt-form kt-form--label-right">
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
          <div class="kt-portlet__body">
            <div class="dt-responsive table-responsive">
              <table class="table table-striped table-bordered nowrap">
                <thead>
                  <tr>
                    <th>S/N</th>
                    <th>Photo</th>
                    <th>Patient ID</th>
                    <th>Patient Name</th>
                    <th>Age</th>
                    <th>Phone Number</th>
                    <th>Status</th>
                    <th>Date Registered</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-if="patients.length == 0">
                    <td colspan="9" align="center">No Registered Patients</td>
                  </tr>
                  <tr v-for="(patient, index) in patients" :key="patient._id">
                    <td>
                      {{ index + 1 }}
                    </td>
                    <td>
                      <img
                        v-if="patient.photo"
                        style="border-radius: 5px"
                        width="40"
                        :src="patient.photourl"
                        alt="Patient Image"
                      />
                      <img
                        style="border-radius: 5px"
                        v-else
                        width="40"
                        src="../../assets/images/100_4.jpg"
                        alt="patient image"
                      />
                    </td>
                    <td>{{ patient.patientId }}</td>

                    <td>
                      <router-link :to="patient.url">
                        {{ patient.firstname }} {{ patient.lastname }}
                      </router-link>
                    </td>
                    <td>
                      {{ patient.birthday | moment('from', 'now', true) }}
                    </td>
                    <td>
                      {{ patient.phonenumber }}
                    </td>
                    <td>
                      <label
                        v-if="patient.admissionStatus == 'Addmitted'"
                        class="kt-badge kt-badge--danger kt-badge--inline kt-badge--pill"
                        >{{ patient.admissionStatus }}</label
                      >
                      <label
                        v-if="patient.admissionStatus == 'Discharged'"
                        class="kt-badge kt-badge--dark kt-badge--inline kt-badge--pill"
                        >{{ patient.admissionStatus }}</label
                      >
                      <label
                        v-if="patient.admissionStatus == 'Normal'"
                        class="kt-badge kt-badge--info kt-badge--inline kt-badge--pill"
                        >{{ patient.admissionStatus }}</label
                      >
                    </td>
                    <td>
                      {{ patient.createdAt | moment('DD/MM/YYYY') }}
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
          </div>
        </div>

        <!--end:: Widgets/Tasks -->
      </div>
      <div class="col-xl-6">
        <!--begin:: Widgets/New Users-->
        <div class="kt-portlet kt-portlet--tabs kt-portlet--height-fluid">
          <div class="kt-portlet__head">
            <div class="kt-portlet__head-label">
              <h3 class="kt-portlet__head-title">
                Lab Tests
              </h3>
            </div>
          </div>
          <div class="kt-portlet__body">
            <div class="tab-content">
              <div class="tab-pane active" id="kt_widget4_tab1_content">
                <div class="dt-responsive table-responsive">
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th>S/N</th>
                        <th>Patient Name</th>
                        <!-- <th>Reason for Visit</th> -->
                        <th>Lab Tests</th>
                        <th>Requested By</th>
                        <th>Payment Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody v-if="consultations.length == 0">
                      <tr>
                        <td colspan="15" align="center">
                          No Requested Tests
                        </td>
                      </tr>
                    </tbody>
                    <tbody>
                      <tr
                        v-for="(consultation, index) in consultations"
                        :key="consultation._id"
                      >
                        <td>
                          {{ index + 1 }}
                        </td>

                        <td v-if="consultation.patient">
                          <router-link to="#">
                            {{ consultation.patient.firstname }}
                            {{ consultation.patient.lastname }}
                          </router-link>
                        </td>
                        <td v-if="consultation.dependant">
                          <router-link to="#">
                            {{ consultation.dependant.name }}
                            <small
                              class="kt-badge kt-badge--danger kt-badge--inline"
                              >Dependant</small
                            >
                          </router-link>
                        </td>
                        <!-- <td>
                          {{ consultation.reasonforvisit }}
                        </td> -->
                        <td>
                          <label
                            v-for="(test, index) in consultation.tests"
                            :key="test._id"
                            class="kt-checkbox"
                          >
                            <input
                              name="testChecked"
                              @change="checkTest(consultation, index)"
                              type="checkbox"
                            />
                            {{ test.test.name }}

                            <small
                              v-if="!test.status"
                              class="kt-badge kt-badge--warning kt-badge--inline kt-badge--pill"
                              >pending</small
                            >
                            <small
                              v-else
                              class="kt-badge kt-badge--success kt-badge--inline kt-badge--pill"
                              >cleared</small
                            >
                            <span></span>
                          </label>
                        </td>
                        <td>
                          <router-link to="#">
                            {{ consultation.examiner.firstname }}
                            {{ consultation.examiner.lastname }}
                          </router-link>
                        </td>
                        <td>
                          <label
                            v-if="consultation.labtestpaid == 'Pending'"
                            class="kt-badge kt-badge--warning kt-badge--inline kt-badge--pill"
                            >{{ consultation.labtestpaid }}</label
                          >
                          <label
                            v-if="consultation.labtestpaid == 'Paid'"
                            class="kt-badge kt-badge--success kt-badge--inline kt-badge--pill"
                            >{{ consultation.labtestpaid }}</label
                          >
                          <label
                            v-if="consultation.labtestpaid == 'Cleared by NHIS'"
                            class="kt-badge kt-badge--success kt-badge--inline kt-badge--pill"
                            >{{ consultation.labtestpaid }}</label
                          >
                        </td>
                        <td>
                          <button
                            v-if="!loading"
                            class="btn btn-danger btn-sm"
                            @click="clearPayment(consultation, index)"
                          >
                            Clear Payment
                          </button>
                          <button
                            v-if="
                              loading &&
                                consultation._id == currentConsultation._id
                            "
                            class="btn btn-brand btn-sm kt-spinner kt-spinner--right 
                      kt-spinner--sm kt-spinner--light btn-elevate float-right"
                            disabled
                          >
                            Clearing...
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <b-pagination
                  class="float-right"
                  v-model="currentPage"
                  :per-page="7"
                  :total-rows="drows"
                  first-text="First"
                  prev-text="Prev"
                  next-text="Next"
                  last-text="Last"
                ></b-pagination>
              </div>
            </div>
          </div>
        </div>

        <!--end:: Widgets/New Users-->
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
  name: 'nursedasboard',
  data() {
    return {
      patients: [],
      consultations: [],
      totalPatients: '',
      triagesCount: '',
      nhisCount: '',
      appointmentCount: '',
      patientId: '',
      currentConsultation: '',
      loading: false,
      landingPageUrl: '/dashboard/nhis',
      clearpaymenturl: '/account/clear/labtest',
      imageurl: 'http://localhost:3000/static/uploads/',

      checktestUrl: '/ajax/change/test/status/true',
      unchecktestUrl: '/ajax/change/test/status/false',
      input: '',
      photo: '',

      currentPage: 1,
      pageCount: '',
      pageSize: '',
      rows: '',
      meta: ''
    }
  },
  mounted() {
    this.dashboard()
  },
  methods: {
    handleError(error) {
      console.log(error.response)
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
          this.patients = response.data.data.patients
          this.totalPatients = response.data.data.patientCount
          this.triagesCount = response.data.data.triagesCount
          this.nhisCount = response.data.data.nhisCount
          this.appointmentCount = response.data.data.appointmentCount

          this.meta = response.data.data.meta
          this.rows = this.meta.count
          this.pageSize = this.meta.pageSize
          this.pageCount = this.meta.pageCount

          let patients = this.patients

          for (let i = 0; i < patients.length; i++) {
            patients[i].url = '/patient/' + patients[i]._id
            patients[i].photourl = this.imageurl + patients[i].photo
          }
        })
        .catch(error => {
          this.handleError(error)
        })
    },
    checkTest(consultation, index) {
      let isChecked = document.getElementsByName('testChecked')[index].checked
      const data = {
        consultationId: consultation._id,
        index: index
      }

      if (isChecked === true) {
        axios
          .post(this.checktestUrl, data)
          .then(response => {
            consultation.tests[index].status = response.data.data
          })
          .catch(error => {
            this.loading = false
            this.handleError(error)
          })
      } else {
        axios
          .post(this.unchecktestUrl, data)
          .then(response => {
            consultation.tests[index].status = response.data.data
          })
          .catch(error => {
            this.loading = false
            this.handleError(error)
          })
      }
    },
    clearPayment(consultation, index) {
      let isChecked = document.getElementsByName('testChecked')[index].checked
      if (isChecked === false) {
        this.$iziToast.error({
          title: 'Error!',
          message: 'Please tick all the checkbox'
        })
        return
      }
      this.loading = true
      this.currentConsultation = consultation
      const data = {
        consultationId: consultation._id
      }
      axios
        .post(this.clearpaymenturl, data)
        .then(response => {
          this.consultations = response.data.data
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
    },
    drows() {
      return this.consultations.length
    }
  }
}
</script>

<style></style>
