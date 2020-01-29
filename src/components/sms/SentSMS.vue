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
                      v-model="input"
                      @keyup="getSMS"
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
                <th>Recepient</th>
                <th>Message</th>
                <th>Phone Number</th>
                <th>Date</th>
                <th>Sent By</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="smses.length == 0">
                <td colspan="15" align="center">No Sent SMS</td>
              </tr>
              <tr v-for="(sms, index) in smses" :key="sms._id">
                <td>
                  {{ index + 1 }}
                </td>
                <td>
                  <router-link :to="sms.url">
                    {{ sms.patient.firstname }} {{ sms.patient.lastname }}
                  </router-link>
                </td>
                <td>{{ sms.message }}</td>

                <td>{{ sms.patient.phonenumber }}</td>
                <td>{{ sms.createdAt | moment('DD/MM/YYYY, h:mm:ss') }}</td>
                <td>
                  <router-link :to="sms.url">
                    {{ sms.creator.firstname }} {{ sms.creator.lastname }}
                  </router-link>
                </td>

                <td>
                  <label
                    v-if="!sms.status"
                    class="kt-badge kt-badge--warning kt-badge--inline kt-badge--pill"
                    >Pending</label
                  >
                  <label
                    v-if="sms.status"
                    class="kt-badge kt-badge--success kt-badge--inline kt-badge--pill"
                    >Success</label
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
  name: 'smsTable',
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {
      smses: [],
      currentPage: 1,
      input: '',
      pageCount: '',
      pageSize: '',
      rows: '',
      meta: '',
      smsUrl: '/staff/sms'
    }
  },
  mounted() {
    this.getSMS()
  },
  methods: {
    handleError(error) {
      this.$iziToast.error({
        title: 'Error!',
        message: error.response.data
      })
    },
    getSMS() {
      axios
        .get(
          `${this.smsUrl}?currentPage=${this.currentPage}&search=${this.input}`
        )
        .then(response => {
          this.smses = response.data.data.sms
          this.meta = response.data.data.meta
          this.rows = this.meta.count
          this.pageSize = this.meta.pageSize
          this.pageCount = this.meta.pageCount

          let smses = this.smses

          for (let i = 0; i < smses.length; i++) {
            smses[i].url = '/patient/' + smses[i].patient._id
          }
        })
        .catch(error => {
          this.handleError(error)
        })
    },

    pageChangeHandle(value) {
      if (value === 'next') {
        this.currentPage += 1
        this.getSMS()
      } else if (value === 'previous') {
        this.currentPage -= 1
        this.getSMS()
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
