// ----- MINI PROJETO 7 -----//
// criar função somar que retorna a soma de todos os 
// multiplos de 3 e de 5 dentre o grupo de números que vai de 1 a 10

// armazenar os multiplos de 3
// armazenar os multiplos de 5
// somar os 2 

somar(10);
function somar(limite) {
let multiplos3 = 0;
let multiplos5 = 0;
for (i =0; i <= 10; i++) {
if (i % 3 ===0)
multiplos3 += i;
if (i % 5 ===0)
multiplos5 += i;
}
console.log(multiplos3+multiplos5)
}