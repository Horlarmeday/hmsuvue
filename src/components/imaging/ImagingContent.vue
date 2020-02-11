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
            Create Imaging
            <small>Create a new imaging record</small>
          </h3>
        </div>
      </div>
      <div class="kt-portlet__body">
        <!--begin: Datatable -->
        <div class="row">
          <div class="col-xl-12">
            <div class="form-group">
              <label>Imaging Name </label>
              <input
                type="text"
                class="form-control"
                v-model="name"
                placeholder="Imaging Name"
              />
              <span class="form-text text-muted"
                >Please enter imaging name.</span
              >
            </div>
          </div>
          <div class="col-xl-12">
            <div class="form-group">
              <label>Description </label>
              <input
                type="text"
                class="form-control"
                v-model="description"
                placeholder="Description"
              />
              <span class="form-text text-muted"
                >Please enter description.</span
              >
            </div>
          </div>
        </div>

        <div>
          <button
            v-if="!loading"
            @click="createImaging"
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
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="imagings.length == 0">
                <td colspan="9" align="center">No Imaging</td>
              </tr>
              <tr v-for="(imaging, index) in imagings" :key="imaging._id">
                <td>
                  {{ index + 1 }}
                </td>
                <td>{{ imaging.name }}</td>
                <td>{{ imaging.description }}</td>
                <td>
                  <span
                    v-if="imaging.status"
                    class="kt-badge kt-badge--success kt-badge--inline kt-badge--pill"
                    >Active</span
                  >
                  <span
                    v-else
                    class="kt-badge kt-badge--info kt-badge--inline kt-badge--pill"
                    >Inactive</span
                  >
                </td>
                <td>{{ imaging.createdAt | moment('DD/MM/YYYY') }}</td>
                <td>
                  <button
                    v-if="!deletedata && imaging._id !== currentImaging._id"
                    @click="deleteImaging(imaging)"
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
                  <router-link :to="imaging.url" class="btn btn-brand ml-3"
                    >Create Investigation/View</router-link
                  >
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
  name: 'imaging',
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {
      name: '',
      description: '',
      imagings: [],
      currentImaging: '',
      imagingUrl: '/imaging/',
      loading: false,
      deletedata: false
    }
  },
  mounted() {
    this.getImaging()
  },
  methods: {
    handleError(error) {
      this.$iziToast.error({
        title: 'Error!',
        message: error.response.data
      })
    },
    createImaging() {
      this.loading = true
      const data = {
        name: this.name,
        description: this.description
      }
      axios
        .post(this.imagingUrl, data)
        .then(response => {
          this.name = ''
          this.description = ''
          this.loading = false
          this.imagings = response.data.data
          this.$iziToast.success({
            title: 'Success!',
            message: response.data.message
          })
          let imagings = this.imagings
          for (let i = 0; i < imagings.length; i++) {
            imagings[i].url = '/investigation/' + imagings[i]._id
          }
        })
        .catch(error => {
          this.loading = false
          this.handleError(error)
        })
    },

    getImaging() {
      axios
        .get(this.imagingUrl)
        .then(response => {
          this.imagings = response.data.data
          let imagings = this.imagings
          for (let i = 0; i < imagings.length; i++) {
            imagings[i].url = '/investigation/' + imagings[i]._id
          }
        })
        .catch(error => {
          this.handleError(error)
        })
    },

    deleteImaging(imaging) {
      this.deletedata = true
      this.currentImaging = imaging
      axios
        .delete(this.imagingUrl, { data: { imagingId: imaging._id } })
        .then(response => {
          this.deletedata = false
          this.imagings = response.data.data
          this.$iziToast.success({
            title: 'Success!',
            message: response.data.message
          })
          let imagings = this.imagings
          for (let i = 0; i < imagings.length; i++) {
            imagings[i].url = '/investigation/' + imagings[i]._id
          }
        })
        .catch(error => {
          this.loading = false
          this.handleError(error)
        })
    }
  }
}
</script>

<style></style>
