<template>
  <div class="kt-content  kt-grid__item kt-grid__item--fluid" id="kt_content">
    <!--Begin::Section-->
    <div class="row">
      <div class="col-xl-6">
        <!--begin:: Widgets/Tasks -->
        <div class="kt-portlet kt-portlet--tabs kt-portlet--height-fluid">
          <div class="kt-portlet__head">
            <div class="kt-portlet__head-label">
              <h3 class="kt-portlet__head-title">
                Present Pregnancy
              </h3>
            </div>
          </div>
          <div class="kt-portlet__body">
            <div class="form-group row">
              <label class="col-2 col-form-label">Weight (kg)</label>
              <div class="col-10">
                <input
                  class="form-control"
                  type="number"
                  v-model="input.weight"
                  placeholder="Weight"
                  @keyup="calcBmi"
                />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-2 col-form-label">Height (cm)</label>
              <div class="col-10">
                <input
                  class="form-control"
                  type="number"
                  v-model="input.height"
                  placeholder="Height"
                  @keyup="calcBmi"
                />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-2 col-form-label">BMI (kg/h^2)</label>
              <div class="col-10">
                <input
                  class="form-control"
                  type="number"
                  v-model="input.bmi"
                  readonly
                />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-2 col-form-label">Urinalysis</label>
              <div class="col-5">
                <select v-model="input.urinalysisProtein" class="form-control">
                  <option disabled>Select</option>
                  <option value="Nil">Nil</option>
                  <option value="+ve">+ve</option>
                  <option value="-ve">-ve</option>
                  <option value="Trait">Trait</option>
                </select>
              </div>
              <div class="col-5">
                <select v-model="input.urinalysisGlucose" class="form-control">
                  <option disabled>Select</option>
                  <option value="Protein">Protein</option>
                  <option value="Glucose">Glucose</option>
                </select>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-2 col-form-label">BP</label>
              <div class="col-10">
                <input
                  class="form-control"
                  type="text"
                  v-model="input.bp"
                  placeholder="BP"
                />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-2 col-form-label">Pallor</label>
              <div class="col-10">
                <input
                  class="form-control"
                  type="text"
                  v-model="input.pallor"
                  placeholder="Pallor"
                />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-2 col-form-label">Maturity</label>
              <div class="col-10">
                <input
                  class="form-control"
                  type="text"
                  v-model="input.maturity"
                  placeholder="Maturity"
                />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-2 col-form-label">Foetal Height(cm)</label>
              <div class="col-10">
                <input
                  class="form-control"
                  type="text"
                  v-model="input.fundalheight"
                  placeholder="Fundal Height"
                />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-2 col-form-label">Presentation</label>
              <div class="col-10">
                <input
                  class="form-control"
                  type="text"
                  v-model="input.presentation"
                  placeholder="Presentation"
                />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-2 col-form-label"
                >Fundal Heart Rate(b/min)</label
              >
              <div class="col-10">
                <input
                  class="form-control"
                  type="text"
                  v-model="input.fetalheartrate"
                  placeholder="Fundal Height"
                />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-2 col-form-label">Oedema</label>
              <div class="col-10">
                <input
                  class="form-control"
                  type="text"
                  v-model="input.oedema"
                  placeholder="Oedema"
                />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-2 col-form-label">Comments</label>
              <div class="col-10">
                <input
                  class="form-control"
                  type="text"
                  v-model="input.comments"
                  placeholder="Comments"
                />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-2 col-form-label">TCA Date</label>
              <div class="col-10">
                <datetime
                  input-class="form-control"
                  v-model="input.tcadate"
                  type="date"
                ></datetime>
              </div>
            </div>
            <div class="form-group">
              <button
                v-if="!loading"
                @click="createPresentPregnancy"
                class="btn btn-brand btn-elevate float-right"
              >
                Save
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
        </div>

        <!--end:: Widgets/Tasks -->
      </div>
      <div class="col-xl-6">
        <!--begin:: Widgets/New Users-->
        <div class="kt-portlet kt-portlet--tabs kt-portlet--height-fluid">
          <div class="kt-portlet__head">
            <div class="kt-portlet__head-label">
              <h3 class="kt-portlet__head-title">
                Clinical Notes
              </h3>
            </div>
          </div>
          <div class="kt-portlet__body">
            <div class="form-group row">
              <label class="col-2 col-form-label">Clinical Notes</label>
              <div class="col-10">
                <textarea
                  v-model="clinicalnotes"
                  class="form-control"
                  cols="20"
                  rows="10"
                ></textarea>
              </div>
            </div>
            <div class="form-group">
              <button
                v-if="!clinicalnoteloading"
                class="btn btn-brand btn-elevate float-right"
                @click="createClinicalNotes"
              >
                Save
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
        </div>

        <!--end:: Widgets/New Users-->
      </div>
    </div>
    <!--End::Section-->
    <div class="row">
      <div class="col-xl-6">
        <!--begin::Portlet-->
        <div class="kt-portlet kt-portlet--tabs kt-portlet--height-fluid">
          <div class="kt-portlet__head">
            <div class="kt-portlet__head-label">
              <h3 class="kt-portlet__head-title kt-font-brand">
                DRUGS PRESCRIPTION
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
                        <button
                          class="btn btn-brand"
                          data-toggle="modal"
                          data-target="#kt_modal_3"
                        >
                          Add Medication
                        </button>
                        <span
                          class="kt-input-icon__icon kt-input-icon__icon--left"
                        >
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
                    <th>Starting</th>
                    <th>Dose</th>
                    <th>Strength</th>
                    <th>Duration</th>
                    <th>Quantity</th>
                    <th>Price (₦)</th>
                    <th>Nurse</th>
                    <th>Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-if="ancDrugs.length == 0">
                    <td colspan="9" align="center">No Prescribed Drugs</td>
                  </tr>
                  <tr v-for="(drug, index) in ancDrugs" :key="drug._id">
                    <td>
                      {{ index + 1 }}
                    </td>
                    <td>{{ drug.route }}</td>
                    <td>
                      {{ drug.drug.name }}
                    </td>
                    <td>
                      {{ drug.startingdate | moment('DD/MM/YYYY') }}
                    </td>
                    <td>
                      {{ drug.unitdose }}
                    </td>

                    <td>{{ drug.strength }}</td>
                    <td>{{ drug.duration }}</td>
                    <td>{{ drug.quantity }}</td>
                    <td>{{ drug.totalprice }}</td>
                    <td>
                      <a v-if="drug.nurse" href="#">
                        {{ drug.nurse.firstname }}
                        {{ drug.nurse.lastname }}
                      </a>
                    </td>
                    <td>
                      {{ drug.datePrescribed | moment('DD/MM/YYYY, h:mm a') }}
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
        </div>
        <!--end::Portlet-->
      </div>
      <div class="col-xl-6">
        <!--begin::Portlet-->
        <div class="kt-portlet  kt-portlet--tabs kt-portlet--height-fluid">
          <div class="kt-portlet__head">
            <div class="kt-portlet__head-label">
              <span class="kt-portlet__head-icon">
                <i class="flaticon-technology kt-font-success"></i>
              </span>
              <h3 class="kt-portlet__head-title kt-font-brand">
                LAB TESTS
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
                        <button
                          class="btn btn-brand"
                          data-toggle="modal"
                          data-target="#kt_modal_2"
                        >
                          Select Test
                        </button>
                        <span
                          class="kt-input-icon__icon kt-input-icon__icon--left"
                        >
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

          <!--end: Search Form -->
          <div class="kt-portlet__body">
            <!--begin: Datatable -->
            <div class="dt-responsive table-responsive">
              <table class="table table-striped table-bordered nowrap">
                <thead>
                  <tr>
                    <th>S/N</th>
                    <th>Test</th>
                    <th>Laboratory</th>
                    <th>Price (₦)</th>
                    <th>Date Created</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-if="ancTests.length == 0">
                    <td colspan="9" align="center">No Requested Tests</td>
                  </tr>
                  <tr v-for="(test, index) in ancTests" :key="test._id">
                    <td>
                      {{ index + 1 }}
                    </td>
                    <td>
                      {{ test.name }}
                    </td>
                    <td>
                      {{ test.laboratory }}
                    </td>
                    <td>
                      {{ test.price }}
                    </td>
                    <td>
                      {{
                        test.dateRequested | moment('ddd, MMM Do YYYY, h:mm a')
                      }}
                    </td>
                    <td>
                      <button
                        v-if="!deletetestloading"
                        @click="deleteLabTest(index)"
                        class="btn btn-danger btn-elevate"
                      >
                        Remove
                      </button>
                      <button
                        v-if="deletetestloading && index == currentTestIndex"
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
        </div>

        <!--end::Portlet-->
      </div>
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
                  v-model="drug.genericId"
                  label="name"
                  :reduce="drugs => drugs._id"
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
                  v-model="drug.price"
                  readonly
                />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-2 col-form-label">Quantity Remaining</label>
              <div class="col-10">
                <input
                  class="form-control readonly"
                  type="text"
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
                  v-model="drug.startingdate"
                ></datetime>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-2 col-form-label">Route</label>
              <div class="col-10">
                <select v-model="drug.route" class="form-control">
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
                  v-model="drug.duration"
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
                  v-model="drug.strength"
                  @change="calcDosage"
                />
              </div>
              <div class="col-3">
                <select v-model="drug.unitdose" class="form-control" required>
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
                  v-model="drug.quantity"
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
                  v-model="drug.quantitytodispense"
                  @keyup="calctotalprice"
                />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-2 col-form-label">Total Price</label>
              <div class="col-10">
                <input
                  class="form-control readonly"
                  type="text"
                  v-model="drug.totalprice"
                  readonly
                />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-2 col-form-label">Notes</label>
              <div class="col-10">
                <input class="form-control" type="text" v-model="drug.notes" />
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
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Select Test</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="form-group row">
              <label class="col-2 col-form-label">Select Lab</label>
              <div class="col-10">
                <select v-model="labId" class="form-control" @change="getTests">
                  <option selected disabled>Select</option>
                  <option v-for="lab in labs" :key="lab._id" :value="lab._id">{{
                    lab.name
                  }}</option>
                </select>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-2 col-form-label">Select Tests</label>
              <div class="col-10">
                <select
                  v-model="test.testId"
                  class="form-control"
                  required
                  @change="getTestprice"
                >
                  <option selected disabled>Select</option>
                  <option
                    v-for="test in tests"
                    :key="test._id"
                    :value="test._id"
                    >{{ test.name }}</option
                  >
                </select>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-2 col-form-label">Price</label>
              <div class="col-10">
                <input
                  class="form-control"
                  type="text"
                  v-model="price"
                  readonly
                />
              </div>
            </div>
            <div class="modal-footer">
              <button
                v-if="!testloading"
                @click="createLabTest"
                type="button"
                class="btn btn-brand"
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
</template>

