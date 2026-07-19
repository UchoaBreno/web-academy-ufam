interface Produto {
    modelo: string;
    fabricante: string;
    valor: number;
}

class TV implements Produto {

    constructor(
        public modelo: string,
        public fabricante: string,
        public valor: number,
        public resolucao: string,
        public tamanho: number
    ) {}
}

class Celular implements Produto {

    constructor(
        public modelo: string,
        public fabricante: string,
        public valor: number,
        public memoria: number
    ) {}
}

class Bicicleta implements Produto {

    constructor(
        public modelo: string,
        public fabricante: string,
        public valor: number,
        public aro: number
    ) {}
}

class Carrinho<T extends Produto> {

    private produtos: T[] = [];

    adicionar(produto: T): void {
        this.produtos.push(produto);
    }

    remover(indice: number): void {
        this.produtos.splice(indice, 1);
    }

    getProdutos(): T[] {
        return this.produtos;
    }

    getQuantidade(): number {
        return this.produtos.length;
    }

    getValorTotal(): number {

        return this.produtos.reduce(
            (total, produto) =>
                total + produto.valor,
            0
        );
    }
}

const carrinho =
    new Carrinho<Produto>();

function adicionarTV(): void {

    const tv = new TV(
        "TV Samsung",
        "Samsung",
        3500,
        "4K",
        55
    );

    carrinho.adicionar(tv);

    atualizarCarrinho();
}

function adicionarCelular(): void {

    const celular = new Celular(
        "iPhone 15",
        "Apple",
        5000,
        256
    );

    carrinho.adicionar(celular);

    atualizarCarrinho();
}

function adicionarBicicleta(): void {

    const bicicleta = new Bicicleta(
        "Caloi Elite",
        "Caloi",
        800,
        29
    );

    carrinho.adicionar(bicicleta);

    atualizarCarrinho();
}

function removerProduto(
    indice: number
): void {

    carrinho.remover(indice);

    atualizarCarrinho();
}

function atualizarCarrinho(): void {

    const listaCarrinho =
        document.getElementById(
            "listaCarrinho"
        ) as HTMLElement;

    const quantidade =
        document.getElementById(
            "quantidadeProdutos"
        ) as HTMLElement;

    const valorTotal =
        document.getElementById(
            "valorTotal"
        ) as HTMLElement;

    listaCarrinho.innerHTML = "";

    carrinho.getProdutos().forEach(
        (produto, indice) => {

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
        }
    );

    quantidade.textContent =
        "Quantidade: " +
        carrinho.getQuantidade();

    valorTotal.textContent =
        "Total: R$ " +
        carrinho
            .getValorTotal()
            .toFixed(2);
}

(window as any).adicionarTV =
    adicionarTV;

(window as any).adicionarCelular =
    adicionarCelular;

(window as any).adicionarBicicleta =
    adicionarBicicleta;

(window as any).removerProduto =
    removerProduto;