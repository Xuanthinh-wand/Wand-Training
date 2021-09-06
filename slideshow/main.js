const slideImage = document.querySelectorAll(".slide-image");
const slidesContainer = document.querySelector(".slides-container");
var currentDiv = document.getElementById("body");
let numberOfImages = slideImage.length;
let slideWidth = slideImage[0].clientWidth;
let currentSlide = 0;


function autoPlay(t) {
  setInterval(() => {
    next()
  }, t);
 
  
}
autoPlay(1000);
// Set up the slider

function init() {
  /*   
    slideImage[0] = 0
    slideImage[1] = 100%
    slideImage[2] = 200%
    */

  slideImage.forEach((img, i) => {
    img.style.left = i * 100 + "%";
  });

  slideImage[0].classList.add("active");

  createNavigationDots();
}

init();

// Create navigation dots

function createNavigationDots() {
  var navigationDots = document.createElement("div");
  navigationDots.classList.add("navigation-dots");
  document.body.insertBefore(navigationDots, currentDiv);
  for (let i = 0; i < numberOfImages; i++) {
    const dot = document.createElement("div");
    dot.classList.add("single-dot");
    navigationDots.appendChild(dot);

    dot.addEventListener("click", () => {
      goToSlide(i);
    });
  }

  navigationDots.children[0].classList.add("active");
  
}

// Next Button
var nextBtn = document.createElement("div");
nextBtn.classList.add("next-btn");
document.body.insertBefore(nextBtn, currentDiv);
var next = function () {
  if (currentSlide >= numberOfImages - 1) {
    goToSlide(0);
    return;
  }

  currentSlide++;
  goToSlide(currentSlide);
}
  nextBtn.addEventListener('click', () => {next()});



// Previous Button
var prevBtn = document.createElement("div");
prevBtn.classList.add("prev-btn");
document.body.insertBefore(prevBtn, currentDiv);
prevBtn.addEventListener("click", () => {
  if (currentSlide <= 0) {
    goToSlide(numberOfImages - 1);
    return;
  }

  currentSlide--;
  goToSlide(currentSlide);
});

// Go To Slide

function goToSlide(slideNumber) {
  slidesContainer.style.transform =
    "translateX(-" + slideWidth * slideNumber + "px)";

  currentSlide = slideNumber;

  setActiveClass();
}

// Set Active Class

function setActiveClass() {
  // Set active class for Slide Image

  let currentActive = document.querySelector(".slide-image.active");
  currentActive.classList.remove("active");
  slideImage[currentSlide].classList.add("active");

  //   set active class for navigation dots

  let currentDot = document.querySelector(".single-dot.active");
  currentDot.classList.remove("active");
  var navigationDots = document.querySelector('.navigation-dots');
  navigationDots.children[currentSlide].classList.add("active");
}
