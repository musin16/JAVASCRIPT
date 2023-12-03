window.onload = inicio;
function inicio() {
    obtenerGenero()
    genero.addEventListener("change", function () {
        obtenerJuego().then(obtenerImgJuegos);
    });
    juego.addEventListener("change", function () {
        obtenerImgJuegos();
    });
}
async function obtenerGenero() {
    fetch("./games.json").then(respuesta => {
        if (respuesta.ok) {
            return respuesta.json();
        }
    }).then(juegos => {
        var array = [];
        for (let i = 0; i < juegos.length; i++) {
            if (array.includes(juegos[i].genre.trim()))
                continue;
            else
                array.push(juegos[i].genre.trim());
        }
        for (let i = 0; i < array.length; i++) {
            genero.innerHTML += `<div><option value="${array[i]}">${array[i]}</option></div>`
        }
        obtenerJuego()
    }).catch(error => {
        console.log('Error:', error);
    });
}
function obtenerImgJuegos() {
    let pSelec = document.getElementById("genero").value;
    contenido.innerHTML = "";
    fetch("./games.json").then(respuesta => {
        if (respuesta.ok) {
            return respuesta.json();
        }
    }).then(juegos => {
        for (let i = 0; i < juegos.length; i++) {
            if (pSelec.includes(juegos[i].genre.trim()) && document.getElementById("juego").value.includes(juegos[i].title.trim())) {
                contenido.innerHTML= `<img src="${juegos[i].thumbnail}"/>`;
                break;
            }
        }
    }).catch(error => {
        console.log('Error:', error);
    });
}
async function obtenerJuego() {
    let jgId = document.getElementById("juego");
    let pSelec = document.getElementById("genero").value;
    contenido.innerHTML = "";
    jgId.innerHTML = "";
    fetch("./games.json").then(respuesta => {
        if (respuesta.ok) {
            return respuesta.json();
        }
    }).then(juegos => {
        for (let i = 0; i < juegos.length; i++) {
            if (pSelec.includes(juegos[i].genre.trim()))
                jgId.innerHTML += `<div><option value="${juegos[i].title.trim()}">${juegos[i].title.trim()}</option></div>`
        }
    }).catch(error => {
        console.log('Error:', error);
    }).finally(obtenerImgJuegos());
}