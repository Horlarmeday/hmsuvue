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
            Create
            <span
              style="font-weight: 700;font-size:12px"
              class="kt-badge kt-badge--success kt-badge--inline"
              >{{ hmoname.name }}</span
            >
            Enrollee
            <small>Create a new enrollee record</small>
          </h3>
        </div>
      </div>
      <div class="kt-portlet__body">
        <!--begin: Datatable -->
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Enrollee Name </label>
              <input
                type="text"
                class="form-control"
                v-model="name"
                placeholder="Enrollee Name"
              />
              <span class="form-text text-muted"
                >Please enter enrollee name.</span
              >
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Enrollee ID </label>
              <input
                type="text"
                class="form-control"
                v-model="enrolleeId"
                placeholder="Enrollee ID"
              />
              <span class="form-text text-muted"
                >Please enter enrollee ID.</span
              >
            </div>
          </div>
        </div>

        <div>
          <button
            v-if="!loading"
            @click="createEnrollee"
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
                      id="generalSearch"
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
                        <option value="1">Pending</option>
                        <option value="2">Delivered</option>
                        <option value="3">Canceled</option>
                        <option value="4">Success</option>
                        <option value="5">Info</option>
                        <option value="6">Danger</option>
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
                <th>Name</th>
                <th>Enrollee ID</th>
                <th>Status</th>
                <th>Date Created</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="enrollees.length == 0">
                <td colspan="9" align="center">No Enrollees</td>
              </tr>
              <tr v-for="(enrollee, index) in enrollees" :key="enrollee._id">
                <td>
                  {{ index + 1 }}
                </td>
                <td>{{ enrollee.name }}</td>
                <td>{{ enrollee.enrolleeId }}</td>
                <td>
                  <span
                    v-if="enrollee.status"
                    class="kt-badge kt-badge--success kt-badge--inline kt-badge--pill"
                    >Active</span
                  >
                  <span
                    v-else
                    class="kt-badge kt-badge--info kt-badge--inline kt-badge--pill"
                    >Inactive</span
                  >
                </td>
                <td>{{ enrollee.createdAt | moment('DD/MM/YYYY') }}</td>
                <td>
                  <button
                    v-if="!deletedata && enrollee._id !== currentEnrollee._id"
                    @click="deleteEnrollee(enrollee)"
                    class="btn btn-danger btn-md btn-elevate kt-login__btn-primary"
                  >
                    Delete
                  </button>
                  <button
                    v-else
                    class="btn btn-danger btn-md kt-spinner kt-spinner--right 
                      kt-spinner--sm kt-spinner--light btn-elevate"
                    disabled
                  >
                    Deleting...
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
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
  name: 'enrollee',
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {
      name: '',
      enrolleeId: '',
      enrollees: [],
      hmoname: '',
      currentEnrollee: '',
      enrolleeUrl: '/admin/enrollee/',
      currentHMOurl: '/admin/current/hmo/',
      loading: false,
      deletedata: false
    }
  },
  mounted() {
    this.getEnrollees()
    this.getCurrentHMO()
  },
  methods: {
    handleError(error) {
      this.$iziToast.error({
        title: 'Error!',
        message: error.response.data
      })
    },
    createEnrollee() {
      this.loading = true
      const data = {
        name: this.name,
        enrolleeId: this.enrolleeId
      }
      axios
        .post(this.enrolleeUrl + this.$route.params.id, data)
        .then(response => {
          this.name = ''
          this.enrolleeId = ''
          this.loading = false
          this.enrollees = response.data.data
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

    getEnrollees() {
      axios
        .get(this.enrolleeUrl + this.$route.params.id)
        .then(response => {
          this.enrollees = response.data.data
        })
        .catch(error => {
          this.handleError(error)
        })
    },

    getCurrentHMO() {
      axios
        .get(this.currentHMOurl + this.$route.params.id)
        .then(response => {
          this.hmoname = response.data.data
        })
        .catch(error => {
          this.handleError(error)
        })
    },

    deleteEnrollee(enrollee) {
      this.deletedata = true
      this.currentEnrollee = enrollee
      axios
        .delete(this.enrolleeUrl + this.$route.params.id, {
          data: { enrolleeId: enrollee._id }
        })
        .then(response => {
          this.deletedata = false
          this.enrollees = response.data.data
          this.$iziToast.success({
            title: 'Success!',
            message: response.data.message
          })
        })
        .catch(error => {
          this.deletedata = false
          this.handleError(error)
        })
    }
  }
}
</script>

<style></style>
