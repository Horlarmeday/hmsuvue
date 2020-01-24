<template>
  <div class="kt-content  kt-grid__item kt-grid__item--fluid" id="kt_content">
    <!--Begin::App-->
    <div
      class="kt-grid kt-grid--desktop kt-grid--ver kt-grid--ver-desktop kt-app"
    >
      <!--Begin:: App Aside Mobile Toggle-->
      <button class="kt-app__aside-close" id="kt_user_profile_aside_close">
        <i class="la la-close"></i>
      </button>
      <!--End:: App Aside Mobile Toggle-->
      <!--Begin:: App Aside-->
      <div
        class="kt-grid__item kt-app__toggle kt-app__aside"
        id="kt_user_profile_aside"
      >
        <!--begin:: Widgets/Applications/User/Profile1-->
        <div class="kt-portlet kt-portlet--height-fluid-">
          <div class="kt-portlet__head  kt-portlet__head--noborder">
            <div class="kt-portlet__head-label">
              <h3 class="kt-portlet__head-title"></h3>
            </div>
          </div>
          <div class="kt-portlet__body kt-portlet__body--fit-y">
            <!--begin::Widget -->
            <div class="kt-widget kt-widget--user-profile-1">
              <div class="kt-widget__head">
                <div class="kt-widget__media">
                  <img
                    v-if="patient.photo"
                    :src="photo"
                    alt="Patient Image JPG"
                  />
                  <img
                    v-else
                    src="../../assets/images/100_1.jpg"
                    alt="patient image"
                  />
                  <!-- <img src="../../assets/images/100_1.jpg" alt="image" /> -->
                </div>
                <div class="kt-widget__content">
                  <div class="kt-widget__section">
                    <h2 class="kt-widget__username">
                      {{ patient.firstname }} {{ patient.lastname }}
                      <i class="flaticon2-correct kt-font-success"></i>
                    </h2>
                    <h6 class="kt-widget__subtitle">
                      {{ patient.patientId }}
                    </h6>
                  </div>
                  <div class="kt-widget__action">
                    <button type="button" class="btn btn-info btn-sm">
                      Snap Photo</button
                    >&nbsp;
                    <button type="button" class="btn btn-success btn-sm">
                      follow
                    </button>
                  </div>
                </div>
              </div>
              <div class="kt-widget__body">
                <div class="kt-widget__content">
                  <div class="kt-widget__info">
                    <span class="kt-widget__label">Date of Birth:</span>
                    <a href="#" class="kt-widget__data">{{
                      patient.birthday | moment('DD/MM/YYYY')
                    }}</a>
                  </div>
                  <div class="kt-widget__info">
                    <span class="kt-widget__label">Gender:</span>
                    <a href="#" class="kt-widget__data">{{ patient.gender }}</a>
                  </div>
                  <div class="kt-widget__info">
                    <span class="kt-widget__label">Registered:</span>
                    <span class="kt-widget__data">{{
                      patient.createdAt | moment('from', 'now')
                    }}</span>
                  </div>
                </div>
                <div class="kt-widget__items">
                  <a
                    @click="getPatient"
                    href="#"
                    class="kt-widget__item"
                    :class="patientditsshow ? activeClass : ''"
                  >
                    <span class="kt-widget__section">
                      <span class="kt-widget__icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                          class="kt-svg-icon"
                        >
                          <g
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <polygon id="Shape" points="0 0 24 0 24 24 0 24" />
                            <path
                              d="M12,11 C9.790861,11 8,9.209139 8,7 C8,4.790861 9.790861,3 12,3 C14.209139,3 16,4.790861 16,7 C16,9.209139 14.209139,11 12,11 Z"
                              id="Mask"
                              fill="#000000"
                              fill-rule="nonzero"
                              opacity="0.3"
                            />
                            <path
                              d="M3.00065168,20.1992055 C3.38825852,15.4265159 7.26191235,13 11.9833413,13 C16.7712164,13 20.7048837,15.2931929 20.9979143,20.2 C21.0095879,20.3954741 20.9979143,21 20.2466999,21 C16.541124,21 11.0347247,21 3.72750223,21 C3.47671215,21 2.97953825,20.45918 3.00065168,20.1992055 Z"
                              id="Mask-Copy"
                              fill="#000000"
                              fill-rule="nonzero"
                            />
                          </g>
                        </svg>
                      </span>
                      <span class="kt-widget__desc">
                        Personal Information
                      </span>
                    </span>
                  </a>
                  <a
                    @click="getHistory"
                    href="#"
                    class="kt-widget__item"
                    :class="historydits ? activeClass : ''"
                  >
                    <span class="kt-widget__section">
                      <span class="kt-widget__icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                          class="kt-svg-icon"
                        >
                          <g
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <polygon id="Bound" points="0 0 24 0 24 24 0 24" />
                            <path
                              d="M12.9336061,16.072447 L19.36,10.9564761 L19.5181585,10.8312381 C20.1676248,10.3169571 20.2772143,9.3735535 19.7629333,8.72408713 C19.6917232,8.63415859 19.6104327,8.55269514 19.5206557,8.48129411 L12.9336854,3.24257445 C12.3871201,2.80788259 11.6128799,2.80788259 11.0663146,3.24257445 L4.47482784,8.48488609 C3.82645598,9.00054628 3.71887192,9.94418071 4.23453211,10.5925526 C4.30500305,10.6811601 4.38527899,10.7615046 4.47382636,10.8320511 L4.63,10.9564761 L11.0659024,16.0730648 C11.6126744,16.5077525 12.3871218,16.5074963 12.9336061,16.072447 Z"
                              id="Shape"
                              fill="#000000"
                              fill-rule="nonzero"
                            />
                            <path
                              d="M11.0563554,18.6706981 L5.33593024,14.122919 C4.94553994,13.8125559 4.37746707,13.8774308 4.06710397,14.2678211 C4.06471678,14.2708238 4.06234874,14.2738418 4.06,14.2768747 L4.06,14.2768747 C3.75257288,14.6738539 3.82516916,15.244888 4.22214834,15.5523151 C4.22358765,15.5534297 4.2250303,15.55454 4.22647627,15.555646 L11.0872776,20.8031356 C11.6250734,21.2144692 12.371757,21.2145375 12.909628,20.8033023 L19.7677785,15.559828 C20.1693192,15.2528257 20.2459576,14.6784381 19.9389553,14.2768974 C19.9376429,14.2751809 19.9363245,14.2734691 19.935,14.2717619 L19.935,14.2717619 C19.6266937,13.8743807 19.0546209,13.8021712 18.6572397,14.1104775 C18.654352,14.112718 18.6514778,14.1149757 18.6486172,14.1172508 L12.9235044,18.6705218 C12.377022,19.1051477 11.6029199,19.1052208 11.0563554,18.6706981 Z"
                              id="Path"
                              fill="#000000"
                              opacity="0.3"
                            />
                          </g>
                        </svg>
                      </span>
                      <span class="kt-widget__desc">
                        History
                      </span>
                    </span>
                  </a>
                  <a
                    @click="getPayments"
                    :class="paymentsdits ? activeClass : ''"
                    href="#"
                    class="kt-widget__item "
                  >
                    <span class="kt-widget__section">
                      <span class="kt-widget__icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                          class="kt-svg-icon"
                        >
                          <g
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <rect
                              id="bound"
                              x="0"
                              y="0"
                              width="24"
                              height="24"
                            />
                            <path
                              d="M2.56066017,10.6819805 L4.68198052,8.56066017 C5.26776695,7.97487373 6.21751442,7.97487373 6.80330086,8.56066017 L8.9246212,10.6819805 C9.51040764,11.267767 9.51040764,12.2175144 8.9246212,12.8033009 L6.80330086,14.9246212 C6.21751442,15.5104076 5.26776695,15.5104076 4.68198052,14.9246212 L2.56066017,12.8033009 C1.97487373,12.2175144 1.97487373,11.267767 2.56066017,10.6819805 Z M14.5606602,10.6819805 L16.6819805,8.56066017 C17.267767,7.97487373 18.2175144,7.97487373 18.8033009,8.56066017 L20.9246212,10.6819805 C21.5104076,11.267767 21.5104076,12.2175144 20.9246212,12.8033009 L18.8033009,14.9246212 C18.2175144,15.5104076 17.267767,15.5104076 16.6819805,14.9246212 L14.5606602,12.8033009 C13.9748737,12.2175144 13.9748737,11.267767 14.5606602,10.6819805 Z"
                              id="Combined-Shape"
                              fill="#000000"
                              opacity="0.3"
                            />
                            <path
                              d="M8.56066017,16.6819805 L10.6819805,14.5606602 C11.267767,13.9748737 12.2175144,13.9748737 12.8033009,14.5606602 L14.9246212,16.6819805 C15.5104076,17.267767 15.5104076,18.2175144 14.9246212,18.8033009 L12.8033009,20.9246212 C12.2175144,21.5104076 11.267767,21.5104076 10.6819805,20.9246212 L8.56066017,18.8033009 C7.97487373,18.2175144 7.97487373,17.267767 8.56066017,16.6819805 Z M8.56066017,4.68198052 L10.6819805,2.56066017 C11.267767,1.97487373 12.2175144,1.97487373 12.8033009,2.56066017 L14.9246212,4.68198052 C15.5104076,5.26776695 15.5104076,6.21751442 14.9246212,6.80330086 L12.8033009,8.9246212 C12.2175144,9.51040764 11.267767,9.51040764 10.6819805,8.9246212 L8.56066017,6.80330086 C7.97487373,6.21751442 7.97487373,5.26776695 8.56066017,4.68198052 Z"
                              id="Combined-Shape"
                              fill="#000000"
                            />
                          </g>
                        </svg>
                      </span>
                      <span class="kt-widget__desc">
                        Payments
                      </span>
                    </span>
                  </a>
                  <a
                    @click="getAppointments"
                    :class="appointmentsdits ? activeClass : ''"
                    href="#"
                    class="kt-widget__item "
                  >
                    <span class="kt-widget__section">
                      <span class="kt-widget__icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                          class="kt-svg-icon"
                        >
                          <g
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <rect
                              id="bound"
                              x="0"
                              y="0"
                              width="24"
                              height="24"
                            />
                            <path
                              d="M4,4 L11.6314229,2.5691082 C11.8750185,2.52343403 12.1249815,2.52343403 12.3685771,2.5691082 L20,4 L20,13.2830094 C20,16.2173861 18.4883464,18.9447835 16,20.5 L12.5299989,22.6687507 C12.2057287,22.8714196 11.7942713,22.8714196 11.4700011,22.6687507 L8,20.5 C5.51165358,18.9447835 4,16.2173861 4,13.2830094 L4,4 Z"
                              id="Path-50"
                              fill="#000000"
                              opacity="0.3"
                            />
                            <path
                              d="M12,11 C10.8954305,11 10,10.1045695 10,9 C10,7.8954305 10.8954305,7 12,7 C13.1045695,7 14,7.8954305 14,9 C14,10.1045695 13.1045695,11 12,11 Z"
                              id="Mask"
                              fill="#000000"
                              opacity="0.3"
                            />
                            <path
                              d="M7.00036205,16.4995035 C7.21569918,13.5165724 9.36772908,12 11.9907452,12 C14.6506758,12 16.8360465,13.4332455 16.9988413,16.5 C17.0053266,16.6221713 16.9988413,17 16.5815,17 C14.5228466,17 11.463736,17 7.4041679,17 C7.26484009,17 6.98863236,16.6619875 7.00036205,16.4995035 Z"
                              id="Mask-Copy"
                              fill="#000000"
                              opacity="0.3"
                            />
                          </g>
                        </svg>
                      </span>
                      <span class="kt-widget__desc">
                        Appointments
                      </span>
                    </span>
                    <span
                      class="kt-badge kt-badge--unified-danger kt-badge--sm kt-badge--rounded kt-badge--bolder"
                      >5</span
                    >
                  </a>
                  <a
                    @click="getTriages"
                    :class="triagesdits ? activeClass : ''"
                    href="#"
                    class="kt-widget__item "
                  >
                    <span class="kt-widget__section">
                      <span class="kt-widget__icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                          class="kt-svg-icon"
                        >
                          <g
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <rect
                              id="bound"
                              x="0"
                              y="0"
                              width="24"
                              height="24"
                            />
                            <path
                              d="M6,2 L18,2 C18.5522847,2 19,2.44771525 19,3 L19,12 C19,12.5522847 18.5522847,13 18,13 L6,13 C5.44771525,13 5,12.5522847 5,12 L5,3 C5,2.44771525 5.44771525,2 6,2 Z M7.5,5 C7.22385763,5 7,5.22385763 7,5.5 C7,5.77614237 7.22385763,6 7.5,6 L13.5,6 C13.7761424,6 14,5.77614237 14,5.5 C14,5.22385763 13.7761424,5 13.5,5 L7.5,5 Z M7.5,7 C7.22385763,7 7,7.22385763 7,7.5 C7,7.77614237 7.22385763,8 7.5,8 L10.5,8 C10.7761424,8 11,7.77614237 11,7.5 C11,7.22385763 10.7761424,7 10.5,7 L7.5,7 Z"
                              id="Combined-Shape"
                              fill="#000000"
                              opacity="0.3"
                            />
                            <path
                              d="M3.79274528,6.57253826 L12,12.5 L20.2072547,6.57253826 C20.4311176,6.4108595 20.7436609,6.46126971 20.9053396,6.68513259 C20.9668779,6.77033951 21,6.87277228 21,6.97787787 L21,17 C21,18.1045695 20.1045695,19 19,19 L5,19 C3.8954305,19 3,18.1045695 3,17 L3,6.97787787 C3,6.70173549 3.22385763,6.47787787 3.5,6.47787787 C3.60510559,6.47787787 3.70753836,6.51099993 3.79274528,6.57253826 Z"
                              id="Combined-Shape"
                              fill="#000000"
                            />
                          </g>
                        </svg>
                      </span>
                      <span class="kt-widget__desc">
                        Triages
                      </span>
                    </span>
                  </a>
                  <a
                    @click="getMedications"
                    :class="medicationdits ? activeClass : ''"
                    href="#"
                    class="kt-widget__item"
                    data-placement="right"
                  >
                    <span class="kt-widget__section">
                      <span class="kt-widget__icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                          class="kt-svg-icon"
                        >
                          <g
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <polygon id="Shape" points="0 0 24 0 24 24 0 24" />
                            <path
                              d="M5.85714286,2 L13.7364114,2 C14.0910962,2 14.4343066,2.12568431 14.7051108,2.35473959 L19.4686994,6.3839416 C19.8056532,6.66894833 20,7.08787823 20,7.52920201 L20,20.0833333 C20,21.8738751 19.9795521,22 18.1428571,22 L5.85714286,22 C4.02044787,22 4,21.8738751 4,20.0833333 L4,3.91666667 C4,2.12612489 4.02044787,2 5.85714286,2 Z"
                              id="Combined-Shape"
                              fill="#000000"
                              fill-rule="nonzero"
                              opacity="0.3"
                            />
                            <rect
                              id="Rectangle"
                              fill="#000000"
                              x="6"
                              y="11"
                              width="9"
                              height="2"
                              rx="1"
                            />
                            <rect
                              id="Rectangle-Copy"
                              fill="#000000"
                              x="6"
                              y="15"
                              width="5"
                              height="2"
                              rx="1"
                            />
                          </g>
                        </svg>
                      </span>
                      <span href="#" class="kt-widget__desc">Medications</span>
                    </span>
                  </a>
                  <a
                    @click="getTests"
                    :class="testdits ? activeClass : ''"
                    href="#"
                    class="kt-widget__item"
                    data-placement="right"
                  >
                    <span class="kt-widget__section">
                      <span class="kt-widget__icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                          class="kt-svg-icon"
                        >
                          <g
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <rect
                              id="bound"
                              x="0"
                              y="0"
                              width="24"
                              height="24"
                            />
                            <rect
                              id="Rectangle-20"
                              fill="#000000"
                              x="4"
                              y="5"
                              width="16"
                              height="3"
                              rx="1.5"
                            />
                            <path
                              d="M5.5,15 L18.5,15 C19.3284271,15 20,15.6715729 20,16.5 C20,17.3284271 19.3284271,18 18.5,18 L5.5,18 C4.67157288,18 4,17.3284271 4,16.5 C4,15.6715729 4.67157288,15 5.5,15 Z M5.5,10 L12.5,10 C13.3284271,10 14,10.6715729 14,11.5 C14,12.3284271 13.3284271,13 12.5,13 L5.5,13 C4.67157288,13 4,12.3284271 4,11.5 C4,10.6715729 4.67157288,10 5.5,10 Z"
                              id="Combined-Shape"
                              fill="#000000"
                              opacity="0.3"
                            />
                          </g>
                        </svg>
                      </span>
                      <span class="kt-widget__desc">
                        Laboratory Tests
                      </span>
                    </span>
                  </a>
                  <a
                    @click="getImagings"
                    :class="imagingdits ? activeClass : ''"
                    href="#"
                    class="kt-widget__item"
                    data-placement="right"
                  >
                    <span class="kt-widget__section">
                      <span class="kt-widget__icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                          class="kt-svg-icon"
                        >
                          <g
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <rect
                              id="bound"
                              x="0"
                              y="0"
                              width="24"
                              height="24"
                            />
                            <rect
                              id="Rectangle-7-Copy"
                              fill="#000000"
                              x="2"
                              y="5"
                              width="19"
                              height="4"
                              rx="1"
                            />
                            <rect
                              id="Rectangle-7-Copy-4"
                              fill="#000000"
                              opacity="0.3"
                              x="2"
                              y="11"
                              width="19"
                              height="10"
                              rx="1"
                            />
                          </g>
                        </svg>
                      </span>
                      <span class="kt-widget__desc">
                        Imaging
                      </span>
                    </span>
                  </a>
                  <a href="#" class="kt-widget__item" data-placement="right">
                    <span class="kt-widget__section">
                      <span class="kt-widget__icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                          class="kt-svg-icon"
                        >
                          <g
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <rect
                              id="bound"
                              x="0"
                              y="0"
                              width="24"
                              height="24"
                            />

                            <rect
                              id="Rectangle-7-Copy-2"
                              fill="#000000"
                              opacity="0.3"
                              x="2"
                              y="4"
                              width="5"
                              height="16"
                              rx="1"
                            />
                            <path
                              d="M10,4 L21,4 C21.5522847,4 22,4.44771525 22,5 L22,7 C22,7.55228475 21.5522847,8 21,8 L10,8 C9.44771525,8 9,7.55228475 9,7 L9,5 C9,4.44771525 9.44771525,4 10,4 Z M10,10 L21,10 C21.5522847,10 22,10.4477153 22,11 L22,13 C22,13.5522847 21.5522847,14 21,14 L10,14 C9.44771525,14 9,13.5522847 9,13 L9,11 C9,10.4477153 9.44771525,10 10,10 Z M10,16 L21,16 C21.5522847,16 22,16.4477153 22,17 L22,19 C22,19.5522847 21.5522847,20 21,20 L10,20 C9.44771525,20 9,19.5522847 9,19 L9,17 C9,16.4477153 9.44771525,16 10,16 Z"
                              id="Combined-Shape"
                              fill="#000000"
                            />
                          </g>
                        </svg>
                      </span>
                      <span class="kt-widget__desc">
                        Nurse Reports
                      </span>
                    </span>
                  </a>
                  <a href="#" class="kt-widget__item" data-placement="right">
                    <span class="kt-widget__section">
                      <span class="kt-widget__icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                          class="kt-svg-icon"
                        >
                          <g
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <rect
                              id="bound"
                              x="0"
                              y="0"
                              width="24"
                              height="24"
                            />
                            <path
                              d="M13.6855025,18.7082217 C15.9113859,17.8189707 18.682885,17.2495635 22,17 C22,16.9325178 22,13.1012863 22,5.50630526 L21.9999762,5.50630526 C21.9999762,5.23017604 21.7761292,5.00632908 21.5,5.00632908 C21.4957817,5.00632908 21.4915635,5.00638247 21.4873465,5.00648922 C18.658231,5.07811173 15.8291155,5.74261533 13,7 C13,7.04449645 13,10.79246 13,18.2438906 L12.9999854,18.2438906 C12.9999854,18.520041 13.2238496,18.7439052 13.5,18.7439052 C13.5635398,18.7439052 13.6264972,18.7317946 13.6855025,18.7082217 Z"
                              id="Combined-Shape"
                              fill="#000000"
                            />
                            <path
                              d="M10.3144829,18.7082217 C8.08859955,17.8189707 5.31710038,17.2495635 1.99998542,17 C1.99998542,16.9325178 1.99998542,13.1012863 1.99998542,5.50630526 L2.00000925,5.50630526 C2.00000925,5.23017604 2.22385621,5.00632908 2.49998542,5.00632908 C2.50420375,5.00632908 2.5084219,5.00638247 2.51263888,5.00648922 C5.34175439,5.07811173 8.17086991,5.74261533 10.9999854,7 C10.9999854,7.04449645 10.9999854,10.79246 10.9999854,18.2438906 L11,18.2438906 C11,18.520041 10.7761358,18.7439052 10.4999854,18.7439052 C10.4364457,18.7439052 10.3734882,18.7317946 10.3144829,18.7082217 Z"
                              id="Path-41-Copy"
                              fill="#000000"
                              opacity="0.3"
                            />
                          </g>
                        </svg>
                      </span>
                      <span class="kt-widget__desc">
                        Ward Round
                      </span>
                    </span>
                  </a>
                  <a
                    v-if="patient.gender == 'Female'"
                    href="#"
                    class="kt-widget__item"
                    data-placement="right"
                  >
                    <span class="kt-widget__section">
                      <span class="kt-widget__icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                          class="kt-svg-icon"
                        >
                          <g
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <rect
                              id="bound"
                              x="0"
                              y="0"
                              width="24"
                              height="24"
                            />
                            <path
                              d="M3,16 L5,16 C5.55228475,16 6,15.5522847 6,15 C6,14.4477153 5.55228475,14 5,14 L3,14 L3,12 L5,12 C5.55228475,12 6,11.5522847 6,11 C6,10.4477153 5.55228475,10 5,10 L3,10 L3,8 L5,8 C5.55228475,8 6,7.55228475 6,7 C6,6.44771525 5.55228475,6 5,6 L3,6 L3,4 C3,3.44771525 3.44771525,3 4,3 L10,3 C10.5522847,3 11,3.44771525 11,4 L11,19 C11,19.5522847 10.5522847,20 10,20 L4,20 C3.44771525,20 3,19.5522847 3,19 L3,16 Z"
                              id="Combined-Shape"
                              fill="#000000"
                              opacity="0.3"
                            />
                            <path
                              d="M16,3 L19,3 C20.1045695,3 21,3.8954305 21,5 L21,15.2485298 C21,15.7329761 20.8241635,16.200956 20.5051534,16.565539 L17.8762883,19.5699562 C17.6944473,19.7777745 17.378566,19.7988332 17.1707477,19.6169922 C17.1540423,19.602375 17.1383289,19.5866616 17.1237117,19.5699562 L14.4948466,16.565539 C14.1758365,16.200956 14,15.7329761 14,15.2485298 L14,5 C14,3.8954305 14.8954305,3 16,3 Z"
                              id="Rectangle-102-Copy"
                              fill="#000000"
                            />
                          </g>
                        </svg>
                      </span>
                      <span class="kt-widget__desc">
                        Ante-Natal
                      </span>
                    </span>
                  </a>
                  <a href="#" class="kt-widget__item" data-placement="right">
                    <span class="kt-widget__section">
                      <span class="kt-widget__icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                          class="kt-svg-icon"
                        >
                          <g
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <polygon id="Bound" points="0 0 24 0 24 24 0 24" />
                            <path
                              d="M18.5,8 C17.1192881,8 16,6.88071187 16,5.5 C16,4.11928813 17.1192881,3 18.5,3 C19.8807119,3 21,4.11928813 21,5.5 C21,6.88071187 19.8807119,8 18.5,8 Z M18.5,21 C17.1192881,21 16,19.8807119 16,18.5 C16,17.1192881 17.1192881,16 18.5,16 C19.8807119,16 21,17.1192881 21,18.5 C21,19.8807119 19.8807119,21 18.5,21 Z M5.5,21 C4.11928813,21 3,19.8807119 3,18.5 C3,17.1192881 4.11928813,16 5.5,16 C6.88071187,16 8,17.1192881 8,18.5 C8,19.8807119 6.88071187,21 5.5,21 Z"
                              id="Combined-Shape"
                              fill="#000000"
                              opacity="0.3"
                            />
                            <path
                              d="M5.5,8 C4.11928813,8 3,6.88071187 3,5.5 C3,4.11928813 4.11928813,3 5.5,3 C6.88071187,3 8,4.11928813 8,5.5 C8,6.88071187 6.88071187,8 5.5,8 Z M11,4 L13,4 C13.5522847,4 14,4.44771525 14,5 C14,5.55228475 13.5522847,6 13,6 L11,6 C10.4477153,6 10,5.55228475 10,5 C10,4.44771525 10.4477153,4 11,4 Z M11,18 L13,18 C13.5522847,18 14,18.4477153 14,19 C14,19.5522847 13.5522847,20 13,20 L11,20 C10.4477153,20 10,19.5522847 10,19 C10,18.4477153 10.4477153,18 11,18 Z M5,10 C5.55228475,10 6,10.4477153 6,11 L6,13 C6,13.5522847 5.55228475,14 5,14 C4.44771525,14 4,13.5522847 4,13 L4,11 C4,10.4477153 4.44771525,10 5,10 Z M19,10 C19.5522847,10 20,10.4477153 20,11 L20,13 C20,13.5522847 19.5522847,14 19,14 C18.4477153,14 18,13.5522847 18,13 L18,11 C18,10.4477153 18.4477153,10 19,10 Z"
                              id="Combined-Shape"
                              fill="#000000"
                            />
                          </g>
                        </svg>
                      </span>
                      <span class="kt-widget__desc">
                        Assessments
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <!--end::Widget -->
          </div>
        </div>

        <!--end:: Widgets/Applications/User/Profile1-->
      </div>
      <!--End:: App Aside-->

      <!--Begin:: App Content-->
      <div
        v-if="patientditsshow"
        class="kt-grid__item kt-grid__item--fluid kt-app__content"
      >
        <div class="row">
          <div class="col-xl-6">
            <!--begin:: Widgets/Last Updates-->
            <div class="kt-portlet kt-portlet--height-fluid">
              <div class="kt-portlet__head">
                <div class="kt-portlet__head-label">
                  <h3 class="kt-portlet__head-title">
                    Basic Information
                  </h3>
                </div>
              </div>
              <div class="kt-portlet__body">
                <!--begin::widget 12-->
                <div class="kt-widget4">
                  <div class="kt-widget4__item">
                    <span class="kt-widget4__icon">
                      <i class="flaticon-pie-chart-1 kt-font-info"></i>
                    </span>
                    <a
                      href="#"
                      class="kt-widget4__title kt-widget4__title--light"
                    >
                      Full Name
                    </a>
                    <span class="kt-widget4__number"
                      >{{ patient.firstname }} {{ patient.lastname }}</span
                    >
                  </div>
                  <div class="kt-widget4__item">
                    <span class="kt-widget4__icon">
                      <i
                        class="flaticon-safe-shield-protection  kt-font-success"
                      ></i>
                    </span>
                    <a
                      href="#"
                      class="kt-widget4__title kt-widget4__title--light"
                    >
                      Religion
                    </a>
                    <span class="kt-widget4__number">{{
                      patient.religion
                    }}</span>
                  </div>
                  <div class="kt-widget4__item">
                    <span class="kt-widget4__icon">
                      <i class="flaticon2-line-chart kt-font-danger"></i>
                    </span>
                    <a
                      href="#"
                      class="kt-widget4__title kt-widget4__title--light"
                    >
                      Date of Birth
                    </a>
                    <span class="kt-widget4__number">{{
                      patient.birthday | moment('DD/MM/YYYY')
                    }}</span>
                  </div>
                  <div class="kt-widget4__item">
                    <span class="kt-widget4__icon">
                      <i class="flaticon2-pie-chart-1 kt-font-primary"></i>
                    </span>
                    <a
                      href="#"
                      class="kt-widget4__title kt-widget4__title--light"
                    >
                      Marital Status
                    </a>
                    <span class="kt-widget4__number">{{
                      patient.maritalstatus
                    }}</span>
                  </div>
                  <div class="kt-widget4__item">
                    <span class="kt-widget4__icon">
                      <i class="flaticon2-rocket kt-font-brand"></i>
                    </span>
                    <a
                      href="#"
                      class="kt-widget4__title kt-widget4__title--light"
                    >
                      Country
                    </a>
                    <span class="kt-widget4__number">{{
                      patient.country
                    }}</span>
                  </div>

                  <div class="kt-widget4__item">
                    <span class="kt-widget4__icon">
                      <i class="flaticon2-file kt-font-success"></i>
                    </span>
                    <a
                      href="#"
                      class="kt-widget4__title kt-widget4__title--light"
                    >
                      Gender
                    </a>
                    <span class="kt-widget4__number">{{ patient.gender }}</span>
                  </div>
                </div>

                <!--end::Widget 12-->
              </div>
            </div>

            <!--end:: Widgets/Last Updates-->
          </div>
          <div class="col-xl-6">
            <!--begin:: Widgets/Last Updates-->
            <div class="kt-portlet kt-portlet--height-fluid">
              <div class="kt-portlet__head">
                <div class="kt-portlet__head-label">
                  <h3 class="kt-portlet__head-title">
                    Contact Information
                  </h3>
                </div>
              </div>
              <div class="kt-portlet__body">
                <!--begin::widget 12-->
                <div class="kt-widget4">
                  <div class="kt-widget4__item">
                    <span class="kt-widget4__icon">
                      <i class="flaticon-pie-chart-1 kt-font-info"></i>
                    </span>
                    <a
                      href="#"
                      class="kt-widget4__title kt-widget4__title--light"
                    >
                      Mobile Phone
                    </a>
                    <span class="kt-widget4__number"
                      >{{ patient.phonenumber }}
                    </span>
                  </div>
                  <div class="kt-widget4__item">
                    <span class="kt-widget4__icon">
                      <i
                        class="flaticon-safe-shield-protection  kt-font-success"
                      ></i>
                    </span>
                    <a
                      href="#"
                      class="kt-widget4__title kt-widget4__title--light"
                    >
                      Address
                    </a>
                    <span class="kt-widget4__number">{{
                      patient.address
                    }}</span>
                  </div>
                  <div class="kt-widget4__item">
                    <span class="kt-widget4__icon">
                      <i class="flaticon2-line-chart kt-font-danger"></i>
                    </span>
                    <a
                      href="#"
                      class="kt-widget4__title kt-widget4__title--light"
                    >
                      Email
                    </a>
                    <span class="kt-widget4__number">{{ patient.email }}</span>
                  </div>

                  <div class="kt-widget4__item">
                    <span class="kt-widget4__icon">
                      <i class="flaticon2-notification kt-font-warning"></i>
                    </span>
                    <a
                      href="#"
                      class="kt-widget4__title kt-widget4__title--light"
                    >
                      State
                    </a>
                    <span class="kt-widget4__number">{{ patient.state }}</span>
                  </div>
                  <div class="kt-widget4__item">
                    <span class="kt-widget4__icon">
                      <i class="flaticon2-file kt-font-success"></i>
                    </span>
                    <a
                      href="#"
                      class="kt-widget4__title kt-widget4__title--light"
                    >
                      Local Government
                    </a>
                    <span class="kt-widget4__number">{{ patient.lga }}</span>
                  </div>
                </div>

                <!--end::Widget 12-->
              </div>
            </div>

            <!--end:: Widgets/Last Updates-->
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <!--begin:: Widgets/Last Updates-->
            <div class="kt-portlet kt-portlet--height-fluid">
              <div class="kt-portlet__head">
                <div class="kt-portlet__head-label">
                  <h3 class="kt-portlet__head-title">
                    Next of Kin Information
                  </h3>
                </div>
              </div>
              <div class="kt-portlet__body">
                <!--begin::widget 12-->
                <div class="kt-widget4">
                  <div class="kt-widget4__item">
                    <span class="kt-widget4__icon">
                      <i class="flaticon-pie-chart-1 kt-font-info"></i>
                    </span>
                    <a
                      href="#"
                      class="kt-widget4__title kt-widget4__title--light"
                    >
                      Next of Kin Name
                    </a>
                    <span class="kt-widget4__number">{{
                      patient.nextofkinname
                    }}</span>
                  </div>
                  <div class="kt-widget4__item">
                    <span class="kt-widget4__icon">
                      <i
                        class="flaticon-safe-shield-protection  kt-font-success"
                      ></i>
                    </span>
                    <a
                      href="#"
                      class="kt-widget4__title kt-widget4__title--light"
                    >
                      Next of Kin Phone
                    </a>
                    <span class="kt-widget4__number">{{
                      patient.nextofkinphone
                    }}</span>
                  </div>
                  <div class="kt-widget4__item">
                    <span class="kt-widget4__icon">
                      <i class="flaticon2-line-chart kt-font-danger"></i>
                    </span>
                    <a
                      href="#"
                      class="kt-widget4__title kt-widget4__title--light"
                    >
                      Next of Kin Address
                    </a>
                    <span class="kt-widget4__number">{{
                      patient.nextofkinaddress
                    }}</span>
                  </div>
                  <div class="kt-widget4__item">
                    <span class="kt-widget4__icon">
                      <i class="flaticon2-pie-chart-1 kt-font-primary"></i>
                    </span>
                    <a
                      href="#"
                      class="kt-widget4__title kt-widget4__title--light"
                    >
                      Relationship
                    </a>
                    <span class="kt-widget4__number">{{
                      patient.relationship
                    }}</span>
                  </div>
                </div>

                <!--end::Widget 12-->
              </div>
            </div>

            <!--end:: Widgets/Last Updates-->
          </div>
          <div v-if="patient.insurancetype" class="col-xl-6">
            <!--begin:: Widgets/Tasks -->
            <div class="kt-portlet kt-portlet--tabs kt-portlet--height-fluid">
              <div class="kt-portlet__head">
                <div class="kt-portlet__head-label">
                  <h3 class="kt-portlet__head-title">
                    Health Insurance
                  </h3>
                </div>
                <div class="kt-portlet__head-toolbar">
                  <ul
                    class="nav nav-tabs nav-tabs-line nav-tabs-bold nav-tabs-line-brand"
                    role="tablist"
                  >
                    <li class="nav-item">
                      <router-link
                        class="nav-link active"
                        :to="patient.createdependant"
                      >
                        Add Dependant
                      </router-link>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="kt-portlet__body">
                <div class="kt-widget4">
                  <div class="kt-widget4__item">
                    <span class="kt-widget4__icon">
                      <i class="flaticon-pie-chart-1 kt-font-info"></i>
                    </span>
                    <a
                      href="#"
                      class="kt-widget4__title kt-widget4__title--light"
                    >
                      Insurance Type
                    </a>
                    <span class="kt-widget4__number">{{
                      patient.insurancetype.name
                    }}</span>
                  </div>
                  <div class="kt-widget4__item">
                    <span class="kt-widget4__icon">
                      <i class="flaticon-pie-chart-1 kt-font-info"></i>
                    </span>
                    <a
                      href="#"
                      class="kt-widget4__title kt-widget4__title--light"
                    >
                      HMO Name
                    </a>
                    <span class="kt-widget4__number">{{
                      patient.retainershipname.name
                    }}</span>
                  </div>
                  <div class="kt-widget4__item">
                    <span class="kt-widget4__icon">
                      <i class="flaticon-pie-chart-1 kt-font-info"></i>
                    </span>
                    <a
                      href="#"
                      class="kt-widget4__title kt-widget4__title--light"
                    >
                      Enrollee Name
                    </a>
                    <span class="kt-widget4__number">{{
                      patient.enrollees.name
                    }}</span>
                  </div>
                  <div class="kt-widget4__item">
                    <span class="kt-widget4__icon">
                      <i class="flaticon-pie-chart-1 kt-font-info"></i>
                    </span>
                    <a
                      href="#"
                      class="kt-widget4__title kt-widget4__title--light"
                    >
                      Enrollee ID
                    </a>
                    <span class="kt-widget4__number">{{
                      patient.enrolleeId
                    }}</span>
                  </div>
                </div>
                <br />
                <div class="tab-content">
                  <h6 class="text-center">Dependants</h6>
                  <hr />
                  <div class="tab-pane active" id="kt_widget2_tab1_content">
                    <div class="dt-responsive table-responsive">
                      <table
                        id="mytable"
                        class="table table-striped table-bordered nowrap"
                      >
                        <thead>
                          <tr>
                            <th>S/N</th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Relationship</th>
                            <th>Date Created</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-if="dependants.length == 0">
                            <td colspan="9" align="center">No Units</td>
                          </tr>
                          <tr
                            v-for="(dependant, index) in dependants"
                            :key="dependant._id"
                          >
                            <td>
                              {{ index + 1 }}
                            </td>
                            <td>
                              <img
                                v-if="dependant.photo"
                                width="40"
                                :src="dependant.photourl"
                                alt="dependant Image"
                              />
                              <img
                                v-else
                                width="30"
                                src="../../assets/images/100_1.jpg"
                                alt="dependant image"
                              />
                            </td>
                            <td>{{ dependant.name }}</td>
                            <td>{{ dependant.gender }}</td>
                            <td>{{ dependant.relationship }}</td>
                            <td>
                              {{ dependant.createdAt | moment('DD/MM/YYYY') }}
                            </td>
                            <td>
                              <a
                                href="#"
                                class="btn btn-clean btn-sm btn-icon btn-icon-md"
                                data-toggle="dropdown"
                              >
                                <button class="btn btn-brand btn-sm">
                                  Click
                                </button>
                              </a>
                              <div
                                class="dropdown-menu dropdown-menu-right dropdown-menu-fit dropdown-menu-md"
                              >
                                <!--begin::Nav-->
                                <ul class="kt-nav">
                                  <li class="kt-nav__head">
                                    Options
                                    <i
                                      class="flaticon2-information"
                                      data-toggle="kt-tooltip"
                                      data-placement="right"
                                      title="Click to learn more..."
                                    ></i>
                                  </li>
                                  <li class="kt-nav__separator"></li>
                                  <li class="kt-nav__item">
                                    <router-link
                                      :to="dependant.triageurl"
                                      class="kt-nav__link"
                                    >
                                      <i
                                        class="kt-nav__link-icon flaticon2-drop"
                                      ></i>
                                      <span class="kt-nav__link-text"
                                        >Take Triage</span
                                      >
                                    </router-link>
                                  </li>
                                  <li class="kt-nav__item">
                                    <router-link
                                      :to="dependant.url"
                                      class="kt-nav__link"
                                    >
                                      <i
                                        class="kt-nav__link-icon flaticon2-calendar-8"
                                      ></i>
                                      <span class="kt-nav__link-text"
                                        >Edit</span
                                      >
                                    </router-link>
                                  </li>
                                  <li class="kt-nav__item">
                                    <router-link
                                      :to="dependant.url"
                                      class="kt-nav__link"
                                    >
                                      <i
                                        class="kt-nav__link-icon flaticon2-link"
                                      ></i>
                                      <span class="kt-nav__link-text"
                                        >Take Photo</span
                                      >
                                    </router-link>
                                  </li>

                                  <li class="kt-nav__separator"></li>
                                </ul>

                                <!--end::Nav-->
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!--end:: Widgets/Tasks -->
          </div>
        </div>
      </div>
      <!--End:: App Content-->

      <!--Begin:: App Content-->
      <div
        v-if="historydits"
        class="kt-grid__item kt-grid__item--fluid kt-app__content"
      >
        <div class="row">
          <div class="col-xl-12">
            <div class="kt-portlet kt-portlet--mobile">
              <div class="kt-portlet__head kt-portlet__head--lg">
                <div class="kt-portlet__head-label">
                  <span class="kt-portlet__head-icon">
                    <i class="kt-font-brand flaticon2-line-chart"></i>
                  </span>
                  <h3 class="kt-portlet__head-title">
                    History
                    <small>This is the history table</small>
                  </h3>
                </div>
              </div>
              <div class="kt-portlet__body">
                <!--begin: Search Form -->
                <div
                  class="kt-form kt-form--label-right kt-margin-t-20 kt-margin-b-10"
                >
                  <div class="row align-items-center">
                    <div class="col-xl-8 order-2 order-xl-1">
                      <div class="row align-items-center">
                        <div class="col-md-4 kt-margin-b-20-tablet-and-mobile">
                          <div class="kt-input-icon kt-input-icon--left">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Search..."
                            />
                            <span
                              class="kt-input-icon__icon kt-input-icon__icon--left"
                            >
                              <span><i class="la la-search"></i></span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-4 order-1 order-xl-2 kt-align-right">
                      <div
                        class="kt-separator kt-separator--border-dashed kt-separator--space-lg d-xl-none"
                      ></div>
                    </div>
                  </div>
                </div>

                <!--end: Search Form -->
              </div>
              <div class="kt-portlet__body ">
                <!--begin: Datatable -->
                <div class="dt-responsive table-responsive">
                  <table class="table table-striped table-bordered nowrap">
                    <thead>
                      <tr>
                        <th>S/N</th>
                        <th>Reason for visit</th>
                        <th>Observations</th>
                        <th>Diagnosis</th>
                        <th>Treatment</th>
                        <th>Created</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-if="histories.length == 0">
                        <td colspan="9" align="center">No History</td>
                      </tr>
                      <tr
                        v-for="(history, index) in histories"
                        :key="history._id"
                      >
                        <td>
                          {{ index + 1 }}
                        </td>

                        <td>{{ history.reasonforvisit }}</td>
                        <td>{{ history.observation }}</td>
                        <td>{{ history.diagnosis }}</td>
                        <td>{{ history.treatment }}</td>

                        <td>
                          {{ history.createdAt | moment('DD/MM/YYYY, ha') }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <!--end: Datatable -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--End:: App Content-->

      <!--Begin:: App Content-->
      <div
        v-if="paymentsdits"
        class="kt-grid__item kt-grid__item--fluid kt-app__content"
      >
        <div class="row">
          <div class="col-xl-12">
            <div class="kt-portlet kt-portlet--mobile">
              <div class="kt-portlet__head kt-portlet__head--lg">
                <div class="kt-portlet__head-label">
                  <span class="kt-portlet__head-icon">
                    <i class="kt-font-brand flaticon2-line-chart"></i>
                  </span>
                  <h3 class="kt-portlet__head-title">
                    Payments
                    <small>This is the payment table</small>
                  </h3>
                </div>
              </div>
              <div class="kt-portlet__body">
                <!--begin: Search Form -->
                <div
                  class="kt-form kt-form--label-right kt-margin-t-20 kt-margin-b-10"
                >
                  <div class="row align-items-center">
                    <div class="col-xl-8 order-2 order-xl-1">
                      <div class="row align-items-center">
                        <div class="col-md-4 kt-margin-b-20-tablet-and-mobile">
                          <div class="kt-input-icon kt-input-icon--left">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Search..."
                            />
                            <span
                              class="kt-input-icon__icon kt-input-icon__icon--left"
                            >
                              <span><i class="la la-search"></i></span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-4 order-1 order-xl-2 kt-align-right">
                      <div
                        class="kt-separator kt-separator--border-dashed kt-separator--space-lg d-xl-none"
                      ></div>
                    </div>
                  </div>
                </div>

                <!--end: Search Form -->
              </div>
              <div class="kt-portlet__body ">
                <!--begin: Datatable -->
                <div class="dt-responsive table-responsive">
                  <table class="table table-striped table-bordered nowrap">
                    <thead>
                      <tr>
                        <th>S/N</th>
                        <th>Amount Paid</th>
                        <th>Payment For</th>
                        <th>Mode of Payment</th>
                        <th>Date Paid</th>
                        <th>Status</th>
                        <th>Created By</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-if="payments.length == 0">
                        <td colspan="15" align="center">No Payments</td>
                      </tr>
                      <tr
                        v-for="(payment, index) in payments"
                        :key="payment._id"
                      >
                        <td>
                          {{ index + 1 }}
                        </td>

                        <td>{{ payment.amount }}</td>
                        <td v-if="payment.drugs.length > 0">
                          <p v-for="drug in payment.drugs" :key="drug._id">
                            {{ drug.name }}
                          </p>
                        </td>
                        <td v-if="payment.tests.length > 0">
                          <p v-for="test in payment.tests" :key="test._id">
                            {{ test.name }}
                          </p>
                        </td>
                        <td v-if="payment.investigations.length > 0">
                          <p
                            v-for="image in payment.investigations"
                            :key="image._id"
                          >
                            {{ image.name }}
                          </p>
                        </td>
                        <td v-if="payment.services.length > 0">
                          <p
                            v-for="service in payment.services"
                            :key="service._id"
                          >
                            {{ service.name }}
                          </p>
                        </td>
                        <td v-if="payment.type">
                          <p>
                            {{ payment.type }}
                          </p>
                        </td>
                        <td>{{ payment.modeofpayment }}</td>
                        <td>
                          {{ payment.createdAt | moment('DD/MM/YYYY, ha') }}
                        </td>

                        <td>
                          <label
                            v-if="payment.paid"
                            class="kt-badge kt-badge--success kt-badge--inline"
                            >Paid</label
                          >
                          <label
                            v-if="!payment.paid"
                            class="kt-badge kt-badge--danger kt-badge--inline"
                            >Unpaid</label
                          >
                        </td>
                        <td>
                          <a href="#">
                            {{ payment.creator.firstname }}
                            {{ payment.creator.lastname }}
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <!--end: Datatable -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--End:: App Content-->

      <!--Begin:: App Content-->
      <div
        v-if="appointmentsdits"
        class="kt-grid__item kt-grid__item--fluid kt-app__content"
      >
        <div class="row">
          <div class="col-xl-12">
            <div class="kt-portlet kt-portlet--mobile">
              <div class="kt-portlet__head kt-portlet__head--lg">
                <div class="kt-portlet__head-label">
                  <span class="kt-portlet__head-icon">
                    <i class="kt-font-brand flaticon2-line-chart"></i>
                  </span>
                  <h3 class="kt-portlet__head-title">
                    Appointments
                    <small>This is the appointments table</small>
                  </h3>
                </div>
              </div>
              <div class="kt-portlet__body">
                <!--begin: Search Form -->
                <div
                  class="kt-form kt-form--label-right kt-margin-t-20 kt-margin-b-10"
                >
                  <div class="row align-items-center">
                    <div class="col-xl-8 order-2 order-xl-1">
                      <div class="row align-items-center">
                        <div class="col-md-4 kt-margin-b-20-tablet-and-mobile">
                          <div class="kt-input-icon kt-input-icon--left">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Search..."
                            />
                            <span
                              class="kt-input-icon__icon kt-input-icon__icon--left"
                            >
                              <span><i class="la la-search"></i></span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-4 order-1 order-xl-2 kt-align-right">
                      <div
                        class="kt-separator kt-separator--border-dashed kt-separator--space-lg d-xl-none"
                      ></div>
                    </div>
                  </div>
                </div>

                <!--end: Search Form -->
              </div>
              <div class="kt-portlet__body ">
                <!--begin: Datatable -->
                <div class="dt-responsive table-responsive">
                  <table class="table table-striped table-bordered nowrap">
                    <thead>
                      <tr>
                        <th>S/N</th>
                        <th>Appointment ID</th>
                        <th>Examiner</th>
                        <th>Type</th>
                        <th>Department</th>
                        <th>Appointment Date</th>
                        <th>Appointment Time</th>
                        <th>Status</th>
                        <th>Created</th>
                        <th>Created By</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-if="appointments.length == 0">
                        <td colspan="15" align="center">No Appointments</td>
                      </tr>
                      <tr
                        v-for="(appointment, index) in appointments"
                        :key="appointment._id"
                      >
                        <td>
                          {{ index + 1 }}
                        </td>
                        <td>{{ appointment.uniqueid }}</td>
                        <td>
                          <a href="#">
                            {{ appointment.examiner.firstname }}
                            {{ appointment.examiner.lastname }}
                          </a>
                        </td>
                        <td>{{ appointment.type }}</td>
                        <td>{{ appointment.department }}</td>
                        <td>
                          {{
                            appointment.appointmentdate | moment('DD/MM/YYYY')
                          }}
                        </td>
                        <td>
                          {{ appointment.appointmenttime | moment('h:mma') }}
                        </td>

                        <td>
                          <label
                            v-if="appointment.taken"
                            class="kt-badge kt-badge--success kt-badge--inline"
                            >Attended</label
                          >
                          <label
                            v-if="!appointment.taken"
                            class="kt-badge kt-badge--warning kt-badge--inline"
                            >Pending</label
                          >
                        </td>
                        <td>
                          {{ appointment.createdAt | moment('DD/MM/YYYY, ha') }}
                        </td>
                        <td>
                          <a href="#">
                            {{ appointment.creator.firstname }}
                            {{ appointment.creator.lastname }}
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <!--end: Datatable -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--End:: App Content-->

      <!--Begin:: App Content-->
      <div
        v-if="triagesdits"
        class="kt-grid__item kt-grid__item--fluid kt-app__content"
      >
        <div class="row">
          <div class="col-xl-12">
            <div class="kt-portlet kt-portlet--mobile">
              <div class="kt-portlet__head kt-portlet__head--lg">
                <div class="kt-portlet__head-label">
                  <span class="kt-portlet__head-icon">
                    <i class="kt-font-brand flaticon2-line-chart"></i>
                  </span>
                  <h3 class="kt-portlet__head-title">
                    Triages
                    <small>This is the triages table</small>
                  </h3>
                </div>
              </div>
              <div class="kt-portlet__body">
                <!--begin: Search Form -->
                <div
                  class="kt-form kt-form--label-right kt-margin-t-20 kt-margin-b-10"
                >
                  <div class="row align-items-center">
                    <div class="col-xl-8 order-2 order-xl-1">
                      <div class="row align-items-center">
                        <div class="col-md-4 kt-margin-b-20-tablet-and-mobile">
                          <div class="kt-input-icon kt-input-icon--left">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Search..."
                            />
                            <span
                              class="kt-input-icon__icon kt-input-icon__icon--left"
                            >
                              <span><i class="la la-search"></i></span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-4 order-1 order-xl-2 kt-align-right">
                      <div
                        class="kt-separator kt-separator--border-dashed kt-separator--space-lg d-xl-none"
                      ></div>
                    </div>
                  </div>
                </div>

                <!--end: Search Form -->
              </div>
              <div class="kt-portlet__body ">
                <!--begin: Datatable -->
                <div class="dt-responsive table-responsive">
                  <table class="table table-striped table-bordered nowrap">
                    <thead>
                      <tr>
                        <th>S/N</th>
                        <th>Weight (kg)</th>
                        <th>Height (m)</th>
                        <th>BMI (kg/m^2)</th>
                        <th>RVS (rvs)</th>
                        <th>Pulse (b/min)</th>
                        <th>Respiration (c/min)</th>
                        <th>Temperature (°C)</th>
                        <th>Systolic (mmHg)</th>
                        <th>Diastolic (mmHg)</th>
                        <th>Muac (muac)</th>
                        <th>SPO2 (%)</th>
                        <th>Creator</th>
                        <th>Created</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-if="triages.length == 0">
                        <td colspan="15" align="center">No triages</td>
                      </tr>
                    </tbody>
                    <tbody v-for="(triage, index) in triages" :key="triage._id">
                      <tr v-if="triage.patient">
                        <td>
                          {{ index + 1 }}
                        </td>

                        <td>{{ triage.weight }}</td>
                        <td>
                          {{ triage.height }}
                        </td>

                        <td>{{ triage.bmi }}</td>
                        <td>{{ triage.rvs }}</td>
                        <td>{{ triage.pulse }}</td>
                        <td>{{ triage.respiration }}</td>
                        <td>{{ triage.temperature }}</td>
                        <td>{{ triage.systolic }}</td>
                        <td>{{ triage.diastolic }}</td>
                        <td>
                          <label
                            v-if="triage.muac == 'Green'"
                            class="kt-badge kt-badge--success kt-badge--inline"
                            >Green</label
                          >
                          <label
                            v-if="triage.muac == 'Yellow'"
                            class="kt-badge kt-badge--warning kt-badge--inline"
                            >Yellow</label
                          >
                          <label
                            v-if="triage.muac == 'red'"
                            class="kt-badge kt-badge--danger kt-badge--inline"
                            >Red</label
                          >
                        </td>

                        <td>{{ triage.spo2 }}</td>
                        <td>
                          <a href="#">
                            {{ triage.creator.firstname }}
                            {{ triage.creator.lastname }}
                          </a>
                        </td>
                        <td>
                          {{ triage.createdAt | moment('dd, MM Do YYYY') }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <!--end: Datatable -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--End:: App Content-->

      <!--Begin:: App Content-->
      <div
        v-if="medicationdits"
        class="kt-grid__item kt-grid__item--fluid kt-app__content"
      >
        <div class="row">
          <div class="col-xl-12">
            <div class="kt-portlet kt-portlet--mobile">
              <div class="kt-portlet__head kt-portlet__head--lg">
                <div class="kt-portlet__head-label">
                  <span class="kt-portlet__head-icon">
                    <i class="kt-font-brand flaticon2-line-chart"></i>
                  </span>
                  <h3 class="kt-portlet__head-title">
                    Medications
                    <small>This is the medications table</small>
                  </h3>
                </div>
              </div>
              <div class="kt-portlet__body">
                <!--begin: Search Form -->
                <div
                  class="kt-form kt-form--label-right kt-margin-t-20 kt-margin-b-10"
                >
                  <div class="row align-items-center">
                    <div class="col-xl-8 order-2 order-xl-1">
                      <div class="row align-items-center">
                        <div class="col-md-4 kt-margin-b-20-tablet-and-mobile">
                          <div class="kt-input-icon kt-input-icon--left">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Search..."
                            />
                            <span
                              class="kt-input-icon__icon kt-input-icon__icon--left"
                            >
                              <span><i class="la la-search"></i></span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-4 order-1 order-xl-2 kt-align-right">
                      <div
                        class="kt-separator kt-separator--border-dashed kt-separator--space-lg d-xl-none"
                      ></div>
                    </div>
                  </div>
                </div>

                <!--end: Search Form -->
              </div>
              <div class="kt-portlet__body ">
                <!--begin: Datatable -->
                <div class="dt-responsive table-responsive">
                  <table class="table table-striped table-bordered nowrap">
                    <thead>
                      <tr>
                        <th>S/N</th>
                        <th>Drugs</th>
                        <th>Starting</th>
                        <th>Unit Dose</th>
                        <th>Frequency</th>
                        <th>Duration</th>
                        <th>Quantity</th>
                        <th>Dispense Total</th>
                        <th>Total Price</th>
                        <th>Status</th>
                        <th>PrescribedBy</th>
                        <th>Notes</th>
                      </tr>
                    </thead>
                    <tbody v-if="drugs.length == 0">
                      <tr>
                        <td colspan="9" align="center">No Drugs</td>
                      </tr>
                    </tbody>
                    <tbody v-for="(drug, index) in drugs" :key="drug._id">
                      <tr>
                        <td>
                          {{ index + 1 }}
                        </td>
                        <td>{{ drug.drug.name }}</td>
                        <td>
                          {{ drug.startingdate | moment('DD/MM/YYYY') }}
                        </td>
                        <td>{{ drug.unitdose }}</td>
                        <td>{{ drug.strength }}</td>
                        <td>
                          {{ drug.duration }}
                        </td>
                        <td>
                          {{ drug.quantity }}
                        </td>
                        <td>
                          {{ drug.quantitytodispense }}
                        </td>
                        <td>
                          {{ drug.totalprice }}
                        </td>
                        <td>
                          <label
                            v-if="drug.dispense"
                            class="kt-badge kt-badge--success kt-badge--inline kt-badge--pill"
                            >Dispensed</label
                          >
                          <label
                            v-else
                            class="kt-badge kt-badge--warning kt-badge--inline kt-badge--pill"
                            >Pending</label
                          >
                        </td>
                        <td>
                          <a v-if="drug.examiner" href="#">
                            {{ drug.examiner.firstname }}
                            {{ drug.examiner.lastname }}
                          </a>
                          <a v-else href="#">None</a>
                        </td>
                        <td>
                          {{ drug.notes }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <!--end: Datatable -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--End:: App Content-->

      <!--Begin:: App Content-->
      <div
        v-if="testdits"
        class="kt-grid__item kt-grid__item--fluid kt-app__content"
      >
        <div class="row">
          <div class="col-xl-12">
            <div class="kt-portlet kt-portlet--mobile">
              <div class="kt-portlet__head kt-portlet__head--lg">
                <div class="kt-portlet__head-label">
                  <span class="kt-portlet__head-icon">
                    <i class="kt-font-brand flaticon2-line-chart"></i>
                  </span>
                  <h3 class="kt-portlet__head-title">
                    Laboratory Tests
                    <small>This is the tests table</small>
                  </h3>
                </div>
              </div>
              <div class="kt-portlet__body">
                <!--begin: Search Form -->
                <div
                  class="kt-form kt-form--label-right kt-margin-t-20 kt-margin-b-10"
                >
                  <div class="row align-items-center">
                    <div class="col-xl-8 order-2 order-xl-1">
                      <div class="row align-items-center">
                        <div class="col-md-4 kt-margin-b-20-tablet-and-mobile">
                          <div class="kt-input-icon kt-input-icon--left">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Search..."
                            />
                            <span
                              class="kt-input-icon__icon kt-input-icon__icon--left"
                            >
                              <span><i class="la la-search"></i></span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-4 order-1 order-xl-2 kt-align-right">
                      <div
                        class="kt-separator kt-separator--border-dashed kt-separator--space-lg d-xl-none"
                      ></div>
                    </div>
                  </div>
                </div>

                <!--end: Search Form -->
              </div>
              <div class="kt-portlet__body ">
                <!--begin: Datatable -->
                <div class="dt-responsive table-responsive">
                  <table class="table table-striped table-bordered nowrap">
                    <thead>
                      <tr>
                        <th>S/N</th>
                        <th>Test</th>
                        <th>Laboratory</th>
                        <th>Price (₦)</th>
                        <th>Date Created</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-if="tests.length == 0">
                        <td colspan="9" align="center">No Requested Tests</td>
                      </tr>
                      <tr v-for="(test, index) in tests" :key="test._id">
                        <td>
                          {{ index + 1 }}
                        </td>
                        <td>
                          {{ test.test.name }}
                        </td>
                        <td>
                          {{ test.test.laboratory }}
                        </td>
                        <td>
                          {{ test.test.price }}
                        </td>
                        <td>
                          {{
                            test.dateRequested
                              | moment('ddd, MMM Do YYYY, h:mm a')
                          }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <!--end: Datatable -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--End:: App Content-->

      <!--Begin:: App Content-->
      <div
        v-if="imagingdits"
        class="kt-grid__item kt-grid__item--fluid kt-app__content"
      >
        <div class="row">
          <div class="col-xl-12">
            <div class="kt-portlet kt-portlet--mobile">
              <div class="kt-portlet__head kt-portlet__head--lg">
                <div class="kt-portlet__head-label">
                  <span class="kt-portlet__head-icon">
                    <i class="kt-font-brand flaticon2-line-chart"></i>
                  </span>
                  <h3 class="kt-portlet__head-title">
                    Imaging
                    <small>This is the imaging table</small>
                  </h3>
                </div>
              </div>
              <div class="kt-portlet__body">
                <!--begin: Search Form -->
                <div
                  class="kt-form kt-form--label-right kt-margin-t-20 kt-margin-b-10"
                >
                  <div class="row align-items-center">
                    <div class="col-xl-8 order-2 order-xl-1">
                      <div class="row align-items-center">
                        <div class="col-md-4 kt-margin-b-20-tablet-and-mobile">
                          <div class="kt-input-icon kt-input-icon--left">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Search..."
                            />
                            <span
                              class="kt-input-icon__icon kt-input-icon__icon--left"
                            >
                              <span><i class="la la-search"></i></span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-4 order-1 order-xl-2 kt-align-right">
                      <div
                        class="kt-separator kt-separator--border-dashed kt-separator--space-lg d-xl-none"
                      ></div>
                    </div>
                  </div>
                </div>

                <!--end: Search Form -->
              </div>
              <div class="kt-portlet__body ">
                <!--begin: Datatable -->
                <div class="dt-responsive table-responsive">
                  <table class="table table-striped table-bordered nowrap">
                    <thead>
                      <tr>
                        <th>S/N</th>
                        <th>Investigations</th>
                        <th>Price (₦)</th>
                        <th>Date Created</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-if="imagings.length == 0">
                        <td colspan="9" align="center">
                          No Requested Investigations
                        </td>
                      </tr>
                      <tr
                        v-for="(imaging, index) in imagings"
                        :key="imaging._id"
                      >
                        <td>
                          {{ index + 1 }}
                        </td>
                        <td>
                          {{ imaging.investigation.name }}
                        </td>
                        <td>
                          {{ imaging.investigation.price }}
                        </td>
                        <td>
                          {{
                            imaging.dateRequested
                              | moment('ddd, MMM Do YYYY, h:mm a')
                          }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <!--end: Datatable -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--End:: App Content-->
    </div>
  </div>
</template>

<script>
import axios from '../../axios'
export default {
  name: 'patientprofilecontent',
  data() {
    return {
      patientUrl: '/patient/',
      patient: '',
      histories: [],
      photo: '',
      dependants: [],
      payments: [],
      appointments: [],
      triages: [],
      drugs: [],
      tests: [],
      imagings: [],
      imageurl:
        process.env.VUE_APP_IMAGE_URL ||
        'http://localhost:3000/static/uploads/',
      dependantUrl: '/edit-dependant/',
      historyurl: '/consultation/patient/consultation/',
      medicationurl: '/consultation/patient/drugs/',
      testsurl: '/consultation/patient/tests/',
      imagingurl: '/consultation/patient/imaging/',
      patientpaymentUrl: '/account/patient/',
      appointmentUrl: '/appointment/patient/',
      triageUrl: '/triage/patient/',
      patientditsshow: true,
      historydits: false,
      paymentsdits: false,
      appointmentsdits: false,
      triagesdits: false,
      medicationdits: false,
      testdits: false,
      imagingdits: false,

      activeClass: 'kt-widget__item--active'
    }
  },
  mounted() {
    this.getPatient()
    this.getPatientDependant()
  },
  methods: {
    handleError(error) {
      this.$iziToast.error({
        title: 'Error!',
        message: error.response.data
      })
    },

    getPatient() {
      this.patientditsshow = true
      this.historydits = false
      this.paymentsdits = false
      this.appointmentsdits = false
      this.triagesdits = false
      this.medicationdits = false
      this.testdits = false
      this.imagingdits = false
      axios
        .get(this.patientUrl + this.$route.params.id)
        .then(response => {
          this.patient = response.data.data
          this.photo = this.imageurl + this.patient.photo

          let patient = this.patient

          patient.createdependant = '/create-dependant/' + patient._id
        })
        .catch(error => {
          this.handleError(error)
        })
    },

    getHistory() {
      this.historydits = true
      this.patientditsshow = false
      this.paymentsdits = false
      this.appointmentsdits = false
      this.triagesdits = false
      this.medicationdits = false
      this.testdits = false
      this.imagingdits = false
      axios
        .get(this.historyurl + this.$route.params.id)
        .then(response => {
          this.histories = response.data.data
        })
        .catch(error => {
          this.handleError(error)
        })
    },

    getPayments() {
      this.paymentsdits = true
      this.historydits = false
      this.patientditsshow = false
      this.appointmentsdits = false
      this.triagesdits = false
      this.medicationdits = false
      this.testdits = false
      this.imagingdits = false
      axios
        .get(this.patientpaymentUrl + this.$route.params.id)
        .then(response => {
          this.payments = response.data.data
        })
        .catch(error => {
          this.handleError(error)
        })
    },

    getAppointments() {
      this.appointmentsdits = true
      this.patientditsshow = false
      this.historydits = false
      this.paymentsdits = false
      this.triagesdits = false
      this.medicationdits = false
      this.testdits = false
      this.imagingdits = false
      axios
        .get(this.appointmentUrl + this.$route.params.id)
        .then(response => {
          this.appointments = response.data.data
        })
        .catch(error => {
          this.handleError(error)
        })
    },

    getTriages() {
      this.triagesdits = true
      this.appointmentsdits = false
      this.patientditsshow = false
      this.historydits = false
      this.paymentsdits = false
      this.medicationdits = false
      this.testdits = false
      this.imagingdits = false
      axios
        .get(this.triageUrl + this.$route.params.id)
        .then(response => {
          this.triages = response.data.data
        })
        .catch(error => {
          this.handleError(error)
        })
    },

    getMedications() {
      this.medicationdits = true
      this.triagesdits = false
      this.appointmentsdits = false
      this.patientditsshow = false
      this.historydits = false
      this.paymentsdits = false
      this.testdits = false
      this.imagingdits = false
      axios
        .get(this.medicationurl + this.$route.params.id)
        .then(response => {
          if (response.data.data[0] === undefined) {
            this.drugs = []
          }
          this.drugs = response.data.data[0]
        })
        .catch(error => {
          this.handleError(error)
        })
    },
    getTests() {
      this.testdits = true
      this.medicationdits = false
      this.triagesdits = false
      this.appointmentsdits = false
      this.patientditsshow = false
      this.historydits = false
      this.paymentsdits = false
      this.imagingdits = false
      axios
        .get(this.testsurl + this.$route.params.id)
        .then(response => {
          if (response.data.data.length == 0) {
            this.tests.length == 0
          }
          this.tests = response.data.data[0]
          console.log(response.data.data)
        })
        .catch(error => {
          this.handleError(error)
        })
    },
    getImagings() {
      this.imagingdits = true
      this.testdits = false
      this.medicationdits = false
      this.triagesdits = false
      this.appointmentsdits = false
      this.patientditsshow = false
      this.historydits = false
      this.paymentsdits = false
      axios
        .get(this.imagingurl + this.$route.params.id)
        .then(response => {
          if (response.data.data[0] === undefined) {
            this.imagings = []
          }
          this.imagings = response.data.data[0]
        })
        .catch(error => {
          this.handleError(error)
        })
    },

    getPatientDependant() {
      axios
        .get(this.patientUrl + 'dependant/' + this.$route.params.id)
        .then(response => {
          this.dependants = response.data.data
          let dependants = this.dependants
          for (let i = 0; i < dependants.length; i++) {
            dependants[i].photourl = this.imageurl + dependants[i].photo
            dependants[i].url = this.dependantUrl + dependants[i]._id
            dependants[i].triageurl =
              '/create-dependant-triage/' + dependants[i]._id
          }
        })
        .catch(error => {
          this.handleError(error)
        })
    }
  }
}
</script>

<style></style>
