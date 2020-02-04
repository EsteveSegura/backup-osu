const backUpReader = require('./utils/backReader');
const downloader = require('./utils/downloadFiles');


(async () => {
    backUpReader.readFileLineByLine('../list.txt', async (data) => {
        for (let i = 0; i < data.length; i = i + 5) {
            for(let y = 1 ; y < 4; y++){
                downloader.downloadFile(data[i+y].url, data[i+y].title + ".osz")
            }
            await downloader.downloadFile(data[i+5].url, data[i+5].title + ".osz")
            console.log(data[i].title)
            await downloader.sleep(10)
        }
    });
})();


