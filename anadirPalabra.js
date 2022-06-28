var botonGuardar = document.querySelector("#botonGuardarIniciar");

var contador =1;
botonAnadirPalabra.addEventListener("click",function(event){
    event.preventDefault();
    mostrarOpcionesAdicionar();
    

});




botonGuardar.addEventListener("click", function (event) {
    event.preventDefault();
    
    var PalabraNueva=document.querySelector("#nuevaPalabra");
    console.log(PalabraNueva.value);
    var textoEntrada = PalabraNueva.value;
    console.log(textoEntrada);
    palabras.push(textoEntrada);
    console.log(palabras);
    ocultarContenedor();
    mostrarCanvas();
   
    pitarLineas(palabraEnJuego);
    abrirKeyBoar();
});

botonCancelar.addEventListener("click", function (event) {
    event.preventDefault();
    salir();
});

function mostrarOpcionesAdicionar(){
    document.getElementById("tituloJuego").style.display="none";
    document.getElementById("botonInicio").style.display = "none";
    document.getElementById("botonAnadirPalabra").style.display = "none";
    
    document.getElementById("tituloIngresoPalabra").style.display = "flex";
    document.getElementById("nuevaPalabra").style.display = "flex";
    document.getElementById("informacion").style.display = "flex";
    document.getElementById("vector").style.display = "flex";
    document.getElementById("botonGuardarIniciar").style.display = "flex";
    document.getElementById("botonCancelar").style.display = "flex";
    document.getElementById("mensajeInicio").style.display = "none";

}
    


