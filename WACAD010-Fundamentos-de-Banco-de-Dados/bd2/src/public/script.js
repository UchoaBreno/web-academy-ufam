let editando = null;

async function listarClientes() {
    const resposta = await fetch("/clientes");
    const clientes = await resposta.json();

    const tbody = document.getElementById("clientes");
    tbody.innerHTML = "";

    clientes.forEach(cliente => {
        tbody.innerHTML += `
            <tr>
                <td>${cliente.id_cliente}</td>
                <td>${cliente.nome}</td>
                <td>${cliente.cpf}</td>
                <td>${cliente.email}</td>
                <td>
                    <button onclick="editar(${cliente.id_cliente}, '${cliente.nome}', '${cliente.cpf}', '${cliente.celular}', '${cliente.email}', '${cliente.data_nascimento.substring(0,10)}')">
                        Editar
                    </button>

                    <button onclick="remover(${cliente.id_cliente})">
                        Excluir
                    </button>
                </td>
            </tr>
        `;
    });
}

document.getElementById("formCliente").addEventListener("submit", async (e) => {
    e.preventDefault();

    const cliente = {
        nome: document.getElementById("nome").value,
        cpf: document.getElementById("cpf").value,
        celular: document.getElementById("celular").value,
        email: document.getElementById("email").value,
        data_nascimento: document.getElementById("data_nascimento").value
    };

    if (editando === null) {
        await fetch("/clientes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(cliente)
        });
    } else {
        await fetch(`/clientes/${editando}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(cliente)
        });

        editando = null;
    }

    document.getElementById("formCliente").reset();

    listarClientes();
});

function editar(id, nome, cpf, celular, email, data) {
    editando = id;

    document.getElementById("nome").value = nome;
    document.getElementById("cpf").value = cpf;
    document.getElementById("celular").value = celular;
    document.getElementById("email").value = email;
    document.getElementById("data_nascimento").value = data;
}

async function remover(id) {
    await fetch(`/clientes/${id}`, {
        method: "DELETE"
    });

    listarClientes();
}

listarClientes();