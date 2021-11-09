//Boolean-variabler som bestemmer om hele teksten skal vises eller ikke
let one = true;
let two = true;
let three = true;

//Funksjon som viser/skjuler ekstra tekst på hvert arrangement, funksjonen aktiveres av en knapp.
function hvisTekst1() {
    if (one) {
        document.getElementById("hiddenText1").style.display = "contents";
        document.getElementById("lesmer1btn").innerHTML = "Les mindre";
        one = false;
    } else {
        document.getElementById("hiddenText1").style.display = "none";
        document.getElementById("lesmer1btn").innerHTML = "Les mer";
        one = true;
    }
}

//Identisk funksjon som den over.
function hvisTekst2() {
    if (two) {
        document.getElementById("hiddenText2").style.display = "contents";
        document.getElementById("lesmer2btn").innerHTML = "Les mindre";
        two = false;
    } else {
        document.getElementById("hiddenText2").style.display = "none";
        document.getElementById("lesmer2btn").innerHTML = "Les mer";
        two = true;
    }
}

//Identisk funksjon som den over.
function hvisTekst3() {
    if (three) {
        document.getElementById("hiddenText3").style.display = "contents";
        document.getElementById("lesmer3btn").innerHTML = "Les mindre";
        three = false;
    } else {
        document.getElementById("hiddenText3").style.display = "none";
        document.getElementById("lesmer3btn").innerHTML = "Les mer";
        three = true;
    }
}
