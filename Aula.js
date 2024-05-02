// /*Exercício 1 definindo variáveis*/

// // let idade = 5;
// // console.log(idade);
// // let altura = 180;
// // console.log(altura);
// // camelCase

// // let nome = 'letícia';
// // let idade = 20; 
// // let altura = 1.60;
// // console.log(nome)
// // console.log(altura)
// // console.log(idade)

// // const valorIngressoAdulto =40; 
// // console.log(valorIngressoAdulto)

// // /*Tipor primitivos*/
// // let nome = 'Elizeu'; // string literal
// // let idade = 23; // Number literal 
// // let estaAprovado = true; // boolean
// // let sobrenome; //undefined 
// // let corSelecionado = null; //Redefinir um valor 

// /*tipagem dinâmica*/

// // let nome = 'Elizeu'; 
// // let idade = 23;  
// // let estaAprovado = true; 
// // let sobrenome; 
// // let corSelecionado = null;  

// /*Objetos*/
// // let nome = 'Elizeu'; 
// // let idade = 23;  
// // let estaAprovado = true; 
// // let sobrenome; 

// // let pessoa = {
// // nome: 'Elizeu',
// // idade: 25,
// // estaAprovado: true,
// // sobrenome: 'Neto',
// // Idioma: 'portugues',
// // Incrível: true,
// // comidaFavorita: 'paçoca',
// // };

// //  console.log(pessoa);

//  /*Arrays*/

// //  let cachorros= ['albert', 'rex',true, 24];
// //  console.log(cachorros[3]);

//   /*Functions*/
// // verbo + substantivo 
// // let corSite = "azul";
// // function resetaCor(cor, tonalidade){
// //     corSite = cor + " " + tonalidade;
// // };

// // console.log(corSite)
// // resetaCor("verde", "claro");
// // console.log(corSite);

// /*tipos de funções*/ 
// // realiza uma tarefa, mas não retorna nada

// // function dizerNome(){
// //     console.log('Elizeu');
// // }

// // dizerNome();

// // //Realiza uma tarefa e nos dá um retorno
// // function MultiplicarPorDois(valor){
// //     return valor * 2;
// // }

// // //console.log(MultiplicarPorDois(5));

// // let resultado = MultiplicarPorDois(5);
// // console.log(resultado);


// /*Operadores no JavaScript*/ 

// // let salário = 5000;

// // console.log(salário + salário)
// // console.log(salário - salário)
// // console.log(salário * salário)
// // console.log(salário / salário)

// // let idade = 18; 
// // console.log(idade++);
// // console.log(idade);
// // console.log(++idade);

// //operadores de atribuição

// // let valorsalário = 5000
// // valorsalário -= valorsalário
// // console.log(valorsalário);

// //operadores de igualdade
// // //igualdade estrita 
// // console.log (1 === 1);
// // console.log ("1" === 1);
// // console.log(1 == "1");

// //operadores ternário
// // let pontos = 101;
// // let TipoDeCliente = pontos > 100 ? 'premium' : 'comum';
// // console.log(TipoDeCliente);

// //operadores lógicos
// //operador e &&

// // let MaiorDeIdade = true;
// // let possuiCarteiraDeTrabalho = true;
// // let podeAplicar = MaiorDeIdade && possuiCarteiraDeTrabalho;
// // console.log(podeAplicar);

// //operador ou ||
// // let MaiorDeIdade = true;
// // let possuiCarteiraDeTrabalho = true;
// // let podeAplicar = MaiorDeIdade || possuiCarteiraDeTrabalho;
// // console.log(podeAplicar);

// // //operador não !
// // let MaiorDeIdade = false;
// // let possuiCarteiraDeTrabalho = true;
// // let podeAplicar = MaiorDeIdade || possuiCarteiraDeTrabalho;
// // console.log(podeAplicar);

// // let candidatorecusado = !podeAplicar;

// // console.log('candidato recusado',candidatorecusado);

// // Comparações com valores não booleanos
// //falsy
// //     undefined
// //     null
// //     0
// //     false
// //     ''
// //     NaN - not a number 

