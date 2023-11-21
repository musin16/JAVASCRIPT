
juegoImagen();
function juegoImagen() {
    document.body.innerHTML="";
    var contene = document.createElement("div");
    contene.setAttribute("class", "container");
    document.body.appendChild(contene);
    var contene = document.createElement("div");
    contene.innerHTML = "";
    contene.setAttribute("class", "container");
    document.body.appendChild(contene);
    var imgcont = document.createElement("img");
    var r = Math.floor(Math.random() * 30);
    var at = Math.floor(Math.random() * 20);
    imgcont.setAttribute("id", at);
    if (at % 2 == 0) {
        imgcont.setAttribute("src", "https://randomuser.me/api/portraits/men/" + r + ".jpg");
    } else {
        imgcont.setAttribute("src", "https://randomuser.me/api/portraits/women/" + r + ".jpg");
    }
    imgcont.setAttribute("class", "imagenReferencia");
    document.body.appendChild(imgcont);
    var im;
    var r2 = [];
    var divDentro = document.createElement("div");
    divDentro.className = "gallery";
    contene.appendChild(divDentro);
    //setInterval("1000");
    for (let i = 0; i < 20; i++) {
        im = document.createElement("img");
        r2[i] = Math.floor(Math.random() * 100);
        if (i % 2 == 0) {
            im.setAttribute("src", "https://randomuser.me/api/portraits/men/" + r2[i] + ".jpg");
            if (r2.includes(r)) {
                im.setAttribute("id", imgcont.getAttribute("id"));
            } else {
                im.setAttribute("id", i);
            }
        } else {
            im.setAttribute("src", "https://randomuser.me/api/portraits/women/" + r2[i] + ".jpg");
            if (r2.includes(r)) {
                im.setAttribute("id", imgcont.getAttribute("id"));
            } else {
                im.setAttribute("id", i);
            }
        }
        divDentro.appendChild(im);
    }
    var imeg = divDentro.querySelectorAll("img");
    for (let i = 0; i < imeg.length; i++) {
        imeg[i].addEventListener("click", botonImagen);
    }

    function botonImagen() {
        if (imgcont.getAttribute("id") == this.getAttribute("id")) {
            alert("Ha acertado");
        } else {
            alert("Error");
        }
    }
}
setInterval(juegoImagen, "3000");