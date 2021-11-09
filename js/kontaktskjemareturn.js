function seSvar() {
    var x = document.getElementById("sendSvar");
    var txt = "";
    var i;
    for (i = 0; i < x.length; i++) {
      txt = txt + x.elements[i].value + "<br>";
    }
    document.getElementById("svar_kontaktskjema").innerHTML = txt;
  }