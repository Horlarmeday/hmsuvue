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
      <div v-show="!savedStaffProfile" class="kt-portlet__body">
        <!--begin: Datatable -->
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>First Name</label>
              <input
                type="text"
                class="form-control"
                v-model="firstname"
                placeholder="First Name"
              />
              <span class="form-text text-muted"
                >Please enter staff first name.</span
              >
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Last Name</label>
              <input
                type="text"
                class="form-control"
                v-model="lastname"
                placeholder="Last Name"
              />
              <span class="form-text text-muted"
                >Please enter staff last name.</span
              >
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Email</label>
              <input
                type="text"
                class="form-control"
                v-model="email"
                placeholder="Email Address"
              />
              <span class="form-text text-muted"
                >Please enter staff email.</span
              >
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Username</label>
              <input
                type="text"
                class="form-control"
                v-model="username"
                placeholder="Username"
              />
              <span class="form-text text-muted"
                >Please enter staff username.</span
              >
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Phone Number</label>
              <input
                type="text"
                class="form-control"
                v-model="phonenumber"
                placeholder="Phone Number"
              />
              <span class="form-text text-muted"
                >Please enter staff phone number.</span
              >
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Password</label>
              <input
                type="text"
                class="form-control"
                v-model="password"
                placeholder="Password"
              />
              <span class="form-text text-muted"
                >Please enter staff password.</span
              >
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Date of Birth</label>
              <input
                type="date"
                class="form-control"
                v-model="birthday"
                placeholder="Date of Birth"
              />
              <span class="form-text text-muted"
                >Please enter staff date of birth.</span
              >
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Home Address</label>
              <input
                type="text"
                class="form-control"
                v-model="address"
                placeholder="Home Address"
              />
              <span class="form-text text-muted"
                >Please enter staff address.</span
              >
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Gender</label>
              <select class="form-control" v-model="gender">
                <option disabled selected>Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <span class="form-text text-muted"
                >Please select staff's gender.</span
              >
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form-group">
              <label>Department</label>
              <select class="form-control" v-model="department">
                <option disabled selected>Select Department</option>
                <option value="Consulting">Consulting </option>
                <option value="Doctor">Doctor</option>
              </select>
              <span class="form-text text-muted"
                >Please select department.</span
              >
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Role</label>
              <select class="form-control" v-model="role">
                <option disabled selected>Select Role</option>
                <option value="Super Admin">Super Admin</option>
                <option value="Admin">Admin</option>
                <option value="Nurse">Nurse</option>
                <option value="Doctor">Doctor</option>
                <option value="Medical Records">Medical Records</option>
                <option value="Laboratory">Laboratory</option>
                <option value="Pharmacy">Pharmacy</option>
                <option value="Receptionist">Receptionist</option>
                <option value="Accountant">Accountant</option>
                <option value="Pharmacy Store">Pharmacy Store</option>
                <option value="Lab Store">Lab Store</option>
                <option value="Imaging">Imaging</option>
                <option value="Finance Officer">Finance Officer</option>
                <option value="Midwife">Midwife</option>
              </select>
              <span class="form-text text-muted">Please select role.</span>
            </div>
          </div>
        </div>
        <div>
          <button
            v-if="!loading"
            @click="createStaff"
            class="btn btn-brand btn-elevate float-right"
          >
            Create Account
          </button>
          <button
            v-else
            class="btn btn-brand kt-spinner kt-spinner--right 
                      kt-spinner--sm kt-spinner--light btn-elevate float-right"
            disabled
          >
            Creating...
          </button>
        </div>
        <!--end: Datatable -->
      </div>
      <div v-show="savedStaffProfile" class="kt-portlet__body ">
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
                    v-on:click="uploadStaffPic()"
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
export default {
  name: 'employeeForm',
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {
      firstname: '',
      lastname: '',
      email: '',
      address: '',
      birthday: '',
      phonenumber: '',
      gender: '',
      role: '',
      department: '',
      username: '',
      password: '',
      loading: false,
      staffsUrl: '/staff',
      staff: '',
      savedStaffProfile: false,

      // for images
      showFinish: false,
      videoShowing: false,
      photoSaved: false,
      video: {},
      canvas: {},
      image: null,
      staffUploadUrl: '/staff/upload',
      photoLoading: false
    }
  },
  methods: {
    handleError(error) {
      this.$iziToast.error({
        title: 'Error!',
        message: error.response.data
      })
    },
    createStaff() {
      this.loading = true
      let data = {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        address: this.address,
        birthday: this.birthday,
        phonenumber: this.phonenumber,
        gender: this.gender,
        role: this.role,
        department: this.department,
        username: this.username,
        password: this.password
      }
      axios
        .post(this.staffsUrl, data)
        .then(response => {
          this.loading = false
          this.staff = response.data.data._id
          this.savedStaffProfile = true
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
    uploadStaffPic() {
      this.photoLoading = true
      let self = this
      let data = {
        base64: self.image,
        staffId: self.staff
      }
      axios
        .post(self.staffUploadUrl, data)
        .then(response => {
          self.photoLoading = false
          self.photoSaved = true
          // self.image = response.data.data.photo
          this.$iziToast.success({
            title: 'Success!',
            message: response.data.message
          })
          this.savedStaffProfile = false
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
