const http = require("http");
const fs = require("fs");

const diretorio = process.argv[2];

const server = http.createServer(function (req, res) {
  fs.readdir(diretorio, function (err, arquivos) {

    if (err) {
      res.writeHead(500, {
        "Content-Type": "text/html;charset=utf-8"
      });

      res.end("Erro ao ler diretório");
      return;
    }

    res.writeHead(200, {
      "Content-Type": "text/html;charset=utf-8"
    });

    arquivos.forEach(function (arquivo) {
      res.write(arquivo + "<br>");
    });

    res.end();
  });
});

server.listen(3333);