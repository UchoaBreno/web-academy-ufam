import express from "express";

import { validateEnv }
from "./utils/validateEnv";

import { logger }
from "./middleware/logger";

import routes
from "./routes";

validateEnv();

const app = express();

app.use(logger);

app.use(routes);

const PORT =
    Number(process.env.PORT);

app.listen(PORT, () => {

    console.log(
        `Express app iniciada na porta ${PORT}.`
    );

});