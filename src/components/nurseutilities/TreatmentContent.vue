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
            Create Treatment Record
            <small>Create a new treatment record</small>
          </h3>
        </div>
      </div>
      <div class="kt-portlet__body">
        <!--begin: Datatable -->
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Patient </label>
              <select v-model="patientId" class="form-control">
                <option selected disabled>Select</option>
                <option
                  v-for="patient in patients"
                  :key="patient._id"
                  :value="patient._id"
                  >{{ patient.firstname }} {{ patient.lastname }}</option
                >
              </select>
              <span class="form-text text-muted">Please enter patient.</span>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Drugs</label>
              <select v-model="drugId" class="form-control">
                <option selected disabled>Select</option>
                <option
                  v-for="drug in drugs"
                  :key="drug._id"
                  :value="drug._id"
                  >{{ drug.name }}</option
                >
              </select>
              <span class="form-text text-muted">Please enter drugs.</span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Route</label>
              <select v-model="route" class="form-control">
                <option selected>Select</option>
                <option value="Oral">Oral</option>
                <option value="IV">IV</option>
                <option value="IM">IM</option>
                <option value="SC">SC</option>
                <option value="SLID">SLID</option>
                <option value="PR">PR</option>
                <option value="OCC">OCC</option>
                <option value="GUTT">GUTT</option>
                <option value="TOPICAL">TOPICAL</option>
              </select>
              <span class="form-text text-muted">Please enter route.</span>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Dosage</label>
              <input
                type="text"
                class="form-control"
                placeholder="Dosage"
                v-model="dosage"
                required
              />
              <span class="form-text text-muted">Please enter dosage.</span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Comments</label>
              <textarea
                col="30"
                class="form-control"
                rows="10"
                v-model="comment"
                placeholder="Comment"
                required
              >
              </textarea>
              <span class="form-text text-muted">Please enter comments.</span>
            </div>
          </div>
        </div>
        <div>
          <button
            v-if="!loading"
            @click="createTreatment"
            class="btn btn-brand btn-elevate float-right"
          >
            Create Treatment
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
              <a href="#" class="btn btn-brand btn-elevate btn-icon-sm">
                <i class="la la-plus"></i>
                New Record
              </a>
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
                      id="generalSearch"
                    />
                    <span class="kt-input-icon__icon kt-input-icon__icon--left">
                      <span><i class="la la-search"></i></span>
                    </span>
                  </div>
                </div>
                <div class="col-md-4 kt-margin-b-20-tablet-and-mobile">
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
      <div class="kt-portlet__body ">
        <!--begin: Datatable -->
        <div class="dt-responsive table-responsive">
          <table class="table table-striped table-bordered nowrap">
            <thead>
              <tr>
                <th>S/N</th>
                <th>Patient Name</th>
                <th>Drugs</th>
                <th>Route</th>
                <th>Dosage</th>
                <th>Comment</th>
                <th>Nurse</th>
                <th>Date Created</th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="treatments.length == 0">
                <td colspan="9" align="center">No Treatments</td>
              </tr>
              <tr v-for="(treatment, index) in treatments" :key="treatment._id">
                <td>
                  {{ index + 1 }}
                </td>
                <td>
                  <router-link to="note.url">
                    {{ treatment.patient.firstname }}
                    {{ treatment.patient.lastname }}
                  </router-link>
                </td>
                <td>{{ treatment.drug.name }}</td>
                <td>{{ treatment.route }}</td>
                <td>{{ treatment.dosage }}</td>
                <td>{{ treatment.comment }}</td>
                <td>
                  <a href="#">
                    {{ treatment.creator.firstname }}
                    {{ treatment.creator.lastname }}
                  </a>
                </td>
                <td>{{ treatment.createdAt | moment('DD/MM/YYYY') }}</td>
              </tr>
            </tbody>
          </table>
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
  name: 'treatment',
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {
      drugId: '',
      patientId: '',
      comment: '',
      dosage: '',
      route: '',
      patients: [],
      drugs: [],
      treatments: [],

      treatmentUrl: '/nurse/nursing/treatment',
      treatmentPageUrl: '/nurse/nursing/treatmentpage',
      loading: false
    }
  },
  mounted() {
    this.getPageData()
    this.getTreatments()
  },
  methods: {
    handleError(error) {
      this.$iziToast.error({
        title: 'Error!',
        message: error.response.data
      })
    },
    createTreatment() {
      this.loading = true
      const data = {
        drugId: this.drugId,
        patientId: this.patientId,
        comment: this.comment,
        dosage: this.dosage,
        route: this.route
      }
      axios
        .post(this.treatmentUrl, data)
        .then(response => {
          this.comment = ''
          this.route = ''
          this.dosage = ''
          this.drugId = ''
          this.patientId = ''
          this.loading = false
          this.treatments = response.data.data
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
    getPageData() {
      axios
        .get(this.treatmentPageUrl)
        .then(response => {
          this.patients = response.data.data.patients
          this.drugs = response.data.data.drugs
        })
        .catch(error => {
          this.loading = false
          this.handleError(error)
        })
    },

    getTreatments() {
      axios
        .get(this.treatmentUrl)
        .then(response => {
          this.treatments = response.data.data
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
