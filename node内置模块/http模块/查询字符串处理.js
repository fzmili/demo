var myurl='http://localhost:3000/admin/look?name=Li&&password=1234';
/*
  URL模块测试
  记住：path=pathname+query
 */
var url = require('url');
console.log("主机名：" + url.parse(myurl).hostname);
console.log("端口：" + url.parse(myurl).port);
console.log("路径：" + url.parse(myurl).pathname);
console.log("查询字符串：" +url.parse(myurl).query);
/*
querystring模块测试
将查询字符串转换为对象的方法：
1. querystring.parse()
2. url.parse(xxx,第二个参数）
 */
var querystring = require('querystring');
var query = querystring.parse(url.parse(myurl).query);
console.log(typeof query);
console.log(query);

var query2=url.parse(myurl,true).query;
console.log(typeof query2);
console.log(query2);