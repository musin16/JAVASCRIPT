
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
    validarNota(dwec,smDwec);
    validarNota(dwes,smdwes);
    validarNota(eie,smeie);
    validarNota(ds,smds);
    validarNota(diw,smDiw);
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
    if(Number(campo.length)==6){
        if(!isNaN(val)){
            let valorLetra=campo.substring(5);
            if(valorLetra.toUpperCase()==campo.substring(5) && isNaN(campo.substring(5)) ){
            }else{
                mensaje.innerHTML="UNA LETRA AL FINAL NO UN CARACTER ESPECIAL O NUMERO y en mayuscula";
                bool = false;
                alert(campo.substring(5)) ;
            }
        }else {
            mensaje.innerHTML="Los primeros caracteres son numeros";
            bool = false;
        }
    }else if(Number(campo.length)>=6){
        mensaje.innerHTML="Longitud larga";
        bool = false;
    }else if(Number(campo.length)<6 && campo!=""){
        bool =false;
        mensaje.innerHTML="Longitud corta";
    }
}
function validarNota(nota,mens){
    if(Number(nota)>=10){
        bool=false;
        mens.innerHTML="*La nota no puede ser superior a 10"
    }else if(Number(nota)<0){
        bool=false;
        mens.innerHTML="*La nota no puede ser inferior a 0"
    }
}
