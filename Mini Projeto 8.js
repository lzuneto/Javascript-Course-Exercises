
// ----- MINI PROJETO 8 -----//
// nota escolar
// obter a media a partir de um Array
// e o classificar segundo a tabela abaixo 

// 0-59: f 
// 60-69: d
// 70-79: c
// 80-89: b
// 90-100: a 

const array = [70,120,80]

function mediaDoAluno(array) {

    let soma = 0; 
    
    for (const notas of array) {
        soma += notas;
    }
    return soma/array.length;
}

let eq = mediaDoAluno(array)

if (eq >= 0 && eq <= 59) {
    console.log (eq,"F");}

else if (eq >= 60 && eq <= 69) {
    console.log (eq,"D");
}

else if (eq >= 70 && eq <= 79) {
    console.log (eq,"C");
}

else if (eq >= 80 && eq <= 89) {
    console.log (eq,"B");
}

else if (eq >= 90 && eq <= 100) {
    console.log (eq,"A");
}


