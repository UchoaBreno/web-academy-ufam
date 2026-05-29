const nomeInput = document.getElementById("nome") as HTMLInputElement;
const idadeInput = document.getElementById("idade") as HTMLInputElement;
const alturaInput = document.getElementById("altura") as HTMLInputElement;
const pesoInput = document.getElementById("peso") as HTMLInputElement;

const listaAlunos = document.getElementById("listaAlunos") as HTMLElement;

const qtdAlunos = document.getElementById("qtdAlunos") as HTMLElement;
const mediaIdades = document.getElementById("mediaIdades") as HTMLElement;
const mediaAlturas = document.getElementById("mediaAlturas") as HTMLElement;
const mediaPesos = document.getElementById("mediaPesos") as HTMLElement;

class Aluno {
    constructor(
        public id: number,
        public nome: string,
        public idade: number,
        public altura: number,
        public peso: number
    ) {}
}

class Turma {
    alunos: Aluno[] = [];

    constructor(
        public id: number,
        public nome: string
    ) {}

    adicionarAluno(aluno: Aluno): void {
        this.alunos.push(aluno);
    }

    removerAluno(id: number): void {
        this.alunos = this.alunos.filter(
            aluno => aluno.id !== id
        );
    }

    getNumAlunos(): number {
        return this.alunos.length;
    }

    getMediaIdades(): number {
        const soma = this.alunos.reduce(
            (total, aluno) => total + aluno.idade,
            0
        );

        return this.alunos.length > 0
            ? soma / this.alunos.length
            : 0;
    }

    getMediaAlturas(): number {
        const soma = this.alunos.reduce(
            (total, aluno) => total + aluno.altura,
            0
        );

        return this.alunos.length > 0
            ? soma / this.alunos.length
            : 0;
    }

    getMediaPesos(): number {
        const soma = this.alunos.reduce(
            (total, aluno) => total + aluno.peso,
            0
        );

        return this.alunos.length > 0
            ? soma / this.alunos.length
            : 0;
    }
}

const turma = new Turma(
    1,
    "Educação Física"
);

let alunoEditando: number | null = null;

function adicionarAluno(): void {

    const nome = nomeInput.value;

    const idade = Number(idadeInput.value);

    const altura = Number(alturaInput.value);

    const peso = Number(pesoInput.value);

    if (
        nome === "" ||
        idade <= 0 ||
        altura <= 0 ||
        peso <= 0
    ) {
        alert("Preencha todos os campos.");
        return;
    }

    if (alunoEditando !== null) {

        const aluno = turma.alunos.find(
            aluno => aluno.id === alunoEditando
        );

        if (aluno) {
            aluno.nome = nome;
            aluno.idade = idade;
            aluno.altura = altura;
            aluno.peso = peso;
        }

        alunoEditando = null;

    } else {

        const aluno = new Aluno(
            Date.now(),
            nome,
            idade,
            altura,
            peso
        );

        turma.adicionarAluno(aluno);
    }

    atualizarTabela();
    atualizarEstatisticas();

    nomeInput.value = "";
    idadeInput.value = "";
    alturaInput.value = "";
    pesoInput.value = "";
}

let alunoParaExcluir: number | null = null;

function abrirModal(id: number): void {

    alunoParaExcluir = id;

    const modal =
        document.getElementById(
            "modalExcluir"
        ) as HTMLElement;

    modal.style.display = "flex";
}

function fecharModal(): void {

    const modal =
        document.getElementById(
            "modalExcluir"
        ) as HTMLElement;

    modal.style.display = "none";

    alunoParaExcluir = null;
}

function confirmarExclusao(): void {

    if (alunoParaExcluir === null) {
        return;
    }

    turma.removerAluno(
        alunoParaExcluir
    );

    atualizarTabela();
    atualizarEstatisticas();

    fecharModal();
}

function editarAluno(id: number): void {

    const aluno = turma.alunos.find(
        aluno => aluno.id === id
    );

    if (!aluno) return;

    nomeInput.value = aluno.nome;
    idadeInput.value = aluno.idade.toString();
    alturaInput.value = aluno.altura.toString();
    pesoInput.value = aluno.peso.toString();

    alunoEditando = id;
}

