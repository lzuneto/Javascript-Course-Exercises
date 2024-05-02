// ----- MINI PROJETO 4 -----//

/* MEDIDOR DE VELOCIDADE */ 

//Velocidade Máxima 70 km/hr
//a cada 5 km acima da velocidade permitida -> 1 ponto na carteira
// math.floor
// mais que 12 pontos -> carteira suspensa 

/* Segunda resolução - do curso*/ 

let medidorDeVelocidade = limiteDeVelocidade(121);
console.log(medidorDeVelocidade);

function limiteDeVelocidade (velocidade) {

let velocidadeMáxima = 70
let kmPonto = 5
    if (velocidade <= 70)
    console.log ('dentro da velocidade permitida');

    else{
let pontos = Math.floor(((velocidade - velocidadeMáxima)/ kmPonto));
        if (pontos > 12)
        console.log('carteira suspensa');        
else
console.log (pontos, "Pontos")
    }
}

