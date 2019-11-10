// 目标服务器 base
// 被代理的服务器

const http = require('http')
const url = require('url')
const axios = require('axios')
const erpUrl = 'http://127.0.0.1:3000'

const PORT = 4000

let index = 0

const server = http.createServer( async (req, res) => {
  const reqUrl = url.parse(req.url)
  // 统计次数
  if (reqUrl.path.indexOf('/base/api') > -1) {
    index = index + 1
    console.log(`base 服务器被访问次数:`, index)
  }

  // 获取服务器已访问的次数
  if (req.method === 'GET' && reqUrl.path === '/base/api/total') {
    try {
      const {data} = await axios.get(`${erpUrl}/erp/inside/total`)

      if (data.errno === 0) {
        let erpTotal = data.data.total || 0
        console.log('erp 服务器被访问次数', erpTotal)
        let i = erpTotal + index
  
        res.statusCode = 200
        let resJson = JSON.stringify({
          errno: 0,
          data: {
            total: i
          }
        })
        res.end(resJson)
      }
    } catch(e) {
      res.statusCode = 502
      res.end('server proxy error', e)
    }
  }

  res.statusCode = 404
  res.end('Not found')
})

server.listen(PORT, '127.0.0.1', () => {
  console.log('target port listen', PORT)
})