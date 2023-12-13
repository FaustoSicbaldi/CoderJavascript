let nombre 
{
nombre = prompt ("Hola¿Cual es tu nombre?");
alert ("Bienvenido/a A tu ayuda social,"+nombre);
if(nombre<=null) 

    alert(nombre+"No es un dato valido.");
}
    
let hijos=Number (prompt("¿Cuantos hijos tiene?"));
if  (hijos<=6){
 alert("Usted recibe de ayuda social$"+ hijos*15000)}
else if (hijos >=7){
    alert ("Usted supera las condiciones para obtener ayuda economica");
}
let cobro=2
while (cobro<=16){
    alert("el cobro se realiza los dias-" + cobro + "-de cada mes");
    cobro+= 2
}

for(i=0;i<=5;i++) {
    document.write("DNI TERMINADO EN:"+i+"-PAGADO-"+'<br>');
}

