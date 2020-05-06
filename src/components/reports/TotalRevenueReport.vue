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
            Total Revenue Report
            <small>Generate Total Revenue Report</small>
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
        <form
          @submit.prevent="getTotalRevenueReport"
          class="kt-form kt-form--fit kt-margin-b-20"
        >
          <div class="row kt-margin-b-20">
            <div class="col-lg-4 kt-margin-b-10-tablet-and-mobile">
              <label>Date:</label>
              <div class="input-daterange input-group" id="kt_datepicker">
                <datepicker
                  input-class="form-control kt-input"
                  placeholder="From"
                  v-model="start"
                ></datepicker>
                <div class="input-group-append">
                  <span class="input-group-text"
                    >...<i class="la la-ellipsis-h"></i
                  ></span>
                </div>
                <datepicker
                  input-class="form-control kt-input"
                  placeholder="To"
                  v-model="end"
                ></datepicker>
              </div>
            </div>
            <div class="col-lg-3 kt-margin-b-10-tablet-and-mobile">
              <label>Type:</label>
              <select
                v-model="statusofpayment"
                class="form-control kt-input"
                data-col-index="6"
              >
                <option value="">Select</option>
                <option value="All">All</option>
                <option value="Paid">Cash</option>
                <option value="Cleared">Credit</option>
              </select>
            </div>
          </div>
          <div class="kt-separator kt-separator--md kt-separator--dashed"></div>
          <div class="row">
            <div class="col-lg-12">
              <button class="btn btn-primary btn-brand--icon" type="submit">
                <span>
                  <i class="la la-search"></i>
                  <span>Search</span>
                </span>
              </button>
              &nbsp;&nbsp;
              <button
                class="btn btn-secondary btn-secondary--icon"
                type="reset"
              >
                <span>
                  <i class="la la-close"></i>
                  <span>Reset</span>
                </span>
              </button>
            </div>
          </div>
        </form>

        <!--begin: Datatable -->
        <div
          class="kt-separator kt-separator--border-dashed kt-separator--space-md"
        ></div>
        <table
          class="table table-striped- table-bordered table-hover table-checkable"
          id="kt_table_1"
        >
          <thead>
            <tr>
              <th>S/N</th>
              <th>Amount</th>
              <th>Count</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="collections.length < 0">
              <td>No Reports</td>
            </tr>
            <tr v-for="(data, index) in collections" :key="data._id">
              <td>{{ index + 1 }}</td>
              <td>
                {{ data.totalAmount }}
              </td>
              <td>
                {{ data.count }}
              </td>
              <td>
                <span style="color: green" v-if="statusofpayment == 'Paid'"
                  >Paid</span
                >
                <span style="color: red" v-if="statusofpayment == 'Cleared'"
                  >Cleared</span
                >
                <span style="color: orange" v-if="statusofpayment == 'All'"
                  >Both</span
                >
              </td>

              <td>
                {{ data._id | moment('DD/MM/YYYY') }}
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th>S/N</th>
              <th>Amount</th>
              <th>Count</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </tfoot>
        </table>

        <!--end: Datatable -->
      </div>
    </div>
  </div>
  <!-- end:: Content -->
</template>

<script>
import axios from '../../axios'
import Datepicker from 'vuejs-datepicker'
export default {
  name: 'totalrevenuereport',
  props: {
    title: {
      type: String
    }
  },
  components: {
    Datepicker
  },
  data() {
    return {
      start: '',
      end: '',
      statusofpayment: '',
      collections: [],
      totalRevenueUrl: '/report/total-revenue-report',

      currentPage: 1,
      pageCount: '',
      pageSize: '',
      rows: '',
      meta: '',
      input: ''
    }
  },
  methods: {
    handleError(error) {
      this.$iziToast.error({
        title: 'Error!',
        message: error.response.data
      })
    },
    getTotalRevenueReport() {
      this.loading = true
      const data = {
        start: this.start,
        end: this.end,
        statusofpayment: this.statusofpayment
      }
      if (this.start == '' || this.end == '' || this.statusofpayment == '') {
        this.$iziToast.error({
          title: 'Error!',
          message: 'No field must be left empty'
        })
        return
      }
      axios
        .post(this.totalRevenueUrl, data)
        .then(response => {
          this.loading = false
          this.collections = response.data.data
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
    pageChangeHandle(value) {
      if (value === 'next') {
        this.currentPage += 1
        this.getGeneric()
      } else if (value === 'previous') {
        this.currentPage -= 1
        this.getGeneric()
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
