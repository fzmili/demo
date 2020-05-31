const fs=require('fs');
const readStream=fs.createReadStream('./data/BaiduNetdisk.exe');
const writeStream=fs.createWriteStream('./data/NetDisk_ws_bak');
readStream.on('data',function (data) {
    console.log(data);
    writeStream.write(data);
});
readStream.on('end',function() {
    console.log('读取结束');
    writeStream.close();
});
