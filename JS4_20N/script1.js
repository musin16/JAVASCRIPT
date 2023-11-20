var contene = document.createElement("div");
var im;
var imValidos = [];
var contBorde = [];
var cont = 0;
var contCambioOpa = 0;
contene.setAttribute("class", "container");
document.body.appendChild(contene);
var divDentro = document.createElement("div");
divDentro.className = "gallery";
contene.appendChild(divDentro);
for (let i = 0; i < 20; i++) {
    im = document.createElement("img");
    im.setAttribute("src", "https://randomuser.me/api/portraits/men/" + Math.floor(Math.random() * 100) + ".jpg");
    im.setAttribute("id", i);
    im.setAttribute("disabled", false);
    divDentro.appendChild(im);
}

var imeg = divDentro.querySelectorAll("img");

for (let i = 0; i < imeg.length; i++) {
    imeg[i].addEventListener("mouseover", moseOver);
    imeg[i].addEventListener("mouseleave", mose);
    imeg[i].addEventListener("click", botonImagen);
}

function moseOver() {
    if(!imValidos.includes(Number(this.id))){
        this.style.transform = "scale(1.5)";
    }
}

function mose() {
    this.style.transform = "scale(1)";
}

function botonImagen() {
    var indiceClic = Number(this.id);
    if (imValidos.includes(indiceClic)) {
        // deselecciono l imagen
        imValidos = imValidos.filter(ime => ime != indiceClic);
        cont--;
        this.className = "quitarBorde";
        this.style.transform = "scale(1)";
    } else if (cont < 5) {
        //nuevo valor en la lista ,selecciono la imagen
        imValidos.push(indiceClic);
        cont++;
        this.className = "ponerBorde";
        this.style.transform = "scale(1.5)";
        this.removeEventListener("mouseleave", mose);
        this.removeEventListener("mouseover", moseOver);
    }

    actualizarOpacidad();
}

function actualizaOpacidadPara() {
    for (let i = 0; i < 20; i++) {
        if(!imValidos.includes(i)){
            anadirNuevaMenteEventos(imeg[i]);
        }
        imeg[i].style.opacity='1';
    }
}
function actualizarOpacidad() {
    var bool =false;
    var bool2 =false;
    for (let i = 0; i < 20; i++) {
        if (contCambioOpa==0) {
            if (cont == 5) {
                if (imValidos.includes(i)) {
                    imeg[i].style.opacity = '1';
                    bool=true;
                } else {
                    borrarEvento(imeg[i])
                    imeg[i].style.opacity = '0.2';
                }
            }else{
                
            }
        }else{
            bool2=true;
            break;
        }
    }
    if(bool==true){
        contCambioOpa++;
    }
    if(bool2==true){
        contCambioOpa--;
        actualizaOpacidadPara();
    }
}
function anadirNuevaMenteEventos(img2){
    img2.addEventListener("mouseleave", mose);
    img2.addEventListener("mouseover", moseOver);
    img2.addEventListener("click", botonImagen);
}
function borrarEvento(img2){
    img2.removeEventListener("mouseover", moseOver);
    img2.removeEventListener("mouseleave", mose);
    img2.removeEventListener("click", botonImagen);
}