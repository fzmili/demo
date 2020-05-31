var http = require('http');
var server = new http.Server();
server.on('request', function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});//写HTTP报文头
    res.write('<h1>Node.js</h1>');//写HTTP报文体
    res.end('<p>Hello World</p>');//内部调用write（）写报文，并且通知报文结束。
});
server.listen(3000);
console.log("HTTP server is listening at port 3000.");