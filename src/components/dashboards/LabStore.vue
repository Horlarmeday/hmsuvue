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
                    Number of appointments created
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
                    Laboratory Store
                  </h4>
                  <span class="kt-widget24__desc">
                    Total number of laboratory store personnel
                  </span>
                </div>
                <span class="kt-widget24__stats kt-font-success">
                  {{ labstoreCount }}
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
      <div class="col-xl-12">
        <!--begin:: Widgets/Tasks -->
        <div class="kt-portlet kt-portlet--tabs kt-portlet--height-fluid">
          <div class="kt-portlet__head">
            <div class="kt-portlet__head-label">
              <h3 class="kt-portlet__head-title">
                Requests
              </h3>
            </div>
          </div>
          <div class="kt-portlet__body">
            <!--begin: Search Form -->
            <div
              class="kt-form kt-form--label-right kt-margin-t-20 kt-margin-b-10"
            >
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
                        <span
                          class="kt-input-icon__icon kt-input-icon__icon--left"
                        >
                          <span><i class="la la-search"></i></span>
                        </span>
                      </div>
                    </div>
                    <div class="col-md-4 kt-margin-b-20-tablet-and-mobile">
                      <div class="kt-form__group kt-form__group--inline">
                        <div class="kt-form__label">
                          <label>Filter:</label>
                        </div>
                        <div class="kt-form__control">
                          <select
                            class="form-control bootstrap-select"
                            id="kt_form_status"
                            v-model="date"
                          >
                            <option value="">Select</option>
                            <option value="today">Today</option>
                            <option value="week">This Week</option>
                            <option value="30days">Last 30 Days</option>
                            <option value="total">Total</option>
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
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Unit</th>
                    <th>Inventory</th>
                    <th>Comment</th>
                    <th>Status</th>
                    <th>Requested By</th>
                    <th>Date Created</th>
                    <th>Action</th>
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
                    <td>{{ request.item.name }}</td>
                    <td>{{ request.quantity }}</td>
                    <td>{{ request.unit }}</td>
                    <td>{{ request.inventory }}</td>
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
                    <td>
                      {{ request.createdAt | moment('DD/MM/YYYY, h:ma') }}
                    </td>
                    <td>
                      <button class="btn btn-success btn-elevate mr-3">
                        Approve
                      </button>
                      <button class="btn btn-danger btn-elevate">
                        Decline
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="card-footer">
              <b-pagination
                class="float-right"
                v-model="currentPage"
                :per-page="10"
                first-text="First"
                prev-text="Prev"
                next-text="Next"
                last-text="Last"
              ></b-pagination>
            </div>

            <!--end: Datatable -->
          </div>
        </div>

        <!--end:: Widgets/Tasks -->
      </div>
      <div class="col-xl-12">
        <!--begin:: Widgets/Tasks -->
        <div class="kt-portlet kt-portlet--tabs kt-portlet--height-fluid">
          <div class="kt-portlet__head">
            <div class="kt-portlet__head-label">
              <h3 class="kt-portlet__head-title">
                Store Items
              </h3>
            </div>
          </div>
          <div class="kt-portlet__body">
            <!--begin: Search Form -->
            <div
              class="kt-form kt-form--label-right kt-margin-t-20 kt-margin-b-10"
            >
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
                          @keyup="dashboard"
                        />
                        <span
                          class="kt-input-icon__icon kt-input-icon__icon--left"
                        >
                          <span><i class="la la-search"></i></span>
                        </span>
                      </div>
                    </div>
                    <div class="col-md-4 kt-margin-b-20-tablet-and-mobile">
                      <div class="kt-form__group kt-form__group--inline">
                        <div class="kt-form__label">
                          <label>Filter:</label>
                        </div>
                        <div class="kt-form__control">
                          <select
                            class="form-control bootstrap-select"
                            id="kt_form_status"
                            v-model="date"
                          >
                            <option value="">Select</option>
                            <option value="today">Today</option>
                            <option value="week">This Week</option>
                            <option value="30days">Last 30 Days</option>
                            <option value="total">Total</option>
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
                    <th>Item Name</th>
                    <th>Quantity</th>
                    <th>LeftOver</th>
                    <th>Shelf</th>
                    <th>Unit</th>
                    <th>Expiry Date</th>
                    <th>Created By</th>
                    <th>Date Received</th>
                    <th>Dispense History</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-if="items.length == 0">
                    <td colspan="9" align="center">No Items</td>
                  </tr>
                  <tr v-for="(item, index) in items" :key="item._id">
                    <td>
                      {{ index + 1 }}
                    </td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.quantity }}</td>
                    <td>
                      <span
                        style="color: purple; font-weight:700;"
                        v-if="item.rquantity"
                        >{{ item.rquantity }}
                        <label
                          v-if="item.rquantity && item.rquantity <= 50"
                          class="kt-badge kt-badge--danger kt-badge--inline float-right"
                          >danger</label
                        >
                      </span>
                      <span style="color: purple; font-weight:700;" v-else
                        >{{ item.quantity }}
                        <label
                          v-if="item.rquantity && item.rquantity <= 50"
                          class="kt-badge kt-badge--danger kt-badge--inline float-right"
                          >danger</label
                        >
                      </span>
                    </td>
                    <td>{{ item.shelf }}{{ item.shelfno }}</td>
                    <td>{{ item.unit }}</td>
                    <td>{{ item.expiration | moment('DD/MM/YYYY') }}</td>
                    <td>
                      <a href="#">
                        {{ item.creator.firstname }} {{ item.creator.lastname }}
                      </a>
                    </td>
                    <td>{{ item.createdAt | moment('ddd, MMM Do YYYY') }}</td>
                    <td>
                      <a
                        href="#"
                        class="btn btn-dark btn-sm"
                        data-toggle="modal"
                        data-target="#kt_modal_3"
                        @click="getDispenseHistory(item)"
                        >View</a
                      >
                    </td>
                    <td>
                      <a
                        href="#"
                        class="btn btn-bold btn-label-brand btn-sm"
                        data-toggle="modal"
                        data-target="#kt_modal_1"
                        @click="getLabItem(item)"
                        >Dispense</a
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="card-footer">
              <p class="float-left">
                Showing {{ pageSize }} of {{ rows }} entries
              </p>
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
              id="kt_modal_1"
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
                          <label>Quantity</label>
                          <input
                            v-if="item.rquantity"
                            type="text"
                            class="form-control"
                            :value="item.rquantity"
                            disabled
                          />
                          <input
                            v-else
                            type="text"
                            class="form-control"
                            :value="item.quantity"
                            disabled
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-xl-6">
                        <div class="form-group">
                          <label>Quantity to Dispense</label>
                          <input
                            type="text"
                            class="form-control"
                            v-model="quantity"
                            placeholder="Quantity"
                            @change="calculateRemainQuantity"
                            required
                          />
                          <span class="form-text text-muted"
                            >Please enter quantity.</span
                          >
                        </div>
                      </div>
                      <div class="col-xl-6">
                        <div class="form-group">
                          <label>Unit</label>
                          <select class="form-control" v-model="unit" required>
                            <option disabled selected>Select</option>
                            <option
                              v-for="unit in units"
                              :key="unit._id"
                              :value="unit.name"
                              >{{ unit.name }}</option
                            >
                          </select>

                          <span class="form-text text-muted"
                            >Please select unit.</span
                          >
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-xl-6">
                        <div class="form-group">
                          <label>Remaining Quantity</label>
                          <input
                            type="text"
                            class="form-control"
                            v-model="rquantity"
                            placeholder="Quantity"
                            readonly
                            required
                          />
                          <span class="form-text text-muted"
                            >Remaining Quantity.</span
                          >
                        </div>
                      </div>
                      <div class="col-xl-6">
                        <div class="form-group">
                          <label>Department</label>
                          <select
                            class="form-control"
                            v-model="departmentId"
                            required
                          >
                            <option disabled selected>Select</option>
                            <option
                              v-for="department in departments"
                              :key="department._id"
                              :value="department._id"
                              >{{ department.name }}</option
                            >
                          </select>

                          <span class="form-text text-muted"
                            >Please select department to dispense.</span
                          >
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-xl-6">
                        <div class="form-group">
                          <label>Received By</label>
                          <select
                            class="form-control"
                            v-model="receiverId"
                            required
                          >
                            <option disabled selected>Select</option>
                            <option
                              v-for="staff in staffs"
                              :key="staff._id"
                              :value="staff._id"
                              >{{ staff.firstname }}
                              {{ staff.lastname }}</option
                            >
                          </select>

                          <span class="form-text text-muted"
                            >Please select receiver.</span
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
                      @click="dispenseItem(item)"
                    >
                      Dispense
                    </button>
                    <button
                      v-else
                      class="btn btn-brand kt-spinner kt-spinner--right 
                      kt-spinner--sm kt-spinner--light btn-elevate float-right"
                      disabled
                    >
                      Dispensing...
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!--end::Modal-->

            <!--begin::Modal-->
            <div
              class="modal fade"
              id="kt_modal_3"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      {{ itemname }} Dispense History
                    </h5>
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <div class="dt-responsive table-responsive">
                      <table class="table table-striped table-bordered nowrap">
                        <thead>
                          <tr>
                            <th>S/N</th>
                            <th>Quantity</th>
                            <th>LeftOver</th>
                            <th>Department</th>
                            <th>Receiver</th>
                            <th>Initiated By</th>
                            <th>Date Dispensed</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-if="history.length == 0">
                            <td colspan="9" align="center">
                              No Dispense History
                            </td>
                          </tr>
                          <tr v-for="(item, index) in history" :key="item._id">
                            <td>
                              {{ index + 1 }}
                            </td>
                            <td>{{ item.quantity }} {{ item.unit }}</td>
                            <td>{{ item.rquantity }}</td>
                            <td>{{ item.department.name }}</td>
                            <td>
                              <a href="#">
                                {{ item.receiver.firstname }}
                                {{ item.receiver.lastname }}
                              </a>
                            </td>
                            <td>
                              <a v-if="item.creator" href="#">
                                {{ item.creator.firstname }}
                                {{ item.creator.lastname }}
                              </a>
                              <a v-else href="#">None</a>
                            </td>
                            <td>
                              {{
                                item.datereceived
                                  | moment('ddd, MMM Do YYYY, h:mma')
                              }}
                            </td>
                          </tr>
                        </tbody>
                      </table>
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
                  </div>
                </div>
              </div>
            </div>

            <!--end::Modal-->

            <!--end: Datatable -->
          </div>
        </div>

        <!--end:: Widgets/Tasks -->
      </div>
    </div>
    <!--End::Section-->

    <!--End::Dashboard 1-->
  </div>
  <!-- end:: Content -->
