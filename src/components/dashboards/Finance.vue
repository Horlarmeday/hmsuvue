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
                    Patients
                  </h4>
                  <span class="kt-widget24__desc">
                    Total number of patients
                  </span>
                </div>
                <span class="kt-widget24__stats kt-font-brand">
                  {{ totalPatients }}
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
            <!--begin::New Orders-->
            <div class="kt-widget24">
              <div class="kt-widget24__details">
                <div class="kt-widget24__info">
                  <h4 class="kt-widget24__title">
                    Finance Officer
                  </h4>
                  <span class="kt-widget24__desc">
                    Total Number of finance officer
                  </span>
                </div>
                <span class="kt-widget24__stats kt-font-danger">
                  {{ financeCount }}
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
          <div class="col-md-12 col-lg-6 col-xl-4">
            <!--begin::New Users-->
            <div class="kt-widget24">
              <div class="kt-widget24__details">
                <div class="kt-widget24__info">
                  <h4 class="kt-widget24__title">
                    Revenue
                  </h4>
                  <span class="kt-widget24__desc">
                    Total amount revenue generated
                  </span>
                </div>
                <span class="kt-widget24__stats kt-font-success">
                  ₦{{ totalAmount | toCurrency }}
                </span>
              </div>
              <div class="progress progress--sm">
                <div
                  class="progress-bar kt-bg-success"
                  role="progressbar"
                  style="width: 90%;"
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
                  90%
                </span>
              </div>
            </div>

            <!--end::New Users-->
          </div>
        </div>
      </div>
    </div>

    <!--end:: Widgets/Stats-->

    <!--Begin::Section-->
    <div class="row">
      <div class="col-xl-12">
        <!--begin:: Widgets/Notifications-->
        <div class="kt-portlet kt-portlet--height-fluid">
          <div class="kt-portlet__head">
            <div class="kt-portlet__head-label">
              <h3 class="kt-portlet__head-title">
                Payments
              </h3>
            </div>
          </div>
          <div class="kt-portlet__body">
            <vue-apex-charts
              type="bar"
              :options="paymentoptions"
              :series="paymentseries"
            ></vue-apex-charts>
          </div>
        </div>

        <!--end:: Widgets/Notifications-->
      </div>
    </div>
    <!--End::Section-->

    <!--Begin::Section-->
    <div class="row">
      <div class="col-xl-12">
        <!--begin:: Widgets/New Users-->
        <div class="kt-portlet kt-portlet--tabs kt-portlet--height-fluid">
          <div class="kt-portlet__head">
            <div class="kt-portlet__head-label">
              <h3 class="kt-portlet__head-title">
                Payments
              </h3>
            </div>
          </div>
          <div class="kt-portlet__body">
            <!--begin: Search Form -->
            <div class="kt-form kt-form--label-right">
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
            <div class="tab-content">
              <div class="tab-pane active" id="kt_widget4_tab1_content">
                <div class="dt-responsive table-responsive">
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th>S/N</th>
                        <th>Patient Name</th>
                        <th>Amount Paid (&#8358;)</th>
                        <th>Payment For</th>
                        <th>Mode of Payment</th>
                        <th>Payment Date</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-if="payments.length == 0">
                        <td colspan="9" align="center">No Recent Payments</td>
                      </tr>
                      <tr
                        v-for="(payment, index) in payments"
                        :key="payment._id"
                      >
                        <td>
                          {{ index + 1 }}
                        </td>
                        <td>
                          <router-link
                            :to="payment.url"
                            class="kt-widget4__username"
                          >
                            {{ payment.patient.firstname }}
                            {{ payment.patient.lastname }}
                          </router-link>
                        </td>
                        <td>{{ payment.amount }}</td>
                        <td v-if="payment.drugs.length > 0">
                          <p v-for="drug in payment.drugs" :key="drug._id">
                            {{ drug.name }}
                          </p>
                        </td>
                        <td v-if="payment.tests.length > 0">
                          <p v-for="test in payment.tests" :key="test._id">
                            {{ test.name }}
                          </p>
                        </td>
                        <td v-if="payment.investigations.length > 0">
                          <p
                            v-for="image in payment.investigations"
                            :key="image._id"
                          >
                            {{ image.name }}
                          </p>
                        </td>
                        <td v-if="payment.services.length > 0">
                          <p
                            v-for="service in payment.services"
                            :key="service._id"
                          >
                            {{ service.name }}
                          </p>
                        </td>
                        <td v-if="payment.type">
                          <p>
                            {{ payment.type }}
                          </p>
                        </td>
                        <td>{{ payment.modeofpayment }}</td>
                        <td>{{ payment.createdAt | moment('DD/MM/YYYY') }}</td>
                        <td>
                          <span
                            v-if="payment.paid"
                            class="kt-badge kt-badge--success kt-badge--inline kt-badge--pill"
                            >Paid</span
                          >
                          <span
                            v-else
                            class="kt-badge kt-badge--info kt-badge--inline kt-badge--pill"
                            >Not Paid</span
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
          </div>
        </div>

        <!--end:: Widgets/New Users-->
      </div>
    </div>

    <!--End::Section-->

    <!--End::Dashboard 1-->
  </div>
  <!-- end:: Content -->
</template>

<script>
import axios from '../../axios'
import VueApexCharts from 'vue-apexcharts'
export default {
  name: 'financeofficerdashboard',
  components: {
    VueApexCharts
  },
  data() {
    return {
      payments: [],
      totalPatients: '',
      financeCount: '',
      totalAmount: '',
      landingPageUrl: '/dashboard/financeofficer',
      paymentchartUrl: '/dashboard/payment/aggregation',
      paymentCategories: '',
      paymentXaxis: '',
      paymentoptions: {},
      paymentseries: [],
      input: '',

      currentPage: 1,
      pageCount: '',
      pageSize: '',
      rows: '',
      meta: ''
    }
  },
  mounted() {
    this.dashboard()
    this.paymentChart()
  },
  methods: {
    handleError(error) {
      console.log(error.response)
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
          this.payments = response.data.data.payments
          this.totalPatients = response.data.data.patientCount
          this.financeCount = response.data.data.financeCount
          this.totalAmount = response.data.data.totalAmount

          this.meta = response.data.data.meta
          this.rows = this.meta.count
          this.pageSize = this.meta.pageSize
          this.pageCount = this.meta.pageCount

          let payments = this.payments
          for (let i = 0; i < payments.length; i++) {
            payments[i].url = '/patient/' + payments[i].patient._id
          }
        })
        .catch(error => {
          this.handleError(error)
        })
    },
    paymentChart() {
      axios
        .get(this.paymentchartUrl)
        .then(response => {
          this.paymentCategories = response.data.data.amount
          this.paymentXaxis = response.data.data.months
          var colors = [
            '#5D78FF',
            '#008FFB',
            '#FEB019',
            '#FF4560',
            '#775DD0',
            '#546E7A',
            '#26A69A',
            '#D10CE8'
          ]

          let options = {
            options: {
              chart: {
                id: 'payment-chart',
                width: '100%',
                height: '400'
              },
              colors: colors,
              plotOptions: {
                bar: {
                  columnWidth: '55%',
                  distributed: true
                }
              },
              dataLabels: {
                enabled: true
              },
              xaxis: {
                name: 'Month',
                categories: this.paymentXaxis,
                title: {
                  text: 'Month'
                }
              },
              yaxis: {
                title: {
                  text: 'Amount (₦)'
                }
              }
            }
          }
          let series = {
            series: [
              {
                name: 'Amount',
                data: this.paymentCategories
              }
            ]
          }
          this.paymentoptions = options.options
          this.paymentseries = series.series
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
