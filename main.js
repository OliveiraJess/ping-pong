window.onload = function () {
    setInterval(executar, 1000 / 30);
}

//posicao jogadores
let posicaoJogador1 = 40;
let posicaoJogador2 = 40;

//pontuacao jogadores
let pontuacaoJogador1 = 0;
let pontuacaoJogador2 = 0;

//posicao bola
let posicaoBolaY = 10;
let posicaoBolaX = 10;
let velocidadeBolaPosicaoY = 5;
let velocidadeBolaPosicaoX = 5;

function executar() {
    const folhaDesenho = document.getElementById("folha");
    const areaDesenho = folhaDesenho.getContext("2d");

    //medidas/tamanhos
    const larguraCampo = 600;
    const alturaCampo = 500;
    const espessuraRede = 5;
    const diametroBola = 10;
    const espessuraRaquete = 11;
    const alturaRaquete = 100;
    const efeitoRaquete = 0.3;

    //criando campo
    areaDesenho.fillStyle = "#286047";
    areaDesenho.fillRect(0, 0, larguraCampo, alturaCampo);

    //linha central do campo
    areaDesenho.fillStyle = "#FDFDFD";
    areaDesenho.fillRect(larguraCampo / 2 - espessuraRede / 2, 0, espessuraRede, alturaCampo);

    //bola quadrada
    areaDesenho.fillRect(posicaoBolaX - (diametroBola / 2), posicaoBolaY - (diametroBola / 2), diametroBola, diametroBola);

    //raquete 1
    areaDesenho.fillRect(0, posicaoJogador1, espessuraRaquete, alturaRaquete);

    //raquete 2
    areaDesenho.fillRect(larguraCampo - espessuraRaquete, posicaoJogador2, espessuraRaquete, alturaRaquete);

    //posicao bola com velocidade
    posicaoBolaX = posicaoBolaX + velocidadeBolaPosicaoX;
    posicaoBolaY = posicaoBolaY + velocidadeBolaPosicaoY;

    //desenho pontuacao dos jogadores
    areaDesenho.fillText("Voce - " + pontuacaoJogador1 + " pontos", 100, 100);
    areaDesenho.fillText("Computador - " + pontuacaoJogador2 + " pontos", larguraCampo - 200, 100);

    //verifica lateral superior
    if (posicaoBolaY < 0 && velocidadeBolaPosicaoY < 0) {
        velocidadeBolaPosicaoY = -velocidadeBolaPosicaoY;
    }

    //verifica lateral inferior
    if (posicaoBolaY > alturaCampo && velocidadeBolaPosicaoY > 0) {
        velocidadeBolaPosicaoY = -velocidadeBolaPosicaoY;
    }

    //verifica se o jogador 2 fez ponto
    if (posicaoBolaX < 0) {
        if (posicaoBolaY > posicaoJogador1 && posicaoBolaY < posicaoJogador1 + alturaRaquete) {
            //rebater a bola
            velocidadeBolaPosicaoX = -velocidadeBolaPosicaoX;

            //angulo da bola quando bate na lateral da raquete
            let diferencaY = posicaoBolaY - (posicaoJogador1 + alturaRaquete / 2);
            velocidadeBolaPosicaoY = diferencaY * efeitoRaquete;
        } else {
            //ponto jogador 2
            pontuacaoJogador2++

            //colocar a bola no centro

        }

    }

    //verifica se o jogador 1 fez ponto
    if (posicaoBolaX > larguraCampo) {
        if (posicaoBolaY > posicaoJogador2 && posicaoBolaY < pontuacaoJogador2 + alturaRaquete) {
            //rebater a bola
            velocidadeBolaPosicaoX = - velocidadeBolaPosicaoX;

            //angulo da bola quando bate na lateral da raquete
            let diferencaY = posicaoBolaY - (posicaoJogador2 + alturaRaquete / 2);
            velocidadeBolaPosicaoY = diferencaY * efeitoRaquete;
        } else {
            //ponto jogador 1
            pontuacaoJogador1++;

            //colocar a bola no centro
        }

    }
}




