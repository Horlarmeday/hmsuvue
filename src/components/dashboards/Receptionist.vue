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
                    Receptionists
                  </h4>
                  <span class="kt-widget24__desc">
                    Total number of receptionists
                  </span>
                </div>
                <span class="kt-widget24__stats kt-font-success">
                  {{ receptionistCount }}
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
                            @change="filterState"
                          >
                            <option value="">Select</option>
                            <option value="pending">Pending</option>
                            <option value="attended">Attended</option>
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
          <div class="kt-portlet__body">
            <div class="dt-responsive table-responsive">
              <table class="table table-striped table-bordered nowrap">
                <thead>
                  <tr>
                    <th>S/N</th>
                    <th>Appointment ID</th>
                    <th>Patient Name</th>
                    <th>Examiner</th>
                    <th>Department</th>
                    <th>Appointment Date</th>
                    <th>Appointment Time</th>
                    <th>Status</th>
                    <th>Date Created</th>
                    <th>Created By</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-if="appointments.length == 0">
                    <td colspan="9" align="center">No Appointments</td>
                  </tr>
                  <tr
                    v-for="(appointment, index) in appointments"
                    :key="appointment._id"
                  >
                    <td>
                      {{ index + 1 }}
                    </td>
                    <td>{{ appointment.uniqueid }}</td>

                    <td>
                      <router-link :to="appointment.url">
                        {{ appointment.patient.firstname }}
                        {{ appointment.patient.lastname }}
                      </router-link>
                    </td>
                    <td>
                      <router-link to="#">
                        {{ appointment.examiner.firstname }}
                        {{ appointment.examiner.lastname }}
                      </router-link>
                    </td>
                    <td>{{ appointment.department }}</td>
                    <td>
                      {{ appointment.appointmentdate | moment('DD/MM/YYYY') }}
                    </td>
                    <td>
                      {{ appointment.appointmenttime | moment('h:mma') }}
                    </td>
                    <td>
                      <label
                        v-if="appointment.taken"
                        class="kt-badge kt-badge--success kt-badge--inline"
                        >Attended</label
                      >
                      <label
                        v-if="!appointment.taken"
                        class="kt-badge kt-badge--warning kt-badge--inline"
                        >Pending</label
                      >
                    </td>

                    <td>
                      {{ appointment.createdAt | moment('DD/MM/YYYY, ha') }}
                    </td>
                    <td>
                      <a href="#">
                        {{ appointment.creator.firstname }}
                        {{ appointment.creator.lastname }}
                      </a>
                    </td>
                    <td>
                      <router-link
                        :to="appointment.smsurl"
                        class="btn btn-brand btn-sm"
                      >
                        Send SMS
                      </router-link>
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
    </div>
    <!--End::Section-->

    <!--End::Dashboard 1-->
  </div>
  <!-- end:: Content -->
</template>

<script>
import axios from '../../axios'

export default {
  name: 'receptionistdasboard',
  data() {
    return {
      appointments: [],
      totalPatients: '',
      triagesCount: '',
      receptionistCount: '',
      appointmentCount: '',
      date: '',
      status: '',
      loading: false,
      landingPageUrl: '/dashboard/receptionist',
      filterpatientUrl: '/dashboard/filter/patients',

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
          this.totalPatients = response.data.data.patientCount
          this.triagesCount = response.data.data.triagesCount
          this.receptionistCount = response.data.data.receptionistCount
          this.appointmentCount = response.data.data.appointmentCount

          this.meta = response.data.data.meta
          this.rows = this.meta.count
          this.pageSize = this.meta.pageSize
          this.pageCount = this.meta.pageCount

          let appointments = this.appointments

          for (let i = 0; i < appointments.length; i++) {
            appointments[i].url = '/patient/' + appointments[i].patient._id
            appointments[i].smsurl = '/send-sms/' + appointments[i].patient._id
          }
        })
        .catch(error => {
          this.handleError(error)
        })
    },
    filterState() {
      //   const data = {
      //     date: this.date
      //   }
      //   axios
      //     .post(`${this.filterpatientUrl}?currentPage=${this.currentPage}`, data)
      //     .then(response => {
      //       this.patients = response.data.data.patients
      //       this.loading = false
      //       let patients = this.patients
      //       for (let i = 0; i < patients.length; i++) {
      //         patients[i].url = '/patient/' + patients[i]._id
      //         patients[i].appointmenturl = '/appointment/' + patients[i]._id
      //       }
      //       this.$iziToast.success({
      //         title: 'Success!',
      //         message: response.data.message
      //       })
      //     })
      //     .catch(error => {
      //       this.loading = false
      //       this.handleError(error)
      //     })
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
