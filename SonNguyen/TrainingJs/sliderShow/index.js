var slideIndex = 1;
var text = document.getElementsByClassName("content-p");
var button = document.getElementById('content-setting');
var config = {
    autoTime: 6000,
    enableAuto: true,
    showText: true,
}

showSlides(slideIndex);
displayText();

function check(t) {

    if (t == true) {
        config.showText = true;
    } else {
        config.showText = false;
    }
    displayText();
}

function displayText() {
    if (config.showText == true) {
        for (i = 0; i < text.length; i++) {
            text[i].style.display = "block";
        };
    } else {
        for (i = 0; i < text.length; i++) {
            text[i].style.display = "none";
        };
    }
}

if (config.enableAuto == true) {
    clearInterval(itv);
    var itv = setInterval(function() {
        slideIndex++;
        showSlides(slideIndex);
    }, config.autoTime);
}

function plusSlides(n) {
    clearInterval(itv);
    showSlides(slideIndex += n);
    if (config.enableAuto == true) {
        clearInterval(itv);
        var itv = setInterval(function() {
            var m = slideIndex++;
            showSlides(slideIndex = m);
        }, config.autoTime);
    }
}

function currentSlide(n) {
    clearInterval(itv);
    showSlides(slideIndex = n);
    if (config.enableAuto == true) {
        clearInterval(itv);
        var itv = setInterval(function() {
            var m = slideIndex++;
            showSlides(slideIndex = m);
        }, config.autoTime);
    }
}


function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slider-group");
    var dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    };

    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    if (slideIndex > slides.length) { slideIndex = 1 };
    if (n < 1) { slideIndex = slides.length };
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
    document.getElementById('slider-number').innerHTML = slideIndex + '/' + slides.length;

};

document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
            var n = --slideIndex;
            break;
        case 39:
            var n = ++slideIndex;
            break;
    }
    clearInterval(itv);
    showSlides(slideIndex = n);
    if (config.enableAuto == true) {
        var itv = setInterval(function() {
            var m = slideIndex++;
            showSlides(slideIndex = m);
        }, autoTime);
    }
};

function openSetting() {
    button.style.display = "block";
}

function closeSetting() {
    button.style.display = "none";
}