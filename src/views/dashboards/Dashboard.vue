<template>
  <div
    class="kt-quick-panel--right kt-demo-panel--right kt-offcanvas-panel--right kt-header--fixed 
	kt-header-mobile--fixed kt-subheader--fixed kt-subheader--enabled kt-subheader--solid
     kt-aside--enabled kt-aside--fixed kt-page--loading"
  >
    <!-- begin:: Page -->

    <!-- begin:: Header Mobile -->
    <div
      id="kt_header_mobile"
      class="kt-header-mobile  kt-header-mobile--fixed"
    >
      <div class="kt-header-mobile__logo">
        <a href="#">
          <img alt="Logo" src="../../assets/images/mobilelogo.png" />
        </a>
      </div>
      <div class="kt-header-mobile__toolbar">
        <button
          class="kt-header-mobile__toggler kt-header-mobile__toggler--left"
          id="kt_aside_mobile_toggler"
        >
          <span></span>
        </button>
        <button class="kt-header-mobile__toggler" id="kt_header_mobile_toggler">
          <span></span>
        </button>
        <button
          class="kt-header-mobile__topbar-toggler"
          id="kt_header_mobile_topbar_toggler"
        >
          <i class="flaticon-more"></i>
        </button>
      </div>
    </div>
    <!-- end:: Header Mobile -->

    <div class="kt-grid kt-grid--hor kt-grid--root">
      <div
        class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--ver kt-page"
      >
        <Sidebar />
        <div
          class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor kt-wrapper"
          id="kt_wrapper"
        >
          <Header />
          <div class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor">
            <Subheader />

            <SuperAdmin v-if="user.role == 'Super Admin'" />
            <Doctor v-else-if="user.role == 'Doctor'" />
            <Nurse v-else-if="user.role == 'Nurse'" />
            <MedicalRecords v-else-if="user.role == 'Medical Records'" />
            <Receptionist v-else-if="user.role == 'Receptionist'" />
            <Account v-else-if="user.role == 'Accountant'" />
            <PharmacyStore v-else-if="user.role == 'Pharmacy Store'" />
            <LabStore v-else-if="user.role == 'Lab Store'" />
            <Pharmacy v-else-if="user.role == 'Pharmacy'" />
            <Laboratory v-else-if="user.role == 'Laboratory'" />
            <Imaging v-else-if="user.role == 'Medical Imaging'" />
            <Theater v-else-if="user.role == 'Theater'" />
            <NHIS v-else-if="user.role == 'NHIS'" />
          </div>
          <Footer />
        </div>
      </div>
    </div>
    <!-- end:: Page -->
  </div>
</template>

<script>
import Sidebar from '@/views/layouts/Sidebar.vue'
import Header from '@/views/layouts/Header.vue'
import Subheader from '@/views/layouts/Subheader.vue'
import Footer from '@/views/layouts/Footer.vue'
import SuperAdmin from '@/components/dashboards/SuperAdmin.vue'
import Doctor from '@/components/dashboards/Doctor.vue'
import Nurse from '@/components/dashboards/Nurse.vue'
import MedicalRecords from '@/components/dashboards/MedicalRecords.vue'
import Receptionist from '@/components/dashboards/Receptionist.vue'
import Account from '@/components/dashboards/Account.vue'
import PharmacyStore from '@/components/dashboards/PharmacyStore.vue'
import LabStore from '@/components/dashboards/LabStore.vue'
import Pharmacy from '@/components/dashboards/Pharmacy.vue'
import Laboratory from '@/components/dashboards/Laboratory.vue'
import Imaging from '@/components/dashboards/Imaging.vue'
import Theater from '@/components/dashboards/Theater.vue'
import NHIS from '@/components/dashboards/NHIS.vue'
export default {
  name: 'dashboard',
  components: {
    Sidebar,
    Header,
    Subheader,
    Footer,
    SuperAdmin,
    Doctor,
    Nurse,
    MedicalRecords,
    Receptionist,
    Account,
    PharmacyStore,
    LabStore,
    Pharmacy,
    Laboratory,
    Imaging,
    Theater,
    NHIS,
  },
  data() {
    return {
      user: ''
    }
  },
  mounted() {
    let token = localStorage.getItem('user-token')
    const parseJwt = token => {
      try {
        return JSON.parse(atob(token.split('.')[1]))
      } catch (error) {
        console.log(error)
      }
    }
    const currentUser = parseJwt(token)
    this.user = currentUser
  }
}
</script>

<style>
@import url('../../assets/css/scrollbar.css');
@import url('../../assets/css/sidebar.css');
@import url('../../assets/css/header.css');
</style>
