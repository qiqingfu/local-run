## local-run

总结的一篇文章
[本地搭建部署Vue代理服务器](https://qiqingfu.github.io/2019/11/11/%E6%9C%AC%E5%9C%B0%E6%90%AD%E5%BB%BA%E9%83%A8%E7%BD%B2Vue%E4%BB%A3%E7%90%86%E6%9C%8D%E5%8A%A1%E5%99%A8/)

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

将打包后的 dist目录下的文件拷贝到 run 目录下的 `public/app` 目录中。并且将 `index.html` 移动到 `public` 的根目录下。 目录结构: 

```
run
  - public
    - app
      - css
      - js
      - favicon.ico
    - index.htm
``` 

在 run 根目录下运行 `node app.js`, 打印 port: 4000

访问: `http://localhost:4000/app/`


## end 
