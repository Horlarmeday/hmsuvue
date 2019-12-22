<template>
  <!-- begin:: Content -->
  <div class="kt-content  kt-grid__item kt-grid__item--fluid" id="kt_content">
    <!--Begin::Dashboard 1-->

    <!--begin:: Widgets/Stats-->
    <div class="kt-portlet">
      <div class="kt-portlet__body  kt-portlet__body--fit">
        <div class="row row-no-padding row-col-separator-xl">
          <div class="col-md-12 col-lg-6 col-xl-3">
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
          <div class="col-md-12 col-lg-6 col-xl-3">
            <!--begin::New Feedbacks-->
            <div class="kt-widget24">
              <div class="kt-widget24__details">
                <div class="kt-widget24__info">
                  <h4 class="kt-widget24__title">
                    Attended Patient
                  </h4>
                  <span class="kt-widget24__desc">
                    Number of times attended to patients
                  </span>
                </div>
                <span class="kt-widget24__stats kt-font-warning">
                  {{ triagesCount }}
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
          <div class="col-md-12 col-lg-6 col-xl-3">
            <!--begin::New Orders-->
            <div class="kt-widget24">
              <div class="kt-widget24__details">
                <div class="kt-widget24__info">
                  <h4 class="kt-widget24__title">
                    Appointments
                  </h4>
                  <span class="kt-widget24__desc">
                    Total Number of appointments
                  </span>
                </div>
                <span class="kt-widget24__stats kt-font-danger">
                  {{ appointmentCount }}
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
          <div class="col-md-12 col-lg-6 col-xl-3">
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
      <div class="col-xl-6">
        <!--begin:: Widgets/Tasks -->
        <div class="kt-portlet kt-portlet--tabs kt-portlet--height-fluid">
          <div class="kt-portlet__head">
            <div class="kt-portlet__head-label">
              <h3 class="kt-portlet__head-title">
                Patients
              </h3>
            </div>
          </div>
          <div class="kt-portlet__body">
            <vue-apex-charts
              width="700"
              type="area"
              :options="patientoptions"
              :series="patientseries"
            ></vue-apex-charts>
          </div>
        </div>

        <!--end:: Widgets/Tasks -->
      </div>
      <div class="col-xl-6">
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
              width="700"
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
      <div class="col-xl-6">
        <!--begin:: Widgets/New Users-->
        <div class="kt-portlet kt-portlet--tabs kt-portlet--height-fluid">
          <div class="kt-portlet__head">
            <div class="kt-portlet__head-label">
              <h3 class="kt-portlet__head-title">
                Recent Payments
              </h3>
            </div>
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
                          <a href="#" class="kt-widget4__username">
                            {{ payment.patient.firstname }}
                            {{ payment.patient.lastname }}
                          </a>
                        </td>
                        <td>{{ payment.amount }}</td>
                        <td>
                          <span v-if="payment.service">{{
                            payment.service.name
                          }}</span>
                          <span v-if="payment.drugs">{{
                            payment.drugs.name
                          }}</span>
                          <span v-if="payment.investifgations">{{
                            payment.investifgations.name
                          }}</span>
                          <span v-if="payment.tests">{{
                            payment.tests.name
                          }}</span>
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
              </div>
            </div>
          </div>
        </div>

        <!--end:: Widgets/New Users-->
      </div>
      <div class="col-xl-6">
        <!--begin:: Widgets/New Users-->
        <div class="kt-portlet kt-portlet--tabs kt-portlet--height-fluid">
          <div class="kt-portlet__head">
            <div class="kt-portlet__head-label">
              <h3 class="kt-portlet__head-title">
                Recent Patients
              </h3>
            </div>
          </div>
          <div class="kt-portlet__body">
            <div class="tab-content">
              <div class="tab-pane active" id="kt_widget4_tab1_content">
                <div class="dt-responsive table-responsive">
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th>S/N</th>
                        <th>Image</th>
                        <th>Patient ID</th>
                        <th>Patient Name</th>
                        <th>Phone Number</th>
                        <th>Date Created</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-if="patients.length == 0">
                        <td colspan="9" align="center">No Recent Patient</td>
                      </tr>
                      <tr
                        v-for="(patient, index) in patients"
                        :key="patient._id"
                      >
                        <td>
                          {{ index + 1 }}
                        </td>
                        <td>
                          <div class="kt-widget4__pic kt-widget4__pic--pic">
                            <img
                              v-if="patient.photo"
                              width="40"
                              :src="patient.photourl"
                              alt="patient image"
                            />
                            <img
                              v-else
                              width="40"
                              src="../../assets/images/100_4.jpg"
                              alt="patient image"
                            />
                          </div>
                        </td>
                        <td>{{ patient.patientId }}</td>
                        <td>
                          <div class="kt-widget4__info">
                            <a href="#" class="kt-widget4__username">
                              {{ patient.firstname }} {{ patient.lastname }}
                            </a>
                            <p
                              style="color: #a7abc3;font-weight: 400;"
                              class="kt-widget4__text"
                            >
                              {{ patient.state }}
                            </p>
                          </div>
                        </td>
                        <td>{{ patient.phonenumber }}</td>
                        <td>{{ patient.createdAt | moment('DD/MM/YYYY') }}</td>
                      </tr>
                    </tbody>
                  </table>
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
  name: 'superadmindasboard',
  components: {
    VueApexCharts
  },
  data() {
    return {
      patients: [],
      payments: [],
      totalPatients: '',
      triagesCount: '',
      totalAmount: '',
      appointmentCount: '',
      landingPageUrl: '/dashboard/superadmin',
      patientchartUrl: '/dashboard/patient/aggregation',
      paymentchartUrl: '/dashboard/payment/aggregation',
      imageurl: 'http://localhost:3000/static/uploads/',
      patientCategories: '',
      paymentCategories: '',
      patientXaxis: '',
      paymentXaxis: '',
      patientoptions: {},
      paymentoptions: {},
      patientseries: [],
      paymentseries: []
    }
  },
  mounted() {
    this.dashboard()
    this.patientsChart()
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
        .get(this.landingPageUrl)
        .then(response => {
          this.patients = response.data.data.patients
          this.payments = response.data.data.payments
          this.totalPatients = response.data.data.patientCount
          this.triagesCount = response.data.data.triagesCount
          this.totalAmount = response.data.data.totalAmount
          this.appointmentCount = response.data.data.appointmentCount
          let patients = this.patients
          for (let i = 0; i < patients.length; i++) {
            patients[i].photourl = this.imageurl + patients[i].photo
          }
        })
        .catch(error => {
          this.handleError(error)
        })
    },
    patientsChart() {
      axios
        .get(this.patientchartUrl)
        .then(response => {
          this.patientCategories = response.data.data.count
          this.patientXaxis = response.data.data.months
          let options = {
            options: {
              chart: {
                id: 'vuechart-example'
              },
              xaxis: {
                name: 'Month',
                categories: this.patientXaxis,
                title: {
                  text: 'Month'
                }
              },
              yaxis: {
                title: {
                  text: 'Count'
                }
              }
            }
          }
          let series = {
            series: [
              {
                name: 'Registrations',
                data: this.patientCategories
              }
            ]
          }
          this.patientoptions = options.options
          this.patientseries = series.series
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
            '#5d78ff',
            '#008FFB',
            '#FEB019',
            '#FF4560',
            '#775DD0',
            '#546E7A',
            '#26a69a',
            '#D10CE8'
          ]

          let options = {
            options: {
              chart: {
                id: 'payment-chart'
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
              },
              colors: colors
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
  }
}
</script>

<style></style>
