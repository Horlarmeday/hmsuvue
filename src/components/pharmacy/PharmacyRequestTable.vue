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
                <th>Drugs</th>
                <th>Created</th>
              </tr>
            </thead>
            <tbody v-if="consultations.length == 0">
              <tr>
                <td colspan="9" align="center">No Pharmacy Requests</td>
              </tr>
            </tbody>
            <tbody
              v-for="(consultation, index) in consultations"
              :key="consultation._id"
            >
              <tr v-if="consultation.drugstatus">
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

                <td v-if="consultation.drugs.length > 0">
                  <button
                    class="btn btn-brand"
                    data-toggle="modal"
                    data-target="#kt_modal_3"
                    @click="getDrugs(consultation)"
                  >
                    View Drugs
                  </button>
                </td>
                <td v-else>No Drugs</td>

                <td>{{ consultation.updatedAt | moment('DD/MM/YYYY, ha') }}</td>
              </tr>
            </tbody>
          </table>
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
            <div style="width: 130%" class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Drugs</h5>
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
                      <tr>
                        <th>S/N</th>
                        <th>Drugs</th>
                        <th>Starting</th>
                        <th>Unit Dose</th>
                        <th>Frequency</th>
                        <th>Duration</th>
                        <th>Quantity</th>
                        <th>Dispense Total</th>
                        <th>Total Price</th>
                        <th>Status</th>
                        <th>PrescribedBy</th>
                        <th>Notes</th>
                      </tr>
                    </thead>
                    <tbody v-if="drugs.length == 0">
                      <tr>
                        <td colspan="9" align="center">No Drugs</td>
                      </tr>
                    </tbody>
                    <tbody v-for="(drug, index) in drugs" :key="drug._id">
                      <tr>
                        <td>
                          {{ index + 1 }}
                        </td>
                        <td>{{ drug.drug.name }}</td>
                        <td>
                          {{ drug.startingdate | moment('DD/MM/YYYY') }}
                        </td>
                        <td>{{ drug.unitdose }}</td>
                        <td>{{ drug.strength }}</td>
                        <td>
                          {{ drug.duration }}
                        </td>
                        <td>
                          {{ drug.quantity }}
                        </td>
                        <td>
                          {{ drug.quantitytodispense }}
                        </td>
                        <td>
                          {{ drug.totalprice }}
                        </td>
                        <td>
                          <label
                            v-if="drug.status"
                            class="kt-badge kt-badge--success kt-badge--inline kt-badge--pill"
                            >Dispensed</label
                          >
                          <label
                            v-else
                            class="kt-badge kt-badge--warning kt-badge--inline kt-badge--pill"
                            >Pending</label
                          >
                        </td>
                        <td>
                          <a v-if="drug.examiner" href="#">
                            {{ drug.examiner.firstname }}
                            {{ drug.examiner.lastname }}
                          </a>
                          <a v-else href="#">None</a>
                        </td>
                        <td>
                          {{ drug.notes }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="modal-footer">
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
        <!--end::Modal-->
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
  </div>
  <!-- end:: Content -->
</template>

<script>
import axios from '../../axios'
export default {
  name: 'consultationTable',
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {
      drugs: [],
      consultations: [],
      currentPage: 1,
      input: '',
      consultationId: '',
      pageCount: '',
      pageSize: '',
      rows: '',
      meta: '',
      consultationurl: '/consultation',
      consultationDrugurl: '/consultation/consultation/drugs'
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
            if (consultations[i].patient) {
              consultations[i].consulturl =
                '/consultation/' + consultations[i]._id
            }

            if (consultations[i].dependant) {
              consultations[i].dependantconsulturl =
                '/dependant/consultation/' + consultations[i]._id
            }
          }
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
    },
    getDrugs(consultation) {
      const data = {
        consultationId: consultation._id
      }
      axios
        .post(this.consultationDrugurl, data)
        .then(response => {
          this.drugs = response.data.data.drugs
        })
        .catch(error => {
          this.handleError(error)
        })
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
