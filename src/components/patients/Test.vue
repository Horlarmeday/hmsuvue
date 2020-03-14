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
            Create New Patient
            <small>Create a new patient account</small>
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
        <form-wizard @on-complete="onComplete" color="#5d78ff">
          <h6 slot="title"></h6>
          <tab-content title="Personal details" icon="ti-user">
            <h5 style="margin-bottom: 30px;color:#5d78ff;">
              Personal Information
            </h5>
            <!--begin: Datatable -->
            <div class="row">
              <div class="col-xl-6">
                <div class="form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="firstname"
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
                    v-model="lastname"
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
                    v-model="patientId"
                    readonly
                  />
                  <span class="form-text text-muted"
                    >Please enter patient ID.</span
                  >
                </div>
              </div>
              <div class="col-xl-6">
                <div class="form-group">
                  <label>Old Patient ID</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="oldpatientId"
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
                    v-model="email"
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
                  <select v-model="religion" class="form-control">
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
                    v-model="phonenumber"
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
                    v-model="birthday"
                  ></datetime>
                  <!-- <input
                type="date"
                class="form-control"
                v-model="birthday"
                placeholder="Date of Birth"
              /> -->
                  <span class="form-text text-muted"
                    >Please enter patient date of birth.</span
                  >
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-xl-6">
                <div class="form-group">
                  <label>Country</label>
                  <select
                    v-model="country"
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
                    v-model="state"
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
                  <select v-model="lga" class="form-control">
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
                    v-model="address"
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
                  <select class="form-control" v-model="gender">
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
                  <select class="form-control" v-model="maritalstatus">
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
                    v-model="occupation"
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
                    v-model="nextofkinname"
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
                    v-model="nextofkinaddress"
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
                    v-model="nextofkinphone"
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
                  <select v-model="relationship" class="form-control">
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
          </tab-content>
          <tab-content title="Additional Info" icon="ti-settings">
            <h5 style="margin-bottom: 30px;color:#5d78ff;">Card Type</h5>
            <div class="row">
              <div class="col-xl-6">
                <div class="form-group">
                  <label>Card Type</label>
                  <select class="form-control" v-model="cardtype">
                    <option disabled selected>Select</option>
                    <option value="Single">Single</option>
                    <option value="Family">Family</option>
                  </select>
                  <span class="form-text text-muted"
                    >Please select card type.</span
                  >
                </div>
              </div>
              <div v-if="cardtype === 'Family'" class="col-xl-6">
                <div class="form-group">
                  <label>Number of Family</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="numberoffamily"
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
                  <select class="form-control" v-model="insurance">
                    <option disabled selected>Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                  <span class="form-text text-muted"
                    >Please select if patient has health insurance.</span
                  >
                </div>
              </div>
              <div v-if="insurance === 'Yes'" class="col-xl-6">
                <div class="form-group">
                  <label>Insurance Type</label>
                  <select
                    id="insurance"
                    class="form-control"
                    v-model="insurancetype"
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
            <div v-if="insurance === 'Yes'" class="row">
              <div class="col-xl-6">
                <div class="form-group">
                  <label>Retainership/HMO Name</label>
                  <v-select
                    @input="getEnrollees"
                    v-model="retainershipname"
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
                  <label
                    >Enrollees
                    <span class="text-danger"
                      >(can't find enrollee?
                      <a href="#" data-toggle="modal" data-target="#kt_modal_3">
                        create</a
                      >)</span
                    ></label
                  >

                  <v-select
                    @input="getEnrolleeId"
                    v-model="enrollees"
                    label="name"
                    :reduce="allenrollees => allenrollees._id"
                    :options="allenrollees"
                  ></v-select>

                  <span class="form-text text-muted"
                    >Please select enrollees.</span
                  >
                </div>
              </div>
            </div>
            <div v-if="insurance === 'Yes'" class="row">
              <div class="col-xl-6">
                <div class="form-group">
                  <label>Enrollee Code</label>
                  <input
                    style="background: #f1f1f1"
                    type="text"
                    class="form-control"
                    v-model="enrolleeId"
                    placeholder="Enrollee ID"
                    readonly
                  />
                  <span class="form-text text-muted"
                    >Please enter enrollee ID.</span
                  >
                </div>
              </div>
              <div class="col-xl-6">
                <div class="form-group">
                  <label>Hospital ID</label>
                  <input
                    style="background: #f1f1f1"
                    type="text"
                    class="form-control"
                    v-model="hospitalId"
                    placeholder="Hospital ID"
                    readonly
                  />
                  <span class="form-text text-muted">Hospital ID.</span>
                </div>
              </div>
              <div class="col-xl-6">
                <div class="form-group">
                  <label>Plan</label>
                  <select class="form-control" v-model="plan">
                    <option disabled>Select</option>
                    <option
                      v-for="plan in plans"
                      :key="plan._id"
                      value="plan.plan"
                      >{{ plan.plan }}</option
                    >
                  </select>
                  <span class="form-text text-muted"
                    >Please select health plan.</span
                  >
                </div>
              </div>
            </div>
          </tab-content>
          <tab-content title="Last step" icon="ti-check">
            <!--begin: Datatable -->
            <div class="row">
              <div class="col-xl-6">
                <div style="margin-left: 20%">
                  <p>How to take a good photo:</p>
                  <div>
                    <img
                      style="height:150px;"
                      src="../../assets/images/photoguide.png"
                      alt="User Icon"
                      class="mr-3"
                    />

                    <ol>
                      <li>Ensure you are in a bright room</li>
                      <li>
                        Ensure the person's face is centred in the camera window
                      </li>
                      <li>Ensure your the face is showing clearly</li>
                    </ol>
                  </div>
                </div>
              </div>
              <div class="col-xl-6">
                <div style="margin-left: 30%">
                  <img
                    style="padding-top: 10px"
                    v-if="!videoShowing && !image"
                    v-on:click="startCamera()"
                    src="../../assets/images/upload.png"
                  />
                  <video
                    ref="video"
                    id="video"
                    v-show="!image && !photoSaved"
                    style="height:1px;width:250px;margin-bottom:20px;"
                    autoplay
                  ></video>
                  <div align="center">
                    <canvas
                      ref="canvas"
                      id="canvas"
                      width="250"
                      height="187"
                      v-show="image"
                    >
                    </canvas>
                  </div>

                  <button
                    id="snap"
                    v-if="!image && !photoSaved && !videoShowing"
                    class="btn btn-success orange"
                    v-on:click="startCamera()"
                  >
                    Take Photo Now
                  </button>

                  <button
                    id="snap"
                    v-if="!image && !photoSaved && videoShowing"
                    class="btn btn-success orange"
                    v-on:click="capture()"
                  >
                    Snap Photo
                  </button>

                  <div
                    class="row"
                    v-if="!photoLoading"
                    style="padding-top: 15px"
                  >
                    <div style="margin-left: 32%">
                      <button
                        id="snap"
                        v-if="image && !photoSaved"
                        class="btn btn-success orange"
                        v-on:click="snapAgain()"
                      >
                        Snap Again
                      </button>
                    </div>

                    <div style="margin-left: 10px">
                      <button
                        id="save"
                        v-if="image && !photoSaved"
                        class="btn btn-primary orange"
                        v-on:click="uploadPatientPic()"
                      >
                        Save Photo
                      </button>
                    </div>
                  </div>

                  <div
                    class="row"
                    v-if="photoLoading"
                    style="padding-top: 15px;margin-left: 35%"
                  >
                    <div
                      class="kt-spinner kt-spinner--md kt-spinner--info"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <!--end: Datatable -->
          </tab-content>
        </form-wizard>
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
                  Create Enrollee
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
                  <label class="col-2 col-form-label">Enrollee</label>
                  <div class="col-10">
                    <input
                      class="form-control readonly"
                      type="text"
                      v-model="input.name"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-2 col-form-label">Enrollee ID</label>
                  <div class="col-10">
                    <input
                      class="form-control"
                      type="text"
                      v-model="input.enrolleeId"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-2 col-form-label">Plan</label>
                  <div class="col-10">
                    <select class="form-control" v-model="input.plan">
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
                <div class="modal-footer">
                  <button
                    v-if="!loading"
                    type="button"
                    class="btn btn-brand"
                    @click="createEnrollee"
                  >
                    Create
                  </button>
                  <button
                    v-else
                    class="btn btn-brand kt-spinner kt-spinner--right 
                      kt-spinner--sm kt-spinner--light btn-elevate float-right"
                    disabled
                  >
                    Creating...
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
  </div>
  <!-- end:: Content -->
