import fs from "fs";
import path from "path";
import { Request, Response, NextFunction } from "express";

export function logger(
    req: Request,
    res: Response,
    next: NextFunction
): void {

    const pastaLogs =
        process.env.LOG_FOLDER || "logs";

    if (!fs.existsSync(pastaLogs)) {

        fs.mkdirSync(pastaLogs);

    }

    const arquivoLog =
        path.join(
            pastaLogs,
            "access.log"
        );

    let mensagem = "";

    if (
        process.env.LOG_FORMAT ===
        "complete"
    ) {

        mensagem =
            `${new Date().toISOString()} | ` +
            `${req.method} | ` +
            `${req.url} | ` +
            `HTTP/${req.httpVersion} | ` +
            `${req.headers["user-agent"]}\n`;

    } else {

        mensagem =
            `${new Date().toISOString()} | ` +
            `${req.method} | ` +
            `${req.url}\n`;

    }

    fs.appendFileSync(
        arquivoLog,
        mensagem
    );

    next();
}