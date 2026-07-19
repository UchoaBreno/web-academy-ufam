"use strict";
let lembretes = [];
const titulo = document.getElementById("titulo");
const dataLimite = document.getElementById("dataLimite");
const descricao = document.getElementById("descricao");
const btnAdicionar = document.getElementById("btnAdicionar");
const lista = document.getElementById("listaLembretes");
const modalEditar = document.getElementById("modalEditar");
const novoTitulo = document.getElementById("novoTitulo");
const novaDataLimite = document.getElementById("novaDataLimite");
const novaDescricao = document.getElementById("novaDescricao");
const btnSalvar = document.getElementById("btnSalvar");
const btnCancelar = document.getElementById("btnCancelar");
const modalExcluir = document.getElementById("modalExcluir");
const btnConfirmarExcluir = document.getElementById("btnConfirmarExcluir");
const btnCancelarExcluir = document.getElementById("btnCancelarExcluir");
let indiceEdicao = -1;
let indiceExcluir = -1;
function mostrarLembretes() {
    lista.innerHTML = "";
    for (let i = 0; i < lembretes.length; i++) {
        const item = document.createElement("li");
        item.innerHTML =
            "<strong>" + lembretes[i][0] + "</strong><br>" +
                "Criado em: " +
                lembretes[i][1].toLocaleString("pt-BR") +
                "<br>" +
                "Data limite: " +
                lembretes[i][2] +
                "<br>" +
                "Descrição: " +
                lembretes[i][3] +
                "<br><br>";
        const btnEditar = document.createElement("button");
        btnEditar.innerText = "Editar";
        btnEditar.onclick = function () {
            indiceEdicao = i;
            novoTitulo.value = lembretes[i][0];
            novaDataLimite.value = lembretes[i][2];
            novaDescricao.value = lembretes[i][3];
            modalEditar.style.display = "flex";
        };
        const btnExcluir = document.createElement("button");
        btnExcluir.innerText = "Excluir";
        btnExcluir.onclick = function () {
            indiceExcluir = i;
            modalExcluir.style.display = "flex";
        };
        item.appendChild(btnEditar);
        item.appendChild(btnExcluir);
        lista.appendChild(item);
    }
}
btnSalvar.onclick = function () {
    if (indiceEdicao >= 0) {
        lembretes[indiceEdicao][0] = novoTitulo.value;
        lembretes[indiceEdicao][2] = novaDataLimite.value;
        lembretes[indiceEdicao][3] = novaDescricao.value;
        mostrarLembretes();
        modalEditar.style.display = "none";
    }
};
btnCancelar.onclick = function () {
    modalEditar.style.display = "none";
};
btnAdicionar.onclick = function () {
    if (titulo.value === "") {
        return;
    }
    const novoLembrete = [
        titulo.value,
        new Date(),
        dataLimite.value,
        descricao.value
    ];
    lembretes.push(novoLembrete);
    mostrarLembretes();
    titulo.value = "";
    dataLimite.value = "";
    descricao.value = "";
};
btnConfirmarExcluir.onclick = function () {
    if (indiceExcluir >= 0) {
        lembretes.splice(indiceExcluir, 1);
        mostrarLembretes();
        modalExcluir.style.display = "none";
    }
};
btnCancelarExcluir.onclick = function () {
    modalExcluir.style.display = "none";
};
