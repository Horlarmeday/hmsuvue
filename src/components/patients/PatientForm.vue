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
      <div v-if="!savedStepOne" class="kt-portlet__body">
        <h5 style="margin-bottom: 30px;color:#5d78ff;">Personal Information</h5>
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
              <span class="form-text text-muted">Please enter patient ID.</span>
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
              <select v-model="state" class="form-control" @change="getCities">
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
        <div>
          <button
            v-if="!loading"
            @click="stepOne"
            class="btn btn-brand btn-elevate float-right"
          >
            Save and Continue
          </button>
          <button
            v-else
            class="btn btn-brand kt-spinner kt-spinner--right 
                      kt-spinner--sm kt-spinner--light btn-elevate float-right"
            disabled
          >
            Saving...
          </button>
        </div>
      </div>
      <div v-if="savedStepTwo" class="kt-portlet__body">
        <h5 style="margin-bottom: 30px;color:#5d78ff;">Account Type</h5>
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Card Type</label>
              <select class="form-control" v-model="cardtype">
                <option disabled selected>Select</option>
                <option value="Single">Single</option>
                <option value="Family">Family</option>
              </select>
              <span class="form-text text-muted">Please select card type.</span>
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
        <hr />
        <h6 v-if="cardtype === 'Family'">Dependants (if any)</h6>
        <small v-if="cardtype === 'Family'" style="color: red"
          >Create as many dependants as possible</small
        >
        <div v-if="cardtype === 'Family'" class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Name</label>
              <input
                type="text"
                class="form-control"
                v-model="dependantname"
                placeholder="Dependant Name"
              />
              <span class="form-text text-muted"
                >Please enter dependant name.</span
              >
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Date of Birth</label>
              <datetime
                type="date"
                input-class="form-control"
                v-model="dependantdob"
                placeholder="Date of Birth"
              ></datetime>
              <span class="form-text text-muted"
                >Please select dependant date of birth.</span
              >
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Gender</label>
              <select class="form-control" v-model="dependantgender">
                <option disabled selected>Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <span class="form-text text-muted"
                >Please select dependant gender.</span
              >
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Relationship</label>
              <select v-model="dependantrelationship" class="form-control">
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
                >Please select dependant relationship.</span
              >
            </div>
          </div>
          <div class="form-group">
            <button
              @click="createFamilyDependant"
              class="btn btn-primary btn-elevate btn-sm"
            >
              Create Dependant
            </button>
          </div>
        </div>
        <br />
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
                >Please select if patient has insurance.</span
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
              <!-- <select
                class="form-control"
                v-model="retainershipname"
                @change="getEnrollees"
              >
                <option disabled>Select</option>
                <option v-for="hmo in hmos" :key="hmo._id" :value="hmo._id"
                  >{{ hmo.name }}
                </option>
              </select> -->
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
                v-model="enrollees"
                label="name"
                :reduce="allenrollees => allenrollees._id"
                :options="allenrollees"
              ></v-select>
              <!-- <select
                class="form-control"
                v-model="enrollees"
                @change="getEnrolleeId"
              >
                <option disabled>Select</option>
                <option
                  v-for="enrollee in allenrollees"
                  :key="enrollee._id"
                  :value="enrollee._id"
                  >{{ enrollee.name }}
                </option>
              </select> -->
              <span class="form-text text-muted">Please select enrollees.</span>
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
        </div>
        <hr />
        <h6 v-if="insurance === 'Yes'">Dependants (if any)</h6>
        <small v-if="insurance === 'Yes'" style="color: red"
          >Create as many dependants as possible</small
        >
        <div v-if="insurance === 'Yes'" class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Name</label>
              <input
                type="text"
                class="form-control"
                v-model="nhisdependantname"
                placeholder="Dependant Name"
              />
              <span class="form-text text-muted"
                >Please enter dependant name.</span
              >
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Date of Birth</label>
              <datetime
                type="date"
                input-class="form-control"
                v-model="nhisdependantdob"
                placeholder="Date of Birth"
              ></datetime>
              <span class="form-text text-muted"
                >Please select dependant date of birth.</span
              >
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Gender</label>
              <select class="form-control" v-model="nhisdependantgender">
                <option disabled selected>Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <span class="form-text text-muted"
                >Please select dependant gender.</span
              >
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Relationship</label>
              <select v-model="nhisdependantrelationship" class="form-control">
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
                >Please select dependant relationship.</span
              >
            </div>
          </div>
          <div class="form-group">
            <button
              @click="createDependant"
              class="btn btn-primary btn-elevate btn-sm"
            >
              Create Dependant
            </button>
          </div>
        </div>
        <div>
          <button
            v-if="!loading"
            @click="stepTwo"
            class="btn btn-brand btn-elevate float-right"
          >
            Save and Continue
          </button>
          <button
            v-else
            class="btn btn-brand kt-spinner kt-spinner--right 
                      kt-spinner--sm kt-spinner--light btn-elevate float-right"
            disabled
          >
            Saving...
          </button>
        </div>
      </div>
      <div v-if="savedStepThree" class="kt-portlet__body ">
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

              <div class="row" v-if="!photoLoading" style="padding-top: 15px">
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
                <div class="kt-spinner kt-spinner--md kt-spinner--info"></div>
              </div>
            </div>
          </div>
        </div>
        <!--end: Datatable -->
      </div>
      <div v-if="savedStepFour" class="kt-portlet__body">
        <h5 style="margin-bottom: 30px;color:#5d78ff;">Payment</h5>
        <!-- Payment Method -->
        <h5>Registration Fee</h5>
        <div class="form-group">
          <div class="kt-radio-inline">
            <label class="kt-radio  kt-radio--success">
              <input
                type="radio"
                name="registration"
                v-model="registration"
                :value="1500"
              />
              Adult (₦1500)
              <span></span>
            </label>
            <label class="kt-radio  kt-radio--success">
              <input
                type="radio"
                name="registration"
                v-model="registration"
                :value="1000"
              />
              Children (₦1000)
              <span></span>
            </label>
            <label class="kt-radio  kt-radio--success">
              <input
                type="radio"
                name="registration"
                v-model="registration"
                :value="5000"
              />
              Family(₦5000)
              <span></span>
            </label>
          </div>
          <span class="form-text text-muted"
            >Please choose patient appropriate registration fee</span
          >
        </div>
        <h5>Consultation Fee</h5>
        <div class="form-group">
          <div class="kt-radio-inline">
            <label class="kt-radio  kt-radio--brand">
              <input
                type="radio"
                name="consultation"
                v-model="consultation"
                :value="3200"
              />
              Adult (₦3200)
              <span></span>
            </label>
            <label class="kt-radio  kt-radio--brand">
              <input
                type="radio"
                name="consultation"
                v-model="consultation"
                :value="2200"
              />
              Children (₦2200)
              <span></span>
            </label>
          </div>
          <span class="form-text text-muted"
            >Please choose patient appropriate consultation fee</span
          >
        </div>
        <div>
          <router-link
            to="/patients"
            class="btn btn-dark btn-elevate float-left"
          >
            Skip
          </router-link>
          <button
            v-if="!loading"
            @click="stepFour"
            class="btn btn-brand btn-elevate float-right"
          >
            Submit
          </button>
          <button
            v-else
            class="btn btn-brand kt-spinner kt-spinner--right 
                      kt-spinner--sm kt-spinner--light btn-elevate float-right"
            disabled
          >
            Submitting...
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

      registration: '',
      consultation: '',

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
      landingPageUrl: '/patient/page',
      stepTwoUrl: '/patient/account/type',
      stepThreeUrl: '/patient/registration/payment',
      dependantUrl: '/patient/dependant',
      familydependantUrl: '/patient/family/dependant',
      insuranceUrl: '/admin/insurance',
      hmoUrl: '/ajax/get/hmo/',
      enrolleeUrl: '/ajax/get/enrollee/',
      enrolleeIdUrl: '/ajax/get/enrolleeId/',
      photoLoading: false,

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
          this.patientId = response.data.data
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
          patientId: this.patient
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

      // console.log(this.video)
      // console.log('after initial')
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
