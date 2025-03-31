document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("equipamentoForm");
    const tabelaEquipamentos = document.getElementById("tabelaEquipamentos");
    const cadastroEquipamento = document.getElementById("cadastroEquipamento");
    const listagemEquipamentos = document.getElementById("listagemEquipamentos");
    const cadastroLink = document.getElementById("cadastroLink");
    const listagemLink = document.getElementById("listagemLink");

    let equipamentos = [];

    // Alternar entre páginas
    cadastroLink.addEventListener("click", () => {
        cadastroEquipamento.style.display = "block";
        listagemEquipamentos.style.display = "none";
    });

    listagemLink.addEventListener("click", () => {
        cadastroEquipamento.style.display = "none";
        listagemEquipamentos.style.display = "block";
        atualizarTabela();
    });

    // Função para adicionar equipamento
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const nome = document.getElementById("nome").value;
        const marca = document.getElementById("marca").value;
        const modelo = document.getElementById("modelo").value;
        const status = document.getElementById("status").value;

        if (nome && marca && modelo) {
            equipamentos.push({ nome, marca, modelo, status });
            form.reset();
            alert("Equipamento cadastrado com sucesso!");
        }
    });

    // Atualizar tabela de equipamentos
    function atualizarTabela() {
        tabelaEquipamentos.innerHTML = "";

        equipamentos.forEach((equip, index) => {
            const row = tabelaEquipamentos.insertRow();

            row.insertCell(0).textContent = equip.nome;
            row.insertCell(1).textContent = equip.marca;
            row.insertCell(2).textContent = equip.modelo;
            row.insertCell(3).textContent = equip.status;
        });
    }
});
