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
            {{ title }} Table
            <small>This is the {{ title }} table</small>
          </h3>
        </div>
        <div class="kt-portlet__head-toolbar">
          <div class="kt-portlet__head-wrapper">
            <div class="kt-portlet__head-actions">
              <div class="dropdown dropdown-inline">
                <button
                  type="button"
                  class="btn btn-default btn-icon-sm dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="la la-download"></i> Export
                </button>
                <div class="dropdown-menu dropdown-menu-right">
                  <ul class="kt-nav">
                    <li class="kt-nav__section kt-nav__section--first">
                      <span class="kt-nav__section-text">Choose an option</span>
                    </li>
                    <li class="kt-nav__item">
                      <a href="#" class="kt-nav__link">
                        <i class="kt-nav__link-icon la la-print"></i>
                        <span class="kt-nav__link-text">Print</span>
                      </a>
                    </li>
                    <li class="kt-nav__item">
                      <a href="#" class="kt-nav__link">
                        <i class="kt-nav__link-icon la la-copy"></i>
                        <span class="kt-nav__link-text">Copy</span>
                      </a>
                    </li>
                    <li class="kt-nav__item">
                      <a href="#" class="kt-nav__link">
                        <i class="kt-nav__link-icon la la-file-excel-o"></i>
                        <span class="kt-nav__link-text">Excel</span>
                      </a>
                    </li>
                    <li class="kt-nav__item">
                      <a href="#" class="kt-nav__link">
                        <i class="kt-nav__link-icon la la-file-text-o"></i>
                        <span class="kt-nav__link-text">CSV</span>
                      </a>
                    </li>
                    <li class="kt-nav__item">
                      <a href="#" class="kt-nav__link">
                        <i class="kt-nav__link-icon la la-file-pdf-o"></i>
                        <span class="kt-nav__link-text">PDF</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              &nbsp;
              <router-link
                to="/patient/account/type"
                class="btn btn-brand btn-elevate btn-icon-sm"
              >
                <i class="la la-plus"></i>
                New Patient
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="kt-portlet__body">
        <!--begin: Search Form -->
        <div class="kt-form kt-form--label-right kt-margin-t-20 kt-margin-b-10">
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
                      @keyup="filterPatient"
                    />
                    <span class="kt-input-icon__icon kt-input-icon__icon--left">
                      <span><i class="la la-search"></i></span>
                    </span>
                  </div>
                </div>
                <!-- <div class="col-md-4 kt-margin-b-20-tablet-and-mobile">
                  <div class="kt-form__group kt-form__group--inline">
                    <div class="kt-form__label">
                      <label>Status:</label>
                    </div>
                    <div class="kt-form__control">
                      <select
                        class="form-control bootstrap-select"
                        id="kt_form_status"
                      >
                        <option value="">All</option>
                        <option value="1">Pending</option>
                        <option value="2">Delivered</option>
                        <option value="3">Canceled</option>
                        <option value="4">Success</option>
                        <option value="5">Info</option>
                        <option value="6">Danger</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 kt-margin-b-20-tablet-and-mobile">
                  <div class="kt-form__group kt-form__group--inline">
                    <div class="kt-form__label">
                      <label>Type:</label>
                    </div>
                    <div class="kt-form__control">
                      <select
                        class="form-control bootstrap-select"
                        id="kt_form_type"
                      >
                        <option value="">All</option>
                        <option value="1">Online</option>
                        <option value="2">Retail</option>
                        <option value="3">Direct</option>
                      </select>
                    </div>
                  </div>
                </div> -->
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
                <th>Patient ID</th>
                <th>Photo</th>
                <th>Patient Name</th>
                <th>Birthday</th>
                <th>Age</th>
                <th>Religion</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Gender</th>
                <th>Registered By</th>
                <th>Status</th>
                <th>Action</th>
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
                <td>
                  <router-link :to="patient.url">
                    {{ patient.firstname }} {{ patient.lastname }}
                  </router-link>
                  <label
                    v-if="patient.retainershipname"
                    class="kt-badge kt-badge--success kt-badge--inline"
                    >{{ patient.insurancetype.name }}</label
                  >
                </td>
                <td>{{ patient.birthday | moment('DD/MM/YYYY') }}</td>
                <td>{{ patient.birthday | moment('from', 'now', true) }}</td>
                <td>{{ patient.religion }}</td>
                <td>{{ patient.address }}</td>
                <td>{{ patient.phonenumber }}</td>
                <td>
                  <label
                    v-if="patient.gender == 'Female'"
                    class="kt-badge kt-badge--success kt-badge--inline kt-badge--pill"
                    >Female</label
                  >
                  <label
                    v-else
                    class="kt-badge kt-badge--primary kt-badge--inline kt-badge--pill"
                    >Male</label
                  >
                </td>

                <td>{{ patient.createdAt | moment('DD/MM/YYYY, h:mm:ss') }}</td>
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
                  <router-link
                    class="btn btn-brand btn-success btn-sm"
                    :to="patient.editurl"
                    >Edit</router-link
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="card-footer">
          <p class="float-left">Showing {{ pageSize }} of {{ rows }} entries</p>
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
  </div>
  <!-- end:: Content -->
</template>

<script>
import axios from '../../axios'
export default {
  name: 'patientTable',
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {
      patients: [],
      currentPage: 1,
      input: '',
      pageCount: '',
      pageSize: '',
      rows: '',
      meta: '',
      patientsUrl: '/patient/',
      imageurl: '/static/uploads/patients/'
    }
  },
  mounted() {
    this.getPatients()
  },
  methods: {
    handleError(error) {
      this.$iziToast.error({
        title: 'Error!',
        message: error.response.data || 'Network Error'
      })
    },
    getPatients() {
      axios
        .get(`${this.patientsUrl}?currentPage=${this.currentPage}`)
        .then(response => {
          this.patients = response.data.data.patients
          this.meta = response.data.data.meta
          this.rows = this.meta.count
          this.pageSize = this.meta.pageSize
          this.pageCount = this.meta.pageCount

          let patients = this.patients
          for (let i = 0; i < patients.length; i++) {
            patients[i].photourl = this.imageurl + patients[i].photo
            patients[i].editurl = '/edit-patient/' + patients[i]._id
          }
          for (let i = 0; i < patients.length; i++) {
            patients[i].url = this.patientsUrl + patients[i]._id
          }
        })
        .catch(error => {
          this.handleError(error)
        })
    },

    filterPatient() {
      axios
        .get(
          `${this.patientsUrl}?currentPage=${this.currentPage}&search=${this.input}`
        )
        .then(response => {
          this.patients = response.data.data.patients
          this.meta = response.data.data.meta
          this.rows = this.meta.count
          this.pageSize = this.meta.pageSize
          this.pageCount = this.meta.pageCount

          let patients = this.patients
          for (let i = 0; i < patients.length; i++) {
            patients[i].photourl = this.imageurl + patients[i].photo
          }
          for (let i = 0; i < patients.length; i++) {
            patients[i].url = this.patientsUrl + patients[i]._id
          }
        })
        .catch(error => {
          this.handleError(error)
        })
    },
    pageChangeHandle(value) {
      if (value === 'next') {
        this.currentPage += 1
        this.getPatients()
      } else if (value === 'previous') {
        this.currentPage -= 1
        this.getPatients()
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
