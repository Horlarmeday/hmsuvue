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
                        <span class="kt-invoice__text">Dec 12, 2020</span>
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
                <h4 style="text-align: center">HAEMATOLOGY AND SEROLOGY</h4>
                <!-- Urine -->
                <div v-if="fbc1">
                  <hr style="padding: 0 10px" />
                  <h5 class="kt-font-dark" style="text-align: center">
                    FBC ONE
                  </h5>
                  <div class="kt-invoice__body kt-invoice__body--centered">
                    <div class="table-responsive">
                      <table class="table">
                        <thead>
                          <tr>
                            <th>FBC</th>
                            <th>RESULT</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>WBC</td>
                            <td>{{ fbc1.wbc }}</td>
                          </tr>
                          <tr>
                            <td>NEU</td>
                            <td>{{ fbc1.neu }}</td>
                          </tr>
                          <tr>
                            <td>MON</td>
                            <td>{{ fbc1.mon }}</td>
                          </tr>
                          <tr>
                            <td>EO</td>
                            <td>{{ fbc1.eo }}</td>
                          </tr>
                          <tr>
                            <td>LYM</td>
                            <td>{{ fbc1.lym }}</td>
                          </tr>
                          <tr>
                            <td>BAS</td>
                            <td>{{ fbc1.bas }}</td>
                          </tr>
                          <tr>
                            <td>RBC</td>
                            <td>{{ fbc1.rbc }}</td>
                          </tr>
                          <tr>
                            <td>HGB</td>
                            <td>{{ fbc1.hgb }}</td>
                          </tr>
                          <tr>
                            <td>HCT</td>
                            <td>{{ fbc1.hct }}</td>
                          </tr>
                          <tr>
                            <td>MCV</td>
                            <td>{{ fbc1.mcv }}</td>
                          </tr>
                          <tr>
                            <td>MCH</td>
                            <td>{{ fbc1.mch }}</td>
                          </tr>
                          <tr>
                            <td>MCHC</td>
                            <td>{{ fbc1.mchc }}</td>
                          </tr>
                          <tr>
                            <td>RDW</td>
                            <td>{{ fbc1.rdw }}</td>
                          </tr>
                          <tr>
                            <td>PLT</td>
                            <td>{{ fbc1.plt }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <!--     fbc2: -->
                <div v-if="fbc2">
                  <hr />
                  <h5 class="kt-font-dark" style="text-align: center">
                    FBC TWO
                  </h5>
                  <div class="kt-invoice__body kt-invoice__body--centered">
                    <div class="table-responsive">
                      <table class="table">
                        <thead>
                          <tr>
                            <th>DIFFERENTIAL</th>
                            <th>RESULT</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Neutrophils</td>
                            <td>{{ fbc2.Neutrophils }}</td>
                          </tr>
                          <tr>
                            <td>Bands(Neutrophilic)</td>
                            <td>{{ fbc2.Bands }}</td>
                          </tr>
                          <tr>
                            <td>Lymphocytes</td>
                            <td>{{ fbc2.Lymphocytes }}</td>
                          </tr>
                          <tr>
                            <td>Atypical Lymphocytes</td>
                            <td>{{ fbc2.atypical }}</td>
                          </tr>
                          <tr>
                            <td>Monocytes</td>
                            <td>{{ fbc2.Monocytes }}</td>
                          </tr>
                          <tr>
                            <td>Eosinophils</td>
                            <td>{{ fbc2.Eosinophils }}</td>
                          </tr>
                          <tr>
                            <td>Basophils</td>
                            <td>{{ fbc2.Basophils }}</td>
                          </tr>
                          <tr>
                            <th colspan="7">RBC MORPHOLOGY</th>
                          </tr>
                          <tr>
                            <td>Anisocytosis</td>
                            <td>{{ fbc2.text1 }}</td>
                          </tr>
                          <tr>
                            <td>Microcytosis</td>
                            <td>{{ fbc2.text2 }}</td>
                          </tr>
                          <tr>
                            <td>Macrocytosis</td>
                            <td>{{ fbc2.text3 }}</td>
                          </tr>
                          <tr>
                            <td>Hypochromia</td>
                            <td>{{ fbc2.text4 }}</td>
                          </tr>
                          <tr>
                            <td>Poikliocytosis</td>
                            <td>{{ fbc2.text5 }}</td>
                          </tr>
                          <tr>
                            <th colspan="7">Morphology terms</th>
                          </tr>
                          <tr>
                            <th>Slight = +</th>
                            <th>
                              Moderate = ++
                              <span class="ml-5">Marked = +++</span>
                            </th>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <!-- HStests -->
                <div v-if="HStests">
                  <hr />
                  <h5 class="kt-font-dark" style="text-align: center">
                    TESTS
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
                            <td>PCV (30 - 52%)</td>
                            <td>{{ HStests.pcv }}</td>
                          </tr>
                          <tr>
                            <td>X-Matching</td>
                            <td>{{ HStests.xmatching }}</td>
                          </tr>
                          <tr>
                            <td>Bleeding Time (3 - 10 min)</td>
                            <td>{{ HStests.bleedingtime }}</td>
                          </tr>
                          <tr>
                            <td>Clotting Time (3 - 10 min)</td>
                            <td>{{ HStests.clottingtime }}</td>
                          </tr>
                          <tr>
                            <td>Genotype</td>
                            <td>{{ HStests.genotype }}</td>
                          </tr>
                          <tr>
                            <td>Blood Group</td>
                            <td>{{ HStests.bloodgroup }}</td>
                          </tr>
                          <tr>
                            <td>Prothrombin Time (11 - 14 sec)</td>
                            <td>{{ HStests.prothrombintime }}</td>
                          </tr>
                          <tr>
                            <td>INR (0.8 - 1.1)</td>
                            <td>{{ HStests.inr }}</td>
                          </tr>
                          <tr>
                            <td>RVS</td>
                            <td>{{ HStests.rvs }}</td>
                          </tr>
                          <tr>
                            <td>MP</td>
                            <td>{{ HStests.mp }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <!-- widalreaction -->
                <div v-if="widalreaction">
                  <hr />
                  <h5 class="kt-font-dark" style="text-align: center">
                    Widal Reaction
                  </h5>
                  <div class="kt-invoice__body kt-invoice__body--centered">
                    <h6>Sputum: Ear</h6>
                    <div class="table-responsive">
                      <table class="table">
                        <thead>
                          <tr>
                            <th>WIDAL REACTION</th>
                            <th>O</th>
                            <th>H</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Salmonella Typhi</td>
                            <td>{{ widalreaction.salmonellaO }}</td>
                            <td>{{ widalreaction.salmonellaH }}</td>
                          </tr>
                          <tr>
                            <td>S.Paratyphi A</td>
                            <td>{{ widalreaction.paratyphiAO }}</td>
                            <td>{{ widalreaction.paratyphiAH }}</td>
                          </tr>
                          <!-- <tr>
                            <td>RBC</td>
                            <td>{{widalreaction.}}</td>
                            <td>210</td>
                          </tr> -->
                          <tr>
                            <td>S.Paratyphi B</td>
                            <td>{{ widalreaction.paratyphiBO }}</td>
                            <td>{{ widalreaction.paratyphiBH }}</td>
                          </tr>
                          <tr>
                            <td>S.Paratyphi C</td>
                            <td>{{ widalreaction.paratyphiCO }}</td>
                            <td>{{ widalreaction.paratyphiCH }}</td>
                          </tr>
                          <tr>
                            <td>Significant Titre</td>
                            <td colspan="7">>= 1/80</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <!-- serologytests -->
                <div v-if="serologytests">
                  <hr />
                  <h5 class="kt-font-dark" style="text-align: center">
                    Serology Tests
                  </h5>
                  <div class="kt-invoice__body kt-invoice__body--centered">
                    <div class="table-responsive">
                      <table class="table">
                        <thead>
                          <tr>
                            <th>SEROLOGY TESTS</th>
                            <th>RESULT</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>H.Pylori</td>
                            <td>{{ serologytests.pylori }}</td>
                          </tr>
                          <tr>
                            <td>RF</td>
                            <td>{{ serologytests.rf }}</td>
                          </tr>
                          <tr>
                            <td>PGT</td>
                            <td>{{ serologytests.pgt }}</td>
                          </tr>
                          <tr>
                            <td>HBsAg</td>
                            <td>{{ serologytests.hbsag }}</td>
                          </tr>
                          <tr>
                            <td>HCV</td>
                            <td>{{ serologytests.hcv }}</td>
                          </tr>
                          <tr>
                            <td>VDRL</td>
                            <td>{{ serologytests.vdrl }}</td>
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
  name: 'haematologytestresult',
  data() {
    return {
      fbc1: '',
      fbc2: '',
      HStests: '',
      widalreaction: '',
      serologytests: '',
      consultation: '',
      landingPageUrl: '/consultation/consultation/drugs/',
      approveresulturl: '/laboratory/approve/labtest'
    }
  },
  mounted() {
    this.getHaematologyResult()
  },
  methods: {
    handleError(error) {
      this.$iziToast.error({
        title: 'Error!',
        message: error.response.data
      })
    },
    getHaematologyResult() {
      axios
        .get(this.landingPageUrl + this.$route.params.id)
        .then(response => {
          this.consultation = response.data.data
          this.fbc1 = response.data.data.fbc1
          this.fbc2 = response.data.data.fbc2
          this.HStests = response.data.data.HStests
          this.widalreaction = response.data.data.widalreaction
          this.serologytests = response.data.data.serologytests
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
