// ----- MINI PROJETO 3 -----//

/*Fizz Buzz*/
//Divisível por 3 -> Fizz
//Divisível por 5 -> Buzz
//Divisível por 3 e 5 -> FizzBuzz
//Não Divisível por 3 ou 5 -> Entrada 
// Não é um número -> 'não é um número'

let Equação = fizzBuzz (15);
console.log(Equação);

function fizzBuzz (entrada) {
if (typeof entrada !== 'number')
return 'não é um número';

if ((entrada % 3 === 0) && (entrada % 5 === 0))
return 'FizzBuzz';

if (entrada % 3 === 0) 
return 'Fizz';

if (entrada % 5 === 0) 
return 'Buzz';

else return (entrada)

}