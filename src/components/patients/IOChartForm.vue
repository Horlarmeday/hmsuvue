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
            Create IOChart for {{ patient.firstname }} {{ patient.lastname }}
            <small>Create a new iochart</small>
          </h3>
        </div>
      </div>
      <div class="kt-portlet__body">
        <!--begin: Datatable -->
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Oral </label>
              <input
                type="text"
                class="form-control"
                v-model="input.oral"
                placeholder="Oral"
              />
              <span class="form-text text-muted">Please enter oral.</span>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Rectal</label>
              <input
                type="text"
                class="form-control"
                v-model="input.rectal"
                placeholder="Oral"
              />
              <span class="form-text text-muted">Please enter rectal.</span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Intravenous </label>
              <input
                type="text"
                class="form-control"
                v-model="input.intraveneous"
                placeholder="Intravenous "
              />
              <span class="form-text text-muted"
                >Please enter intraveneous .</span
              >
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Insulin</label>
              <input
                type="text"
                class="form-control"
                v-model="input.insulin"
                placeholder="Insulin"
              />
              <span class="form-text text-muted">Please enter insulin.</span>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Total</label>
              <input
                type="text"
                class="form-control"
                v-model="input.total"
                placeholder="Total"
              />
              <span class="form-text text-muted">Please enter total.</span>
            </div>
          </div>
        </div>
        <h4 style="color:purple">Output</h4>
        <hr />
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Urine </label>
              <input
                type="text"
                class="form-control"
                v-model="input.urine"
                placeholder="Urine"
              />
              <span class="form-text text-muted">Please enter urine.</span>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Gastric Contents</label>
              <input
                type="text"
                class="form-control"
                v-model="input.gastriccontents"
                placeholder="Gastric Contents"
              />
              <span class="form-text text-muted"
                >Please enter gastric contents.</span
              >
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Fistula </label>
              <input
                type="text"
                class="form-control"
                v-model="input.fistula"
                placeholder="Fistula"
              />
              <span class="form-text text-muted">Please enter fistula.</span>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Total</label>
              <input
                type="text"
                class="form-control"
                v-model="input.outputtotal"
                placeholder="Total"
              />
              <span class="form-text text-muted"
                >Please enter output total.</span
              >
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Notes</label>
              <textarea
                v-model="input.notes"
                class="form-control"
                cols="30"
                rows="10"
              ></textarea>

              <span class="form-text text-muted">Please enter notes.</span>
            </div>
          </div>
        </div>
        <div>
          <button
            v-if="!loading"
            @click="createIOChart"
            class="btn btn-brand btn-elevate float-right"
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
                    />
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
      <div class="kt-portlet__body ">
        <!--begin: Datatable -->
        <div class="dt-responsive table-responsive">
          <table id="mytable" class="table table-striped table-bordered nowrap">
            <thead>
              <tr>
                <th>S/N</th>
                <th>Oral</th>
                <th>Rectal</th>
                <th>Intravenous</th>
                <th>Insulin</th>
                <th>Total</th>
                <th>Urine</th>
                <th>Gastric Contents</th>
                <th>Fistula</th>
                <th>Output Total</th>
                <th>Notes</th>
                <th>Date Created</th>
                <th>Created By</th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="iocharts.length == 0">
                <td colspan="15" align="center">No Entries</td>
              </tr>
              <tr v-for="(chart, index) in iocharts" :key="chart._id">
                <td>
                  {{ index + 1 }}
                </td>
                <td>{{ chart.oral }}</td>
                <td>{{ chart.rectal }}</td>
                <td>{{ chart.intraveneous }}</td>
                <td>{{ chart.insulin }}</td>
                <td>{{ chart.total }}</td>
                <td>{{ chart.urine }}</td>
                <td>{{ chart.gastriccontents }}</td>
                <td>{{ chart.fistula }}</td>
                <td>{{ chart.outputtotal }}</td>
                <td>{{ chart.notes }}</td>

                <td>{{ chart.createdAt | moment('DD/MM/YYYY') }}</td>
                <td>
                  {{ chart.creator.firstname }} {{ chart.creator.lastname }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="card-footer">
          <b-pagination
            class="float-right"
            v-model="currentPage"
            :per-page="7"
            :total-rows="irows"
            first-text="First"
            prev-text="Prev"
            next-text="Next"
            last-text="Last"
          ></b-pagination>
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
  name: 'iochart',
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {
      patient: '',
      iocharts: [],
      input: {
        oral: '',
        rectal: '',
        intraveneous: '',
        insulin: '',
        total: '',
        urine: '',
        gastriccontents: '',
        fistula: '',
        outputtotal: '',
        notes: ''
      },

      currentPage: 1,
      landingpageUrl: '/patient/',
      iochartUrl: '/patient/iochart/',
      loading: false
    }
  },
  mounted() {
    this.getPage()
    this.getIOChart()
  },
  methods: {
    handleError(error) {
      this.$iziToast.error({
        title: 'Error!',
        message: error.response.data
      })
    },
    createIOChart() {
      this.loading = true
      axios
        .post(this.iochartUrl + this.$route.params.id, this.input)
        .then(response => {
          this.input = ''
          this.loading = false
          this.iocharts = response.data.data
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

    getPage() {
      axios
        .get(this.landingpageUrl + this.$route.params.id)
        .then(response => {
          this.patient = response.data.data
        })
        .catch(error => {
          this.handleError(error)
        })
    },

    getIOChart() {
      axios
        .get(this.iochartUrl + this.$route.params.id)
        .then(response => {
          this.iocharts = response.data.data
        })
        .catch(error => {
          this.handleError(error)
        })
    }
  },
  computed: {
    irows() {
      return this.iocharts.length
    }
  }
}
</script>

<style></style>
