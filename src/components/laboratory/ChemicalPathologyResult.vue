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
                        <span class="kt-invoice__subtitle">INVOICE NO.</span>
                        <span class="kt-invoice__text">GS 000014</span>
                      </div>
                      <div class="kt-invoice__item">
                        <span class="kt-invoice__subtitle"
                          >PATIENT INFORMATION.</span
                        >
                        <span class="kt-invoice__text"
                          >Iris Watson, P.O. Box 283 8562 Fusce RD.<br />Fredrick
                          Nebraska 20620</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <h4 style="text-align: center">CHEMICAL AND PATHOLOGY</h4>
                <!-- Urine -->
                <div>
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
                            <td>80</td>
                          </tr>
                          <tr>
                            <td>PUS Cells</td>
                            <td>120</td>
                          </tr>
                          <tr>
                            <td>K+</td>
                            <td>210</td>
                          </tr>
                          <tr>
                            <td>Cl</td>
                            <td>210</td>
                          </tr>
                          <tr>
                            <td>HCO₃</td>
                            <td>210</td>
                          </tr>
                          <tr>
                            <td>Urea</td>
                            <td>210</td>
                          </tr>
                          <tr>
                            <td>Cr</td>
                            <td>210</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <!-- Urinalysis -->
                <div>
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
                            <td>80</td>
                          </tr>
                          <tr>
                            <td>VLDL</td>
                            <td>120</td>
                          </tr>
                          <tr>
                            <td>HDL</td>
                            <td>210</td>
                          </tr>
                          <tr>
                            <td>TG</td>
                            <td>210</td>
                          </tr>
                          <tr>
                            <td>LDL</td>
                            <td>210</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <!-- Stool Analysis -->
                <div>
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
                            <td>80</td>
                          </tr>
                          <tr>
                            <td>ALT</td>
                            <td>120</td>
                          </tr>
                          <tr>
                            <td>ALP</td>
                            <td>210</td>
                          </tr>
                          <tr>
                            <td>TP</td>
                            <td>210</td>
                          </tr>
                          <tr>
                            <td>ALB</td>
                            <td>210</td>
                          </tr>
                          <tr>
                            <td>TB</td>
                            <td>210</td>
                          </tr>
                          <tr>
                            <td>DB</td>
                            <td>210</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <!-- Culture/Sensitivity report -->
                <div>
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
                            <td>80</td>
                          </tr>
                          <tr>
                            <td>Uric Acid</td>
                            <td>120</td>
                          </tr>
                          <tr>
                            <td>PO42+</td>
                            <td>210</td>
                          </tr>
                          <tr>
                            <td>Mg2+</td>
                            <td>210</td>
                          </tr>
                          <tr>
                            <td>Iron</td>
                            <td>210</td>
                          </tr>
                          <tr>
                            <td>TIBC</td>
                            <td>210</td>
                          </tr>
                          <tr>
                            <td>HBa/c</td>
                            <td>210</td>
                          </tr>
                          <tr>
                            <td>Ionized Ca2+</td>
                            <td>210</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <!-- Semen Analysis -->
                <div>
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
                            <td>80</td>
                          </tr>
                          <tr>
                            <td>CSF Glucose</td>
                            <td>120</td>
                          </tr>
                          <tr>
                            <td>CSF Protein</td>
                            <td>210</td>
                          </tr>
                          <tr>
                            <td>Ascitic Fluid Glucose</td>
                            <td>210</td>
                          </tr>
                          <tr>
                            <td>Ascitic Fluid Total Protein</td>
                            <td>210</td>
                          </tr>
                          <tr>
                            <td>CSF Chloride</td>
                            <td>210</td>
                          </tr>
                          <tr>
                            <td>24 hour Urine Protein</td>
                            <td>210</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <!--  Antibiotic Sensitivity -->
                <div>
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
                            <td>80</td>
                          </tr>
                          <tr>
                            <td>Random Glu.</td>
                            <td>120</td>
                          </tr>
                          <tr>
                            <td>2hr pp</td>
                            <td>210</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <!-- Urinalysis -->
                <div>
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
                            <td colspan="7">80</td>
                          </tr>
                          <tr>
                            <td>60min</td>
                            <td colspan="7">120</td>
                          </tr>
                          <tr>
                            <td>120min</td>
                            <td colspan="7">210</td>
                          </tr>
                          <tr>
                            <th>Urine</th>
                            <th>Presence of Glucose</th>
                            <th>Presence of Protein</th>
                            <th>Others</th>
                          </tr>
                          <tr>
                            <td>Fasting</td>
                            <td>210</td>
                            <td>210</td>
                            <td>210</td>
                          </tr>
                          <tr>
                            <td>60 Mins</td>
                            <td>210</td>
                            <td>210</td>
                            <td>210</td>
                          </tr>
                          <tr>
                            <td>120 Mins</td>
                            <td>210</td>
                            <td>210</td>
                            <td>210</td>
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
                            <td>210</td>
                            <td>210</td>
                          </tr>
                          <tr>
                            <td>2 - 3 days</td>
                            <td>210</td>
                            <td>210</td>
                          </tr>
                          <tr>
                            <td>3 - 5 days</td>
                            <td>210</td>
                            <td>210</td>
                          </tr>
                          <tr>
                            <td>Above 5 days</td>
                            <td>210</td>
                            <td>210</td>
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
                          <td>Jan 07, 2018</td>
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
export default {}
</script>

<style scoped>
@import url('../../assets/css/labtest.css');
</style>
