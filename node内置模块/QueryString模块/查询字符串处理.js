/*
主要目的是测试queryString模块的作用。
querystring的主要作用是将查询字符串,解析为对象.
 */
let str="foo=bar&baz=val";
const query=require("querystring");
let out=query.parse(str);
console.log(out);
/*结果输出：
{ 
    foo: 'bar', 
    baz: 'val'
   }
 */