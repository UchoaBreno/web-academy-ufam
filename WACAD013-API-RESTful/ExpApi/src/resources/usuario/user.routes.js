const express = require("express");
const router = express.Router();

const controller = require("./user.controller");

/**
 * @swagger
 * tags:
 *   name: Usuários
 *   description: Operações de gerenciamento de usuários
 */

/**
 * @swagger
 * /v1/usuario:
 *   get:
 *     summary: Lista todos os usuários
 *     tags: [Usuários]
 *     responses:
 *       200:
 *         description: Lista de usuários
 */
router.get("/", controller.index);

/**
 * @swagger
 * /v1/usuario/{id}:
 *   get:
 *     summary: Busca um usuário pelo ID
 *     tags: [Usuários]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Usuário encontrado
 *       404:
 *         description: Usuário não encontrado
 */
router.get("/:id", controller.read);

/**
 * @swagger
 * /v1/usuario:
 *   post:
 *     summary: Cadastra um novo usuário
 *     tags: [Usuários]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               userTypeId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Usuário criado
 */
router.post("/", controller.create);

/**
 * @swagger
 * /v1/usuario/{id}:
 *   put:
 *     summary: Atualiza um usuário
 *     tags: [Usuários]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Usuário atualizado
 */
router.put("/:id", controller.update);

/**
 * @swagger
 * /v1/usuario/{id}:
 *   delete:
 *     summary: Remove um usuário
 *     tags: [Usuários]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Usuário removido
 */
router.delete("/:id", controller.delete);

module.exports = router;