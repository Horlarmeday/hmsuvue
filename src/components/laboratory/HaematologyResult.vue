<template>
  <!-- begin:: Content -->
  <div class="kt-content  kt-grid__item kt-grid__item--fluid" id="kt_content">
    <!--Begin::Dashboard 1-->

    <!--Begin::Section-->
    <div class="row">
      <div class="col-xl-6">
        <!--begin:: Widgets/Tasks -->
        <div class="kt-portlet kt-portlet--tabs kt-portlet--height-fluid">
          <div class="kt-portlet__head">
            <div class="kt-portlet__head-label">
              <h3 class="kt-portlet__head-title">
                FBC
              </h3>
            </div>
          </div>
          <div class="kt-portlet__body">
            <div class="dt-responsive table-responsive">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>S/N</th>
                    <th>FBC</th>
                    <th>Result</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>WBC</td>
                    <td>
                      <input
                        type="text"
                        v-model="fbc1.wbc"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>NEU</td>
                    <td>
                      <input
                        type="text"
                        v-model="fbc1.neu"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>MON</td>
                    <td>
                      <input
                        type="text"
                        v-model="fbc1.mon"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>EO</td>
                    <td>
                      <input
                        type="text"
                        v-model="fbc1.eo"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>LYM</td>
                    <td>
                      <input
                        type="text"
                        v-model="fbc1.lym"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>BAS</td>
                    <td>
                      <input
                        type="text"
                        v-model="fbc1.bas"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>RBC</td>
                    <td>
                      <input
                        type="text"
                        v-model="fbc1.rbc"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>HGB</td>
                    <td>
                      <input
                        type="text"
                        v-model="fbc1.hgb"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>HCT</td>
                    <td>
                      <input
                        type="text"
                        v-model="fbc1.hct"
                        class="form-control"
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>10</td>
                    <td>MCV</td>
                    <td>
                      <input
                        type="text"
                        v-model="fbc1.mcv"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>11</td>
                    <td>MCH</td>
                    <td>
                      <input
                        type="text"
                        v-model="fbc1.mch"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>12</td>
                    <td>MCHC</td>
                    <td>
                      <input
                        type="text"
                        v-model="fbc1.mchc"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>13</td>
                    <td>RDW</td>
                    <td>
                      <input
                        type="text"
                        v-model="fbc1.rdw"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>14</td>
                    <td>PLT</td>
                    <td>
                      <input
                        type="text"
                        v-model="fbc1.plt"
                        class="form-control"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="card-footer">
              <button
                v-if="!fbc1loading"
                @click="createFbcOneTest"
                class="btn btn-brand btn-elevate float-right"
              >
                Save
              </button>
              <button
                v-else
                class="btn btn-brand kt-spinner kt-spinner--right 
                      kt-spinner--sm kt-spinner--light btn-elevate float-right"
                disabled
              >
                Saving...
              </button>
            </div>
          </div>
        </div>

        <!--end:: Widgets/Tasks -->
      </div>
      <div class="col-xl-6">
        <!--begin:: Widgets/New Users-->
        <div class="kt-portlet kt-portlet--tabs kt-portlet--height-fluid">
          <div class="kt-portlet__head">
            <div class="kt-portlet__head-label">
              <h3 class="kt-portlet__head-title">
                FBC Two
              </h3>
            </div>
          </div>
          <div class="kt-portlet__body">
            <div class="dt-responsive table-responsive">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>S/N</th>
                    <th>Differential</th>
                    <th>Result</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Neutrophils</td>
                    <td>
                      <input
                        type="text"
                        v-model="fbc2.Neutrophils"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Bands(Neutrophilic)</td>
                    <td>
                      <input
                        type="text"
                        v-model="fbc2.Bands"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Lymphocytes</td>
                    <td>
                      <input
                        type="text"
                        v-model="fbc2.Lymphocytes"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Atypical Lymphocytes</td>
                    <td>
                      <input
                        type="text"
                        v-model="fbc2.atypical"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Monocytes</td>
                    <td>
                      <input
                        type="text"
                        v-model="fbc2.Monocytes"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Eosinophils</td>
                    <td>
                      <input
                        type="text"
                        v-model="fbc2.Eosinophils"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>Basophils</td>
                    <td>
                      <input
                        type="text"
                        v-model="fbc2.Basophils"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th colspan="7">RBC Morphology</th>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>Anisocytosis</td>
                    <td>
                      <input
                        type="text"
                        v-model="fbc2.text1"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>Microcytosis</td>
                    <td>
                      <input
                        type="text"
                        v-model="fbc2.text2"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>Macrocytosis</td>
                    <td>
                      <input
                        type="text"
                        v-model="fbc2.text3"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>Hypochromia</td>
                    <td>
                      <input
                        type="text"
                        v-model="fbc2.text4"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>11</td>
                    <td>Poikliocytosis</td>
                    <td>
                      <input
                        type="text"
                        v-model="fbc2.text5"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th colspan="7">Morphology terms</th>
                  </tr>
                  <tr>
                    <th colspan="2">Slight = +</th>
                    <th colspan="2">Moderate = ++</th>
                    <th colspan="2">Marked = +++</th>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="card-footer">
              <button
                v-if="!fbc2loading"
                @click="createFbcTwoTest"
                class="btn btn-brand btn-elevate float-right"
              >
                Save
              </button>
              <button
                v-else
                class="btn btn-brand kt-spinner kt-spinner--right 
                      kt-spinner--sm kt-spinner--light btn-elevate float-right"
                disabled
              >
                Saving...
              </button>
            </div>
          </div>
        </div>

        <!--end:: Widgets/New Users-->
      </div>
    </div>
    <!--End::Section-->

    <!--Begin::Section-->
    <div class="row">
      <div class="col-xl-6">
        <!--begin:: Widgets/New Users-->
        <div class="kt-portlet kt-portlet--tabs kt-portlet--height-fluid">
          <div class="kt-portlet__head">
            <div class="kt-portlet__head-label">
              <h3 class="kt-portlet__head-title">
                TESTS
              </h3>
            </div>
          </div>
          <div class="kt-portlet__body">
            <div class="dt-responsive table-responsive">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>S/N</th>
                    <th>Tests</th>
                    <th>Result</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>PCV (30 - 52%)</td>
                    <td>
                      <input
                        type="text"
                        v-model="tests.pcv"
                        class="form-control"
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>2</td>
                    <td>X-Matching</td>
                    <td>
                      <input
                        type="text"
                        v-model="tests.xmatching"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Bleeding Time (3 - 10 min)</td>
                    <td>
                      <input
                        type="text"
                        v-model="tests.bleedingtime"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Clotting Time (3 - 10 min)</td>
                    <td>
                      <input
                        type="text"
                        v-model="tests.Neutrophils"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Genotype</td>
                    <td>
                      <input
                        type="text"
                        v-model="tests.genotype"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>Blood Group</td>
                    <td>
                      <input
                        type="text"
                        v-model="tests.bloodgroup"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>Prothrombin Time (11 - 14 sec)</td>
                    <td>
                      <input
                        type="text"
                        v-model="tests.prothrombintime"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>INR (0.8 - 1.1)</td>
                    <td>
                      <input
                        type="text"
                        v-model="tests.inr"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>RVS</td>
                    <td>
                      <input
                        type="text"
                        v-model="tests.rvs"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>MP</td>
                    <td>
                      <textarea
                        v-model="tests.mp"
                        class="form-control"
                        cols="30"
                        rows="10"
                      ></textarea>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="card-footer">
              <button
                v-if="!hstestsloading"
                @click="createHSTests"
                class="btn btn-brand btn-elevate float-right"
              >
                Save
              </button>
              <button
                v-else
                class="btn btn-brand kt-spinner kt-spinner--right 
                      kt-spinner--sm kt-spinner--light btn-elevate float-right"
                disabled
              >
                Saving...
              </button>
            </div>
          </div>
        </div>

        <!--end:: Widgets/New Users-->
      </div>
      <div class="col-xl-6">
        <!--begin:: Widgets/New Users-->
        <div class="kt-portlet kt-portlet--tabs kt-portlet--height-fluid">
          <div class="kt-portlet__head">
            <div class="kt-portlet__head-label">
              <h3 class="kt-portlet__head-title">
                Widal Reaction
              </h3>
            </div>
          </div>

          <div class="kt-portlet__body">
            <div class="dt-responsive table-responsive">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>S/N</th>
                    <th>Widal Reaction</th>
                    <th>O</th>
                    <th>H</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Salmonella Typhi</td>
                    <td>
                      <input
                        type="text"
                        v-model="widalreaction.salmonellaO"
                        class="form-control"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="salmonellaH"
                        v-model="widalreaction.salmonellaH"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>S.Paratyphi A</td>
                    <td>
                      <input
                        type="text"
                        v-model="widalreaction.paratyphiAO"
                        class="form-control"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        v-model="widalreaction.paratyphiAH"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>S.Paratyphi B</td>
                    <td>
                      <input
                        type="text"
                        v-model="widalreaction.paratyphiBO"
                        class="form-control"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        v-model="widalreaction.paratyphiBH"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>S.Paratyphi C</td>
                    <td>
                      <input
                        type="text"
                        v-model="widalreaction.paratyphiCO"
                        class="form-control"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        v-model="widalreaction.paratyphiCH"
                        class="form-control"
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>5</td>
                    <td>Significant Titre</td>
                    <td colspan="3">
                      <input
                        type="text"
                        placeholder=">= 1/80"
                        class="form-control"
                        readonly
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="card-footer">
              <button
                v-if="!widalloading"
                @click="createWidalReactionTest"
                class="btn btn-brand btn-elevate float-right"
              >
                Save
              </button>
              <button
                v-else
                class="btn btn-brand kt-spinner kt-spinner--right 
                      kt-spinner--sm kt-spinner--light btn-elevate float-right"
                disabled
              >
                Saving...
              </button>
            </div>
          </div>
        </div>

        <!--end:: Widgets/New Users-->
      </div>
    </div>

    <!--End::Section-->

    <!--Begin::Section-->
    <div class="row">
      <div class="col-xl-6">
        <!--begin:: Widgets/New Users-->
        <div class="kt-portlet kt-portlet--tabs kt-portlet--height-fluid">
          <div class="kt-portlet__head">
            <div class="kt-portlet__head-label">
              <h3 class="kt-portlet__head-title">
                Serology Tests
              </h3>
            </div>
          </div>

          <div class="kt-portlet__body">
            <div class="dt-responsive table-responsive">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>S/N</th>
                    <th>Seroloy Test</th>
                    <th>Result</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>H.Pylori</td>
                    <td>
                      <input
                        type="text"
                        v-model="serologytests.pylori"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>RF</td>
                    <td>
                      <input
                        type="text"
                        v-model="serologytests.rf"
                        class="form-control"
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>3</td>
                    <td>PGT</td>
                    <td>
                      <input
                        type="text"
                        v-model="serologytests.pgt"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>HBsAg</td>
                    <td>
                      <input
                        type="text"
                        v-model="serologytests.hbsag"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>HCV</td>
                    <td>
                      <input
                        type="text"
                        v-model="serologytests.hcv"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>VDRL</td>
                    <td>
                      <input
                        type="text"
                        v-model="serologytests.vdrl"
                        class="form-control"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="card-footer">
              <button
                v-if="!serologyloading"
                @click="createSerologyTest"
                class="btn btn-brand btn-elevate float-right"
              >
                Save
              </button>
              <button
                v-else
                class="btn btn-brand kt-spinner kt-spinner--right 
                      kt-spinner--sm kt-spinner--light btn-elevate float-right"
                disabled
              >
                Saving...
              </button>
            </div>
          </div>
        </div>

        <!--end:: Widgets/New Users-->
      </div>
    </div>

    <!--End::Section-->

    <!--End::Dashboard 1-->
  </div>
  <!-- end:: Content -->
