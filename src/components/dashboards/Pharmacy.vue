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
                    Pharmacy
                  </h4>
                  <span class="kt-widget24__desc">
                    Total number of pharmacy personnel
                  </span>
                </div>
                <span class="kt-widget24__stats kt-font-success">
                  {{ pharmacyCount }}
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
                Drug Requests
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
                    <th>Drugs</th>
                    <th>Payment Status</th>
                    <th>Created</th>
                  </tr>
                </thead>
                <tbody v-if="consultations.length == 0">
                  <tr>
                    <td colspan="9" align="center">No Pharmacy Requests</td>
                  </tr>
                </tbody>
                <tbody
                  v-for="(consultation, index) in consultations"
                  :key="consultation._id"
                >
                  <tr v-if="!consultation.pharmacyfinish">
                    <td>
                      {{ index + 1 }}
                    </td>
                    <td>
                      <router-link :to="consultation.url">
                        {{ consultation.patient.firstname }}
                        {{ consultation.patient.lastname }}
                      </router-link>
                    </td>
                    <td>{{ consultation.reasonforvisit }}</td>
                    <td>{{ consultation.diagnosis }}</td>

                    <td v-if="consultation.drugs.length > 0">
                      <button
                        :disabled="!consultation.drugpaid"
                        class="btn btn-brand"
                        data-toggle="modal"
                        data-target="#kt_modal_2"
                        @click="getDrugs(consultation)"
                      >
                        View Drugs
                      </button>
                    </td>
                    <td v-else>No Drugs</td>
                    <td>
                      <label
                        v-if="consultation.drugpaid"
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
                  </tr>
                </tbody>
              </table>
            </div>
            <!--begin::Modal-->
            <div
              class="modal fade"
              id="kt_modal_2"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-lg" role="document">
                <div style="width: 150%" class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      {{ firstname }} {{ lastname }}
                    </h5>
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <div class="dt-responsive table-responsive">
                      <table class="table table-striped table-bordered nowrap">
                        <thead>
                          <tr>
                            <th>S/N</th>
                            <th>Drugs</th>
                            <th>Starting</th>
                            <th>Unit Dose</th>
                            <th>Frequency</th>
                            <th>Duration</th>
                            <th>Quantity</th>
                            <th>Dispense Total</th>
                            <th>Total Price</th>
                            <th>Status</th>
                            <th>PrescribedBy</th>
                            <th>Notes</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody v-if="drugs.length == 0">
                          <tr>
                            <td colspan="9" align="center">No Drugs</td>
                          </tr>
                        </tbody>
                        <tbody v-for="(drug, index) in drugs" :key="drug._id">
                          <tr>
                            <td>
                              {{ index + 1 }}
                            </td>
                            <td>{{ drug.drug.name }}</td>
                            <td>
                              {{ drug.startingdate | moment('DD/MM/YYYY') }}
                            </td>
                            <td>{{ drug.unitdose }}</td>
                            <td>{{ drug.strength }}</td>
                            <td>
                              {{ drug.duration }}
                            </td>
                            <td>
                              {{ drug.quantity }}
                            </td>
                            <td>
                              {{ drug.quantitytodispense }}
                            </td>
                            <td>
                              {{ drug.totalprice }}
                            </td>
                            <td>
                              <label
                                v-if="drug.dispense"
                                class="kt-badge kt-badge--success kt-badge--inline kt-badge--pill"
                                >Dispensed</label
                              >
                              <label
                                v-else
                                class="kt-badge kt-badge--warning kt-badge--inline kt-badge--pill"
                                >Pending</label
                              >
                            </td>
                            <td>
                              <a v-if="drug.examiner" href="#">
                                {{ drug.examiner.firstname }}
                                {{ drug.examiner.lastname }}
                              </a>
                              <a v-else href="#">None</a>
                            </td>
                            <td>
                              {{ drug.notes }}
                            </td>
                            <td>
                              <form
                                v-if="!drug.dispense"
                                @submit.prevent="dispenseDrug(drug, index)"
                              >
                                <select name="department" class="form-control">
                                  <option>Select</option>
                                  <option value="Inpatient"
                                    >Inpatient Inventory</option
                                  >
                                  <option value="Outpatient"
                                    >Outpatient Inventory</option
                                  >
                                  <option value="NhisInpatient"
                                    >NhisInpatient Inventory</option
                                  >
                                  <option value="NhisOutpatient"
                                    >NhisOutpatient Inventory</option
                                  >
                                </select>
                                <button
                                  v-if="!dispenseloading"
                                  class="btn btn-success btn-elevate btn-sm"
                                  type="submit"
                                >
                                  Dispense
                                </button>
                                <button
                                  v-if="
                                    dispenseloading &&
                                      currentDrug._id == drug._id
                                  "
                                  class="btn btn-brand kt-spinner kt-spinner--right 
                               kt-spinner--sm kt-spinner--light btn-elevate float-right"
                                  disabled
                                >
                                  Dispensing...
                                </button>
                              </form>
                              <button
                                v-else
                                class="btn btn-default btn-elevate btn-sm"
                                disabled
                              >
                                Dispensed
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div class="modal-footer">
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
            <!--end::Modal-->
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
      <div class="col-xl-12">
        <!--begin:: Widgets/Tasks -->
        <div class="kt-portlet kt-portlet--tabs kt-portlet--height-fluid">
          <div class="kt-portlet__head">
            <div class="kt-portlet__head-label">
              <h3 class="kt-portlet__head-title">
                ANC Drug Requests
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
                    <th>Antenatal ID</th>
                    <th>Patient Name</th>
                    <th>Drugs</th>
                    <th>Payment Status</th>
                    <th>Created</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-if="ancs.length == 0">
                    <td colspan="9" align="center">
                      No Drug Requests
                    </td>
                  </tr>
                  <tr v-for="(anc, index) in ancs" :key="anc._id">
                    <td>
                      {{ index + 1 }}
                    </td>
                    <td>{{ anc.ancId }}</td>
                    <td>
                      <router-link :to="anc.url">
                        {{ anc.patient.firstname }}
                        {{ anc.patient.lastname }}
                      </router-link>
                    </td>
                    <td v-if="anc.drugs.length > 0">
                      <button
                        :disabled="!anc.ancdrugpaid"
                        class="btn btn-brand btn-sm"
                        data-toggle="modal"
                        data-target="#kt_modal_3"
                        @click="getANCDrugs(anc)"
                      >
                        View
                      </button>
                    </td>
                    <td v-else>No Drugs</td>

                    <td>
                      <label
                        v-if="anc.ancdrugpaid"
                        class="kt-badge kt-badge--success kt-badge--inline"
                        >Paid</label
                      >
                      <label
                        v-else
                        class="kt-badge kt-badge--warning kt-badge--inline"
                        >Pending</label
                      >
                    </td>

                    <td>{{ anc.updatedAt | moment('DD/MM/YYYY, ha') }}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="card-footer">
              <b-pagination
                class="float-right"
                v-model="currentPage"
                :per-page="10"
                first-text="First"
                prev-text="Prev"
                next-text="Next"
                last-text="Last"
              ></b-pagination>
            </div>

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
                <div style="width: 130%" class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Drugs</h5>
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <div class="dt-responsive table-responsive">
                      <table class="table table-striped table-bordered nowrap">
                        <thead>
                          <tr>
                            <th>S/N</th>
                            <th>Drugs</th>
                            <th>Starting</th>
                            <th>Unit Dose</th>
                            <th>Frequency</th>
                            <th>Duration</th>
                            <th>Quantity</th>
                            <th>Dispense Total</th>
                            <th>Total Price</th>
                            <th>Status</th>
                            <th>PrescribedBy</th>
                            <th>Notes</th>
                          </tr>
                        </thead>
                        <tbody v-if="ancdrugs.length == 0">
                          <tr>
                            <td colspan="9" align="center">No Drugs</td>
                          </tr>
                        </tbody>
                        <tbody
                          v-for="(drug, index) in ancdrugs"
                          :key="drug._id"
                        >
                          <tr>
                            <td>
                              {{ index + 1 }}
                            </td>
                            <td>{{ drug.drug.name }}</td>
                            <td>
                              {{ drug.startingdate | moment('DD/MM/YYYY') }}
                            </td>
                            <td>{{ drug.unitdose }}</td>
                            <td>{{ drug.strength }}</td>
                            <td>
                              {{ drug.duration }}
                            </td>
                            <td>
                              {{ drug.quantity }}
                            </td>
                            <td>
                              {{ drug.quantitytodispense }}
                            </td>
                            <td>
                              {{ drug.totalprice }}
                            </td>
                            <td>
                              <label
                                v-if="drug.dispense"
                                class="kt-badge kt-badge--success kt-badge--inline kt-badge--pill"
                                >Dispensed</label
                              >
                              <label
                                v-else
                                class="kt-badge kt-badge--warning kt-badge--inline kt-badge--pill"
                                >Pending</label
                              >
                            </td>
                            <td>
                              <a v-if="drug.nurse" href="#">
                                {{ drug.nurse.firstname }}
                                {{ drug.nurse.lastname }}
                              </a>
                              <a v-else href="#">None</a>
                            </td>
                            <td>
                              {{ drug.notes }}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div class="modal-footer">
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
            <!--end::Modal-->

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
  name: 'pharmacist',
  data() {
    return {
      consultations: [],
      drugs: [],
      ancs: [],
      ancdrugs: [],
      consultationId: '',
      consult: '',
      name: '',
      firstname: '',
      lastname: '',

      totalPatients: '',
      triagesCount: '',
      pharmacyCount: '',
      appointmentCount: '',
      // department: '',

      date: '',
      status: '',
      loading: false,
      dispenseloading: false,
      currentDrug: '',
      consultationDrugurl: '/consultation/consultation/drugs',
      landingPageUrl: '/dashboard/pharmacy',
      antenatalDrugurl: '/antenatal/anc/drugs',
      dispenseDrugurl: '/ajax/dispense-drug',
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
          this.ancs = response.data.data.ancs
          this.totalPatients = response.data.data.patientCount
          this.triagesCount = response.data.data.triagesCount
          this.pharmacyCount = response.data.data.pharmacyCount
          this.appointmentCount = response.data.data.appointmentCount
          this.meta = response.data.data.meta
          this.rows = this.meta.count
          this.pageSize = this.meta.pageSize
          this.pageCount = this.meta.pageCount

          let consultations = this.consultations
          let ancs = this.ancs
          for (let i = 0; i < consultations.length; i++) {
            consultations[i].url = '/patient/' + consultations[i].patient._id
          }

          for (let i = 0; i < ancs.length; i++) {
            ancs[i].url = '/patient/' + ancs[i].patient._id
          }
        })
        .catch(error => {
          this.handleError(error)
        })
    },

    getDrugs(consultation) {
      const data = {
        consultationId: consultation._id
      }
      axios
        .post(this.consultationDrugurl, data)
        .then(response => {
          this.drugs = response.data.data.drugs
          this.consult = response.data.data._id
          this.firstname = response.data.data.patient.firstname
          this.lastname = response.data.data.patient.lastname
        })
        .catch(error => {
          this.handleError(error)
        })
    },

    dispenseDrug(drug, index) {
      this.currentDrug = drug
      const e = document.getElementsByName('department')[index]
      const depart = e.options[e.selectedIndex].value
      if (depart === '' || depart === null) {
        this.$iziToast.error({
          title: 'Error!',
          message: 'Please choose the inventory to dispense from'
        })
        return false
      }
      const data = {
        consultationId: this.consult,
        inventory: depart,
        index: index
      }
      axios
        .post(this.dispenseDrugurl, data)
        .then(response => {
          this.drugs[index].dispense = response.data.data
          this.$iziToast.success({
            title: 'Success!',
            message: response.data.message
          })
        })
        .catch(error => {
          this.handleError(error)
        })
    },

    getANCDrugs(anc) {
      const data = {
        ancId: anc._id
      }
      axios
        .post(this.antenatalDrugurl, data)
        .then(response => {
          this.ancdrugs = response.data.data.drugs
        })
        .catch(error => {
          this.handleError(error)
        })
    },

    calculateRemainQuantity() {
      if (this.item.rquantity) {
        this.rquantity = parseInt(this.item.rquantity) - parseInt(this.quantity)
      } else {
        this.rquantity = parseInt(this.item.quantity) - parseInt(this.quantity)
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
    }
  }
}
</script>

<style></style>
