const fs = require('fs');

function readFileLineByLine(pathToFile,cb){
    fs.readFile(pathToFile, (err,data) => {
        if(err) throw err
        let lineByLine = data.toString().split('\n')
        console.log(lineByLine)
        
        let getUrl = lineByLine.map((line) => {
            let splitLineSpace = line.split(' ')
            let splitLinePoints = line.split(':')
            let getUrl = splitLineSpace[splitLineSpace.length-1]

            let objExport = {
                title : splitLinePoints[0],
                url : getUrl.substr(0,getUrl.length - 1)
            }
            return objExport
        });

        cb(getUrl)
    })
}

module.exports = { readFileLineByLine }
