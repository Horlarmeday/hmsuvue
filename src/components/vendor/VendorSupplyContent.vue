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
            Create Supply
            <small>Create a new supply record</small>
          </h3>
        </div>
      </div>
      <div class="kt-portlet__body">
        <!--begin: Datatable -->
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Item</label>
              <select class="form-control" v-model="input.genericId" required>
                <option disabled selected>Select</option>
                <option
                  v-for="drug in drugs"
                  :key="drug._id"
                  :value="drug._id"
                  >{{ drug.name }}</option
                >
              </select>
              <span class="form-text text-muted">Please select item.</span>
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
              <label>Quantity Supplied</label>
              <input
                type="text"
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
              <label>Unit</label>
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
              <label>Cost Per Unit Price</label>
              <input
                type="text"
                class="form-control"
                v-model="input.price"
                @change="calculateCost"
                placeholder="Price"
                required
              />
              <span class="form-text text-muted">Please enter price.</span>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Supplied Cost</label>
              <input
                type="text"
                class="form-control"
                v-model="input.cost"
                readonly
              />
              <span class="form-text text-muted">Supplied Cost.</span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Date Supplied</label>
              <input
                type="date"
                class="form-control"
                v-model="input.datesupplied"
                placeholder=" Date Supplied"
                required
              />
              <span class="form-text text-muted"
                >Please select date supplied.</span
              >
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Serial Number</label>
              <input
                type="text"
                class="form-control"
                v-model="input.serialnumber"
                required
              />
              <span class="form-text text-muted"
                >Please enter serial number.</span
              >
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Expiry Date</label>
              <input
                type="date"
                class="form-control"
                v-model="input.expiration"
                placeholder="Date Supplied"
                required
              />
              <span class="form-text text-muted"
                >Please select expiry date.</span
              >
            </div>
          </div>
        </div>

        <div>
          <button
            v-if="!loading"
            @click="createSupply"
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
                <th>Price(₦)</th>
                <th>Quantity</th>
                <th>Unit</th>
                <th>Supplied Cost(₦)</th>
                <th>Description</th>
                <th>Serial Number</th>
                <th>Date Supplied</th>
                <th>Expiry Date</th>
                <th>Supplied By</th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="supplies.length == 0">
                <td colspan="9" align="center">No Supplies</td>
              </tr>
              <tr v-for="(supply, index) in supplies" :key="supply._id">
                <td>
                  {{ index + 1 }}
                </td>
                <td>{{ supply.drug.name }}</td>
                <td>{{ supply.price }}</td>
                <td>{{ supply.quantity }}</td>
                <td>{{ supply.unit }}</td>
                <td>{{ supply.cost }}</td>
                <td>{{ supply.description }}</td>
                <td>{{ supply.serialnumber }}</td>
                <td>{{ supply.datesupplied | moment('DD/MM/YYYY') }}</td>
                <td>{{ supply.expiration | moment('DD/MM/YYYY') }}</td>
                <td>
                  {{ supply.vendor.firstname }} {{ supply.vendor.lastname }}
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
  name: 'supply',
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {
      input: {
        price: '',
        datesupplied: '',
        description: '',
        unit: '',
        quantity: '',
        cost: '',
        expiration: '',
        serialnumber: '',
        genericId: ''
      },
      supplies: [],
      units: [],
      drugs: [],
      supplyUrl: '/vendor/supply',
      landingPageUrl: '/vendor/supply/page',
      loading: false
    }
  },
  mounted() {
    this.getSupplies()
    this.landingPage()
  },
  methods: {
    handleError(error) {
      this.$iziToast.error({
        title: 'Error!',
        message: error.response.data
      })
    },
    createSupply() {
      this.loading = true
      axios
        .post(this.supplyUrl, this.input)
        .then(response => {
          this.input = ''
          this.loading = false
          this.supplies = response.data.data
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

    getSupplies() {
      axios
        .get(this.supplyUrl)
        .then(response => {
          this.supplies = response.data.data
        })
        .catch(error => {
          this.handleError(error)
        })
    },
    landingPage() {
      axios
        .get(this.landingPageUrl)
        .then(response => {
          this.units = response.data.data.units
          this.drugs = response.data.data.generics
        })
        .catch(error => {
          this.handleError(error)
        })
    },
    calculateCost() {
      this.input.cost =
        parseInt(this.input.quantity) * parseInt(this.input.price)
    }
  }
}
</script>

<style></style>
