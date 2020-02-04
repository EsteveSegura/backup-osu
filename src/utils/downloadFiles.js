const https = require('https');
const fs = require('fs');

function downloadFile(url,fileName,dest = '../assets/'){
    return new Promise((resolve,reject) => {
        let file = fs.createWriteStream(`${dest}${fileName}`);
        let request = https.get(url, (response) => {
            response.pipe(file);
            file.on('finish', () =>{
                resolve(true)
            });
        });
    });
}

function sleep(s){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(true)
        }, 1000*s);
    })
}


module.exports = { downloadFile, sleep }
