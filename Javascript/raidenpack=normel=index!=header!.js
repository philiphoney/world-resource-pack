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

function meun_desktop_click() {

    if (menuClik == true) {
        document.getElementById("meun-desktop-icon").innerHTML = "expand_more";
        document.getElementById("meun-desktop-header").style = ("display: none;");
        menuClik = false;
    } else {
        document.getElementById("meun-desktop-icon").innerHTML = "expand_less";
        document.getElementById("meun-desktop-header").style = ("display: flex; animation: menu-evemt 1s; height: 50px; background-color: var(--color-background-color-header-2); backdrop-filter: saturate(180%) blur(20px);");
        document.getElementById("header-content").style = ("background-color: var(--color-body-color); box-shadow: -5px 1px 10px 1px rgba(0, 0, 0, 0.163);");
        menuClik = true;
        }
}