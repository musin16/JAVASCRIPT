window.onload = inicio;
function inicio() {
    obtenerGenero()
    genero.addEventListener("change", function () {
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
        obtenerImgJuegos();
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
            if (pSelec.includes(juegos[i].genre.trim())) {
                contenido.innerHTML+= `<img src="${juegos[i].thumbnail}"/>`;
            }
        }
    }).catch(error => {
        console.log('Error:', error);
    });
}