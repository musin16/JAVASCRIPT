btn1.onclick = function() { 
       btn1.setAttribute("disabled",true);
       setInterval(temp, 1000);
}
function temp(){
    let valor=["blue","red","yellow","green","pink"];
    let valorEs=["Azul","Rojo","Amarillo","Verde","Rosa"];
    let valor2 = Math.floor(Math.random() * valor.length);
        c1.style.backgroundColor = valor[valor2];
        c1.innerHTML=valorEs[valor2];
}
