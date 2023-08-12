function load(name) {
    url = ("../../md/"+name+".md");
    document.getElementById("md-content").innerHTML = 
    `<zero-md src="`+url+`">`;
    toggle = false
    mediaMenu()
}

loadseit();
function loadseit() {
    var href = window.location.href
    var port = href.substr(href.indexOf("#")+1, href.length);
    if (href.indexOf("#") == -1) {} else {
    url = ("../../md/"+port+".md");
    document.getElementById("md-content").innerHTML = 
    `<zero-md src="`+url+`">`;
}
}
var toggle = true
function mediaMenu() {
    if (toggle == true) {
        document.getElementById("media-menu-docs").style = "display: block;"
        document.getElementById("menu").innerHTML = `<i class="bi bi-x"></i>`
        toggle = false
    } else {
        document.getElementById("menu").innerHTML = `<i class="bi bi-list"></i>`
        document.getElementById("media-menu-docs").style = "display: none;"
        toggle = true
    }
}