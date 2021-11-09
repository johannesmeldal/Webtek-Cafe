var one = true;
var two = true;
var three = true;

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
