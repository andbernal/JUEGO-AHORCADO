var botonIniciar = document.querySelector("#botonInicio");

var palabras = ["serpiente","cocodrilo","elefante","tiburon","loro","perico","leon","hipopotamo","delfin","iguana","lagarto"];
var lineaLetras = 30;
var espacioLetras = 10;
var palabraEnJuego = "";
var inputLetra=document.querySelector("inputLetra");
const container = document.querySelector(".container");
var creacionEntradaDummy = false;
var letter = "";
var ingresoLetra = "";
var contadorClick = 0;
var controlFallos = 0;
var banderaFallos = false;
var LetrasUsadas = [];
var banderaRepetidas = false
var banderaAcierto = false;
var banderaDesacierto = false;

buscaPalabra();
var letras = palabraEnJuego.length;
console.log(letras);
console.log(palabraEnJuego);

botonIniciar.addEventListener("click",function(event){
    event.preventDefault();
    ocultarContenedor();
    mostrarCanvas();
   
    pitarLineas(palabraEnJuego);
    abrirKeyBoar();
    
    
    
});
cerrarKeyBoard();
console.log(palabraEnJuego.length);

function buscaPalabra(){
    var random=Math.floor(Math.random() * palabras.length);
    palabraEnJuego = palabras[random];
    return palabraEnJuego;
};

function mostrarCanvas(){
    canvas.style.display="inline-block";
    formularioDummy.style.display="flex";
    entrada_Dummy.style.display="inline-block";

}


function ocultarContenedor(){
    document.getElementById("tituloJuego").style.display="none";
    document.getElementById("botonInicio").style.display = "none";
    document.getElementById("botonAnadirPalabra").style.display = "none";
    
    document.getElementById("tituloIngresoPalabra").style.display = "none";
    document.getElementById("nuevaPalabra").style.display = "none";
    document.getElementById("informacion").style.display = "none";
    document.getElementById("vector").style.display = "none";
    document.getElementById("botonGuardarIniciar").style.display = "none";
    document.getElementById("botonCancelar").style.display = "none";
    document.getElementById("mensajeInicio").style.display = "flex";
}

function pitarLineas(texto){
    var controlPalabra=100;
    var controlEspacio=30;
    for (var i = 0; i < texto.length; i++) {
        pincel.font ="20px Verdana";
        pincel.strokeText("__",controlPalabra,330);
        pincel.strokeText("  ",(controlPalabra+controlEspacio),330);
        controlPalabra=controlPalabra+controlEspacio+10;
           
      }
    //colocarLetras(palabraEnJuego);
    

}

    
function abrirKeyBoar(){
    
        creacionEntradaDummy=true;
        var entrada = document.querySelector("#entrada_Dummy");
        
        entrada.addEventListener("click", function () {
       
        ingresoLetra = entrada.value;
        if (ingresoLetra != ""){
            contadorClick++;

        }

        banderaAcierto=false;
        banderaDesacierto=false;
        
            

        
        console.log(ingresoLetra);
        
       
        var controlLetra=100;
        var controlEspacioLetra=30;
        for (var i = 0; i < palabraEnJuego.length; i++) {
            if(palabraEnJuego[i]==ingresoLetra){
                pincel.strokeStyle = "black";
                pincel.strokeText(palabraEnJuego[i],controlLetra,327);
                
                pincel.strokeText("  ",(controlLetra+controlEspacioLetra),327);
                controlLetra=controlLetra+controlEspacioLetra+10;
                banderaAcierto = true;
                
           }

            else{
                controlLetra=controlLetra+controlEspacioLetra+12;
                banderaDesacierto = true;
                
            }
            
        
        }
        
        if(ingresoLetra !="")
        {
            if (banderaAcierto){
                mensajeAcerto();

            }else{
                mensajerrar();
            }
        }else{
            mesajeBorrar();
        }

        console.log("bandera de Aciero"+ banderaAcierto);
        console.log("bandera de Desacierto"+ banderaDesacierto);
        
        controlarRepetidas();
        console.log("Control de banderas"+banderaRepetidas);

        
        guardarLetrasUsadas();
        console.log("Letras Usadas"+LetrasUsadas);
        


        if(banderaRepetidas==false){
            if(ingresoLetra !=""){
                
                if(palabraEnJuego.search(ingresoLetra) < 0){
                    controlFallos++;
                    console.log("controlFallos:"+ controlFallos);
                    dibujarpartes();
                }
                

            }
        }
        controlFinalJuego();
        
        
       
        
        
        
           
    });

    //}
}    
function cerrarKeyBoard(){
    var entrada = document.querySelector("#entrada_Dummy");  
    entrada.textContent="";   
}

