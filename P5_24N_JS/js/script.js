var alumno = "";
var arrayNom = [];
var media = [];
var  contAprobad = 0, contIgual = 0, contSuspendo = 0;
var arrayMediaSuperior5Suspensos = [];
fetch("http://moralo.atwebpages.com/menuAjax/dam1/getDam1.php").then(x => {
    if (x.ok) {
        return x.json();
    }
}).then(y => {
    for (let i = 0; i < y.length; i++) {
        var arrayNotas = [Number(y[i].nota1), Number(y[i].nota2), Number(y[i].nota3), Number(y[i].nota4), Number(y[i].nota5), Number(y[i].nota6)];
        var suma = 0;
        var igual = 0;
        for (let j = 0; j < arrayNotas.length; j++) {
            suma += arrayNotas[j];
            if (arrayNotas[0] == arrayNotas[j]) {
                igual++;
            }
        }
        if (igual == arrayNotas.length) {
            contIgual++;
        }
        media[i] = suma / arrayNotas.length;
        if (media[i] > 5) {
            if (Math.min(...arrayNotas) >= 5) {
                contAprobad++;
            } else {
                arrayNom[contSuspendo] = y[i].alumno;
                contSuspendo++;
            }
        }
    }
    var mex = Math.max(...media);
    console.log(mex);
    for (let i = 0; i < media.length; i++) {
        if (media[i] == mex) {
            alumno = y[i].alumno;
            break;
        }
    }
    var d=document.createElement("h1");
    d.textContent="CALIFICACIONES DE ALUMNOS";
    d.style.textAlign="center";
    var tabla = document.createElement("table");
    tabla.className = "tablas";
    tabla.textContent = "El alumno con mas nota: " + alumno + " " + mex;
    var tabla2 = document.createElement("table");
    tabla2.className = "tablas";
    tabla2.textContent = "El numero de alumnos aprobados: " + contAprobad;
    var tabla3 = document.createElement("table");
    tabla3.className = "tablas";
    tabla3.textContent = "El numero de alumnos con todas las notas iguales: " + contIgual;
    var tabla4 = document.createElement("table");
    tabla4.className = "tablas";
    let nombres=" ";
    arrayNom.forEach(element => {
        nombres+=element+" , ";
    });
    tabla4.textContent = "El numero de alumnos con media superior a 5 y con algun examen suspenso son :  " + contSuspendo + "=>" + nombres;
    document.body.appendChild(d);
    document.body.appendChild(tabla);
    document.body.appendChild(tabla2);
    document.body.appendChild(tabla3);
    document.body.appendChild(tabla4);
}).catch(error => {
    console.log("Error en la extracion de datos " + error);
});