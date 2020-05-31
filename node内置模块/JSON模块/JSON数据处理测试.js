/*
JSON语法可以表示三种值：
1.简单值，字符串，数值，布尔值，null
2.对象，
 */
var arr=['a',123,true,null];
// 将Javascript对象   转变成    JSON字符串
var book = {
    title: "Professional JavaScript",
    authors: [
        "Nicholas C. Zakas"
    ],
    edition: 3,
    year: 2011
};
var jsonText = JSON.stringify(book);
console.log(typeof jsonText);
console.log(jsonText);


//将JSON字符串，转化为   Javascript对象
var jsonText2='{"title":"Professional JavaScript","authors":["Nicholas C. Zakas"],"edition":3,"year":2011}';
console.log(typeof jsonText2);
var book2 = JSON.parse(jsonText2);
console.log(typeof book2);
console.log(book2);