const folhaDesenho = document.getElementById("folha");
const areaDesenho = folhaDesenho.getContext("2d");

//criando campo
areaDesenho.fillStyle = "#286047";
areaDesenho.fillRect(0, 0, 600, 500);

//linha central do campo
areaDesenho.fillStyle = "#FDFDFD";
areaDesenho.fillRect(297.5, 0, 5, 500);

//raquete 1
areaDesenho.fillRect(0, 30, 5, 50);

//raquete 2
areaDesenho.fillRect(595, 30, 5, 50);

//bola quadrada
areaDesenho.fillRect(30, 30, 5, 5);
