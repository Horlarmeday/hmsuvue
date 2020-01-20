// vue.config.js
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: process.env.VUE_APP_BACKEND_URL,
        changeOrigin: true,
        secure: false
      },
      '/static': {
        target: process.env.VUE_APP_BACKEND_URL,
        changeOrigin: true,
        secure: false
      }
    }
  }
}
