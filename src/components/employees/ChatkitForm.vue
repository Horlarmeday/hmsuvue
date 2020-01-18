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
            Create Staff Chatkit Account
            <small>Create a staff chatkit account</small>
          </h3>
        </div>
      </div>
      <div class="kt-portlet__body">
        <!--begin: Datatable -->
        <div class="row">
          <div class="col-xl-12">
            <div class="form-group">
              <label>Name </label>
              <select v-model="userId" class="form-control">
                <option disabled></option>
                <option
                  v-for="staff in staffs"
                  :key="staff._id"
                  :value="staff._id"
                >
                  {{ staff.firstname }} {{ staff.lastname }}
                </option>
              </select>
              <span class="form-text text-muted">Please select staff.</span>
            </div>
          </div>
        </div>

        <div>
          <button
            v-if="!loading"
            @click="createStaffChatkit"
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
      </div>
      <div class="kt-portlet__body ">
        <!--begin: Datatable -->
        <div class="dt-responsive table-responsive">
          <table id="mytable" class="table table-striped table-bordered nowrap">
            <thead>
              <tr>
                <th>S/N</th>
                <th>Name</th>
                <th>Date Created</th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="chatkits.length == 0">
                <td colspan="9" align="center">No Registered Staff</td>
              </tr>
              <tr v-for="(chat, index) in chatkits" :key="chat.id">
                <td>
                  {{ index + 1 }}
                </td>
                <td>{{ chat.name }}</td>
                <td>{{ chat.created_at | moment('DD/MM/YYYY') }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="card-footer">
          <b-pagination
            class="float-right"
            v-model="currentPage"
            :total-rows="irows"
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
  </div>
  <!-- end:: Content -->
</template>

<script>
import axios from '../../axios'
export default {
  name: 'unit',
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {
      userId: '',
      chatkits: [],
      staffs: [],
      currentPage: 1,
      createchatkiturl: '/staff/chatkit',
      landingPageUrl: '/appointment/appointments',
      loading: false
    }
  },
  mounted() {
    this.landingPage()
    this.getChatkitStaffs()
  },
  methods: {
    handleError(error) {
      this.$iziToast.error({
        title: 'Error!',
        message: error.response.data
      })
    },
    createStaffChatkit() {
      this.loading = true
      const data = {
        userId: this.userId
      }
      axios
        .post(this.createchatkiturl, data)
        .then(response => {
          this.loading = false
          this.$iziToast.success({
            title: 'Success!',
            message: response.data.message
          })
          this.getChatkitStaffs()
        })
        .catch(error => {
          this.loading = false
          this.handleError(error)
        })
    },

    landingPage() {
      axios
        .get(this.landingPageUrl)
        .then(response => {
          this.staffs = response.data.data.examiners
        })
        .catch(error => {
          this.handleError(error)
        })
    },
    getChatkitStaffs() {
      axios
        .get(this.createchatkiturl)
        .then(response => {
          this.chatkits = response.data.data.reverse()
        })
        .catch(error => {
          this.handleError(error)
        })
    }
  },
  computed: {
    irows() {
      return this.chatkits.length
    }
  }
}
</script>

<style></style>
