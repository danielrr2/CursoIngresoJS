function mostrar()
{
 
var laHora = document.getElementById('hora').value;

switch(laHora){

    case "7" :
    case "8" :
    case "9" : 
    case "10" :
    case "11" :   
    
        alert("Es de mañana");
    break;

    default :

        alert("No es de mañana");
    }

//alert (laHora);
	
	



}//FIN DE LA FUNCIÓN