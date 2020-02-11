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
                        <span class="kt-invoice__subtitle">HOSPITAL NO</span>
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
                <h4 style="text-align: center">MICROBIOLOGY</h4>
                <!-- Urine -->
                <div v-if="urine">
                  <hr style="padding: 0 10px" />
                  <h5 class="kt-font-dark" style="text-align: center">
                    Urine/HVS(Microscopy)
                  </h5>
                  <div class="kt-invoice__body kt-invoice__body--centered">
                    <div class="table-responsive">
                      <table class="table">
                        <thead>
                          <tr>
                            <th>TESTS</th>
                            <th>HVS</th>
                            <th>URINE</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Epithelial Cells</td>
                            <td>{{ urine.epitheliaresult }}</td>
                            <td>{{ urine.epitheliahsv }}</td>
                          </tr>
                          <tr>
                            <td>PUS Cells</td>
                            <td>{{ urine.pusresult }}</td>
                            <td>{{ urine.pusresult }}</td>
                          </tr>
                          <tr>
                            <td>T Vaginalis</td>
                            <td>{{ urine.vaginalisresult }}</td>
                            <td>{{ urine.vaginalishsv }}</td>
                          </tr>
                          <tr>
                            <td>Yeast Cells</td>
                            <td>{{ urine.yeastresult }}</td>
                            <td>{{ urine.yeasthsv }}</td>
                          </tr>
                          <tr>
                            <td>RBC</td>
                            <td>{{ urine.rbcresult }}</td>
                            <td>{{ urine.rbchsv }}</td>
                          </tr>
                          <tr>
                            <td>Cast</td>
                            <td>{{ urine.castresult }}</td>
                            <td>{{ urine.casthsv }}</td>
                          </tr>
                          <tr>
                            <td>Crystals</td>
                            <td>{{ urine.crystalsresult }}</td>
                            <td>{{ urine.crystalshsv }}</td>
                          </tr>
                          <tr>
                            <td>Parasites</td>
                            <td>{{ urine.parasitesresult }}</td>
                            <td>{{ urine.parasiteshsv }}</td>
                          </tr>
                          <tr>
                            <td>Others</td>
                            <td>{{ urine.othersresult }}</td>
                            <td>{{ urine.othershsv }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <!-- Urinalysis -->
                <div v-if="urinalysis">
                  <hr />
                  <h5 class="kt-font-dark" style="text-align: center">
                    Urinalysis
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
                            <td>Appearance</td>
                            <td>{{ urinalysis.appearance }}</td>
                          </tr>
                          <tr>
                            <td>Leukocytes</td>
                            <td>{{ urinalysis.leukocytes }}</td>
                          </tr>
                          <tr>
                            <td>Protein</td>
                            <td>{{ urinalysis.protein }}</td>
                          </tr>
                          <tr>
                            <td>Glucose</td>
                            <td>{{ urinalysis.glucose }}</td>
                          </tr>
                          <tr>
                            <td>Blood</td>
                            <td>{{ urinalysis.blood }}</td>
                          </tr>
                          <tr>
                            <td>PH</td>
                            <td>{{ urinalysis.ph }}</td>
                          </tr>
                          <tr>
                            <td>Ascorbic Acid</td>
                            <td>{{ urinalysis.ascorbicacid }}</td>
                          </tr>
                          <tr>
                            <td>Urobilinogen</td>
                            <td>{{ urinalysis.urobilinogen }}</td>
                          </tr>
                          <tr>
                            <td>Ketones</td>
                            <td>{{ urinalysis.ketones }}</td>
                          </tr>
                          <tr>
                            <td>S.gravity</td>
                            <td>{{ urinalysis.sgravity }}</td>
                          </tr>
                          <tr>
                            <td>Bilirubin</td>
                            <td>{{ urinalysis.bilirubin }}</td>
                          </tr>
                          <tr>
                            <td>Nitrite</td>
                            <td>{{ urinalysis.nitrite }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <!-- Stool Analysis -->
                <div v-if="stool">
                  <hr />
                  <h5 class="kt-font-dark" style="text-align: center">
                    Stool Analysis
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
                            <td>Appearance</td>
                            <td>{{ stool.appearance }}</td>
                          </tr>
                          <tr>
                            <td>PUS Cells</td>
                            <td>{{ stool.puscells }}</td>
                          </tr>
                          <tr>
                            <td>RBC</td>
                            <td>{{ stool.rbc }}</td>
                          </tr>
                          <tr>
                            <td>OVA/Cyst</td>
                            <td>{{ stool.ova }}</td>
                          </tr>
                          <tr>
                            <td>Undigested Food Particles</td>
                            <td>{{ stool.food }}</td>
                          </tr>
                          <tr>
                            <td>Schistosoma Ova</td>
                            <td>{{ stool.schistosoma }}</td>
                          </tr>
                          <tr>
                            <td>FOB</td>
                            <td>{{ stool.fob }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <!-- Culture/Sensitivity report -->
                <div v-if="culture">
                  <hr />
                  <h5 class="kt-font-dark" style="text-align: center">
                    Culture/Sensitivity Report
                  </h5>
                  <div class="kt-invoice__body kt-invoice__body--centered">
                    <h6>
                      Sputum: <span class="ml-5">{{ culture.sputum }}</span>
                    </h6>
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
                            <td>Appearance</td>
                            <td>{{ culture.appearance }}</td>
                          </tr>
                          <tr>
                            <td>Pus Cells</td>
                            <td>{{ culture.puscells }}</td>
                          </tr>
                          <tr>
                            <td>RBC</td>
                            <td>{{ culture.rbc }}</td>
                          </tr>
                          <tr>
                            <td>Cellular Debris</td>
                            <td>{{ culture.celluladebris }}</td>
                          </tr>
                          <tr>
                            <td>Spermatozoan</td>
                            <td>{{ culture.spermatozoan }}</td>
                          </tr>
                          <tr>
                            <td>Epithelial Cells</td>
                            <td>{{ culture.epithelialcells }}</td>
                          </tr>
                          <tr>
                            <td>Culture</td>
                            <td>{{ culture.culture }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <!-- Semen Analysis -->
                <div v-if="semenanalysis">
                  <hr />
                  <h5 class="kt-font-dark" style="text-align: center">
                    Semen Analysis
                  </h5>
                  <div class="kt-invoice__body kt-invoice__body--centered">
                    <h6>
                      <span class="kt-font-success">Time Produced</span> :
                      {{ semenanalysis.tproduced | moment('ha') }}
                      <span class="ml-3 mr-3">|</span>
                      <span class="kt-font-warning">Time Received</span> :
                      {{ semenanalysis.treceived | moment('ha') }}
                      <span class="ml-3 mr-3">|</span>
                      <span class="kt-font-brand">Time of Analysis</span> :
                      {{ semenanalysis.tofanalysis | moment('ha') }}
                    </h6>
                    <h6>
                      Method of Production:
                      <span class="ml-3">{{ semenanalysis.method }}</span>
                    </h6>
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
                            <td>Period of Abstinence</td>
                            <td>{{ semenanalysis.pabstinence }}</td>
                          </tr>
                          <tr>
                            <td>Colour</td>
                            <td>{{ semenanalysis.colour }}</td>
                          </tr>

                          <tr>
                            <td>Viscosity</td>
                            <td>{{ semenanalysis.viscosity }}</td>
                          </tr>
                          <tr>
                            <td>Liquefaction</td>
                            <td>{{ semenanalysis.liquefaction }}</td>
                          </tr>
                          <tr>
                            <td>Spillage</td>
                            <td>{{ semenanalysis.spillage }}</td>
                          </tr>
                          <tr>
                            <td>Volume</td>
                            <td>{{ semenanalysis.volume }}</td>
                          </tr>
                          <tr>
                            <td>Odour</td>
                            <td>{{ semenanalysis.odour }}</td>
                          </tr>
                          <tr>
                            <td>PH</td>
                            <td>{{ semenanalysis.ph }}</td>
                          </tr>
                          <tr>
                            <th colspan="7">MICROSCOPY</th>
                          </tr>
                          <tr>
                            <td>Pus Cells</td>
                            <td>{{ semenanalysis.puscells }}</td>
                          </tr>
                          <tr>
                            <td>RBC</td>
                            <td>{{ semenanalysis.rbc }}</td>
                          </tr>
                          <tr>
                            <td>Cellula Debris</td>
                            <td>{{ semenanalysis.celluladebris }}</td>
                          </tr>
                          <tr>
                            <td>Spermatozoan</td>
                            <td>{{ semenanalysis.spermatozoan }}</td>
                          </tr>
                          <tr>
                            <td>Epithelial Cells</td>
                            <td>{{ semenanalysis.epithelialcells }}</td>
                          </tr>
                          <tr>
                            <th colspan="7">PERCENTAGE MOTILITY</th>
                          </tr>
                          <tr>
                            <td>Active</td>
                            <td>{{ semenanalysis.active }}</td>
                          </tr>
                          <tr>
                            <td>Sluggish</td>
                            <td>{{ semenanalysis.sluggish }}</td>
                          </tr>
                          <tr>
                            <td>Non-Progressive</td>
                            <td>{{ semenanalysis.nonprogressive }}</td>
                          </tr>
                          <tr>
                            <td>Dead Cells</td>
                            <td>{{ semenanalysis.deadcells }}</td>
                          </tr>
                          <tr>
                            <td>Non-Progressive</td>
                            <td>210</td>
                          </tr>
                          <tr>
                            <th colspan="7">MORPHOLOGY</th>
                          </tr>
                          <tr>
                            <td>% Normal Cells</td>
                            <td>{{ semenanalysis.normalcells }}</td>
                          </tr>
                          <tr>
                            <td>% Abnormal Cells</td>
                            <td>{{ semenanalysis.abnormalcells }}</td>
                          </tr>
                          <tr>
                            <td>Sperm Count</td>
                            <td>{{ semenanalysis.spermcount }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <!--  Antibiotic Sensitivity -->
                <div v-if="antibiotic">
                  <hr style="padding: 0 10px" />
                  <h5 class="kt-font-dark" style="text-align: center">
                    Antibiotic Sensitivity
                  </h5>
                  <div class="kt-invoice__body kt-invoice__body--centered">
                    <div class="table-responsive">
                      <table class="table">
                        <thead>
                          <tr>
                            <th style="text-transform:uppercase">
                              Antibiotic Sensitivity
                            </th>
                            <th>1</th>
                            <th>2</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Ciprofloxacin</td>
                            <td>{{ antibiotic.ciprofloxacin1 }}</td>
                            <td>{{ antibiotic.ciprofloxacin2 }}</td>
                          </tr>
                          <tr>
                            <td>Ampiciline</td>
                            <td>{{ antibiotic.ampiciline1 }}</td>
                            <td>{{ antibiotic.ampiciline2 }}</td>
                          </tr>
                          <tr>
                            <td>Sparfloxacin</td>
                            <td>{{ antibiotic.Sparfloxacin1 }}</td>
                            <td>{{ antibiotic.Sparfloxacin2 }}</td>
                          </tr>
                          <tr>
                            <td>Erythromycin</td>
                            <td>{{ antibiotic.Erythromycin1 }}</td>
                            <td>{{ antibiotic.Erythromycin2 }}</td>
                          </tr>
                          <tr>
                            <td>Streptomycin</td>
                            <td>{{ antibiotic.Streptomycin1 }}</td>
                            <td>{{ antibiotic.Streptomycin2 }}</td>
                          </tr>
                          <tr>
                            <td>Gentamycin</td>
                            <td>{{ antibiotic.Gentamycin1 }}</td>
                            <td>{{ antibiotic.Gentamycin2 }}</td>
                          </tr>
                          <tr>
                            <td>Pefloxacin</td>
                            <td>{{ antibiotic.Pefloxacin1 }}</td>
                            <td>{{ antibiotic.Pefloxacin2 }}</td>
                          </tr>
                          <tr>
                            <td>Cotrimoxacole</td>
                            <td>{{ antibiotic.Cotrimoxacole1 }}</td>
                            <td>{{ antibiotic.Cotrimoxacole2 }}</td>
                          </tr>
                          <tr>
                            <td>Chloramphenicol</td>
                            <td>{{ antibiotic.Chloramphenicol1 }}</td>
                            <td>{{ antibiotic.Chloramphenicol2 }}</td>
                          </tr>
                          <tr>
                            <td>Ampiclox</td>
                            <td>{{ antibiotic.Ampiclox1 }}</td>
                            <td>{{ antibiotic.Ampiclox2 }}</td>
                          </tr>
                          <tr>
                            <td>Amoxicillin</td>
                            <td>{{ antibiotic.Amoxicillin1 }}</td>
                            <td>{{ antibiotic.Amoxicillin2 }}</td>
                          </tr>
                          <tr>
                            <td>Clavulanic Acid</td>
                            <td>{{ antibiotic.Clavulanic1 }}</td>
                            <td>{{ antibiotic.Clavulanic2 }}</td>
                          </tr>
                          <tr>
                            <td>Ofloxacin</td>
                            <td>{{ antibiotic.Ofloxacin1 }}</td>
                            <td>{{ antibiotic.Ofloxacin2 }}</td>
                          </tr>
                          <tr>
                            <td>Cefuroxime</td>
                            <td>{{ antibiotic.Cefuroxime1 }}</td>
                            <td>{{ antibiotic.Cefuroxime2 }}</td>
                          </tr>
                          <tr>
                            <td>Ceftriaxone</td>
                            <td>{{ antibiotic.Ceftriaxone1 }}</td>
                            <td>{{ antibiotic.Ceftriaxone2 }}</td>
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
                          <th>DATE APPROVED</th>
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
  name: 'microbiologytestresult',
  data() {
    return {
      consultation: '',
      urine: '',
      urinalysis: '',
      stool: '',
      culture: '',
      antibiotic: '',
      semenanalysis: '',
      landingPageUrl: '/consultation/consultation/drugs/',
      approveresulturl: '/laboratory/approve/labtest'
    }
  },
  mounted() {
    this.getMicrobiologyResult()
  },
  methods: {
    handleError(error) {
      this.$iziToast.error({
        title: 'Error!',
        message: error.response.data
      })
    },
    getMicrobiologyResult() {
      axios
        .get(this.landingPageUrl + this.$route.params.id)
        .then(response => {
          this.consultation = response.data.data
          this.urine = response.data.data.urine
          this.urinalysis = response.data.data.urinalysis
          this.stool = response.data.data.stool
          this.culture = response.data.data.culture
          this.antibiotic = response.data.data.antibiotic
          this.semenanalysis = response.data.data.semenanalysis
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
