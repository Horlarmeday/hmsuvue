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
            Create Generic Drugs
            <small>Create a new generic drug</small>
          </h3>
        </div>
      </div>
      <div class="kt-portlet__body">
        <!--begin: Datatable -->
        <div class="row">
          <div class="col-xl-12">
            <div class="form-group">
              <label>Generic Name </label>
              <input
                type="text"
                class="form-control"
                v-model="name"
                placeholder="Generic Name"
              />
              <span class="form-text text-muted"
                >Please enter generic name.</span
              >
            </div>
            <div class="form-group">
              <label>Code </label>
              <input
                type="text"
                class="form-control"
                v-model="code"
                placeholder="Code"
              />
              <span class="form-text text-muted"
                >Please enter generic code.</span
              >
            </div>
          </div>
        </div>

        <div>
          <button
            v-if="!loading"
            @click="createGeneric"
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
                      v-model="input"
                      @keyup="getGeneric"
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
                <th>Generic Name</th>
                <th>Code</th>
                <th>Status</th>
                <th>Date Created</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="drugs.length == 0">
                <td colspan="9" align="center">No Generic Drugs</td>
              </tr>
              <tr v-for="(drug, index) in drugs" :key="drug._id">
                <td>
                  {{ index + 1 }}
                </td>
                <td>{{ drug.name }}</td>
                <td>{{ drug.code }}</td>
                <td>
                  <span
                    v-if="drug.status"
                    class="kt-badge kt-badge--success kt-badge--inline kt-badge--pill"
                    >Active</span
                  >
                  <span
                    v-else
                    class="kt-badge kt-badge--info kt-badge--inline kt-badge--pill"
                    >Inactive</span
                  >
                </td>
                <td>{{ drug.createdAt | moment('DD/MM/YYYY') }}</td>
                <td>
                  <button
                    v-if="!deletedata && drug._id !== currentDrug._id"
                    @click="deleteDrug(drug)"
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
                  <button
                    class="ml-3 btn btn-success btn-md btn-elevate"
                    data-toggle="modal"
                    data-target="#kt_modal_3"
                    @click="getOneGeneric(drug)"
                  >
                    Edit
                  </button>
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

        <!--begin::Modal-->
        <div
          class="modal fade"
          id="kt_modal_3"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Dispense {{ name }}
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div class="row">
                  <div class="col-xl-12">
                    <div class="form-group">
                      <label>Generic Name </label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="generic.name"
                        placeholder="Generic Name"
                      />
                      <span class="form-text text-muted"
                        >Please enter generic name.</span
                      >
                    </div>
                    <div class="form-group">
                      <label>Code </label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="generic.code"
                        placeholder="Code"
                      />
                      <span class="form-text text-muted"
                        >Please enter generic code.</span
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  v-if="!loading"
                  type="button"
                  class="btn btn-primary"
                  @click="updateGeneric"
                >
                  Update
                </button>
                <button
                  v-else
                  class="btn btn-brand kt-spinner kt-spinner--right 
                      kt-spinner--sm kt-spinner--light btn-elevate float-right"
                  disabled
                >
                  Updating...
                </button>
              </div>
            </div>
          </div>
        </div>

        <!--end::Modal-->

        <!--end: Datatable -->
      </div>
    </div>
  </div>
  <!-- end:: Content -->
</template>

<script>
import axios from '../../axios'
export default {
  name: 'generic',
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {
      name: '',
      code: '',
      drugs: [],
      generic: '',
      currentDrug: '',
      genericUrl: '/pharmacy/generic',
      genericOneUrl: '/pharmacy/generic/one',
      updategenericUrl: '/pharmacy/generic/update',
      loading: false,
      deletedata: false,

      currentPage: 1,
      pageCount: '',
      pageSize: '',
      rows: '',
      meta: '',
      input: ''
    }
  },
  mounted() {
    this.getGeneric()
  },
  methods: {
    handleError(error) {
      this.$iziToast.error({
        title: 'Error!',
        message: error.response.data
      })
    },
    createGeneric() {
      this.loading = true
      const data = {
        name: this.name,
        code: this.code
      }
      axios
        .post(this.genericUrl, data)
        .then(response => {
          this.name = ''
          this.code = ''
          this.loading = false
          this.drugs = response.data.data
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

    getGeneric() {
      axios
        .get(
          `${this.genericUrl}?currentPage=${this.currentPage}&search=${this.input}`
        )
        .then(response => {
          this.drugs = response.data.data.genericdrugs
          this.meta = response.data.data.meta
          this.rows = this.meta.count
          this.pageSize = this.meta.pageSize
          this.pageCount = this.meta.pageCount
        })
        .catch(error => {
          this.handleError(error)
        })
    },
    getOneGeneric(drug) {
      const data = {
        genericId: drug._id
      }
      axios
        .post(this.genericOneUrl, data)
        .then(response => {
          this.generic = response.data.data
        })
        .catch(error => {
          this.handleError(error)
        })
    },

    updateGeneric() {
      const data = {
        genericId: this.generic._id,
        generic: this.generic
      }
      axios
        .put(this.updategenericUrl, data)
        .then(response => {
          this.$iziToast.success({
            title: 'Success!',
            message: response.data.message
          })
          this.drugs = response.data.data
        })
        .catch(error => {
          this.handleError(error)
        })
    },

    deleteDrug(drug) {
      this.deletedata = true
      this.currentDrug = drug
      axios
        .delete(this.genericUrl, { data: { genericId: drug._id } })
        .then(response => {
          this.deletedata = false
          this.drugs = response.data.data
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
