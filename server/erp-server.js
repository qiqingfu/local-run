// 目标服务器 erp
// 被代理的服务器

const http = require('http')
const url = require('url')

const PORT = 3000

let index = 0

const server = http.createServer((req, res) => {
  const reqUrl = url.parse(req.url)
  // 统计次数
  // 让 base 服务器获取次数
  if (reqUrl.path.indexOf('/erp/api') > -1) {
    index = index + 1
    console.log(`当前服务器被请求的次数:`, index)
  }

  if (req.method === 'GET' && reqUrl.path === '/erp/api/list') {
    res.statusCode = 200
    let resJson = JSON.stringify({
      errno: 0,
      data: {
        id: 1,
        get: req.method,
        path: reqUrl.path
      }
    })
    res.end(resJson)
  }

  // 获取服务器已访问的次数
  if (req.method === 'GET' && reqUrl.path === '/erp/inside/total') {
    res.statusCode = 200
    let resJson = JSON.stringify({
      errno: 0,
      data: {
        total: index
      }
    })

    res.end(resJson)
  }

  res.statusCode = 404
  res.end('Not found')
})

server.listen(PORT, '127.0.0.1', () => {
  console.log('target port listen', PORT)
})