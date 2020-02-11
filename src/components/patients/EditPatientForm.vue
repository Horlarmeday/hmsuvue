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
            Edit {{ patient.firstname }} {{ patient.lastname }}
            <small>Edit patient account</small>
          </h3>
        </div>
        <div class="kt-portlet__head-toolbar">
          <div class="kt-portlet__head-wrapper">
            <div class="kt-portlet__head-actions">
              <router-link
                to="/patients"
                class="btn btn-brand btn-elevate btn-icon-sm"
              >
                <i class="la la-plus"></i>
                Patients
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="kt-portlet__body">
        <h5 style="margin-bottom: 30px;color:#5d78ff;">Personal Information</h5>
        <!--begin: Datatable -->
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>First Name</label>
              <input
                type="text"
                class="form-control"
                v-model="patient.firstname"
                placeholder="First Name"
              />
              <span class="form-text text-muted"
                >Please enter patient first name.</span
              >
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Last Name</label>
              <input
                type="text"
                class="form-control"
                v-model="patient.lastname"
                placeholder="Last Name"
              />
              <span class="form-text text-muted"
                >Please enter patient last name.</span
              >
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Patient ID</label>
              <input
                type="text"
                class="form-control"
                v-model="patient.patientId"
                readonly
              />
              <span class="form-text text-muted">Please enter patient ID.</span>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Old Patient ID</label>
              <input
                type="text"
                class="form-control"
                v-model="patient.oldpatientId"
                placeholder="Old Patient ID"
              />
              <span class="form-text text-muted"
                >Please enter patient old ID.</span
              >
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Email</label>
              <input
                type="text"
                class="form-control"
                v-model="patient.email"
                placeholder="Email Address"
              />
              <span class="form-text text-muted"
                >Please enter staff email.</span
              >
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Religion</label>
              <select v-model="patient.religion" class="form-control">
                <option selected disabled>Select</option>
                <option value="Islam">Islam</option>
                <option value="Christianity">Christianity</option>
                <option value="Traditional">Traditional</option>
                <option value="Other">Other</option>
              </select>
              <span class="form-text text-muted"
                >Please select patient religion.</span
              >
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Phone Number</label>
              <input
                type="text"
                class="form-control"
                minlength="11"
                maxlength="11"
                v-model="patient.phonenumber"
                placeholder="Phone Number"
              />
              <span class="form-text text-muted"
                >Please enter patient phone number.</span
              >
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Date of Birth</label>
              <datetime
                type="date"
                input-class="form-control"
                v-model="patient.birthday"
              ></datetime>
              <span class="form-text text-muted"
                >Please select patient date of birth.</span
              >
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Country</label>
              <select
                v-model="patient.country"
                class="form-control"
                @change="getStates"
              >
                <option disabled>Select</option>
                <option value="Nigeria">Nigeria</option>
              </select>
              <span class="form-text text-muted"
                >Please select patient country.</span
              >
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>State</label>
              <select
                v-model="patient.state"
                class="form-control"
                @change="getCities"
              >
                <option disabled>Select</option>
                <option
                  v-for="state in states"
                  :key="state.slug"
                  :value="state.slug"
                  >{{ state.name }}</option
                >
              </select>
              <span class="form-text text-muted"
                >Please select patient state.</span
              >
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Local Government</label>
              <select v-model="patient.lga" class="form-control">
                <option disabled>Select</option>
                <option
                  v-for="city in cities"
                  :key="city.slug"
                  :value="city.name"
                  >{{ city.name }}</option
                >
              </select>
              <span class="form-text text-muted"
                >Please select patient Local Government.</span
              >
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Home Address</label>
              <input
                type="text"
                class="form-control"
                v-model="patient.address"
                placeholder="Home Address"
              />
              <span class="form-text text-muted"
                >Please enter patient address.</span
              >
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Gender</label>
              <select class="form-control" v-model="patient.gender">
                <option disabled selected>Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <span class="form-text text-muted"
                >Please select patient's gender.</span
              >
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Marital Status</label>
              <select class="form-control" v-model="patient.maritalstatus">
                <option disabled selected>Select</option>
                <option value="Married">Married </option>
                <option value="Single">Single</option>
                <option value="Widow">Widow</option>
                <option value="Widower">Widower</option>
                <option value="Divorced">Divorced</option>
              </select>
              <span class="form-text text-muted"
                >Please select marital status.</span
              >
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Occupation</label>
              <input
                type="text"
                class="form-control"
                v-model="patient.occupation"
                placeholder="Occupation"
              />
              <span class="form-text text-muted"
                >Please select patient's occupation.</span
              >
            </div>
          </div>
        </div>
        <h5 style="margin-bottom: 30px;color:#5d78ff;">Next of Kin</h5>

        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Next of Kin Name</label>
              <input
                type="text"
                class="form-control"
                v-model="patient.nextofkinname"
                placeholder="Next of Kin Name"
              />
              <span class="form-text text-muted"
                >Please enter patient next of kin name.</span
              >
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Next of Kin Address</label>
              <input
                type="text"
                class="form-control"
                v-model="patient.nextofkinaddress"
                placeholder="Next of Kin Address"
              />
              <span class="form-text text-muted"
                >Please enter patient next of kin address.</span
              >
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Next of Kin Phone</label>
              <input
                type="text"
                class="form-control"
                minlength="11"
                maxlength="11"
                v-model="patient.nextofkinphone"
                placeholder="Next of Kin Phone"
              />
              <span class="form-text text-muted"
                >Please enter patient next of kin phone.</span
              >
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Relationship</label>
              <select v-model="patient.relationship" class="form-control">
                <option selected disabled>Select</option>
                <option value="Brother">Brother</option>
                <option value="Sister">Sister</option>
                <option value="Father">Father</option>
                <option value="Mother">Mother</option>
                <option value="Wife">Wife</option>
                <option value="Husband">Husband</option>
                <option value="Son">Son</option>
                <option value="Daughter">Daughter</option>
                <option value="Uncle">Uncle</option>
                <option value="Aunt">Aunt</option>
              </select>
              <span class="form-text text-muted"
                >Please select patient next of kin relationship.</span
              >
            </div>
          </div>
        </div>
        <h5 style="margin-bottom: 30px;color:#5d78ff;">Account Type</h5>
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Card Type</label>
              <select class="form-control" v-model="patient.cardtype">
                <option disabled selected>Select</option>
                <option value="Single">Single</option>
                <option value="Family">Family</option>
              </select>
              <span class="form-text text-muted">Please select card type.</span>
            </div>
          </div>
          <div v-if="patient.cardtype === 'Family'" class="col-xl-6">
            <div class="form-group">
              <label>Number of Family</label>
              <input
                type="text"
                class="form-control"
                v-model="patient.numberoffamily"
                placeholder="Number of Family"
              />
              <span class="form-text text-muted"
                >Please enter number of family.</span
              >
            </div>
          </div>
        </div>
        <h5 style="margin-bottom: 30px;color:#5d78ff;">Health Insurance</h5>
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Health Insurance</label>
              <select class="form-control" v-model="patient.insurance">
                <option disabled selected>Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
              <span class="form-text text-muted"
                >Please select if patient has insurance.</span
              >
            </div>
          </div>
          <div v-if="patient.insurance === 'Yes'" class="col-xl-6">
            <div class="form-group">
              <label>Insurance Type</label>
              <select
                id="insurance"
                class="form-control"
                v-model="patient.insurancetype"
                @change="getHmos"
              >
                <option disabled>Select</option>
                <option
                  v-for="insurance in insurances"
                  :key="insurance._id"
                  :value="insurance._id"
                  >{{ insurance.name }}
                </option>
              </select>
              <span class="form-text text-muted"
                >Please select patient insurance type.</span
              >
            </div>
          </div>
        </div>
        <div v-if="patient.insurance === 'Yes'" class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Retainership/HMO Name</label>
              <v-select
                @input="getEnrollees"
                v-model="patient.retainershipname"
                label="name"
                :reduce="hmos => hmos._id"
                :options="hmos"
              ></v-select>

              <span class="form-text text-muted"
                >Please select retainership/HMO name.</span
              >
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Enrollees</label>
              <v-select
                @input="getEnrolleeId"
                v-model="patient.enrollees"
                label="name"
                :reduce="allenrollees => allenrollees._id"
                :options="allenrollees"
              ></v-select>
              <span class="form-text text-muted">Please select enrollees.</span>
            </div>
          </div>
        </div>

        <div v-if="patient.insurance === 'Yes'" class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Enrollee Code</label>
              <input
                style="background: #f1f1f1"
                type="text"
                class="form-control"
                v-model="patient.enrolleeId"
                readonly
              />
              <span class="form-text text-muted"
                >Please enter enrollee ID.</span
              >
            </div>
          </div>
        </div>
        <div v-if="insurance === 'Yes'" class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Plan</label>
              <select class="form-control" v-model="patient.plan">
                <option disabled>Select</option>
                <option value="Classic">Classic</option>
                <option value="Gold">Gold</option>
                <option value="Silver">Silver</option>
                <option value="Platinum">Platinum</option>
              </select>
              <span class="form-text text-muted"
                >Please select retainership plan.</span
              >
            </div>
          </div>
        </div>
        <div>
          <button
            v-if="!loading"
            @click="updatePatient"
            class="btn btn-brand btn-elevate float-right"
          >
            Update Patient
          </button>
          <button
            v-else
            class="btn btn-brand kt-spinner kt-spinner--right 
                      kt-spinner--sm kt-spinner--light btn-elevate float-right"
            disabled
          >
            Updating...
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- end:: Content -->
</template>

