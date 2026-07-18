const express = require("express");
const controller = require("./compra.controller");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Compras
 *   description: Operações do carrinho de compras
 */

/**
 * @swagger
 * /compra/adicionar:
 *   post:
 *     summary: Adiciona um produto ao carrinho
 *     tags: [Compras]
 *     responses:
 *       200:
 *         description: Produto adicionado
 */
router.post("/adicionar", controller.adicionar);

/**
 * @swagger
 * /compra:
 *   get:
 *     summary: Visualiza o carrinho
 *     tags: [Compras]
 *     responses:
 *       200:
 *         description: Carrinho retornado
 */
router.get("/", controller.visualizar);

/**
 * @swagger
 * /compra/finalizar:
 *   post:
 *     summary: Finaliza a compra
 *     tags: [Compras]
 *     responses:
 *       201:
 *         description: Compra realizada
 */
router.post("/finalizar", controller.finalizar);

module.exports = router;