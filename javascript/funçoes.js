function saudacao() {
    console.log('Olá obrigado pelo cadastro')
}

// como enviar parametros para funções  

function saudacao(nome) {
console.log(`olá ${nome} Seja bem-vindo `);
}

saudacao('iago');

console.clear

// Retorno da função 
function soma (numero1,numero2) {
    return numero1 + numero2
}

const resultado = soma(10, 20);
console.log(resultado);