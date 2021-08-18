function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "gym-menu") {
        x.className += " responsive";
    } else {
        x.className = "gym-menu";
    }
}