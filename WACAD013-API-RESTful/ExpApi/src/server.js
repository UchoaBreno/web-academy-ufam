const express = require("express");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");

const prisma = require("./prisma");

const isAuth = require("./middlewares/isAuth");
const isAdmin = require("./middlewares/isAdmin");

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/products", require("./routes/product.routes"));
app.use("/v1/usuario", require("./resources/usuario/user.routes"));

/* ===========================
   LOGIN
=========================== */

app.post("/login", async (req, res) => {

    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
        where: {
            email
        },
        include: {
            userType: true
        }
    });

    if (!user) {
        return res.status(401).json({
            message: "Credenciais inválidas."
        });
    }

    const valid = await bcrypt.compare(password, user.password);

    if (!valid) {
        return res.status(401).json({
            message: "Credenciais inválidas."
        });
    }

    res.cookie("userId", user.id, {
        maxAge: 24 * 60 * 60 * 1000
    });

    res.json({
        message: "Login realizado."
    });

});

/* ===========================
   IDIOMA
=========================== */

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

/* ===========================
   ROTAS PROTEGIDAS
=========================== */

app.get("/perfil", isAuth, (req, res) => {

    res.json({
        message: "Usuário autenticado.",
        userId: req.userId
    });

});

app.get("/admin", isAuth, isAdmin, (req, res) => {

    res.json({
        message: "Bem-vindo, administrador."
    });

});

/* ===========================
   SERVIDOR
=========================== */

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});