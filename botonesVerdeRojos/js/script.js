var doc = document.createElement("div");
doc.className = "gallery";
document.body.appendChild(doc);
var md = []; var i = 0, j = 0; var interv, interv2;
colorear();
jugar.onclick = function () {
    i = 0; j = 0;
    jugar.disabled = true;
    jugar2.disabled = false;
    clearInterval(interv2);
    limiparDiv()
    colorCam();
    interv = setInterval(colorCam, 50);
}
jugar2.onclick = function () {
    i = 0; j = 0;
    clearInterval(interv);
    limiparDiv()
    jugar.disabled = false;
    jugar2.disabled = true;
    colorCam2();
    interv2 = setInterval(colorCam2,150);
}
function limiparDiv(){
    for (let i = 0; i < md.length; i++) {
        md[i].style.backgroundColor = "green";
    }
}
function colorCam() {
    if (i < md.length) {
        md[i].style.backgroundColor = "red"; i++;
    } else if (i == md.length && j < md.length) {
        md[j].style.backgroundColor = "green"; j++;
    } else {
        i = 0; j = 0;
    }
}
function colorCam2() {
    if (i < md.length) {
        md[i].style.backgroundColor = "red";
        setTimeout(coloverde, "50");
    } else {
        i = 0;
    }
}
function coloverde(){
    md[i].style.backgroundColor="green";
    i++;
}
function colorear() {
    for (let i = 0; i < 40; i++) {
        var divv = document.createElement("div");
        divv.className = "fondo";
        doc.appendChild(divv);
        md.push(divv);
    }
}