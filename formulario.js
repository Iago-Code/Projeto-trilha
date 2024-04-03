function adicionarInput() {
    var form = document.getElementById("meuFormulario");

    // Criando um novo rótulo
    var novoLabel = document.createElement("label");
    novoLabel.textContent = "Novo Campo:";

    // Criando um novo input
    var novoCampo = document.createElement("input");
    novoCampo.type = "text";
    novoCampo.name = "novoCampo"; // Nome do input
    novoCampo.placeholder = "Novo Campo";

    // Adicionando o rótulo e o input ao formulário
    form.appendChild(novoCampo);
}