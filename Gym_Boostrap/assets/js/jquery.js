let options = {
    startAngle: -1.55,
    size: 160,
    value: 0.75,
    // thickness: 4,
    fill: { gradient: ['#ec3642'] }
}
$(".gym-card .bar").circleProgress(options).on('circle-animation-progress',
    function (event, progress, stepValue) {
        $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
    });
$(".gym-happy .bar").circleProgress({
    value: 0.95
});
$(".gym-effect .bar").circleProgress({
    value: 0.85
});

$(function () {
    $(".acc__title").click(function (j) {
        var dropDown = $(this).closest(".gym-category-right--item").find(".content");
        $(this).closest(".gym-category-right").find(".content").not(dropDown).slideUp();
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
        } else {
            $(this).closest(".gym-category-right").find(".acc__title.active").removeClass("active");
            $(this).addClass("active");
        }
        dropDown.stop(false, true).slideToggle();
        j.preventDefault();
    });
    $('#gym-termination-content').owlCarousel({
        items: 1,
        itemsDesktop: [1000, 1],
        itemsDesktopSmall: [980, 1],
        itemsTablet: [768, 1],
        itemsMobile: [650, 1],
        pagination: true,
        navigation: false,
        slideSpeed: 1000,
        autoPlay: true

    });
    $('#slide').owlCarousel({

        items: 3,
        itemsDesktop: [1000, 3],
        itemsDesktopSmall: [980, 2],
        itemsTablet: [768, 1],
        itemsMobile: [650, 1],
        pagination: true,
        navigation: false,
        slideSpeed: 1000,
        autoPlay: true
    });
});
