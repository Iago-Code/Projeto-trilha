function adicionarInput() {
    var form = document.getElementById("meuFormulario");

    // Criando um novo input
    var novoCampo = document.createElement("input");
    novoCampo.type = "text";
    novoCampo.name = "novoCampo"; // Nome do input
    novoCampo.placeholder = "Novo Campo";

    // Adicionando o input ao formulário
    form.appendChild(novoCampo);
}