// //truthy 

// // let corPersonalizada = 'vermelho';
// // let corPadrao = 'azul';
// // let corPerfil = corPersonalizada || corPadrao

// // console.log(corPerfil);

// /*mini projeto 1*/
/* TROCANDO VALORES DE VARIÁVEIS */ 

// // let a = 'vermelho';
// // let b = 'azul';

// // let c = a;
// // a = b;
// // b = c;

// // console.log(a);
// // console.log(b);

// //if...else

// //se a hora estiver entre 6 até 12 : bom dia 
// //se a hora estiver entre 12 até 18 : boa tarde
// //caso contrário : boa noite

// // let hora = 11000; 

// // if (hora > 6 && hora < 12){
// //     console.log("Bom dia")
// // }

// // else if (hora > 12 && hora < 18){
// //     console.log("Boa tarde")
// // }

// // else{ 
// //    console.log("Boa noite") 
// // }

// let permissao;

// permissao = 'gerente'; 
// switch(permissao) {
//   case 'comum':
//   console.log('usuário comum');
//   break;

//   case 'gerente':
//   console.log('usuário gerente');
//   break;
  
//   case 'diretor':
//   console.log('usuário diretor');
//   break;

//   default:
// console.log('usuário não reconecido!');

// }

// console.log("teste");


// let permissao;

// permissao = 'gerente'; 

// switch(permissao) {
//   case 'comum':
//   console.log('usuário comum');
//   break;

//   case 'gerente':
//   console.log('usuário gerente');
//   break;
  
//   case 'diretor':
//   console.log('usuário diretor');
//   break;

//   default:
// console.log('usuário não reconecido!');

// }

// FOR LOOP + MODULES 

// for (let i = 1; i <= 5; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// WHILE LOOP

// let i = 1
// while (i <= 5) {  if (i % 2 !== 0) {console.log(i)} i++;}

//Do While 

// let i = 0;
// do {
//     console.log('digitando');
//     i++;
// } while(i < 10)

//for in    

//  const pessoa = {
//      nome: 'Elizeu',
//      idade: 23
//  };

//  for(let chave in pessoa){
//      console.log(chave, pessoa['nome']);
// }

//  const cores = ['vermelho', 'azul', 'verde'];

//  for (let indice in cores) {
//     console.log(indice,cores[indice]);
//  }

//For-off

// const cores = ['vermelho', 'azul', 'verde'];

// for (let cor of cores){
//     console.log(cor);
// }

// ----- MINI PROJETO 2 -----//

/* Escreva uma função que usa 2 números e retorna
o maior entre eles*/

// let valorMaior = max(10,10);
// console.log(valorMaior);

// function max(numero1,numero2) {
//     if(numero1 > numero2)
//     return numero1;
// else return numero2;
// }

/* Exercício self made para exercitar - Escreva uma função que usa 5 números e retorna
todos os números maiores que  3*/

// let Equação = perry(1,2,4,5,6);
// console.log(Equação);

// function perry (x1,x2,x3,x4,x5) {

// let y = [];

// if (x1 >3) y.push(x1);
// if (x2 >3) y.push(x2);
// if (x3 >3) y.push(x3);
// if (x4 >3) y.push(x4);
// if (x5 >3) y.push(x5);

// return y;
// }

// ----- MINI PROJETO 3 -----//

/*Fizz Buzz*/
//Divisível por 3 -> Fizz
//Divisível por 5 -> Buzz
//Divisível por 3 e 5 -> FizzBuzz
//Não Divisível por 3 ou 5 -> Entrada 
// Não é um número -> 'não é um número'

// let Equação = fizzBuzz (15);
// console.log(Equação);

// function fizzBuzz (entrada) {
// if (typeof entrada !== 'number')
// return 'não é um número';

// if ((entrada % 3 === 0) && (entrada % 5 === 0))
// return 'FizzBuzz';

// if (entrada % 3 === 0) 
// return 'Fizz';

// if (entrada % 5 === 0) 
// return 'Buzz';

