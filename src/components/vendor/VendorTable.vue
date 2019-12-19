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
                to="/create-vendor-account"
                class="btn btn-brand btn-elevate btn-icon-sm"
              >
                <i class="la la-plus"></i>
                Create Vendor
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
                <div class="col-md-4 kt-margin-b-20-tablet-and-mobile">
                  <div class="kt-form__group kt-form__group--inline">
                    <div class="kt-form__label">
                      <label>Status:</label>
                    </div>
                    <div class="kt-form__control">
                      <select
                        class="form-control bootstrap-select"
                        id="kt_form_status"
                      >
                        <option value="">All</option>
                        <option value="1">Pending</option>
                        <option value="2">Delivered</option>
                        <option value="3">Canceled</option>
                        <option value="4">Success</option>
                        <option value="5">Info</option>
                        <option value="6">Danger</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 kt-margin-b-20-tablet-and-mobile">
                  <div class="kt-form__group kt-form__group--inline">
                    <div class="kt-form__label">
                      <label>Type:</label>
                    </div>
                    <div class="kt-form__control">
                      <select
                        class="form-control bootstrap-select"
                        id="kt_form_type"
                      >
                        <option value="">All</option>
                        <option value="1">Online</option>
                        <option value="2">Retail</option>
                        <option value="3">Direct</option>
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
                <th>Vendor ID</th>
                <th>Vendor Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Company</th>
                <th>Username</th>
                <th>Phone Number</th>
                <th>Registered By</th>
                <th>Date Created</th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="vendors.length == 0">
                <td colspan="9" align="center">No Vendors</td>
              </tr>
              <tr v-for="(vendor, index) in vendors" :key="vendor._id">
                <td>
                  {{ index + 1 }}
                </td>
                <td>{{ vendor.vendorId }}</td>
                <td>
                  <a href="#"> {{ vendor.firstname }} {{ vendor.lastname }} </a>
                </td>
                <td>{{ vendor.email }}</td>
                <td>{{ vendor.address }}</td>
                <td>{{ vendor.company }}</td>
                <td>{{ vendor.username }}</td>
                <td>{{ vendor.phonenumber }}</td>
                <td>
                  <a v-if="vendor.creator" href="#">
                    {{ vendor.creator.firstname }} {{ vendor.creator.lastname }}
                  </a>
                  <a v-else href="#">
                    {{ vendor.creator.firstname }} {{ vendor.creator.lastname }}
                  </a>
                </td>
                <td>{{ vendor.createdAt | moment('from', 'now') }}</td>
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
  name: 'vendorTable',
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {
      vendors: [],
      vendorUrl: '/vendor'
    }
  },
  mounted() {
    this.getVendors()
  },
  methods: {
    handleError(error) {
      this.$iziToast.error({
        title: 'Error!',
        message: error.response.data
      })
    },
    getVendors() {
      axios
        .get(this.vendorUrl)
        .then(response => {
          this.vendors = response.data.data
          let vendors = this.vendors
          for (let i = 0; i < vendors.length; i++) {
            vendors[i].url = vendors[i]._id
          }
        })
        .catch(error => {
          this.handleError(error)
        })
    }
  }
}
</script>

<style></style>
