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
                to="/create-service"
                class="btn btn-brand btn-elevate btn-icon-sm"
              >
                <i class="la la-plus"></i>
                New Record
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
                      id="generalSearch"
                    />
                    <span class="kt-input-icon__icon kt-input-icon__icon--left">
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
      <div class="kt-portlet__body ">
        <!--begin: Datatable -->
        <div class="dt-responsive table-responsive">
          <table class="table table-striped table-bordered nowrap">
            <thead>
              <tr>
                <th>S/N</th>
                <th>Name</th>
                <th>Description</th>
                <th>Status</th>
                <th>Date Created</th>
                <th>Created By</th>
                <!-- <th>Action</th> -->
              </tr>
            </thead>
            <tbody>
              <tr v-if="laboratories.length == 0">
                <td colspan="9" align="center">No Laboratories</td>
              </tr>
              <tr
                v-for="(laboratory, index) in laboratories"
                :key="laboratory._id"
              >
                <td>
                  {{ index + 1 }}
                </td>
                <td>{{ laboratory.name }}</td>
                <td>{{ laboratory.description }}</td>
                <td>
                  <label
                    v-if="laboratory.status"
                    class="kt-badge kt-badge--success kt-badge--inline kt-badge--pill"
                    >Active</label
                  >
                  <label
                    v-if="!laboratory.status"
                    class="kt-badge kt-badge--dark kt-badge--inline kt-badge--pill"
                    >Inactive</label
                  >
                </td>
                <td>{{ laboratory.createdAt | moment('DD/MM/YYYY') }}</td>
                <td>
                  <a href="#">
                    {{ laboratory.creator.firstname }}
                    {{ laboratory.creator.lastname }}
                  </a>
                </td>
                <!-- <td>
                  <button
                    v-if="!deletedata"
                    @click="deleteService(department)"
                    class="btn btn-danger btn-elevate kt-login__btn-primary"
                  >
                    Delete
                  </button>
                  <button
                    v-if="deletedata && department._id == currentDepartment._id"
                    class="btn btn-danger kt-spinner kt-spinner--right 
                      kt-spinner--sm kt-spinner--light btn-elevate float-right"
                    disabled
                  >
                    Deleting...
                  </button>
                </td> -->
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
  name: 'laboratoryTable',
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {
      laboratories: [],
      laboratoryUrl: '/admin/laboratory'
      //   currentService: '',
      //   deleteData: false
    }
  },
  mounted() {
    this.getServices()
  },
  methods: {
    handleError(error) {
      this.deleteData = false
      this.$iziToast.error({
        title: 'Error!',
        message: error.response.data
      })
    },
    getServices() {
      axios
        .get(this.laboratoryUrl)
        .then(response => {
          this.laboratories = response.data.data
          //   let notes = this.nursenotes
          //   for (let i = 0; i < notes.length; i++) {
          //     notes[i].url = this.patienturl + notes[i]._id
          //   }
        })
        .catch(error => {
          this.handleError(error)
        })
      // },
      // deleteDepartment: function(department) {
      //   this.deleteData = true
      //   this.currentDepartment = department
      //   axios
      //     .delete(this.departmentsUrl, { data: { departmentId: department._id } })
      //     .then(response => {
      //       this.departments = response.data.data
      //       this.deleteData = false
      //       this.$iziToast.success({
      //         title: 'Error!',
      //         message: response.data.message
      //       })
      //       //   let reports = this.reports
      //       //   for (let i = 0; i < patients.length; i++) {
      //       //     patients[i].url = this.imageurl + patients[i].photo
      //       //   }
      //     })
      //     .catch(error => {
      //       this.handleError(error)
      //     })
    }
  }
}
</script>

<style></style>
