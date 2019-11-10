var express = require('express');
var path = require('path');
var logger = require('morgan');
var httpProxy = require('http-proxy')
var proxy = httpProxy.createProxyServer({ changeOrigin: true })
var servies = require('./server') 
var protocol = "http://";
var env = "dev";
const http = require('http');
const targetServer = servies[env];


const proxyTarget = {
  '/erp/api': {
    target: `${protocol}${targetServer.erp}`,
    changeOrigin: true,
    secure: true,
  },
  '/base/api': {
    target: `${protocol}${targetServer.base}`,
    changeOrigin: true,
    secure: true,
  }
}


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

for (const key in proxyTarget) {
  if (proxyTarget.hasOwnProperty(key)) {
    const e = proxyTarget[key]
    app.all(`${key}/*`, (req, res) => {
      proxy.web(req, res, {
        target: e.target,
      })
    })
  }
}

// Vue router 404
app.use((req, res) => {
  if (req.originalUrl) {
    const keys = Object.keys(proxyTarget)
    keys.forEach(key => {
      if (req.originalUrl.indexOf(key) < 0) {
        res.sendFile(path.resolve(__dirname, 'public/index.html'))
      }
    })
  } 
})

const ser = http.createServer(app)
ser.listen(4000, () => {
  console.log("port: 4000")
})

module.exports = app;
