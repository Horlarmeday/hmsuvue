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
                to="/create-billing"
                class="btn btn-brand btn-elevate btn-icon-sm"
              >
                <i class="la la-plus"></i>
                Create Billing
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
                      @keyup="getBillings"
                      v-model="input"
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
                        <option value="Pending">Pending</option>
                        <option value="Paid">Paid</option>
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
                <th>Service</th>
                <th>Total Amount (₦)</th>
                <th>Status</th>
                <th>Comment</th>
                <th>Date Created</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="billings.length == 0">
                <td colspan="9" align="center">No Billings</td>
              </tr>
            </tbody>
            <tbody v-for="(billing, index) in billings" :key="billing._id">
              <tr>
                <td>
                  {{ index + 1 }}
                </td>
                <td>
                  <router-link to="#"
                    >{{ billing.patient.firstname }}
                    {{ billing.patient.lastname }}
                  </router-link>
                </td>
                <td>
                  <p v-for="service in billing.services" :key="service._id">
                    {{ service.name }}
                  </p>
                </td>
                <td>{{ billing.amount }}</td>
                <td>
                  <label
                    v-if="!billing.paid"
                    class="kt-badge kt-badge--warning kt-badge--inline kt-badge--pill"
                    >Pending</label
                  >
                  <label
                    v-else
                    class="kt-badge kt-badge--success kt-badge--inline kt-badge--pill"
                    >Paid</label
                  >
                </td>
                <td>{{ billing.comment }}</td>
                <td>{{ billing.createdAt | moment('DD/MM/YYYY, h:ma') }}</td>
                <td>
                  <a
                    target="_blank"
                    v-if="billing.paid"
                    :href="billing.invoiceurl"
                    class="btn btn-success btn-elevate"
                  >
                    Invoice
                  </a>
                </td>
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
  </div>
  <!-- end:: Content -->
</template>

<script>
import axios from '../../axios'
export default {
  name: 'billingTable',
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {
      billings: [],
      billingUrl: '/account/billings',
      approvebillingurl: '/account/approve/billing',
      pdfurl:
        process.env.VUE_APP_INVOICE_URL ||
        'http://localhost:3000/static/invoices/',

      currentPage: 1,
      pageCount: '',
      pageSize: '',
      rows: '',
      meta: '',
      input: ''
    }
  },
  mounted() {
    this.getBillings()
  },
  methods: {
    handleError(error) {
      this.deleteData = false
      this.$iziToast.error({
        title: 'Error!',
        message: error.response.data
      })
    },
    getBillings() {
      axios
        .get(
          `${this.billingUrl}?currentPage=${this.currentPage}&search=${this.input}`
        )
        .then(response => {
          this.billings = response.data.data.billings
          this.meta = response.data.data.meta
          this.rows = this.meta.count
          this.pageSize = this.meta.pageSize
          this.pageCount = this.meta.pageCount

          let billings = this.billings
          for (let i = 0; i < billings.length; i++) {
            billings[i].url = '/patient/' + billings[i]._id
            billings[i].invoiceurl = this.pdfurl + billings[i].invoice
          }
        })
        .catch(error => {
          this.handleError(error)
        })
    },
    approveBilling(billing) {
      const data = {
        billingId: billing._id
      }
      axios
        .post(this.approvebillingurl, data)
        .then(response => {
          this.billings = response.data.data
          let billings = this.billings
          for (let i = 0; i < billings.length; i++) {
            billings[i].url = '/patient/' + billings[i]._id
            billings[i].invoiceurl = this.pdfurl + billings[i].invoice
          }
          this.$iziToast.success({
            title: 'Success!',
            message: response.data.message
          })
        })
        .catch(error => {
          this.handleError(error)
        })
    },
    pageChangeHandle(value) {
      if (value === 'next') {
        this.currentPage += 1
        this.getBillings()
      } else if (value === 'previous') {
        this.currentPage -= 1
        this.getBillings()
      }
    }
  },
  computed: {
    isPreviousButtonDisabled() {
      return this.currentPage === 1
    },
    isNextButtonDisabled() {
      return this.currentPage === this.pageCount
    },
    drows() {
      return this.consultations.length
    }
  }
}
</script>

<style></style>
