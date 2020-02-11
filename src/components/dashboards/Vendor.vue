<template>
  <!-- begin:: Content -->
  <div class="kt-content  kt-grid__item kt-grid__item--fluid" id="kt_content">
    <!--Begin::Dashboard 1-->

    <!--begin:: Widgets/Stats-->
    <div class="kt-portlet">
      <div class="kt-portlet__body  kt-portlet__body--fit">
        <div class="row row-no-padding row-col-separator-xl">
          <div class="col-md-12 col-lg-6 col-xl-4">
            <!--begin::Total Profit-->
            <div class="kt-widget24">
              <div class="kt-widget24__details">
                <div class="kt-widget24__info">
                  <h4 class="kt-widget24__title">
                    Supplies
                  </h4>
                  <span class="kt-widget24__desc">
                    Total number of your supplies
                  </span>
                </div>
                <span class="kt-widget24__stats kt-font-brand">
                  {{ supplyCount }}
                </span>
              </div>
              <div class="progress progress--sm">
                <div
                  class="progress-bar kt-bg-brand"
                  role="progressbar"
                  style="width: 78%;"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div class="kt-widget24__action">
                <span class="kt-widget24__change">
                  Change
                </span>
                <span class="kt-widget24__number">
                  78%
                </span>
              </div>
            </div>

            <!--end::Total Profit-->
          </div>
          <div class="col-md-12 col-lg-6 col-xl-4">
            <!--begin::New Feedbacks-->
            <div class="kt-widget24">
              <div class="kt-widget24__details">
                <div class="kt-widget24__info">
                  <h4 class="kt-widget24__title">
                    Vendor
                  </h4>
                  <span class="kt-widget24__desc">
                    Total number of vendor
                  </span>
                </div>
                <span class="kt-widget24__stats kt-font-warning">
                  {{ vendorCount }}
                </span>
              </div>
              <div class="progress progress--sm">
                <div
                  class="progress-bar kt-bg-warning"
                  role="progressbar"
                  style="width: 84%;"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div class="kt-widget24__action">
                <span class="kt-widget24__change">
                  Change
                </span>
                <span class="kt-widget24__number">
                  84%
                </span>
              </div>
            </div>

            <!--end::New Feedbacks-->
          </div>
          <div class="col-md-12 col-lg-6 col-xl-4">
            <!--begin::New Orders-->
            <div class="kt-widget24">
              <div class="kt-widget24__details">
                <div class="kt-widget24__info">
                  <h4 class="kt-widget24__title">
                    Receipts
                  </h4>
                  <span class="kt-widget24__desc">
                    Number of receipts created
                  </span>
                </div>
                <span class="kt-widget24__stats kt-font-danger">
                  {{ 0 }}
                </span>
              </div>
              <div class="progress progress--sm">
                <div
                  class="progress-bar kt-bg-danger"
                  role="progressbar"
                  style="width: 69%;"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div class="kt-widget24__action">
                <span class="kt-widget24__change">
                  Change
                </span>
                <span class="kt-widget24__number">
                  69%
                </span>
              </div>
            </div>

            <!--end::New Orders-->
          </div>
        </div>
      </div>
    </div>

    <!--end:: Widgets/Stats-->

    <!--Begin::Section-->
    <div class="row">
      <div class="col-xl-12">
        <!--begin:: Widgets/Tasks -->
        <div class="kt-portlet kt-portlet--tabs kt-portlet--height-fluid">
          <div class="kt-portlet__head">
            <div class="kt-portlet__head-label">
              <h3 class="kt-portlet__head-title">
                Your Supplies
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
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Search..."
                          v-model="input"
                          @keyup="dashboard"
                        />
                        <span
                          class="kt-input-icon__icon kt-input-icon__icon--left"
                        >
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
          <div class="kt-portlet__body">
            <div class="dt-responsive table-responsive">
              <table class="table table-striped table-bordered nowrap">
                <thead>
                  <tr>
                    <th>S/N</th>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Unit Price</th>
                    <th>Purchase Cost</th>
                    <th>Expiration</th>
                    <th>Date Supplied</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-if="supplies.length == 0">
                    <td colspan="15" align="center">No Supplies</td>
                  </tr>
                  <tr v-for="(supply, index) in supplies" :key="supply._id">
                    <td>
                      {{ index + 1 }}
                    </td>
                    <td>
                      {{ supply.drug.name }}
                    </td>

                    <td>
                      {{ supply.quantity }}
                    </td>
                    <td>
                      {{ supply.price }}
                    </td>
                    <td>
                      {{ supply.cost }}
                    </td>
                    <td>
                      {{ supply.expiration | moment('DD/MM/YYYY, h:mm:ss') }}
                    </td>

                    <td>
                      {{ supply.datesupplied | moment('DD/MM/YYYY, h:mm:ss') }}
                    </td>

                    <td>
                      <label
                        v-if="supply.status"
                        class="kt-badge kt-badge--success kt-badge--inline kt-badge--pill"
                        >Active</label
                      >
                      <label
                        v-if="!supply.status"
                        class="kt-badge kt-badge--dark kt-badge--inline kt-badge--pill"
                        >Inactive</label
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="card-footer">
              <p class="float-left">
                Showing {{ pageSize }} of {{ rows }} entries
              </p>
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
          </div>
        </div>

        <!--end:: Widgets/Tasks -->
      </div>
    </div>
    <!--End::Section-->

    <!--End::Dashboard 1-->
  </div>
  <!-- end:: Content -->
</template>

<script>
import axios from '../../axios'

export default {
  name: 'vendordashboard',
  data() {
    return {
      supplies: [],
      vendorCount: '',
      supplyCount: '',
      date: '',
      status: '',
      loading: false,
      landingPageUrl: '/dashboard/vendor',

      currentPage: 1,
      pageCount: '',
      pageSize: '',
      rows: '',
      meta: '',
      input: ''
    }
  },
  mounted() {
    this.dashboard()
  },
  methods: {
    handleError(error) {
      this.$iziToast.error({
        title: 'Error!',
        message: error.response.data
      })
    },
    dashboard() {
      axios
        .get(
          `${this.landingPageUrl}?currentPage=${this.currentPage}&search=${this.input}`
        )
        .then(response => {
          this.supplies = response.data.data.supplies
          //   this.totalPatients = response.data.data.patientCount
          this.vendorCount = response.data.data.vendorsCount
          this.supplyCount = response.data.data.suppliesCount

          this.meta = response.data.data.meta
          this.rows = this.meta.count
          this.pageSize = this.meta.pageSize
          this.pageCount = this.meta.pageCount
        })
        .catch(error => {
          this.handleError(error)
        })
    },
    pageChangeHandle(value) {
      if (value === 'next') {
        this.currentPage += 1
        this.dashboard()
      } else if (value === 'previous') {
        this.currentPage -= 1
        this.dashboard()
      }
    }
  },
  filters: {
    toCurrency: function(value) {
      if (typeof value !== 'number') {
        var formatCurreny = new Intl.NumberFormat('en-US').format(
          parseInt(value)
        )
        return formatCurreny
      }
      var formatter = new Intl.NumberFormat('en-US').format(value)
      return formatter
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
