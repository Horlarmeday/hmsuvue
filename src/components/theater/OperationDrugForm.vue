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
                    <button
                      class="btn btn-brand"
                      data-toggle="modal"
                      data-target="#kt_modal_3"
                    >
                      Add Medication
                    </button>
                    <span class="kt-input-icon__icon kt-input-icon__icon--left">
                      <span><i class="la la-search"></i></span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--end: Search Form -->
      </div>
      <div class="kt-portlet__body">
        <!--begin: Datatable -->
        <div class="dt-responsive table-responsive">
          <table class="table table-striped table-bordered nowrap">
            <thead>
              <tr>
                <th>S/N</th>
                <th>Route</th>
                <th>Drug</th>
                <th>Starting Date</th>
                <th>Unit Dose</th>
                <th>Strength</th>
                <th>Duration</th>
                <th>Quantity</th>
                <th>Quantity to Dispense</th>
                <th>Price (₦)</th>
                <th>PrescribedBy</th>
                <th>Notes</th>
                <th>Date Prescribed</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="theaterDrugs.length == 0">
                <td colspan="15" align="center">No Prescribed Drugs</td>
              </tr>
              <tr v-for="(drug, index) in theaterDrugs" :key="drug._id">
                <td>
                  {{ index + 1 }}
                </td>
                <td>{{ drug.route }}</td>
                <td>
                  {{ drug.drug.name }}
                </td>
                <td>
                  {{ drug.startingdate | moment('ddd, MMM Do YYYY') }}
                </td>
                <td>
                  {{ drug.unitdose }}
                </td>

                <td>{{ drug.strength }}</td>
                <td>{{ drug.duration }}</td>
                <td>{{ drug.quantity }}</td>
                <td>{{ drug.quantitytodispense }}</td>
                <td>{{ drug.totalprice }}</td>
                <td>
                  <a v-if="drug.examiner" href="#">
                    {{ drug.examiner.firstname }}
                    {{ drug.examiner.lastname }}
                  </a>
                </td>
                <td>{{ drug.notes }}</td>
                <td>
                  {{ drug.datePrescribed | moment('ddd, MMM Do YYYY, h:mm a') }}
                </td>
                <td>
                  <button
                    v-if="!deletedrugloading"
                    @click="deletedrug(index)"
                    class="btn btn-danger btn-elevate"
                  >
                    Remove
                  </button>
                  <button
                    v-else
                    class="btn btn-brand kt-spinner kt-spinner--right 
                      kt-spinner--sm kt-spinner--light btn-elevate float-right"
                    disabled
                  >
                    Deleting...
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!--end: Datatable -->
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
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Choose Drug</h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="form-group row">
                <label class="col-2 col-form-label">Choose Drug</label>
                <div class="col-10">
                  <v-select
                    @input="getPriceAndQuantity"
                    v-model="input.genericId"
                    label="drug"
                    :reduce="drugs => drugs.name._id"
                    :options="drugs"
                  ></v-select>
                </div>
              </div>
              <div class="form-group row">
                <label class="col-2 col-form-label">Price</label>
                <div class="col-10">
                  <input
                    class="form-control readonly"
                    type="number"
                    v-model="input.price"
                    readonly
                  />
                </div>
              </div>
              <div class="form-group row">
                <label class="col-2 col-form-label">Quantity Remaining</label>
                <div class="col-10">
                  <input
                    class="form-control readonly"
                    type="number"
                    v-model="quantityremaining"
                    readonly
                  />
                </div>
              </div>
              <div class="form-group row">
                <label class="col-2 col-form-label">Starting Date</label>
                <div class="col-10">
                  <datetime
                    type="date"
                    input-class="form-control"
                    v-model="input.startingdate"
                  ></datetime>
                </div>
              </div>
              <div class="form-group row">
                <label class="col-2 col-form-label">Route</label>
                <div class="col-10">
                  <select v-model="input.route" class="form-control">
                    <option selected disabled>Select</option>
                    <option>im</option>
                    <option value="IV">IV</option>
                    <option value="Ear">Ear</option>
                    <option value="SC">SC</option>
                    <option value="PO">PO</option>
                    <option value="Sublingual">Sublingual</option>
                    <option value="Rectal">Rectal</option>
                    <option value="OCC">OCC</option>
                    <option value="GUTT">GUTT</option>
                  </select>
                </div>
              </div>
              <div class="form-group row">
                <label class="col-2 col-form-label">Duration</label>
                <div class="col-10">
                  <input
                    class="form-control"
                    type="number"
                    v-model="input.duration"
                    @change="calcDosage"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label class="col-2 col-form-label">Strength</label>
                <div class="col-3">
                  <input
                    class="form-control"
                    type="number"
                    v-model="input.strength"
                    @change="calcDosage"
                  />
                </div>
                <div class="col-3">
                  <select
                    v-model="input.unitdose"
                    class="form-control"
                    required
                  >
                    <option selected disabled>Select</option>
                    <option>Tablet</option>
                    <option>Capsule</option>
                    <option>Solution</option>
                    <option>Suspension</option>
                    <option>tsp</option>
                    <option>units</option>
                    <option>Milligrams</option>
                    <option>Grams</option>
                    <option>Ml</option>
                    <option>units</option>
                    <option>cream</option>
                    <option>ointment</option>
                    <option>gtts(drops)</option>
                  </select>
                </div>
                <div class="mt-6">in</div>
                <div class="col-3">
                  <select
                    v-model="time"
                    class="form-control"
                    required
                    @change="calcDosage"
                  >
                    <option selected disabled>Select</option>
                    <option>Select</option>
                    <option value="0">Start</option>
                    <option value="1">OD</option>
                    <option value="2">BD</option>
                    <option value="3">TDS</option>
                    <option value="4">QDS</option>
                    <option value="6">Q4H</option>
                  </select>
                </div>
              </div>
              <div class="form-group row">
                <label class="col-2 col-form-label">Quantity</label>
                <div class="col-10">
                  <input
                    class="form-control readonly"
                    type="text"
                    v-model="input.quantity"
                    readonly
                  />
                </div>
              </div>
              <div class="form-group row">
                <label class="col-2 col-form-label">Quantity to Dispense</label>
                <div class="col-10">
                  <input
                    class="form-control"
                    type="number"
                    v-model="input.quantitytodispense"
                    @keyup="calctotalprice"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label class="col-2 col-form-label">Total Price</label>
                <div class="col-10">
                  <input
                    class="form-control readonly"
                    type="number"
                    v-model="input.totalprice"
                    readonly
                  />
                </div>
              </div>
              <div class="form-group row">
                <label class="col-2 col-form-label">Notes</label>
                <div class="col-10">
                  <input
                    class="form-control"
                    type="text"
                    v-model="input.notes"
                  />
                </div>
              </div>
              <div class="modal-footer">
                <button
                  v-if="!drugloading"
                  type="button"
                  class="btn btn-brand"
                  @click="createDrug"
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
  <!-- end:: Content -->
