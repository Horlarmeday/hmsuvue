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
      <div class="col-xl-12">
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
                    <th>Hospital Number</th>
                    <th>Phone Number</th>
                    <th>Insurance Plan</th>
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
                      <small
                        v-if="patient.retainershipname"
                        class="kt-badge kt-badge--success kt-badge--inline"
                      >
                        {{ patient.insurancetype.name }}
                      </small>
                    </td>
                    <td>
                      {{ patient.hospitalId }}
                    </td>
                    <td>
                      {{ patient.phonenumber }}
                    </td>
                    <td>
                      {{ patient.plan }}
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
      <div class="col-xl-12">
        <!--begin:: Widgets/New Users-->
        <div class="kt-portlet kt-portlet--tabs kt-portlet--height-fluid">
          <div class="kt-portlet__head">
            <div class="kt-portlet__head-label">
              <h3 class="kt-portlet__head-title">
                Laboratory Tests
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
                    <tbody
                      v-for="(consultation, index) in consultations"
                      :key="consultation._id"
                    >
                      <tr>
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
                        <td>
                          <p v-for="test in consultation.tests" :key="test._id">
                            <span>{{ test.test.name }}</span>
                          </p>
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
                            v-if="consultation.labtestpaid == 'Cleared'"
                            class="kt-badge kt-badge--success kt-badge--inline kt-badge--pill"
                            >{{ consultation.labtestpaid }}</label
                          >
                        </td>
                        <td>
                          <button
                            v-if="consultation.labtestpaid !== 'Cleared'"
                            class="btn btn-danger btn-sm"
                            data-toggle="modal"
                            data-target="#kt_modal_4"
                            @click="getConsultationTests(consultation, index)"
                          >
                            Clear Payment
                          </button>
                          <button v-else class="btn btn-sm kt-label-bg-color-2">
                            Cleared
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <b-pagination
                  class="float-right"
                  v-model="currentPage"
                  :per-page="10"
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

        <!--begin::Modal-->
        <div
          class="modal fade"
          id="kt_modal_4"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Clear Lab Test Payment
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div class="form-group row">
                  <label class="col-2 col-form-label">Tests</label>
                  <div class="col-10">
                    <p v-for="(test, index) in tests" :key="test._id">
                      <span>
                        <input
                          name="testChecked"
                          @change="checkTest(index)"
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
                      </span>
                    </p>
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-2 col-form-label">Price</label>
                  <div class="col-10">
                    <textarea
                      v-model="code"
                      class="form-control"
                      cols="30"
                      rows="10"
                      placeholder="Authorization Code"
                      required
                    ></textarea>
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    v-if="!loading"
                    class="btn btn-danger btn-sm"
                    data-toggle="modal"
                    data-target="#kt_modal_4"
                    @click="clearTestPayment"
                  >
                    Clear Payment
                  </button>
                  <button
                    v-if="loading"
                    class="btn btn-brand btn-sm kt-spinner kt-spinner--right 
                      kt-spinner--sm kt-spinner--light btn-elevate float-right"
                    disabled
                  >
                    Clearing...
                  </button>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--end::Modal-->

        <!--end:: Widgets/New Users-->
      </div>
      <div class="col-xl-12">
        <!--begin:: Widgets/New Users-->
        <div class="kt-portlet kt-portlet--tabs kt-portlet--height-fluid">
          <div class="kt-portlet__head">
            <div class="kt-portlet__head-label">
              <h3 class="kt-portlet__head-title">
                Drugs
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
                        <th>Drugs</th>
                        <th>Requested By</th>
                        <th>Payment Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody v-if="drugconsultations.length == 0">
                      <tr>
                        <td colspan="15" align="center">
                          No Medication Requests
                        </td>
                      </tr>
                    </tbody>
                    <tbody
                      v-for="(consultation, index) in drugconsultations"
                      :key="consultation._id"
                    >
                      <tr>
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
                        <td>
                          <p v-for="drug in consultation.drugs" :key="drug._id">
                            <span>
                              {{ drug.drug.name }}
                            </span>
                          </p>
                        </td>
                        <td>
                          <router-link to="#">
                            {{ consultation.examiner.firstname }}
                            {{ consultation.examiner.lastname }}
                          </router-link>
                        </td>
                        <td>
                          <label
                            v-if="consultation.drugpaid == 'Pending'"
                            class="kt-badge kt-badge--warning kt-badge--inline kt-badge--pill"
                            >{{ consultation.drugpaid }}</label
                          >
                          <label
                            v-if="consultation.drugpaid == 'Paid'"
                            class="kt-badge kt-badge--success kt-badge--inline kt-badge--pill"
                            >{{ consultation.drugpaid }}</label
                          >
                          <label
                            v-if="consultation.drugpaid == 'Cleared'"
                            class="kt-badge kt-badge--success kt-badge--inline kt-badge--pill"
                            >{{ consultation.drugpaid }}</label
                          >
                        </td>
                        <td>
                          <button
                            v-if="consultation.drugpaid !== 'Cleared'"
                            class="btn btn-danger btn-sm"
                            data-toggle="modal"
                            data-target="#kt_modal_3"
                            @click="getConsultationDrugs(consultation, index)"
                          >
                            Clear Payment
                          </button>
                          <button v-else class="btn btn-sm kt-label-bg-color-2">
                            Cleared
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

        <!--begin::Modal-->
        <div
          class="modal fade"
          id="kt_modal_3"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Clear Drugs Payment
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div class="form-group row">
                  <label class="col-2 col-form-label">Drugs</label>
                  <div class="col-10">
                    <p v-for="(drug, index) in drugs" :key="drug._id">
                      <span>
                        <input
                          name="drugChecked"
                          @change="checkDrug(index)"
                          type="checkbox"
                        />

                        {{ drug.drug.name }}
                        <small
                          v-if="!drug.status"
                          class="kt-badge kt-badge--warning kt-badge--inline kt-badge--pill"
                          >pending</small
                        >
                        <small
                          v-else
                          class="kt-badge kt-badge--success kt-badge--inline kt-badge--pill"
                          >cleared</small
                        >
                        <span></span>
                      </span>
                    </p>
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-2 col-form-label">Price</label>
                  <div class="col-10">
                    <textarea
                      v-model="code"
                      class="form-control"
                      cols="30"
                      rows="10"
                      placeholder="Authorization Code"
                      required
                    ></textarea>
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    v-if="!loading"
                    class="btn btn-danger btn-sm"
                    @click="clearDrugPayment"
                  >
                    Clear Payment
                  </button>
                  <button
                    v-if="loading"
                    class="btn btn-brand btn-sm kt-spinner kt-spinner--right 
                      kt-spinner--sm kt-spinner--light btn-elevate float-right"
                    disabled
                  >
                    Clearing...
                  </button>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--end::Modal-->
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
  name: 'nhisdasboard',
  data() {
    return {
      patients: [],
      consultations: [],
      drugconsultations: [],
      drugs: [],
      tests: [],
      totalPatients: '',
      triagesCount: '',
      nhisCount: '',
      appointmentCount: '',
      patientId: '',
      currentConsultation: '',
      loading: false,
      landingPageUrl: '/dashboard/nhis',
      clearpaymenturl: '/account/clear/labtest',
      cleardrugpaymenturl: '/account/clear/drug',
      getdrugsconsultationurl: '/ajax/noncapitated/drugs',
      gettestsconsultationurl: '/ajax/noncapitated/tests',
      imageurl:
        process.env.VUE_APP_IMAGE_URL ||
        'http://localhost:3000/static/uploads/',

      checktestUrl: '/ajax/change/noncapitated/test/status/true',
      unchecktestUrl: '/ajax/change/noncapitated/test/status/false',

      checkdrugUrl: '/ajax/change/noncapitated/drug/status/true',
      uncheckdrugUrl: '/ajax/change/noncapitated/drug/status/false',

      input: '',
      photo: '',
      consultation: '',
      code: '',
      index: '',

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
          this.drugconsultations = response.data.data.drugconsultations
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
    checkTest(index) {
      let isTestChecked = document.getElementsByName('testChecked')[index]
        .checked
      const data = {
        consultationId: this.consultation._id,
        index: index
      }

      if (isTestChecked === true) {
        axios
          .post(this.checktestUrl, data)
          .then(response => {
            this.tests[index].status = response.data.data
          })
          .catch(error => {
            this.loading = false
            this.handleError(error)
          })
      } else {
        axios
          .post(this.unchecktestUrl, data)
          .then(response => {
            this.tests[index].status = response.data.data
          })
          .catch(error => {
            this.loading = false
            this.handleError(error)
          })
      }
    },
    checkDrug(index) {
      let isChecked = document.getElementsByName('drugChecked')[index].checked
      const data = {
        consultationId: this.consultation._id,
        index: index
      }

      if (isChecked === true) {
        axios
          .post(this.checkdrugUrl, data)
          .then(response => {
            this.drugs[index].status = response.data.data
          })
          .catch(error => {
            this.loading = false
            this.handleError(error)
          })
      } else {
        axios
          .post(this.uncheckdrugUrl, data)
          .then(response => {
            this.drugs[index].status = response.data.data
          })
          .catch(error => {
            this.loading = false
            this.handleError(error)
          })
      }
    },
    clearTestPayment() {
      let isChecked = document.getElementsByName('testChecked').checked
      if (isChecked === false || this.code === '') {
        this.$iziToast.error({
          title: 'Error!',
          message: 'Please tick all the checkbox'
        })
        return
      }
      this.loading = true
      const data = {
        consultationId: this.consultation._id,
        code: this.code
      }
      axios
        .post(this.clearpaymenturl, data)
        .then(response => {
          this.consultations[this.index].labtestpaid =
            response.data.data.labtestpaid
          this.code = ''
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
    clearDrugPayment() {
      let isChecked = document.getElementsByName('drugChecked').checked
      if (isChecked === false || this.code === '') {
        this.$iziToast.error({
          title: 'Error!',
          message: 'Please tick all the checkbox'
        })
        return
      }
      this.loading = true
      const data = {
        consultationId: this.consultation._id,
        authCode: this.code
      }
      axios
        .post(this.cleardrugpaymenturl, data)
        .then(response => {
          this.drugconsultations[this.index].drugpaid =
            response.data.data.drugpaid
          this.code = ''
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

    getConsultationDrugs(consultation, index) {
      this.index = index
      this.consultation = consultation
      const data = {
        consultationId: consultation._id
      }
      axios
        .post(this.getdrugsconsultationurl, data)
        .then(response => {
          this.drugs = response.data.data
        })
        .catch(error => {
          this.loading = false
          this.handleError(error)
        })
    },

    getConsultationTests(consultation, index) {
      this.index = index
      this.consultation = consultation
      const data = {
        consultationId: consultation._id
      }
      axios
        .post(this.gettestsconsultationurl, data)
        .then(response => {
          this.tests = response.data.data
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
