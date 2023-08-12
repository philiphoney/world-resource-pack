// Cookie script
// Cookie loader
window.onload = function screen_test() {
  if (
    document.cookie
      .split(";")
      .some((item) => item.trim().startsWith("verified="))
  ) {
    document.getElementById("banner-content").style = "display: none;";
  } else {
    document.getElementById("banner-content").style = "display: flex;";
  }
};

function setCookie() {
  Cookies.set("verified", "Approved", { expires: 30 });
  document.getElementById("banner-content").style = "display: none;";
}

var pwd = "";

if (type == 1) {
  pwd = "../";
}
if (type == 2) {
  pwd = "../../";
}
if (type == 3) {
  pwd = "../../../";
}

// up scroll
window.onscroll = function () {
  scrollFunction();
};
window.onload = function joynbutton() {
  document.getElementById("body").innerHTML +=
    '<div id="to-top"><a href="##" onclick="topFunction()"><i class="bi bi-arrow-up-short"></i></a></div>';

  document.getElementById("header").innerHTML =
    `
<div id="header-content">
<div class="logo-header-media"><a href="https://worldresourcepack.com/"><div class="logo-img"><img src="https://i.ibb.co/xHjJdYP/Logo-new.png" alt=""></div></a></div>
<div id="menu-media"><a id="icon" class="menu-media-a" onclick="meun_media_click()" href="###"><span id="icon-menu-media"><i class="bi bi-justify"></i></span></a></div>
</div></div>
<div id="media-menu" style="display: none;">
<div class="nav-media">
<div><a class="footer-nav-bottom-a-media" href="` +
    pwd +
    `">Home</a></div>
<div><a class="footer-nav-bottom-a-media" href="` +
    pwd +
    `resource-packs/fullbright">Fullbright</a></div>
<div><a class="footer-nav-bottom-a-media" href="` +
    pwd +
    `resource-packs/clever">Clever</a></div>
<div><a class="footer-nav-bottom-a-media" href="` +
    pwd +
    `resource-packs/raidenpack">RaidenPack</a></div>
<div><a class="footer-nav-bottom-a-media" href="` +
    pwd +
    `support">Support</a></div>
</div></div>
<div id="meun-desktop-header">
<div id="meun-desktop-header-all">
<div class="logo-header"><a href="https://worldresourcepack.com/"><div class="logo-img"><img src="https://i.ibb.co/xHjJdYP/Logo-new.png" alt=""></div></a></div>
<div id="list-header-1">
<a class="list-header-a" href="` +
    pwd +
    `">Home</a>
<a class="list-header-a" href="` +
    pwd +
    `resource-packs/fullbright">Fullbright</a>
<a class="list-header-a" href="` +
    pwd +
    `resource-packs/clever">Clever</a>
<a class="list-header-a" href="` +
    pwd +
    `resource-packs/raidenpack">RaidenPack</a>
<a class="list-header-a" href="` +
    pwd +
    `support">Support</a>
</div></div>`;
};

function topFunction() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("to-top").style = "display: block;";
  } else {
    document.getElementById("to-top").style = "display: none;";
  }
}

// header