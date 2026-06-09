import { Router } from "express";
import { LoremIpsum } from "lorem-ipsum";

const router = Router();

router.get("/", (req, res) => {
    res.send("<h1>Hello World!</h1>");
});

router.get("/lorem/:qtd", (req, res) => {

    const quantidade = Number(req.params.qtd);

    if (isNaN(quantidade) || quantidade <= 0) {

        res.status(400).send("Informe uma quantidade válida.");

        return;
    }

    const lorem = new LoremIpsum();

    const texto = lorem.generateParagraphs(
        quantidade
    );

    const paragrafos = texto
        .split("\n")
        .map(paragrafo => `<p>${paragrafo}</p>`)
        .join("");

    res.send(`
        <html>
            <head>
                <title>Lorem Ipsum</title>
            </head>

            <body style="
                max-width: 800px;
                margin: 30px auto;
                font-family: Arial;
            ">
                ${paragrafos}
            </body>
        </html>
    `);
});

export default router;