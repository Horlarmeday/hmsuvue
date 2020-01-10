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
            Create Discharge/Transfer Form for {{ patient.firstname }}
            {{ patient.lastname }}
            <small>Create a new discharge/transfer record</small>
          </h3>
        </div>
      </div>
      <div class="kt-portlet__body">
        <!--begin: Datatable -->
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Type </label>
              <select v-model="input.type" class="form-control">
                <option disabled>Select</option>
                <option value="Discharge">Discharge</option>
                <option value="Death">Death</option>
                <option value="Referral">Referral</option>
                <option value="Lama">Lama</option>
                <option value="Transfer">Transfer</option>
              </select>
              <span class="form-text text-muted">Please select type.</span>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Date</label>
              <datetime
                input-class="form-control"
                type="date"
                v-model="input.date"
              ></datetime>
              <span class="form-text text-muted">Please select date.</span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Time </label>
              <datetime
                input-class="form-control"
                type="time"
                v-model="input.time"
              ></datetime>
              <span class="form-text text-muted">Please select time .</span>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Conditions of Patient on Discharge</label>
              <input
                type="text"
                class="form-control"
                v-model="input.comment"
                placeholder="Optional"
              />
              <span class="form-text text-muted"
                >Please enter condition of patient.</span
              >
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Ward</label>
              <select v-model="input.ward" class="form-control">
                <option disabled>Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Children">Children</option>
                <option value="Pediatrics">Pediatrics</option>
                <option value="IE">I&E</option>
                <option value="Labour">Labour</option>
              </select>
              <span class="form-text text-muted">Please select ward.</span>
            </div>
          </div>
          <div v-if="input.type === 'Transfer'" class="col-xl-6">
            <div class="form-group">
              <label>Transfer To </label>
              <input
                type="text"
                class="form-control"
                v-model="input.transferto"
                placeholder="Transfer To"
              />
              <span class="form-text text-muted"
                >Please enter where patient is transferred to.</span
              >
            </div>
          </div>
        </div>

        <div>
          <button
            v-if="!loading"
            @click="createDischarge"
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
                <th>Type</th>
                <th>Date</th>
                <th>Time</th>
                <th>Ward</th>
                <th>Transfer</th>
                <th>Comment</th>
                <th>Date Created</th>
                <th>Created By</th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="discharges.length == 0">
                <td colspan="15" align="center">No Entries</td>
              </tr>
              <tr v-for="(discharge, index) in discharges" :key="discharge._id">
                <td>
                  {{ index + 1 }}
                </td>
                <td>{{ discharge.type }}</td>
                <td>{{ discharge.date | moment('DD/MM/YYYY') }}</td>
                <td>{{ discharge.time | moment('h:mma') }}</td>
                <td>{{ discharge.ward }}</td>
                <td>{{ discharge.transferto }}</td>
                <td>{{ discharge.comment }}</td>

                <td>{{ discharge.createdAt | moment('DD/MM/YYYY') }}</td>
                <td>
                  {{ discharge.creator.firstname }}
                  {{ discharge.creator.lastname }}
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
import { Datetime } from 'vue-datetime'
export default {
  name: 'dischargeform',
  props: {
    title: {
      type: String
    }
  },
  components: {
    datetime: Datetime
  },
  data() {
    return {
      patient: '',
      discharges: [],
      input: {
        date: '',
        time: '',
        comment: '',
        type: '',
        ward: '',
        transferto: ''
      },

      currentPage: 1,
      landingpageUrl: '/patient/',
      dischargeUrl: '/patient/discharge/',
      loading: false
    }
  },
  mounted() {
    this.getPage()
    this.getDischarge()
  },
  methods: {
    handleError(error) {
      this.$iziToast.error({
        title: 'Error!',
        message: error.response.data
      })
    },
    createDischarge() {
      this.loading = true
      axios
        .post(this.dischargeUrl + this.$route.params.id, this.input)
        .then(response => {
          this.input = ''
          this.loading = false
          this.discharges = response.data.data
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

    getDischarge() {
      axios
        .get(this.dischargeUrl + this.$route.params.id)
        .then(response => {
          this.discharges = response.data.data
        })
        .catch(error => {
          this.handleError(error)
        })
    }
  },
  computed: {
    irows() {
      return this.discharges.length
    }
  }
}
</script>

<style></style>