<script>
import axios from '../../axios'
import vSelect from 'vue-select'
import { Datetime } from 'vue-datetime'
export default {
  name: 'antenatalpage',
  components: {
    vSelect,
    datetime: Datetime
  },
  data() {
    return {
      tests: [],
      age: '',
      drugs: [],
      ancDrugs: [],
      ancTests: [],
      consultation: '',
      triage: '',
      patient: '',
      clinicalnotes: '',
      currentTestIndex: '',
      //   anc
      anc: '',
      input: {
        weight: '',
        height: '',
        bmi: '',
        urinalysisProtein: '',
        urinalysisGlucose: '',
        bp: '',
        pallor: '',
        maturity: '',
        fundalheight: '',
        presentation: '',
        fetalheartrate: '',
        oedema: '',
        comments: '',
        tcadate: ''
      },

      //   Drugs
      drug: {
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

      //   Lab tests
      test: {
        testId: ''
      },
      price: '',
      labId: '',
      labs: [],

      loading: false,
      clinicalnoteloading: false,
      deleteimagingloading: false,
      testloading: false,
      deletetestloading: false,
      drugloading: false,
      deletedrugloading: false,
      antenatalpageurl: '/antenatal/test/drugs/',

      presentpregnancyUrl: '/antenatal/present/pregnancy/',
      clinicalnoteUrl: '/antenatal/clinical/note/',
      createlabtestUrl: '/antenatal/test/',
      createdrugUrl: '/antenatal/drug/',
      deletelabtestUrl: '/antenatal/delete/test/',
      deletedrugUrl: '/antenatal/delete/drug/',
      getDrugsTestsUrl: '/antenatal/consultation/drugs/',
      getInvestigationsUrl: '/ajax/investigations',
      getInvestigationspriceUrl: '/ajax/investigation/price',
      getTestsUrl: '/ajax/tests',
      gettestspriceUrl: '/ajax/test/price',
      getDrugsPriceUrl: '/ajax/drugs/price'
    }
  },
  mounted() {
    this.getPage()
    this.getDrugsTests()
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
        .get(this.antenatalpageurl + this.$route.params.id)
        .then(response => {
          this.patient = response.data.data.patient
          if (response.data.data.drugs) {
            this.drugs = response.data.data.drugs
          }
          if (response.data.data.labs) {
            this.labs = response.data.data.labs
          }
          if (response.data.data.anc.presentpregnancy[0]) {
            this.input = response.data.data.anc.presentpregnancy[0]
          }
          if (response.data.data.anc.clinicalnotes[0].clinicalnotes) {
            this.clinicalnotes =
              response.data.data.anc.clinicalnotes[0].clinicalnotes
          }
        })
        .catch(error => {
          this.handleError(error)
        })
    },
    getDrugsTests() {
      axios
        .get(this.antenatalpageurl + this.$route.params.id)
        .then(response => {
          this.ancDrugs = response.data.data.anc.drugs
          this.ancTests = response.data.data.anc.tests
        })
        .catch(error => {
          this.handleError(error)
        })
    },
    createPresentPregnancy() {
      this.loading = true
      axios
        .put(this.presentpregnancyUrl + this.$route.params.id, this.input)
        .then(response => {
          this.input = response.data.data.anc.presentpregnancy[0]
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
    },
    createClinicalNotes() {
      this.clinicalnoteloading = true
      const data = {
        clinicalnotes: this.clinicalnotes
      }
      axios
        .put(this.clinicalnoteUrl + this.$route.params.id, data)
        .then(response => {
          this.clinicalnotes = response.data.data.anc.clinicalnotes[0]
          this.clinicalnoteloading = false
          console.log(this.input)
          this.$iziToast.success({
            title: 'Success!',
            message: response.data.message
          })
        })
        .catch(error => {
          this.clinicalnoteloading = false
          this.handleError(error)
        })
    },
    calcDosage() {
      this.drug.quantity = this.drug.duration * this.drug.strength * this.time
    },

    calctotalprice() {
      this.drug.totalprice = this.drug.price * this.drug.quantitytodispense
    },
    calcBmi() {
      this.input.bmi = this.input.weight / this.input.height ** 2
    },

    // Lab Tests
    getTests() {
      const data = {
        labId: this.labId
      }
      axios
        .post(this.getTestsUrl, data)
        .then(response => {
          this.tests = response.data.data
        })
        .catch(error => {
          this.handleError(error)
        })
    },
    getTestprice() {
      const data = {
        testId: this.test.testId
      }
      axios
        .post(this.gettestspriceUrl, data)
        .then(response => {
          this.price = response.data.data.price
        })
        .catch(error => {
          this.handleError(error)
        })
    },
    createLabTest() {
      this.testloading = true
      axios
        .put(this.createlabtestUrl + this.$route.params.id, this.test)
        .then(response => {
          this.testloading = false
          this.test = ''
          this.labId = ''
          this.price = ''
          this.ancTests = response.data.data.tests
          this.$iziToast.success({
            title: 'Success!',
            message: response.data.message
          })
        })
        .catch(error => {
          this.testloading = false
          this.handleError(error)
        })
    },
    deleteLabTest(index) {
      this.deletetestloading = true
      this.currentTestIndex = index
      const data = {
        index: index
      }
      axios
        .post(this.deletelabtestUrl + this.$route.params.id, data)
        .then(response => {
          this.deletetestloading = false
          this.ancTests = response.data.data.tests
          this.$iziToast.success({
            title: 'Success!',
            message: response.data.message
          })
        })
        .catch(error => {
          this.deletetestloading = false
          this.handleError(error)
        })
    },

    // Drugs
    getPriceAndQuantity() {
      const data = {
        genericId: this.drug.genericId
      }
      axios
        .post(this.getDrugsPriceUrl, data)
        .then(response => {
          this.drug.price = response.data.data.price
          if (response.data.data.rquantity === null) {
            this.quantityremaining = response.data.data.quantity
          } else {
            this.quantityremaining = response.data.data.rquantity
          }
        })
        .catch(error => {
          this.handleError(error)
        })
    },
    createDrug() {
      this.drugloading = true
      axios
        .put(this.createdrugUrl + this.$route.params.id, this.drug)
        .then(response => {
          this.drugloading = false
          this.ancDrugs = response.data.data.drugs
          this.drug = ''
          this.quantityremaining = ''
          this.getPage()
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
          this.ancDrugs = response.data.data.drugs
          this.$iziToast.success({
            title: 'Success!',
            message: response.data.message
          })
        })
        .catch(error => {
          this.deletedrugloading = false
          this.handleError(error)
        })
    }
  }
}
</script>

<style>
.form-control[readonly] {
  background: rgb(224, 224, 224) !important;
}
</style>
