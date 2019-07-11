function mostrar()
{
    var edad;
    var estadocivil;
    
    edad=document.getElementById("edad").value;
    estadocivil=document.getElementById("estadoCivil").value
    
    if(edad <18 && estadocivil=="Casado"){

        alert("Es muy pequeño para NO ser soltero")
    }

    if(edad <18 && estadocivil=="Divorciado"){

        alert("Es muy pequeño para NO ser soltero")
    }

	


}