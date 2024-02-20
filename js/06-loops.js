/* Loops
Tradicionais: while, do/while e for
Específicos: for/of (ARRAYs) e for/in (OBJETOS) */

/* Exemplo 1: loop while (enquanto) */
// let i = 1;
// while( i <= 10 ){
//     console.log(`Contador vale: ${i}`);
//     i++; // incremento
// }

/* Exemplo 2: do/while
Variante do while, em que podemos garantir
que o loop fará sempre pelo menos uma execução. */
// let i = 1;
// do {
//     console.log(`Contador vale: ${i}`);
//     i++;
// } while(i <= 10);

/* Exemplo 3: for */
// for( i = 1; i <= 10; i++ ){
//     console.log(`Valor de ${i}`);
// }

/* Loops específicos (for/of - ARRAYS e for/in - OBJETOS) */
const bandas = ["Rush", "Pink Floyd", "Dream Theater", "Nightwish", "Slayer", "Cavalo Vapor", "Sinistra"];

for(const banda of bandas){
    console.log(banda);
}

// Versão usando loop for tradicional
// let quantidade = bandas.length;
// for(i = 0; i < quantidade; i++){
//     console.log(bandas[i]);
// }

console.log("----");

const pessoa = {
    nome: "Jon Oliva",
    idade: 66,
    cidade: "São Paulo"
};

for(const prop in pessoa){
    console.log(pessoa[prop]);
}