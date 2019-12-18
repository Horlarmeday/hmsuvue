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
          <img alt="Logo" src="../../../assets/images/mobilelogo.png" />
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
            <Subheader title="Patients" />

            <GenericContent title="Generic Drugs" />
          </div>
          <!-- <Footer /> -->
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
// import Footer from '@/views/layouts/Footer.vue'
import GenericContent from '@/components/pharmacy/GenericContent.vue'
export default {
  name: 'dailyreport',
  components: {
    Sidebar,
    Header,
    Subheader,
    // Footer,
    GenericContent
  }
}
</script>

<style></style>
