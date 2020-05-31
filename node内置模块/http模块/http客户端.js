const  http = require('https');
http.get("https://www.baidu.com",function (response) {
    let html='';
    response.on('data',function (data) {
        html=html+data;
    });
    response.on('end',function () {
        console.log(html);
    });
});
