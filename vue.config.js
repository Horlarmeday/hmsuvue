// vue.config.js
module.exports = {
  devServer: {
    proxy: process.env.BACKEND_URL
  }
}
