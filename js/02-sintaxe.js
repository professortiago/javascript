// Comentário de uma linha (atalho CTRL ;)

/* Comentário de bloco
Múltiplas linhas (atalho SHIFT ALT A) */

console.log("Comando de saída!");
console.log("Log e enter");

/* Variáveis e constantes
São espaços na memória RAM para guardar
dados. */

// Variáveis com atribuição de dados
let produto = "TV Led";
var fabricante = "Xing Ling"; 

// Constantes SEMPRE com atribuição de dados
const aluno = "Tiago";

// Saída/Exibição de dados
console.log(produto);
console.log(fabricante);
console.log(aluno);

/* Lista de variáveis, indefinidas */
let servico, prestador, unidade;

// Atribuição de dados
servico = "Manutenção";
prestador = "Ozzy Osbourne";
unidade = "Inglaterra";

console.log(prestador, servico);

/* Dados numéricos */
let ano = 2024; // inteiro
let preco = 1950.42; // decimal/real/flutuante

/* Valores "quebrados" a casa decimal
é feita com ponto e não vírgula. */

/* Operações matemáticas */
let valor1 = 10;
let valor2 = 5;

// Operadores: + - / *

// Operações
let soma = valor1 + valor2;
let subtracao = valor1 - valor2;
let multiplicacao = valor1 * valor2;
let divisao = valor1 / valor2;

// Concatenação (juntar dados estáticos com dados dinâmicos)
console.log('Resultado da soma: '+soma);
console.log("Subtração: "+subtracao);
console.log("Multiplicação: "+multiplicacao);
console.log("Divisão: "+divisao+", exemplo usando operador /");

// Template String/Literal: utiliza-se crase `estático` e também ${dinâmico}
console.log(`Divisão: ${divisao}, exemplo usando operador /`);




