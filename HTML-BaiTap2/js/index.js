function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav nqt-nav-bar") {
        x.className += " responsive";
    } else {
        x.className = "topnav nqt-nav-bar";
    }
}