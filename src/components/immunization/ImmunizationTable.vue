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
                      @keyup="getImmunization"
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
                <th>Mother's Name</th>
                <th>Mother's Phone</th>
                <th>Baby's Name</th>
                <th>Place of Birth</th>
                <th>Date of Birth</th>
                <th>At Birth</th>
                <th>At 6Weeks</th>
                <th>At 10Weeks</th>
                <th>At 14Weeks</th>
                <th>At 6Months</th>
                <th>At 9Months</th>
                <th>At 15Months</th>
                <th>At 1Year</th>
                <th>At 2Years</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="immunizations.length == 0">
                <td colspan="19" align="center">
                  No Immunization
                </td>
              </tr>
              <tr
                v-for="(immunization, index) in immunizations"
                :key="immunization._id"
              >
                <td>
                  {{ index + 1 }}
                </td>
                <td>
                  <router-link :to="immunization.url">
                    {{ immunization.patient.firstname }}
                    {{ immunization.patient.lastname }}
                  </router-link>
                </td>
                <td>{{ immunization.patient.phonenumber }}</td>
                <td>{{ immunization.name }}</td>
                <td>{{ immunization.placeofbirth }}</td>
                <td>{{ immunization.dateofbirth | moment('DD/MM/YYYY') }}</td>

                <td>
                  <small style="color: blue; font-weight: 500"
                    >BirthWeight: </small
                  ><span>{{ immunization.atbirth.birthweight }}</span>
                  <p v-for="value in immunization.atbirth.atBirth" :key="value">
                    {{ value }}
                  </p>
                </td>
                <td>
                  <p v-for="value in immunization.at6weeks" :key="value">
                    {{ value }}
                  </p>
                </td>
                <td>
                  <p v-for="value in immunization.at10weeks" :key="value">
                    {{ value }}
                  </p>
                </td>
                <td>
                  <p v-for="value in immunization.at14weeks" :key="value">
                    {{ value }}
                  </p>
                </td>
                <td>
                  <p v-for="value in immunization.at6months" :key="value">
                    {{ value }}
                  </p>
                </td>
                <td>
                  <p v-for="value in immunization.at9months" :key="value">
                    {{ value }}
                  </p>
                </td>
                <td>
                  <p v-for="value in immunization.at15months" :key="value">
                    {{ value }}
                  </p>
                </td>
                <td>
                  <p v-for="value in immunization.at1year" :key="value">
                    {{ value }}
                  </p>
                </td>
                <td>
                  <p v-for="value in immunization.at2years" :key="value">
                    {{ value }}
                  </p>
                </td>

                <td>
                  <router-link
                    class="btn btn-brand btn-sm"
                    :to="immunization.link"
                    >Update</router-link
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
  name: 'immunizationTable',
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {
      immunizations: [],
      currentPage: 1,
      input: '',
      pageCount: '',
      pageSize: '',
      rows: '',
      meta: '',
      immunizationurl: '/immunization'
    }
  },
  mounted() {
    this.getImmunization()
  },
  methods: {
    handleError(error) {
      this.$iziToast.error({
        title: 'Error!',
        message: error.response.data
      })
    },
    getImmunization() {
      axios
        .get(
          `${this.immunizationurl}?currentPage=${this.currentPage}&search=${this.input}`
        )
        .then(response => {
          this.immunizations = response.data.data.immunizations
          this.meta = response.data.data.meta
          this.rows = this.meta.count
          this.pageSize = this.meta.pageSize
          this.pageCount = this.meta.pageCount

          let immunizations = this.immunizations
          for (let i = 0; i < immunizations.length; i++) {
            immunizations[i].url = '/patient/' + immunizations[i].patient._id
            immunizations[i].link =
              '/update-immunization/' + immunizations[i]._id
          }
        })
        .catch(error => {
          this.handleError(error)
        })
    },
    pageChangeHandle(value) {
      if (value === 'next') {
        this.currentPage += 1
        this.getImmunization()
      } else if (value === 'previous') {
        this.currentPage -= 1
        this.getImmunization()
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
