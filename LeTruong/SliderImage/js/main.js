const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
const sliderItems = document.querySelectorAll('.slider-item');
const sliderMain = document.querySelector('.slider-main');
const sliderDot = document.querySelector('.slider-dots');
const sliderIndex = document.querySelector('.sum-index');
const currentItemIndex = document.querySelector('.current-index');
const sliderItemWidth = sliderItems[0].offsetWidth;
const sliderItemLength = sliderItems.length;
let index = 0;
let positionItemX = 0;
var setAutoPlaySlider;
function setCurrentIndex() {
    let currentIndex = index + 1;
    currentItemIndex.innerText = currentIndex;
}
setCurrentIndex();
const config = {
    autoplay: true,
    autoplaySpeed: 5000,
};
sliderIndex.innerText = sliderItemLength;

for (var i = 0; i < sliderItemLength; i++) {
    sliderDot.innerHTML += '<li class="slider-dots-item"><span class="slider-dots-btn"></span></li>';
}

const sliderDotItems = document.querySelectorAll('.slider-dots-btn');
sliderDotItems[index].classList.add('active');

function autoPlaySlider() {
    handleClickSlider(1);
}

// auto play anh
if (config.autoplay) {
    setAutoPlaySlider = setInterval(autoPlaySlider, config.autoplaySpeed);
}

//start click next prev de slider anh
btnNext.addEventListener('click', function () {
    handleClickSlider(1);
});

btnPrev.addEventListener('click', function () {
    handleClickSlider(-1);
});

function handleClickSlider(num) {
    if (setAutoPlaySlider) {
        clearInterval(setAutoPlaySlider);
    }
    sliderDotItems[index].classList.remove('active');
    if (num === 1) {
        if (index >= sliderItemLength - 1) {
            index = 0;
            positionItemX = 0;
            sliderMain.style = `transform: translateX(${positionItemX}px)`;
            sliderDotItems[index].classList.add('active');
            setCurrentIndex();
            if (config.autoplay) {
                setAutoPlaySlider = setInterval(autoPlaySlider, config.autoplaySpeed);
            }
            return;
        }
    }

    if (num === -1) {
        if (index === 0) {
            index = sliderItemLength - 1;
            positionItemX = -1 * sliderItemWidth * (sliderItemLength - 1);
            sliderMain.style = `transform: translateX(${positionItemX}px)`;
            sliderDotItems[index].classList.add('active');
            setCurrentIndex();
            if (config.autoplay) {
                setAutoPlaySlider = setInterval(autoPlaySlider, config.autoplaySpeed);
            }
            return;
        }
    }

    positionItemX -= num * sliderItemWidth;
    index = index + num;
    sliderMain.style = `transform: translateX(${positionItemX}px)`;
    sliderDotItems[index].classList.add('active');
    setCurrentIndex();
    if (config.autoplay) {
        setAutoPlaySlider = setInterval(autoPlaySlider, config.autoplaySpeed);
    }
}

//click dot slider
sliderDotItems.forEach(function (item, itemIndex) {
    item.addEventListener('click', function () {
        if (setAutoPlaySlider) {
            clearInterval(setAutoPlaySlider);
        }
        sliderDotItems[index].classList.remove('active');
        positionItemX = -1 * sliderItemWidth * itemIndex;
        index = itemIndex;
        sliderMain.style = `transform: translateX(${positionItemX}px)`;
        sliderDotItems[index].classList.add('active');
        setCurrentIndex();
        if (config.autoplay) {
            setAutoPlaySlider = setInterval(autoPlaySlider, config.autoplaySpeed);
        }
    });
});
