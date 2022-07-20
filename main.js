window.onload = function () {
    setInterval(executar, 1000 / 30);
}

//posicao bola
let posicaoBolaY = 10;
let posicaoBolaX = posicaoBolaY;

function executar() {
    const folhaDesenho = document.getElementById("folha");
    const areaDesenho = folhaDesenho.getContext("2d");

    //medidas/tamanhos
    const larguraCampo = 600;
    const alturaCampo = 500;
    const larguraLinha = 5;
    const alturaRaquete = 50;
    const diametroBola = 10;

    //criando campo
    areaDesenho.fillStyle = "#286047";
    areaDesenho.fillRect(0, 0, larguraCampo, alturaCampo);

    //linha central do campo
    areaDesenho.fillStyle = "#FDFDFD";
    areaDesenho.fillRect(larguraCampo / 2 - larguraLinha / 2, 0, larguraLinha, alturaCampo);

    // //raquete 1
    // areaDesenho.fillRect(0, 30, larguraLinha, alturaRaquete);

    // //raquete 2
    // areaDesenho.fillRect(larguraCampo - larguraLinha, 30, larguraLinha, alturaRaquete);

    //bola quadrada
    areaDesenho.fillRect(posicaoBolaX - (diametroBola / 2), posicaoBolaY - (diametroBola / 2), diametroBola, diametroBola);

    posicaoBolaX = posicaoBolaX + 1
    posicaoBolaY = posicaoBolaY + 1
}




