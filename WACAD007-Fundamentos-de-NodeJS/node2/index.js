import dotenv from "dotenv";
import http from "http";
import fs from "fs";

import { createLink } from "./createLink.js";

const ambiente = process.env.NODE_ENV || "development";

dotenv.config({
  path: `.env.${ambiente}`
});

const diretorio = process.argv[2];

const server = http.createServer(function (req, res) {

  const arquivo = req.url.substring(1);

  if (arquivo) {

    fs.readFile(
      diretorio + "/" + arquivo,
      "utf8",
      function (err, conteudo) {

        if (err) {
          res.end("Arquivo não encontrado");
          return;
        }

        res.end(
          `<a href="/">Voltar</a><br><br>${conteudo}`
        );
      }
    );

    return;
  }

  fs.readdir(diretorio, function (err, arquivos) {

    arquivos.forEach(function (arquivo) {
      res.write(createLink(arquivo));
    });

    res.end();
  });

});

server.listen(process.env.PORT);