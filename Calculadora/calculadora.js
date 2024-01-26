let tela = document.getElementById('paragrafo')

function exibir(numero) {
    tela.innerHTML = tela.innerHTML + numero
}

function limpar() {
    tela.innerHTML = ''
}

function calcular() {
    let tela = document.getElementById('paragrafo').innerHTML

    if(tela) {
        document.getElementById('paragrafo').innerHTML = eval(tela)
    }
}