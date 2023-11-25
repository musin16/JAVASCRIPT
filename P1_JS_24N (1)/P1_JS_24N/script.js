var vd1=[];
fetch("http://camacho.atwebpages.com/webcam/getWebcam.php").then(x => {
    if(x.ok){
        return x.json();
    }
}).then(y => {
    vd1=y;
}).catch(error => {
    console.log("Error en la extracion de datos " + error);
});
setInterval(imagenAleatoria,"1000");
function imagenAleatoria(){
    parrafo.innerHTML="";
    let v=document.createElement("video");
    v.setAttribute("autoplay","");
    v.setAttribute("controls","");
    v.setAttribute("width","300px");
    v.setAttribute("height","200px");
    v.setAttribute("src",vd1[Math.floor(Math.random()*vd1.length)].url);
    parrafo.appendChild(v);
}

fetch("http://camacho.atwebpages.com/carouselCiudades2/getCiudades.php").then(x => {
    if(x.ok){
        return x.json();
    }
}).then(y => {
    y.filter(y=>{
        y.ciudad_poblacion>=200;
    });
    y.forEach(ele => {
      a.innerHTML+="<tr><th scope='col'>"+ele.ciudad_nombre+"</th>"+
                "<th scope='col'>"+ele.ciudad_ID+"</th>"+
                "<th scope='col'>"+ ele.video +"</th>"+
                "<th scope='col'>"+ele.ciudad_poblacion+"</th>"+
                "<th scope='col'><img src='"+ele.imagen+"'width='360' height='200'/></th>"+
                "<th scope='col'>"+ele.mapa+"</th>"+
              "</tr>";
    });
}).catch(error => {
    console.log("Error en la extracion de datos " + error);
});