function excluirAluno(id: number): void {

    turma.removerAluno(id);

    atualizarTabela();
    atualizarEstatisticas();
}

function atualizarTabela(): void {

    listaAlunos.innerHTML = "";

    turma.alunos.forEach(aluno => {

        listaAlunos.innerHTML += `
            <tr>
                <td>
                    <input
                        id="nome-${aluno.id}"
                        value="${aluno.nome}"
                    >
                </td>

                <td>
                    <input
                        type="number"
                        id="idade-${aluno.id}"
                        value="${aluno.idade}"
                    >
                </td>

                <td>
                    <input
                        type="number"
                        step="0.01"
                        id="altura-${aluno.id}"
                        value="${aluno.altura}"
                    >
                </td>

                <td>
                    <input
                        type="number"
                        step="0.1"
                        id="peso-${aluno.id}"
                        value="${aluno.peso}"
                    >
                </td>

                <td>
                    <button onclick="salvarAluno(${aluno.id})">
                        Salvar
                    </button>

                    <button onclick="abrirModal(${aluno.id})">
                        Excluir
                    </button>
                </td>
            </tr>
        `;
    });
}

const btnConfirmarExcluir =
    document.getElementById(
        "btnConfirmarExcluir"
    ) as HTMLButtonElement;

btnConfirmarExcluir.onclick =
    confirmarExclusao;

function salvarAluno(id: number): void {

    const aluno = turma.alunos.find(
        aluno => aluno.id === id
    );

    if (!aluno) {
        return;
    }

    const nome = (
        document.getElementById(
            `nome-${id}`
        ) as HTMLInputElement
    ).value;

    const idade = Number(
        (
            document.getElementById(
                `idade-${id}`
            ) as HTMLInputElement
        ).value
    );

    const altura = Number(
        (
            document.getElementById(
                `altura-${id}`
            ) as HTMLInputElement
        ).value
    );

    const peso = Number(
        (
            document.getElementById(
                `peso-${id}`
            ) as HTMLInputElement
        ).value
    );

    aluno.nome = nome;
    aluno.idade = idade;
    aluno.altura = altura;
    aluno.peso = peso;

    atualizarEstatisticas();

    alert("Aluno atualizado!");
}

function atualizarEstatisticas(): void {

    qtdAlunos.textContent =
        "Quantidade de alunos: " +
        turma.getNumAlunos();

    mediaIdades.textContent =
        "Média de idades: " +
        turma.getMediaIdades().toFixed(2);

    mediaAlturas.textContent =
        "Média de alturas: " +
        turma.getMediaAlturas().toFixed(2);

    mediaPesos.textContent =
        "Média de pesos: " +
        turma.getMediaPesos().toFixed(2);
}

async function gerarAlunos(): Promise<void> {

    try {

        const resposta = await fetch(
            "https://randomuser.me/api/?results=5"
        );

        const dados = await resposta.json();

        dados.results.forEach(
            (usuario: any, index: number) => {

                const nome =
                    usuario.name.first +
                    " " +
                    usuario.name.last;

                const idade = usuario.dob.age;

                const altura = Number(
                    (1.50 + Math.random() * 0.50)
                    .toFixed(2)
                );

                const peso = Number(
                    (50 + Math.random() * 50)
                    .toFixed(1)
                );

                const aluno = new Aluno(
                    Date.now() + index,
                    nome,
                    idade,
                    altura,
                    peso
                );

                turma.adicionarAluno(aluno);
            }
        );

        atualizarTabela();
        atualizarEstatisticas();

    } catch {

        alert(
            "Erro ao buscar alunos da API."
        );
    }
}

atualizarEstatisticas();

(window as any).adicionarAluno = adicionarAluno;
(window as any).editarAluno = editarAluno;
(window as any).excluirAluno = excluirAluno;
(window as any).gerarAlunos = gerarAlunos;
(window as any).salvarAluno = salvarAluno;
(window as any).abrirModal = abrirModal;
(window as any).fecharModal = fecharModal;
(window as any).confirmarExclusao = confirmarExclusao;