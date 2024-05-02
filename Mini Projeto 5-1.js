// ----- MINI PROJETO 5 -----//

// receber uma quantidade de valores para avaliar 
// função exibe se cada valor é par ou ímpar 

let parOuImpar = identificador (3);
console.log(parOuImpar);

function identificador(valor) {
    if (valor === 0) {
        return 'Zero'
    }

    if (valor % 2 === 0) {
        return 'par'
    }

else {
    return 'impar'
}
}
