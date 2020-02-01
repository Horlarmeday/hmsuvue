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
            Create Request
            <small>Create a new request</small>
          </h3>
        </div>
      </div>
      <div class="kt-portlet__body">
        <!--begin: Datatable -->
        <div class="row">
          <div class="col-xl-12">
            <div class="form-group">
              <label>Request For </label>
              <input
                type="text"
                v-model="input.item"
                class="form-control"
                readonly
              />
              <span class="form-text text-muted">Request item.</span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-12">
            <div class="form-group">
              <label>Quantity</label>
              <input
                type="number"
                class="form-control"
                v-model="input.quantity"
                placeholder="Quantity"
              />
              <span class="form-text text-muted">Please enter quantity.</span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-12">
            <div class="form-group">
              <label>Left Over</label>
              <input
                type="number"
                class="form-control"
                v-model="input.leftover"
                placeholder="Left Over"
              />
              <span class="form-text text-muted"
                >Please enter quantity left over.</span
              >
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-12">
            <div class="form-group">
              <label>Comments</label>
              <textarea
                col="30"
                class="form-control"
                rows="10"
                v-model="input.comment"
                placeholder="Comment"
                required
              >
              </textarea>
              <span class="form-text text-muted">Please enter comments.</span>
            </div>
          </div>
        </div>
        <div>
          <button
            v-if="!loading"
            @click="createRequest"
            class="btn btn-brand btn-elevate float-right"
          >
            Create Request
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
                      v-model="text"
                      @keyup="getRequests"
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
                <th>Item</th>
                <th>Quantity</th>
                <th>Comment</th>
                <th>Status</th>
                <th>Requested By</th>
                <th>Date Created</th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="requests.length == 0">
                <td colspan="9" align="center">No Requests</td>
              </tr>
              <tr v-for="(request, index) in requests" :key="request._id">
                <td>
                  {{ index + 1 }}
                </td>
                <td>{{ request.item }}</td>
                <td>{{ request.quantity }}</td>
                <td>{{ request.comment }}</td>
                <td>
                  <span
                    v-if="request.status == 'granted'"
                    class="kt-badge kt-badge--success kt-badge--inline kt-badge--pill"
                    >granted</span
                  >
                  <span
                    v-else-if="request.status == 'pending'"
                    class="kt-badge kt-badge--warning kt-badge--inline kt-badge--pill"
                    >pending</span
                  >
                  <span
                    v-else-if="request.status == 'declined'"
                    class="kt-badge kt-badge--danger kt-badge--inline kt-badge--pill"
                    >pending</span
                  >
                </td>
                <td>
                  <a href="#">
                    {{ request.creator.firstname }}
                    {{ request.creator.lastname }}
                  </a>
                </td>
                <td>{{ request.createdAt | moment('DD/MM/YYYY, h:ma') }}</td>
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

        <!--end: Datatable -->
      </div>
    </div>
  </div>
  <!-- end:: Content -->
</template>

<script>
import axios from '../../axios'
export default {
  name: 'makecardrequest',
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {
      input: {
        item: 'Card',
        leftover: '',
        quantity: '',
        comment: ''
      },
      drugs: [],
      labitems: [],
      requests: [],
      units: [],

      createrequesturl: '/staff/manager-request',
      requesturl: '/staff/staff-manager-requests',
      loading: false,

      currentPage: 1,
      text: '',
      pageCount: '',
      pageSize: '',
      rows: '',
      meta: 3,
      currentUser: ''
    }
  },
  mounted() {
    this.getPage()
  },
  methods: {
    handleError(error) {
      console.log(error)
      this.$iziToast.error({
        title: 'Error!',
        message: error.response.data
      })
    },
    setNull(obj, val) {
      Object.keys(obj).forEach(k => (obj[k] = val))
    },
    createRequest() {
      this.loading = true
      axios
        .post(this.createrequesturl, this.input)
        .then(response => {
          this.setNull(this.input, '')
          this.requests = response.data.data
          this.loading = false
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

    getRequests() {
      axios
        .get(
          `${this.requesturl}?currentPage=${this.currentPage}&search=${this.text}`
        )
        .then(response => {
          this.requests = response.data.data.requests
          this.meta = response.data.data.meta
          this.rows = this.meta.count
          this.pageSize = this.meta.pageSize
          this.pageCount = this.meta.pageCount
        })
        .catch(error => {
          this.handleError(error)
        })
    },
    pageChangeHandle(value) {
      if (value === 'next') {
        this.currentPage += 1
        this.getRequests()
      } else if (value === 'previous') {
        this.currentPage -= 1
        this.getRequests()
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
