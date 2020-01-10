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
            Create Ward Round for {{ patient.firstname }} {{ patient.lastname }}
            <small>Create a new ward round</small>
          </h3>
        </div>
      </div>
      <div class="kt-portlet__body">
        <!--begin: Datatable -->
        <div class="row">
          <div class="col-xl-12">
            <div class="form-group">
              <label>Lead Doctor </label>
              <select v-model="examinerId" class="form-control">
                <option disabled>Select</option>
                <option
                  v-for="staff in staffs"
                  :key="staff._id"
                  :value="staff._id"
                  >{{ staff.firstname }} {{ staff.lastname }}</option
                >
              </select>
              <span class="form-text text-muted"
                >Please select lead doctor.</span
              >
            </div>
          </div>
          <div class="col-xl-12">
            <div class="form-group">
              <label>Ward Round</label>
              <textarea
                v-model="wardround"
                class="form-control"
                cols="30"
                rows="10"
              ></textarea>
              <span class="form-text text-muted">Please enter ward round.</span>
            </div>
          </div>
        </div>

        <div>
          <button
            v-if="!loading"
            @click="createWardRound"
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
                <th>Lead Doctor</th>
                <th>Ward Round</th>
                <th>Date Created</th>
                <th>Created By</th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="wardrounds.length == 0">
                <td colspan="9" align="center">No Entries</td>
              </tr>
              <tr v-for="(round, index) in wardrounds" :key="round._id">
                <td>
                  {{ index + 1 }}
                </td>
                <td>
                  {{ round.examiner.firstname }} {{ round.examiner.lastname }}
                </td>
                <td>{{ round.wardround }}</td>
                <td>{{ round.createdAt | moment('DD/MM/YYYY') }}</td>
                <td>
                  {{ round.creator.firstname }} {{ round.creator.lastname }}
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
  name: 'unit',
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {
      patient: '',
      wardrounds: [],
      examinerId: '',
      wardround: '',

      currentPage: 1,
      staffs: [],
      landingpageUrl: '/patient/',
      wardroundUrl: '/patient/wardround/',
      loading: false
    }
  },
  mounted() {
    this.getPage()
    this.getWardRound()
  },
  methods: {
    handleError(error) {
      this.$iziToast.error({
        title: 'Error!',
        message: error.response.data
      })
    },
    createWardRound() {
      this.loading = true
      const data = {
        wardround: this.wardround,
        examinerId: this.examinerId
      }
      axios
        .post(this.wardroundUrl + this.$route.params.id, data)
        .then(response => {
          this.wardround = ''
          this.examinerId = ''
          this.loading = false
          this.wardrounds = response.data.data
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

    getWardRound() {
      axios
        .get(this.wardroundUrl + this.$route.params.id)
        .then(response => {
          this.wardrounds = response.data.data.wardrounds
          this.staffs = response.data.data.staffs
        })
        .catch(error => {
          this.handleError(error)
        })
    }
  },
  computed: {
    irows() {
      return this.wardrounds.length
    }
  }
}
</script>

<style></style>
