<template>
  <!-- begin:: Content -->
  <div class="kt-content  kt-grid__item kt-grid__item--fluid" id="kt_content">
    <div class="row">
      <div class="col-lg-12">
        <div class="kt-portlet">
          <div class="kt-portlet__body kt-portlet__body--fit">
            <div class="kt-invoice-2">
              <div class="kt-invoice__wrapper">
                <div class="kt-invoice__head">
                  <div
                    class="kt-invoice__container kt-invoice__container--centered"
                  >
                    <div class="kt-invoice__logo">
                      <a href="#">
                        <h1>TEST RESULT</h1>
                      </a>
                      <a href="#">
                        <img width="50" src="../../assets/ms.png" />
                      </a>
                    </div>
                    <span class="kt-invoice__desc">
                      <span
                        >Daughter of Charity,<br />
                        St. Vincent Specialist Hospital Kubwa, Abuja</span
                      >
                      <span>+234-8134-848-878</span>
                    </span>
                    <div class="kt-invoice__items">
                      <div class="kt-invoice__item">
                        <span class="kt-invoice__subtitle">DATE</span>
                        <span class="kt-invoice__text">{{
                          new Date() | moment('dddd, MMMM Do YYYY, h:mma')
                        }}</span>
                      </div>
                      <div class="kt-invoice__item">
                        <span class="kt-invoice__subtitle">HOSPITAL NO.</span>
                        <span class="kt-invoice__text">GS 000014</span>
                      </div>
                      <div class="kt-invoice__item">
                        <span class="kt-invoice__subtitle"
                          >PATIENT INFORMATION.</span
                        >
                        <span
                          v-if="consultation.patient"
                          class="kt-invoice__text"
                          >{{ consultation.patient.firstname }}
                          {{ consultation.patient.lastname }}<br />
                        </span>
                        <span
                          v-if="consultation.dependant"
                          class="kt-invoice__text"
                          >{{ consultation.dependant.name }}
                          <br />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <h4 style="text-align: center">CHEMICAL AND PATHOLOGY</h4>
                <!-- seucranalysis -->
                <div v-if="seucranalysis">
                  <hr style="padding: 0 10px" />
                  <h5 class="kt-font-dark" style="text-align: center">
                    S/E/U/Cr
                  </h5>
                  <div class="kt-invoice__body kt-invoice__body--centered">
                    <div class="table-responsive">
                      <table class="table">
                        <thead>
                          <tr>
                            <th>TESTS</th>
                            <th>RESULT</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Na+</td>
                            <td>{{ seucranalysis.Na }}</td>
                          </tr>

                          <tr>
                            <td>K+</td>
                            <td>{{ seucranalysis.K }}</td>
                          </tr>
                          <tr>
                            <td>Cl</td>
                            <td>{{ seucranalysis.Cl }}</td>
                          </tr>
                          <tr>
                            <td>HCO₃</td>
                            <td>{{ seucranalysis.HCO }}</td>
                          </tr>
                          <tr>
                            <td>Urea</td>
                            <td>{{ seucranalysis.urea }}</td>
                          </tr>
                          <tr>
                            <td>Cr</td>
                            <td>{{ seucranalysis.Cr }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <!-- lipiprofile -->
                <div v-if="lipiprofile">
                  <hr />
                  <h5 class="kt-font-dark" style="text-align: center">
                    Lipid Profile
                  </h5>
                  <div class="kt-invoice__body kt-invoice__body--centered">
                    <div class="table-responsive">
                      <table class="table">
                        <thead>
                          <tr>
                            <th>TESTS</th>
                            <th>RESULT</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Chol</td>
                            <td>{{ lipiprofile.chol }}</td>
                          </tr>
                          <tr>
                            <td>VLDL</td>
                            <td>{{ lipiprofile.vldl }}</td>
                          </tr>
                          <tr>
                            <td>HDL</td>
                            <td>{{ lipiprofile.hdl }}</td>
                          </tr>
                          <tr>
                            <td>TG</td>
                            <td>{{ lipiprofile.tg }}</td>
                          </tr>
                          <tr>
                            <td>LDL</td>
                            <td>{{ lipiprofile.ldl }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <!-- lft -->
                <div v-if="lft">
                  <hr />
                  <h5 class="kt-font-dark" style="text-align: center">
                    LFT
                  </h5>
                  <div class="kt-invoice__body kt-invoice__body--centered">
                    <div class="table-responsive">
                      <table class="table">
                        <thead>
                          <tr>
                            <th>TESTS</th>
                            <th>RESULT</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>AST</td>
                            <td>{{ lft.ast }}</td>
                          </tr>
                          <tr>
                            <td>ALT</td>
                            <td>{{ lft.alt }}</td>
                          </tr>
                          <tr>
                            <td>ALP</td>
                            <td>{{ lft.alp }}</td>
                          </tr>
                          <tr>
                            <td>TP</td>
                            <td>{{ lft.tp }}</td>
                          </tr>
                          <tr>
                            <td>ALB</td>
                            <td>{{ lft.alb }}</td>
                          </tr>
                          <tr>
                            <td>TB</td>
                            <td>{{ lft.tb }}</td>
                          </tr>
                          <tr>
                            <td>DB</td>
                            <td>{{ lft.db }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <!-- serum -->
                <div v-if="serum">
                  <hr />
                  <h5 class="kt-font-dark" style="text-align: center">
                    Serum
                  </h5>
                  <div class="kt-invoice__body kt-invoice__body--centered">
                    <div class="table-responsive">
                      <table class="table">
                        <thead>
                          <tr>
                            <th>TESTS</th>
                            <th>RESULT</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Total Ca2+</td>
                            <td>{{ serum.totatlca2 }}</td>
                          </tr>
                          <tr>
                            <td>Uric Acid</td>
                            <td>{{ serum.uricacid }}</td>
                          </tr>
                          <tr>
                            <td>PO42+</td>
                            <td>{{ serum.po42 }}</td>
                          </tr>
                          <tr>
                            <td>Mg2+</td>
                            <td>{{ serum.mg2 }}</td>
                          </tr>
                          <tr>
                            <td>Iron</td>
                            <td>{{ serum.iron }}</td>
                          </tr>
                          <tr>
                            <td>TIBC</td>
                            <td>{{ serum.tibc }}</td>
                          </tr>
                          <tr>
                            <td>HBa/c</td>
                            <td>{{ serum.hbac }}</td>
                          </tr>
                          <tr>
                            <td>Ionized Ca2+</td>
                            <td>{{ serum.ionizedca2 }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <!-- analyte-->
                <div v-if="analyte">
                  <hr />
                  <h5 class="kt-font-dark" style="text-align: center">
                    Analyte
                  </h5>
                  <div class="kt-invoice__body kt-invoice__body--centered">
                    <div class="table-responsive">
                      <table class="table">
                        <thead>
                          <tr>
                            <th>TESTS</th>
                            <th>RESULT</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Urine Protein</td>
                            <td>{{ analyte.urineprotein }}</td>
                          </tr>
                          <tr>
                            <td>CSF Glucose</td>
                            <td>{{ analyte.csfglucose }}</td>
                          </tr>
                          <tr>
                            <td>CSF Protein</td>
                            <td>{{ analyte.csfprotein }}</td>
                          </tr>
                          <tr>
                            <td>Ascitic Fluid Glucose</td>
                            <td>{{ analyte.asciticfluid }}</td>
                          </tr>
                          <tr>
                            <td>Ascitic Fluid Total Protein</td>
                            <td>{{ analyte.asciticfluidtotal }}</td>
                          </tr>
                          <tr>
                            <td>CSF Chloride</td>
                            <td>{{ analyte.csfchloride }}</td>
                          </tr>
                          <tr>
                            <td>24 hour Urine Protein</td>
                            <td>{{ analyte.thoururine }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <!--  glucose -->
                <div v-if="glucose">
                  <hr style="padding: 0 10px" />
                  <h5 class="kt-font-dark" style="text-align: center">
                    Glucose
                  </h5>
                  <div class="kt-invoice__body kt-invoice__body--centered">
                    <div class="table-responsive">
                      <table class="table">
                        <thead>
                          <tr>
                            <th style="text-transform:uppercase">
                              GLUCOSE
                            </th>
                            <th>RESULTS</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Fasting Glu.</td>
                            <td>{{ glucose.fastingglu }}</td>
                          </tr>
                          <tr>
                            <td>Random Glu.</td>
                            <td>{{ glucose.randomglu }}</td>
                          </tr>
                          <tr>
                            <td>2hr pp</td>
                            <td>{{ glucose.hrpp }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <!-- ogtt -->
                <div v-if="ogtt">
                  <hr />
                  <h5 class="kt-font-dark" style="text-align: center">
                    OGTT
                  </h5>
                  <div class="kt-invoice__body kt-invoice__body--centered">
                    <div class="table-responsive">
                      <table class="table">
                        <thead>
                          <tr>
                            <th>TIME</th>
                            <th colspan="7">GLUCOSE VALUE</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>0min</td>
                            <td colspan="7">{{ ogtt.zeromin }}</td>
                          </tr>
                          <tr>
                            <td>60min</td>
                            <td colspan="7">{{ ogtt.sixtymin }}</td>
                          </tr>
                          <tr>
                            <td>120min</td>
                            <td colspan="7">{{ ogtt.onetwentymin }}</td>
                          </tr>
                          <tr>
                            <th>Urine</th>
                            <th>Presence of Glucose</th>
                            <th>Presence of Protein</th>
                            <th>Others</th>
                          </tr>
                          <tr>
                            <td>Fasting</td>
                            <td>{{ ogtt.fasting }}</td>
                            <td>{{ ogtt.fastingdegree1 }}</td>
                            <td>{{ ogtt.fastingdegree2 }}</td>
                          </tr>
                          <tr>
                            <td>60 Mins</td>
                            <td>{{ ogtt.sixtymins }}</td>
                            <td>{{ ogtt.sixtyminsdegree1 }}</td>
                            <td>{{ ogtt.sixtyminsdegree2 }}</td>
                          </tr>
                          <tr>
                            <td>120 Mins</td>
                            <td>{{ ogtt.onetwentymins }}</td>
                            <td>{{ ogtt.onetwentyminsdegree1 }}</td>
                            <td>{{ ogtt.onetwentyminsdegree2 }}</td>
                          </tr>
                          <tr>
                            <th>Neonate Bilirubin</th>
                            <th>Total</th>
                            <th></th>
                            <th>Direct</th>
                          </tr>
                          <tr>
                            <th>Age in Days</th>
                            <th></th>
                            <th></th>
                          </tr>
                          <tr>
                            <td>0 - 1 day</td>
                            <td>{{ ogtt.zeroto1daytotal }}</td>
                            <td>{{ ogtt.zeroto1daydirect }}</td>
                          </tr>
                          <tr>
                            <td>2 - 3 days</td>
                            <td>{{ ogtt.twoto3daystotal }}</td>
                            <td>{{ ogtt.twoto3daysdirect }}</td>
                          </tr>
                          <tr>
                            <td>3 - 5 days</td>
                            <td>{{ ogtt.threeto5daystotal }}</td>
                            <td>{{ ogtt.threeto5daysdirect }}</td>
                          </tr>
                          <tr>
                            <td>Above 5 days</td>
                            <td>{{ ogtt.above5daystotal }}</td>
                            <td>{{ ogtt.above5daysdirect }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div class="kt-invoice__footer">
                  <div
                    class="kt-invoice__table  kt-invoice__table--centered table-responsive"
                  >
                    <table class="table">
                      <thead>
                        <tr>
                          <th>CHIEF LABORATORIST</th>
                          <th>DATE ISSUED</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>----------------------------</td>
                          <td>
                            {{
                              consultation.labtestapproveddate
                                | moment('DD/MM/YY, ha')
                            }}
                          </td>
                          <td style="font-size: 11px">
                            This test report is effective only with both
                            signature and specialized stamp. <br />
                            This result shown in this report refer only to the
                            sample tested.
                          </td>
                        </tr>
                        <tr>
                          <td>Stamp & Signature</td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="text-center" style="padding: 20px 0">
                  <button
                    v-if="!consultation.labtestapproved"
                    @click="approveResult"
                    class="btn btn-success btn-elevate mr-3"
                  >
                    Approve Result
                  </button>

                  <button class="btn btn-brand btn-elevate">Print</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- end:: Content -->
</template>

<script>
import axios from '../../axios'
export default {
  name: 'ChemicalPathologyResult',
  data() {
    return {
      seucranalysis: '',
      lipiprofile: '',
      lft: '',
      serum: '',
      analyte: '',
      glucose: '',
      ogtt: '',
      consultation: '',
      landingPageUrl: '/consultation/consultation/drugs/',
      approveresulturl: '/laboratory/approve/labtest'
    }
  },
  mounted() {
    this.getChemicalPathologyResult()
  },
  methods: {
    handleError(error) {
      console.log(error.response)
      this.$iziToast.error({
        title: 'Error!',
        message: error.response.data
      })
    },
    getChemicalPathologyResult() {
      axios
        .get(this.landingPageUrl + this.$route.params.id)
        .then(response => {
          this.consultation = response.data.data
          this.seucranalysis = response.data.data.seucranalysis
          this.lipiprofile = response.data.data.lipiprofile
          this.lft = response.data.data.lft
          this.serum = response.data.data.serum
          this.analyte = response.data.data.analyte
          this.ogtt = response.data.data.ogtt
        })
        .catch(error => {
          this.handleError(error)
        })
    },
    approveResult() {
      const data = {
        consultationId: this.consultation._id
      }
      axios
        .post(this.approveresulturl, data)
        .then(response => {
          this.consultation = response.data.data
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

<style scoped>
@import url('../../assets/css/labtest.css');
</style>
