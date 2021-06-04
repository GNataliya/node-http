const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
    // запрос с браузера на сервер:
    if (req.method == 'GET'){
        url = req.url;
        console.log(url);
    // отправка файла в ответ на запрос:
    let file = path.join(__dirname + '/file.txt');
    fs.readFile(file, (err, data) => {
        if (err) throw res.end(err);
        res.setHeader("Content-Type", "text/txt");
        res.writeHead(200);
        res.end(data);
      });
    };

}).listen(8000);
