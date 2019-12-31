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
                      @keyup="getInpatientItems"
                      v-model="input"
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
          <table id="mytable" class="table table-striped table-bordered nowrap">
            <thead>
              <tr>
                <th>S/N</th>
                <th>Product Code</th>
                <th>Item</th>
                <th>Quantity</th>
                <th>Shelf</th>
                <th>Unit</th>
                <th>Selling Price</th>
                <th>Consumed</th>
                <th>Balance</th>
                <th>Comment</th>
                <th>Creator</th>
                <th>Date Created</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="items.length == 0">
                <td colspan="15" align="center">No Items</td>
              </tr>
              <tr v-for="(item, index) in items" :key="item._id">
                <td>
                  {{ index + 1 }}
                </td>
                <td>{{ item.productcode }}</td>
                <td>{{ item.name.name }}</td>
                <td>{{ item.quantity }}</td>
                <td>{{ item.shelf }} {{ item.shelfno }}</td>
                <td>{{ item.unit }}</td>
                <td>{{ item.sellingprice }}</td>
                <td>{{ item.consumed }}</td>
                <td>{{ item.balance }}</td>
                <td>{{ item.comment }}</td>
                <td>
                  {{ item.creator.firstname }} {{ item.creator.lastname }}
                </td>
                <td>{{ item.createdAt | moment('DD/MM/YYYY') }}</td>
                <td>
                  <router-link :to="item.url" class="btn btn-brand btn-elevate"
                    >Edit</router-link
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

        <!--end: Datatable -->
      </div>
    </div>
  </div>
  <!-- end:: Content -->
</template>

<script>
import axios from '../../axios'
export default {
  name: 'inpatientinventory',
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {
      input: '',
      currentPage: 1,
      pageCount: '',
      pageSize: '',
      rows: '',
      meta: '',
      items: [],
      itemsUrl: '/inventory/inpatient/',
      loading: false
    }
  },
  mounted() {
    this.getInpatientItems()
  },
  methods: {
    handleError(error) {
      this.$iziToast.error({
        title: 'Error!',
        message: error.response.data
      })
    },

    getInpatientItems() {
      axios
        .get(
          `${this.itemsUrl}?currentPage=${this.currentPage}&search=${this.input}`
        )
        .then(response => {
          this.items = response.data.data.items
          this.meta = response.data.data.meta
          this.rows = this.meta.count
          this.pageSize = this.meta.pageSize
          this.pageCount = this.meta.pageCount
          let items = this.items
          for (let i = 0; i < items.length; i++) {
            items[i].url = '/edit-inpatient/' + items[i]._id
          }
        })
        .catch(error => {
          this.handleError(error)
        })
    },

    pageChangeHandle(value) {
      if (value === 'next') {
        this.currentPage += 1
        this.getInpatientItems()
      } else if (value === 'previous') {
        this.currentPage -= 1
        this.getInpatientItems()
      }
    },
    myFunction() {}
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
