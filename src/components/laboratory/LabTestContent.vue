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
            Create Lab Test
            <small>Create a new lab test</small>
          </h3>
        </div>
      </div>
      <div class="kt-portlet__body">
        <!--begin: Datatable -->
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Name </label>
              <input
                type="text"
                class="form-control"
                v-model="name"
                placeholder="Test Name"
              />
              <span class="form-text text-muted">Please enter test name.</span>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Laboratory </label>
              <select v-model="laboratoryId" class="form-control" required>
                <option selected disabled>Select</option>
                <option
                  v-for="laboratory in laboratories"
                  :key="laboratory._id"
                  :value="laboratory._id"
                  >{{ laboratory.name }}</option
                >
              </select>
              <span class="form-text text-muted"
                >Please select laboratory.</span
              >
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Price </label>
              <input
                type="number"
                class="form-control"
                v-model="price"
                placeholder="Price"
                required
              />
              <span class="form-text text-muted">Please enter price.</span>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Code </label>
              <input
                type="text"
                class="form-control"
                v-model="code"
                placeholder="Code"
                required
              />
              <span class="form-text text-muted">Please enter code.</span>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Capitated? </label>
              <div class="col-3">
                <span class="kt-switch kt-switch--outline kt-switch--primary">
                  <label>
                    <input
                      ref="capitate"
                      type="checkbox"
                      checked="unchecked"
                      v-model="isCapitated"
                      required
                    />
                    <span></span>
                  </label>
                </span>
              </div>
              <span class="form-text text-muted"
                >Please select appropriate side.</span
              >
            </div>
          </div>
        </div>

        <div>
          <button
            v-if="!loading"
            @click="createTest"
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
                <th>Price (₦)</th>
                <th>Code</th>
                <th>Laboratory</th>
                <th>Status</th>
                <th>Date Created</th>
                <th>Capitated</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="tests.length == 0">
                <td colspan="9" align="center">No Test</td>
              </tr>
              <tr v-for="(test, index) in tests" :key="test._id">
                <td>
                  {{ index + 1 }}
                </td>
                <td>{{ test.name }}</td>
                <td>{{ test.price }}</td>
                <td>{{ test.code }}</td>
                <td>{{ test.laboratory.name }}</td>
                <td>
                  <span
                    v-if="test.status"
                    class="kt-badge kt-badge--success kt-badge--inline kt-badge--pill"
                    >Active</span
                  >
                  <span
                    v-else
                    class="kt-badge kt-badge--info kt-badge--inline kt-badge--pill"
                    >Inactive</span
                  >
                </td>
                <td>{{ test.createdAt | moment('DD/MM/YYYY') }}</td>
                <td>
                  <span
                    v-if="test.isCapitated"
                    class="kt-badge kt-badge--success kt-badge--inline kt-badge--pill"
                    >Yes</span
                  >
                  <span
                    v-else
                    class="kt-badge kt-badge--info kt-badge--inline kt-badge--pill"
                    >No</span
                  >
                </td>
                <td>
                  <button
                    v-if="!deletedata && test._id !== currentTest._id"
                    @click="deleteTest(test)"
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
  name: 'labtest',
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {
      name: '',
      price: '',
      laboratoryId: '',
      code: '',
      tests: [],
      laboratories: [],
      currentTest: '',
      testUrl: '/laboratory/test',
      laboratoryUrl: '/admin/laboratory',
      loading: false,
      deletedata: false,
      isCapitated: null
    }
  },
  mounted() {
    this.getTests()
    this.testPage()
  },
  methods: {
    handleError(error) {
      this.$iziToast.error({
        title: 'Error!',
        message: error.response.data
      })
    },
    createTest() {
      this.loading = true

      this.$refs.capitate.checked
        ? (this.isCapitated = true)
        : (this.isCapitated = false)

      const data = {
        name: this.name,
        price: this.price,
        code: this.code,
        laboratoryId: this.laboratoryId,
        isCapitated: this.isCapitated
      }
      axios
        .post(this.testUrl, data)
        .then(response => {
          this.name = ''
          this.price = ''
          this.code = ''
          this.laboratoryId = ''
          this.loading = false
          this.tests = response.data.data
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

    getTests() {
      axios
        .get(this.testUrl)
        .then(response => {
          this.tests = response.data.data
        })
        .catch(error => {
          this.handleError(error)
        })
    },

    testPage() {
      axios
        .get(this.laboratoryUrl)
        .then(response => {
          this.laboratories = response.data.data
        })
        .catch(error => {
          this.handleError(error)
        })
    },

    deleteTest(test) {
      this.deletedata = true
      this.currentTest = test
      axios
        .delete(this.testUrl, { data: { testId: test._id } })
        .then(response => {
          this.deletedata = false
          this.tests = response.data.data
          this.$iziToast.success({
            title: 'Success!',
            message: response.data.message
          })
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
