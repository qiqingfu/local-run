## local-run

本地运行部署 Vue 打包后的资源+接口代理

## 目录
```
  client  -- Vue 客户端界面
  server  -- 提供接口服务
  run  -- 本地代理服务器, 运行 dist 静态资源
```

## 本地运行

### client + server
一种纯前后端分离的运行, 未构建前的本地调试开发。提供了两个服务器, 且服务器之间有接口互相调用。

**server:**

```
git clone https://github.com/qiqingfu/local-run.git

cd local-run

cd server

npm install


// 运行 erp接口服务
node erp-server.js
target port listen 3000


// 运行 base 接口服务
node basse-server.js
target port listen 4000
``` 

**client**

```
cd client

npm install

npm run serve

- Local:http://localhost:8088/app/ 

- Network: http://192.168.2.238:8088/app/
```

## run 