// else return (entrada)

// }

// ----- MINI PROJETO 4 -----//

/* MEDIDOR DE VELOCIDADE */ 

//Velocidade Máxima 70 km/hr
//a cada 5 km acima da velocidade permitida -> 1 ponto na carteira
// math.floor
// mais que 12 pontos -> carteira suspensa 

/* primeira resolução*/ 


// let equação = limiteDeVelocidade(130);
// console.log(equação);

// function limiteDeVelocidade (x1) {

//     if (x1 >= 130)
// return 'carteira suspensa'

// if (x1 <= 70)
// return 'dentro da velocidade permitida'

// if ((x1 >= 75) && (x1 < 80))
// return ' 1 ponto'

// if ((x1 >= 80) && (x1 < 85))
// return ' 2 ponto'

// if ((x1 >= 85) && (x1 < 90))
// return ' 3 ponto'

// if ((x1 >= 90) && (x1 < 95))
// return ' 4 ponto'

// if ((x1 >= 95) && (x1 < 100))
// return ' 5 ponto'

// if ((x1 >= 100) && (x1 < 105))
// return ' 6 ponto'

// if ((x1 >= 105) && (x1 < 110))
// return ' 7 ponto'

// if ((x1 >= 110) && (x1 < 115))
// return ' 8 ponto'

// if ((x1 >= 115) && (x1 < 120))
// return ' 9 ponto'

// if ((x1 >= 120) && (x1 < 125))
// return ' 10 ponto'

// if ((x1 >= 125) && (x1 < 130))
// return ' 11 ponto'

// }

// ----- MINI PROJETO 4 -----//

/* MEDIDOR DE VELOCIDADE */ 

//Velocidade Máxima 70 km/hr
//a cada 5 km acima da velocidade permitida -> 1 ponto na carteira
// math.floor
// mais que 12 pontos -> carteira suspensa 

/* Segunda resolução*/ 

// let medidorDeVelocidade = limiteDeVelocidade(121);
// console.log(medidorDeVelocidade);

// function limiteDeVelocidade (velocidade) {

// let velocidadeMáxima = 70
// let kmPonto = 5
//     if (velocidade <= 70)
//     console.log ('dentro da velocidade permitida');

//     else{
// let pontos = Math.floor(((velocidade - velocidadeMáxima)/ kmPonto));
//         if (pontos > 12)
//         console.log('carteira suspensa');        
// else
// console.log (pontos, "Pontos")
// }
// }

// ----- MINI PROJETO 5 -----//

// receber uma quantidade de valores para avaliar 
// função exibe se cada valor é par ou ímpar 

// let parOuImpar = identificador (3);
// console.log(parOuImpar);

// function identificador(valor) {
//     if (valor === 0) {
//         return 'Zero'
//     }

//     if (valor % 2 === 0) {
//         return 'par'
//     }

// else {
//     return 'impar'
// }
// }

/* Segunda resolução*/ 

// exibirTipo(5);
// function exibirTipo(limite) {
// for (let i = 0; i<= limite;i++) {
//     if (i % 2 === 0)
//     console.log(i, 'PAR')
// else 
// console.log (i, 'IMPAR')
// }
// }

// ----- MINI PROJETO 6 -----//
// criar um método para ler propriedades de um objeto e 
//exibir somente as propriedades do tipo string que estão nesse obj

// let filme = {
//     titulo : 'vingadores',
//     ano : 2018,
//     diretor : 'robert de niro',
//     personagem : 'Thor'
// }
// exibirPropriedades (filme);
// function exibirPropriedades (filme) {
// for (let chave in filme) {

// if (typeof filme[chave] === "string")
// console.log (chave, filme[chave])
// }
// }


// ----- MINI PROJETO 7 -----//
// criar função somar que retorna a soma de todos os 
// multiplos de 3 e de 5 dentre o grupo de números que vai de 1 a 10

// armazenar os multiplos de 3
// armazenar os multiplos de 5
// somar os 2 

