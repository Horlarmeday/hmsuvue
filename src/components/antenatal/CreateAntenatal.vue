<template>
  <div class="kt-content  kt-grid__item kt-grid__item--fluid" id="kt_content">
    <div class="row">
      <div class="col-xl-6">
        <!--begin::Portlet-->
        <div
          style="border: 1px solid #fd397a;"
          class="kt-portlet kt-portlet--skin-solid"
        >
          <div
            style="background: #fd397a;"
            class="kt-portlet__head kt-portlet__head--noborder"
          >
            <div class="kt-portlet__head-label">
              <span class="kt-portlet__head-icon">
                <i class="flaticon2-graphic"></i>
              </span>
              <h3 class="kt-portlet__head-title">
                PATIENT DETAILS
              </h3>
            </div>
          </div>
          <div class="kt-portlet__body">
            <div class="kt-widget4">
              <div style="padding-bottom: 0px" class="kt-widget4__item">
                <span class="kt-widget4__icon">
                  <i class="flaticon-pie-chart-1 kt-font-info"></i>
                </span>
                <a href="#" class="kt-widget4__title kt-widget4__title--light">
                  Full Name
                </a>
                <span style="color: #000000" class="kt-widget4__number"
                  >{{ patient.firstname }} {{ patient.lastname }}</span
                >
              </div>
              <div style="padding-bottom: 0px" class="kt-widget4__item">
                <span class="kt-widget4__icon">
                  <i
                    class="flaticon-safe-shield-protection  kt-font-success"
                  ></i>
                </span>
                <a href="#" class="kt-widget4__title kt-widget4__title--light">
                  Marital Status
                </a>
                <span style="color: #000" class="kt-widget4__number">{{
                  patient.maritalstatus
                }}</span>
              </div>
              <div style="padding-bottom: 0px" class="kt-widget4__item">
                <span class="kt-widget4__icon">
                  <i class="flaticon2-line-chart kt-font-danger"></i>
                </span>
                <a href="#" class="kt-widget4__title kt-widget4__title--light">
                  Phone Number
                </a>
                <span style="color: #000" class="kt-widget4__number">{{
                  patient.phonenumber
                }}</span>
              </div>
              <div style="padding-bottom: 0px" class="kt-widget4__item">
                <span class="kt-widget4__icon">
                  <i class="flaticon2-pie-chart-1 kt-font-primary"></i>
                </span>
                <a href="#" class="kt-widget4__title kt-widget4__title--light">
                  Age
                </a>
                <span style="color: #000" class="kt-widget4__number">{{
                  patient.birthday | moment('from', 'now', true)
                }}</span>
              </div>
              <div style="padding-bottom: 0px" class="kt-widget4__item">
                <span class="kt-widget4__icon">
                  <i class="flaticon2-rocket kt-font-brand"></i>
                </span>
                <a href="#" class="kt-widget4__title kt-widget4__title--light">
                  Gender
                </a>
                <span style="color: #000" class="kt-widget4__number">{{
                  patient.gender
                }}</span>
              </div>

              <div class="kt-widget4__item"></div>
            </div>
          </div>
        </div>
        <!--end::Portlet-->
      </div>
      <div class="col-xl-6">
        <!--begin::Portlet-->
        <div
          style="border: 1px solid #5d78ff"
          class="kt-portlet kt-portlet--skin-solid kt-portlet-- "
        >
          <div style="background: #5d78ff" class="kt-portlet__head">
            <div class="kt-portlet__head-label">
              <span class="kt-portlet__head-icon">
                <i class="flaticon-notes"></i>
              </span>
              <h3 class="kt-portlet__head-title">
                PATIENT DETAILS
              </h3>
            </div>
          </div>
          <div class="kt-portlet__body">
            <div class="kt-widget4">
              <div style="padding-bottom: 0px" class="kt-widget4__item">
                <span class="kt-widget4__icon">
                  <i class="flaticon-pie-chart-1 kt-font-info"></i>
                </span>
                <a href="#" class="kt-widget4__title kt-widget4__title--light">
                  Address
                </a>
                <span style="color: #000000" class="kt-widget4__number">{{
                  patient.address
                }}</span>
              </div>
              <div style="padding-bottom: 0px" class="kt-widget4__item">
                <span class="kt-widget4__icon">
                  <i
                    class="flaticon-safe-shield-protection  kt-font-success"
                  ></i>
                </span>
                <a href="#" class="kt-widget4__title kt-widget4__title--light">
                  Patient ID
                </a>
                <span style="color: #000" class="kt-widget4__number">{{
                  patient.patientId
                }}</span>
              </div>
              <div style="padding-bottom: 0px" class="kt-widget4__item">
                <span class="kt-widget4__icon">
                  <i class="flaticon2-line-chart kt-font-danger"></i>
                </span>
                <a href="#" class="kt-widget4__title kt-widget4__title--light">
                  Religion
                </a>
                <span style="color: #000" class="kt-widget4__number">{{
                  patient.religion
                }}</span>
              </div>
              <div style="padding-bottom: 0px" class="kt-widget4__item">
                <span class="kt-widget4__icon">
                  <i class="flaticon2-pie-chart-1 kt-font-primary"></i>
                </span>
                <a href="#" class="kt-widget4__title kt-widget4__title--light">
                  Occupation
                </a>
                <span style="color: #000" class="kt-widget4__number">{{
                  patient.occupation
                }}</span>
              </div>
              <div style="padding-bottom: 0px" class="kt-widget4__item">
                <span class="kt-widget4__icon">
                  <i class="flaticon2-pie-chart-1 kt-font-primary"></i>
                </span>
                <a href="#" class="kt-widget4__title kt-widget4__title--light">
                  Antenatal ID
                </a>
                <span style="color: #000" class="kt-widget4__number">{{
                  ancId
                }}</span>
              </div>

              <div class="kt-widget4__item"></div>
            </div>
          </div>
        </div>
        <!--end::Portlet-->
      </div>
    </div>
    <div class="kt-portlet kt-portlet--mobile">
      <div class="kt-portlet__head kt-portlet__head--lg">
        <div class="kt-portlet__head-label">
          <span class="kt-portlet__head-icon">
            <i class="kt-font-brand flaticon2-line-chart"></i>
          </span>
          <h3 class="kt-portlet__head-title">
            Create {{ patient.firstname }} {{ patient.lastname }} Antenatal
            Account
            <small>Create a new antenatal account</small>
          </h3>
        </div>
      </div>
      <div class="kt-portlet__body">
        <!--begin: Datatable -->
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Occupation</label>
              <input
                type="text"
                class="form-control"
                v-model="input.occupation"
                placeholder="Occupation"
                required
              />

              <span class="form-text text-muted"
                >Please enter patient occupation.</span
              >
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Gravida</label>
              <input
                type="text"
                class="form-control"
                v-model="input.gravida"
                placeholder="Gravida"
                required
              />

              <span class="form-text text-muted">Please enter gravida.</span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Parity</label>
              <input
                type="text"
                class="form-control"
                v-model="input.parity"
                placeholder="Parity"
                required
              />
              <span class="form-text text-muted">Please enter parity.</span>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>LMP</label>
              <input
                type="date"
                v-model="input.lmp"
                class="form-control"
                @change="pregnancyCalc"
              />
              <!-- <datetime
                type="text"
                input-class="form-control"
                v-model="input.lmp"
                @change="readDate"
              ></datetime> -->
              <span class="form-text text-muted">Please select LMP.</span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>EDD</label>
              <input
                type="text"
                class="form-control"
                v-model="input.edd"
                required
                readonly
              />
              <span class="form-text text-muted">EDD date.</span>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Estimated Conception</label>
              <input
                type="text"
                class="form-control"
                v-model="input.ecc"
                required
                readonly
              />
              <span class="form-text text-muted"
                >Estimated conception time.</span
              >
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Fetal Age</label>
              <input
                type="text"
                class="form-control"
                v-model="input.fetalage"
                required
                readonly
              />
              <span class="form-text text-muted">Fetal age.</span>
            </div>
          </div>
        </div>
        <h5 style="margin-bottom: 30px;color:#5d78ff;">
          MEDICAL AND SURGICAL HISTORY
        </h5>
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Medical History</label>
              <input
                type="text"
                class="form-control"
                v-model="input.medicalhistory"
                placeholder="Medical History"
                required
              />
              <span class="form-text text-muted"
                >Please enter medical history.</span
              >
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Surgical History</label>
              <input
                type="text"
                class="form-control"
                v-model="input.surgicalhistory"
                placeholder="Surgical History"
                required
              />
              <span class="form-text text-muted"
                >Please enter surgical history.</span
              >
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Blood Transfusion</label>
              <input
                type="text"
                class="form-control"
                v-model="input.bloodtransfusion"
                placeholder="Blood Transfusion"
                required
              />
              <span class="form-text text-muted"
                >Please enter blood transfusion.</span
              >
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Family History</label>
              <v-select
                v-model="input.familyhistory"
                :options="['Twins', 'Tuberculosis', 'Diabetes', 'Hypertension']"
                multiple
              ></v-select>

              <span class="form-text text-muted"
                >Please select family history.</span
              >
            </div>
          </div>
        </div>
        <h5 style="margin-bottom: 30px;color:#5d78ff;">
          PREVIOUS PREGNANCY
        </h5>
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Year</label>
              <select v-model="input.year" class="form-control">
                <option disabled>Select Year</option>
                <option>1990</option>
                <option>1991</option>
                <option>1992</option>
                <option>1993</option>
                <option>1994</option>
                <option>1995</option>
                <option>1996</option>
                <option>1997</option>
                <option>1998</option>
                <option>1999</option>
                <option>2000</option>
                <option>2001</option>
                <option>2002</option>
                <option>2003</option>
                <option>2004</option>
                <option>2005</option>
                <option>2006</option>
                <option>2007</option>
                <option>2008</option>
                <option>2009</option>
                <option>2010</option>
                <option>2011</option>
                <option>2012</option>
                <option>2013</option>
                <option>2014</option>
                <option>2015</option>
                <option>2016</option>
                <option>2017</option>
                <option>2018</option>
                <option>2019</option>
                <option>2020</option>
              </select>
              <span class="form-text text-muted">Please select year.</span>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Place of Delivery</label>
              <input
                type="text"
                class="form-control"
                v-model="input.deliveryplace"
                placeholder="Place of Delivery"
                required
              />
              <span class="form-text text-muted"
                >Please enter place of delivery.</span
              >
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Maturity</label>
              <select v-model="input.maturity" class="form-control">
                <option disabled>Select</option>
                <option>Term</option>
                <option>Preterm</option>
              </select>
              <span class="form-text text-muted">Please select maturity.</span>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Duration of Labour</label>
              <select v-model="input.duration" class="form-control">
                <option disabled>Select</option>
                <option>Less than 6 Hours</option>
                <option>More than 6 Hours</option>
              </select>
              <span class="form-text text-muted"
                >Please select duration of labour.</span
              >
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Type of Delivery</label>
              <select v-model="input.delivery" class="form-control">
                <option>Select</option>
                <option>CS</option>
                <option>SVD</option>
              </select>
              <span class="form-text text-muted"
                >Please select type of delivery.</span
              >
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Weight (kg)</label>
              <input
                type="text"
                placeholder="Weight"
                class="form-control"
                v-model="input.weight"
                required
              />
              <span class="form-text text-muted">Please enter weight.</span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Sex</label>
              <select v-model="input.sex" class="form-control">
                <option disabled>Select</option>
                <option>Male</option>
                <option>Female</option>
              </select>
              <span class="form-text text-muted"
                >Please select type of sex.</span
              >
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Fate</label>
              <select v-model="input.fate" class="form-control">
                <option disabled>Select</option>
                <option>Stillbirth</option>
                <option>Alive</option>
                <option>Dead</option>
              </select>
              <span class="form-text text-muted"
                >Please select type of fate.</span
              >
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Puerperium</label>
              <input
                type="text"
                class="form-control"
                v-model="input.puerperium"
                placeholder="Puerperium"
                required
              />
              <span class="form-text text-muted">Please enter puerperium.</span>
            </div>
          </div>
        </div>
        <div>
          <button
            v-if="!loading"
            @click="createAntenatal"
            class="btn btn-brand btn-elevate float-right"
          >
            Create Account
          </button>
          <button
            v-else
            class="btn btn-brand kt-spinner kt-spinner--right 
                      kt-spinner--sm kt-spinner--light btn-elevate float-right"
            disabled
          >
            Creating...
          </button>
        </div>
        <!--end: Datatable -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from '../../axios'