function centrarEntradaDummy(){
    var entradaDummy = document.querySelector("#entrada_Dummy");
    entradaDummy.focus();
}




function resetCounter() {
    contadorClick = 0;
    
}

function MostrarContador(val) {
    document.getElementById("counter-label").innerHTML = val;
}

function dibujarpartes(){
    
    if (controlFallos == 1){
        pintarPalo();
    }
    if (controlFallos == 2){
        pintarTecho()
    }
    if (controlFallos == 3){
        pintarSoga()   
    }
    if (controlFallos == 4){
        pintarCabeza()
    }
    if (controlFallos == 5) {
        pitarCuerpo()     
    }
    if (controlFallos == 6) {
        pintarBrazoD()
    }
    if (controlFallos == 7) {
        pitarBrazoI()
    }
    if (controlFallos == 8) {
        pintarPiernaD()
    }
    if (controlFallos == 9){
        pintarPiernaI()
    }       
}

function guardarLetrasUsadas(){
    
    LetrasUsadas.push(ingresoLetra);

}

function controlarRepetidas(){
    banderaRepetidas = false
    for(var y=0; y <=LetrasUsadas.length; y++){
        if(LetrasUsadas[y] == ingresoLetra){
            banderaRepetidas = true;
            break;
            
        }            
    }

}

function activarMensajes(){
    if (banderaAcierto){
        document.getElementById("mensajeAcierto").style.display = "flex";
    }

         
    
    if (banderaDesacierto){
        document.getElementById("mensajeDesacierto").style.display = "flex";
    }   
}

function desactivarMensajes(){
    document.getElementById("mensajeAcierto").style.display = "none";
    document.getElementById("mensajeDesacierto").style.display = "none";
}

function controlFinalJuego(){
    var contadorLetras=0;
    var letraIngresada=false;
    console.log("Tamaño vector Letras Usadas "+LetrasUsadas.length);
    for(var z=0; z <= palabraEnJuego.length; z++){
        //for(var w=0; w <=LetrasUsadas.length; w++)
       
        if(LetrasUsadas.includes(palabraEnJuego[z]) ){
            console.log("letras "+(palabraEnJuego[z]));
            console.log("tamaño de la palabra"+palabraEnJuego.length)
            contadorLetras++;
            console.log("contador de letras "+contadorLetras);

        }

    }
    if(contadorLetras==(palabraEnJuego.length)){
        mensajeGanar();
        //salir();
        var entrada = document.querySelector("#entrada_Dummy");
        entrada.addEventListener("click", accionDummy); 
        entrada.removeEventListener("click", accionDummy);

        
    
    }
    
}

function salir(){
    document.getElementById("tituloJuego").style.display="flex";
    canvas.style.display="none";
    entrada_Dummy.style.display="none";
    mensajeInicio.style.display="none";
    botonInicio.style.display="inline-block";
    botonAnadirPalabra.style.display="inline-block";
    document.getElementById("tituloIngresoPalabra").style.display = "none";
    document.getElementById("nuevaPalabra").style.display = "none";
    document.getElementById("informacion").style.display = "none";
    document.getElementById("vector").style.display = "none";
    document.getElementById("botonGuardarIniciar").style.display = "none";
    document.getElementById("botonCancelar").style.display = "none";


}

function accionDummy(){
    document.getElementById("entrada_Dummy").value = "";
}