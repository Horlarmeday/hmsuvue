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
                        <h1>SCAN RESULT</h1>
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
                <h4 style="text-align: center">SCAN</h4>
                <!-- abdominopelvic -->
                <div v-if="abdominopelvic">
                  <hr style="padding: 0 10px" />
                  <h5 class="kt-font-dark" style="text-align: center">
                    Abdominopelvic Scan
                  </h5>
                  <div class="kt-invoice__body kt-invoice__body--centered">
                    <div class="table-responsive">
                      <table class="table">
                        <thead>
                          <tr>
                            <th>FIELDS</th>
                            <th>RESULT</th>
                            <th>URINE</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Liver</td>
                            <td>{{ abdominopelvic.liver }}</td>
                          </tr>
                          <tr>
                            <td>Gall Bladder</td>
                            <td>{{ abdominopelvic.gallbladder }}</td>
                          </tr>
                          <tr>
                            <td>Kidneys/Adrenals</td>
                            <td>{{ abdominopelvic.kidneys }}</td>
                          </tr>
                          <tr>
                            <td>Spleen</td>
                            <td>{{ abdominopelvic.spleen }}</td>
                          </tr>
                          <tr>
                            <td>Stomach/Bowels</td>
                            <td>{{ abdominopelvic.stomach }}</td>
                          </tr>
                          <tr>
                            <td>Appendix</td>
                            <td>{{ abdominopelvic.appendix }}</td>
                          </tr>
                          <tr>
                            <td>Blood Vessels/Lymph Nodes</td>
                            <td>{{ abdominopelvic.bloodvessels }}</td>
                          </tr>
                          <tr>
                            <td>Urinary Bladder</td>
                            <td>{{ abdominopelvic.urinarybladder }}</td>
                          </tr>
                          <tr>
                            <td>Prostate Gland</td>
                            <td>{{ abdominopelvic.prostategland }}</td>
                          </tr>
                          <tr>
                            <td>Impression</td>
                            <td>{{ abdominopelvic.impression }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <!-- transvaginal -->
                <div v-if="transvaginal">
                  <hr />
                  <h5 class="kt-font-dark" style="text-align: center">
                    Transvaginal Scan
                  </h5>
                  <div class="kt-invoice__body kt-invoice__body--centered">
                    <div class="table-responsive">
                      <table class="table">
                        <thead>
                          <tr>
                            <th>FIELDS</th>
                            <th>RESULT</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Uterus</td>
                            <td>{{ transvaginal.uterus }}</td>
                          </tr>
                          <tr>
                            <td>Myometrium</td>
                            <td>{{ transvaginal.myometrium }}</td>
                          </tr>
                          <tr>
                            <td>Ovaries</td>
                            <td>{{ transvaginal.ovaries }}</td>
                          </tr>
                          <tr>
                            <td>Adnexae</td>
                            <td>{{ transvaginal.adnexae }}</td>
                          </tr>
                          <tr>
                            <td>POD</td>
                            <td>{{ transvaginal.pod }}</td>
                          </tr>
                          <tr>
                            <td>Cervix</td>
                            <td>{{ transvaginal.cervix }}</td>
                          </tr>
                          <tr>
                            <td>Impression</td>
                            <td>{{ transvaginal.impression }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <!-- pelvic-->
                <div v-if="pelvic">
                  <hr />
                  <h5 class="kt-font-dark" style="text-align: center">
                    Pelvic Scan
                  </h5>
                  <div class="kt-invoice__body kt-invoice__body--centered">
                    <div class="table-responsive">
                      <table class="table">
                        <thead>
                          <tr>
                            <th>FIELDS</th>
                            <th>RESULT</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Uterus</td>
                            <td>{{ pelvic.uterus }}</td>
                          </tr>
                          <tr>
                            <td>Myometrium</td>
                            <td>{{ pelvic.myometrium }}</td>
                          </tr>
                          <tr>
                            <td>Ovaries</td>
                            <td>{{ pelvic.ovaries }}</td>
                          </tr>
                          <tr>
                            <td>Adnexa</td>
                            <td>{{ pelvic.adnexa }}</td>
                          </tr>
                          <tr>
                            <td>POD</td>
                            <td>{{ pelvic.pod }}</td>
                          </tr>
                          <tr>
                            <td>Cervix</td>
                            <td>{{ pelvic.cervix }}</td>
                          </tr>
                          <tr>
                            <td>Impression</td>
                            <td>{{ pelvic.impression }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <!-- obstetric -->
                <div v-if="obstetric">
                  <hr />
                  <h5 class="kt-font-dark" style="text-align: center">
                    Obstetric Scan
                  </h5>
                  <div class="kt-invoice__body kt-invoice__body--centered">
                    <div class="table-responsive">
                      <table class="table">
                        <thead>
                          <tr>
                            <th>FIELDS</th>
                            <th>RESULT</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Lie</td>
                            <td>{{ obstetric.lie }}</td>
                          </tr>
                          <tr>
                            <td>Presentation</td>
                            <td>{{ obstetric.presentation }}</td>
                          </tr>
                          <tr>
                            <td>Measurements</td>
                            <td>
                              <label for="">GS(mm)</label>
                              <p>{{ obstetric.gs }}</p>

                              <label for=""> CRL(mm)</label>
                              <p>{{ obstetric.crl }}</p>

                              <label for="">BPD(mm)</label>
                              <p>{{ obstetric.bpd }}</p>

                              <label for="">HC(mm)</label>
                              <p>{{ obstetric.hc }}</p>

                              <label for="">AC(mm)</label>
                              <p>{{ obstetric.ac }}</p>

                              <label for="">FL(mm)</label>
                              <p>{{ obstetric.fl }}</p>
                            </td>
                          </tr>
                          <tr>
                            <td>GA</td>
                            <td>{{ obstetric.ga }}</td>
                          </tr>
                          <tr>
                            <td>EDD</td>
                            <td>{{ obstetric.edd | moment('DD/MM/YYYY') }}</td>
                          </tr>
                          <tr>
                            <td>Placenta</td>
                            <td>{{ obstetric.placenta }}</td>
                          </tr>
                          <tr>
                            <td>BPP Scores</td>
                            <td>
                              <label for="">Movement</label>
                              <p>{{ obstetric.movement }}</p>

                              <label for=""> Tone</label>
                              <p>{{ obstetric.tone }}</p>

                              <label for="">Breathing</label>
                              <p>{{ obstetric.breathing }}</p>

                              <label for="">APV</label>
                              <p>{{ obstetric.apv }}</p>

                              <label for="">Total</label>
                              <p>{{ obstetric.total }}</p>
                            </td>
                          </tr>
                          <tr>
                            <td>Amniotic Liquor</td>
                            <td>{{ obstetric.amnioticliquor }}</td>
                          </tr>
                          <tr>
                            <td>AFI</td>
                            <td>{{ obstetric.afi }}</td>
                          </tr>
                          <tr>
                            <td>EFBW</td>
                            <td>{{ obstetric.efbw }}</td>
                          </tr>
                          <tr>
                            <td>Gender</td>
                            <td>{{ obstetric.gender }}</td>
                          </tr>
                          <tr>
                            <td>Foetal Heart Rate(FHR)</td>
                            <td>{{ obstetric.fhr }}</td>
                          </tr>
                          <tr>
                            <td>Cervix</td>
                            <td>{{ obstetric.cervix }}</td>
                          </tr>
                          <tr>
                            <td>Impression</td>
                            <td>{{ obstetric.impression }}</td>
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
                          <!-- <th>CHIEF LABORATORIST</th> -->
                          <th>DATE APPROVED</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <!-- <td>----------------------------</td> -->
                          <td>
                            {{ new Date() | moment('DD/MM/YY, ha') }}
                          </td>
                          <td style="font-size: 11px">
                            This test report is effective only with both
                            signature and specialized stamp. <br />
                            This result shown in this report refer only to the
                            sample tested.
                          </td>
                        </tr>
                        <tr>
                          <!-- <td>Stamp & Signature</td> -->
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <!-- <div class="text-center" style="padding: 20px 0">
                  <button
                    v-if="!consultation.labtestapproved"
                    @click="approveResult"
                    class="btn btn-success btn-elevate mr-3"
                  >
                    Approve Result
                  </button>

                  <button class="btn btn-brand btn-elevate">Print</button>
                </div> -->
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
  name: 'scanresult',
  data() {
    return {
      abdominopelvic: '',
      transvaginal: '',
      pelvic: '',
      obstetric: '',
      consultation: '',
      landingPageUrl: '/consultation/consultation/drugs/'
      //   approveresulturl: '/laboratory/approve/labtest'
    }
  },
  mounted() {
    this.getScanResult()
  },
  methods: {
    handleError(error) {
      this.$iziToast.error({
        title: 'Error!',
        message: error.response.data
      })
    },
    getScanResult() {
      axios
        .get(this.landingPageUrl + this.$route.params.id)
        .then(response => {
          this.consultation = response.data.data
          this.abdominopelvic = response.data.data.abdominopelvic
          this.transvaginal = response.data.data.transvaginal
          this.pelvic = response.data.data.pelvic
          this.obstetric = response.data.data.obstetric
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
