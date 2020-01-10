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
      </div>
      <div class="kt-portlet__body ">
        <!--begin: Datatable -->
        <b-tabs pills card vertical>
          <b-tab class="mb-3" title="Abdominopelvic Scan" active>
            <b-card-text>
              <div class="dt-responsive table-responsive">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th>S/N</th>
                      <th>Fields</th>
                      <th>Result</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Liver</td>
                      <td>
                        <input
                          type="text"
                          v-model="abdominopelvic.liver"
                          class="form-control"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Gall Bladder</td>
                      <td>
                        <input
                          type="text"
                          v-model="abdominopelvic.gallbladder"
                          class="form-control"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Kidneys/Adrenals</td>
                      <td>
                        <input
                          type="text"
                          v-model="abdominopelvic.kidneys"
                          class="form-control"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Spleen</td>
                      <td>
                        <input
                          type="text"
                          v-model="abdominopelvic.spleen"
                          class="form-control"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Stomach/Bowels</td>
                      <td>
                        <input
                          type="text"
                          v-model="abdominopelvic.stomach"
                          class="form-control"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Appendix</td>
                      <td>
                        <input
                          type="text"
                          v-model="abdominopelvic.appendix"
                          class="form-control"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>Blood Vessels/Lymph Nodes</td>
                      <td>
                        <input
                          type="text"
                          v-model="abdominopelvic.bloodvessels"
                          class="form-control"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>Urinary Bladder</td>
                      <td>
                        <input
                          type="text"
                          v-model="abdominopelvic.urinarybladder"
                          class="form-control"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>9</td>
                      <td>Prostate Gland</td>
                      <td>
                        <input
                          type="text"
                          v-model="abdominopelvic.prostategland"
                          class="form-control"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td>Impression</td>
                      <td>
                        <input
                          type="text"
                          v-model="abdominopelvic.impression"
                          class="form-control"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="card-footer">
                <button
                  v-if="!abdominoloading"
                  @click="createAbdominoPelvic"
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
            </b-card-text>
          </b-tab>
          <b-tab class="mb-3" title="Transvaginal Scan">
            <b-card-text>
              <div class="dt-responsive table-responsive">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th>S/N</th>
                      <th>Fields</th>
                      <th>Result</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Uterus</td>
                      <td>
                        <input
                          type="text"
                          v-model="transvaginal.uterus"
                          class="form-control"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Myometrium</td>
                      <td>
                        <input
                          type="text"
                          v-model="transvaginal.myometrium"
                          class="form-control"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Ovaries</td>
                      <td>
                        <input
                          type="text"
                          v-model="transvaginal.ovaries"
                          class="form-control"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Adnexae</td>
                      <td>
                        <input
                          type="text"
                          v-model="transvaginal.adnexae"
                          class="form-control"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>POD</td>
                      <td>
                        <input
                          type="text"
                          v-model="transvaginal.pod"
                          class="form-control"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Cervix</td>
                      <td>
                        <input
                          type="text"
                          v-model="transvaginal.cervix"
                          class="form-control"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>Impression</td>
                      <td>
                        <input
                          type="text"
                          v-model="transvaginal.impression"
                          class="form-control"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="card-footer">
                <button
                  v-if="!transvaginalloading"
                  @click="createTransvaginal"
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
            </b-card-text>
          </b-tab>
          <b-tab class="mb-3" title="Pelvic Scan"
            ><b-card-text>
              <div class="dt-responsive table-responsive">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th>S/N</th>
                      <th>Fields</th>
                      <th>Result</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Uterus</td>
                      <td>
                        <input
                          type="text"
                          v-model="pelvic.uterus"
                          class="form-control"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Myometrium</td>
                      <td>
                        <input
                          type="text"
                          v-model="pelvic.myometrium"
                          class="form-control"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Ovaries</td>
                      <td>
                        <input
                          type="text"
                          v-model="pelvic.ovaries"
                          class="form-control"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Adnexa</td>
                      <td>
                        <input
                          type="text"
                          v-model="pelvic.adnexa"
                          class="form-control"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>POD</td>
                      <td>
                        <input
                          type="text"
                          v-model="pelvic.pod"
                          class="form-control"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Cervix</td>
                      <td>
                        <input
                          type="text"
                          v-model="pelvic.cervix"
                          class="form-control"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>Impression</td>
                      <td>
                        <input
                          type="text"
                          v-model="pelvic.impression"
                          class="form-control"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="card-footer">
                <button
                  v-if="!pelvicloading"
                  @click="createPelvic"
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
            </b-card-text></b-tab
          >
          <b-tab class="mb-3" title="Upload Scan"
            ><b-card-text>Tab contents 3</b-card-text></b-tab
          >
          <b-tab title="Obstetric Scan"
            ><b-card-text>
              <div class="dt-responsive table-responsive">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th>S/N</th>
                      <th>Fields</th>
                      <th>Result</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Lie</td>
                      <td>
                        <select v-model="obstetric.lie" class="form-control">
                          <option selected disabled>Select</option>
                          <option value="Longitudinal">Longitudinal</option>
                          <option value="Transverse">Transverse</option>
                          <option value="Oblique">Oblique</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Presentation</td>
                      <td>
                        <select
                          v-model="obstetric.presentation"
                          class="form-control"
                        >
                          <option selected disabled>Select</option>
                          <option value="Cephalic">Cephalic</option>
                          <option value="Breech">Breech</option>
                          <option value="Transverse">Transverse</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Measurement</td>
                      <td>
                        <label for="">GS(mm)</label>
                        <input
                          type="text"
                          v-model="obstetric.gs"
                          class="form-control"
                        />
                        <label for=""> CRL(mm)</label>

                        <input
                          type="text"
                          v-model="obstetric.crl"
                          class="form-control"
                        />
                        BPD(mm)
                        <input
                          type="text"
                          v-model="obstetric.bpd"
                          class="form-control"
                        />
                        HC(mm)
                        <input
                          type="text"
                          v-model="obstetric.hc"
                          class="form-control"
                        />
                        AC(mm)
                        <input
                          type="text"
                          v-model="obstetric.ac"
                          class="form-control"
                        />
                        FL(mm)
                        <input
                          type="text"
                          v-model="obstetric.fl"
                          class="form-control"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>GA</td>
                      <td>
                        <datetime
                          type="date"
                          input-class="form-control"
                          v-model="obstetric.ga"
                        ></datetime>
                      </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>EDD</td>
                      <td>
                        <datetime
                          type="date"
                          input-class="form-control"
                          v-model="obstetric.edd"
                        ></datetime>
                      </td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Placenta</td>
                      <td>
                        <select
                          v-model="obstetric.placenta"
                          class="form-control"
                        >
                          <option selected disabled>Select</option>
                          <option value="Anteriofundal">Anteriofundal</option>
                          <option value="Posteriofundal">Posteriofundal</option>
                          <option value="Low lying">Low lying</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>BPP Scores</td>
                      <td>
                        Movement
                        <input
                          type="text"
                          v-model="obstetric.movement"
                          class="form-control"
                        />
                        Tone
                        <input
                          type="text"
                          v-model="obstetric.tone"
                          class="form-control"
                        />
                        Breathing
                        <input
                          type="text"
                          v-model="obstetric.breathing"
                          class="form-control"
                        />
                        AFV
                        <input
                          type="text"
                          v-model="obstetric.afv"
                          class="form-control"
                        />
                        Total
                        <input
                          type="text"
                          v-model="obstetric.total"
                          class="form-control"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>Amniotic Liquor</td>
                      <td>
                        <select
                          v-model="obstetric.amnioticliquor"
                          class="form-control"
                        >
                          <option selected disabled>Select</option>
                          <option value="Adequate">Adequate</option>
                          <option value="Inadequate">Inadequate</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>9</td>
                      <td>AFI</td>
                      <td>
                        <input
                          type="text"
                          v-model="obstetric.afi"
                          class="form-control"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td>EFBW</td>
                      <td>
                        <input
                          type="text"
                          v-model="obstetric.efbw"
                          class="form-control"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>11</td>
                      <td>Gender</td>
                      <td>
                        <select v-model="obstetric.gender" class="form-control">
                          <option selected disabled>Select</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>12</td>
                      <td>Foetal Heart Rate(FHR)</td>
                      <td>
                        <input
                          type="text"
                          v-model="obstetric.fhr"
                          class="form-control"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>13</td>
                      <td>Cervix</td>
                      <td>
                        <select v-model="obstetric.cervix" class="form-control">
                          <option selected disabled>Select</option>
                          <option value="Closed">Closed</option>
                          <option value="Effaced">Effaced</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>14</td>
                      <td>Impression</td>
                      <td>
                        <input
                          type="text"
                          v-model="obstetric.impression"
                          class="form-control"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="card-footer">
                <button
                  v-if="!obstetricloading"
                  @click="createObstetric"
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
            </b-card-text></b-tab
          >
        </b-tabs>

        <!--end: Datatable -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from '../../axios'
