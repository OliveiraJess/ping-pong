
window.onload = function () {
    iniciar();
    setInterval(principal, 1000 / 30);
}

//variaveis globais
function iniciar() {
    folhaDesenho = document.getElementById("folha");
    areaDesenho = folhaDesenho.getContext("2d");

    //posicao jogadores
    posicaoJogador1 = 40;
    posicaoJogador2 = 40;

    //velocidade raquete jogador 2
    velocidadeJogador2 = 7;

    //pontuacao jogadores
    pontuacaoJogador1 = 0;
    pontuacaoJogador2 = 0;

    //posicao bola
    posicaoBolaY = 10;
    posicaoBolaX = 10;
    velocidadeBolaPosicaoY = 8;
    velocidadeBolaPosicaoX = 8;

    //medidas/tamanhos
    larguraCampo = 600;
    alturaCampo = 500;
    espessuraRede = 5;
    diametroBola = 10;
    espessuraRaquete = 11;
    alturaRaquete = 100;
    efeitoRaquete = 0.3;

    folhaDesenho.addEventListener('mousemove', function (e) {
        posicaoJogador1 = e.clientY - alturaRaquete / 2;
    })

}

//desenhar
function desenhar() {
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

    //desenho pontuacao dos jogadores
    areaDesenho.fillText("Voce - " + pontuacaoJogador1 + " pontos", 100, 100);
    areaDesenho.fillText("Computador - " + pontuacaoJogador2 + " pontos", larguraCampo - 200, 100);
}

//colocar a bola no centro
function colocarBolaCentro() {
    posicaoBolaX = larguraCampo / 2;
    posicaoBolaY = alturaCampo / 2;
    velocidadeBolaPosicaoX = -velocidadeBolaPosicaoX;
    velocidadeBolaPosicaoY = 3;
}

//calcular
function calcular() {
    //posicao bola com velocidade
    posicaoBolaX = posicaoBolaX + velocidadeBolaPosicaoX;
    posicaoBolaY = posicaoBolaY + velocidadeBolaPosicaoY;


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
            colocarBolaCentro();
        }

    }

    //verifica se o jogador 1 fez ponto
    if (posicaoBolaX > larguraCampo) {
        if (posicaoBolaY > posicaoJogador2 && posicaoBolaY < posicaoJogador2 + alturaRaquete) {
            //rebater a bola
            velocidadeBolaPosicaoX = - velocidadeBolaPosicaoX;

            //angulo da bola quando bate na lateral da raquete
            let diferencaY = posicaoBolaY - (posicaoJogador2 + alturaRaquete / 2);
            velocidadeBolaPosicaoY = diferencaY * efeitoRaquete;
        } else {
            //ponto jogador 1
            pontuacaoJogador1++;
            colocarBolaCentro();
        }
    }

    //atualiza a posicao do jogador 2
    if (posicaoJogador2 + alturaRaquete / 2 < posicaoBolaY) {
        posicaoJogador2 = posicaoJogador2 + velocidadeJogador2;

    } else {
        posicaoJogador2 = posicaoJogador2 - velocidadeJogador2;
    }
}

//chama as funcoes desenhar e calcular
function principal() {
    desenhar();
    calcular();
}

