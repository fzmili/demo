//导出字符串
const util_str=require('./utils/util1.js');
console.log(util_str);
//调用导出的函数
const util_add=require('./utils/util2');
console.log(util_add(3,4));
//导出对象
const util_obj=require('./utils/util3');
console.log(util_obj.add(5,6));
//调用，函数必须加（），否则当做属性看待。
const util_about=require('./utils/util4_about')
console.log(util_about.About)
console.log(util_about.About())