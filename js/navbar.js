document.write(`
<ul class="nav"> 
       <li id="indeximg"> <a class="navlink" href="index.html" > <img src="img/logo wc.png" id="navbar_logo" width="230px" height="145px"> </a></li>
        <li> <a class="navlink" href="meny.html"> MENY </a> </li>
        <li> <a class="navlink" href="kampanjer.html"> KAMPANJER </a> </li>
        <li> <a class="navlink" href="arrangementer.html"> ARRANGEMENTER </a> </li>
        <li> <a class="navlink" href="omoss.html"> OM OSS </a> </li>
    </ul>
`)
<<<<<<< HEAD


document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
          document.getElementById('.nav').classList.add('fixed-top');
          // add padding top to show content behind navbar
          navbar_height = document.querySelector('.navbar').offsetHeight;
          document.body.style.paddingTop = navbar_height + 'px';
        } else {
          document.getElementById('.nav').classList.remove('fixed-top');
           // remove padding top from body
          document.body.style.paddingTop = '0';
        } 
    });
  }); 
=======
>>>>>>> f893faf9a0edb9df97b9684092ebf92cc11f1200
