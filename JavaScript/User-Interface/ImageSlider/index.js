const slides = document.getElementsByClassName("carousel-item");
let slidePosition = 0;
const totalSlides = slides.length;

const navCircles = document.querySelector(".carousel-nav-circles");
const navCircle1 = document.getElementById("carousel-nav-1");
const navCircle2 = document.getElementById("carousel-nav-2");
const navCircle3 = document.getElementById("carousel-nav-3");

document.getElementById("carousel-button-next").addEventListener("click", moveToNextSlide);
document.getElementById("carousel-button-prev").addEventListener("click", moveToPrevSlide);

navCircles.addEventListener("click", (e) => {
	e.preventDefault();

	const navCirclePosition = e.target.id;

	removeNavCircleColors(navCircle1, navCircle2, navCircle3);
	hideAllSlides();

	switch (navCirclePosition) {
		case "carousel-nav-1":
			moveToSlide(0);
			// displaySlidePosition(0);
			navCircle1.classList.add("current-slide-position");
			break;
		case "carousel-nav-2":
			moveToSlide(1);
			// displaySlidePosition(1);
			navCircle2.classList.add("current-slide-position");
			break;
		case "carousel-nav-3":
			moveToSlide(2);
			// displaySlidePosition(2);
			navCircle3.classList.add("current-slide-position");
			break;
	}
});

function moveToNextSlide() {
	hideAllSlides();
	removeNavCircleColors(navCircle1, navCircle2, navCircle3);

	if (slidePosition === totalSlides - 1) {
		slidePosition = 0;
	} else {
		slidePosition++;
	}
	slides[slidePosition].classList.add("carousel-item-visible");

	displaySlidePosition(slidePosition);
}

function moveToPrevSlide() {
	hideAllSlides();
	removeNavCircleColors(navCircle1, navCircle2, navCircle3);

	if (slidePosition === 0) {
		slidePosition = totalSlides - 1;
	} else {
		slidePosition--;
	}
	slides[slidePosition].classList.add("carousel-item-visible");

	displaySlidePosition(slidePosition);
}

function hideAllSlides() {
	for (let slide of slides) {
		slide.classList.remove("carousel-item-visible");
		slide.classList.add("carousel-item-hidden");
	}
	return;
}

function moveToSlide(slideNumber) {
	return slides[slideNumber].classList.add("carousel-item-visible");
}

function displaySlidePosition(slideNumber) {
	if (slideNumber === 0) {
		return navCircle1.classList.add("current-slide-position");
	}
	if (slideNumber === 1) {
		return navCircle2.classList.add("current-slide-position");
	}
	if (slideNumber === 2) {
		return navCircle3.classList.add("current-slide-position");
	}
}

function removeNavCircleColors(el1, el2, el3) {
	el1.classList.remove("current-slide-position");
	el2.classList.remove("current-slide-position");
	el3.classList.remove("current-slide-position");
	return;
}

function transitionEveryFiveSeconds() {
	setInterval(moveToNextSlide, 5000);
}
transitionEveryFiveSeconds();