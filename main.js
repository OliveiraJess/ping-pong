const folhaDesenho = document.getElementById("folha");
const areaDesenho = folhaDesenho.getContext("2d");

//criando campo
areaDesenho.fillStyle = "#286047";
areaDesenho.fillRect(0, 0, 600, 500);

//linha central do campo
areaDesenho.fillStyle = "#FDFDFD";
areaDesenho.fillRect(297.5, 0, 5, 500);
