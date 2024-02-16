/* Declarando objetos */

// Exemplo 1: objeto simples/puro
const livro = {
    // propriedade: valor
    titulo: "Senhor dos Anéis",
    ano: 1954,
    volumes: 3,
    autor: "J.R.R. Tolkien"
};

console.log(livro);
console.log(livro.titulo);

/* O Senhor dos Anéis foi lançado em 1954, criado por J.R.R. Tolkien. */
console.log(`O ${livro.titulo} foi lançado em ${livro.ano}, criado por ${livro.autor}.`)


// Exemplo 2: objeto contendo array e outro objeto
const localizacao = {
    cidade: "São Paulo",
    estado: "SP",
    pais: "Brasil"
}

const cliente = {
    nome: "John Michael Osbourne",
    apelido: "Ozzy",
    idade: 72,
    telefones: ["11-3333-6666", "11-96666-5555"],
    medidas: {
        peso: 75,
        altura: 1.77
    },
    // localizacao
    dadosLocalizacao: localizacao
};

console.log(cliente.nome);
console.log(`Conhecido como: ${cliente.apelido}`);
console.log(`Celular: ${cliente.telefones[1]}`);
console.log(`Peso em kg: ${cliente.medidas.peso}`);
// console.log(`Cidade: ${cliente.localizacao.cidade}`);
console.log(`Cidade: ${cliente.dadosLocalizacao.cidade}`);

// Exemplo 3: array de objetos
const livros = [
    {
        titulo: "O Hobbit",
        autor: "J.R.R. Tolkien",
        ano: 1950
    },
    {
        titulo: "Ghost Rider: a estrada da cura",
        autor: "Neil Peart",
        ano: 2002
    },
    {
        titulo: "Inside Out",
        autor: "Nick Mason",
        ano: 2007
    }
];

console.log(livros[1].titulo);
console.log(livros[1].autor);
console.log(livros[1].ano);

console.log(`Nome do livro: ${livros[2].titulo}`);
console.log(`Ano: ${livros[2].ano}`);
console.log(`Autor: ${livros[2].autor}`);

console.log(livros[0].autor);

console.log("---------------");

/* Exercícios

1) Crie um objeto chamado "pedido" contendo as seguintes informações:

- Código (combinação de letras e números)
- Lista com nome de 3 produtos
- Data do pedido (coloque a data de hoje)
- Valor
- Prazo de entrega (em dias) */
const pedido = {
    codigo: "123xyz",
    produtos: ["TV Led", "Geladeira", "Notebook"],
    data: "15/02/2024",
    valor: 15745.88,
    prazo: 7
};


/* 2) Mostre no console uma frase contendo algumas informações
do pedido. Exemplo:

"Referente ao pedido 123xyz, os produtos foram comprados em 15/02/2024
custando o total de R$ 1500.77. O prazo de entrega é de 7 dias úteis." */
console.log(`Referente ao pedido ${pedido.codigo}, os produtos foram comprados em ${pedido.data} custando o total de R$ ${pedido.valor}. O prazo de entrega é de ${pedido.prazo} dias úteis.`);

console.log(`Produto 1: ${pedido.produtos[0]}`);
console.log(`Produto 2: ${pedido.produtos[1]}`);
console.log(`Produto 3: ${pedido.produtos[2]}`);


