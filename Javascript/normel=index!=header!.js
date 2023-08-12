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


function more_buttom() {
    if (more_buttom_ == true) {
        document.getElementById("box-index-2").style = ("display: none;");
        document.getElementById("box-index-2-media").style = ("display: none;");
        more_buttom_ = false;

    } else {
        document.getElementById("box-index-2").style = ("display: block;");
        document.getElementById("box-index-2-media").style = ("display: block;");
        more_buttom_ = true;
    }
}