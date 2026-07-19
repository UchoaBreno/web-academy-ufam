"use strict";
class TV {
    constructor(modelo, fabricante, valor, resolucao, tamanho) {
        this.modelo = modelo;
        this.fabricante = fabricante;
        this.valor = valor;
        this.resolucao = resolucao;
        this.tamanho = tamanho;
    }
}
class Celular {
    constructor(modelo, fabricante, valor, memoria) {
        this.modelo = modelo;
        this.fabricante = fabricante;
        this.valor = valor;
        this.memoria = memoria;
    }
}
class Bicicleta {
    constructor(modelo, fabricante, valor, aro) {
        this.modelo = modelo;
        this.fabricante = fabricante;
        this.valor = valor;
        this.aro = aro;
    }
}
class Carrinho {
    constructor() {
        this.produtos = [];
    }
    adicionar(produto) {
        this.produtos.push(produto);
    }
    remover(indice) {
        this.produtos.splice(indice, 1);
    }
    getProdutos() {
        return this.produtos;
    }
    getQuantidade() {
        return this.produtos.length;
    }
    getValorTotal() {
        return this.produtos.reduce((total, produto) => total + produto.valor, 0);
    }
}
const carrinho = new Carrinho();
function adicionarTV() {
    const tv = new TV("TV Samsung", "Samsung", 3500, "4K", 55);
    carrinho.adicionar(tv);
    atualizarCarrinho();
}
function adicionarCelular() {
    const celular = new Celular("iPhone 15", "Apple", 5000, 256);
    carrinho.adicionar(celular);
    atualizarCarrinho();
}
function adicionarBicicleta() {
    const bicicleta = new Bicicleta("Caloi Elite", "Caloi", 800, 29);
    carrinho.adicionar(bicicleta);
    atualizarCarrinho();
}
function removerProduto(indice) {
    carrinho.remover(indice);
    atualizarCarrinho();
}
function atualizarCarrinho() {
    const listaCarrinho = document.getElementById("listaCarrinho");
    const quantidade = document.getElementById("quantidadeProdutos");
    const valorTotal = document.getElementById("valorTotal");
    listaCarrinho.innerHTML = "";
    carrinho.getProdutos().forEach((produto, indice) => {
        listaCarrinho.innerHTML += `
                <div class="item-carrinho">

                    <h4>
                        ${produto.modelo}
                    </h4>

                    <p>
                        ${produto.fabricante}
                    </p>

                    <p>
                        R$ ${produto.valor.toFixed(2)}
                    </p>

                    <button
                        onclick="removerProduto(${indice})"
                    >
                        Remover
                    </button>

                </div>
            `;
    });
    quantidade.textContent =
        "Quantidade: " +
            carrinho.getQuantidade();
    valorTotal.textContent =
        "Total: R$ " +
            carrinho
                .getValorTotal()
                .toFixed(2);
}
window.adicionarTV =
    adicionarTV;
window.adicionarCelular =
    adicionarCelular;
window.adicionarBicicleta =
    adicionarBicicleta;
window.removerProduto =
    removerProduto;
