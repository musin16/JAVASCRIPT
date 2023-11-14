var valor3, valor2;
var btn1 = document.getElementById("btn1");
var cajas = document.querySelectorAll(".caja");

btn1.onclick = function() {
    btn1.setAttribute("disabled", true);
    setInterval(temp, 1000);
}

function temp() {
    let valor = ["blue", "red", "yellow", "green", "pink"];
    let valorEs = ["Azul", "Rojo", "Amarillo", "Verde", "Rosa"];
    
    cajas.forEach(element => {
        let valor2 = Math.floor(Math.random() * valor.length);
        let valor3 = Math.floor(Math.random() * valor.length);
        element.style.backgroundColor = valor[valor2];
        element.innerHTML = valorEs[valor3];
    });
}

cajas.forEach(caja2 => {
    caja2.onclick = function () {
        if (caja2.style.backgroundColor === caja2.innerHTML.toLowerCase()) {
            alert("Acierto");
        } else {
            alert("Error");
        }
    }
});
