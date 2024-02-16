/* Declarando arrays (VETORES) */
const alunos = ["Dio", "Gillan", "Ozzy", "Martin", "Hughes"];

/* Acessando os dados do array de forma individual */
console.log(alunos[2]); // Ozzy, índice 2
console.log(alunos[4]); // Hughes, índice 4

/* Mini-exercício
- Crie um array com o nome de 4 artistas/bandas que você gosta
- Em seguida mostre uma mensagem no console indicando o nome do
artista/banda que você mais gosta e da que menos gosta. */
const bandas = ["Rush", "Pink Floyd", "Metallica", "Nightwish"];

/* Versão 1: exibindo a frase de uma única vez */
console.log(`Minha banda preferida é o ${bandas[0]}. E gosto um pouquinho menos do ${bandas[1]}`);

/* Versão 2: montando as frases em variáveis/constantes */
const frase1 = `Minha banda preferida é o ${bandas[0]}.`;
const frase2 = `E gosto um pouquinho menos do ${bandas[1]}.`;

console.log(frase1, frase2);

/* O vocalista Ozzy foi uma grande influência para a banda Metallica. */
console.log(`O vocalista ${alunos[2]} foi uma grande influência para a banda ${bandas[2]}.`);

/* Declarando arrays (MATRIZES) */
const linguagens = [
    ["HTML5", "CSS3", "JavaScript"],
    [
        ["PHP 5.5", "PHP 7.1", "PHP 8.2"], 
        "Java", 
        "Python", 
        "ASP.Net"
    ]
];

console.log(linguagens[0][1]); // CSS3
console.log(linguagens[1][3]); // ASP.Net
console.log(linguagens[1][0][2]); // PHP 8.2

