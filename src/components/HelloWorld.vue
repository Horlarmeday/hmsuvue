<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >vue-cli documentation</a
      >.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
          target="_blank"
          rel="noopener"
          >babel</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
          target="_blank"
          rel="noopener"
          >eslint</a
        >
      </li>
      <li>
        <a href="/login">Login</a>
      </li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank" rel="noopener"
          >Forum</a
        >
      </li>
      <li>
        <a href="https://chat.vuejs.org" target="_blank" rel="noopener"
          >Community Chat</a
        >
      </li>
      <li>
        <a href="https://twitter.com/vuejs" target="_blank" rel="noopener"
          >Twitter</a
        >
      </li>
      <li>
        <a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a>
      </li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li>
        <a href="https://router.vuejs.org" target="_blank" rel="noopener"
          >vue-router</a
        >
      </li>
      <li>
        <a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-devtools#vue-devtools"
          target="_blank"
          rel="noopener"
          >vue-devtools</a
        >
      </li>
      <li>
        <a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener"
          >vue-loader</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
          rel="noopener"
          >awesome-vue</a
        >
      </li>
    </ul>
    <div class="col-xl-6">
      <!--begin:: Widgets/Tasks -->
      <div class="kt-portlet kt-portlet--tabs kt-portlet--height-fluid">
        <div class="kt-portlet__head">
          <div class="kt-portlet__head-label">
            <h3 class="kt-portlet__head-title">
              Registration & Consultation
            </h3>
          </div>
        </div>
        <div class="kt-portlet__body">
          <!--begin: Search Form -->
          <div class="kt-form kt-form--label-right">
            <div class="row align-items-center">
              <div class="col-xl-8 order-2 order-xl-1">
                <div class="row align-items-center">
                  <div class="col-md-4 kt-margin-b-20-tablet-and-mobile">
                    <div class="kt-input-icon kt-input-icon--left">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Search..."
                        v-model="input"
                        @keyup="dashboard"
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
                <a href="#" class="btn btn-default kt-hidden">
                  <i class="la la-cart-plus"></i> New Order
                </a>
                <div
                  class="kt-separator kt-separator--border-dashed kt-separator--space-lg d-xl-none"
                ></div>
              </div>
            </div>
          </div>

          <!--end: Search Form -->
        </div>
        <div class="kt-portlet__body">
          <div class="dt-responsive table-responsive">
            <table class="table table-striped table-bordered nowrap">
              <thead>
                <tr>
                  <th>S/N</th>
                  <th>Patient Name</th>
                  <th>Payments</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Mode of Payment</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-if="patients.length == 0">
                  <td colspan="9" align="center">No Registered Patients</td>
                </tr>
              </tbody>
              <tbody v-for="(patient, index) in patients" :key="patient._id">
                <tr>
                  <td>
                    {{ index + 1 }}
                  </td>

                  <td>
                    <router-link :to="patient.url">
                      {{ patient.firstname }} {{ patient.lastname }}
                    </router-link>
                  </td>
                  <td>
                    <p>{{ patient.registration }}</p>
                    <p>{{ patient.consultation }}</p>
                  </td>
                  <td>
                    <p name="amount">
                      {{ patient.registration + patient.consultation }}
                    </p>
                  </td>
                  <td>
                    <label
                      v-if="!patient.paid"
                      class="kt-badge kt-badge--warning kt-badge--inline kt-badge--pill"
                      >Pending</label
                    >
                    <label
                      v-if="patient.paid"
                      class="kt-badge kt-badge--success kt-badge--inline kt-badge--pill"
                      >Paid</label
                    >
                  </td>
                  <td>
                    <select
                      v-if="!patient.paid"
                      v-model="registration.modeofpayment"
                      class="form-control"
                    >
                      <option disabled>Select</option>
                      <option>Cash</option>
                      <option>Transfer</option>
                      <option>POS</option>
                      <option>Bank Deposit</option>
                    </select>
                  </td>
                  <td>
                    <button
                      v-if="!patient.paid"
                      class="btn btn-brand btn-elevate"
                      @click="approvePayment(patient, index)"
                    >
                      Approve
                    </button>

                    <a
                      target="_blank"
                      v-else
                      :href="patient.invoiceurl"
                      class="btn btn-success btn-elevate"
                    >
                      Invoice
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="card-footer">
            <p class="float-left">
              Showing {{ pageSize }} of {{ rows }} entries
            </p>
            <button
              class="btn btn-outline-brand btn-sm ml-3 float-right"
              :disabled="isNextButtonDisabled"
              @click="pageChangeHandle('next')"
            >
              Next →
            </button>

            <button
              class="btn btn-outline-brand btn-sm float-right"
              :disabled="isPreviousButtonDisabled"
              @click="pageChangeHandle('previous')"
            >
              ← Prev
            </button>
          </div>
        </div>
      </div>

      <!--end:: Widgets/Tasks -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
