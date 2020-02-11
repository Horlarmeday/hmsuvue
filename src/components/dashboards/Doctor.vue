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
                    Number of appointments you attended to
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
                    Doctors
                  </h4>
                  <span class="kt-widget24__desc">
                    Total number of doctors
                  </span>
                </div>
                <span class="kt-widget24__stats kt-font-success">
                  {{ doctorsCount }}
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
                Calendar
              </h3>
            </div>
          </div>
          <div class="kt-portlet__body">
            <!-- <div class="calendar-parent">
              <calendar-view
                :show-date="showDate"
                :do-emit-item-mouse-events="doEmitItemMouseEvents"
                :events="fcevents"
                class="theme-default"
              >
                <calendar-view-header
                  slot="header"
                  slot-scope="t"
                  :header-props="t.headerProps"
                  @input="setShowDate"
                />
              </calendar-view>
            </div> -->
            <fullcalendar
              style="margin: 0; background:whitesmoke"
              class="test-fc"
              :events="fcevents"
              locale="en"
              @changeMonth="changeMonth"
              @eventClick="eventClick"
              @dayClick="dayClick"
              @moreClick="moreClick"
            >
              <template
                slot="fc-event-card"
                slot-scope="p"
                :fc-body-card="p.fcBodyCard"
              >
                <p><i class="fa">sadfsd</i> {{ p.event.title }} test</p>
              </template>
            </fullcalendar>
          </div>
        </div>

        <!--end:: Widgets/Tasks -->
      </div>
      <div class="col-xl-6">
        <!--begin:: Widgets/New Users-->
        <div class="kt-portlet kt-portlet--tabs kt-portlet--height-fluid">
          <div class="kt-portlet__head">
            <div class="kt-portlet__head-label">
              <h3 class="kt-portlet__head-title">
                Your Appointments
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
                        <th>Appointment ID</th>
                        <th>Patient Name</th>
                        <th>Type</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody v-if="appointments.length == 0">
                      <tr>
                        <td colspan="9" align="center">
                          No Recent Appointments
                        </td>
                      </tr>
                    </tbody>
                    <tbody
                      v-for="(appointment, index) in appointments"
                      :key="appointment._id"
                    >
                      <tr v-if="!appointment.taken">
                        <td>
                          {{ index + 1 }}
                        </td>
                        <td>{{ appointment.uniqueid }}</td>
                        <td>
                          <router-link
                            :to="appointment.url"
                            class="kt-widget4__username"
                          >
                            {{ appointment.patient.firstname }}
                            {{ appointment.patient.lastname }}
                          </router-link>
                        </td>
                        <td>{{ appointment.type }}</td>
                        <td>
                          {{
                            appointment.appointmentdate | moment('DD/MM/YYYY')
                          }}
                        </td>
                        <td>
                          {{ appointment.appointmenttime | moment('h:mmA') }}
                        </td>
                        <td>
                          <span
                            v-if="!appointment.taken"
                            class="kt-badge kt-badge--warning kt-badge--inline kt-badge--pill"
                            >Pending</span
                          >
                          <span
                            v-else
                            class="kt-badge kt-badge--success kt-badge--inline kt-badge--pill"
                            >Taken</span
                          >
                        </td>
                        <td>
                          <router-link
                            :to="appointment.consultationurl"
                            class="btn btn-bold btn-label-brand btn-sm"
                            >Take Up</router-link
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
                In-waiting Patients
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
                        <th>QMS Number</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-if="triages.length == 0">
                        <td colspan="9" align="center">No Waiting Patients</td>
                      </tr>
                    </tbody>
                    <tbody v-for="(triage, index) in triages" :key="triage._id">
                      <tr v-if="triage.patient">
                        <td>
                          {{ index + 1 }}
                        </td>
                        <td>
                          <router-link to="#" class="kt-widget4__username">
                            {{ triage.patient.firstname }}
                            {{ triage.patient.lastname }}
                          </router-link>
                        </td>
                        <td>{{ triage.qms }}</td>
                        <td>
                          <span
                            v-if="!triage.taken"
                            class="kt-badge kt-badge--warning kt-badge--inline kt-badge--pill"
                            >Pending</span
                          >
                          <span
                            v-else
                            class="kt-badge kt-badge--info kt-badge--inline kt-badge--pill"
                            >Taken</span
                          >
                        </td>
                        <td>
                          <router-link
                            :to="triage.triageurl"
                            class="btn btn-bold btn-label-brand btn-sm"
                            >Take Up</router-link
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
                In-waiting Dependants
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
                        <th>QMS Number</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-if="dependanttriages.length == 0">
                        <td colspan="9" align="center">
                          No Waiting Dependants
                        </td>
                      </tr>
                    </tbody>
                    <tbody
                      v-for="(triage, index) in dependanttriages"
                      :key="triage._id"
                    >
                      <tr v-if="triage.dependant">
                        <td>
                          {{ index + 1 }}
                        </td>
                        <td>
                          <router-link to="#" class="kt-widget4__username">
                            {{ triage.dependant.name }}
                          </router-link>
                        </td>
                        <td>{{ triage.qms }}</td>
                        <td>
                          <span
                            v-if="!triage.taken"
                            class="kt-badge kt-badge--warning kt-badge--inline kt-badge--pill"
                            >Pending</span
                          >
                          <span
                            v-else
                            class="kt-badge kt-badge--info kt-badge--inline kt-badge--pill"
                            >Taken</span
                          >
                        </td>
                        <td>
                          <router-link
                            :to="triage.dependanttriageurl"
                            class="btn btn-bold btn-label-brand btn-sm"
                            >Take Up</router-link
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
    </div>

    <!--End::Section-->

    <!--End::Dashboard 1-->
  </div>
  <!-- end:: Content -->
