function verificarEntrada() {

    NomeConvidado = document.getElementById('nome').value;
    ConvidadosElizeu = ['Dé','Débora','Mano','Simone']

    if (ConvidadosElizeu.includes(NomeConvidado)){
document.getElementById('PermissaoDeEntrada').innerText = 'pode entrar meu consagrado';
    }
else {
    document.getElementById('PermissaoDeEntrada').innerText = 'Vaza vagabundo'
}
}


