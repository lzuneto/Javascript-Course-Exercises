// ----- MINI PROJETO 5 -----//

// receber uma quantidade de valores para avaliar 
// função exibe se cada valor é par ou ímpar 

exibirTipo(5);
function exibirTipo(limite) {
for (let i = 0; i<= limite;i++) {
    if (i % 2 === 0)
    console.log(i, 'PAR')
else 
console.log (i, 'IMPAR')
}
}