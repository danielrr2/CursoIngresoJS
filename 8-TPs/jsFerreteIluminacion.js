/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{   
    var cantidad;
    
    var marca;
    
    var precio;
    
    var preciocondescuento;
    
    cantidad=document.getElementById("Cantidad").value;
    marca=document.getElementById("Marca").value;
    precio=35
    precio=parseInt(precio);

    
    
    if(cantidad>=6 && marca=="ArgentinaLuz"){
    preciocondescuento=6*precio*0.5
        
            }
            else if (cantidad=5 ){
              preciocondescuento=5*precio*0.4
                if(marca == "ArgentinaLuz"){
                    preciocondescuento=5*precio*0.4
                }
                else{
                    preciocondescuento=5*precio*0.3
                    
                }if  (cantidad=4 && marca=="ArgentinaLuz"||"FelipeLamparas"){
                    preciocondescuento=4*precio*0.25

                
                }else{
                    preciocondescuento=4*precio*0.2

        
                }
                

                }
                



                document.getElementById("precioDescuento").value=preciocondescuento
    
     }
    
    
    


 	

