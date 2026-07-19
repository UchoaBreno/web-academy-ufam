import dotenv from "dotenv";

dotenv.config();

export function validateEnv(): void {
    if (!process.env.PORT) {
        throw new Error("Variável PORT não encontrada.");
    }
}
