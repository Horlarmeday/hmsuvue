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
                    Nurses
                  </h4>
                  <span class="kt-widget24__desc">
                    Total number of nurses
                  </span>
                </div>
                <span class="kt-widget24__stats kt-font-success">
                  {{ nurseCount }}
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
                    <th>Patient ID</th>
                    <th>Patient Name</th>
                    <th>Status</th>
                    <th>Actions</th>
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
                    <td>{{ patient.patientId }}</td>

                    <td>
                      <router-link :to="patient.url">
                        {{ patient.firstname }} {{ patient.lastname }}
                      </router-link>
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
                      <button
                        v-if="patient.triages.length < 1"
                        class="btn btn-light kt-font-dark"
                      >
                        No triage
                      </button>
                      <button
                        v-if="
                          patient.triages.length > 0 &&
                            !patient.triages[patient.triages.length - 1].seen
                        "
                        class="btn btn-dark btn-sm mr-3"
                        @click="sendToDoc(patient)"
                      >
                        Send to Doctor
                      </button>
                      <!-- <button
                        v-else-if="
                          !patient.triages[patient.triages.length - 1].seen &&
                            loading &&
                            patient._id == currentPatient._id
                        "
                        class="btn btn-brand kt-spinner kt-spinner--right 
                      kt-spinner--sm kt-spinner--light btn-elevate float-right"
                        disabled
                      >
                        Sending...
                      </button> -->
                      <button
                        v-else-if="
                          patient.triages.length > 0 &&
                            patient.triages[patient.triages.length - 1].seen
                        "
                        class="btn btn-dark btn-sm mr-3"
                        disabled
                      >
                        Sent
                      </button>

                      <router-link
                        :to="patient.triageurl"
                        class="btn btn-brand btn-sm mr-3"
                      >
                        Create Triage
                      </router-link>

                      <button
                        v-if="!admitpatientloading"
                        class="btn btn-danger btn-sm"
                        @click="admitPatient(patient)"
                      >
                        Admit
                      </button>
                      <button
                        v-if="
                          admitpatientloading &&
                            patient._id == currentPatient._id
                        "
                        class="btn btn-brand btn-sm kt-spinner kt-spinner--right 
                      kt-spinner--sm kt-spinner--light btn-elevate float-right"
                        disabled
                      >
                        Addmitting...
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
                Dependants
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
                          v-model="text"
                          @keyup="searchDependant()"
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
            <div class="tab-content">
              <div class="tab-pane active" id="kt_widget4_tab1_content">
                <div class="dt-responsive table-responsive">
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th>S/N</th>
                        <th>Dependant Name</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody v-if="dependants.length == 0">
                      <tr>
                        <td colspan="9" align="center">
                          No Registered Dependants
                        </td>
                      </tr>
                    </tbody>
                    <tbody>
                      <tr
                        v-for="(dependant, index) in dependants"
                        :key="dependant._id"
                      >
                        <td>
                          {{ index + 1 }}
                        </td>

                        <td>
                          <router-link to="#">
                            {{ dependant.name }}
                          </router-link>
                        </td>

                        <td>
                          <label
                            v-if="dependant.admissionStatus == 'Addmitted'"
                            class="kt-badge kt-badge--danger kt-badge--inline kt-badge--pill"
                            >{{ dependant.admissionStatus }}</label
                          >
                          <label
                            v-if="dependant.admissionStatus == 'Discharged'"
                            class="kt-badge kt-badge--dark kt-badge--inline kt-badge--pill"
                            >{{ dependant.admissionStatus }}</label
                          >
                          <label
                            v-if="dependant.admissionStatus == 'Normal'"
                            class="kt-badge kt-badge--info kt-badge--inline kt-badge--pill"
                            >{{ dependant.admissionStatus }}</label
                          >
                        </td>
                        <td>
                          <button
                            v-if="dependant.triages.length < 1"
                            class="btn btn-light kt-font-dark"
                          >
                            No triage
                          </button>
                          <button
                            v-if="
                              dependant.triages.length > 0 &&
                                !dependant.triages[dependant.triages.length - 1]
                                  .seen
                            "
                            class="btn btn-dark btn-sm mr-3"
                            @click="sendToDoctor(dependant)"
                          >
                            Send to Doctor
                          </button>

                          <button
                            v-else-if="
                              dependant.triages.length > 0 &&
                                dependant.triages[dependant.triages.length - 1]
                                  .seen
                            "
                            class="btn btn-dark btn-sm mr-3"
                            disabled
                          >
                            Sent
                          </button>

                          <router-link
                            :to="dependant.dependanttriageurl"
                            class="btn btn-success btn-sm mr-3"
                          >
                            Create Triage
                          </router-link>

                          <button
                            v-if="!admitdependantloading"
                            class="btn btn-danger btn-sm"
                            @click="admitDependant(dependant)"
                          >
                            Admit
                          </button>
                          <button
                            v-if="
                              admitdependantloading &&
                                patient._id == currentPatient._id
                            "
                            class="btn btn-brand btn-sm kt-spinner kt-spinner--right 
                      kt-spinner--sm kt-spinner--light btn-elevate float-right"
                            disabled
                          >
                            Addmitting...
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

    <!--Begin::Section-->
    <div class="row">
      <div class="col-xl-6">
        <!--begin:: Widgets/New Users-->
        <div class="kt-portlet kt-portlet--tabs kt-portlet--height-fluid">
          <div class="kt-portlet__head">
            <div class="kt-portlet__head-label">
              <h3 class="kt-portlet__head-title">
                AnteNatal Patients
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
                        <th>Type</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody v-if="appointments.length == 0">
                      <tr>
                        <td colspan="9" align="center">
                          No Recent Appointments
                        </td>
                      </tr>
                    </tbody>
                    <tbody
                      v-for="(appointment, index) in appointments"
                      :key="appointment._id"
                    >
                      <tr
                        v-if="
                          !appointment.taken &&
                            appointment.type === 'Ante-Natal'
                        "
                      >
                        <td>
                          {{ index + 1 }}
                        </td>
                        <td>
                          <router-link
                            :to="appointment.url"
                            class="kt-widget4__username"
                          >
                            {{ appointment.patient.firstname }}
                            {{ appointment.patient.lastname }}
                          </router-link>
                        </td>
                        <td>{{ appointment.type }}</td>
                        <td>
                          {{
                            appointment.appointmentdate | moment('DD/MM/YYYY')
                          }}
                        </td>
                        <td>
                          {{ appointment.appointmenttime | moment('h:mmA') }}
                        </td>
                        <td>
                          <span
                            v-if="!appointment.taken"
                            class="kt-badge kt-badge--warning kt-badge--inline kt-badge--pill"
                            >Pending</span
                          >
                          <span
                            v-else
                            class="kt-badge kt-badge--success kt-badge--inline kt-badge--pill"
                            >Taken</span
                          >
                        </td>
                        <td>
                          <router-link
                            v-if="appointment.patientId.antenatals.length > 0"
                            :to="appointment.antenatal"
                            class="btn btn-bold btn-label-brand btn-sm"
                            >Take Up</router-link
                          >
                          <router-link
                            v-else
                            :to="appointment.createantenatal"
                            class="btn btn-bold btn-label-brand btn-sm"
                          >
                            Register</router-link
                          >
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <b-pagination
                  class="float-right"
                  v-model="currentPage"
                  :per-page="7"
                  :total-rows="irows"
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
      <div class="col-xl-6">
        <!--begin:: Widgets/New Users-->
        <div class="kt-portlet kt-portlet--tabs kt-portlet--height-fluid">
          <div class="kt-portlet__head">
            <div class="kt-portlet__head-label">
              <h3 class="kt-portlet__head-title">
                Immunization Patients
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
                        <th>Type</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody v-if="appointments.length == 0">
                      <tr>
                        <td colspan="9" align="center">
                          No Immunization Appointments
                        </td>
                      </tr>
                    </tbody>
                    <tbody
                      v-for="(appointment, index) in appointments"
                      :key="appointment._id"
                    >
                      <tr
                        v-if="
                          !appointment.taken &&
                            appointment.type === 'Immunization'
                        "
                      >
                        <td>
                          {{ index + 1 }}
                        </td>
                        <td>
                          <router-link
                            :to="appointment.url"
                            class="kt-widget4__username"
                          >
                            {{ appointment.patient.firstname }}
                            {{ appointment.patient.lastname }}
                          </router-link>
                        </td>
                        <td>{{ appointment.type }}</td>
                        <td>
                          {{
                            appointment.appointmentdate | moment('DD/MM/YYYY')
                          }}
                        </td>
                        <td>
                          {{ appointment.appointmenttime | moment('h:mmA') }}
                        </td>
                        <td>
                          <span
                            v-if="!appointment.taken"
                            class="kt-badge kt-badge--warning kt-badge--inline kt-badge--pill"
                            >Pending</span
                          >
                          <span
                            v-else
                            class="kt-badge kt-badge--success kt-badge--inline kt-badge--pill"
                            >Taken</span
                          >
                        </td>
                        <td>
                          <router-link
                            v-if="
                              appointment.patientId.immunizations.length > 0
                            "
                            :to="appointment.immunization"
                            class="btn btn-bold btn-label-brand btn-sm"
                            >Continue</router-link
                          >
                          <router-link
                            v-else
                            :to="appointment.createimmunization"
                            class="btn btn-bold btn-label-brand btn-sm"
                          >
                            Begin</router-link
                          >
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <b-pagination
                  class="float-right"
                  v-model="currentPage"
                  :total-rows="irows"
                  :per-page="10"
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
      dependants: [],
      appointments: [],
      totalPatients: '',
      triagesCount: '',
      nurseCount: '',
      appointmentCount: '',
      patientId: '',
      currentPatient: '',
      currentDependant: '',
      currentAdmitPatient: '',
      loading: false,
      admitpatientloading: false,
      admitdependantloading: false,
      landingPageUrl: '/dashboard/nurse',
      sendtodoctorUrl: '/triage/send/to/doctor',
      sendtodependantUrl: '/triage/senddependant/to/doctor',
      admitpatientUrl: '/patient/admit/patient',
      admitdependantUrl: '/dependant/admit/dependant',
      imageurl: 'http://localhost:3000/static/uploads/',
      input: '',
      text: '',

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
          this.appointments = response.data.data.appointments
          this.dependants = response.data.data.dependants
          this.patients = response.data.data.patients
          this.totalPatients = response.data.data.patientCount
          this.triagesCount = response.data.data.triagesCount
          this.nurseCount = response.data.data.nurseCount
          this.appointmentCount = response.data.data.appointmentCount

          this.meta = response.data.data.meta
          this.rows = this.meta.count
          this.pageSize = this.meta.pageSize
          this.pageCount = this.meta.pageCount

          let patients = this.patients
          let appointments = this.appointments
          let dependants = this.dependants

          for (let i = 0; i < patients.length; i++) {
            patients[i].url = '/patient/' + patients[i]._id
            patients[i].triageurl = '/triage/' + patients[i]._id
          }

          for (let i = 0; i < dependants.length; i++) {
            dependants[i].dependanttriageurl =
              '/create-dependant-triage/' + dependants[i]._id
          }

          for (let i = 0; i < appointments.length; i++) {
            appointments[i].url = '/patient/' + appointments[i].patient._id
            appointments[i].antenatal =
              '/antenatal/' + appointments[i].patient._id
            appointments[i].createantenatal =
              '/create-antenatal-account/' + appointments[i].patient._id
            appointments[i].createimmunization = '/create-immunization'
            appointments[i].immunization =
              '/update-immunization/' + appointments[i].patient._id
          }
        })
        .catch(error => {
          this.handleError(error)
        })
    },
    sendToDoc(patient) {
      this.loading = true
      this.currentPatient = patient
      const data = {
        triageId: patient.triages[patient.triages.length - 1]._id
      }
      axios
        .post(this.sendtodoctorUrl, data)
        .then(response => {
          this.patients = response.data.data.patients
          this.loading = false
          let patients = this.patients

          for (let i = 0; i < patients.length; i++) {
            patients[i].url = '/patient/' + patients[i]._id
            patients[i].triageurl = '/triage/' + patients[i]._id
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
    sendToDoctor(dependant) {
      this.loading = true
      this.currentDependant = dependant
      const data = {
        dependanttriageId: dependant.triages[dependant.triages.length - 1]._id
      }
      axios
        .post(this.sendtodependantUrl, data)
        .then(response => {
          this.dependants = response.data.data.dependants
          this.loading = false
          let dependants = this.dependants

          for (let i = 0; i < dependants.length; i++) {
            dependants[i].dependanttriageurl =
              '/create-dependant-triage/' + dependants[i]._id
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
    admitPatient(patient) {
      this.admitpatientloading = true
      this.currentAdmitPatient = patient
      const data = {
        patientId: patient._id
      }
      axios
        .put(this.admitpatientUrl, data)
        .then(response => {
          this.patients = response.data.data.patients
          this.admitpatientloading = false
          let patients = this.patients

          for (let i = 0; i < patients.length; i++) {
            patients[i].url = '/patient/' + patients[i]._id
            patients[i].triageurl = '/triage/' + patients[i]._id
          }
          this.$iziToast.success({
            title: 'Success!',
            message: response.data.message
          })
        })
        .catch(error => {
          this.admitpatientloading = false
          this.handleError(error)
        })
    },
    admitDependant(dependant) {
      this.admitdependantloading = true
      this.currentAdmitPatient = dependant
      const data = {
        dependantId: dependant._id
      }
      axios
        .put(this.admitdependantUrl, data)
        .then(response => {
          this.admitdependantloading = false
          this.dependants = response.data.data.dependants
          let dependants = this.dependants

          for (let i = 0; i < dependants.length; i++) {
            dependants[i].dependanttriageurl =
              '/create-dependant-triage/' + dependants[i]._id
          }
          this.$iziToast.success({
            title: 'Success!',
            message: response.data.message
          })
        })
        .catch(error => {
          this.admitdependantloading = false
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
    },
    searchDependant(arr, query) {
      query = this.text
      arr = this.dependants
      return arr.filter(
        el =>
          el
            .toString()
            .toLowerCase()
            .indexOf(query.toLowerCase()) !== -1
      )
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
    irows() {
      return this.appointments.length
    },
    drows() {
      return this.dependants.length
    }
  }
}
</script>

<style></style>
