import { Router } from "express";
import { LoremIpsum } from "lorem-ipsum";

const router = Router();

router.get("/", (req, res) => {

    res.send("<h1>Hello World!</h1>");

});

router.get("/lorem/:qtd", (req, res) => {

    const quantidade = Number(
        req.params.qtd
    );

    if (
        isNaN(quantidade) ||
        quantidade <= 0
    ) {

        res.status(400).send(
            "Informe uma quantidade válida."
        );

        return;
    }

    const lorem = new LoremIpsum();

    const texto =
        lorem.generateParagraphs(
            quantidade
        );

    const paragrafos = texto
        .split("\n")
        .map(
            paragrafo =>
                `<p>${paragrafo}</p>`
        )
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

router.get("/hb1", (req, res) => {

    res.render(
        "hb1"
    );

});

router.get("/hb2", (req, res) => {

    res.render(
        "hb2",
        {
            titulo:
                "Express Framework"
        }
    );

});

router.get("/hb3", (req, res) => {

    const professores = [
        "David Fernandes - sala 1238",
        "Horácio Fernandes - sala 1237",
        "Edleno Moura - sala 1236",
        "Elaine Harada - sala 1231"
    ];

    res.render(
        "hb3",
        {
            professores
        }
    );

});

export default router;