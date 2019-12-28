<template>
  <div class="kt-content  kt-grid__item kt-grid__item--fluid" id="kt_content">
    <div class="row">
      <div class="col-xl-4">
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
      <div class="col-xl-4">
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
                NURSE TRIAGE - PHYSICAL EXAMINATION
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
                  Weight
                </a>
                <span style="color: #000000" class="kt-widget4__number"
                  >{{ triage.weight }} (kg)</span
                >
              </div>
              <div style="padding-bottom: 0px" class="kt-widget4__item">
                <span class="kt-widget4__icon">
                  <i
                    class="flaticon-safe-shield-protection  kt-font-success"
                  ></i>
                </span>
                <a href="#" class="kt-widget4__title kt-widget4__title--light">
                  Height
                </a>
                <span style="color: #000" class="kt-widget4__number"
                  >{{ triage.height }} (cm)</span
                >
              </div>
              <div style="padding-bottom: 0px" class="kt-widget4__item">
                <span class="kt-widget4__icon">
                  <i class="flaticon2-line-chart kt-font-danger"></i>
                </span>
                <a href="#" class="kt-widget4__title kt-widget4__title--light">
                  BMI
                </a>
                <span style="color: #000" class="kt-widget4__number"
                  >{{ triage.bmi }} (kg/m^2)</span
                >
              </div>
              <div style="padding-bottom: 0px" class="kt-widget4__item">
                <span class="kt-widget4__icon">
                  <i class="flaticon2-pie-chart-1 kt-font-primary"></i>
                </span>
                <a href="#" class="kt-widget4__title kt-widget4__title--light">
                  MUAC
                </a>
                <span
                  v-if="triage.muac == 'Green'"
                  class="kt-badge kt-badge--success kt-badge--inline"
                  >Green</span
                >
                <span
                  v-if="triage.muac == 'Yellow'"
                  class="kt-badge kt-badge--warning kt-badge--inline"
                  >Yellow</span
                >
                <span
                  v-if="triage.muac == 'red'"
                  class="kt-badge kt-badge--danger kt-badge--inline"
                  >Red</span
                >
              </div>
              <div style="padding-bottom: 0px" class="kt-widget4__item">
                <span class="kt-widget4__icon">
                  <i class="flaticon2-rocket kt-font-brand"></i>
                </span>
                <a href="#" class="kt-widget4__title kt-widget4__title--light">
                  Created
                </a>
                <span style="color: #000" class="kt-widget4__number">{{
                  triage.createdAt | moment('ddd, MMM Do YYYY, h:mm a')
                }}</span>
              </div>

              <div class="kt-widget4__item"></div>
            </div>
          </div>
        </div>
        <!--end::Portlet-->
      </div>
      <div class="col-xl-4">
        <!--begin::Portlet-->
        <div
          style="border: 1px solid #0abb87;"
          class="kt-portlet kt-portlet--skin-solid kt-portlet--"
        >
          <div style="background: #0abb87;" class="kt-portlet__head">
            <div class="kt-portlet__head-label">
              <span class="kt-portlet__head-icon">
                <i class="flaticon-notes"></i>
              </span>
              <h3 class="kt-portlet__head-title">
                NURSE TRIAGE - VITAL SIGNS
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
                  RVS
                </a>
                <span style="color: #000000" class="kt-widget4__number"
                  >{{ triage.rvs }} (rvs)</span
                >
              </div>
              <div style="padding-bottom: 0px" class="kt-widget4__item">
                <span class="kt-widget4__icon">
                  <i
                    class="flaticon-safe-shield-protection  kt-font-success"
                  ></i>
                </span>
                <a href="#" class="kt-widget4__title kt-widget4__title--light">
                  Temperature
                </a>
                <span style="color: #000" class="kt-widget4__number"
                  >{{ triage.temperature }} (°C)</span
                >
              </div>
              <div style="padding-bottom: 0px" class="kt-widget4__item">
                <span class="kt-widget4__icon">
                  <i class="flaticon2-line-chart kt-font-danger"></i>
                </span>
                <a href="#" class="kt-widget4__title kt-widget4__title--light">
                  Respiration
                </a>
                <span style="color: #000" class="kt-widget4__number"
                  >{{ triage.respiration }} (C/min)</span
                >
              </div>
              <div
                v-if="age > 0"
                style="padding-bottom: 0px"
                class="kt-widget4__item"
              >
                <span class="kt-widget4__icon">
                  <i class="flaticon2-pie-chart-1 kt-font-primary"></i>
                </span>
                <a href="#" class="kt-widget4__title kt-widget4__title--light">
                  Pulse
                </a>
                <span style="color: #000" class="kt-widget4__number"
                  >{{ triage.pulse }} (B/min)</span
                >
              </div>
              <div v-else style="padding-bottom: 0px" class="kt-widget4__item">
                <span class="kt-widget4__icon">
                  <i class="flaticon2-pie-chart-1 kt-font-primary"></i>
                </span>
                <a href="#" class="kt-widget4__title kt-widget4__title--light">
                  Heart Rate
                </a>
                <span style="color: #000" class="kt-widget4__number"
                  >{{ triage.heartrate }} (B/min)</span
                >
              </div>
              <div style="padding-bottom: 0px" class="kt-widget4__item">
                <span class="kt-widget4__icon">
                  <i class="flaticon2-rocket kt-font-brand"></i>
                </span>
                <a href="#" class="kt-widget4__title kt-widget4__title--light">
                  Blood Pressure
                </a>
                <span style="color: #000" class="kt-widget4__number"
                  >{{ triage.diastolic }}/{{ triage.systolic }} (mmHg)</span
                >
              </div>

              <div class="kt-widget4__item"></div>
            </div>
          </div>
        </div>
        <!--end::Portlet-->
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6">
        <!--begin::Portlet-->
        <div class="kt-portlet">
          <div class="kt-portlet__head">
            <div class="kt-portlet__head-label">
              <span class="kt-portlet__head-icon">
                <i class="flaticon2-calendar-2"></i>
              </span>
              <h3 class="kt-portlet__head-title kt-font-brand">
                HISTORY
              </h3>
            </div>
          </div>
          <div class="kt-portlet__body">
            <div class="form-group form-group-last">
              <label for="exampleTextarea">Reason of Visit</label>
              <textarea
                v-model="consultation.reasonforvisit"
                class="form-control"
                rows="20"
                @change="updateConsultation"
              ></textarea>
            </div>
          </div>
        </div>

        <!--end::Portlet-->

        <!--begin::Portlet-->
        <div class="kt-portlet">
          <div class="kt-portlet__head">
            <div class="kt-portlet__head-label">
              <h3 class="kt-portlet__head-title kt-font-brand">
                DIAGNOSIS
              </h3>
            </div>
            <div class="kt-portlet__head-toolbar">
              <div class="kt-portlet__head-actions"></div>
            </div>
          </div>
          <div class="kt-portlet__body">
            <div class="form-group form-group-last">
              <label for="exampleTextarea">Diagnosis</label>
              <textarea
                v-model="consultation.diagnosis"
                class="form-control"
                rows="15"
                @change="updateConsultation"
              ></textarea>
            </div>
          </div>
        </div>

        <!--end::Portlet-->
      </div>
      <div class="col-lg-6">
        <!--begin::Portlet-->
        <div class="kt-portlet kt-portlet--responsive-mobile">
          <div class="kt-portlet__head">
            <div class="kt-portlet__head-label">
              <span class="kt-portlet__head-icon">
                <i class="flaticon-technology kt-font-success"></i>
              </span>
              <h3 class="kt-portlet__head-title kt-font-brand">
                PHYSICAL EXAMINATION
              </h3>
            </div>
          </div>
          <div class="kt-portlet__body">
            <div class="form-group row">
              <label class="col-2 col-form-label">General Examination</label>
              <div class="col-10">
                <textarea
                  v-model="consultation.observation"
                  class="form-control"
                  rows="3"
                  @change="updateConsultation"
                ></textarea>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-2 col-form-label">Chest</label>
              <div class="col-10">
                <input
                  class="form-control"
                  type="text"
                  v-model="consultation.chest"
                  @change="updateConsultation"
                />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-2 col-form-label">CVS</label>
              <div class="col-10">
                <input
                  class="form-control"
                  type="text"
                  v-model="consultation.cvs"
                  @change="updateConsultation"
                />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-2 col-form-label">Abdomen</label>
              <div class="col-10">
                <input
                  class="form-control"
                  type="text"
                  v-model="consultation.abdomen"
                  @change="updateConsultation"
                />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-2 col-form-label">MSS</label>
              <div class="col-10">
                <input
                  class="form-control"
                  type="text"
                  v-model="consultation.mss"
                  @change="updateConsultation"
                />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-2 col-form-label">Other</label>
              <div class="col-10">
                <input
                  class="form-control"
                  type="text"
                  v-model="consultation.other"
                  @change="updateConsultation"
                />
              </div>
            </div>
          </div>
        </div>

        <!--end::Portlet-->

        <!--begin::Portlet-->
        <div class="kt-portlet kt-portlet--responsive-tablet-and-mobile">
          <div class="kt-portlet__head">
            <div class="kt-portlet__head-label">
              <h3 class="kt-portlet__head-title kt-font-brand">
                TREATMENT
              </h3>
            </div>
          </div>
          <div class="kt-portlet__body">
            <div class="form-group form-group-last">
              <label for="exampleTextarea">Treatment</label>
              <textarea
                v-model="consultation.treatment"
                class="form-control"
                id="exampleTextarea"
                rows="10"
                @change="updateConsultation"
              ></textarea>
            </div>
          </div>
          <div class="kt-portlet__foot">
            <div class="kt-form__actions">
              <button
                v-if="!loading"
                type="button"
                @click="updateConsultation"
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
            </div>
          </div>
        </div>

        <!--end::Portlet-->
      </div>
    </div>
    <div class="row">
      <div class="col-xl-12">
        <!--begin::Portlet-->
        <div class="kt-portlet kt-portlet--responsive-mobile">
          <div class="kt-portlet__head">
            <div class="kt-portlet__head-label">
              <span class="kt-portlet__head-icon">
                <i class="flaticon-technology kt-font-success"></i>
              </span>
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
                  <tr v-if="consultationDrugs.length == 0">
                    <td colspan="9" align="center">No Prescribed Drugs</td>
                  </tr>
                  <tr
                    v-for="(drug, index) in consultationDrugs"
                    :key="drug._id"
                  >
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
                      {{
                        drug.datePrescribed | moment('ddd, MMM Do YYYY, h:mm a')
                      }}
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
                  <label class="col-2 col-form-label"
                    >Quantity to Dispense</label
                  >
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
                      type="text"
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

        <!--begin::Portlet-->
        <div class="kt-portlet kt-portlet--responsive-tablet-and-mobile">
          <div class="kt-portlet__head">
            <div class="kt-portlet__head-label">
              <h3 class="kt-portlet__head-title kt-font-brand">
                LABORATORY TESTS
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
                  <tr v-if="consultationTests.length == 0">
                    <td colspan="9" align="center">No Requested Tests</td>
                  </tr>
                  <tr
                    v-for="(test, index) in consultationTests"
                    :key="test._id"
                  >
                    <td>
                      {{ index + 1 }}
                    </td>
                    <td>
                      {{ test.test.name }}
                    </td>
                    <td>
                      {{ test.test.laboratory }}
                    </td>
                    <td>
                      {{ test.test.price }}
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
                    <select
                      v-model="labId"
                      class="form-control"
                      @change="getTests"
                    >
                      <option selected disabled>Select</option>
                      <option
                        v-for="lab in labs"
                        :key="lab._id"
                        :value="lab._id"
                        >{{ lab.name }}</option
                      >
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

        <!--begin::Portlet-->
        <div class="kt-portlet kt-portlet--responsive-tablet-and-mobile">
          <div class="kt-portlet__head">
            <div class="kt-portlet__head-label">
              <h3 class="kt-portlet__head-title kt-font-brand">
                IMAGING
              </h3>
            </div>
          </div>
          <div class="kt-portlet__body">
            <!--begin: Search Form -->
            <div class="form-group row">
              <label class="col-2 col-form-label">Medical Imaging</label>
              <div class="col-4">
                <select
                  v-model="image.imagingId"
                  class="form-control"
                  @change="getInvestigations"
                >
                  <option selected disabled>Select</option>
                  <option
                    v-for="imaging in imagings"
                    :key="imaging._id"
                    :value="imaging._id"
                    >{{ imaging.name }}</option
                  >
                </select>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-2 col-form-label">Investigations</label>

              <div class="col-4">
                <select
                  v-model="image.investigationId"
                  class="form-control"
                  @change="getInvestigationprice"
                  required
                >
                  <option selected disabled>Select</option>
                  <option
                    v-for="investigation in investigations"
                    :key="investigation._id"
                    :value="investigation._id"
                    >{{ investigation.name }}</option
                  >
                </select>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-2 col-form-label">Price</label>
              <div class="col-4">
                <input
                  class="form-control"
                  type="text"
                  v-model="investigationprice"
                  readonly
                />
              </div>
            </div>
            <div class="form-group">
              <button
                v-if="!imagingloading"
                @click="createImagingTest"
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
                    <th>Investigations</th>
                    <th>Price (₦)</th>
                    <th>Date Created</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-if="consultationImagings.length == 0">
                    <td colspan="9" align="center">
                      No Requested Investigations
                    </td>
                  </tr>
                  <tr
                    v-for="(imaging, index) in consultationImagings"
                    :key="imaging._id"
                  >
                    <td>
                      {{ index + 1 }}
                    </td>
                    <td>
                      {{ imaging.investigation.name }}
                    </td>
                    <td>
                      {{ imaging.investigation.price }}
                    </td>
                    <td>
                      {{
                        imaging.dateRequested
                          | moment('ddd, MMM Do YYYY, h:mm a')
                      }}
                    </td>
                    <td>
                      <button
                        v-if="!deleteimagingloading"
                        @click="deleteImagingTest(index)"
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
    </div>
  </div>
