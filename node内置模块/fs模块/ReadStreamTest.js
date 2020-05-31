const fs=require('fs');
const readStream=fs.createReadStream('./Anaconda.exe');
readStream.on('data',function (data) {
    console.log(data);
    console.log('-----------------\n');
});
readStream.on('end',function() {
    console.log('读取结束');
});
