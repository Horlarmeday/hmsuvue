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
            Create New Staff
            <small>Create a new staff account</small>
          </h3>
        </div>
      </div>
      <div class="kt-portlet__body ">
        <!--begin: Datatable -->
        <div class="row">
          <div class="col-xl-6">
            <div style="margin-left: 20%">
              <p>How to take a good photo:</p>
              <div>
                <img
                  style="height:150px;"
                  src="../assets/images/photoguide.png"
                  alt="User Icon"
                  class="mr-3"
                />

                <ol>
                  <li>Ensure you are in a bright room</li>
                  <li>
                    Ensure the person's face is centred in the camera window
                  </li>
                  <li>Ensure your the face is showing clearly</li>
                </ol>
              </div>
            </div>
          </div>
          <div class="col-xl-6">
            <div style="margin-left: 30%">
              <img
                v-if="!videoShowing && !image"
                v-on:click="startCamera()"
                src="../assets/images/upload.png"
              />
              <video
                ref="video"
                id="video"
                v-show="!image && !photoSaved"
                style="height:1px;width:250px;margin-bottom:20px;"
                autoplay
              ></video>
              <div align="center">
                <canvas
                  ref="canvas"
                  id="canvas"
                  width="250"
                  height="187"
                  v-show="image"
                >
                </canvas>
              </div>

              <button
                id="snap"
                v-if="!image && !photoSaved && !videoShowing"
                class="btn btn-success orange"
                v-on:click="startCamera()"
              >
                Take Photo Now
              </button>

              <button
                id="snap"
                v-if="!image && !photoSaved && videoShowing"
                class="btn btn-success orange"
                v-on:click="capture()"
              >
                Snap Photo
              </button>

              <div class="row" v-if="!photoLoading">
                <div class="col-6">
                  <button
                    id="snap"
                    v-if="image && !photoSaved"
                    class="btn btn-success orange"
                    v-on:click="snapAgain()"
                  >
                    Snap Again
                  </button>
                </div>

                <div class="col-6">
                  <button
                    id="save"
                    v-if="image && !photoSaved"
                    class="btn btn-primary orange"
                    v-on:click="savePhoto()"
                  >
                    Save Photo
                  </button>
                </div>
              </div>

              <div v-show="photoLoading" align="center">
                <div class="kt-spinner kt-spinner--md kt-spinner--info"></div>
              </div>
            </div>
          </div>
        </div>
        <!--end: Datatable -->
      </div>
    </div>
  </div>
  <!-- end:: Content -->
</template>

<script>
export default {}
</script>

<style></style>
