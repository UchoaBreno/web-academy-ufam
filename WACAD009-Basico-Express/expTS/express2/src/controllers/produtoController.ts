import { Request, Response } from "express";
import { produtos } from "../models/produto";

export function listarProdutos(
    req: Request,
    res: Response
) {
    res.render(
        "produtos/index",
        {
            produtos
        }
    );
}

export function formularioEditarProduto(
    req: Request,
    res: Response
) {
    const id = Number(req.params.id);

    const produto = produtos.find(
        p => p.id === id
    );

    if (!produto) {
        res.status(404).send("Produto não encontrado.");
        return;
    }

    res.render(
        "produtos/form",
        {
            produto
        }
    );
}

export function excluirProduto(
    req: Request,
    res: Response
) {
    const id = Number(req.params.id);

    const indice = produtos.findIndex(
        p => p.id === id
    );

    if (indice >= 0) {
        produtos.splice(indice, 1);
    }

    res.redirect("/produtos");
}

export function visualizarProduto(
    req: Request,
    res: Response
) {
    const id = Number(req.params.id);

    const produto = produtos.find(
        p => p.id === id
    );

    if (!produto) {
        res.status(404).send("Produto não encontrado.");
        return;
    }

    res.render(
        "produtos/show",
        {
            produto
        }
    );
}

export function atualizarProduto(
    req: Request,
    res: Response
) {
    const id = Number(req.params.id);

    const produto = produtos.find(
        p => p.id === id
    );

    if (!produto) {
        res.status(404).send("Produto não encontrado.");
        return;
    }

    produto.nome = req.body.nome;
    produto.preco = Number(req.body.preco);

    res.redirect("/produtos");
}

export function formularioNovoProduto(
    req: Request,
    res: Response
) {
    res.render(
        "produtos/form"
    );
}

export function criarProduto(
    req: Request,
    res: Response
) {
    const { nome, preco } = req.body;

    const novoProduto = {
        id: produtos.length + 1,
        nome,
        preco: Number(preco)
    };

    produtos.push(
        novoProduto
    );

    res.redirect(
        "/produtos"
    );

    
}