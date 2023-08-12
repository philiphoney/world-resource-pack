window.setInterval('loop()', 0); function loop() {
    var mes = document.getElementById("mes-text").value;
    var form = document.getElementById('form');
    if (mes == "") {} else{
    var indexMes = mes.indexOf("http");
    var indexMes2 = mes.indexOf("@");
    if (indexMes2 == -1) {} else {indexMes = 0}
    if (indexMes == -1) {
    form.action = "https://formspree.io/f/xwkywwkb";
    document.getElementsByClassName("content-form-in")[0].style.borderBottom = "5px solid lightgreen"}
    // Black Zone
    else {
    form.action = "form-security";
    console.log("Form Security: ERROR -> fs0001");
    document.getElementsByClassName("content-form-in")[0].style.borderBottom = "5px solid lightcoral"
}}} 