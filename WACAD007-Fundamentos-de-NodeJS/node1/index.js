const http = require('http');
const fs = require('fs');
const path = require('path');

const directory = process.argv[2];

if (!directory) {
  console.log('Uso: node index.js <diretorio>');
  process.exit(1);
}

const server = http.createServer((req, res) => {

  fs.readdir(directory, (err, files) => {

    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Erro ao ler diretório');
      return;
    }

    let html = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>Arquivos</title>
      </head>
      <body>
    `;

    files.forEach(file => {
      html += `<div>${file}</div>`;
    });

    html += `
      </body>
      </html>
    `;

    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8'
    });

    res.end(html);

  });

});

server.listen(3333, () => {
  console.log('Servidor rodando em http://localhost:3333');
});