
 $(document).ready(function(){
	//obtengo un aleatorio
colorin = #ffffff

//voy a extraer las tres partes del color
rojo = colorin.substring(1,3)
verde = colorin.substring(3,5)
azul = colorin.substring(5,7) 

//voy a convertir a enteros los string, que tengo en hexadecimal
introjo = parseInt(rojo,16)
intverde = parseInt(verde,16)
intazul = parseInt(azul,16)

//ahora sumo los valores
oscuridad = introjo + intverde + intazul

//si el valor oscuridad es menor que ((255 + 255 + 255) / 2) es que es un color más oscuro
//si es oscuro, el color del texto será blanco
if (oscuridad<(255+255+255)/2)
   
else
   colortexto="#000000"
   //aquí meteremos las instrucciones que modifiquen el DOM
});