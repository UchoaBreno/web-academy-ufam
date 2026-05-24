require('dotenv').config();

const http = require('http');
const fs = require('fs');

const diretorio = process.argv[2];

if (!diretorio) {
    console.log('Uso: node index.js <diretorio>');
    process.exit();
}

const server = http.createServer((req, res) => {

    fs.readdir(diretorio, (erro, itens) => {

        if (erro) {
            res.writeHead(500, {
                'Content-Type': 'text/plain'
            });

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
            <h1>Arquivos e Subdiretórios</h1>
            <ul>
        `;

        itens.forEach(item => {
            html += `<li>${item}</li>`;
        });

        html += `
            </ul>
        </body>
        </html>
        `;

        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        });

        res.end(html);
    });

});

const PORT = process.env.PORT || 3333;

server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});