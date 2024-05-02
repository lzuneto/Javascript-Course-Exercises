// ----- MINI PROJETO 6 -----//
// criar um método para ler propriedades de um objeto e 
//exibir somente as propriedades do tipo string que estão nesse obj

let filme = {
    titulo : 'vingadores',
    ano : 2018,
    diretor : 'robert de niro',
    personagem : 'Thor'
}
exibirPropriedades (filme);
function exibirPropriedades (filme) {
for (let chave in filme) {

if (typeof filme[chave] === "string")
console.log (chave, filme[chave])
}
}
