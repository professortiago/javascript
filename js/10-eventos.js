/* Exemplos de manipulação de eventos */
const exemplo01 = document.querySelector("#exemplo01");
const mensagem = document.querySelector("#mensagem");
const pagina = document.querySelector("body");

/* Ouvinte de Evento (Event Listener) e função (callback) que será executada o momento em que o evento correr */
exemplo01.addEventListener("click", function(){
    mensagem.textContent = "Beleza! Evento acionado, função executada!";
    mensagem.classList.add("destaque");
    pagina.style.fontFamily = "Arial";
});

// Exemplo 02: modo noturno
const botaoNoturno = document.querySelector("#noturno");
const divContainer = document.querySelector(".container");

botaoNoturno.addEventListener("click", function(){
    pagina.classList.toggle("noturno");
    divContainer.classList.toggle("noturno");

    pagina.style.transition = "500ms";
    divContainer.style.transition = "500ms";

    if(pagina.className == "noturno"){
        botaoNoturno.textContent = "Desativar";
    } else {
        botaoNoturno.textContent = "Ativar";
    }
});

/* Exemplo 3: simulação de cadastro */

const formulario = document.querySelector("#cadastro");
const campoNome = formulario.querySelector("#nome");
const campoNota1 = formulario.querySelector("#nota1");
const campoNota2 = formulario.querySelector("#nota2");
const divResultados = document.querySelector("#resultados");

formulario.addEventListener("submit", function(event){
    /* Anulando o comportamento padrão do navegador
    de redirecionamento do formulário */
    event.preventDefault();

    let nome = campoNome.value;
    let nota1 = Number(campoNota1.value);
    let nota2 = Number(campoNota2.value);
    let media = (nota1 + nota2) / 2;

    /* Operador ternário ?:
    Útil para if/else versão curta/abreviada (shorthand if/else) */
    let situacao = media >= 7 ? "aprovado" : "reprovado";

    let paragrafo = document.createElement("p");
    paragrafo.innerHTML = `${nome} - ${media} - ${situacao}`;
    paragrafo.classList.add(situacao);
    divResultados.appendChild(paragrafo);

    formulario.reset(); // Reset dos campos
    campoNome.focus(); // Devolvendo o foco para o campo
})