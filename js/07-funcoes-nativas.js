/* Texto */
let texto = "JavasCRipt";
console.log(texto.toUpperCase());
console.log(texto.toLowerCase());

/* Númericas */
let numero = 10.5678;
console.log(numero.toFixed(3));

console.log(Math.round(5.7));

console.log(Math.max(5, 10, 12, 3));
console.log(Math.min(5, 10, 12, 3));

/* Arrays */
const filiaisSP = ["São Paulo", "Mogi das Cruzes", "Ubatuba"];
const filiaisRJ = ["Rio de Janeiro", "Petrópolis"];
const filiaisSudeste = filiaisSP.concat(filiaisRJ);
console.log(filiaisSudeste);

filiaisRJ.push("Belford Roxo");
console.log(filiaisRJ);

/* Objetos */
const pessoa = {
    nome: "Neil Peart",
    profissao: "Músico/Baterista",
    banda: "Rush"
};

const valores = Object.values(pessoa);
console.log(valores);

/* Monetários */
let valor = 1276.88;
let valorFormatado = new Intl.NumberFormat('pt-BR', {
    style: "currency",
    currency: "BRL"
}).format(valor);

console.log(valorFormatado);

/* Data */
let dataAtual = new Date();
console.log(dataAtual);

let dataAtualFormatada = new Intl.DateTimeFormat("pt-BR").format(dataAtual);
console.log(dataAtualFormatada);

