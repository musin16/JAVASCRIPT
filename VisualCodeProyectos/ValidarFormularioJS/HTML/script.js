
var accion =document.getElementById("validar");
var bool=true;
accion.onsubmit=function(){
    let expediente=document.getElementById("expediente").value;
    let smExp=document.getElementById("smExp");
    let nombre=document.getElementById("nombre").value;
    let smNom=document.getElementById("smNom");
    let apellidos=document.getElementById("apellidos").value;
    let smApe=document.getElementById("smApe");
    let dwec=document.getElementById("dwec").value;
    let smDwec=document.getElementById("smDwec");
    let dwes=document.getElementById("dwes").value;
    let smdwes=document.getElementById("smdwes");
    let eie=document.getElementById("eie").value;
    let smeie=document.getElementById("smeie");
    let ds=document.getElementById("ds").value;
    let smds=document.getElementById("smds");
    let diw=document.getElementById("diw").value;
    let smDiw=document.getElementById("smDiw");
    validacionVacio(expediente,smExp);
    validacionVacio(nombre,smNom);
    validacionVacio(apellidos,smApe);
    validacionVacio(dwec,smDwec);
    validacionVacio(dwes,smdwes);
    validacionVacio(eie,smeie);
    validacionVacio(diw,smDiw);
    validacionVacio(ds,smds);
    validarLongitud(expediente,smExp);
    return bool;
}
function validacionVacio(campos,mensaje){
    if (campos == "") {
        bool = false;
        mensaje.innerHTML = "Campo obligatorio";
    } 
}
function validarLongitud(campo,mensaje){
    let val=campo.substring(0,5);
    alert(val);
    if(Number(campo.length)==6){
        if(!isNaN(val)){
            if(isNaN(campo.substring(6))){
                
            }else{
                mensaje.innerHTML="UNA LETRA AL FINAL NO UN CARACTER ESPECIAL O NUMERO"
            }
        }else {
            mensaje.innerHTML="Los primeros caracteres son numeros"
        }
    }else if(Number(campo.length)>=6){
        mensaje.innerHTML="Longitud larga"
    }else if(Number(campo.length)<1){
        mensaje.innerHTML="Longitud corta"
    }
}
