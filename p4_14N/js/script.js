var valor3,valor2;
btn1.onclick = function() { 
    btn1.setAttribute("disabled",true);
    setInterval(temp, 1000);
}
function temp(){
 let valor=["blue","red","yellow","green","pink"];
 let valorEs=["Azul","Rojo","Amarillo","Verde","Rosa"];
  valor2 = Math.floor(Math.random() * valor.length);
  valor3 = Math.floor(Math.random() * valor.length);
  c1.style.backgroundColor = valor[valor2];
  c1.innerHTML=valorEs[valor3];
}
c1.onclick=function(){
    if(valor2==valor3){
        alert("Acierto");
    }else{
        alert("Error");
    }
}