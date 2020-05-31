const fs=require('fs');
const readStream=fs.createReadStream('./data/BaiduNetDisk.exe');
const writeStream=fs.createWriteStream('./data/NetDisk_pip_bak');
readStream.pipe(writeStream);