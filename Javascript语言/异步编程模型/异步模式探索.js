/*说明
* 探索的主要目的是验证，   主流程+事件循环+事件队列 这种模式
* 主流程中
 */

var fs = require('fs');
console.log("正常流程1")
fs.readFile('test.txt', 'utf-8', function(err, data) {
    if (err) {
        console.error(err);
    } else {
        console.log('readFile事件');
    }
});
const  http = require('https');
http.get("https://www.baidu.com",function (response) {
    let html='';
    response.on('data',function (data) {
        html=html+data;
        console.log('http_data事件')
    });
    response.on('end',function () {
        console.log('http_ends事件');
    });
});
console.log('正常流程2');