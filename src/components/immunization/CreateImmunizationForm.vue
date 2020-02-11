<template>
  <div class="kt-content  kt-grid__item kt-grid__item--fluid" id="kt_content">
    <!--begin::Portlet-->
    <div class="kt-portlet">
      <div class="kt-portlet__head">
        <div class="kt-portlet__head-label">
          <h3 class="kt-portlet__head-title">
            Update Immunization
          </h3>
        </div>
      </div>
      <div class="kt-portlet__body">
        <ul class="nav nav-pills nav-fill" role="tablist">
          <li class="nav-item">
            <a class="nav-link active" data-toggle="tab" href="#kt_tabs_5_2"
              >At 6 Weeks</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#kt_tabs_5_3"
              >At 10 Weeks</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#kt_tabs_5_4"
              >At 14 Weeks</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#kt_tabs_5_5"
              >At 6 Months</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#kt_tabs_5_6"
              >At 9 Months</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#kt_tabs_5_7"
              >At 15 Months</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#kt_tabs_5_8"
              >At 1 Year</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#kt_tabs_5_9"
              >At 2 Years</a
            >
          </li>
        </ul>
        <div class="tab-content">
          <div class="tab-pane active" id="kt_tabs_5_2" role="tabpanel">
            <div class="row">
              <div class="col-xl-6">
                <div class="form-group">
                  <label>Birth Weight</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="change.birthweight"
                    placeholder="Birth Weight"
                  />
                  <span class="form-text text-muted"
                    >Please baby's birth weight.</span
                  >
                </div>
              </div>
              <div class="col-xl-6">
                <div class="form-group">
                  <label>At 6Weeks</label>
                  <v-select
                    v-model="change.at6weeks"
                    :options="['BCG', 'HBV 0', 'OPV 0', 'Vit A mum']"
                    multiple
                    required
                  ></v-select>
                  <span class="form-text text-muted"
                    >Please choose at 6 weeks.</span
                  >
                </div>
              </div>
            </div>
            <div class="form-group">
              <button
                @click="createAt6Weeks"
                class="btn btn-brand btn-elevated float-right"
              >
                Submit
              </button>
            </div>
          </div>
          <div class="tab-pane" id="kt_tabs_5_3" role="tabpanel">
            <div class="row">
              <div class="col-xl-6">
                <div class="form-group">
                  <label>Birth Weight</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="next.birthweight"
                    placeholder="Birth Weight"
                  />
                  <span class="form-text text-muted"
                    >Please baby's birth weight.</span
                  >
                </div>
              </div>
              <div class="col-xl-6">
                <div class="form-group">
                  <label>At 10Weeks</label>
                  <v-select
                    v-model="next.at10weeks"
                    :options="['BCG', 'HBV 0', 'OPV 0', 'Vit A mum']"
                    multiple
                    required
                  ></v-select>
                  <span class="form-text text-muted"
                    >Please choose at 10 weeks.</span
                  >
                </div>
              </div>
            </div>
            <div class="form-group">
              <button class="btn btn-brand btn-elevated float-right">
                Submit
              </button>
            </div>
          </div>
          <div class="tab-pane" id="kt_tabs_5_4" role="tabpanel">
            <div class="row">
              <div class="col-xl-6">
                <div class="form-group">
                  <label>Birth Weight</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="another.birthweight"
                    placeholder="Birth Weight"
                  />
                  <span class="form-text text-muted"
                    >Please baby's birth weight.</span
                  >
                </div>
              </div>
              <div class="col-xl-6">
                <div class="form-group">
                  <label>At 14Weeks</label>
                  <v-select
                    v-model="another.at14weeks"
                    :options="['BCG', 'HBV 0', 'OPV 0', 'Vit A mum']"
                    multiple
                    required
                  ></v-select>
                  <span class="form-text text-muted"
                    >Please choose at 14 weeks.</span
                  >
                </div>
              </div>
            </div>
            <div class="form-group">
              <button class="btn btn-brand btn-elevated float-right">
                Submit
              </button>
            </div>
          </div>
          <div class="tab-pane" id="kt_tabs_5_5" role="tabpanel">
            <div class="row">
              <div class="col-xl-6">
                <div class="form-group">
                  <label>Birth Weight</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="yet.birthweight"
                    placeholder="Birth Weight"
                  />
                  <span class="form-text text-muted"
                    >Please baby's birth weight.</span
                  >
                </div>
              </div>
              <div class="col-xl-6">
                <div class="form-group">
                  <label>At 6Months</label>
                  <v-select
                    v-model="yet.at6months"
                    :options="['BCG', 'HBV 0', 'OPV 0', 'Vit A mum']"
                    multiple
                    required
                  ></v-select>
                  <span class="form-text text-muted"
                    >Please choose at 6 months.</span
                  >
                </div>
              </div>
            </div>
            <div class="form-group">
              <button class="btn btn-brand btn-elevated float-right">
                Submit
              </button>
            </div>
          </div>
          <div class="tab-pane" id="kt_tabs_5_6" role="tabpanel">
            <div class="row">
              <div class="col-xl-6">
                <div class="form-group">
                  <label>Birth Weight</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="again.birthweight"
                    placeholder="Birth Weight"
                  />
                  <span class="form-text text-muted"
                    >Please baby's birth weight.</span
                  >
                </div>
              </div>
              <div class="col-xl-6">
                <div class="form-group">
                  <label>At 9Months</label>
                  <v-select
                    v-model="again.at9months"
                    :options="['BCG', 'HBV 0', 'OPV 0', 'Vit A mum']"
                    multiple
                    required
                  ></v-select>
                  <span class="form-text text-muted"
                    >Please choose at 9 months.</span
                  >
                </div>
              </div>
            </div>
            <div class="form-group">
              <button class="btn btn-brand btn-elevated float-right">
                Submit
              </button>
            </div>
          </div>
          <div class="tab-pane" id="kt_tabs_5_7" role="tabpanel">
            <div class="row">
              <div class="col-xl-6">
                <div class="form-group">
                  <label>Birth Weight</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="after.birthweight"
                    placeholder="Birth Weight"
                  />
                  <span class="form-text text-muted"
                    >Please baby's birth weight.</span
                  >
                </div>
              </div>
              <div class="col-xl-6">
                <div class="form-group">
                  <label>At 15Months</label>
                  <v-select
                    v-model="after.at15months"
                    :options="['BCG', 'HBV 0', 'OPV 0', 'Vit A mum']"
                    multiple
                    required
                  ></v-select>
                  <span class="form-text text-muted"
                    >Please choose at 15 months.</span
                  >
                </div>
              </div>
            </div>
            <div class="form-group">
              <button class="btn btn-brand btn-elevated float-right">
                Submit
              </button>
            </div>
          </div>
          <div class="tab-pane" id="kt_tabs_5_8" role="tabpanel">
            <div class="row">
              <div class="col-xl-6">
                <div class="form-group">
                  <label>Birth Weight</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="age.birthweight"
                    placeholder="Birth Weight"
                  />
                  <span class="form-text text-muted"
                    >Please baby's birth weight.</span
                  >
                </div>
              </div>
              <div class="col-xl-6">
                <div class="form-group">
                  <label>At 1year</label>
                  <v-select
                    v-model="age.at1year"
                    :options="['BCG', 'HBV 0', 'OPV 0', 'Vit A mum']"
                    multiple
                    required
                  ></v-select>
                  <span class="form-text text-muted"
                    >Please choose at 1 year.</span
                  >
                </div>
              </div>
            </div>

            <div class="form-group">
              <button class="btn btn-brand btn-elevated float-right">
                Submit
              </button>
            </div>
          </div>
          <div class="tab-pane" id="kt_tabs_5_9" role="tabpanel">
            <div class="row">
              <div class="col-xl-6">
                <div class="form-group">
                  <label>Birth Weight</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="later.birthweight"
                    placeholder="Birth Weight"
                  />
                  <span class="form-text text-muted"
                    >Please baby's birth weight.</span
                  >
                </div>
              </div>
              <div class="col-xl-6">
                <div class="form-group">
                  <label>At 2Years</label>
                  <v-select
                    v-model="later.at2years"
                    :options="['BCG', 'HBV 0', 'OPV 0', 'Vit A mum']"
                    multiple
                    required
                  ></v-select>
                  <span class="form-text text-muted"
                    >Please choose at 2 years.</span
                  >
                </div>
              </div>
            </div>
            <div class="form-group">
              <button class="btn btn-brand btn-elevated float-right">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--end::Portlet-->
  </div>
