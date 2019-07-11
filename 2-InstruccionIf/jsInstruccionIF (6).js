function mostrar()
{
    var edad;
    edad=document.getElementById("edad").value;

    if(edad>18){

        alert("Usted es mayor de edad")
    }

    if(edad<13){

        alert("Usted es niño")
    }

    if(edad>=13&&edad<18){

        alert("Usted es adolescente")
    }



}