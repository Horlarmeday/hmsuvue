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
                to="/create-employee-account"
                class="btn btn-brand btn-elevate btn-icon-sm"
              >
                <i class="la la-plus"></i>
                Create Employee
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
                      @keyup="getStaffs"
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
                        id="kt_form_type"
                      >
                        <option value="">All</option>
                        <option value="1">Active</option>
                        <option value="2">Suspended</option>
                        <option value="3">Ban</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 order-1 order-xl-2 kt-align-right">
              <router-link
                to="/create-employee-account"
                class="btn btn-default kt-hidden"
              >
                <i class="la la-cart-plus"></i> Create Employee
              </router-link>
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
                <th>Staff ID</th>
                <th>Photo</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Username</th>
                <th>Joined Date</th>
                <th>Role</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="staffs.length == 0">
                <td colspan="9" align="center">No Registered Staffs</td>
              </tr>
              <tr v-for="(staff, index) in staffs" :key="staff._id">
                <td>
                  {{ index + 1 }}
                </td>
                <td>{{ staff.staffId }}</td>
                <td>
                  <img
                    v-if="staff.photo"
                    style="border-radius: 5px"
                    width="40"
                    :src="staff.url"
                    alt="staff Image"
                  />
                  <img
                    v-else
                    style="border-radius: 5px"
                    width="40"
                    src="../../assets/images/100_4.jpg"
                    alt="staff image"
                  />
                </td>
                <td>
                  <a href="#"> {{ staff.firstname }} {{ staff.lastname }} </a>
                </td>
                <td>{{ staff.email }}</td>
                <td>{{ staff.phonenumber }}</td>
                <td>{{ staff.username }}</td>
                <td>{{ staff.createdAt | moment('DD/MM/YYYY, ha') }}</td>
                <td>
                  <label
                    v-if="staff.role == 'Super Admin'"
                    class="kt-badge kt-badge--success kt-badge--inline"
                    >{{ staff.role }}</label
                  >
                  <label
                    v-if="staff.role == 'Admin'"
                    class="kt-badge kt-badge--dark kt-badge--inline"
                    >{{ staff.role }}</label
                  >
                  <label
                    v-if="staff.role == 'Nurse'"
                    class="kt-badge kt-badge--brand kt-badge--inline"
                    >{{ staff.role }}</label
                  >
                  <label
                    v-if="staff.role == 'Doctor'"
                    class="kt-badge kt-badge--danger kt-badge--inline"
                    >{{ staff.role }}</label
                  >
                  <label
                    v-if="staff.role == 'Medical Records'"
                    class="kt-badge kt-badge--warning kt-badge--inline"
                    >{{ staff.role }}</label
                  >
                  <label
                    style="background:#22adff;"
                    v-if="staff.role == 'Receptionist'"
                    class="kt-badge kt-badge--warning kt-badge--inline"
                    >{{ staff.role }}</label
                  >
                  <label
                    style="background:#eeaeff;"
                    v-if="staff.role == 'Accountant'"
                    class="kt-badge kt-badge--warning kt-badge--inline"
                    >{{ staff.role }}</label
                  >
                  <label
                    style="background: #ef1011;color:#fff"
                    v-if="staff.role == 'Pharmacy Store'"
                    class="kt-badge kt-badge--warning kt-badge--inline"
                    >{{ staff.role }}</label
                  >
                  <label
                    style="background:#aef1f;"
                    v-if="staff.role == 'Lab Store'"
                    class="kt-badge kt-badge--warning kt-badge--inline"
                    >{{ staff.role }}</label
                  >
                  <label
                    style="background:#121df2;color:#fff"
                    v-if="staff.role == 'Pharmacy'"
                    class="kt-badge kt-badge--warning kt-badge--inline"
                    >{{ staff.role }}</label
                  >
                  <label
                    style="background:#01f2ee;color:#000"
                    v-if="staff.role == 'Medical Imaging'"
                    class="kt-badge kt-badge--warning kt-badge--inline"
                    >{{ staff.role }}</label
                  >
                  <label
                    style="background:#12eaa2;color:#000"
                    v-if="staff.role == 'Laboratory'"
                    class="kt-badge kt-badge--warning kt-badge--inline"
                    >{{ staff.role }}</label
                  >
                  <label
                    style="background:#aaddf1;color:#000"
                    v-if="staff.role == 'Theater'"
                    class="kt-badge kt-badge--warning kt-badge--inline"
                    >{{ staff.role }}</label
                  >
                  <label
                    style="background:#ae3ee;color:#000"
                    v-if="staff.role == 'NHIS'"
                    class="kt-badge kt-badge--warning kt-badge--inline"
                    >{{ staff.role }}</label
                  >
                  <label
                    style="background:#ae3ee;color:#f1fdff"
                    v-if="staff.role == 'Finance Officer'"
                    class="kt-badge kt-badge--brand kt-badge--inline"
                    >{{ staff.role }}</label
                  >
                </td>
                <td>
                  <label
                    v-if="staff.status == 'Active'"
                    class="kt-badge kt-badge--success kt-badge--inline"
                    >{{ staff.status }}</label
                  >
                  <label
                    v-if="staff.status == 'Suspended'"
                    class="kt-badge kt-badge--warning kt-badge--inline"
                    >{{ staff.status }}</label
                  >
                  <label
                    v-if="staff.status == 'Left'"
                    class="kt-badge kt-badge--brand kt-badge--inline"
                    >{{ staff.status }}</label
                  >
                  <label
                    v-if="staff.role == 'Ban'"
                    class="kt-badge kt-badge--danger kt-badge--inline"
                    >{{ staff.status }}</label
                  >
                </td>
                <td>
                  <select class="form-control" v-on:change="changeStatus">
                    <option selected disabled>Change Status</option>
                    <option value="Active">Active</option>
                    <option value="Ban">Ban</option>
                    <option value="Left">Left</option>
                    <option value="Suspended">Suspended</option>
                  </select>
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
  name: 'employeeTable',
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {
      staffs: [],
      staffsUrl: '/staff',
      imageurl:
        process.env.VUE_APP_IMAGE_URL ||
        'http://localhost:3000/static/uploads/',
      input: '',

      currentPage: 1,
      pageCount: '',
      pageSize: '',
      rows: '',
      meta: ''
    }
  },
  mounted() {
    this.getStaffs()
  },
  methods: {
    handleError(error) {
      this.$iziToast.error({
        title: 'Error!',
        message: error.response.data
      })
    },
    getStaffs() {
      axios
        .get(
          `${this.staffsUrl}?currentPage=${this.currentPage}&search=${this.input}`
        )
        .then(response => {
          this.staffs = response.data.data.staffs
          this.meta = response.data.data.meta
          this.rows = this.meta.count
          this.pageSize = this.meta.pageSize
          this.pageCount = this.meta.pageCount

          let staffs = this.staffs
          for (let i = 0; i < staffs.length; i++) {
            staffs[i].url = this.imageurl + staffs[i].photo
          }
        })
        .catch(error => {
          this.handleError(error)
        })
    },
    changeStatus() {},
    pageChangeHandle(value) {
      if (value === 'next') {
        this.currentPage += 1
        this.getStaffs()
      } else if (value === 'previous') {
        this.currentPage -= 1
        this.getStaffs()
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
