const sumaNom = ["Partido A ", "Partido B ", "Partido C ", "Partido D "];
const objetoRepVot = [ [0, 0, 0, 0],[0, 0, 0, 0]];
//const sumaRepresntantes = [0, 0, 0, 0];
//const sumaVotos = [0, 0, 0, 0];
const sumaNomParido = ["", "", "", ""];
fetch("http://moralo.atwebpages.com/menuAjax/Provincias/getProvincias.php").then(x => {
    if (x.ok) {
        return x.json();
    }
}).then(y => {
    for (let i = 0; i < y.length; i++) {
        const arrayVa=[Number(y[i].votosPA),Number(y[i].votosPB), Number(y[i].votosPC),Number(y[i].votosPD)];
        var maxima = Math.max(...arrayVa);
        console.log(maxima);
        for (let j = 0; j < arrayVa.length; j++) {
            objetoRepVot[1][j] += arrayVa[j];
            if (arrayVa[j] == maxima) {
                objetoRepVot[0][j]  +=Number(y[i].Representantes);
                sumaNomParido[j]+=y[i].nombreProvincia+",";
            }
        }
    }
    let h = document.createElement("h4");
    h.textContent = "Mostrar representatantes totales de cada partido";
    document.body.appendChild(h);
    for (let j = 0; j < sumaNom.length; j++) {
        let pa = document.createElement("p");
        pa.textContent = sumaNom[j] +  objetoRepVot[0][j] ;
        document.body.appendChild(pa);
    }
    let h2 = document.createElement("h4");
    h2.textContent = "Saca un listado con las provincias en las que ha ganado cada partido";
    document.body.appendChild(h2);
    for (let j = 0; j < sumaNom.length; j++) {
        let pa = document.createElement("p");
        pa.textContent = sumaNom[j] + sumaNomParido[j];
        document.body.appendChild(pa);
    }
     let h1 = document.createElement("h4");
     h1.textContent = "Un listado con los votos totales";
     document.body.appendChild(h1);
    for (let j = 0; j < sumaNom.length; j++) {
        let pa = document.createElement("p");
        pa.textContent = sumaNom[j] +  objetoRepVot[1][j] ;
        document.body.appendChild(pa);
    }
}).catch(error => {
    console.log("Error en la extracion de datos " + error);
});