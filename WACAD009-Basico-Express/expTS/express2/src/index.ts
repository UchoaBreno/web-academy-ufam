import express from "express";

import { validateEnv }
from "./utils/validateEnv";

validateEnv();

const app = express();

const PORT = Number(
    process.env.PORT
);

app.get("/", (req, res) => {

    res.send("<h1>Hello World!</h1>");

});

app.listen(PORT, () => {

    console.log(
        `Express app iniciada na porta ${PORT}.`
    );

});