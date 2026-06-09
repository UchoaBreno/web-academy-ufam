import express from "express";
import { engine } from "express-handlebars";
import path from "path";

import { validateEnv } from "./utils/validateEnv";
import { logger } from "./middleware/logger";
import routes from "./routes";

validateEnv();

const app = express();

app.engine(
    "hbs",
    engine({
        extname: ".hbs"
    })
);

app.set(
    "view engine",
    "hbs"
);

app.set(
    "views",
    path.join(__dirname, "views")
);

app.use(logger);

app.use(routes);

const PORT =
    Number(process.env.PORT);

app.listen(PORT, () => {

    console.log(
        `Express app iniciada na porta ${PORT}.`
    );

});