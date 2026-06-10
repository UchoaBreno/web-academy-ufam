import express from "express";
import { engine } from "express-handlebars";
import path from "path";

import { validateEnv } from "./utils/validateEnv";
import { logger } from "./middleware/logger";
import routes from "./routes";

validateEnv();

const app = express();

app.use(express.static("src/public"));

app.engine(
    "hbs",
    engine({
        extname: ".hbs",
        defaultLayout: "main",
        layoutsDir: path.join(
            process.cwd(),
            "src",
            "views",
            "layouts"
        )
    })
);

app.set("view engine", "hbs");

app.set(
    "views",
    path.join(process.cwd(), "src", "views")
);

app.use(logger);

app.use(express.urlencoded({ extended: true }));

app.use(routes);

const PORT = Number(process.env.PORT);

app.listen(PORT, () => {
    console.log(
        `Express app iniciada na porta ${PORT}.`
    );
});