<template>
  <div class="kt-subheader  kt-grid__item" id="kt_subheader">
    <div class="kt-subheader__main">
      <h3 class="kt-subheader__title">Dashboard</h3>
      <span class="kt-subheader__separator kt-subheader__separator--v"></span>
      <span class="kt-subheader__desc">{{ user.role }}</span>
      <a
        href="#"
        class="btn btn-label-warning btn-bold btn-sm btn-icon-h kt-margin-l-10"
      >
        Add New
      </a>
      <div
        class="kt-input-icon kt-input-icon--right kt-subheader__search kt-hidden"
      >
        <input
          type="text"
          class="form-control"
          placeholder="Search order..."
          id="generalSearch"
        />
        <span class="kt-input-icon__icon kt-input-icon__icon--right">
          <span><i class="flaticon2-search-1"></i></span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'subheader',
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
    this.user = parseJwt(token)
  }
}
</script>

<style></style>
