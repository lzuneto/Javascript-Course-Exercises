// ----- MINI PROJETO 4 -----//

/* MEDIDOR DE VELOCIDADE */ 

//Velocidade Máxima 70 km/hr
//a cada 5 km acima da velocidade permitida -> 1 ponto na carteira
// math.floor
// mais que 12 pontos -> carteira suspensa 

/* primeira resolução*/ 


let equação = limiteDeVelocidade(130);
console.log(equação);

function limiteDeVelocidade (x1) {

    if (x1 >= 130)
return 'carteira suspensa'

if (x1 <= 70)
return 'dentro da velocidade permitida'

if ((x1 >= 75) && (x1 < 80))
return ' 1 ponto'

if ((x1 >= 80) && (x1 < 85))
return ' 2 ponto'

if ((x1 >= 85) && (x1 < 90))
return ' 3 ponto'

if ((x1 >= 90) && (x1 < 95))
return ' 4 ponto'

if ((x1 >= 95) && (x1 < 100))
return ' 5 ponto'

if ((x1 >= 100) && (x1 < 105))
return ' 6 ponto'

if ((x1 >= 105) && (x1 < 110))
return ' 7 ponto'

if ((x1 >= 110) && (x1 < 115))
return ' 8 ponto'

if ((x1 >= 115) && (x1 < 120))
return ' 9 ponto'

if ((x1 >= 120) && (x1 < 125))
return ' 10 ponto'

if ((x1 >= 125) && (x1 < 130))
return ' 11 ponto'

}