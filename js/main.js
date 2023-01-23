/* --------------------------- Slide Show -------------------------------- */

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  
  // alle sheets op display none
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // huidige sheet zichtbaar maken
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

/* --------------------------- Burger Menu -------------------------------- */

const hamburger =  document.querySelector(".hamburger");
const navMenu =  document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})