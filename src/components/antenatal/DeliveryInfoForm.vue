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
            Create Patient Delivery Information
            <small>Create a new patient delivery information</small>
          </h3>
        </div>
      </div>
      <div class="kt-portlet__body">
        <!--begin: Datatable -->
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Mode of Delivery</label>
              <select
                v-model="input.modeofdelivery"
                class="form-control"
                required
              >
                <option>Select</option>
                <option>CS</option>
                <option>SVD</option>
              </select>
              <span class="form-text text-muted"
                >Please select mode of delivery.</span
              >
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Date of Delivery</label>
              <datetime
                type="date"
                v-model="input.dateofdelivery"
                input-class="form-control"
                required
              ></datetime>
              <span class="form-text text-muted"
                >Please select date of delivery.</span
              >
            </div>
          </div>
        </div>
        <div v-if="input.modeofdelivery == 'CS'" class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Time of Surgery</label>
              <datetime
                type="time"
                v-model="input.timeofsurgery"
                input-class="form-control"
              ></datetime>
              <span class="form-text text-muted"
                >Please select time of surgery.</span
              >
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Time Patient Left Theater</label>
              <datetime
                type="time"
                v-model="input.timepatientleft"
                input-class="form-control"
              ></datetime>
              <span class="form-text text-muted"
                >Please select time patient left theater.</span
              >
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Time of Delivery</label>
              <datetime
                type="time"
                v-model="input.timeofdelivery"
                input-class="form-control"
                required
              ></datetime>
              <span class="form-text text-muted"
                >Please select time of delivery.</span
              >
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Quantity Blood Loss</label>
              <input
                type="text"
                class="form-control"
                v-model="input.bloodloss"
                required
              />
              <span class="form-text text-muted"
                >Please enter patient height.</span
              >
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Duration</label>
              <select v-model="input.duration" class="form-control" required>
                <option>Select</option>
                <option>Less than 6 Hours</option>
                <option>More than 6 Hours</option>
              </select>
              <span class="form-text text-muted">Please selct duration.</span>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Condition of Mother</label>
              <input
                type="text"
                class="form-control"
                v-model="input.conditionofmother"
                placeholder="Condition of Mother"
                required
              />
              <span class="form-text text-muted"
                >Please enter condition of mother.</span
              >
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Apgar Score at 1min</label>
              <input
                type="text"
                class="form-control"
                v-model="input.onemin"
                placeholder="Apgar Score at 1min"
                required
              />
              <span class="form-text text-muted"
                >Please enter Apgar Score at 1min.</span
              >
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Apgar Score at 5min</label>
              <input
                type="text"
                class="form-control"
                v-model="input.fivemin"
                placeholder="Apgar Score at 5min"
                required
              />
              <span class="form-text text-muted"
                >Please enter Apgar Score at 5min.</span
              >
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Apgar Score at 10min</label>
              <input
                type="text"
                class="form-control"
                v-model="input.tenmin"
                placeholder="Apgar Score at 10min"
                required
              />
              <span class="form-text text-muted"
                >Please enter Apgar Score at 10min.</span
              >
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Birth Weight</label>
              <input
                type="number"
                class="form-control"
                v-model="input.birthweight"
                placeholder="Birth Weight"
                required
              />
              <span class="form-text text-muted"
                >Please select birth weight.</span
              >
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Sex</label>
              <select v-model="input.sex" class="form-control" required>
                <option disabled>Select</option>
                <option>Male</option>
                <option>Female</option>
              </select>
              <span class="form-text text-muted">Please select sex.</span>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Condition of Baby</label>
              <input
                type="text"
                class="form-control"
                v-model="input.conditionofbaby"
                placeholder="Condition of Baby"
                required
              />
              <span class="form-text text-muted"
                >Please enter condition of baby.</span
              >
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Vitamin A: 200,000 IU to Mother</label>
              <input
                type="text"
                class="form-control"
                v-model="input.vitaminAmother"
                placeholder="Vitamin A: 200,000 IU to Mother"
                required
              />
              <span class="form-text text-muted"
                >Please enter Vitamin A: 200,000 IU to Mother.</span
              >
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Nevirapine to Baby</label>
              <select v-model="input.vitaminAbaby" class="form-control">
                <option disabled>Select</option>
                <option>Yes</option>
                <option>No</option>
              </select>
              <span class="form-text text-muted"
                >Please enter Nevirapine to Baby.</span
              >
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Baby Immunization Date</label>
              <datetime
                type="date"
                input-class="form-control"
                v-model="input.immunizationdate"
              ></datetime>
              <span class="form-text text-muted"
                >Please select baby immunization date.</span
              >
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>BCG</label>
              <input
                type="text"
                class="form-control"
                v-model="input.bcg"
                placeholder="BCG"
                required
              />
              <span class="form-text text-muted">Please enter BCG.</span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>OPVO</label>
              <input
                type="text"
                class="form-control"
                v-model="input.opvo"
                placeholder="OPVO"
                required
              />
              <span class="form-text text-muted">Please enter OPVO.</span>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>HBV</label>
              <input
                type="text"
                class="form-control"
                v-model="input.hbv"
                placeholder="HBV"
                required
              />
              <span class="form-text text-muted">Please enter HBV.</span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Birth Notified Date</label>
              <datetime
                type="date"
                input-class="form-control"
                v-model="input.birthnotifieddate"
                required
              ></datetime>
              <span class="form-text text-muted"
                >Please select birth notified date.</span
              >
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Nature of Liquor</label>
              <select v-model="input.liquor" class="form-control" required>
                <option disabled>Select</option>
                <option>Meconium stained</option>
                <option>Clear</option>
              </select>
              <span class="form-text text-muted"
                >Please select nature of liquor.</span
              >
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Comments</label>
              <textarea
                v-model="input.comment"
                class="form-control"
                cols="30"
                rows="10"
                placeholder="Comments"
              ></textarea>
              <span class="form-text text-muted">Please enter comments.</span>
            </div>
          </div>
        </div>

        <div>
          <button
            v-if="!loading"
            @click="createDelivery"
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
        <!--end: Datatable -->
      </div>
    </div>
  </div>
  <!-- end:: Content -->
</template>

<script>
import axios from '../../axios'
import { Datetime } from 'vue-datetime'
export default {
  name: 'deliveryinfoForm',
  props: {
    title: {
      type: String
    }
  },
  components: {
    datetime: Datetime
  },
  data() {
    return {
      input: {
        hbv: '',
        modeofdelivery: '',
        dateofdelivery: '',
        timeofsurgery: '',
        timepatientleft: '',
        timeofdelivery: '',
        duration: '',
        conditionofmother: '',
        onemin: '',
        bloodloss: '',
        liquor: '',
        comment: '',
        tenmin: '',
        fivemin: '',
        birthweight: '',
        sex: '',
        conditionofbaby: '',
        vitaminAmother: '',
        vitaminAbaby: '',
        immunizationdate: '',
        bcg: '',
        opvo: '',
        birthnotifieddate: ''
      },

      deliveryinfoUrl: '/antenatal/delivery/',
      loading: false
    }
  },
  methods: {
    handleError(error) {
      this.$iziToast.error({
        title: 'Error!',
        message: error.response.data
      })
    },
    createDelivery() {
      this.loading = true
      axios
        .put(this.deliveryinfoUrl + this.$route.params.id, this.input)
        .then(response => {
          this.input = ''
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
    }
  }
}
</script>

<style></style>