import vSelect from 'vue-select'
// import { Datetime } from 'vue-datetime'
export default {
  name: 'antenatalpage',
  components: {
    vSelect
    // datetime: Datetime
  },
  data() {
    return {
      patient: '',
      ancId: '',
      antenatal: '',
      //   Antenatal
      input: {
        occupation: '',
        gravida: '',
        parity: '',
        lmp: '',
        edd: '',
        ecc: '',
        fetalage: '',
        medicalhistory: '',
        surgicalhistory: '',
        bloodtransfusion: '',
        familyhistory: [],
        year: '',
        deliveryplace: '',
        maturity: '',
        duration: '',
        delivery: '',
        weight: '',
        sex: '',
        fate: '',
        puerperium: ''
      },
      loading: false,
      antenatalpageUrl: '/antenatal/patient/',
      createantenatalUrl: '/antenatal/'
    }
  },
  mounted() {
    this.getPage()
  },
  methods: {
    handleError(error) {
      this.$iziToast.error({
        title: 'Error!',
        message: error.response.data
      })
    },
    getPage() {
      axios
        .get(this.antenatalpageUrl + this.$route.params.id)
        .then(response => {
          this.patient = response.data.data.patient
          this.ancId = response.data.data.ancId
        })
        .catch(error => {
          this.handleError(error)
        })
    },
    createAntenatal() {
      this.loading = true
      axios
        .post(this.createantenatalUrl + this.$route.params.id, this.input)
        .then(response => {
          this.loading = false
          this.antenatal = response.data.data
          this.input = ''
          this.$router.push({ path: `/antenatal/${this.antenatal._id}` })

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
    isValidDate(dateStr) {
      // Checks for the following valid date formats:
      // yyyy/mm/dd
      var datePat = /^\d{4}-\d{2}-\d{2}$/ // requires 4 digit year

      var matchArray = dateStr.match(datePat) // is the format ok?
      if (matchArray == null) {
        this.$iziToast.error({
          title: 'Error!',
          message: 'Date is not in a valid format.'
        })
        return false
      }
      var month = matchArray[1] // parse date into variables
      var day = matchArray[3]
      var year = matchArray[4]
      if (month < 1 || month > 12) {
        // check month range
        this.$iziToast.error({
          title: 'Error!',
          message: 'Month must be between 1 and 12.'
        })

        return false
      }
      if (day < 1 || day > 31) {
        this.$iziToast.error({
          title: 'Error!',
          message: 'Day must be between 1 and 31.'
        })
        return false
      }
      if (
        (month == 4 || month == 6 || month == 9 || month == 11) &&
        day == 31
      ) {
        this.$iziToast.error({
          title: 'Error!',
          message: 'Month ' + month + " doesn't have 31 days!"
        })
        return false
      }
      if (month == 2) {
        // check for february 29th
        var isleap = year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)
        if (day > 29 || (day == 29 && !isleap)) {
          this.$iziToast.error({
            title: 'Error!',
            message: 'February ' + year + " doesn't have " + day + ' days!'
          })
          return false
        }
      }
      return true
    },
    dispDate(dateObj) {
      var month = dateObj.getMonth() + 1
      month = month < 10 ? '0' + month : month

      var day = dateObj.getDate()
      day = day < 10 ? '0' + day : day

      var year = dateObj.getYear()
      if (year < 2000) year += 1900

      return month + '/' + day + '/' + year
    },
    pregnancyCalc() {
      let lmp = this.input.lmp
      var ecc = ''
      var luteala = ''
      var menstrual = new Date() // creates new date objects
      var ovulation = new Date()
      var duedate = new Date()
      var today = new Date()
      var cycle = 0
      var luteal = 0 // sets variables to invalid state ==> 0

      if (this.isValidDate(lmp)) {
        // Validates menstual date
        var menstrualinput = new Date(lmp)
        menstrual.setTime(menstrualinput.getTime())
      } else return false // otherwise exits

      cycle = ecc == '' ? 28 : ecc // defaults to 28
      // // validates cycle range, from 22 to 45
      if (ecc != '' && (ecc < 22 || ecc > 45)) {
        alert(
          'Your cycle length is either too short or too long for \n' +
            'calculations to be very accurate!  We will still try to \n' +
            'complete the calculation with the figure you entered. '
        )
      }

      luteal = luteala == '' ? 14 : luteala // defaults to 14
      // // validates luteal range, from 9 to 16
      if (luteala != '' && (luteala < 9 || luteala > 16)) {
        alert(
          'Your luteal phase length is either too short or too long for \n' +
            'calculations to be very accurate!  We will still try to complete \n' +
            'the calculation with the figure you entered. '
        )
      }

      // sets ovulation date to menstrual date + cycle days - luteal days
      // the '*86400000' is necessary because date objects track time
      // in milliseconds;  86400000 milliseconds equals one day
      ovulation.setTime(
        menstrual.getTime() + cycle * 86400000 - luteal * 86400000
      )
      this.input.ecc = this.dispDate(ovulation)
      // pregform.conception.value = dispDate(ovulation);

      // sets due date to ovulation date plus 266 days
      duedate.setTime(ovulation.getTime() + 266 * 86400000)
      this.input.edd = this.dispDate(duedate)
      // pregform.duedate.value = dispDate(duedate);

      // sets fetal age to 14 + 266 (pregnancy time) - time left
      var fetalage = 14 + 266 - (duedate - today) / 86400000
      var weeks = parseInt(fetalage / 7) // sets weeks to whole number of weeks
      var days = Math.floor(fetalage % 7) // sets days to the whole number remainder

      // fetal age message, automatically includes 's' on week and day if necessary
      fetalage =
        weeks + ' week' + (weeks > 1 ? 's' : '') + ', ' + days + ' days'

      this.input.fetalage = fetalage
      // pregform.fetalage.value = fetalage;

      return false
    }
  }
}
</script>

<style>
.form-control[readonly] {
  background: rgb(224, 224, 224) !important;
}
</style>
