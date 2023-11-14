var aleatorioNum1 = [];
var aleatorioNum2 = [];
var numeroAcierto = 0;
var caja = document.getElementsByClassName("caja");
btn1.onclick = function () {
    btn1.setAttribute("disabled", true);
    setInterval(aleatoriedad, 3000);

}
function aleatoriedad() {
    let valor = ["blue", "red", "yellow", "green", "pink"];
    let valorEs = ["Azul", "Rojo", "Amarillo", "Verde", "Rosa"];
    rellenar(valor, valorEs);
}
function rellenar(valor, valorEs) {
    for (let i = 0; i < caja.length; i++) {
        aleatorioNum1[i] = Math.floor(Math.random() * valor.length);
        aleatorioNum2[i] = Math.floor(Math.random() * valor.length);
        caja[i].style.backgroundColor = valor[aleatorioNum2[i]];
        caja[i].innerHTML = valorEs[aleatorioNum1[i]];

    }
}
for (let i = 0; i < caja.length; i++) {
    caja[i].onclick = function () {
        if (aleatorioNum1[i] == aleatorioNum2[i]) {
            numeroAcierto++;
            alert("acertastes " + numeroAcierto + " veces")
        } else {
            alert("fallaste")
        }
    }
}
