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
                        <h1>Medical Consent Form</h1>
                      </a>
                      <a href="#">
                        <img width="50" src="../assets/ms.png" />
                      </a>
                    </div>
                    <span class="kt-invoice__desc">
                      <span
                        >Daughter of Charity,<br />
                        St. Vincent Specialist Hospital Kubwa, Abuja</span
                      >
                      <span>+234-8134-848-878</span>
                    </span>
                    <p class="text-center">
                      This form must be filled in full by the patient who wishes
                      to access uncovered facilities
                    </p>
                    <h3>Patient Information</h3>
                    <div class="kt-invoice__items">
                      <div class="kt-invoice__item">
                        <span class="kt-invoice__subtitle">FULLNAME</span>
                        <span class="kt-invoice__text">Micheal</span>
                      </div>
                      <div class="kt-invoice__item">
                        <span class="kt-invoice__subtitle">ENROLLEE ID</span>
                        <span class="kt-invoice__text">2005644</span>
                      </div>
                      <div class="kt-invoice__item">
                        <span class="kt-invoice__subtitle"
                          >HEALTH INSURANCE TYPE</span
                        >
                        <span class="kt-invoice__text">NHIS</span>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Urine -->
                <div>
                  <div class="kt-invoice__body kt-invoice__body--centered">
                    <h3>Health Care Authorization and Release</h3>
                    <hr style="padding: 0 10px" />
                    <p style="font-size: 15px" class="kt-invoice__text">
                      I MIKE TYSON give my consent to St. Vincent Specialist
                      Hospital to provide medical treatment that are uncovered
                      by my health insurance scheme. I understand that I assume
                      financial responsibility for any teatement administered to
                      me or my dependant.
                    </p>
                    <hr style="padding: 0 10px" />
                  </div>
                </div>

                <div class="kt-invoice__footer">
                  <div
                    class="kt-invoice__table  kt-invoice__table--centered table-responsive"
                  >
                    <table class="table">
                      <thead>
                        <tr>
                          <th>Signature of Patient/Guardian</th>
                          <th>DATE ISSUED</th>
                          <th>Signature of Physician</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>----------------------------</td>
                          <td>Jan 07, 2018</td>
                          <td style="font-size: 11px">
                            ------------------------------
                          </td>
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
@import url('../assets/css/labtest.css');
</style>
