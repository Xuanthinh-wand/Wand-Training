var config = {
    classNameSlide: "mySlides",
    classNameGroupDot: "group-dot",
    classNamePrev: "prev",
    classIdPause: "pause",
    classNameNext: "next"
}
var time;
var slideIndex = 1;
createDot(config);
showSlides(slideIndex);
function autoNextSlide() {
    slideIndex++;
    showSlides(slideIndex);
}
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    clearInterval(time);
    time = setInterval(autoNextSlide, 3000);
    var slides = document.getElementsByClassName(config.classNameSlide);
    var dots = document.getElementsByClassName("dot");
    for (var i = 0;i < slides.length;i++) {
        slides[i].style.display = "none";
    }
    for (var i = 0;i < dots.length;i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function createDot(cfig) {
    var solai = document.getElementsByClassName(cfig.classNameSlide);
    var htmldot = '';
    for (i = 0;i < solai.length;i++) {
        htmldot += '<span class="dot" onclick="currentSlide(' + (i + 1) + ')"></span>';
    }
    document.getElementById(cfig.classNameGroupDot).innerHTML = htmldot;
    document.getElementById("btn-control").innerHTML = '<a class="' + cfig.classNamePrev + '" onclick="plusSlides(-1)">❮</a> <a id = "' + cfig.classIdPause + '" class="pause" >❚❚</a> <a class="' + cfig.classNameNext + '" onclick="plusSlides(1)">❯</a>';

    var playing = true;
    var pauseButton = document.getElementById(cfig.classIdPause);

    function pauseSlideshow() {
        pauseButton.innerHTML = '▷';
        playing = false;
        clearInterval(time);
    }

    function playSlideshow() {
        pauseButton.innerHTML = '❚❚';
        playing = true;
        clearTimeout(time);
        time = setInterval(autoNextSlide, 3000);
    }
    pauseButton.onclick = function () {
        if (playing) { pauseSlideshow(); }
        else { playSlideshow(); }
    };
    return cfig.classNameSlide;
}

// }
// var solai = document.getElementsByClassName("mySlides");
// var htmldot = '';
// for (i = 0;i < solai.length;i++) {
//     htmldot += '<span class="dot" onclick="currentSlide(' + (i + 1) + ')"></span>';
// }
// document.getElementById('group-dot').innerHTML = htmldot;
// var slideIndex = 1;
// showSlides(slideIndex);
// var time;
// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }
// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }
// function pauseSlide() {
//     clearTimeout(time);
//     var play = document.getElementsById("play");
//     var pause = document.getElementsById("pause");
//     play.style.display = "block";
//     pause.style.display = "none";
// }
// var playing = true;
// var pauseButton = document.getElementById('pause');

// function pauseSlideshow() {
//     pauseButton.innerHTML = '▷';
//     playing = false;
//     clearInterval(time);
// }

// function playSlideshow() {
//     pauseButton.innerHTML = '❚❚';
//     playing = true;
//     clearTimeout(time);
//     time = setInterval(autoNextSlide, 3000);
// }
// pauseButton.onclick = function () {
//     if (playing) { pauseSlideshow(); }
//     else { playSlideshow(); }
// };

// function autoNextSlide() {
//     slideIndex++;
//     showSlides(slideIndex);
// }
// function showSlides(n) {
//     clearTimeout(time);
//     time = setInterval(autoNextSlide, 3000);
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     var dots = document.getElementsByClassName("dot");
//     for (i = 0;i < slides.length;i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0;i < dots.length;i++) {
//         dots[i].className = dots[i].className.replace("active", "");
//     }
//     if (n > slides.length) { slideIndex = 1 }
//     if (n < 1) { slideIndex = slides.length }
//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].className += " active";
// }




