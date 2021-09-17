jQuery(document).ready(function () {
  jQuery(".progress-bar").each(function () {
    jQuery(this)
      .find(".progress-content")
      .animate(
        {
          width: jQuery(this).attr("data-percentage"),
        },
        2000
      );

    jQuery(this)
      .find(".progress-number-mark")
      .animate(
        { left: jQuery(this).attr("data-percentage") },
        {
          duration: 2000,
          step: function (now, fx) {
            var data = Math.round(now);
            jQuery(this)
              .find(".percent")
              .html(data + "%");
          },
        }
      );
  });
});

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav nqt-nav-bar") {
    x.className += " responsive";
  } else {
    x.className = "topnav nqt-nav-bar";
  }
}
(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();