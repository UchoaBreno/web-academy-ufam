import "dotenv/config";
import express from "express";
import path from "path";
import { PrismaClient } from "../generated/prisma/client";

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.get("/clientes", async (req, res) => {
  const clientes = await prisma.cliente.findMany();
  res.json(clientes);
});

app.post("/clientes", async (req, res) => {
  const cliente = await prisma.cliente.create({
    data: {
      ...req.body,
      data_nascimento: new Date(req.body.data_nascimento),
    },
  });

  res.json(cliente);
});

app.put("/clientes/:id", async (req, res) => {
  const cliente = await prisma.cliente.update({
    where: {
      id_cliente: Number(req.params.id),
    },
    data: {
      ...req.body,
      data_nascimento: new Date(req.body.data_nascimento),
    },
  });

  res.json(cliente);
});
app.delete("/clientes/:id", async (req, res) => {
  await prisma.cliente.delete({
    where: {
      id_cliente: Number(req.params.id),
    },
  });

  res.json({ mensagem: "Cliente removido." });
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});