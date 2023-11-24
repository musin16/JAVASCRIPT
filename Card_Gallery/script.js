var equip = document.getElementsByClassName("equipo");
fetch("http://moralo.atwebpages.com/ajaxListar/getTodoPersonal.php").then(x => {
    if (x.ok) {
        return x.json();
    }
}).then(y => {
    for (let i = 0; i < equip.length; i++) {
        let di = document.createElement("div");
        di.className = "equipo_foto";
        let im = document.createElement("img");
        console.log("error aqui"+y[i].imagen);
        im.setAttribute("src",y[i].imagen);;
        im.className = "img-fluid";
        console.log("error aqui"+y[i].imagen);
        let h = document.createElement("h3");
        h.innerHTML = y[i].nombre;
        let p2 = document.createElement("p");
        p2.innerHTML = y[i].cargo;
        di.appendChild(im);
        di.appendChild(h);
        di.appendChild(p2);
        
        let d2 = document.createElement("div");
        d2.className = "equipo_texto";
        let sp = document.createElement("span");
        sp.innerHTML = y[i].direccion;
        d2.appendChild(sp);
        equip[i].appendChild(di);
        equip[i].appendChild(d2);
    }
}).catch(error => {
    console.log("Error al ejecutar la sentencia" + error)
});