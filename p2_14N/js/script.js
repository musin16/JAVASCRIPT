btn1.onclick = function() {
    let valor=["blue","red","yellow","green","pink"];
    let valorEs=["Azul","Rojo","Amarillo","Verde","Rosa"];
    let valor2 = Math.floor(Math.random() * valor.length);
        c1.style.backgroundColor = valor[valor2];
        c1.innerHTML=valorEs[valor2];
}
