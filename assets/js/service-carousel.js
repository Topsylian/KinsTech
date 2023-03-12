const Slides = document.querySelectorAll(".service-cell");

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  for (i = 0; i < Slides.length; i++) {
    Slides[i].style.display = "none";
	}
  slideIndex++;
	if (slideIndex > Slides.length) {
    slideIndex = 1;
	}
	Slides[slideIndex - 1].style.display = "block";
	setTimeout(showSlides, 5000);
}
