function calcular() {
    let media = document.getElementById("media").value;
    media = (36 - (media * 3)) / 3
    document.getElementById("resultado").innerText = 
    'Você terá que tirar ' + media + ' Pontos no 2 Trimestre';
}

