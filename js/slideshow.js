var slides = document.getElementsByClassName("slide");
var dots = document.getElementsByClassName("dot");
var currentSlide = 0;
var loop;
slideshow();

function slideshow() {
    if (currentSlide < (slides.length - 1)) {
        if (currentSlide == 0) {
            slides[5].style.display = "none";
            slides[currentSlide].style.display = "block";
            dots[5].style.backgroundColor = "white";
            dots[currentSlide].style.backgroundColor = "#4e765c";
            dots[5].style.backgroundColor = "white";
            dots[currentSlide].style.backgroundColor = "#4e765c";
        } else {
            slides[currentSlide - 1].style.display = "none";
            slides[currentSlide].style.display = "block";
            dots[currentSlide - 1].style.backgroundColor = "white";
            dots[currentSlide].style.backgroundColor = "#4e765c";
        }
        currentSlide++;
    } else {
        slides[currentSlide - 1].style.display = "none";
        slides[currentSlide].style.display = "block";
        dots[currentSlide - 1].style.backgroundColor = "white";
        dots[currentSlide].style.backgroundColor = "#4e765c";
        currentSlide = 0;
    }
    loop = setTimeout(slideshow, 3000)
}

function switchSlide(n) {

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].style.backgroundColor = "white";
    }
    clearTimeout(loop);
    currentSlide = n;
    slideshow();
}