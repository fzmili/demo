/*
  URL模块测试
  记住：path=pathname+query
 */
let myurl='http://localhost:3000/admin/look?name=Li&&password=1234';
let url = require('url');
console.log("URL:"+myurl);
console.log("主机名：" + url.parse(myurl).hostname);
console.log("端口：" + url.parse(myurl).port);
console.log("路径：" + url.parse(myurl).pathname);
console.log("查询字符串：" +url.parse(myurl).query);
/*输出结果：
URL:http://localhost:3000/admin/look?name=Li&&password=1234
主机名：localhost
端口：3000
路径：/admin/look
查询字符串：name=Li&&password=1234

 */