</template>

<script>
import axios from '../../axios'
import { Datetime } from 'vue-datetime'
import sc from 'states-cities-db'
import { FormWizard, TabContent } from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import vSelect from 'vue-select'

export default {
  name: 'wizardpatientForm',
  components: {
    datetime: Datetime,
    FormWizard,
    TabContent,
    vSelect
  },
  props: {
    title: {
      type: String,
      default: 'Patient Account'
    }
  },
  data() {
    return {
      states: [],
      cities: [],
      firstname: '',
      lastname: '',
      email: '',
      address: '',
      birthday: '',
      phonenumber: '',
      gender: '',
      patientId: '',
      oldpatientId: '',
      religion: '',
      country: '',
      state: '',
      lga: '',
      maritalstatus: '',
      nextofkinname: '',
      nextofkinaddress: '',
      nextofkinphone: '',
      relationship: '',
      occupation: '',

      cardtype: '',
      numberoffamily: '',
      dependantname: '',
      dependantdob: '',
      dependantgender: '',
      dependantrelationship: '',
      insurance: '',
      insurancetype: '',
      retainershipname: '',
      enrollees: '',
      enrolleeId: '',
      nhisdependantname: '',
      nhisdependantdob: '',
      nhisdependantgender: '',
      nhisdependantrelationship: '',
      plan: '',
      hospitalId: '',

      registration: '',
      consultation: '',

      input: {
        enrolleeId: '',
        name: '',
        plan: ''
      },

      loading: false,
      patient: '',
      savedStepOne: false,
      savedStepTwo: false,
      savedStepThree: false,
      savedStepFour: false,

      // for images
      showFinish: false,
      videoShowing: false,
      photoSaved: false,
      video: {},
      canvas: {},
      image: '',
      patientUploadUrl: '/patient/upload',
      stepOneUrl: '/patient',
      createpatientUrl: '/patient/patient',
      landingPageUrl: '/patient/page',
      stepTwoUrl: '/patient/account/type',
      stepThreeUrl: '/patient/registration/payment',
      dependantUrl: '/patient/dependant',
      familydependantUrl: '/patient/family/dependant',
      insuranceUrl: '/admin/insurance',
      hmoUrl: '/ajax/get/hmo/',
      enrolleeUrl: '/ajax/get/enrollee/',
      createenrolleeUrl: '/admin/enrollee/',
      enrolleeIdUrl: '/ajax/get/enrolleeId/',
      generatehospitalidUrl: '/ajax/generate/hospitalid',
      photoLoading: false,

      plans: [],
      insurances: [],
      hmos: [],
      allenrollees: [],
      insurancename: ''
    }
  },
  mounted() {
    this.landingPage()
    this.getInsurance()
    // this.getCountry()
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
        .get(this.landingPageUrl)
        .then(response => {
          this.patientId = response.data.data.patientId
          this.plans = response.data.data.plans
        })
        .catch(error => {
          this.handleError(error)
        })
    },
    stepOne() {
      this.loading = true
      const stepOnedata = {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        address: this.address,
        birthday: this.birthday,
        phonenumber: this.phonenumber,
        gender: this.gender,
        maritalstatus: this.maritalstatus,
        patientId: this.patientId,
        oldpatientId: this.oldpatientId,
        religion: this.religion,
        country: this.country,
        state: this.state,
        lga: this.lga,
        nextofkinname: this.nextofkinname,
        nextofkinaddress: this.nextofkinaddress,
        nextofkinphone: this.nextofkinphone,
        relationship: this.relationship,
        occupation: this.occupation
      }
      axios
        .post(this.stepOneUrl, stepOnedata)
        .then(response => {
          this.loading = false
          this.patient = response.data.data._id
          this.savedStepOne = true
          this.savedStepTwo = true
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
    showAlert() {
      // Use sweetalert2
      this.$swal({
        icon: 'success',
        title: 'Success! Patient Created',
        text: 'Do you want to create dependants',
        showCancelButton: true,
        confirmButtonText: `<a target="_blank" href="#" class="kt-shape-font-color-1">Yes, create</a>`,
        confirmButtonColor: '#007bff',
        cancelButtonText:
          '<a href="/patients" class="kt-shape-font-color-1">No, cancel!</a>',
        cancelButtonColor: '#dc3545'
      })
    },
    onComplete() {
      this.loading = true
      const stepOnedata = {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        address: this.address,
        birthday: this.birthday,
        phonenumber: this.phonenumber,
        gender: this.gender,
        maritalstatus: this.maritalstatus,
        patientId: this.patientId,
        oldpatientId: this.oldpatientId,
        religion: this.religion,
        country: this.country,
        state: this.state,
        lga: this.lga,
        nextofkinname: this.nextofkinname,
        nextofkinaddress: this.nextofkinaddress,
        nextofkinphone: this.nextofkinphone,
        relationship: this.relationship,
        occupation: this.occupation,

        cardtype: this.cardtype,
        numberoffamily: this.numberoffamily,
        insurance: this.insurance,
        insurancetype: this.insurancetype,
        retainershipname: this.retainershipname,
        enrollees: this.enrollees,
        enrolleeId: this.enrolleeId,
        base64: this.image
      }
      axios
        .post(this.createpatientUrl, stepOnedata)
        .then(response => {
          this.loading = false
          this.patient = response.data.data._id
          this.$swal({
            icon: 'success',
            title: 'Success! Patient Created',
            text: 'Do you want to create dependants',
            showCancelButton: true,
            confirmButtonText: `<a target="_blank" href="/create-dependant/${this.patient}" class="kt-shape-font-color-1">Yes, create</a>`,
            cancelButtonText:
              '<a href="/patients" class="btn btn-danger" class="kt-shape-font-color-1">No, cancel!</a>'
          })
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
    setNull(obj, val) {
      Object.keys(obj).forEach(k => (obj[k] = val))
    },
    createEnrollee() {
      const data = {
        hmoId: this.retainershipname,
        name: this.input.name,
        enrolleeId: this.input.enrolleeId,
        plan: this.input.plan
      }
      axios
        .post(this.createenrolleeUrl, data)
        .then(response => {
          this.$iziToast.success({
            title: 'Success!',
            message: response.data.message
          })
          this.setNull(this.input, '')
        })
        .catch(error => {
          this.handleError(error)
        })
    },
    createFamilyDependant() {
      let data = {
        name: this.dependantname,
        dateofbirth: this.dependantdob,
        gender: this.dependantgender,
        relationship: this.dependantrelationship,
        patientId: this.patient
      }
      axios
        .post(this.familydependantUrl, data)
        .then(response => {
          this.dependantname = ''
          this.dependantdob = ''
          this.dependantgender = ''
          this.dependantrelationship = ''
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
    createDependant() {
      let data = {
        name: this.nhisdependantname,
        dateofbirth: this.nhisdependantdob,
        gender: this.nhisdependantgender,
        relationship: this.nhisdependantrelationship,
        patientId: this.patient
      }
      axios
        .post(this.dependantUrl, data)
        .then(response => {
          this.nhisdependantname = ''
          this.nhisdependantdob = ''
          this.nhisdependantgender = ''
          this.nhisdependantrelationship = ''
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
    stepTwo() {
      this.loading = true
      let stepTwodata = null
      if (this.cardtype === 'Single' && this.insurance === 'No') {
        stepTwodata = {
          cardtype: this.cardtype,
          insurance: this.insurance,
          patientId: this.patient
        }
      } else {
        stepTwodata = {
          cardtype: this.cardtype,
          numberoffamily: this.numberoffamily,
          insurance: this.insurance,
          insurancetype: this.insurancetype,
          retainershipname: this.retainershipname,
          enrollees: this.enrollees,
          enrolleeId: this.enrolleeId,
          patientId: this.patient,
          plan: this.plan
        }
      }
      axios
        .put(this.stepTwoUrl, stepTwodata)
        .then(response => {
          this.loading = false
          this.patient = response.data.data._id
          this.savedStepTwo = false
          this.savedStepThree = true
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
    stepFour() {
      this.loading = true
      const stepFourdata = {
        registration: this.registration,
        consultation: this.consultation,
        patientId: this.patient
      }
      axios
        .put(this.stepThreeUrl, stepFourdata)
        .then(response => {
          this.loading = false
          this.patient = response.data.data._id
          this.$router.push('/patients')
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
    startCamera() {
      this.toggleVideoShowing()
      this.video = this.$refs.video
      this.video.style = 'display:block;width:250px;margin-bottom:20px;'
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
          this.video.srcObject = stream
          this.video.play()
        })
      }
    },
    uploadPatientPic() {
      this.photoLoading = true
      const stepThreedata = {
        base64: this.image,
        patientId: this.patient
      }
      axios
        .post(this.patientUploadUrl, stepThreedata)
        .then(response => {
          this.photoLoading = false
          this.photoSaved = true
          this.patient = response.data.data.patient
          this.$iziToast.success({
            title: 'Success!',
            message: response.data.message
          })
          this.savedStepThree = false
          this.savedStepFour = true
        })
        .catch(error => {
          this.photoLoading = false
          this.handleError(error)
        })
    },
    capture() {
      this.canvas = this.$refs.canvas
      this.canvas.getContext('2d').drawImage(this.video, 0, 0, 250, 187)
      this.image = this.canvas.toDataURL()
    },
    snapAgain() {
      this.image = null
    },
    toggleVideoShowing() {
      this.videoShowing = !this.videoShowing
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
    generateHospitalId() {
      const data = {
        insuranceId: this.insurancetype,
        hmoId: this.retainershipname,
        enrolleeId: this.enrollees
      }
      axios
        .post(this.generatehospitalidUrl, data)
        .then(response => {
          console.log(this.hospitalId)
          this.hospitalId = response.data.data
        })
        .catch(error => {
          this.handleError(error)
        })
    },
    getHmos() {
      const data = {
        insuranceId: this.insurancetype
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
        hmoId: this.retainershipname
      }
      axios
        .post(this.enrolleeUrl, data)
        .then(response => {
          this.allenrollees = response.data.data
          this.enrolleeId = response.data.data.enrolleeId
        })
        .catch(error => {
          this.handleError(error)
        })
    },
    getEnrolleeId() {
      const data = {
        enrolleeId: this.enrollees
      }
      axios
        .post(this.enrolleeIdUrl, data)
        .then(response => {
          this.enrolleeId = response.data.data.enrolleeId
        })
        .then(this.generateHospitalId())
        .catch(error => {
          this.handleError(error)
        })
    },
    // getCountry() {
    //   const country = sc.getBySlug('country', 'nigeria')
    // },
    getStates() {
      const states = sc.getStates('nigeria')
      this.states = states
    },
    getCities() {
      const cities = sc.getCities(`${this.state}`)
      this.cities = cities
    }
  }
}
</script>

<style></style>
