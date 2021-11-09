//Definerer globale variabler
let slides = document.getElementsByClassName("slide");
let dots = document.getElementsByClassName("dot");
let currentSlide = 0;
let loop;
slideshow();

//Denne funksjonen får slideshowet på forsiden til å gå, samt at "dottene" har riktig farge
function slideshow() {
    //Denne if-setningen kjører for alle bildene utenom siste
    if (currentSlide < (slides.length - 1)) {
        //Hvis slideshowet begynner på nytt må det siste bildet skjules
        if (currentSlide == 0) {
            slides[5].style.display = "none";
            slides[currentSlide].style.display = "block";
            dots[5].style.backgroundColor = "white";
            dots[currentSlide].style.backgroundColor = "#4e765c";
            dots[5].style.backgroundColor = "white";
            dots[currentSlide].style.backgroundColor = "#4e765c";
        //Ellers skjules bare forrige bilde og neste vises.
        } else {
            slides[currentSlide - 1].style.display = "none";
            slides[currentSlide].style.display = "block";
            dots[currentSlide - 1].style.backgroundColor = "white";
            dots[currentSlide].style.backgroundColor = "#4e765c";
        }
        currentSlide++;
    //Denne kjører bare hvis det siste bildet i rekkefølgen er det som vises
    } else {
        slides[currentSlide - 1].style.display = "none";
        slides[currentSlide].style.display = "block";
        dots[currentSlide - 1].style.backgroundColor = "white";
        dots[currentSlide].style.backgroundColor = "#4e765c";
        currentSlide = 0;
    }
    //Bildet endres hvert tredje sekund
    loop = setTimeout(slideshow, 3000)
}

//Funksjon som endrer bilde hvis brukeren trykker på dottene
function switchSlide(n) {
    //Først skjules alle bildene.
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].style.backgroundColor = "white";
    }
    //Loopen som foregår stoppes, før funksjonen kalles på nytt og starter en ny loop
    clearTimeout(loop);
    currentSlide = n;
    slideshow();
}