import { Datetime } from 'vue-datetime'
export default {
  name: 'ultrasound',
  components: {
    datetime: Datetime
  },
  data() {
    return {
      abdominopelvic: {
        liver: '',
        gallbladder: '',
        spleen: '',
        kidneys: '',
        stomach: '',
        impression: '',
        urinarybladder: '',
        appendix: '',
        bloodvessels: '',
        prostategland: '',
        uterus: '',
        ovaries: '',
        adnexa: '',
        pod: '',
        cervix: ''
      },
      transvaginal: {
        impression: '',
        myometrium: '',
        uterus: '',
        ovaries: '',
        adnexae: '',
        pod: '',
        cervix: ''
      },
      pelvic: {
        impression: '',
        myometrium: '',
        uterus: '',
        ovaries: '',
        adnexa: '',
        pod: '',
        cervix: ''
      },
      obstetric: {
        lie: '',
        presentation: '',
        gs: '',
        crl: '',
        bpd: '',
        hc: '',
        ac: '',
        fl: '',
        ga: '',
        edd: '',
        placenta: '',
        movement: '',
        tone: '',
        breathing: '',
        afv: '',
        total: '',
        amnioticliquor: '',
        efbw: '',
        afi: '',
        gender: '',
        fhr: '',
        cervix: '',
        impression: ''
      },
      abdominoloading: false,
      transvaginalloading: false,
      pelvicloading: false,
      obstetricloading: false,
      landingPageUrl: '/test/microbiology/result/',
      updateabdomino: '/test/ultrasound/abdominopelvic/',
      updatetransvaginal: '/test/ultrasound/transvaginal/',
      updatepelvic: '/test/ultrasound/pelvic/',
      updateobstetric: '/test/ultrasound/obstetric/',
      updateupload: '/test/ultrasound/upload/'
    }
  },
  methods: {
    getPage() {
      axios
        .get(this.landingPageUrl + this.$route.params.id)
        .then(response => {
          this.abdominopelvic = response.data.data.abdominopelvic
          this.transvaginal = response.data.data.transvaginal
          this.pelvic = response.data.data.pelvic
          this.obstetric = response.data.data.obstetric
        })
        .catch(error => {
          this.handleError(error)
        })
    },
    createAbdominoPelvic() {
      this.abdominoloading = true
      axios
        .put(this.updateabdomino + this.$route.params.id, this.abdominopelvic)
        .then(response => {
          this.abdominoloading = false
          this.abdominopelvic = response.data.data.abdominopelvic
          this.$iziToast.success({
            title: 'Success!',
            message: response.data.message
          })
        })
        .catch(error => {
          this.abdominoloading = false
          this.handleError(error)
        })
    },
    createTransvaginal() {
      this.transvaginalloading = true
      axios
        .put(this.updatetransvaginal + this.$route.params.id, this.transvaginal)
        .then(response => {
          this.transvaginalloading = false
          this.transvaginal = response.data.data.transvaginal
          this.$iziToast.success({
            title: 'Success!',
            message: response.data.message
          })
        })
        .catch(error => {
          this.transvaginalloading = false
          this.handleError(error)
        })
    },
    createPelvic() {
      this.pelvicloading = true
      axios
        .put(this.updatepelvic + this.$route.params.id, this.pelvic)
        .then(response => {
          this.pelvicloading = false
          this.pelvic = response.data.data.pelvic
          this.$iziToast.success({
            title: 'Success!',
            message: response.data.message
          })
        })
        .catch(error => {
          this.pelvicloading = false
          this.handleError(error)
        })
    },
    createObstetric() {
      this.obstetricloading = true
      axios
        .put(this.updateobstetric + this.$route.params.id, this.obstetric)
        .then(response => {
          this.obstetricloading = false
          this.obstetric = response.data.data.obstetric
          this.$iziToast.success({
            title: 'Success!',
            message: response.data.message
          })
        })
        .catch(error => {
          this.obstetricloading = false
          this.handleError(error)
        })
    }
  }
}
</script>

<style scoped>
.nav-item {
  margin-bottom: 15px;
}
</style>
