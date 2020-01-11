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
                Urine/HVS (Microscopy)
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
                    <th>HVS</th>
                    <th>Urine</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Epithelial Cells</td>
                    <td>
                      <input
                        type="text"
                        v-model="urine.epitheliaresult"
                        class="form-control"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        v-model="urine.epitheliahsv"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>PUS Cells</td>
                    <td>
                      <input
                        type="text"
                        v-model="urine.pusresult"
                        class="form-control"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        v-model="urine.pushsv"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>T Vaginalis</td>
                    <td>
                      <input
                        type="text"
                        v-model="urine.vaginalisresult"
                        class="form-control"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        v-model="urine.vaginalishsv"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Yeast Cells</td>
                    <td>
                      <input
                        type="text"
                        v-model="urine.yeastresult"
                        class="form-control"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        v-model="urine.yeasthsv"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>RBC</td>
                    <td>
                      <input
                        type="text"
                        v-model="urine.rbcresult"
                        class="form-control"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        v-model="urine.rbchsv"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>Cast</td>
                    <td>
                      <input
                        type="text"
                        v-model="urine.castresult"
                        class="form-control"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        v-model="urine.castresult"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>Crystals</td>
                    <td>
                      <input
                        type="text"
                        v-model="urine.crystalsresult"
                        class="form-control"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        v-model="urine.crystalshsv"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>Parasites</td>
                    <td>
                      <input
                        type="text"
                        v-model="urine.parasitesresult"
                        class="form-control"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        v-model="urine.parasiteshsv"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>Others</td>
                    <td>
                      <input
                        type="text"
                        v-model="urine.othersresult"
                        class="form-control"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        v-model="urine.othershsv"
                        class="form-control"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="card-footer">
              <button
                v-if="!urineloading"
                @click="createUrineTest"
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
                Urinalysis
              </h3>
            </div>
          </div>
          <div class="kt-portlet__body">
            <!--begin: Search Form -->
            <div
              class="kt-form kt-form--label-right kt-margin-t-20 kt-margin-b-10"
            >
              <div class="row align-items-center">
                <div class="col-xl-12 order-2 order-xl-1">
                  <div class="row align-items-center">
                    <div class="col-md-12 kt-margin-b-20-tablet-and-mobile">
                      <div class="kt-form__group kt-form__group--inline">
                        <div class="kt-form__label">
                          <label>Appearance</label>
                        </div>
                        <div class="kt-form__control">
                          <textarea
                            v-model="urinalysis.appearance"
                            class="form-control"
                            cols="20"
                            rows="10"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!--end: Search Form -->
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
                    <td>Leukocytes</td>
                    <td>
                      <input
                        type="text"
                        v-model="urinalysis.leukocytes"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Protein</td>
                    <td>
                      <input
                        type="text"
                        v-model="urinalysis.protein"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Glucose</td>
                    <td>
                      <input
                        type="text"
                        v-model="urinalysis.glucose"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Blood</td>
                    <td>
                      <input
                        type="text"
                        v-model="urinalysis.blood"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>PH</td>
                    <td>
                      <input
                        type="text"
                        v-model="urinalysis.ph"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>Ascorbic Acid</td>
                    <td>
                      <input
                        type="text"
                        v-model="urinalysis.ascorbicacid"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>Urobilinogen</td>
                    <td>
                      <input
                        type="text"
                        v-model="urinalysis.urobilinogen"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>Ketones</td>
                    <td>
                      <input
                        type="text"
                        v-model="urinalysis.ketones"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>S.gravity</td>
                    <td>
                      <input
                        type="text"
                        v-model="urinalysis.sgravity"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>Bilirubin</td>
                    <td>
                      <input
                        type="text"
                        v-model="urinalysis.bilirubin"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>11</td>
                    <td>Nitrite</td>
                    <td>
                      <input
                        type="text"
                        v-model="urinalysis.nitrite"
                        class="form-control"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="card-footer">
              <button
                v-if="!urinalysisloading"
                @click="createUrinalysisTest"
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
                Stool Analysis
              </h3>
            </div>
          </div>
          <div class="kt-portlet__body">
            <!--begin: Search Form -->
            <div
              class="kt-form kt-form--label-right kt-margin-t-20 kt-margin-b-10"
            >
              <div class="row align-items-center">
                <div class="col-xl-12 order-2 order-xl-1">
                  <div class="row align-items-center">
                    <div class="col-md-12 kt-margin-b-20-tablet-and-mobile">
                      <div class="kt-form__group kt-form__group--inline">
                        <div class="kt-form__label">
                          <label>Appearance</label>
                        </div>
                        <div class="kt-form__control">
                          <textarea
                            v-model="stool.appearance"
                            class="form-control"
                            cols="30"
                            rows="10"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!--end: Search Form -->
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
                    <td>PUS Cells</td>
                    <td>
                      <input
                        type="text"
                        v-model="stool.puscells"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>RBC</td>
                    <td>
                      <input
                        type="text"
                        v-model="stool.rbc"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>OVA/Cyst</td>
                    <td>
                      <input
                        type="text"
                        v-model="stool.ova"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Undigested Food Particles</td>
                    <td>
                      <input
                        type="text"
                        v-model="stool.food"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Schistosoma Ova</td>
                    <td>
                      <input
                        type="text"
                        v-model="stool.schistosoma"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>FOB</td>
                    <td>
                      <input
                        type="text"
                        v-model="stool.fob"
                        class="form-control"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="card-footer">
              <button
                v-if="!stoolloading"
                @click="createStoolTest"
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
                Culture/Sensitivity Report
              </h3>
            </div>
          </div>
          <div class="kt-portlet__body">
            <!--begin: Search Form -->
            <div
              class="kt-form kt-form--label-right kt-margin-t-20 kt-margin-b-10"
            >
              <div class="row align-items-center">
                <div class="col-xl-12 order-2 order-xl-1">
                  <div class="row align-items-center">
                    <div class="col-md-12 kt-margin-b-20-tablet-and-mobile">
                      <div class="kt-form__group kt-form__group--inline">
                        <div class="kt-form__label">
                          <label>Select</label>
                        </div>
                        <div class="kt-form__control">
                          <select v-model="culture.sputum" class="form-control">
                            <option disabled>Select</option>
                            <option value="Sputum">Sputum</option>
                            <option value="Skin">Skin</option>
                            <option value="Blood">Blood</option>
                            <option value="Semen">Semen</option>
                            <option value="Throat">Throat</option>
                            <option value="Nasal">Nasal</option>
                            <option value="Eye">Eye</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!--end: Search Form -->
          </div>
          <div class="kt-portlet__body">
            <div class="dt-responsive table-responsive">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>Tests</th>
                    <th>Result</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Appearance</td>
                    <td>
                      <textarea
                        class="form-control"
                        v-model="culture.appearance"
                        cols="30"
                        rows="10"
                      ></textarea>
                    </td>
                  </tr>
                  <tr>
                    <td>Pus Cells</td>
                    <td>
                      <input
                        type="text"
                        v-model="culture.puscells"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>RBC</td>
                    <td>
                      <input
                        type="text"
                        v-model="culture.rbc"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Cellular Debris</td>
                    <td>
                      <input
                        type="text"
                        v-model="culture.celluladebris"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Spermatozoan</td>
                    <td>
                      <input
                        type="text"
                        v-model="culture.spermatozoan"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Epithelial Cells</td>
                    <td>
                      <input
                        type="text"
                        v-model="culture.epithelialcells"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Culture</td>
                    <td colspan="7">
                      <textarea
                        class="form-control"
                        v-model="culture.culture"
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
                v-if="!cultureloading"
                @click="createCultureTest"
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
                Semen Analysis
              </h3>
            </div>
          </div>

          <div class="kt-portlet__body">
            <div class="dt-responsive table-responsive">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>S/N</th>
                    <th>Time Produced</th>
                    <th>Time Received</th>
                    <th>Time of Analysis</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>
                      <datetime
                        type="time"
                        v-model="semenanalysis.tproduced"
                        input-class="form-control"
                      ></datetime>
                    </td>
                    <td>
                      <datetime
                        type="time"
                        v-model="semenanalysis.treceived"
                        input-class="form-control"
                      ></datetime>
                    </td>
                    <td colspan="3">
                      <datetime
                        type="time"
                        v-model="semenanalysis.tofanalysis"
                        input-class="form-control"
                      ></datetime>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>METHOD OF PRODUCTION</td>
                    <td colspan="5">
                      <input
                        type="text"
                        class="form-control"
                        v-model="semenanalysis.method"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      Period of Abstinence
                    </td>
                    <td colspan="4">
                      <input
                        type="text"
                        v-model="semenanalysis.pabstinence"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      Colour
                    </td>
                    <td colspan="4">
                      <input
                        type="text"
                        v-model="semenanalysis.colour"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      Viscosity
                    </td>
                    <td colspan="4">
                      <input
                        type="text"
                        v-model="semenanalysis.viscosity"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      Liquefaction
                    </td>
                    <td colspan="4">
                      <input
                        type="text"
                        v-model="semenanalysis.liquefaction"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      Spillage
                    </td>
                    <td colspan="4">
                      <input
                        type="text"
                        v-model="semenanalysis.spillage"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      Volume
                    </td>
                    <td colspan="4">
                      <input
                        type="text"
                        v-model="semenanalysis.volume"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      Odour
                    </td>
                    <td colspan="4">
                      <input
                        type="text"
                        v-model="semenanalysis.odour"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      PH
                    </td>
                    <td colspan="4">
                      <input
                        type="text"
                        v-model="semenanalysis.ph"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <th colspan="7">MICROSCOPY</th>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      Pus Cells
                    </td>
                    <td colspan="4">
                      <input
                        type="text"
                        name="puscells"
                        v-model="semenanalysis.puscells"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      RBC
                    </td>
                    <td colspan="4">
                      <input
                        type="text"
                        v-model="semenanalysis.rbc"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      Cellula Debris
                    </td>
                    <td colspan="4">
                      <input
                        type="text"
                        v-model="semenanalysis.celluladebris"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      Spermatozoan
                    </td>
                    <td colspan="4">
                      <input
                        type="text"
                        v-model="semenanalysis.spermatozoan"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      Epithelial Cells
                    </td>
                    <td colspan="4">
                      <input
                        type="text"
                        v-model="semenanalysis.epithelialcells"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <th colspan="7">PERCENTAGE MOTILITY</th>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      Active
                    </td>
                    <td colspan="4">
                      <input
                        type="text"
                        v-model="semenanalysis.active"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      Sluggish
                    </td>
                    <td colspan="4">
                      <input
                        type="text"
                        v-model="semenanalysis.sluggish"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      Non-Progressive
                    </td>
                    <td colspan="4">
                      <input
                        type="text"
                        v-model="semenanalysis.nonprogressive"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      Dead Cells
                    </td>
                    <td colspan="4">
                      <input
                        type="text"
                        v-model="semenanalysis.deadcells"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th></th>
                    <th colspan="7">MORPHOLOGY</th>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      % Normal Cells
                    </td>
                    <td colspan="4">
                      <input
                        type="text"
                        v-model="semenanalysis.normalcells"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      % Abnormal Cells
                    </td>
                    <td colspan="4">
                      <input
                        type="text"
                        v-model="semenanalysis.abnormalcells"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      Sperm Count
                    </td>
                    <td colspan="4">
                      <input
                        type="text"
                        v-model="semenanalysis.spermcount"
                        class="form-control"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="card-footer">
              <button
                v-if="!semenloading"
                @click="createSemenAnalysisTest"
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
                Antibiotic Sensitivity
              </h3>
            </div>
          </div>
          <div class="kt-portlet__body">
            <div class="dt-responsive table-responsive">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>S/N</th>
                    <th>Antibiotic Sensitivity</th>
                    <th>1</th>
                    <th>2</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td>Ciprofloxacin</td>
                    <td>
                      <input
                        type="text"
                        v-model="antibiotic.ciprofloxacin1"
                        class="form-control"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        v-model="antibiotic.ciprofloxacin2"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Ampiciline</td>
                    <td>
                      <input
                        type="text"
                        v-model="antibiotic.ampiciline1"
                        class="form-control"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        v-model="antibiotic.ampiciline2"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Sparfloxacin</td>
                    <td>
                      <input
                        type="text"
                        v-model="antibiotic.Sparfloxacin1"
                        class="form-control"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        v-model="antibiotic.Sparfloxacin2"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Erythromycin</td>
                    <td>
                      <input
                        type="text"
                        v-model="antibiotic.Erythromycin1"
                        class="form-control"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        v-model="antibiotic.Erythromycin2"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Streptomycin</td>
                    <td>
                      <input
                        type="text"
                        v-model="antibiotic.Streptomycin1"
                        class="form-control"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        v-model="antibiotic.Streptomycin2"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Gentamycin</td>
                    <td>
                      <input
                        type="text"
                        v-model="antibiotic.Gentamycin1"
                        class="form-control"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        v-model="antibiotic.Gentamycin2"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Pefloxacin</td>
                    <td>
                      <input
                        type="text"
                        v-model="antibiotic.Pefloxacin1"
                        class="form-control"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        v-model="antibiotic.Pefloxacin2"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Cotrimoxacole</td>
                    <td>
                      <input
                        type="text"
                        v-model="antibiotic.Cotrimoxacole1"
                        class="form-control"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        v-model="antibiotic.Cotrimoxacole2"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Chloramphenicol</td>
                    <td>
                      <input
                        type="text"
                        v-model="antibiotic.Chloramphenicol1"
                        class="form-control"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        v-model="antibiotic.Chloramphenicol2"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Ampiclox</td>
                    <td>
                      <input
                        type="text"
                        v-model="antibiotic.Ampiclox1"
                        class="form-control"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        v-model="antibiotic.Ampiclox2"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Amoxicillin</td>
                    <td>
                      <input
                        type="text"
                        v-model="antibiotic.Amoxicillin1"
                        class="form-control"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        v-model="antibiotic.Amoxicillin2"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Clavulanic Acid</td>
                    <td>
                      <input
                        type="text"
                        v-model="antibiotic.Clavulanic1"
                        class="form-control"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        v-model="antibiotic.Clavulanic2"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Ofloxacin</td>
                    <td>
                      <input
                        type="text"
                        v-model="antibiotic.Ofloxacin1"
                        class="form-control"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        v-model="antibiotic.Ofloxacin2"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Cefuroxime</td>
                    <td>
                      <input
                        type="text"
                        v-model="antibiotic.Cefuroxime1"
                        class="form-control"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        v-model="antibiotic.Cefuroxime2"
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Ceftriaxone</td>
                    <td>
                      <input
                        type="text"
                        v-model="antibiotic.Ceftriaxone1"
                        class="form-control"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        v-model="antibiotic.Ceftriaxone2"
                        class="form-control"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="card-footer">
              <button
                v-if="!antibioticloading"
                @click="createAntibioticTest"
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
import { Datetime } from 'vue-datetime'
export default {
  name: 'microbiologylabresult',
  components: {
    datetime: Datetime
  },
  data() {
    return {
      urine: {
        epitheliaresult: '',
        epitheliahsv: '',
        pusresult: '',
        pushsv: '',
        vaginalisresult: '',
        vaginalishsv: '',
        yeastresult: '',
        yeasthsv: '',
        rbcresult: '',
        rbchsv: '',
        castresult: '',
        castshsv: '',
        crystalsresult: '',
        crystalshsv: '',
        parasitesresult: '',
        parasiteshsv: '',
        othersresult: '',
        othershsv: ''
      },
      urinalysis: {
        appearance: '',
        leukocytes: '',
        protein: '',
        glucose: '',
        blood: '',
        ph: '',
        ascorbicacid: '',
        urobilinogen: '',
        ketones: '',
        sgravity: '',
        bilirubin: '',
        nitrite: ''
      },
      stool: {
        appearance: '',
        puscells: '',
        rbc: '',
        ova: '',
        food: '',
        schistosoma: '',
        fob: ''
      },
      culture: {
        sputum: '',
        appearance: '',
        culture: '',
        rbc: '',
        puscells: '',
        spermatozoan: '',
        epithelialcells: '',
        celluladebris: ''
      },
      antibiotic: {
        ciprofloxacin1: '',
        ciprofloxacin2: '',
        ampiciline1: '',
        ampiciline2: '',
        Sparfloxacin1: '',
        Sparfloxacin2: '',
        Erythromycin1: '',
        Erythromycin2: '',
        Streptomycin1: '',
        Streptomycin2: '',
        Gentamycin1: '',
        Gentamycin2: '',
        Pefloxacin1: '',
        Pefloxacin2: '',
        Cotrimoxacole1: '',
        Cotrimoxacole2: '',
        Chloramphenicol1: '',
        Chloramphenicol2: '',
        Ampiclox1: '',
        Ampiclox2: '',
        Amoxicillin1: '',
        Amoxicillin2: '',
        Clavulanic1: '',
        Clavulanic2: '',
        Ofloxacin1: '',
        Ofloxacin2: '',
        Cefuroxime1: '',
        Cefuroxime2: '',
        Ceftriaxone1: '',
        Ceftriaxone2: ''
      },
      semenanalysis: {
        tproduced: '',
        treceived: '',
        tofanalysis: '',
        method: '',
        pabstinence: '',
        colour: '',
        viscosity: '',
        liquefaction: '',
        spillage: '',
        volume: '',
        odour: '',
        ph: '',
        puscells: '',
        rbc: '',
        celluladebris: '',
        spermatozoan: '',
        epithelialcells: '',
        active: '',
        sluggish: '',
        nonprogressive: '',
        deadcells: '',
        normalcells: '',
        abnormalcells: '',
        spermcount: ''
      },
      landingPageUrl: '/test/microbiology/result/',
      updateurine: '/test/microbiology/urine/',
      updateurinalysis: '/test/microbiology/urinalysis/',
      updatestool: '/test/microbiology/stool/',
      updateantibiotic: '/test/microbiology/antibiotic/',
      updateculture: '/test/microbiology/culture/',
      updatesemenanalysis: '/test/microbiology/semenanalysis/',

      urineloading: false,
      urinalysisloading: false,
      stoolloading: false,
      cultureloading: false,
      antibioticloading: false,
      semenloading: false
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
          if (response.data.data.urine) {
            this.urine = response.data.data.urine
          }
          if (response.data.data.urinalysis) {
            this.urinalysis = response.data.data.urinalysis
          }
          if (response.data.data.stool) {
            this.stool = response.data.data.stool
          }
          if (response.data.data.culture) {
            this.culture = response.data.data.culture
          }
          if (response.data.data.antibiotic) {
            this.antibiotic = response.data.data.antibiotic
          }
          if (response.data.data.semenanalysis) {
            this.semenanalysis = response.data.data.semenanalysis
          }
        })
        .catch(error => {
          this.handleError(error)
        })
    },
    createUrineTest() {
      this.urineloading = true
      axios
        .put(this.updateurine + this.$route.params.id, this.urine)
        .then(response => {
          this.urineloading = false
          this.urine = response.data.data.urine
          this.$iziToast.success({
            title: 'Success!',
            message: response.data.message
          })
        })
        .catch(error => {
          this.urineloading = false
          this.handleError(error)
        })
    },
    createUrinalysisTest() {
      this.urinalysisloading = true
      axios
        .put(this.updateurinalysis + this.$route.params.id, this.urinalysis)
        .then(response => {
          this.urinalysisloading = false
          this.urinalysis = response.data.data.urinalysis
          this.$iziToast.success({
            title: 'Success!',
            message: response.data.message
          })
        })
        .catch(error => {
          this.urinalysisloading = false
          this.handleError(error)
        })
    },
    createStoolTest() {
      this.stoolloading = true
      axios
        .put(this.updatestool + this.$route.params.id, this.stool)
        .then(response => {
          this.stoolloading = false
          this.stool = response.data.data.stool
          this.$iziToast.success({
            title: 'Success!',
            message: response.data.message
          })
        })
        .catch(error => {
          this.stoolloading = false
          this.handleError(error)
        })
    },
    createCultureTest() {
      this.cultureloading = true
      axios
        .put(this.updateculture + this.$route.params.id, this.culture)
        .then(response => {
          this.cultureloading = false
          this.culture = response.data.data.culture
          this.$iziToast.success({
            title: 'Success!',
            message: response.data.message
          })
        })
        .catch(error => {
          this.cultureloading = false
          this.handleError(error)
        })
    },
    createAntibioticTest() {
      this.antibioticloading = true
      axios
        .put(this.updateantibiotic + this.$route.params.id, this.antibiotic)
        .then(response => {
          this.antibioticloading = false
          this.antibiotic = response.data.data.antibiotic
          this.$iziToast.success({
            title: 'Success!',
            message: response.data.message
          })
        })
        .catch(error => {
          this.antibioticloading = false
          this.handleError(error)
        })
    },
    createSemenAnalysisTest() {
      this.semenloading = true
      axios
        .put(
          this.updatesemenanalysis + this.$route.params.id,
          this.semenanalysis
        )
        .then(response => {
          this.semenloading = false
          this.semenanalysis = response.data.data.semenanalysis
          this.$iziToast.success({
            title: 'Success!',
            message: response.data.message
          })
        })
        .catch(error => {
          this.semenloading = false
          this.handleError(error)
        })
    },
    testSelect() {}
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
