const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/products", require("./routes/product.routes"));
app.use("/v1/usuario", require("./resources/usuario/user.routes"));
app.get("/language/:lang", (req, res) => {

    const { lang } = req.params;

    res.cookie("lang", lang, {
        maxAge: 24 * 60 * 60 * 1000
    });

    res.json({
        message: "Idioma alterado.",
        language: lang
    });

});

app.get("/language", (req, res) => {

    res.json({
        language: req.cookies.lang || "pt-BR"
    });

});

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});