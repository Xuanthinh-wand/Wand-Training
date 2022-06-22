function slider({
    className: yourclass,
    dots: dots = true,
    autoPlay: autoPlay = true,
    autoPlaySpeed: autoPlaySpeed = 5000,
    arrows: arrows = true,
    indexCurrent: indexCurrent = true,
}) {
    const sliderMain = document.querySelector(yourclass);
    const elChild = document.querySelectorAll(`${yourclass}  > *`);

    const sliderItemWidth = elChild[0].offsetWidth;
    const sliderItemLength = elChild.length;
    let index = 0;
    let positionItemX = 0;
    var setAutoPlaySlider;
    // gộp tất cả các element slick vào chung 1 element cha
    sliderMain.innerHTML = "<div class='slider-list'></div>";
    let sliderList = document.querySelector('.slider-list');
    elChild.forEach((item) => {
        sliderList.appendChild(item);
    });

    // thêm các chỉ số chại slider
    if (indexCurrent) {
        let elIndex = `<div class=\"slider-index\"><span class=\"current-index\"></span> \/ <span class=\"sum-index\">${sliderItemLength}</span></div>`;
        sliderMain.innerHTML += elIndex;

        function setCurrentIndex() {
            let eleCurrentIndex = document.querySelector('.current-index');
            let currentIndex = index + 1;
            eleCurrentIndex.innerText = currentIndex;
        }
        setCurrentIndex();
    }

    // thêm các button next prev
    if (arrows && elChild.length > 1) {
        sliderMain.innerHTML +=
            '<button class="btn btn-prev"> <i class="fa-solid fa-angle-left"></i></button><button button class="btn btn-next" > <i class="fa-solid fa-angle-right"></i></button > ';
    }

    // thêm dot cho slider
    if (dots && sliderItemLength > 1) {
        sliderMain.innerHTML += '<ul class="slider-dots"></ul>';
        const sliderDot = document.querySelector('.slider-dots');
        for (var i = 0; i < sliderItemLength; i++) {
            sliderDot.innerHTML += '<li class="slider-dots-item"><span class="slider-dots-btn"></span></li>';
        }

        const sliderDotItems = document.querySelectorAll('.slider-dots-btn');
        addActiveDot();

        //click dot slider
        sliderDotItems.forEach(function (item, itemIndex) {
            sliderList = document.querySelector('.slider-list'); // phải gán lại mới chạy ?
            item.addEventListener('click', function () {
                if (setAutoPlaySlider) {
                    clearInterval(setAutoPlaySlider);
                }
                removeActiveDot();
                positionItemX = -1 * sliderItemWidth * itemIndex;
                index = itemIndex;
                sliderList.style = `transform: translateX(${positionItemX}px)`;
                addActiveDot();
                setCurrentIndex();
                if (autoPlay) {
                    setAutoPlaySlider = setInterval(autoPlaySlider, autoPlaySpeed);
                }
            });
        });

        //xóa active của dot
        function removeActiveDot() {
            sliderDotItems[index].classList.remove('active');
        }
        //Thêm active của dot
        function addActiveDot() {
            sliderDotItems[index].classList.add('active');
        }
    }

    function autoPlaySlider() {
        handleClickSlider(1);
    }

    // auto play anh
    if (autoPlay && sliderItemLength > 1) {
        setAutoPlaySlider = setInterval(autoPlaySlider, autoPlaySpeed);
    }

    // start click next prev de slider anh
    if (arrows) {
        const btnPrev = document.querySelector('.btn-prev');
        const btnNext = document.querySelector('.btn-next');
        btnNext.addEventListener('click', function () {
            handleClickSlider(1);
        });

        btnPrev.addEventListener('click', function () {
            handleClickSlider(-1);
        });
    }

    function handleClickSlider(num) {
        sliderList = document.querySelector('.slider-list');
        removeActiveDot();
        if (setAutoPlaySlider) {
            clearInterval(setAutoPlaySlider);
        }
        if (num === 1) {
            if (index >= sliderItemLength - 1) {
                index = 0;
                positionItemX = 0;
                sliderList.style = `transform: translateX(${positionItemX}px)`;
                if (dots && sliderItemLength > 1) {
                    addActiveDot();
                }
                if (indexCurrent && sliderItemLength > 1) {
                    setCurrentIndex();
                }
                if (autoPlay) {
                    setAutoPlaySlider = setInterval(autoPlaySlider, autoPlaySpeed);
                }
                return;
            }
        }

        if (num === -1) {
            if (index === 0) {
                index = sliderItemLength - 1;
                positionItemX = -1 * sliderItemWidth * (sliderItemLength - 1);
                sliderList.style = `transform: translateX(${positionItemX}px)`;
                if (dots && sliderItemLength > 1) {
                    addActiveDot();
                }
                if (indexCurrent && sliderItemLength > 1) {
                    setCurrentIndex();
                }
                if (autoPlay) {
                    setAutoPlaySlider = setInterval(autoPlaySlider, autoPlaySpeed);
                }
                return;
            }
        }

        positionItemX -= num * sliderItemWidth;
        index = index + num;
        sliderList.style = `transform: translateX(${positionItemX}px)`;
        if (dots && sliderItemLength > 1) {
            addActiveDot();
        }
        if (indexCurrent && sliderItemLength > 1) {
            setCurrentIndex();
        }
        if (autoPlay) {
            setAutoPlaySlider = setInterval(autoPlaySlider, autoPlaySpeed);
        }
    }
}
