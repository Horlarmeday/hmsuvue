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
              <router-link
                to="/add-pharmacy-item"
                class="btn btn-brand btn-elevate btn-icon-sm"
              >
                <i class="la la-plus"></i>
                Create Item
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
                      v-model="input"
                      @keyup="getItems"
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
                <th>Item Name</th>
                <th>Quantity</th>
                <th>LeftOver</th>
                <th>Shelf</th>
                <th>Unit</th>
                <th>Expiry Date</th>
                <th>Dosage Form</th>
                <th>Strength</th>
                <th>Date Received</th>
                <th>Capitated</th>
                <th>Dispense History</th>
                <th>Created By</th>
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
                <td>{{ item.name.name }}</td>
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
                <td>{{ item.dosageForm }}</td>
                <td>{{ item.strength }}</td>
                <td>{{ item.createdAt | moment('ddd, MMM Do YYYY') }}</td>
                <td>
                  <span
                    v-if="item.capitated"
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
                  <a href="#">
                    {{ item.creator.firstname }} {{ item.creator.lastname }}
                  </a>
                </td>
                <td>
                  <a
                    href="#"
                    class="btn btn-bold btn-label-brand btn-sm"
                    data-toggle="modal"
                    data-target="#kt_modal_1"
                    @click="getItem(item)"
                    >Dispense</a
                  >
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
                        v-if="drug.rquantity"
                        type="number"
                        class="form-control"
                        :value="drug.rquantity"
                        disabled
                      />
                      <input
                        v-else
                        type="number"
                        class="form-control"
                        :value="drug.quantity"
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
                        type="number"
                        class="form-control"
                        v-model="quantity"
                        placeholder="Quantity"
                        @keyup="calculateRemainQuantity"
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
                        type="number"
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
                          >{{ staff.firstname }} {{ staff.lastname }}</option
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
                  @click="dispenseItem(drug)"
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
                  {{ drugname }} Dispense History
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
                        <td colspan="9" align="center">No Dispense History</td>
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
  </div>
  <!-- end:: Content -->
</template>

<script>
import axios from '../../axios'
export default {
  name: 'careplanTable',
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {
      items: [],
      units: [],
      staffs: [],
      departments: [],
      drug: '',
      drugname: '',
      history: [],
      name: '',
      itemUrl: '/pharmacy/pharmacy/item',
      getItemUrl: '/pharmacy/one',
      itemPageUrl: '/pharmacy/items/page',
      dispenseUrl: '/pharmacy/dispense/item',
      dispenseHistoryUrl: '/pharmacy/dispense/history',
      loading: false,

      quantity: '',
      rquantity: '',
      receiverId: '',
      unit: '',
      departmentId: '',

      currentPage: 1,
      input: '',
      pageCount: '',
      pageSize: '',
      rows: '',
      meta: ''
    }
  },
  mounted() {
    this.getItems()
    this.ItemPage()
  },
  methods: {
    handleError(error) {
      this.$iziToast.error({
        title: 'Error!',
        message: error.response.data
      })
    },
    getItems() {
      axios
        .get(
          `${this.itemUrl}?currentPage=${this.currentPage}&search=${this.input}`
        )
        .then(response => {
          this.items = response.data.data.items
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
        pharmacyId: item._id
      }
      axios
        .post(this.dispenseHistoryUrl, data)
        .then(response => {
          this.history = response.data.data.dispenseHistory.reverse()
          this.drugname = response.data.data.name.name
        })
        .catch(error => {
          this.handleError(error)
        })
    },
    getItem(drug) {
      const data = {
        pharmacyId: drug._id
      }
      axios
        .post(this.getItemUrl, data)
        .then(response => {
          this.drug = response.data.data
          this.name = this.drug.name.name
        })
        .catch(error => {
          this.handleError(error)
        })
    },
    dispenseItem(drug) {
      const data = {
        pharmacyId: drug._id,
        quantity: this.quantity,
        rquantity: this.rquantity,
        receiverId: this.receiverId,
        departmentId: this.departmentId,
        unit: this.unit
      }
      axios
        .put(this.dispenseUrl, data)
        .then(response => {
          this.items = response.data.data.items
          this.drug = response.data.data.updatedItem
          this.quantity = ''
          this.rquantity = ''
          this.receiverId = ''
          this.departmentId = ''
          this.unit = ''
          this.$iziToast.success({
            title: 'Success!',
            message: response.data.message
          })
        })
        .catch(error => {
          this.handleError(error)
        })
    },
    ItemPage() {
      axios
        .get(this.itemPageUrl)
        .then(response => {
          this.units = response.data.data.units
          this.departments = response.data.data.departments
          this.staffs = response.data.data.staffs
        })
        .catch(error => {
          this.handleError(error)
        })
    },
    calculateRemainQuantity() {
      if (this.drug.rquantity) {
        this.rquantity = parseInt(this.drug.rquantity) - parseInt(this.quantity)
      } else {
        this.rquantity = parseInt(this.drug.quantity) - parseInt(this.quantity)
      }
    },
    pageChangeHandle(value) {
      if (value === 'next') {
        this.currentPage += 1
        this.getItems()
      } else if (value === 'previous') {
        this.currentPage -= 1
        this.getItems()
      }
    }

    // gotoItem(item) {
    //   this.$router.push({
    //     name: 'pharmacyitemparams',
    //     params: { id: item._id }
    //   })
    // }
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
