var express = require('express');
var path = require('path');
var app = express();
var proxy = require('http-proxy-middleware');
var serveIndex = require('serve-index')

//此处设置静态文件的路径
const basePath = path.resolve('..')


app.use(express.static(basePath));



// proxy
//具体配置查看 https://github.com/chimurai/http-proxy-middleware
app.use('/gkapp_server/category/practice', proxy({target: 'http://192.168.2.196:8081', changeOrigin: true}));
app.use('/gkapp_server/live/course/type/AllList', proxy({target: 'http://system.guokaodashi.com', changeOrigin: true}));

//需要配置在 proxy配置后面
app.use('/', serveIndex(basePath, {'icons': true}))

app.listen(3000, function () {
  console.log('app listening on port 3000!')
})