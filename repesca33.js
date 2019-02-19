
var Inicio1 = prompt("Que quieres hacer en el sitio \n\t1 Practicar sumando \n\t2. Calculadora \n\t3. Unos Juegos/Teoria \n\nIngrese un valor");

switch(Inicio1)
{
	
	case '1':
	document.write("Haz click en el logo para volver a la pagina")
	break;

	case '2':
	var resposta = prompt('Que quieres colcular? \n\t1. Sumar \n\t2. Restar \n\t3. Multiplicar; \n\nIngresar una opcion ');

	switch(resposta)
	{
		case '1':
		var num1; 
		var num2;

		num1 = prompt('Cual es el primer valor? ');
		num2 = prompt('Cual es el segundo valor? ');

		var solucionado = parseInt(num1)+parseInt(num2);
		document.write('El resultado es '+ solucionado +"<br>");
		break;
		case '2':
		var num1; 
		var num2;

		num1 = prompt('Cual es el primer valor? ');
		num2 = prompt('Cual es el segundo valor? ');

		var restado = parseInt(num1)-parseInt(num2)
		document.write('El resultado es '+ restado +"<br>");
		break;
		case '3':
		var num1; 
		var num2;

		num1 = prompt('Cual es el primer valor? ');
		num2 = prompt('Cual es el segundo valor? ');

		var multiplicado = parseInt(num1)*parseInt(num2)
		document.write("Multiplicando son "+ multiplicado +"<br>");

		break;
		default:
		document.write("Escribe una opción");
		break;
	}; 
	break;

	case "3" :
		var Juegos = prompt('A que jugamos \n\t1. Piedra-Papel-Tigera \n\t2. Acierta un numero \n\t3. Teoria \n\nIngresar una opcion ');
		switch(Juegos)
				{
		case '1':
		//Genera un numero aleatorio entre 0 , 1 y 2 
function aleatorio(minimo, maximo)
{
  var numero = Math.round( Math.random() * (maximo - minimo + 1) + minimo);
  return numero;
}

var piedra = 0;
var papel = 1;
var tijera = 2;


var opciones = ["Piedra", "Papel", "Tijera"];


var opcionUsuario;
var opcionMaquina = aleatorio(0,2);

opcionUsuario = prompt("¿Qué eliges?\nPiedra: 0\nPapel: 1\nTijera: 2", 0)


alert("Elegiste " + opciones[opcionUsuario]);
alert("Javascript eligio " + opciones[opcionMaquina]);


if(opcionUsuario == piedra)
    {

      if(opcionMaquina == piedra)
        {
          alert("Empate!");
        }
      else if(opcionMaquina == papel)
          {
            alert("Perdiste");
          }
      else if(opcionMaquina == tijera)
        {
          alert("Ganaste!");
        }
    }
else if(opcionUsuario == papel)
    {

      if(opcionMaquina == piedra)
        {
          alert("Ganaste!");
        }
      else if(opcionMaquina == papel)
          {
            alert("Empate!");
          }
      else if(opcionMaquina == tijera)
        {
          alert("Perdiste!");
        }
    }
else if(opcionUsuario == tijera)
    {

      if(opcionMaquina == piedra)
        {
          alert("Perdiste!");
        }
      else if(opcionMaquina == papel)
          {
            alert("Ganaste");
          }
      else if(opcionMaquina == tijera)
        {
          alert("Empate!");
        }
      }
  else if(opcionUsuario > 2)
  {
    alert("Vuelve a elegir");
  }
  
		break;
		case '2':
		// xenera un número aleatorio menor ca 1
var misterio = Math.random();

// o número será menor ca 10
misterio = misterio*10;

//redondeo para non ter decimais
misterio = Math.round(misterio)

document.write(misterio);

var elige = prompt('Hacierta el numero misterioso entre 0 y 10')

if (elige == misterio)
{
	alert("Winner Winner Chicken Dinner")//alerta in
}
if (elige != misterio)
{
	alert("GAME OVER")
}

		break;
		case '3':
		document.write('<h3> Los numeros </h3>')
var Num =["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

var NumeroDias = Num.length -1;
var i = 0;
while (i <= NumeroDias) {
	document.write( Num[i] + "<br>" );
	i++
}
		document.write('<h3> Numeros romanos </h3>')
var Rom =["I","II","III","IV","V","VI"];
for( i = 0; i <= Rom.length - 1; i++){
	document.write( Rom[i] + "<br>");
}
		break;
		default:
		document.write("Escribe una opción");
		break;
	}; 
	break;


	break;

default:
document.write("Por no escribir una opción toca restar");
break;
};