let options = {
    startAngle: -1.55,
    size: 132,
    value: 0.75,
    // thickness: 4,
    fill: { gradient: ['#ec3642'] }
}
$(".card .bar").circleProgress(options).on('circle-animation-progress',
    function (event, progress, stepValue) {
        $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
    });
$(".happy .bar").circleProgress({
    value: 0.95
});
$(".effect .bar").circleProgress({
    value: 0.85
});
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0;i < coll.length;i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}
$(function () {
    var n = "#nav";
    var no = ".nav-items";
    $(n).click(function () {
        if ($(no).hasClass("nav-open")) {
            $(no).animate({ height: 0 }, 300);
            setTimeout(function () {
                $(no).removeAttr('style').removeClass("nav-open");
            }, 320);
        } else {
            var h = $(no).css("height", "auto").height();
            $(no).height(0).animate({ height: h }, 300);
            setTimeout(function () {
                $(no).removeAttr('style').addClass("nav-open");
            }, 320);
        }
    });
});