</template>

<script>
import axios from '../../axios'
import vSelect from 'vue-select'
import { Datetime } from 'vue-datetime'
export default {
  name: 'consultationpage',
  components: {
    vSelect,
    datetime: Datetime
  },
  data() {
    return {
      tests: [],
      age: '',
      drugs: [],
      imagings: [],
      consultationDrugs: [],
      consultationImagings: [],
      consultationTests: [],
      consultation: '',
      triage: '',
      patient: '',

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

      //   Imaging
      image: {
        imagingId: '',
        investigationId: ''
      },
      investigationprice: '',
      investigations: [],

      //   Lab tests
      test: {
        testId: ''
      },
      price: '',
      labId: '',
      labs: [],

      loading: false,
      imagingloading: false,
      deleteimagingloading: false,
      testloading: false,
      deletetestloading: false,
      drugloading: false,
      deletedrugloading: false,
      consultationpageUrl: '/consultation/',
      createimagingtestUrl: '/consultation/imaging/',
      createlabtestUrl: '/consultation/test/',
      createdrugUrl: '/consultation/drug/',
      deleteimagingtestUrl: '/consultation/delete/imaging/',
      deletelabtestUrl: '/consultation/delete/test/',
      deletedrugUrl: '/consultation/delete/drug/',
      getDrugsUrl: '/consultation/consultation/drugs/',
      getInvestigationsUrl: '/ajax/investigations',
      getInvestigationspriceUrl: '/ajax/investigation/price',
      getTestsUrl: '/ajax/tests',
      gettestspriceUrl: '/ajax/test/price',
      getDrugsPriceUrl: '/ajax/drugs/price'
    }
  },
  mounted() {
    this.getPage()
    this.getDrugsTestsImagings()
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
        .get(this.consultationpageUrl + this.$route.params.id)
        .then(response => {
          this.patient = response.data.data.patient
          this.triage = response.data.data.triage
          this.age = response.data.data.age
          this.drugs = response.data.data.drugs
          this.imagings = response.data.data.imagings
          this.labs = response.data.data.labs
        })
        .catch(error => {
          this.handleError(error)
        })
    },
    getDrugsTestsImagings() {
      axios
        .get(this.getDrugsUrl + this.$route.params.id)
        .then(response => {
          this.consultation = response.data.data
          this.consultationDrugs = response.data.data.drugs
          this.consultationTests = response.data.data.tests
          this.consultationImagings = response.data.data.imagings
          console.log(this.consultation)
        })
        .catch(error => {
          this.handleError(error)
        })
    },
    updateConsultation() {
      this.loading = true
      axios
        .put(
          this.consultationpageUrl + this.$route.params.id,
          this.consultation
        )
        .then(response => {
          this.consultation = response.data.data
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
    calcDosage() {
      this.input.quantity =
        this.input.duration * this.input.strength * this.time
    },

    calctotalprice() {
      this.input.totalprice = this.input.price * this.input.quantitytodispense
    },

    // Investigations/Imaging
    getInvestigations() {
      const data = {
        imagingId: this.image.imagingId
      }
      axios
        .post(this.getInvestigationsUrl, data)
        .then(response => {
          this.investigations = response.data.data
        })
        .catch(error => {
          this.handleError(error)
        })
    },
    getInvestigationprice() {
      const data = {
        investigationId: this.image.investigationId
      }
      axios
        .post(this.getInvestigationspriceUrl, data)
        .then(response => {
          this.investigationprice = response.data.data.price
        })
        .catch(error => {
          this.handleError(error)
        })
    },
    createImagingTest() {
      this.imagingloading = true
      axios
        .put(this.createimagingtestUrl + this.$route.params.id, this.image)
        .then(response => {
          this.imagingloading = false
          this.image = ''
          this.consultationImagings = response.data.data.imagings
          this.$iziToast.success({
            title: 'Success!',
            message: response.data.message
          })
        })
        .catch(error => {
          this.imagingloading = false
          this.handleError(error)
        })
    },
    deleteImagingTest(index) {
      this.deleteimagingloading = true
      const data = {
        index: index
      }
      axios
        .post(this.deleteimagingtestUrl + this.$route.params.id, data)
        .then(response => {
          this.deleteimagingloading = false
          this.consultationImagings = response.data.data.imagings
          this.$iziToast.success({
            title: 'Success!',
            message: response.data.message
          })
        })
        .catch(error => {
          this.deleteimagingloading = false
          this.handleError(error)
        })
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
          this.consultationTests = response.data.data.tests
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
      const data = {
        index: index
      }
      axios
        .post(this.deletelabtestUrl + this.$route.params.id, data)
        .then(response => {
          this.deletetestloading = false
          this.consultationTests = response.data.data.tests
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
        genericId: this.input.genericId
      }
      axios
        .post(this.getDrugsPriceUrl, data)
        .then(response => {
          this.input.price = response.data.data.price
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
        .put(this.createdrugUrl + this.$route.params.id, this.input)
        .then(response => {
          this.drugloading = false
          this.consultationDrugs = response.data.data.drugs
          this.input = ''
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
          this.consultationDrugs = response.data.data.drugs
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