// let x1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function somar(x1) {
//     let multiplos3 = [];
//     let multiplos5 = [];

//     for (let numero of x1) {
//         if (numero % 3 === 0) {
//             multiplos3.push(numero);
//         }
//         if (numero % 5 === 0) {
//             multiplos5.push(numero);
//         }
//     }
//     return {multiplos3, multiplos5};
// }

// function somarTudo(multiplos3, multiplos5) {
//     let totalMultiplos3 = multiplos3.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
//     let totalMultiplos5 = multiplos5.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
//     return totalMultiplos3 + totalMultiplos5;
// }

// let {multiplos3, multiplos5} = somar(x1);
// let total = somarTudo(multiplos3, multiplos5);
// console.log(total);

// ----- MINI PROJETO 7 -----//
// criar função somar que retorna a soma de todos os 
// multiplos de 3 e de 5 dentre o grupo de números que vai de 1 a 10

// armazenar os multiplos de 3
// armazenar os multiplos de 5
// somar os 2 

// somar(10);
// function somar(limite) {
// let multiplos3 = 0;
// let multiplos5 = 0;
// for (i =0; i <= 10; i++) {
// if (i % 3 ===0)
// multiplos3 += i;
// if (i % 5 ===0)
// multiplos5 += i;
// }
// console.log(multiplos3+multiplos5)
// }


// ----- MINI PROJETO 8 -----//
// nota escolar
// obter a media a partir de um Array
// e o classificar segundo a tabela abaixo 

// 0-59: f 
// 60-69: d
// 70-79: c
// 80-89: b
// 90-100: a 

// const array = [70,120,80]

// function mediaDoAluno(array) {

//     let soma = 0; 
    
//     for (const notas of array) {
//         soma += notas;
//     }
//     return soma/array.length;
// }

// let eq = mediaDoAluno(array)

// if (eq >= 0 && eq <= 59) {
//     console.log (eq,"F");}

// else if (eq >= 60 && eq <= 69) {
//     console.log (eq,"D");
// }

// else if (eq >= 70 && eq <= 79) {
//     console.log (eq,"C");
// }

// else if (eq >= 80 && eq <= 89) {
//     console.log (eq,"B");
// }

// else if (eq >= 90 && eq <= 100) {
//     console.log (eq,"A");
// }
// ----- MINI PROJETO 9 -----//

//criar uma função que exibe a quantidade de *
// que aquela linha possui 

// exibirAsteriscos(3);

// function exibirAsteriscos (linhas) {

// let padrao = '';

// for (let linha =1; linha <= linhas; linha++){
//     padrao += "*";
//     console.log (padrao);
// }
// } 

// ----- MINI PROJETO 10 -----//

// exibir numeros primos 

// exibirNumerosPrimos(15);

// function exibirNumerosPrimos(limite){

// for (let numero = 2; numero <= limite; numero++){
//     let ehPrimo = true;

//     for (let divisor = 2; divisor < numero; divisor++){
// if (numero % divisor ===0) {
//     ehPrimo = false;
//     break;
// }
// }   
// if (ehPrimo) console.log (numero);
// }
// }

// factory function 

// function criarUsuario(nome,sobrenome,email) {

//     return {
//         nome,
//         sobrenome,
//         email,
//         ligar (){
//             console.log("conectando com usuário")
//         }

//     }
// }

// const celular1 = criarUsuario('elizeu','neto','elizeu@outlook.com');
// console.log(celular1);


// constructor function 

// function Usuario(nome,sobrenome,email) {
//     this.nome = nome,
//     this.sobrenome = sobrenome,
//     this.email = email,
//     this.ligar = function() {
//         console.log("conectando com usuário")
//     }
// }

// const usuario1 = new Usuario ('elizeu','neto','supinpa@outlook.com');
// console.log(usuario1)


// natureza dinamica de objetos 


// function Usuario(nome,sobrenome,email) {
//     this.nome = nome,
//     this.sobrenome = sobrenome,
//     this.email = email,
//     this.ligar = function() {
//         console.log("conectando com usuário")
//     }
// }

