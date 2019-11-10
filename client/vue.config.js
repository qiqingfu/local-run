const server = require("./server");
const protocol = "http://";
const env = "dev";

const targetServer = server[env];

module.exports = {
  publicPath: "/app/",
  devServer: {
    port: 8088,
    proxy: {
      "/erp/api": {
        target: `${protocol}${targetServer.erp}`,
        changeOrigin: true
      },
      "/base/api": {
        target: `${protocol}${targetServer.base}`
      }
    }
  }
};
