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
                S/E/U/Cr
              </h3>
            </div>
          </div>
          <div class="kt-portlet__body">
            <div class="dt-responsive table-responsive">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>S/N</th>
                    <th>S/E/U/CR</th>
                    <th>Result</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Na+</td>
                    <td>
                      <input
                        type="text"
                        v-model="seucranalysis.Na"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>K+</td>
                    <td>
                      <input
                        type="text"
                        v-model="seucranalysis.K"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Cl</td>
                    <td>
                      <input
                        type="text"
                        v-model="seucranalysis.Cl"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>HCO₃</td>
                    <td>
                      <input
                        type="text"
                        v-model="seucranalysis.hco"
                        class="form-control"
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>5</td>
                    <td>Urea</td>
                    <td>
                      <input
                        type="text"
                        v-model="seucranalysis.urea"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>Cr</td>
                    <td>
                      <input
                        type="text"
                        v-model="seucranalysis.Cr"
                        class="form-control"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="card-footer">
              <button
                v-if="!crloading"
                @click="createCrTest"
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
                Lipid Profile
              </h3>
            </div>
          </div>

          <div class="kt-portlet__body">
            <div class="dt-responsive table-responsive">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>S/N</th>
                    <th>Lipid Profile</th>
                    <th>Results</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Chol</td>
                    <td>
                      <input
                        type="text"
                        v-model="lipiprofile.chol"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>VLDL</td>
                    <td>
                      <input
                        type="text"
                        v-model="lipiprofile.vldl"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>HDL</td>
                    <td>
                      <input
                        type="text"
                        v-model="lipiprofile.hdl"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>TG</td>
                    <td>
                      <input
                        type="text"
                        v-model="lipiprofile.tg"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>LDL</td>
                    <td>
                      <input
                        type="text"
                        v-model="lipiprofile.ldl"
                        class="form-control"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="card-footer">
              <button
                v-if="!lipidloading"
                @click="createLipidTest"
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
                LFT
              </h3>
            </div>
          </div>
          <div class="kt-portlet__body">
            <div class="dt-responsive table-responsive">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>S/N</th>
                    <th>LFT</th>
                    <th>Results</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>AST</td>
                    <td>
                      <input
                        type="text"
                        v-model="lft.ast"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>ALT</td>
                    <td>
                      <input
                        type="text"
                        v-model="lft.alt"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>ALP</td>
                    <td>
                      <input
                        type="text"
                        v-model="lft.alp"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>TP</td>
                    <td>
                      <input
                        type="text"
                        v-model="lft.tp"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>ALB</td>
                    <td>
                      <input
                        type="text"
                        v-model="lft.alb"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>TB</td>
                    <td>
                      <input
                        type="text"
                        v-model="lft.tb"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>DB</td>
                    <td>
                      <input
                        type="text"
                        v-model="lft.db"
                        class="form-control"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="card-footer">
              <button
                v-if="!lftloading"
                @click="createLftTest"
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
                Serum
              </h3>
            </div>
          </div>
          <div class="kt-portlet__body">
            <div class="dt-responsive table-responsive">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>S/N</th>
                    <th>Serum</th>
                    <th>Result</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Total Ca2+</td>
                    <td>
                      <input
                        type="text"
                        v-model="serum.totalca2"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Uric Acid</td>
                    <td>
                      <input
                        type="text"
                        v-model="serum.uricacid"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>PO42+</td>
                    <td>
                      <input
                        type="text"
                        v-model="serum.po42"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Mg2+</td>
                    <td>
                      <input
                        type="text"
                        v-model="serum.mg2"
                        class="form-control"
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>5</td>
                    <td>Iron</td>
                    <td>
                      <input
                        type="text"
                        v-model="serum.iron"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>TIBC</td>
                    <td>
                      <input
                        type="text"
                        v-model="serum.tibc"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>HBa/c</td>
                    <td>
                      <input
                        type="text"
                        v-model="serum.hbac"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>Ionized Ca2+</td>
                    <td>
                      <input
                        type="text"
                        v-model="serum.ionizedca2"
                        class="form-control"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="card-footer">
              <button
                v-if="!serumloading"
                @click="createSerumTest"
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
                Analyte
              </h3>
            </div>
          </div>

          <div class="kt-portlet__body">
            <div class="dt-responsive table-responsive">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>S/N</th>
                    <th>Analyte</th>
                    <th>Results</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Urine Protein</td>
                    <td>
                      <input
                        type="text"
                        v-model="analyte.urineprotein"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>CSF Glucose</td>
                    <td>
                      <input
                        type="text"
                        v-model="analyte.csfglucose"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>CSF Protein</td>
                    <td>
                      <input
                        type="text"
                        v-model="analyte.csfprotein"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Ascitic Fluid Glucose</td>
                    <td>
                      <input
                        type="text"
                        v-model="analyte.asciticfluid"
                        class="form-control"
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>5</td>
                    <td>Ascitic Fluid Total Protein</td>
                    <td>
                      <input
                        type="text"
                        v-model="analyte.asciticfluidtotal"
                        class="form-control"
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>6</td>
                    <td>CSF Chloride</td>
                    <td>
                      <input
                        type="text"
                        v-model="analyte.csfchloride"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>24 hour Urine Protein</td>
                    <td>
                      <input
                        type="text"
                        v-model="analyte.thoururine"
                        class="form-control"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="card-footer">
              <button
                v-if="!analyteloading"
                @click="createAnalyteTest"
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
                Glucose
              </h3>
            </div>
          </div>
          <div class="kt-portlet__body">
            <div class="dt-responsive table-responsive">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>S/N</th>
                    <th>Glucose</th>
                    <th>Results</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Fasting Glu.</td>
                    <td>
                      <input
                        type="text"
                        v-model="glucose.fastingglu"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Random Glu.</td>
                    <td>
                      <input
                        type="text"
                        v-model="glucose.randomglu"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>2hr pp</td>
                    <td>
                      <input
                        type="text"
                        v-model="glucose.hrpp"
                        class="form-control"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="card-footer">
              <button
                v-if="!glucoseloading"
                @click="createGlucoseTest"
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
                OGTT
              </h3>
            </div>
          </div>
          <div class="kt-portlet__body">
            <div class="dt-responsive table-responsive">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>S/N</th>
                    <th>Time</th>
                    <th>Glucose Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>0min</td>
                    <td colspan="7">
                      <input
                        type="text"
                        v-model="ogtt.zeromin"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>60min</td>
                    <td colspan="7">
                      <input
                        type="text"
                        v-model="ogtt.sixtymin"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>120min</td>
                    <td colspan="7">
                      <input
                        type="text"
                        v-model="ogtt.onetwentymin"
                        class="form-control"
                      />
                    </td>
                  </tr>

                  <tr>
                    <th>S/N</th>
                    <th>Urine</th>
                    <th>Presence of Glucose</th>
                    <th>Presence of Protein</th>
                    <th colspan="4">Others</th>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>
                      Fasting
                    </td>
                    <td>
                      <input
                        type="text"
                        v-model="ogtt.fasting"
                        class="form-control"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        v-model="ogtt.fastingdegree1"
                        class="form-control"
                      />
                    </td>
                    <td colspan="2">
                      <input
                        type="text"
                        v-model="ogtt.fastingdegree2"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>
                      60 Mins
                    </td>
                    <td>
                      <input
                        type="text"
                        v-model="ogtt.sixtymins"
                        class="form-control"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        v-model="ogtt.sixtymins"
                        class="form-control"
                      />
                    </td>
                    <td colspan="2">
                      <input
                        type="text"
                        v-model="ogtt.sixtyminsdegree2"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>
                      120 Mins
                    </td>
                    <td>
                      <input
                        type="text"
                        v-model="ogtt.onetwentymins"
                        class="form-control"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        v-model="ogtt.onetwentyminsdegree1"
                        class="form-control"
                      />
                    </td>
                    <td colspan="2">
                      <input
                        type="text"
                        v-model="ogtt.onetwentyminsdegree2"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>S/N</th>
                    <th>Neonate Bilirubin</th>
                    <th>Total</th>
                    <th>Direct</th>
                  </tr>
                  <tr>
                    <th></th>
                    <th colspan="7">Age in Days</th>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>
                      0 - 1 day
                    </td>
                    <td>
                      <input
                        type="text"
                        v-model="ogtt.zeroto1daytotal"
                        class="form-control"
                      />
                    </td>
                    <td colspan="7">
                      <input
                        type="text"
                        v-model="ogtt.zeroto1daydirect"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>
                      2 - 3 days
                    </td>
                    <td>
                      <input
                        type="text"
                        v-model="ogtt.twoto3daystotal"
                        class="form-control"
                      />
                    </td>
                    <td colspan="7">
                      <input
                        type="text"
                        v-model="ogtt.twoto3daysdirect"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>
                      3 - 5 days
                    </td>
                    <td>
                      <input
                        type="text"
                        v-model="ogtt.threeto5daystotal"
                        class="form-control"
                      />
                    </td>
                    <td colspan="7">
                      <input
                        type="text"
                        v-model="ogtt.threeto5daysdirect"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>
                      Above 5 days
                    </td>
                    <td>
                      <input
                        type="text"
                        v-model="ogtt.above5daystotal"
                        class="form-control"
                      />
                    </td>
                    <td colspan="7">
                      <input
                        type="text"
                        v-model="ogtt.above5daysdirect"
                        class="form-control"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="card-footer">
              <button
                v-if="!ogttloading"
                @click="createOgttTest"
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
  name: 'chemicallabresult',
  data() {
    return {
      seucranalysis: {
        Na: '',
        K: '',
        Cl: '',
        HCO: '',
        urea: '',
        Cr: ''
      },
      lipiprofile: {
        chol: '',
        vldl: '',
        hdl: '',
        tg: '',
        ldl: '',
        Cr: ''
      },
      lft: {
        ast: '',
        alt: '',
        alp: '',
        tp: '',
        alb: '',
        tb: '',
        db: ''
      },
      serum: {
        totalca2: '',
        uricacid: '',
        po42: '',
        mg2: '',
        iron: '',
        tibc: '',
        hbac: '',
        ionizedca2: ''
      },
      analyte: {
        urineprotein: '',
        csfglucose: '',
        csfprotein: '',
        asciticfluid: '',
        asciticfluidtotal: '',
        csfchloride: '',
        thoururine: ''
      },
      glucose: {
        fastingglu: '',
        randomglu: '',
        hrpp: ''
      },
      ogtt: {
        zeromin: '',
        sixtymin: '',
        onetwentymin: '',
        fasting: '',
        fastingdegree1: '',
        fastingdegree2: '',
        sixtymins: '',
        sixtyminsdegree1: '',
        sixtyminsdegree2: '',
        sixtyminsdegree3: '',
        onetwentymins: '',
        onetwentyminsdegree1: '',
        onetwentyminsdegree2: '',
        onetwentyminsdegree3: '',
        zeroto1daytotal: '',
        zeroto1daydirect: '',
        twoto3daystotal: '',
        twoto3daysdirect: '',
        threeto5daystotal: '',
        threeto5daysdirect: '',
        above5daystotal: '',
        above5daysdirect: ''
      },
      landingPageUrl: '/test/microbiology/result/',
      updatecr: '/test/chemical/seucranalysis/',
      updatelipid: '/test/chemical/lipiprofile/',
      updatelft: '/test/chemical/lft/',
      updateserum: '/test/chemical/serum/',
      updateanalyte: '/test/chemical/analyte/',
      updateglucose: '/test/chemical/glucose/',
      updateogtt: '/test/chemical/ogtt/',

      crloading: false,
      lipidloading: false,
      lftloading: false,
      serumloading: false,
      analyteloading: false,
      ogttloading: false,
      glucoseloading: false
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
          this.seucranalysis = response.data.data.seucranalysis
          this.lipiprofile = response.data.data.lipiprofile
          this.lft = response.data.data.lft
          this.serum = response.data.data.serum
          this.analyte = response.data.data.analyte
          this.glucose = response.data.data.glucose
          this.ogtt = response.data.data.ogtt
        })
        .catch(error => {
          this.handleError(error)
        })
    },
    createCrTest() {
      this.crloading = true
      axios
        .put(this.updatecr + this.$route.params.id, this.seucranalysis)
        .then(response => {
          this.crloading = false
          this.seucranalysis = response.data.data.seucranalysis
          this.$iziToast.success({
            title: 'Success!',
            message: response.data.message
          })
        })
        .catch(error => {
          this.crloading = false
          this.handleError(error)
        })
    },
    createLipidTest() {
      this.lipidloading = true
      axios
        .put(this.updatelipid + this.$route.params.id, this.lipiprofile)
        .then(response => {
          this.lipidloading = false
          this.lipiprofile = response.data.data.lipiprofile
          this.$iziToast.success({
            title: 'Success!',
            message: response.data.message
          })
        })
        .catch(error => {
          this.lipidloading = false
          this.handleError(error)
        })
    },
    createLftTest() {
      this.lftloading = true
      axios
        .put(this.updatelft + this.$route.params.id, this.lft)
        .then(response => {
          this.lftloading = false
          this.lft = response.data.data.lft
          this.$iziToast.success({
            title: 'Success!',
            message: response.data.message
          })
        })
        .catch(error => {
          this.lftloading = false
          this.handleError(error)
        })
    },
    createSerumTest() {
      this.serumloading = true
      axios
        .put(this.updateserum + this.$route.params.id, this.serum)
        .then(response => {
          this.serumloading = false
          this.serum = response.data.data.serum
          this.$iziToast.success({
            title: 'Success!',
            message: response.data.message
          })
        })
        .catch(error => {
          this.serumloading = false
          this.handleError(error)
        })
    },
    createGlucoseTest() {
      this.glucoseloading = true
      axios
        .put(this.updateglucose + this.$route.params.id, this.glucose)
        .then(response => {
          this.glucoseloading = false
          this.glucose = response.data.data.glucose
          this.$iziToast.success({
            title: 'Success!',
            message: response.data.message
          })
        })
        .catch(error => {
          this.glucoseloading = false
          this.handleError(error)
        })
    },
    createAnalyteTest() {
      this.analyteloading = true
      axios
        .put(this.updateanalyte + this.$route.params.id, this.analyte)
        .then(response => {
          this.analyteloading = false
          this.analyte = response.data.data.analyte
          this.$iziToast.success({
            title: 'Success!',
            message: response.data.message
          })
        })
        .catch(error => {
          this.analyteloading = false
          this.handleError(error)
        })
    },
    createOgttTest() {
      this.ogttloading = true
      axios
        .put(this.updateogtt + this.$route.params.id, this.ogtt)
        .then(response => {
          this.ogttloading = false
          this.ogtt = response.data.data.ogtt
          this.$iziToast.success({
            title: 'Success!',
            message: response.data.message
          })
        })
        .catch(error => {
          this.ogttloading = false
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
