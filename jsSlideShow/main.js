var currentSlide = 0;

function runSlide(config) {
    var slidesContainer = document.querySelector(config.slideContainerClass);
    var slideImage = document.querySelectorAll(config.imageClass);
    var text = document.querySelectorAll(config.textClass)
    var numberOfImages = slideImage.length;
    var slideWidth = slideImage[0].clientWidth;

    var showText = config.showContent;
    var timeInterval = config.timeToAuto;
    var automate = config.enableAutoSlide;

    for (var i = 0; i < numberOfImages; i++) {
        if (showText) {
            text[i].style.display = "block"
        }
        else {
            text[i].style.display = "none"
        }
    }

    if (automate) {
        setInterval(function () {
            nextSlide();
        }, timeInterval);
    }
    else {
        clearInterval();
    }

    function init() {
        slideImage.forEach((img, i) => {
            img.style.left = i * 100 + "%";
        });
        slideImage[0].classList.add("active");
        createNavigationDots(numberOfImages);
    }

    init();

    if (numberOfImages >= 2) {
        var nextBtn = document.createElement("div")
        nextBtn.classList.add("next-btn")
        nextBtn.innerHTML = "&#10095;"
        document.body.appendChild(nextBtn)
        var currentNextBtn = document.getElementById("wrapper");
        document.body.insertBefore(nextBtn, currentNextBtn);

        var prevBtn = document.createElement("div")
        prevBtn.classList.add("prev-btn")
        prevBtn.innerHTML = "&#10094;"
        document.body.appendChild(prevBtn)
        var currentPreBtn = document.getElementById("wrapper");
        document.body.insertBefore(prevBtn, currentPreBtn);

        // next btn

        var nextSlide = function () {
            if (currentSlide >= numberOfImages - 1) {
                goSlide(0);
                // currentSlide = 0;
                return;
            }
            currentSlide++;
            goSlide(currentSlide);
        }
        nextBtn.addEventListener("click", function () {
            nextSlide();
        })

        // pre btn
        var preSlide = function () {
            if (currentSlide <= 0) {
                goSlide(numberOfImages - 1);
                return;
            }
            currentSlide--;
            goSlide(currentSlide);
        }
        prevBtn.addEventListener("click", function () {
            preSlide();
        })

    }

    function createNavigationDots(numberDots) {
        var navigationDots = document.createElement("div");
        navigationDots.classList.add("navigation-dots")

        for (let i = 0; i < numberDots; i++) {
            const singleDot = document.createElement("div");
            singleDot.classList.add("single-dot")
            navigationDots.appendChild(singleDot);

            singleDot.addEventListener("click", () => {
                goSlide(i);
            });
        }
        navigationDots.children[0].classList.add("active");

        // add the newly created element and its content into the DOM
        var currentDiv = document.getElementById("body");
        document.body.insertBefore(navigationDots, currentDiv);
    }

    // go to slide
    function goSlide(slideNumber) {
        slidesContainer.style.transform = "translateX(-" + slideWidth * slideNumber + "px)";
        currentSlide = slideNumber;
        setActiveClass();
    }

    function setActiveClass() {
        //set active image
        var currentClassImage = document.querySelector(".slide-image.active");
        currentClassImage.classList.remove("active");
        slideImage[currentSlide].classList.add("active");

        //set active dots
        var currentDot = document.querySelector(".single-dot.active");
        currentDot.classList.remove("active");
        var navigationDots = document.querySelector(".navigation-dots");
        navigationDots.children[currentSlide].classList.add("active");
    }


}


