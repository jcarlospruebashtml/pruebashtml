"use strict";

var mivideo,boton,barra,progreso,total,maximo,barraProgreso,avanzar,nuevoEstado;
maximo=624;

function comenzar(){
	mivideo=document.getElementById("miVideo");
	boton=document.getElementById("boton");
	progreso=document.getElementById("progreso");
	barra=document.getElementById("barra");
	
	boton.addEventListener("click",alHacerClick,false);
	barra.addEventListener("click",avance,false);
}
function alHacerClick(){
	if(mivideo.paused===false && mivideo.ended===false){
		mivideo.pause();
		boton.innerHTML="Reproducir";
	}else{
		mivideo.play();
		boton.innerHTML="Pausar";
		barraProgreso=setInterval(estadoProgreso,30);
	}
}
function estadoProgreso(){	total=parseInt(mivideo.currentTime*maximo/mivideo.duration);
progreso.style.width=total+"px";						  
}
function avance(posicion){	
		avanzar=posicion.pageX-barra.offsetLeft;
		nuevoEstado=avanzar*mivideo.duration/maximo;
		mivideo.currentTime=nuevoEstado;
		progreso.style.width=avanzar+"px";		
}
window.addEventListener("load",comenzar,false);