const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
const slider = document.querySelector('.slider');
const sliderItems = document.querySelectorAll('.slider-item');
const sliderMain = document.querySelector('.slider-main');
const sliderDot = document.querySelector('.slider-dots');
const sliderItemWidth = sliderItems[0].offsetWidth;
const sliderItemLength = sliderItems.length;
let index = 0;
let positionItemX = 0;

const config = {
    autoplay: true,
    autoplaySpeed: 10000,
}

for (var i = 0; i < sliderItemLength; i++) { 
    sliderDot.innerHTML += "<li class=\"slider-dots-item\"><span class=\"slider-dots-btn\"></span></li>"
}

const sliderDotItems = document.querySelectorAll('.slider-dots-btn');
sliderDotItems[index].classList.add('active')


//start click next prev de slider anh
btnNext.addEventListener('click', function () {
    sliderNext()
})

btnPrev.addEventListener('click', function () {
    sliderPrev()
})

// next anh
function sliderNext() {
    sliderDotItems[index].classList.remove('active')
    if (index >= sliderItemLength - 1) {
            index = 0
            positionItemX = 0
            sliderMain.style = `transform: translateX(${positionItemX}px)`
            sliderDotItems[index].classList.add('active')
        return;
    }
    positionItemX -= sliderItemWidth
    sliderMain.style = `transform: translateX(${positionItemX}px)`
    index++;
    sliderDotItems[index].classList.add('active')
}

//prev anh
function sliderPrev() {
    sliderDotItems[index].classList.remove('active')
    if (index === 0) {
            index = sliderItemLength - 1
            positionItemX = -1 * sliderItemWidth * (sliderItemLength - 1)
            sliderMain.style = `transform: translateX(${positionItemX}px)`
            sliderDotItems[index].classList.add('active')
        return
    }
    positionItemX += sliderItemWidth
    sliderMain.style = `transform: translateX(${positionItemX}px)`
    index--;
    sliderDotItems[index].classList.add('active')
}
//end click slider anh


//click dot slider
sliderDotItems.forEach(function (item, itemIndex) {
    item.addEventListener('click', function () {
        sliderDotItems[index].classList.remove('active')
        positionItemX = -1 * sliderItemWidth * itemIndex
        sliderMain.style = `transform: translateX(${positionItemX}px)`
        index = itemIndex
        sliderDotItems[index].classList.add('active')

    });
})
 
// auto play anh
if (config.autoplay) {
    setInterval(
        function autoPlaySlider() {
            sliderNext()
        },config.autoplaySpeed);
}


