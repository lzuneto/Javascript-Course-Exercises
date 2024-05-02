// ----- MINI PROJETO 7 -----//
// criar função somar que retorna a soma de todos os 
// multiplos de 3 e de 5 dentre o grupo de números que vai de 1 a 10

// armazenar os multiplos de 3
// armazenar os multiplos de 5
// somar os 2 

let x1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function somar(x1) {
    let multiplos3 = [];
    let multiplos5 = [];

    for (let numero of x1) {
        if (numero % 3 === 0) {
            multiplos3.push(numero);
        }
        if (numero % 5 === 0) {
            multiplos5.push(numero);
        }
    }
    return {multiplos3, multiplos5};
}

function somarTudo(multiplos3, multiplos5) {
    let totalMultiplos3 = multiplos3.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
    let totalMultiplos5 = multiplos5.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
    return totalMultiplos3 + totalMultiplos5;
}

let {multiplos3, multiplos5} = somar(x1);
let total = somarTudo(multiplos3, multiplos5);
console.log(total);

