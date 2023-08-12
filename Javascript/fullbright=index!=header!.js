function slide(){
     let slideValue = document.getElementById("slider").value;
     document.getElementById("my-img").style.clipPath = "polygon(0 0," + slideValue + "% 0," + slideValue + "% 100%, 0 100%)";
}

document.getElementById("title-meta").innerText = "Fullbright";


var menuClik = false;
var media_clik_menu = false;
var more_buttom_ = false;

function meun_media_click() {
    if (media_clik_menu == true) {

        setTimeout (time_evend, 186); function time_evend() {
           document.getElementById("icon-menu-media").innerHTML = '<i class="bi bi-justify"></i>'
           document.getElementById("media-menu").style = ("display: none");
           document.getElementById("main-media").style = ("display: block");
           document.getElementById("footer").style = ("display: black");
            }
            media_clik_menu = false;

    } else {
        window.scrollTo({top: 0});
        media_clik_menu = true;
        document.getElementById("icon-menu-media").innerHTML = '<i class="bi bi-x"></i>'
        document.getElementById("icon-menu-media").style = "animation: menu-ani 1s;";
        document.getElementById("media-menu").style = ("display: block");
        document.getElementById("main-media").style = ("display: none");
        document.getElementById("footer").style = ("display: none");
    }
}



var a = 0
window.setInterval('loop()', 5000); function loop() {
    if (a == 0) {
        document.getElementById("place-m").innerHTML = "Modrinth"
        a = 1
    } else {
        document.getElementById("place-m").innerHTML = "PM"
        a = 0
    }
} 