// vue.config.js
module.exports = {
  devServer: {
    proxy: process.env.VUE_APP_BACKEND_URL
  }
}
