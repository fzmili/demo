//主要测试 调用链条
const obj=require('../components/about')
console.log(obj.About())

module.exports={
    About:obj.About
}