</template>

<script>
import axios from '../../axios'
import vSelect from 'vue-select'
export default {
  name: 'immunizationform',
  components: {
    vSelect
  },
  data() {
    return {
      change: {
        birthweight: '',
        at6weeks: []
      },
      next: {
        birthweight: '',
        at10weeks: []
      },
      yet: {
        birthweight: '',
        at6months: []
      },
      another: {
        birthweight: '',
        at14weeks: []
      },
      again: {
        birthweight: '',
        at9months: []
      },
      after: {
        birthweight: '',
        at15months: []
      },
      age: {
        birthweight: '',
        at1year: []
      },
      later: {
        birthweight: '',
        at2years: []
      },
      immunizationoneUrl: '/immunization/one/',
      patient: '',
      immunization: '',
      immunizationUrl: '/immunization/',
      loading: false
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
        .get(this.immunizationoneUrl + this.$route.params.id)
        .then(response => {
          this.patient = response.data.data.patient
        })
        .catch(error => {
          this.handleError(error)
        })
    },
    createAt6Weeks() {
      axios
        .post(
          this.immunizationUrl + 'atsixweeks/' + this.$route.params.id,
          this.change
        )
        .then(response => {
          this.change = response.data.data
          this.$iziToast.success({
            title: 'Success!',
            message: response.data.message
          })
        })
        .catch(error => {
          this.handleError(error)
        })
    }
  }
}
</script>

<style></style>
