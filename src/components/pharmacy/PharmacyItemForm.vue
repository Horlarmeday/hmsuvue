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
            Create Pharmacy Item
            <small>Create a new pharmacy item</small>
          </h3>
        </div>
        <div class="kt-portlet__head-toolbar">
          <div class="kt-portlet__head-wrapper">
            <div class="kt-portlet__head-actions">
              <router-link
                to="/pharmacy-items"
                class="btn btn-brand btn-elevate btn-icon-sm"
              >
                <i class="la la-plus"></i>
                Items
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="kt-portlet__body">
        <!--begin: Datatable -->
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Generic Name</label>
              <select class="form-control" v-model="input.genericId" required>
                <option disabled selected>Select</option>
                <option
                  v-for="drug in drugs"
                  :key="drug._id"
                  :value="drug._id"
                  >{{ drug.name }}</option
                >
              </select>
              <span class="form-text text-muted"
                >Please select generic name.</span
              >
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Description</label>
              <input
                type="text"
                class="form-control"
                v-model="input.description"
                placeholder="Description"
                required
              />
              <span class="form-text text-muted"
                >Please enter description.</span
              >
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Product Code</label>
              <input
                type="text"
                class="form-control"
                v-model="input.productcode"
                placeholder="Product Code"
                required
              />
              <span class="form-text text-muted"
                >Please enter product code.</span
              >
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Shelf</label>
              <select v-model="input.shelf" class="form-control" required>
                <option selected disabled>Select</option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
                <option>D</option>
                <option>E</option>
                <option>F</option>
                <option>G</option>
                <option>H</option>
                <option>I</option>
                <option>J</option>
                <option>K</option>
                <option>L</option>
                <option>M</option>
                <option>N</option>
                <option>O</option>
                <option>P</option>
                <option>Q</option>
                <option>R</option>
                <option>S</option>
                <option>T</option>
                <option>U</option>
                <option>V</option>
                <option>W</option>
                <option>X</option>
                <option>Y</option>
                <option>Z</option>
              </select>
              <span class="form-text text-muted">Please select shelf.</span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Shelf Number (m*)</label>
              <select v-model="input.shelfno" class="form-control" required>
                <option selected disabled>Select</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
              </select>
              <span class="form-text text-muted"
                >Please select shelf number.</span
              >
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Voucher/Ref Number</label>
              <input
                type="text"
                class="form-control"
                v-model="input.voucher"
                placeholder="Voucher/Ref No"
                required
              />
              <span class="form-text text-muted"
                >Please enter voucher number.</span
              >
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Vendor</label>
              <select class="form-control" v-model="input.vendorId" required>
                <option disabled selected>Select</option>
                <option
                  v-for="vendor in vendors"
                  :key="vendor._id"
                  :value="vendor._id"
                  >{{ vendor.firstname }} {{ vendor.lastname }}</option
                >
              </select>
              <span class="form-text text-muted">Please select vendor.</span>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Batch Number</label>
              <input
                type="text"
                class="form-control"
                v-model="input.batch"
                placeholder="Batch Number"
                required
              />
              <span class="form-text text-muted"
                >Please enter batch number.</span
              >
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Expiry Date</label>
              <datetime
                type="date"
                input-class="form-control"
                v-model="input.expiration"
                title="Expiry Date"
              ></datetime>

              <span class="form-text text-muted"
                >Please enter batch number.</span
              >
            </div>
          </div>
        </div>
        <h5 style="margin-bottom: 30px;color:#5d78ff;">QUANTITY</h5>
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Quantity</label>
              <input
                type="number"
                class="form-control"
                v-model="input.quantity"
                placeholder="Quantity"
                required
              />
              <span class="form-text text-muted">Please enter quantity.</span>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Unit </label>
              <select class="form-control" v-model="input.unit" required>
                <option disabled selected>Select</option>
                <option
                  v-for="unit in units"
                  :key="unit._id"
                  :value="unit.name"
                  >{{ unit.name }}</option
                >
              </select>
              <span class="form-text text-muted">Please select unit.</span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Cost Per Unit (₦)</label>
              <input
                type="number"
                class="form-control"
                v-on:change="calculateCost"
                v-model="input.price"
                placeholder="Price"
              />
              <span class="form-text text-muted">Please enter item cost.</span>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Purchase Cost (₦)</label>
              <input
                type="number"
                class="form-control"
                v-model="input.purchasecost"
                required
                readonly
              />
              <span class="form-text text-muted">Purchase cost</span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Selling Price (₦)</label>
              <input
                type="number"
                class="form-control"
                v-on:change="calculateIncone"
                v-model="input.sellingprice"
                placeholder="Selling Price"
              />
              <span class="form-text text-muted"
                >Please enter selling price.</span
              >
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Expected Income</label>
              <input
                type="number"
                class="form-control"
                v-model="input.expectedincome"
                required
                readonly
              />
              <span class="form-text text-muted">Expected income.</span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Date Received</label>
              <input
                type="date"
                class="form-control"
                v-model="input.datereceived"
                required
              />
              <span class="form-text text-muted"
                >Please select date received</span
              >
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Loss & Adjustments</label>
              <input
                type="text"
                class="form-control"
                v-model="input.loss"
                required
              />

              <span class="form-text text-muted"
                >Please enter loss & adjustments.</span
              >
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Remarks</label>
              <input
                type="text"
                class="form-control"
                v-model="input.remarks"
                required
              />
              <span class="form-text text-muted">Please enter remarks</span>
            </div>
          </div>
        </div>

        <div>
          <button
            v-if="!loading"
            @click="createItem"
            class="btn btn-brand btn-elevate float-right"
          >
            Create Item
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
  </div>
  <!-- end:: Content -->
</template>

<script>
import axios from '../../axios'
import { Datetime } from 'vue-datetime'
export default {
  name: 'createPharmacyItemForm',
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
      input: {
        price: '',
        productcode: '',
        description: '',
        shelf: '',
        shelfno: '',
        voucher: '',
        batch: '',
        loss: '',
        remarks: '',
        quantity: '',
        unit: '',
        purchasecost: '',
        sellingprice: '',
        expectedincome: '',
        datereceived: '',
        expiration: '',
        vendorId: '',
        genericId: ''
      },

      pharmacyitemUrl: '/pharmacy/pharmacy/item',
      landingpageUrl: '/pharmacy/pharmacy/page',
      loading: false,
      vendors: [],
      drugs: [],
      units: []
    }
  },
  mounted() {
    this.getPage()
  },
  methods: {
    handleError(error) {
      this.$iziToast.error({
        title: 'Error!',
        message: error.response.data
      })
    },
    setNull(obj, val) {
      Object.keys(obj).forEach(k => (obj[k] = val))
    },
    createItem() {
      this.loading = true

      axios
        .post(this.pharmacyitemUrl, this.input)
        .then(response => {
          this.setNull(this.input, '')
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
    getPage() {
      axios
        .get(this.landingpageUrl)
        .then(response => {
          this.drugs = response.data.data.generics
          this.vendors = response.data.data.vendors
          this.units = response.data.data.units
        })
        .catch(error => {
          this.handleError(error)
        })
    },

    calculateCost() {
      this.input.purchasecost =
        parseInt(this.input.quantity) * parseInt(this.input.price)
    },

    calculateIncone() {
      this.input.expectedincome =
        parseInt(this.input.quantity) * parseInt(this.input.sellingprice)
    }
  }
}
</script>

<style></style>
