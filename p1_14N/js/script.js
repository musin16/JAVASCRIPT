btn1.onclick = function() {
    c1.innerHTML = Math.round(Math.random() * 1000);
    if (Number(c1.innerHTML) > 500) {
        c1.style.backgroundColor = "Yellow";
        c1.style.color="Blue";
    } else {
        c1.style.backgroundColor = "Green";
        c1.style.color="red";
    }
}
