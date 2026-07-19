import { Router } from "express";

import {
    listarProdutos,
    visualizarProduto,
    formularioNovoProduto,
    criarProduto,
    formularioEditarProduto,
    excluirProduto,
    atualizarProduto
} from "../controllers/produtoController";

const router = Router();

router.get(
    "/",
    listarProdutos
);

router.get(
    "/novo",
    formularioNovoProduto
);

router.get(
    "/:id/editar",
    formularioEditarProduto
);

router.get(
    "/:id/excluir",
    excluirProduto
);

router.post(
    "/:id/editar",
    atualizarProduto
);

router.post(
    "/",
    criarProduto
);

router.get(
    "/:id",
    visualizarProduto
);

export default router;