</template>

<script>
import axios from '../../axios'
import fullcalendar from 'vue-fullcalendar'
// import { CalendarView, CalendarViewHeader } from 'vue-simple-calendar'
// require('vue-simple-calendar/static/css/default.css')
// require('vue-simple-calendar/static/css/holidays-us.css')
const demoevents = [
  {
    title: 'Appointment',
    start: '2019-12-22',
    cssClass: 'blue',
    YOUR_DATA: 'Lorem ipsum dolor sit incid idunt ut'
  },
  {
    title: 'Another',
    start: '2019-12-22',
    cssClass: 'blue',
    YOUR_DATA: 'Lorem ipsum dolor sit incid idunt ut'
  }
]
export default {
  name: 'doctordasboard',
  components: {
    fullcalendar
    // CalendarView,
    // CalendarViewHeader
  },
  data() {
    return {
      appointments: [],
      triages: [],
      dependanttriages: [],
      totalPatients: '',
      triagesCount: '',
      doctorsCount: '',
      appointmentCount: '',
      landingPageUrl: '/dashboard/doctor',
      imageurl: 'http://localhost:3000/static/uploads/',
      fcevents: demoevents,
      showDate: new Date()
      //   doEmitItemMouseEvents: true
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
        .get(this.landingPageUrl)
        .then(response => {
          this.appointments = response.data.data.appointments
          this.triages = response.data.data.triages
          this.dependanttriages = response.data.data.triages
          this.totalPatients = response.data.data.patientCount
          this.triagesCount = response.data.data.triagesCount
          this.doctorsCount = response.data.data.doctorsCount
          this.appointmentCount = response.data.data.appointmentCount
          let appointments = this.appointments
          let triages = this.triages
          let dependanttriages = this.dependanttriages
          //   let demoevents = []
          for (let i = 0; i < appointments.length; i++) {
            appointments[i].url = '/patient/' + appointments[i].patient._id
            appointments[i].consultationurl =
              '/appointment-patient/' + appointments[i].patient._id
          }

          for (let i = 0; i < triages.length; i++) {
            if (triages[i].patient) {
              triages[i].url = '/patient/' + triages[i].patient._id
              triages[i].triageurl = '/triage-patient/' + triages[i].patient._id
            }
          }

          for (let i = 0; i < dependanttriages.length; i++) {
            if (triages[i].dependant) {
              dependanttriages[i].dependanttriageurl =
                '/triage-dependant/' + dependanttriages[i].dependant._id
            }
          }
        })
        .catch(error => {
          this.handleError(error)
        })
    },
    changeMonth(start, end, current) {
      this.$iziToast.success({
        title: 'Success!',
        message: 'changeMonth',
        start,
        end,
        current
      })
      // console.log('changeMonth', start, end, current)
    },
    eventClick(event, jsEvent, pos) {
      this.$iziToast.success({
        title: 'Success!',
        message: 'eventClick',
        event,
        jsEvent,
        pos
      })
      // console.log('eventClick', event, jsEvent, pos)
    },
    dayClick(day, jsEvent) {
      this.$iziToast.success({
        title: 'Success!',
        message: 'dayClick',
        day,
        jsEvent
      })
      // console.log('dayClick', day, jsEvent)
    },
    moreClick(day, events, jsEvent) {
      this.$iziToast.success({
        title: 'Success!',
        message: 'moreCLick',
        day,
        events,
        jsEvent
      })
      // console.log('moreCLick', day, events, jsEvent)
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

<style>
.fc-event::before {
  display: block;
  content: ' ';
  position: absolute;
  height: 7px;
  width: 7px;
  border-radius: 50%;
  top: 0.5rem;
  left: 0.1rem;
  background-color: aliceblue;
}

.blue {
  background: rgb(6, 6, 170) !important;
  color: whitesmoke !important;
}
</style>
