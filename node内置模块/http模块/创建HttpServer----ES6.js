const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(
    (req, res) => {//匿名函数，=>是ES6的最新语法。
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello World ES6');
    });

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

