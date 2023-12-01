window.onload = inicio;
function inicio() {
    obtenerPaises()
        .then(obtenerDeportes)
        .then(obtenerEquipos)
        .then(obtenerEquiposPorLiga)
        .catch((error) => {
            console.error("Error:", error);
        });
    document.getElementById("pais").addEventListener("change", function () {
        obtenerEquipos().then(obtenerEquiposPorLiga).catch(error => {
            console.log("Error " + error);
        });
    });
    document.getElementById("liga").addEventListener("change", function () {
        obtenerEquiposPorLiga();
    });
}
async function obtenerPaises() {
    console.log("entro en datos")
    const url = " https://www.thesportsdb.com/api/v1/json/3/all_countries.php";
    const objeto = await fetch(url)
    try {
        const data = await objeto.json();
        console.log(data);
        let contenedor = document.getElementById("pais");
        for (let i = 0; i < data.countries.length; i++)
            contenedor.innerHTML += `
        <div>
        <option value=${data.countries[i].name_en}>${data.countries[i].name_en}</option></div>`
    } catch (error) {
        alert(error);
    }
}
async function obtenerDeportes() {
    console.log("entro en datos")
    const url = " https://www.thesportsdb.com/api/v1/json/3/all_leagues.php";
    const response = await fetch(url)
    try {
        const data = await response.json();
        console.log(data);
        let contenedor = document.getElementById("liga");
        contenedor.innerHTML = '';
        for (let i = 0; i < data.leagues.length; i++)
            contenedor.innerHTML += `
                <div>
                    <option value=${data.leagues[i].strLeague}>${data.leagues[i].strLeague}</option>
                </div>`
    } catch (error) {
        alert(error);
    }
}

async function obtenerEquipos() {
    console.log("entro en datos");
    let pSelecion = document.getElementById("pais").value;
    const url = `https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?s=Soccer&c=${pSelecion}`;
    const response = await fetch(url);
    var arrayE = [];
    try {
        const data = await response.json();
        console.log(data);
        let contenedor = document.getElementById("contenido");
        contenedor.innerHTML = '';
        liga.innerHTML = '';
        for (let i = 0; i < data.teams.length; i++) {
            for (let j = 0; j < 7; j++) {
                if (j != 0) {
                    j++;
                    let tLigas = `strLeague${j}`;
                    let lValor = data.teams[i][tLigas];
                    if (lValor != "" && lValor != "null") {
                        if (!arrayE.includes(lValor)) {
                            arrayE.push(lValor);
                            liga.innerHTML +=
                                `<div>
                            <option value="${lValor}">${lValor}</option>
                        </div>`;
                        } else {
                            let lValor = data.teams[i].strLeague;
                            if (!arrayE.includes(lValor)) {
                                arrayE.push(lValor);
                                liga.innerHTML +=
                                    `<div>
                                <option value="${lValor}">${lValor}</option>
                            </div>`;
                            }
                        }
                    }
                }
            }
        }
    } catch (error) {
        console.log(error);
    }
}
async function obtenerEquiposPorLiga() {
    console.log("entro en liga")
    let pSelecion = document.getElementById("pais").value;
    let lSeleccion = document.getElementById("liga").value;
    const url = `https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?s=Soccer&c=${pSelecion}`;
    const response = await fetch(url);
    try {
        const data = await response.json();
        console.log(data);
        let contenedor = document.getElementById("contenido");
        contenedor.innerHTML = '';
        //
        var im = [];
        var imNom = [];
        for (let i = 0; i < data.teams.length; i++) {
            for (let j = 0; j < 7; j++) {
                if (j != 0) {
                    j++;
                    let tLigas = `strLeague${j}`;
                    let lValor = data.teams[i][tLigas];
                    if (lValor != "" && lValor != "null") {
                        if (lSeleccion.includes(lValor)) {
                            if (!im.includes(data.teams[i].strTeamBadge)) {
                                im.push(data.teams[i].strTeamBadge);
                                imNom.push(data.teams[i].strTeam);
                            }
                        }
                    }
                } else {
                    let lValor = data.teams[i].strLeague;
                    if (lValor != "" && lValor != "null") {
                        if (lSeleccion.includes(lValor)) {
                            if (!im.includes(data.teams[i].strTeamBadge)) {
                                im.push(data.teams[i].strTeamBadge);
                                imNom.push(data.teams[i].strTeam);
                            }
                        }
                    }
                }
            }
        }
        for (let i = 0; i < im.length; i++) {
            contenedor.innerHTML += `
            <div>
                <img src="${im[i]}" width="200px"/>
                <p>${imNom[i]}</p>
            </div> `;
        }
        im=[];
        imNom=[];
    } catch (error) {
        console.log(error);
    }
}