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
            Edit NHIS Outpatient Item
            <small>Edit NHIS outpatient pharmacy item</small>
          </h3>
        </div>
        <div class="kt-portlet__head-toolbar">
          <div class="kt-portlet__head-wrapper">
            <div class="kt-portlet__head-actions">
              <router-link
                to="/inpatient-inventory"
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
              <label>Name</label>
              <input
                type="text"
                v-model="item.drug"
                class="form-control"
                disabled
              />
              <span class="form-text text-muted">Item name.</span>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Selling Price (₦)</label>
              <input
                type="text"
                class="form-control"
                v-model="item.sellingprice"
                disabled
              />
              <span class="form-text text-muted">Selling price.</span>
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
                v-model="item.productcode"
              />
              <span class="form-text text-muted">Product code.</span>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Shelf</label>
              <select v-model="item.shelf" class="form-control">
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
              <select v-model="item.shelfno" class="form-control">
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
              <label>Quantity</label>
              <input
                type="text"
                class="form-control"
                v-model="item.quantity"
                disabled
              />
              <span class="form-text text-muted">Please enter quantity.</span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Expiry Date</label>
              <input
                type="text"
                class="form-control"
                :value="item.expiration | moment('DD/MM/YYYY')"
                title="Expiry Date"
                disabled
              />

              <span class="form-text text-muted">Expiry Date.</span>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Date Received</label>
              <input
                type="text"
                class="form-control"
                :value="item.createdAt | moment('DD/MM/YYYY')"
                title="Expiry Date"
                disabled
              />

              <span class="form-text text-muted">Date Received.</span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Unit </label>
              <select class="form-control" v-model="item.unit" required>
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
          <div class="col-xl-6">
            <div class="form-group">
              <label>Balance</label>
              <input
                type="number"
                class="form-control"
                v-model="item.balance"
                disabled
              />
              <span class="form-text text-muted">Balance</span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Consumed</label>
              <input
                type="number"
                class="form-control"
                v-model="item.consumed"
                disabled
              />
              <span class="form-text text-muted">Item Consumed.</span>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Comment</label>
              <textarea
                v-model="item.comment"
                class="form-control"
                cols="30"
                rows="10"
              ></textarea>
              <span class="form-text text-muted">Please enter comment.</span>
            </div>
          </div>
        </div>

        <div>
          <button
            v-if="!loading"
            @click="editItem"
            class="btn btn-brand btn-elevate float-right"
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
        <!--end: Datatable -->
      </div>
    </div>
  </div>
  <!-- end:: Content -->
</template>

<script>
import axios from '../../axios'
export default {
  name: 'editinpatientform',
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {
      edititemUrl: '/inventory/nhisoutpatient/',
      itemUrl: '/inventory/nhisoutpatient/',
      landingpageUrl: '/pharmacy/pharmacy/page',
      loading: false,
      item: '',
      units: []
    }
  },
  mounted() {
    this.getPage()
    this.getItem()
  },
  methods: {
    handleError(error) {
      this.$iziToast.error({
        title: 'Error!',
        message: error.response.data
      })
    },
    editItem() {
      this.loading = true

      axios
        .put(this.edititemUrl + this.$route.params.id, this.item)
        .then(response => {
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
          this.units = response.data.data.units
        })
        .catch(error => {
          this.handleError(error)
        })
    },
    getItem() {
      axios
        .get(this.itemUrl + this.$route.params.id)
        .then(response => {
          this.item = response.data.data
        })
        .catch(error => {
          this.handleError(error)
        })
    }
  }
}
</script>

<style></style>
