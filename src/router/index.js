import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'
// import Home from '../views/Home.vue'
import Login from '../views/auth/Login.vue'
import Register from '../views/auth/Register.vue'
import Dashboard from '../views/dashboards/Dashboard.vue'
import Patients from '../views/app/patients/Patients.vue'
import AddmittedPatients from '../views/app/patients/AddmittedPatients.vue'
import DischargedPatients from '../views/app/patients/DischargedPatients.vue'
import Employees from '../views/app/employees/Employees.vue'
import CreateEmployee from '../views/app/employees/CreateEmployee.vue'
import CreatePatient from '../views/app/patients/CreatePatient.vue'
import NProgress from 'nprogress'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  // common routes
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true
    }
  },
  // Patients routes
  {
    path: '/create-patient',
    name: 'createpatients',
    component: CreatePatient,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/patients',
    name: 'patients',
    component: Patients,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/addmitted-patients',
    name: 'addmittedpatients',
    component: AddmittedPatients,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/discharged-patients',
    name: 'dischargedpatients',
    component: DischargedPatients,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/patient/:id',
    name: 'patientprofile',
    component: () => import('../views/app/patients/PatientProfile.vue'),
    meta: {
      requiresAuth: true
    }
  },
  // employees routes
  {
    path: '/employee-list',
    name: 'employees',
    component: Employees,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/create-employee-account',
    name: 'createemployee',
    component: CreateEmployee,
    meta: {
      requiresAuth: true
    }
  },

  // Appointments
  {
    path: '/create-appointment',
    name: 'createappointment',

    component: () => import('../views/app/appointments/CreateAppointment.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/appointments',
    name: 'appointments',

    component: () => import('../views/app/appointments/Appointments.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/appointment/:id',
    name: 'appointmentparams',
    component: () =>
      import('../views/app/appointments/CreateAppointmentParams.vue'),
    meta: {
      requiresAuth: true
    }
  },
  // Triages
  {
    path: '/create-triage',
    name: 'createtriage',
    component: () => import('../views/app/triages/CreateTriage.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/triages',
    name: 'triages',
    component: () => import('../views/app/triages/Triages.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/triage/:id',
    name: 'triageparams',
    component: () => import('../views/app/triages/CreateTriageParams.vue'),
    meta: {
      requiresAuth: true
    }
  },
  // daily reports
  {
    path: '/create-daily-report',
    name: 'createdailyreport',
    component: () =>
      import('../views/app/nurseutilities/CreateDailyReport.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/daily-reports',
    name: 'dailyreport',
    component: () => import('../views/app/nurseutilities/DailyReport.vue'),
    meta: {
      requiresAuth: true
    }
  },
  // Nurse note
  {
    path: '/nursing-notes',
    name: 'nursenote',
    component: () => import('../views/app/nurseutilities/NurseNotes.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/create-nursing-note',
    name: 'createnursenote',
    component: () => import('../views/app/nurseutilities/CreateNurseNote.vue'),
    meta: {
      requiresAuth: true
    }
  },
  // Care plan
  {
    path: '/care-plan',
    name: 'careplan',
    component: () => import('../views/app/nurseutilities/CarePlans.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/create-care-plan',
    name: 'createcareplan',
    component: () => import('../views/app/nurseutilities/CreateCarePlan.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/treatment-records',
    name: 'treatment',
    component: () => import('../views/app/nurseutilities/Treatment.vue'),
    meta: {
      requiresAuth: true
    }
  },
  // Models
  {
    path: '/departments',
    name: 'departments',
    component: () => import('../views/app/model/Departments.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/create-department',
    name: 'createdepartment',
    component: () => import('../views/app/model/CreateDepartment.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/create-unit',
    name: 'unit',
    component: () => import('../views/app/model/Units.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/services',
    name: 'services',
    component: () => import('../views/app/model/Services.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/create-service',
    name: 'createservice',
    component: () => import('../views/app/model/CreateService.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/laboratories',
    name: 'laboratories',
    component: () => import('../views/app/model/Laboratories.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/create-laboratory',
    name: 'createlaboratory',
    component: () => import('../views/app/model/CreateLaboratory.vue'),
    meta: {
      requiresAuth: true
    }
  },
  // Pharmacy
  {
    path: '/create-generic-drug',
    name: 'creategeneric',
    component: () => import('../views/app/pharmacy/CreateGeneric.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/add-pharmacy-item',
    name: 'pharmacyitem',
    component: () => import('../views/app/pharmacy/CreateStoreItem.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/pharmacy-items',
    name: 'pharmacyitem',
    component: () => import('../views/app/pharmacy/PharmacyItem.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/pharmacy/:id',
    name: 'pharmacyitemparams',
    component: () => import('../views/app/pharmacy/OnePharmacyItem.vue'),
    meta: {
      requiresAuth: true
    }
  },
  // Laboratory
  {
    path: '/laboratory-tests',
    name: 'laboratorytests',
    component: () => import('../views/app/laboratory/LabTests.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/add-laboratory-items',
    name: 'addlaboratoryitem',
    component: () => import('../views/app/laboratory/CreateLabItem.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/laboratory-items',
    name: 'laboratoryitems',
    component: () => import('../views/app/laboratory/LabItems.vue'),
    meta: {
      requiresAuth: true
    }
  },
  // Medical imaging
  {
    path: '/create-imaging',
    name: 'createimaging',
    component: () => import('../views/app/imaging/ImagingItems.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/investigation/:id',
    name: 'createinvestigation',
    component: () => import('../views/app/imaging/InvestigationItems.vue'),
    meta: {
      requiresAuth: true
    }
  },
  // Insurance
  {
    path: '/create-insurance',
    name: 'createinsurance',
    component: () => import('../views/app/insurance/CreateInsurance.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/hmo/:id',
    name: 'createhmo',
    component: () => import('../views/app/insurance/CreateHmo.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/enrollee/:id',
    name: 'createenrollee',
    component: () => import('../views/app/insurance/CreateEnrollee.vue'),
    meta: {
      requiresAuth: true
    }
  },
  // Vendors
  {
    path: '/create-vendor-account',
    name: 'createvendor',
    component: () => import('../views/app/vendor/CreateVendor.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/vendor-list',
    name: 'vendors',
    component: () => import('../views/app/vendor/Vendors.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/vendor-supplies',
    name: 'vendorsupplies',
    component: () => import('../views/app/vendor/VendorSupply.vue'),
    meta: {
      requiresAuth: true
    }
  },
  // Settings
  {
    path: '/settings',
    name: 'settings',
    component: () => import('../views/app/settings/Settings.vue'),
    meta: {
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start()
  }
  next()
})

// eslint-disable-next-line no-unused-vars
router.afterEach((to, from) => {
  NProgress.done()
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})

export default router