// const usuario1 = new Usuario ('elizeu','neto','supinpa@outlook.com');
// usuario1.velocidade = 6 /*da para adicionar aqui qq propriedade*/

// console.log(usuario1)

/*CLONANDO OBJETOS*/

// function Usuario(nome,sobrenome,email) {
//     this.nome = nome,
//     this.sobrenome = sobrenome,
//     this.email = email,
//     this.ligar = function() {
//         console.log("conectando com usuário")
//     }
// }

// const usuario1 = new Usuario ('elizeu','neto','supinpa@outlook.com');
// usuario1.velocidade = 6 /*da para adicionar aqui qq propriedade*/

// const usuario2 = Object.assign({
//     expedição: '02/05/2024'
// },usuario1);

// console.log(usuario1)

// console.log(usuario2)

// const usuario3 = {...usuario1};
// usuario3.apelido = 'rafinha bastos';

// console.log(usuario3);

/*MATH*/

// console.log(Math.random())
// console.log(Math.max(1,2,3,4,5,6))
// console.log(Math.min(1,2,3,4,5,6))

/*STRING*/

// const mensagem = 'minha primeira mensagem';

/*DATE*/ 

// ----- MINI PROJETO 11 -----//

//Criar um objeto enderço que contem
// Rua
//Cidade
//CEP
//Função exibir endereço 

// function criarEndereço(rua,cidade,cep) {
// return {
//     rua,
//     cidade,
//     cep
// }
// }

// const endereço1 = criarEndereço('cajazais','parnaiba','23334');

// console.log(endereço1);

// ----- MINI PROJETO 12 -----//

/* Igualdade de objetos*/
/*  a ideia é comparar se as propriedades
e também se o endereço na memória é o mesmo*/

// function criarEndereço(rua,cidade,cep) {
// return {
//     rua,
//     cidade,
//     cep
// }
// }

// const endereço1 = criarEndereço('cajazais','parnaiba','23334');
// const endereço2 = criarEndereço('cajazais','parnaiba','23334');

// function saoIguais(endereço1,endereço2){
// if (endereço1.rua === endereço2.rua &&
//     endereço1.cidade === endereço2.cidade &&
//     endereço1.cep === endereço2.cep
// ){
//     console.log ('são iguais');
// }
// else {
// console.log ('Diferentes');
// }
// }

// saoIguais(endereço1,endereço2);

// ----- MINI PROJETO 13 -----//

/*
 criar um objeto postagem de blog
 deve conter: 
    titulo
    mensagem
    autor
    vizualizações
    comentários
        (autor, mensagem)
    estaAoVivo
*/
// function criarPostagem (
//     titulo,
//     mensagem,
//     autor,
//     vizualizações,
//     comentarios,
//     estaAoVivo
// ){
//     return {
//         titulo,
//         mensagem,
//         autor,
//         vizualizações,
//         comentarios,
//         estaAoVivo,
//     }
// }

// const blog1 = criarPostagem(
//     'perry',
//     'hello, world!',
//     'phineas',
//     3,
//     [{autor: 'pherb', mensagem:'bah'}],  
//     'sim' 
// )

// console.log(blog1);

// ----- MINI PROJETO 14 -----//

/*faixa de preço
criar um array de objeto de faixa de preço (mercadoLivre)
deve comter: faixas,tooltip,mínimo,máximo
*/ 

// function criarFaixa(tooltip,min,max){
//     return{
//         tooltip,
//         min,
//         max,
//     }
// }

// const faixas1 = [
//     criarFaixa ('a',10,20),
//     criarFaixa ('b',10,20),
//     criarFaixa ('c',10,20),
//     criarFaixa ('d',10,20),
//     criarFaixa ('e',10,20),
// ]
// console.log(faixas1);

const idade = prompt ('qual sua idade?')

if (idade >= 18) {
    console.log ('maior de idade')
}
else {
    console.log ('menor de idade')
}

/* como manipular sites com javascript*/

// ----- MINI PROJETO 15 -----//

/* segurança digital*/ 


