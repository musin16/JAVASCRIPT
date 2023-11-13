window.onload = accion;
var accion = document.getElementById("cargar");
var bool = true;
var nombre,
  ciclo,
  modulos,
  curso,
  horas,
  comentario,
  modulosCargados,
  horasCargadas;
accion.onsubmit = function () {
        nombre = document.getElementById("nombre").value;
        ciclo = document.querySelector('input[name="radio"]').value;
        modulos = document.querySelectorAll('input[name="modulos"]:checked');
        curso = document.getElementById("selectCurso").value;
        horas = document.querySelectorAll("select[name=multipleselect]");
        comentario = document.getElementById("exampleFormControlTextarea1").value;

        let smCiclo = document.getElementById("smCiclo");
        let smMod = document.getElementById("smModulo");
        let smCurso = document.getElementById("smCurso");
        let smNombre = document.getElementById("smNombre");
        let smHora = document.getElementById("smHoras");

        modulosCargados = "";
        horasCargadas = "";
        validarModulo(smMod);
        obtenerDatos();
  return bool;
};
function validarModulo(sm) {
    if (Number(modulos.length) == 0) {
        bool = false;
        sm.innerHTML="*Opcion modulo obligatoria"
    }
}
function obtenerDatos() {
            for (let i = 0; i < modulos.length; i++) {
                if (modulos.length - 1 == i) {
                modulosCargados += modulos[i].value;
                } else {
                modulosCargados += modulos[i].value + ",";
                }
            }
            for (let i = 0; i < horas.length; i++) {
                if (horas.length - 1 == i) {
                horasCargadas += horas[i].value;
                } else {
                horasCargadas += horas[i].value + ",";
                }
            }   

            let mensaje =
                    "Ciclo: " +
                    ciclo +
                    "\nModulos: " +
                    modulosCargados +
                    "\nNombre: " +
                    nombre +
                    "\nCurso: " +
                    curso +
                    "\nHoras asistidas: " +
                    horasCargadas +
                    "\nComentario: " +
                    comentario; 
             alert(mensaje);
}
