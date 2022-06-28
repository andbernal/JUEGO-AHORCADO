var pantalla = document.querySelector("canvas");
	var pincel = pantalla.getContext("2d");
    
	pincel.fillStyle = "lightgrey";// es una propiedad
	pincel.fillRect(0,0,600,400);//el cuadro va desde la posición 0,0 hasta 600,400

	//pincel.fillStyle = "blue" 
	//pincel.fillRect(350,270,20,70);
    
    




    
    
    
    
    





function pintarPiernaI(){
    pincel.lineWidth = 3;
    pincel.strokeStyle = "blue";
    pincel.beginPath();
    pincel.moveTo(350,270);
    pincel.lineTo(370,300);
    pincel.stroke();
}

function pintarPiernaD(){
    pincel.lineWidth = 3;
    pincel.strokeStyle = "blue";
    pincel.beginPath();
    pincel.moveTo(350,270);
    pincel.lineTo(330,300);
    pincel.stroke();

}

function pitarBrazoI(){
    pincel.lineWidth = 3;
    pincel.strokeStyle = "blue";
    pincel.beginPath();
    pincel.moveTo(350,230);
    pincel.lineTo(390,230);
    pincel.stroke();

}

function pintarBrazoD(){
    pincel.lineWidth = 3;
    pincel.strokeStyle = "blue";
    pincel.beginPath();
    pincel.moveTo(350,230);
    pincel.lineTo(310,230);
    pincel.stroke();
}


function pitarCuerpo(){
    pincel.lineWidth = 3;
    pincel.strokeStyle = "blue";
    pincel.beginPath();
    pincel.moveTo(350,210);
    pincel.lineTo(350,270);
    pincel.stroke();
}

function pintarCabeza(){
    pincel.lineWidth = 3;
    pincel.strokeStyle = "blue";
    pincel.beginPath();
    pincel.moveTo(370,190);
    pincel.arc(350, 190, 20, 0, 2 * 3.14);
    pincel.stroke();
}

function pintarSoga(){
    pincel.lineWidth = 3;
    pincel.strokeStyle = "blue";
    pincel.beginPath();
    pincel.moveTo(350,150);
    pincel.lineTo(350,170);
    pincel.stroke();

}

function pintarTecho(){
    pincel.lineWidth = 3;
    pincel.strokeStyle = "blue";
    pincel.beginPath();
    pincel.moveTo(270,150);
    pincel.lineTo(350,150);
    pincel.stroke();

}
function pintarPalo(){
    pincel.lineWidth = 3;
    pincel.strokeStyle = "blue";
    pincel.beginPath();
    pincel.moveTo(270,310);
    pincel.lineTo(270,150);
    pincel.stroke();
}
function mensajeAcerto(){
    mesajeBorrar();
    pincel.strokeStyle = "blue"
    pincel.strokeText("Acierto",50,50)

}

function mensajerrar(){
    mesajeBorrar();
    pincel.strokeStyle = "red";
    pincel.strokeText("Fallaste",50,50)

}

function mesajeBorrar(){
    pincel.beginPath();
    pincel.moveTo(50,60);
    pincel.fillStyle = "lightgrey";
    pincel.clearRect(45, 60, 100, -30);
}

function mensajeGanar(){
    mesajeBorrar();
    pincel.strokeStyle = "orange";
    pincel.strokeText("¡GANASTE!",50,50);
}

function mensajeRepetida(){
    mesajeBorrar();
    pincel.strokeStyle = "red"
    pincel.strokeText("Repetida",50,50)
}