</template>

<script>
import axios from '../../axios'
export default {
  name: 'haematologyresult',
  data() {
    return {
      fbc1: {
        wbc: '',
        neu: '',
        mon: '',
        eo: '',
        lym: '',
        bas: '',
        rbc: '',
        hgb: '',
        hct: '',
        mcv: '',
        mch: '',
        mchc: '',
        rdw: '',
        plt: ''
      },
      fbc2: {
        Neutrophils: '',
        Bands: '',
        Lymphocytes: '',
        atypical: '',
        Monocytes: '',
        Eosinophils: '',
        Basophils: '',
        text1: '',
        text2: '',
        text3: '',
        text4: '',
        text5: ''
      },
      tests: {
        pcv: '',
        esr: '',
        xmatching: '',
        bleedingtime: '',
        clottingtime: '',
        genotype: '',
        bloodgroup: '',
        prothrombintime: '',
        inr: '',
        rvs: '',
        mp: ''
      },
      widalreaction: {
        salmonellaO: '',
        salmonellaH: '',
        paratyphiAO: '',
        paratyphiAH: '',
        paratyphiBO: '',
        paratyphiBH: '',
        paratyphiCO: '',
        paratyphiCH: '',
        signtitre: ''
      },
      serologytests: {
        pylori: '',
        rf: '',
        chlamydia: '',
        pgt: '',
        hbsag: '',
        hcv: '',
        vdrl: ''
      },
      landingPageUrl: '/test/microbiology/result/',
      updatefbcone: '/test/haematology/fbcone/',
      updatefbctwo: '/test/haematology/fbctwo/',
      updatehstests: '/test/haematology/hstests/',
      updatewidalreaction: '/test/haematology/widalreaction/',
      updateserologytests: '/test/haematology/serologytests/',

      fbc1loading: false,
      fbc2loading: false,
      hstestsloading: false,
      widalloading: false,
      serologyloading: false
    }
  },
  mounted() {
    this.getPage()
  },
  methods: {
    handleError(error) {
      console.log(error)
      this.$iziToast.error({
        title: 'Error!',
        message: error.response.data
      })
    },
    getPage() {
      axios
        .get(this.landingPageUrl + this.$route.params.id)
        .then(response => {
          if (response.data.data.fbc1) {
            this.fbc1 = response.data.data.fbc1
          }
          if (response.data.data.fbc2) {
            this.fbc2 = response.data.data.fbc2
          }
          if (response.data.data.HStests) {
            this.tests = response.data.data.HStests
          }
          if (response.data.data.widalreaction) {
            this.widalreaction = response.data.data.widalreaction
          }
          if (response.data.data.serologytests) {
            this.serologytests = response.data.data.serologytests
          }
        })
        .catch(error => {
          this.handleError(error)
        })
    },
    createFbcOneTest() {
      this.fbc1loading = true
      axios
        .put(this.updatefbcone + this.$route.params.id, this.fbc1)
        .then(response => {
          this.fbc1loading = false
          this.fbc1 = response.data.data.fbc1
          this.$iziToast.success({
            title: 'Success!',
            message: response.data.message
          })
        })
        .catch(error => {
          this.fbc1loading = false
          this.handleError(error)
        })
    },
    createFbcTwoTest() {
      this.fbc2loading = true
      axios
        .put(this.updatefbctwo + this.$route.params.id, this.fbc2)
        .then(response => {
          this.fbc2loading = false
          this.fbc2 = response.data.data.fbc2
          this.$iziToast.success({
            title: 'Success!',
            message: response.data.message
          })
        })
        .catch(error => {
          this.fbc2loading = false
          this.handleError(error)
        })
    },
    createHSTests() {
      this.hstestsloading = true
      axios
        .put(this.updatehstests + this.$route.params.id, this.tests)
        .then(response => {
          this.hstestsloading = false
          this.tests = response.data.data.HStests
          this.$iziToast.success({
            title: 'Success!',
            message: response.data.message
          })
        })
        .catch(error => {
          this.hstestsloading = false
          this.handleError(error)
        })
    },
    createWidalReactionTest() {
      this.widalloading = true
      axios
        .put(
          this.updatewidalreaction + this.$route.params.id,
          this.widalreaction
        )
        .then(response => {
          this.widalloading = false
          this.widalreaction = response.data.data.widalreaction
          this.$iziToast.success({
            title: 'Success!',
            message: response.data.message
          })
        })
        .catch(error => {
          this.widalloading = false
          this.handleError(error)
        })
    },
    createSerologyTest() {
      this.serologyloading = true
      axios
        .put(
          this.updateserologytests + this.$route.params.id,
          this.serologytests
        )
        .then(response => {
          this.serologyloading = false
          this.serologytests = response.data.data.serologytests
          this.$iziToast.success({
            title: 'Success!',
            message: response.data.message
          })
        })
        .catch(error => {
          this.serologyloading = false
          this.handleError(error)
        })
    }
  },
  filters: {
    toCurrency: function(value) {
      if (typeof value !== 'number') {
        var formatCurreny = new Intl.NumberFormat('en-US').format(
          parseInt(value)
        )
        return formatCurreny
      }
      var formatter = new Intl.NumberFormat('en-US').format(value)
      return formatter
    }
  }
}
</script>

<style></style>
