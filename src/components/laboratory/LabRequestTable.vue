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
                to="/create-appointment"
                class="btn btn-brand btn-elevate btn-icon-sm"
              >
                <i class="la la-plus"></i>
                Create Appointment
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
                      @keyup="getConsultations"
                    />
                    <span class="kt-input-icon__icon kt-input-icon__icon--left">
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
      <div class="kt-portlet__body ">
        <!--begin: Datatable -->
        <div class="dt-responsive table-responsive">
          <table class="table table-striped table-bordered nowrap">
            <thead>
              <tr>
                <th>S/N</th>
                <th>Patient Name</th>
                <th>Reason for visit</th>
                <th>Diagnosis</th>
                <th>Lab Tests</th>
                <th>Laboratory</th>
                <th>Lab Result</th>
                <th>Created</th>
              </tr>
            </thead>
            <tbody v-if="consultations.length == 0">
              <tr>
                <td colspan="9" align="center">No Tests Requests</td>
              </tr>
            </tbody>
            <tbody
              v-for="(consultation, index) in consultations"
              :key="consultation._id"
            >
              <tr v-if="consultation.teststatus">
                <td>
                  {{ index + 1 }}
                </td>
                <td>
                  <router-link
                    v-if="consultation.patient"
                    :to="consultation.url"
                  >
                    {{ consultation.patient.firstname }}
                    {{ consultation.patient.lastname }}
                  </router-link>
                  <router-link v-if="consultation.dependant" to="#">
                    {{ consultation.dependant.name }}
                    <small class="kt-badge kt-badge--danger kt-badge--inline"
                      >Dependant</small
                    >
                  </router-link>
                </td>
                <td>{{ consultation.reasonforvisit }}</td>
                <td>{{ consultation.diagnosis }}</td>

                <td v-if="consultation.tests.length > 0">
                  <p v-for="test in consultation.tests" :key="test._id">
                    <span>{{ test.test.name }}</span>
                  </p>
                </td>
                <td v-else>No tests</td>
                <td v-if="consultation.tests.length > 0">
                  <p v-for="test in consultation.tests" :key="test._id">
                    <span>{{ test.test.laboratory }}</span>
                  </p>
                </td>
                <td v-if="consultation.labtestfinish">
                  <button
                    data-toggle="modal"
                    data-target="#kt_modal_2"
                    class="btn btn-brand"
                    @click="getResults(consultation)"
                  >
                    View Result
                  </button>
                </td>
                <td v-if="!consultation.labtestfinish">
                  <button class="btn btn-light">No Results Yet</button>
                </td>

                <td>{{ consultation.updatedAt | moment('DD/MM/YYYY, ha') }}</td>
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
            <h5 class="modal-title" id="exampleModalLabel">Test Results</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="dt-responsive table-responsive">
              <table class="table table-striped table-bordered nowrap">
                <thead>
                  <th>S/N</th>
                  <th>Laboratory</th>
                  <th>Destination</th>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>
                      Chemical and Pathology
                    </td>
                    <td>
                      <a
                        target="_blank"
                        :href="chemicalurl"
                        class="btn btn-brand btn-sm btn-elevate"
                      >
                        View
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>
                      Microbiology
                    </td>
                    <td>
                      <a
                        target="_blank"
                        :href="microurl"
                        class="btn btn-brand btn-sm btn-elevate"
                      >
                        View
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>
                      Haematology and Serology
                    </td>
                    <td>
                      <a
                        target="_blank"
                        :href="haemaurl"
                        class="btn btn-brand btn-sm btn-elevate"
                      >
                        View
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--end::Modal-->
  </div>
  <!-- end:: Content -->
</template>

<script>
import axios from '../../axios'
export default {
  name: 'labrequestsTable',
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {
      consultation: '',
      consultations: [],
      currentPage: 1,
      input: '',
      consultationId: '',
      pageCount: '',
      pageSize: '',
      rows: '',
      meta: '',
      consultationurl: '/consultation',
      consultationresulturl: '/laboratory/labtest/result',
      microurl: '',
      haemaurl: '',
      chemicalurl: ''
    }
  },
  mounted() {
    this.getConsultations()
  },
  methods: {
    handleError(error) {
      this.$iziToast.error({
        title: 'Error!',
        message: error.response.data
      })
    },
    getConsultations() {
      axios
        .get(
          `${this.consultationurl}?currentPage=${this.currentPage}&search=${this.input}`
        )
        .then(response => {
          this.consultations = response.data.data.consultations
          this.meta = response.data.data.meta
          this.rows = this.meta.count
          this.pageSize = this.meta.pageSize
          this.pageCount = this.meta.pageCount

          let consultations = this.consultations
          for (let i = 0; i < consultations.length; i++) {
            if (consultations[i].patient) {
              consultations[i].url = '/patient/' + consultations[i].patient._id
            }
          }
        })
        .catch(error => {
          this.handleError(error)
        })
    },
    getResults(consultation) {
      const data = {
        consultationId: consultation._id
      }
      axios
        .post(this.consultationresulturl, data)
        .then(response => {
          this.consultation = response.data.data
          this.microurl = '/microbiology-test-result/' + this.consultation._id
          this.haemaurl = '/haematology-test-result/' + this.consultation._id
          this.chemicalurl =
            '/chemical-pathology-test-result/' + this.consultation._id
        })
        .catch(error => {
          this.handleError(error)
        })
    },
    pageChangeHandle(value) {
      if (value === 'next') {
        this.currentPage += 1
        this.getConsultations()
      } else if (value === 'previous') {
        this.currentPage -= 1
        this.getConsultations()
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
