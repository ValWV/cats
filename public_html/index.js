var fs = require('fs');

var http = require('http'); // Необходимый модуль

// Создание сервера
var server = http.createServer(function(req, res) {
  // Указание заголовков (тип данных и кодировка)
  console.log("URL страницы: + req.url");
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
  var myReadShort = fs.createReadStream(__dirname + '/cats1.html', 'utf-8');
  myReadShort.pipe(res);
});
// server - переменная созданная ранее
server.listen(3000, '127.0.0.1');
