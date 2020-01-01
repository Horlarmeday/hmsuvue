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
            Edit {{ patient.firstname }} {{ patient.lastname }} Dependant
            <small>Edit dependant</small>
          </h3>
        </div>
      </div>
      <div class="kt-portlet__body">
        <!--begin: Datatable -->
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Name</label>
              <input
                type="text"
                class="form-control"
                v-model="dependant.name"
              />
              <span class="form-text text-muted">Dependant name.</span>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Gender</label>
              <select class="form-control" v-model="dependant.gender">
                <option disabled selected>Select</option>
                <option>Male</option>
                <option>Female</option>
              </select>
              <span class="form-text text-muted">Please select gender.</span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Examiner</label>
              <datetime
                type="date"
                input-class="form-control"
                v-model="dependant.dateofbirth"
              ></datetime>
              <span class="form-text text-muted">Date of birth.</span>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Relationship</label>
              <select class="form-control" v-model="dependant.relationship">
                <option disabled>Select</option>
                <option value="Brother">Brother</option>
                <option value="Sister">Sister</option>
                <option value="Father">Father</option>
                <option value="Mother">Mother</option>
                <option value="Wife">Wife</option>
                <option value="Husband">Husband</option>
                <option value="Son">Son</option>
                <option value="Daughter">Daughter</option>
                <option value="Uncle">Uncle</option>
                <option value="Aunt">Aunt</option>
              </select>
              <span class="form-text text-muted"
                >Please select relationship.</span
              >
            </div>
          </div>
        </div>
        <div>
          <button
            v-if="!loading"
            @click="updateDependant"
            class="btn btn-brand btn-elevate float-right"
          >
            Update
          </button>
          <button
            v-else
            class="btn btn-brand kt-spinner kt-spinner--right 
                      kt-spinner--sm kt-spinner--light btn-elevate float-right"
            disabled
          >
            Updating...
          </button>
        </div>
        <!--end: Datatable -->
      </div>
    </div>
    <div class="kt-portlet kt-portlet--mobile">
      <div class="kt-portlet__head kt-portlet__head--lg">
        <div class="kt-portlet__head-label">
          <span class="kt-portlet__head-icon">
            <i class="kt-font-brand flaticon2-line-chart"></i>
          </span>
          <h3 class="kt-portlet__head-title">
            Take Dependant Picture
            <small>Take dependant picture</small>
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
                  src="../../assets/images/photoguide.png"
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
                style="padding-top: 10px"
                v-if="!videoShowing && !image"
                v-on:click="startCamera()"
                src="../../assets/images/upload.png"
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

              <div class="row" v-if="!photoLoading" style="padding-top: 15px">
                <div style="margin-left: 32%">
                  <button
                    id="snap"
                    v-if="image && !photoSaved"
                    class="btn btn-success orange"
                    v-on:click="snapAgain()"
                  >
                    Snap Again
                  </button>
                </div>

                <div style="margin-left: 10px">
                  <button
                    id="save"
                    v-if="image && !photoSaved"
                    class="btn btn-primary orange"
                    v-on:click="uploadDependantPic()"
                  >
                    Save Photo
                  </button>
                </div>
              </div>

              <div
                class="row"
                v-if="photoLoading"
                style="padding-top: 15px;margin-left: 35%"
              >
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
import axios from '../../axios'
import { Datetime } from 'vue-datetime'
// import vSelect from 'vue-select'
export default {
  name: 'dependantform',
  props: {
    title: {
      type: String
    }
  },
  components: {
    datetime: Datetime
    // vSelect
  },
  data() {
    return {
      dependant: '',
      patient: '',

      landingpageUrl: '/dependant/',
      loading: false,

      //   for pictures
      showFinish: false,
      videoShowing: false,
      photoSaved: false,
      video: {},
      canvas: {},
      image: null,
      dependantUploadUrl: '/dependant/upload/picture/',
      photoLoading: false
    }
  },
  mounted() {
    this.getPage()
  },
  methods: {
    handleError(error) {
      this.$iziToast.error({
        title: 'Error!',
        message: error.response.data
      })
    },
    updateDependant() {
      this.loading = true
      axios
        .put(this.landingpageUrl + this.$route.params.id, this.dependant)
        .then(response => {
          this.dependant = response.data.data
          this.loading = false
          this.$iziToast.success({
            title: 'Success!',
            message: response.data.message
          })
        })
        .catch(error => {
          this.loading = false
          this.handleError(error)
        })
    },
    getPage() {
      axios
        .get(this.landingpageUrl + this.$route.params.id)
        .then(response => {
          this.dependant = response.data.data.dependant
          this.patient = this.dependant.patient
        })
        .catch(error => {
          this.handleError(error)
        })
    },
    startCamera() {
      this.toggleVideoShowing()
      this.video = this.$refs.video
      this.video.style = 'display:block;width:250px;margin-bottom:20px;'
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
          this.video.srcObject = stream
          this.video.play()
        })
      }
    },
    uploadDependantPic() {
      this.photoLoading = true
      let self = this
      let data = {
        base64: self.image
      }
      axios
        .put(self.dependantUploadUrl + this.$route.params.id, data)
        .then(response => {
          self.photoLoading = false
          self.photoSaved = true
          // self.image = response.data.data.photo
          this.$iziToast.success({
            title: 'Success!',
            message: response.data.message
          })
        })
        .catch(error => {
          this.photoLoading = false
          this.handleError(error)
        })
    },
    capture() {
      this.canvas = this.$refs.canvas
      this.canvas.getContext('2d').drawImage(this.video, 0, 0, 250, 187)
      this.image = this.canvas.toDataURL()
      // this.toggleVideoShowing();
    },
    snapAgain() {
      this.image = null
    },
    toggleVideoShowing() {
      this.videoShowing = !this.videoShowing
    }
  }
}
</script>

<style></style>
