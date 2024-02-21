/* Funções/Métodos mais comuns
para seleção de elementos no DOM 

- getElementById()
Seleciona UM elemento através do atributo ID.

- querySelector()
Seleciona UM elemento através de seletor CSS.

- querySelectorAll()
Seleciona VÁRIOS elementos através de seletores CSS. */

/* Exemplos de seleção no DOM */

// Exemplo 1: getElementById()
const legenda = document.getElementById("legenda");
console.log(legenda);

// Exemplo 2: querySelector()
const titulo = document.querySelector("h1");
console.log(titulo);

const sobreFront = document.querySelector("#sobre");
console.log(sobreFront);

/* Mini-exercícios
1) Faça o acesso/seleção do h2 de Back-End e mostre no console */
const backEnd = document.querySelector(".back-end");
console.log(backEnd);

/* 2) Faça o acesso/seleção apenas do h2 existente dentro da div com a classe "editores". */
const tituloEditores = document.querySelector(".editores h2");
console.log(tituloEditores);

// Exemplo 3: querySelectorAll()
const subtitulos = document.querySelectorAll("h2");
console.log(subtitulos);
console.log(subtitulos[1]);

const varios = document.querySelectorAll("p, a");
console.log(varios);

/* Modificando elementos no DOM 
Conteúdo, mudanças de tag, estilos, criação de elementos */

// Alterando o conteúdo do figcaption
legenda.textContent = "Imagem do DOM";

// Alterando com suporte à HTML
sobreFront.innerHTML = "<i>Front-End</i>";

// Alteração de estilos (CSS inline in JS)
backEnd.style.color = "red";
backEnd.style.textAlign = "center";

// CSS in JS através de classe
titulo.classList.add("destaque");

/* Exemplo carregamento de dados dinâmicos
e geração de tags via JS */

// Base de dados fictícia
const listaDeEditores = [
    "VSCode", "Notepad++", "Sublime Text",
    "Atom", "Dreamweaver"
];

// Selecionado a lista vazia
const lista = document.querySelector(".lista");
console.log(lista);

// Percorrer o array de editores e montar os <li>
for(const programa of listaDeEditores){
    // 1) Criar um elemento <li>
    let item = document.createElement("li");

    // 2) Adicionar o programa ao <li> criado
    item.innerHTML = programa;

    // 3) Adicionar o <li> à lista
    lista.appendChild(item);
}

const linksDeReferencias = document.querySelectorAll(".referencias a");
console.log(linksDeReferencias);

for(const link of linksDeReferencias){
    link.setAttribute("target", "_blank");
}