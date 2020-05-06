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
                    Accountants
                  </h4>
                  <span class="kt-widget24__desc">
                    Total number of accountants
                  </span>
                </div>
                <span class="kt-widget24__stats kt-font-success">
                  {{ accountCount }}
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
        <!--begin:: Widgets/New Users-->
        <div class="kt-portlet kt-portlet--tabs kt-portlet--height-fluid">
          <div class="kt-portlet__head">
            <div class="kt-portlet__head-label">
              <h3 class="kt-portlet__head-title">
                Laboratory Test Fees
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
                        <th>Tests</th>
                        <th>Unit Amount</th>
                        <th>Total Amount</th>
                        <th>ModeofPayment</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody v-if="testConsultations.length == 0">
                      <tr>
                        <td colspan="9" align="center">
                          No Lab Tests
                        </td>
                      </tr>
                    </tbody>
                    <tbody
                      v-for="(consultation, index) in testConsultations"
                      :key="consultation._id"
                    >
                      <tr>
                        <td>
                          {{ index + 1 }}
                        </td>
                        <td v-if="consultation.patient">
                          <router-link to="#" class="kt-widget4__username">
                            {{ consultation.patient.firstname }}
                            {{ consultation.patient.lastname }}
                          </router-link>
                        </td>
                        <td v-if="consultation.dependant">
                          <router-link to="#" class="kt-widget4__username">
                            {{ consultation.dependant.name }} </router-link
                          ><small
                            class="kt-badge kt-badge--danger kt-badge--inline"
                            >Dependant</small
                          >
                        </td>
                        <td>
                          <p
                            v-for="(test, index) in consultation.tests"
                            :key="test._id"
                          >
                            <input
                              name="testChecked"
                              @change="checkTest(consultation, index)"
                              type="checkbox"
                            />
                            {{ test.test.name }}

                            <small
                              v-if="test.paymentstatus == 'Pending'"
                              class="kt-badge kt-badge--warning kt-badge--inline kt-badge--pill"
                              >Pending</small
                            >
                            <small
                              v-if="test.paymentstatus == 'Cleared'"
                              class="kt-badge kt-badge--brand kt-badge--inline kt-badge--pill"
                              >Cleared</small
                            >
                            <small
                              v-if="test.paymentstatus == 'Paid'"
                              class="kt-badge kt-badge--success kt-badge--inline kt-badge--pill"
                              >Paid</small
                            >
                            <span></span>
                          </p>
                        </td>
                        <td>
                          <p v-for="test in consultation.tests" :key="test._id">
                            {{ test.test.price }}
                          </p>
                        </td>
                        <td>
                          <p name="testAmount">{{ consultation.testSum }}</p>
                        </td>

                        <td>
                          <select
                            v-if="
                              consultation.capitatedTestStatus === 'Pending'
                            "
                            v-model="test.modeofpayment"
                            class="form-control"
                          >
                            <option disabled>Select</option>
                            <option>Cash</option>
                            <option>Transfer</option>
                            <option>POS</option>
                            <option>Bank Deposit</option>
                          </select>
                        </td>
                        <td>
                          <button
                            v-if="
                              consultation.capitatedTestStatus === 'Pending'
                            "
                            class="btn btn-brand btn-elevate"
                            @click="approveTestPayment(consultation, index)"
                          >
                            Approve
                          </button>

                          <!-- <a
                            target="_blank"
                            v-else
                            :href="consultation.testinvoiceurl"
                            class="btn btn-success btn-elevate"
                          >
                            Invoice
                          </a> -->
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="card-footer">
                  <b-pagination
                    class="float-right"
                    v-model="currentPage"
                    :per-page="perPage"
                    first-text="First"
                    prev-text="Prev"
                    next-text="Next"
                    last-text="Last"
                  ></b-pagination>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--end:: Widgets/New Users-->
      </div>
    </div>
    <!--End::Section-->

    <!--Begin::Section-->
    <div class="row">
      <div class="col-xl-12">
        <!--begin:: Widgets/New Users-->
        <div class="kt-portlet kt-portlet--tabs kt-portlet--height-fluid">
          <div class="kt-portlet__head">
            <div class="kt-portlet__head-label">
              <h3 class="kt-portlet__head-title">
                Drugs Fees
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
                        <th>Patient</th>
                        <th>Drugs</th>
                        <th>Amount</th>
                        <th>Total</th>
                        <th>ModeofPayment</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody v-if="drugConsultations.length == 0">
                      <tr>
                        <td colspan="9" align="center">
                          No Drugs
                        </td>
                      </tr>
                    </tbody>
                    <tbody
                      v-for="(consultation, index) in drugConsultations"
                      :key="consultation._id"
                    >
                      <tr v-if="consultation.drugs.length > 0">
                        <td>
                          {{ index + 1 }}
                        </td>
                        <td v-if="consultation.patient">
                          <router-link to="#" class="kt-widget4__username">
                            {{ consultation.patient.firstname }}
                            {{ consultation.patient.lastname }}
                          </router-link>
                        </td>
                        <td v-if="consultation.dependant">
                          <router-link to="#" class="kt-widget4__username">
                            {{ consultation.dependant.name }} </router-link
                          ><small
                            class="kt-badge kt-badge--danger kt-badge--inline"
                            >Dependant</small
                          >
                        </td>
                        <td>
                          <p
                            v-for="(drug, index) in consultation.drugs"
                            :key="drug._id"
                          >
                            <input
                              name="drugChecked"
                              @change="checkDrug(consultation, index)"
                              type="checkbox"
                            />
                            {{ drug.drug.name }}
                            <small
                              v-if="drug.paymentstatus == 'Pending'"
                              class="kt-badge kt-badge--warning kt-badge--inline kt-badge--pill"
                              >Pending</small
                            >
                            <small
                              v-if="drug.paymentstatus == 'Cleared'"
                              class="kt-badge kt-badge--brand kt-badge--inline kt-badge--pill"
                              >Cleared</small
                            >
                            <small
                              v-if="drug.paymentstatus == 'Paid'"
                              class="kt-badge kt-badge--success kt-badge--inline kt-badge--pill"
                              >Paid</small
                            >
                            <span></span>
                          </p>
                        </td>
                        <td>
                          <p v-for="drug in consultation.drugs" :key="drug._id">
                            <span>
                              {{ drug.totalprice }}
                            </span>
                          </p>
                        </td>
                        <td>
                          <p name="drugAmount">{{ consultation.drugSum }}</p>
                        </td>

                        <td>
                          <select
                            v-if="
                              consultation.capitatedDrugStatus === 'Pending'
                            "
                            v-model="drug.modeofpayment"
                            class="form-control"
                          >
                            <option disabled>Select</option>
                            <option>Cash</option>
                            <option>Transfer</option>
                            <option>POS</option>
                            <option>Bank Deposit</option>
                          </select>
                        </td>
                        <td>
                          <button
                            v-if="consultation.capitatedDrugStatus == 'Pending'"
                            class="btn btn-brand btn-elevate"
                            @click="approveDrugPayment(consultation, index)"
                          >
                            Approve
                          </button>

                          <!-- <a
                            target="_blank"
                            v-else
                            :href="consultation.druginvoiceurl"
                            class="btn btn-success btn-elevate"
                          >
                            Invoice
                          </a> -->
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="card-footer">
                  <p class="float-left">Showing {{ rows }} entries</p>
                  <b-pagination
                    class="float-right"
                    v-model="currentPage"
                    :total-rows="rows"
                    :per-page="perPage"
                    first-text="First"
                    prev-text="Prev"
                    next-text="Next"
                    last-text="Last"
                  ></b-pagination>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--end:: Widgets/New Users-->
      </div>
      <div class="col-xl-12">
        <!--begin:: Widgets/New Users-->
        <div class="kt-portlet kt-portlet--tabs kt-portlet--height-fluid">
          <div class="kt-portlet__head">
            <div class="kt-portlet__head-label">
              <h3 class="kt-portlet__head-title">
                Imaging Fees
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
                        <th>Investigations</th>
                        <th>Unit Amount</th>
                        <th>Total Amount</th>
                        <th>ModeofPayment</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody v-if="imagingConsultations.length == 0">
                      <tr>
                        <td colspan="9" align="center">
                          No Investigations
                        </td>
                      </tr>
                    </tbody>
                    <tbody
                      v-for="(consultation, index) in imagingConsultations"
                      :key="consultation._id"
                    >
                      <tr v-if="consultation.imagings.length > 0">
                        <td>
                          {{ index + 1 }}
                        </td>
                        <td v-if="consultation.patient">
                          <router-link to="#" class="kt-widget4__username">
                            {{ consultation.patient.firstname }}
                            {{ consultation.patient.lastname }}
                          </router-link>
                        </td>
                        <td v-if="consultation.dependant">
                          <router-link to="#" class="kt-widget4__username">
                            {{ consultation.dependant.name }} </router-link
                          ><small
                            class="kt-badge kt-badge--danger kt-badge--inline"
                            >Dependant</small
                          >
                        </td>
                        <td>
                          <p
                            v-for="(imaging, index) in consultation.imagings"
                            :key="imaging._id"
                          >
                            <input
                              name="imagingChecked"
                              @change="checkImaging(consultation, index)"
                              type="checkbox"
                            />
                            {{ imaging.investigation.name }}
                            <small
                              v-if="imaging.paymentstatus == 'Pending'"
                              class="kt-badge kt-badge--warning kt-badge--inline kt-badge--pill"
                              >Pending</small
                            >
                            <small
                              v-if="imaging.paymentstatus == 'Cleared'"
                              class="kt-badge kt-badge--brand kt-badge--inline kt-badge--pill"
                              >Cleared</small
                            >
                            <small
                              v-if="imaging.paymentstatus == 'Paid'"
                              class="kt-badge kt-badge--success kt-badge--inline kt-badge--pill"
                              >Paid</small
                            >
                            <span></span>
                          </p>
                        </td>
                        <td>
                          <p
                            v-for="imaging in consultation.imagings"
                            :key="imaging._id"
                          >
                            {{ imaging.investigation.price }}
                          </p>
                        </td>
                        <td>
                          <p name="imagingAmount">
                            {{ consultation.imagingSum }}
                          </p>
                        </td>

                        <td>
                          <select
                            v-if="!consultation.imagingpaid"
                            v-model="imaging.modeofpayment"
                            class="form-control"
                          >
                            <option disabled>Select</option>
                            <option>Cash</option>
                            <option>Transfer</option>
                            <option>POS</option>
                            <option>Bank Deposit</option>
                          </select>
                        </td>
                        <td>
                          <button
                            v-if="
                              consultation.capitatedImagingStatus === 'Pending'
                            "
                            class="btn btn-brand btn-elevate"
                            @click="approveImagingPayment(consultation, index)"
                          >
                            Approve
                          </button>

                          <!-- <a
                            target="_blank"
                            v-else
                            :href="consultation.imaginginvoiceurl"
                            class="btn btn-success btn-elevate"
                          >
                            Invoice
                          </a> -->
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="card-footer">
                  <b-pagination
                    class="float-right"
                    v-model="currentPage"
                    :per-page="perPage"
                    first-text="First"
                    prev-text="Prev"
                    next-text="Next"
                    last-text="Last"
                  ></b-pagination>
                </div>
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
  name: 'accountantdashboard',
  data() {
    return {
      patients: [],
      testConsultations: [],
      drugConsultations: [],
      imagingConsultations: [],
      totalPatients: '',
      triagesCount: '',
      accountCount: '',
      registration: {
        modeofpayment: '',
        amount: ''
      },
      imaging: {
        modeofpayment: ''
      },
      drug: {
        modeofpayment: ''
      },
      test: {
        modeofpayment: ''
      },
      appointmentCount: '',
      patientId: '',
      currentPatient: '',
      currentAdmitPatient: '',
      loading: false,
      admitpatientloading: false,
      landingPageUrl: '/dashboard/account',
      registrationUrl: '/account/approve/registration',
      testUrl: '/account/approve/test',
      drugUrl: '/account/approve/drug',
      imagingUrl: '/account/approve/imaging',

      checktestUrl: '/ajax/change/test/status/true',
      unchecktestUrl: '/ajax/change/test/status/false',

      checkdrugUrl: '/ajax/change/drug/status/true',
      uncheckdrugUrl: '/ajax/change/drug/status/false',

      checkimagingUrl: '/ajax/change/imaging/status/true',
      uncheckimagingUrl: '/ajax/change/imaging/status/false',

      invoiceurl: '/static/invoices/',
      input: '',

      currentPage: 1,
      pageCount: '',
      pageSize: '',
      rows: '',
      meta: '',
      perPage: 10
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
          this.patients = response.data.data.patients
          this.drugConsultations = response.data.data.drugconsultations
          this.testConsultations = response.data.data.testconsultations
          this.imagingConsultations = response.data.data.imagingconsultations
          this.totalPatients = response.data.data.patientCount
          this.triagesCount = response.data.data.triagesCount
          this.accountCount = response.data.data.accountCount
          this.appointmentCount = response.data.data.appointmentCount

          this.meta = response.data.data.meta
          this.rows = this.meta.count
          this.pageSize = this.meta.pageSize
          this.pageCount = this.meta.pageCount

          let patients = this.patients
          let testConsultations = this.testConsultations
          let drugConsultations = this.drugConsultations
          let imagingConsultations = this.imagingConsultations

          for (let i = 0; i < patients.length; i++) {
            patients[i].url = '/patient/' + patients[i]._id
            patients[i].invoiceurl = this.invoiceurl + patients[i].invoice
          }

          for (let i = 0; i < testConsultations.length; i++) {
            if (testConsultations[i].patient) {
              testConsultations[i].url = '/patient/' + patients[i]._id
              //Lab test invoice
              testConsultations[i].testinvoiceurl =
                this.invoiceurl + testConsultations[i].testinvoice
              //Drug Invoice
              testConsultations[i].druginvoiceurl =
                this.invoiceurl + testConsultations[i].druginvoice
              // Imaging invoice
              testConsultations[i].imaginginvoiceurl =
                this.invoiceurl + testConsultations[i].imaginginvoice
            }
            console.log(testConsultations[i].url)
          }

          for (let i = 0; i < drugConsultations.length; i++) {
            if (drugConsultations[i].patient) {
              drugConsultations[i].url = '/patient/' + patients[i]._id
              //Lab test invoice
              drugConsultations[i].testinvoiceurl =
                this.invoiceurl + drugConsultations[i].testinvoice
              //Drug Invoice
              drugConsultations[i].druginvoiceurl =
                this.invoiceurl + drugConsultations[i].druginvoice
              // Imaging invoice
              drugConsultations[i].imaginginvoiceurl =
                this.invoiceurl + drugConsultations[i].imaginginvoice
            }
          }

          for (let i = 0; i < imagingConsultations.length; i++) {
            if (imagingConsultations[i].patient) {
              imagingConsultations[i].url = '/patient/' + patients[i]._id
              //Lab test invoice
              imagingConsultations[i].testinvoiceurl =
                this.invoiceurl + imagingConsultations[i].testinvoice
              //Drug Invoice
              imagingConsultations[i].druginvoiceurl =
                this.invoiceurl + imagingConsultations[i].druginvoice
              // Imaging invoice
              imagingConsultations[i].imaginginvoiceurl =
                this.invoiceurl + imagingConsultations[i].imaginginvoice
            }
          }

          // for (let i = 0; i < consultations.length; i++) {
          //   if (consultations[i].patient) {
          //     consultations[i].url = '/patient/' + consultations[i].patient._id
          //     //  Lab test invoice
          //     consultations[i].testinvoiceurl =
          //       this.invoiceurl + consultations[i].testinvoice
          //     // Drug Invoice
          //     consultations[i].druginvoiceurl =
          //       this.invoiceurl + consultations[i].druginvoice
          //     // Imaging invoice
          //     consultations[i].imaginginvoiceurl =
          //       this.invoiceurl + consultations[i].imaginginvoice
          //   }
          // }
        })
        .catch(error => {
          this.handleError(error)
        })
    },
    approvePayment(patient, index) {
      this.loading = true
      let input = document.getElementsByName('amount')[index].textContent
      const data = {
        amount: parseInt(input),
        modeofpayment: this.registration.modeofpayment,
        patientId: patient._id,
        type: 'Registration & Consultation'
      }
      axios
        .post(this.registrationUrl, data)
        .then(response => {
          this.patients = response.data.data
          this.loading = false
          let patients = this.patients

          for (let i = 0; i < patients.length; i++) {
            patients[i].url = '/patient/' + patients[i]._id
            patients[i].invoiceurl = this.invoiceurl + patients[i].invoice
          }
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

    //TESTS
    approveTestPayment(consultation, index) {
      //let isChecked = document.getElementsByName('testChecked')[index].checked
      if (this.test.modeofpayment == '') {
        this.$iziToast.error({
          title: 'Error!',
          message: 'Please choose mode of payment & check the checkbox'
        })
        return
      }
      this.loading = true
      let input = document.getElementsByName('testAmount')[index].textContent
      const data = {
        amount: parseInt(input),
        modeofpayment: this.test.modeofpayment,
        consultationId: consultation._id
      }
      axios
        .post(this.testUrl, data)
        .then(response => {
          this.testConsultations = response.data.data
          this.loading = false
          let consultations = this.testConsultations

          for (let i = 0; i < consultations.length; i++) {
            if (consultations[i].patient) {
              consultations[i].url = '/patient/' + consultations[i]._id
              consultations[i].testinvoiceurl =
                this.invoiceurl + consultations[i].testinvoice
            }
          }
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
            consultation.tests[index].paymentstatus = response.data.data.status
            consultation.testSum = response.data.data.amount
          })
          .catch(error => {
            this.loading = false
            this.handleError(error)
          })
      } else {
        axios
          .post(this.unchecktestUrl, data)
          .then(response => {
            consultation.tests[index].paymentstatus = response.data.data.status
            consultation.testSum = response.data.data.amount
          })
          .catch(error => {
            this.loading = false
            this.handleError(error)
          })
      }
    },

    // DRUGS
    approveDrugPayment(consultation, index) {
      //let isChecked = document.getElementsByName('drugChecked')[index].checked
      if (this.drug.modeofpayment === '') {
        this.$iziToast.error({
          title: 'Error!',
          message: 'Please choose mode of payment & check the checkbox'
        })
        return
      }
      this.loading = true
      let input = document.getElementsByName('drugAmount')[index].textContent
      const data = {
        amount: parseInt(input),
        modeofpayment: this.drug.modeofpayment,
        consultationId: consultation._id
      }
      axios
        .post(this.drugUrl, data)
        .then(response => {
          this.drugConsultations = response.data.data
          this.loading = false
          let consultations = this.drugConsultations

          for (let i = 0; i < consultations.length; i++) {
            if (consultations[i].patient) {
              consultations[i].url = '/patient/' + consultations[i]._id
              consultations[i].druginvoiceurl =
                this.invoiceurl + consultations[i].druginvoice
            }
          }
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

    checkDrug(consultation, index) {
      let isChecked = document.getElementsByName('drugChecked')[index].checked
      const data = {
        consultationId: consultation._id,
        index: index
      }

      if (isChecked === true) {
        axios
          .post(this.checkdrugUrl, data)
          .then(response => {
            consultation.drugs[index].paymentstatus = response.data.data.status
            consultation.drugSum = response.data.data.amount
          })
          .catch(error => {
            this.loading = false
            this.handleError(error)
          })
      } else {
        axios
          .post(this.uncheckdrugUrl, data)
          .then(response => {
            consultation.drugs[index].paymentstatus = response.data.data.status
            consultation.drugSum = response.data.data.amount
          })
          .catch(error => {
            this.loading = false
            this.handleError(error)
          })
      }
    },

    //IMAGING
    approveImagingPayment(consultation, index) {
      //let isChecked = document.getElementsByName('imagingChecked')[index]
      //.checked
      if (this.imaging.modeofpayment === '') {
        this.$iziToast.error({
          title: 'Error!',
          message: 'Please choose mode of payment & check the checkbox'
        })
        return
      }
      this.loading = true
      let input = document.getElementsByName('imagingAmount')[index].textContent
      const data = {
        amount: parseInt(input),
        modeofpayment: this.imaging.modeofpayment,
        consultationId: consultation._id
      }
      axios
        .post(this.imagingUrl, data)
        .then(response => {
          this.consultations = response.data.data
          this.loading = false
          let consultations = this.consultations

          for (let i = 0; i < consultations.length; i++) {
            if (consultations[i].patient) {
              consultations[i].url = '/patient/' + consultations[i]._id
              consultations[i].imaginginvoiceurl =
                this.invoiceurl + consultations[i].imaginginvoice
            }
          }
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

    checkImaging(consultation, index) {
      let isChecked = document.getElementsByName('imagingChecked')[index]
        .checked
      const data = {
        consultationId: consultation._id,
        index: index
      }

      if (isChecked === true) {
        axios
          .post(this.checkimagingUrl, data)
          .then(response => {
            consultation.imagings[index].paymentstatus =
              response.data.data.status
            consultation.imagingSum = response.data.data.amount
          })
          .catch(error => {
            this.loading = false
            this.handleError(error)
          })
      } else {
        axios
          .post(this.uncheckimagingUrl, data)
          .then(response => {
            consultation.imagings[index].paymentstatus =
              response.data.data.status
            consultation.imagingSum = response.data.data.amount
          })
          .catch(error => {
            this.loading = false
            this.handleError(error)
          })
      }
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
    total() {
      const consultations = this.consultations
      const getSum = (total, num) => {
        return total + num
      }
      let testPrice = null
      for (let i = 0; i < consultations.length; i++) {
        const totalTestPrice = consultations[i].tests.map(price => {
          const rPrice = price.test.price
          return rPrice
        })
        if (totalTestPrice === undefined || totalTestPrice.length == 0) {
          testPrice = 0
        } else {
          testPrice = totalTestPrice.reduce(getSum)
        }
      }
      return testPrice
    }
  }
}
</script>

<style></style>
