
var canvas=document.getElementById('fondo');
var lapiz = canvas.getContext('2d');
var btnIntentar = document.getElementById('btnIntentar');
var letra = document.getElementById('txtIntentos');
var palabraAdivinar = document.getElementById('lblPalabra');
var palabra ='';
var palabraAuxiliar ='';
//console.log(letra);
//console.log(btnIntentar);
//console.log(canvas);

var ahorcado ={
url: './img/1.png',
imagen : Image,
cargaOk: false

}
ahorcado.imagen = new Image();
ahorcado.imagen.src = ahorcado.url;
ahorcado.imagen.width=500;
ahorcado.height=500;

ahorcado.imagen.addEventListener('load',function(){
    ahorcado.cargaOk =true;
    dibujar();
    palabra = getFruta(aleatorio(1,5));
    palabraAuxiliar = codificar(palabra);
    palabraAdivinar.innerHTML = palabraAuxiliar;
    //palabraAdivinar.value = palabra;

});
function dibujar(){
    if(ahorcado.cargaOk==true){
        lapiz.drawImage(ahorcado.imagen,-250,-50);
    }
}

btnIntentar.addEventListener('click',function(){
    palabraAuxiliar = validar(letra.value);
  //  alert('cadena :'+ palabraAuxiliar);
  palabraAdivinar.innerHTML = palabraAuxiliar;
});
function aleatorio(minimo,maximo){
    return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
}

function getFruta(numero){
    var fruta='';
switch (numero){
    case 1:
        fruta='manzana'
        break;
    case 2:
         fruta ='pera';
         break;
    case 3:
         fruta = 'mandarina'
         break;
    case 4:
    fruta ='aguacate'
         break;
         case 5:
         fruta ='sandia'
          break;


}
return fruta;
}

function codificar(palabra){
    var respuesta='';
    for(i=0;i<palabra.length;i++){
        if(palabra.substr(i,1) != '#'){
            respuesta = respuesta + "#"; 
        }
    }

    return respuesta;
}

function validar(letra){
var respuesta = '';
for(i=0;i<palabraAuxiliar.length;i++){
    if(palabra.substr(i,1) ===letra){
        respuesta = respuesta + letra;
    } else{
        respuesta = respuesta + palabraAuxiliar.substr(i,1);
    }
}
return respuesta;
}