</template>

<script>
import axios from '../../axios'

export default {
  name: 'labstore',
  data() {
    return {
      items: [],
      units: [],
      staffs: [],
      requests: [],
      departments: [],
      item: '',
      itemname: '',
      history: [],
      name: '',

      totalPatients: '',
      triagesCount: '',
      labstoreCount: '',
      appointmentCount: '',

      date: '',
      status: '',
      loading: false,

      getItemUrl: '/laboratory/lab/one',
      itemPageUrl: '/laboratory/lab/items/page',
      dispenseUrl: '/laboratory/dispense/item',
      dispenseHistoryUrl: '/laboratory/dispense/history',
      landingPageUrl: '/dashboard/laboratory/store',

      quantity: '',
      rquantity: '',
      receiverId: '',
      unit: '',
      departmentId: '',

      currentPage: 1,
      pageCount: '',
      pageSize: '',
      rows: '',
      meta: '',
      input: ''
    }
  },
  mounted() {
    this.dashboard()
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
        .get(
          `${this.landingPageUrl}?currentPage=${this.currentPage}&search=${this.input}`
        )
        .then(response => {
          this.items = response.data.data.items
          this.requests = response.data.data.requests
          this.totalPatients = response.data.data.patientCount
          this.triagesCount = response.data.data.triagesCount
          this.labstoreCount = response.data.data.labstoreCount
          this.appointmentCount = response.data.data.appointmentCount

          this.meta = response.data.data.meta
          this.rows = this.meta.count
          this.pageSize = this.meta.pageSize
          this.pageCount = this.meta.pageCount
        })
        .catch(error => {
          this.handleError(error)
        })
    },

    getDispenseHistory(item) {
      const data = {
        labId: item._id
      }
      axios
        .post(this.dispenseHistoryUrl, data)
        .then(response => {
          this.history = response.data.data.dispenseHistory.reverse()
          this.itemname = response.data.data.name
        })
        .catch(error => {
          this.handleError(error)
        })
    },
    getLabItem(item) {
      const data = {
        labId: item._id
      }
      axios
        .post(this.getItemUrl, data)
        .then(response => {
          this.item = response.data.data
          this.name = this.item.name
          //   console.log(this.drug)
        })
        .catch(error => {
          this.handleError(error)
        })
    },
    dispenseItem(item) {
      const data = {
        itemId: item._id,
        quantity: this.quantity,
        rquantity: this.rquantity,
        receiverId: this.receiverId,
        departmentId: this.departmentId,
        unit: this.unit
      }
      axios
        .put(this.dispenseUrl, data)
        .then(response => {
          this.items = response.data.data
          this.$iziToast.success({
            title: 'Success!',
            message: response.data.message
          })
        })
        .catch(error => {
          this.handleError(error)
        })
    },
    dispensePage() {
      axios
        .get(this.itemPageUrl)
        .then(response => {
          this.units = response.data.data.units
          this.departments = response.data.data.departments
          this.staffs = response.data.data.staffs
          //   console.log(this.drug)
        })
        .catch(error => {
          this.handleError(error)
        })
    },
    calculateRemainQuantity() {
      if (this.item.rquantity) {
        this.rquantity = parseInt(this.item.rquantity) - parseInt(this.quantity)
      } else {
        this.rquantity = parseInt(this.item.quantity) - parseInt(this.quantity)
      }
    },

    pageChangeHandle(value) {
      if (value === 'next') {
        this.currentPage += 1
        this.dashboard()
      } else if (value === 'previous') {
        this.currentPage -= 1
        this.dashboard()
      }
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