<script>
import axios from '../../axios'
import { Datetime } from 'vue-datetime'
import vSelect from 'vue-select'
import sc from 'states-cities-db'
export default {
  name: 'patientForm',
  components: {
    datetime: Datetime,
    vSelect
  },
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {
      states: [],
      cities: [],
      patient: '',

      loading: false,

      landingPageUrl: '/patient/',
      editPatientUrl: '/patient/',

      insuranceUrl: '/admin/insurance',
      hmoUrl: '/ajax/get/hmo/',
      enrolleeUrl: '/ajax/get/enrollee/',
      enrolleeIdUrl: '/ajax/get/enrolleeId/',

      insurances: [],
      hmos: [],
      allenrollees: []
    }
  },
  mounted() {
    this.landingPage()
    this.getInsurance()
    this.getStates()
  },
  methods: {
    handleError(error) {
      this.$iziToast.error({
        title: 'Error!',
        message: error.response.data
      })
    },

    landingPage() {
      axios
        .get(this.landingPageUrl + this.$route.params.id)
        .then(response => {
          this.patient = response.data.data
        })
        .catch(error => {
          this.handleError(error)
        })
    },
    updatePatient() {
      this.loading = true
      axios
        .put(this.editPatientUrl + this.$route.params.id, this.patient)
        .then(response => {
          this.loading = false
          this.patient = response.data.data
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

    getInsurance() {
      axios
        .get(this.insuranceUrl)
        .then(response => {
          this.insurances = response.data.data
        })
        .catch(error => {
          this.handleError(error)
        })
    },

    getHmos() {
      const data = {
        insuranceId: this.patient.insurancetype
      }
      axios
        .post(this.hmoUrl, data)
        .then(response => {
          this.hmos = response.data.data
        })
        .catch(error => {
          this.handleError(error)
        })
    },

    getEnrollees() {
      const data = {
        hmoId: this.patient.retainershipname
      }
      axios
        .post(this.enrolleeUrl, data)
        .then(response => {
          this.allenrollees = response.data.data
          //   this.patient.enrolleeId = response.data.data.enrolleeId
        })
        .catch(error => {
          this.handleError(error)
        })
    },

    getEnrolleeId() {
      const data = {
        enrolleeId: this.patient.enrollees
      }
      axios
        .post(this.enrolleeIdUrl, data)
        .then(response => {
          this.patient.enrolleeId = response.data.data.enrolleeId
        })
        .catch(error => {
          this.handleError(error)
        })
    },
    getStates() {
      const states = sc.getStates('nigeria')
      this.states = states
    },
    getCities() {
      const cities = sc.getCities(`${this.patient.state}`)
      this.cities = cities
    }
  }
}
</script>

<style></style>
