 /*
const input = require('readline-sync')

const numero_sorteado = 5;

const numero = Number(input.question('Qual numero você escolheu'));

while (numero !== numero_sorteado) {
    console.log('Você errou o número.Tente Novamente')

    numero = Number(input.question('Qual numero voce escolhe'))
}

console.log('voce acertou'); */
/*
const input = requeire('redline-sysnc');
const nota1 = Number(input.question('Informa a nota 1: '))
 const nota2 = Number(input.question('Informa a nota2: '))
const nota3 = Number(input.question('Informa a nota3: '))

let media = (nota1 + nota2 + nota3) / 3
 */
/*
let acomulador = 0;

acomulador = acomulador += 10

acomulador = acomulador + 2 

console.log(acomulador);
*/

// Estrutura for 
//for (let interacao = 0; interacao < 10; interacao++) {
    //console.log('repeticao');//


//Resolvendo o Problema 
let nota;
let soma= 0;

for (let i = 1; i < 3; i++) {
nota = Number(input.question(`Informe a Nota ${i} do Aluno: `))
soma = soma + nota
}
