// vue.config.js
module.exports = {
  // devServer: {
  //   proxy: process.env.VUE_APP_BACKEND_URL

  // }
  devServer: {
    host: '0.0.0.0',
    port: '8080',
    public: 'localhost:8080'
  }
}
