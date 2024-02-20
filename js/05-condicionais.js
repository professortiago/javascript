/* Estruturas de Controle Condicional
Comandos condicionais:
-if         (se)
-else       (senão)
-else if    (senão se)
-switch/case/default (escolha/caso) 

Operadores relacionais (usados para comparação)
>   maior que
<   menor que
>=  maior ou igual que
<=  menor ou igual que
==  igualdade (comparação de valor)
=== igualdade estrita (comparação de valor e de tipo de dados)
!=  diferença (de valor)
!== diferença estrita (de valor e de tipo de dados)

Operadores lógicos
&&  (E)
||  (OU)
!   (NEGAÇÃO) */


// Exemplo 1: condicional simples (if)
let numero = 1;

if( numero >= 5 ){
    console.log(`O valor de numero (${numero}) é maior/igual a 5.`);
}

// Exemplo 2: condicional composta (if/else)
const aluno = "Alex Lifeson";
const mediaMinima = 7;

let nota1 = 10;
let nota2 = 8;

let media = (nota1 + nota2) / 2;

console.log(`Aluno(a): ${aluno}`);
console.log(`Notas: ${nota1} e ${nota2}`);
console.log(`Média: ${media}`);

let resultado; // undefined

if( media >= mediaMinima ){
    resultado = "aprovado(a)!";
} else {
    resultado = "reprovado(a)!";
}

console.log(`Está ${resultado}`);

// Exemplo 3: condicional encadeada/sucessiva
/* Verificação do desempenho do aluno 
- Média menor que 5? PÉSSIMO
- Média menor que 7? RUIM
- Média menor que 9? BOM
- Nenhuma das condições anteriores? ÓTIMO */
let desempenho;
if(media < 5){
    desempenho = "PÉSSIMO";
} else if(media < 7){
    desempenho = "RUIM";
} else if(media < 9){
    desempenho = "BOM";
} else {
    desempenho = "ÓTIMO";
}

console.log(`O desempenho foi: ${desempenho}`);

// Outros exemplos

/* Determinar através da idade se
uma pessoa é: adulta, idosa ou menor de idade. */
let idade = 5;
let mensagem;

// && (E/AND)
if(idade >= 18 && idade < 60){
    mensagem = "adulto";
} else if( idade >= 60 ){
    mensagem = "idoso";
} else {
    mensagem = "menor de idade";
}
console.log(`Esta pessoa é: ${mensagem}`);

// || (OU/OR)
let diaDaSemana = "segunda";

if(diaDaSemana == "sábado" || diaDaSemana == "domingo"){
    console.log("Estamos no final de semana! :)");
} else {
    console.log("Dia útil... bora trabalhar! :(");
}

// ! (NÃO/NEGAÇÃO/NOT)
let blackFriday = true; // valor boolean

// Se NÃO ESTAMOS na blackFriday
if(!blackFriday){
    console.log("Preços normais.... (sem black friday)");
} else {
    console.log("Preços com desconto.... (na black friday)");
}

// Operadores == e ===
let a = 10;     // valor numérico
let b = "10";   // valor textual/string

console.log(a == b); // true/verdadeiro
console.log(a === b); // false/falso

/* Comando switch/case 
Opções:
1   ->  informações
2   ->  reclamação
3   ->  elogio
n   ->  falar com atendente */
let opcao = 6;
let orientacao;

switch(opcao){
    case 1: mensagem = "Informações..."; break;
    case 2: mensagem = "Reclamação"; break;
    case 3: mensagem = "Elogio"; break;
    default: mensagem = "Falar com atendente..."; break;
}

console.log(mensagem);


