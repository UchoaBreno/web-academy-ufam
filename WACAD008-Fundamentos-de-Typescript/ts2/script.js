"use strict";
const nomeInput = document.getElementById("nome");
const idadeInput = document.getElementById("idade");
const alturaInput = document.getElementById("altura");
const pesoInput = document.getElementById("peso");
const listaAlunos = document.getElementById("listaAlunos");
const qtdAlunos = document.getElementById("qtdAlunos");
const mediaIdades = document.getElementById("mediaIdades");
const mediaAlturas = document.getElementById("mediaAlturas");
const mediaPesos = document.getElementById("mediaPesos");
class Aluno {
    id;
    nome;
    idade;
    altura;
    peso;
    constructor(id, nome, idade, altura, peso) {
        this.id = id;
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
    }
}
class Turma {
    id;
    nome;
    alunos = [];
    constructor(id, nome) {
        this.id = id;
        this.nome = nome;
    }
    adicionarAluno(aluno) {
        this.alunos.push(aluno);
    }
    removerAluno(id) {
        this.alunos = this.alunos.filter(aluno => aluno.id !== id);
    }
    getNumAlunos() {
        return this.alunos.length;
    }
    getMediaIdades() {
        const soma = this.alunos.reduce((total, aluno) => total + aluno.idade, 0);
        return this.alunos.length > 0
            ? soma / this.alunos.length
            : 0;
    }
    getMediaAlturas() {
        const soma = this.alunos.reduce((total, aluno) => total + aluno.altura, 0);
        return this.alunos.length > 0
            ? soma / this.alunos.length
            : 0;
    }
    getMediaPesos() {
        const soma = this.alunos.reduce((total, aluno) => total + aluno.peso, 0);
        return this.alunos.length > 0
            ? soma / this.alunos.length
            : 0;
    }
}
const turma = new Turma(1, "Educação Física");
let alunoEditando = null;
function adicionarAluno() {
    const nome = nomeInput.value;
    const idade = Number(idadeInput.value);
    const altura = Number(alturaInput.value);
    const peso = Number(pesoInput.value);
    if (nome === "" ||
        idade <= 0 ||
        altura <= 0 ||
        peso <= 0) {
        alert("Preencha todos os campos.");
        return;
    }
    if (alunoEditando !== null) {
        const aluno = turma.alunos.find(aluno => aluno.id === alunoEditando);
        if (aluno) {
            aluno.nome = nome;
            aluno.idade = idade;
            aluno.altura = altura;
            aluno.peso = peso;
        }
        alunoEditando = null;
    }
    else {
        const aluno = new Aluno(Date.now(), nome, idade, altura, peso);
        turma.adicionarAluno(aluno);
    }
    atualizarTabela();
    atualizarEstatisticas();
    nomeInput.value = "";
    idadeInput.value = "";
    alturaInput.value = "";
    pesoInput.value = "";
}
let alunoParaExcluir = null;
function abrirModal(id) {
    alunoParaExcluir = id;
    const modal = document.getElementById("modalExcluir");
    modal.style.display = "flex";
}
function fecharModal() {
    const modal = document.getElementById("modalExcluir");
    modal.style.display = "none";
    alunoParaExcluir = null;
}
function confirmarExclusao() {
    if (alunoParaExcluir === null) {
        return;
    }
    turma.removerAluno(alunoParaExcluir);
    atualizarTabela();
    atualizarEstatisticas();
    fecharModal();
}
function editarAluno(id) {
    const aluno = turma.alunos.find(aluno => aluno.id === id);
    if (!aluno)
        return;
    nomeInput.value = aluno.nome;
    idadeInput.value = aluno.idade.toString();
    alturaInput.value = aluno.altura.toString();
    pesoInput.value = aluno.peso.toString();
    alunoEditando = id;
}
function excluirAluno(id) {
    turma.removerAluno(id);
    atualizarTabela();
    atualizarEstatisticas();
}
function atualizarTabela() {
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
const btnConfirmarExcluir = document.getElementById("btnConfirmarExcluir");
btnConfirmarExcluir.onclick =
    confirmarExclusao;
function salvarAluno(id) {
    const aluno = turma.alunos.find(aluno => aluno.id === id);
    if (!aluno) {
        return;
    }
    const nome = document.getElementById(`nome-${id}`).value;
    const idade = Number(document.getElementById(`idade-${id}`).value);
    const altura = Number(document.getElementById(`altura-${id}`).value);
    const peso = Number(document.getElementById(`peso-${id}`).value);
    aluno.nome = nome;
    aluno.idade = idade;
    aluno.altura = altura;
    aluno.peso = peso;
    atualizarEstatisticas();
    alert("Aluno atualizado!");
}
function atualizarEstatisticas() {
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
async function gerarAlunos() {
    try {
        const resposta = await fetch("https://randomuser.me/api/?results=5");
        const dados = await resposta.json();
        dados.results.forEach((usuario, index) => {
            const nome = usuario.name.first +
                " " +
                usuario.name.last;
            const idade = usuario.dob.age;
            const altura = Number((1.50 + Math.random() * 0.50)
                .toFixed(2));
            const peso = Number((50 + Math.random() * 50)
                .toFixed(1));
            const aluno = new Aluno(Date.now() + index, nome, idade, altura, peso);
            turma.adicionarAluno(aluno);
        });
        atualizarTabela();
        atualizarEstatisticas();
    }
    catch {
        alert("Erro ao buscar alunos da API.");
    }
}
atualizarEstatisticas();
window.adicionarAluno = adicionarAluno;
window.editarAluno = editarAluno;
window.excluirAluno = excluirAluno;
window.gerarAlunos = gerarAlunos;
window.salvarAluno = salvarAluno;
window.abrirModal = abrirModal;
window.fecharModal = fecharModal;
window.confirmarExclusao = confirmarExclusao;
