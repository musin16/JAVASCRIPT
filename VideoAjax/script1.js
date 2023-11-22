mostrar.onclick = function () {
    fila.className="claseDiv";
    while(fila.firstChild){
        fila.removeChild(fila.firstChild);
    }
    fetch("http://camacho.atwebpages.com/webcam/getWebcam.php").then(comprobar => {
            if (comprobar.ok) {
                // c0nvierto aqui la respuesta a JSON
                return comprobar.json(); 
            }
        }).then(datos => {
            datos.forEach(campos => {
                let videoo = document.createElement("video");
                videoo.setAttribute("autoplay","");
                videoo.setAttribute("controls","");
                videoo.className="video";
                let doc = document.createElement("source");
                doc.innerHTML="";
                doc.setAttribute("src", campos.url);
                doc.setAttribute("type", "video/mp4");
                videoo.appendChild(doc);
                fila.appendChild(videoo);
            });
        }).catch(error => {
            console.error("Error en la solicitud:", error);
        });
};