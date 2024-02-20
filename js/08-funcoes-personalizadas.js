function soma(valor1, valor2){
    return valor1 + valor2;
}

console.log( soma(10, 5) );
console.log( soma(25, 2) );
console.log( soma(110, 1000) );

const cliente1 = {
    nome: "Geddy Lee",
    idade: 55
};

const cliente2 = {
    nome: "Neil Peart",
    idade: 70
};

const cliente3 = {
    nome: "Alex Lifeson",
    idade: 30
};

function verificaIdade(idade){
    if(idade >= 60){
        return "prioritário";
    } else {
        return "normal";
    }
}

console.log(`Cliente 1: ${cliente1.nome}`);
console.log(`Idade: ${cliente1.idade} anos`);
console.log(`Atendimento: ${verificaIdade(cliente1.idade)}`);

console.log(`Cliente 2: ${cliente2.nome}`);
console.log(`Idade: ${cliente2.idade} anos`);
console.log(`Atendimento: ${verificaIdade(cliente2.idade)}`);

console.log(`Cliente 3: ${cliente3.nome}`);
console.log(`Idade: ${cliente3.idade} anos`);
console.log(`Atendimento: ${verificaIdade(cliente3.idade)}`);

