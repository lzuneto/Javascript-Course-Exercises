/* Exercício self made para exercitar - Escreva uma função que usa 5 números e retorna
todos os números maiores que  3*/

 let Equação = perry(1,2,4,5,6);
 console.log(Equação);

 function perry (x1,x2,x3,x4,x5) {

 let y = [];

 if (x1 >3) y.push(x1);
 if (x2 >3) y.push(x2);
 if (x3 >3) y.push(x3);
 if (x4 >3) y.push(x4);
 if (x5 >3) y.push(x5);

 return y;
 }