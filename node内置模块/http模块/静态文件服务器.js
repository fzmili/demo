/*例子说明
@overview
    1. 采用ES6标准编写代码。
    2. 代码功能：映射文件到本地目录，完成文件的下载。
        以代码执行路径为根路径。
明明
 */
//服务代码
const url = require('url');
const path = require('path');
const fs=require('fs');
function fileService(req, res) {
    //获取根目录
    const ROOT = process.cwd();//返回一个字符串
    //URL是全局变量，不用特殊引入。
    //测试URL失败，有问题。
    let pathName = url.parse(req.url).pathname;
    let fullFilePath =path.join(ROOT, pathName);
    console.log(`当前路径:${ROOT}`);
    console.log(`请求路径: ${pathName}`);
    console.log(`组合路径:${fullFilePath}`);
    fs.readFile(fullFilePath, function (err, file) {
        if (err) {
            res.writeHead(404);
            res.end('找不到相关文件。 - -');
            return;
        }
        res.writeHead(200);
        res.end(file)
    });
}

let http = require('http');
let server = http.createServer(fileService);
server.listen(3000,'127.0.0.1');
console.log("HTTP server is listening at port 3000.");