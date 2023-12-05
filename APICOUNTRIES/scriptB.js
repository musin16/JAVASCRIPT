var campos = [];
window.onload = inicio;

function inicio() {
    let btn = document.getElementById("listar1");
    btn.onclick = function () {
        fetch("./rescountries.json")
            .then((response) => response.json())
            .then((datos) => {
                console.table(datos);
                cargarTabla(datos);
            });
    };
}

function cargarTabla(datos) {
    tabla1.innerHTML = "";
    let cabecera = Object.keys(datos[0]);
    let tr = document.createElement("tr");
    tr.style.border = "5px solid black";
    cabecera.forEach(cab => {
        if (["name", "capital", "area", "population", "flags"].includes(cab)) {
            let th = document.createElement("th");
            th.textContent = cab;
            th.style.border = "5px solid black";
            tr.appendChild(th);
        }
    });
    tabla1.appendChild(tr);
    cargarContenido(datos, cabecera);
}

function cargarContenido(datos, cabecera) {
    datos.forEach(dato => {
        if (dato.region == "Europe") {
            let tr = document.createElement("tr");
            tr.style.border = "5px solid black";
            cabecera.forEach(cab => {
                if (["name", "capital", "area", "population", "flags"].includes(cab)) {
                    let th = document.createElement("th");
                    th.style.border = "5px solid black";
                    if (cab == "name") {
                        th.textContent = dato[cab].official;
                    } else if (cab == "flags") {
                        aplicarImagen(dato, cab, tr, th);
                    } else {
                        th.textContent = dato[cab];
                    }
                    tr.appendChild(th);
                    tabla1.appendChild(tr);
                }
            });
        }
    });
}

function aplicarImagen(dato, cabecera, tr, th) {
    let img = document.createElement("img");
    img.style.width = "200px";
    img.style.height = "200px";
    th.style.border = "5px solid black";
    img.setAttribute("src", dato[cabecera].png);
    tr.appendChild(img);
}