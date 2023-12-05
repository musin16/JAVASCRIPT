var cabecera = [];
var cont = 0;
tabla1.style.border = "5px solid black";
window.onload = inicio;
function inicio() {
    let btn = document.getElementById("listar1");
    btn.onclick = function () {
        fetch('http://camacho.atwebpages.com/webcam/getWebcam.php')
            .then(response => response.json())
            .then(datos => {
                console.table(datos);
                cargarTabla(datos);
            });
    }
}

function cargarTabla(datos) {
    tabla1.innerHTML = "";
    cabecera = Object.keys(datos[0]);
    let tr = document.createElement("tr");
    tr.style.border = "5px solid black";
    for (let i = 0; i < cabecera.length; i++) {
        let th = document.createElement("th");
        th.textContent = cabecera[i];
        th.style.border = "5px solid black";
        th.addEventListener("click", function () {
            ordenar(datos, i);
        });
        tr.appendChild(th);
    }
    tabla1.appendChild(tr);
    cargarContenido(datos);
}

function cargarContenido(datos) {
   // var bool=1;
    for (let i = 0; i < datos.length; i++) {
        let tr = document.createElement("tr");
        tr.style.border = "5px solid black";
        for (let j = 0; j < cabecera.length; j++) {
            let th = document.createElement("th");
            th.style.border = "5px solid black";
            let campo = datos[i][cabecera[j]];
            if (esVideo(campo)) {
                asignarVideo(campo, th);
            }else if (campo.startsWith("https://") || campo.startsWith("http://")) {
                if(esImagen(campo)){
                    asignarImagen(campo, th);
                }else{
                    asignarImagen(campo, th)
                }
            } else {
                th.textContent = campo;
            }
            tr.appendChild(th);
           
        }
        tabla1.appendChild(tr);
    }
}
function ordenar(datos, i) {
    if (isNaN(datos[0][cabecera[i]])) {
        datos.sort((a, b) => a[cabecera[i]].localeCompare(b[cabecera[i]]));
        console.log(datos);
    } else {
        datos.sort((a, b) => a[cabecera[i]] - b[cabecera[i]]);
    }
    cargarTabla(datos);
}
function esVideo(campo) {
    let terminacion = /\.(mp4|avi|mov|mkv|flv|wmv)$/i;
    return terminacion.test(campo);
}

function esImagen(campo) {
    let terminacion = /\.(jpeg|jpg|png|gif|bmp|webp)$/i;
    return terminacion.test(campo);
}

function asignarVideo(campo, th) {
    let vid = document.createElement("video");
    vid.setAttribute("controls", "");
    vid.setAttribute("autoplay", "");
    vid.style.width = "200px";
    vid.style.height = "200px";
    vid.setAttribute("src", "" + campo + "");
    th.appendChild(vid); 
}

function asignarImagen(campo, th) {
    let imagen = document.createElement("img");
    imagen.style.width = "200px";
    imagen.style.height = "200px";
    imagen.onerror = function () {
        console.log("Me meti en el evento");
        let a = document.createElement("a");
        a.setAttribute("href", campo);
        a.textContent = "Link web";
        
        if (th.contains(imagen)) {
            th.removeChild(imagen);
            console.log("Borré la imagen");
        }
        console.log("pASE EL LINK");
        th.appendChild(a);
    };
    imagen.setAttribute("src", campo);
    th.appendChild(imagen);
}