</template>

<script>
import axios from '../../axios'
import vSelect from 'vue-select'
import { Datetime } from 'vue-datetime'
export default {
  name: 'operationdrug',
  props: {
    title: {
      type: String
    }
  },
  components: {
    vSelect,
    datetime: Datetime
  },
  data() {
    return {
      drugs: [],
      theaterDrugs: [],
      //   Drugs
      input: {
        genericId: '',
        startingdate: '',
        quantity: '',
        quantitytodispense: '',
        route: '',
        unitdose: '',
        strength: '',
        duration: '',
        notes: '',
        price: '',
        totalprice: ''
      },
      time: '',
      quantityremaining: '',
      loading: false,
      deletedrugloading: false,
      drugloading: false,
      landingpageurl: '/theater/one/',
      theaterdrugsurl: '/theater/drugs/',
      createdrugUrl: '/theater/operation/drug/',
      deletedrugurl: '/theater/removedrug/',
      getDrugsPriceUrl: '/ajax/theaterdrugs/price'
    }
  },
  mounted() {
    this.getPage()
    this.getDrugs()
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
        .get(this.landingpageurl + this.$route.params.id)
        .then(response => {
          this.theaterDrugs = response.data.data.drugs
        })
        .catch(error => {
          this.handleError(error)
        })
    },
    getDrugs() {
      axios
        .get(this.theaterdrugsurl)
        .then(response => {
          this.drugs = response.data.data
        })
        .catch(error => {
          this.handleError(error)
        })
    },
    createDrug() {
      this.drugloading = true
      axios
        .put(this.createdrugUrl + this.$route.params.id, this.input)
        .then(response => {
          this.drugloading = false
          this.theaterDrugs = response.data.data.drugs
          this.$iziToast.success({
            title: 'Success!',
            message: response.data.message
          })
        })
        .catch(error => {
          this.drugloading = false
          this.handleError(error)
        })
    },
    deletedrug(index) {
      this.deletedrugloading = true
      const data = {
        index: index
      }
      axios
        .post(this.deletedrugUrl + this.$route.params.id, data)
        .then(response => {
          this.deletedrugloading = false
          this.theaterDrugs = response.data.data.drugs
          this.$iziToast.success({
            title: 'Success!',
            message: response.data.message
          })
        })
        .catch(error => {
          this.deletedrugloading = false
          this.handleError(error)
        })
    },
    getPriceAndQuantity() {
      const data = {
        genericId: this.input.genericId
      }
      axios
        .post(this.getDrugsPriceUrl, data)
        .then(response => {
          this.input.price = response.data.data.price
          if (response.data.data.hasOwnProperty('balance')) {
            this.quantityremaining = response.data.data.balance
          } else {
            this.quantityremaining = response.data.data.quantity
          }
        })
        .catch(error => {
          this.handleError(error)
        })
    },
    calcDosage() {
      this.input.quantity =
        this.input.duration * this.input.strength * this.time
    },

    calctotalprice() {
      this.input.totalprice = this.input.price * this.input.quantitytodispense
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

<style>
.form-control[readonly] {
  background: rgb(224, 224, 224) !important;
}
</style>
