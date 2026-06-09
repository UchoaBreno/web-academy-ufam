import { Request, Response } from "express";
import { LoremIpsum } from "lorem-ipsum";

export const home = (
    req: Request,
    res: Response
) => {

    res.send(
        "<h1>Hello World!</h1>"
    );

};

export const lorem = (
    req: Request,
    res: Response
) => {

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
            p => `<p>${p}</p>`
        )
        .join("");

    res.send(`
        <html>
            <body
                style="
                    max-width:800px;
                    margin:30px auto;
                    font-family:Arial;
                "
            >
                ${paragrafos}
            </body>
        </html>
    `);

};

export const hb1 = (
    req: Request,
    res: Response
) => {

    res.render("hb1");

};

export const hb2 = (
    req: Request,
    res: Response
) => {

    res.render(
        "hb2",
        {
            titulo:
                "Express Framework"
        }
    );

};

export const hb3 = (
    req: Request,
    res: Response
) => {

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

};

export const hb4 = (
    req: Request,
    res: Response
) => {

    const tecnologias = [

        {
            name: "Express",
            type: "Framework",
            poweredByNodejs: true
        },

        {
            name: "Laravel",
            type: "Framework",
            poweredByNodejs: false
        },

        {
            name: "React",
            type: "Library",
            poweredByNodejs: true
        },

        {
            name: "Handlebars",
            type: "Engine View",
            poweredByNodejs: true
        },

        {
            name: "Django",
            type: "Framework",
            poweredByNodejs: false
        },

        {
            name: "Docker",
            type: "Virtualization",
            poweredByNodejs: false
        },

        {
            name: "Sequelize",
            type: "ORM tool",
            poweredByNodejs: true
        }

    ];

    res.render(
        "hb4",
        {
            tecnologias
        }
    );

};