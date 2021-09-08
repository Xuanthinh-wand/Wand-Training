var arrayQuesition = [
    {
        id: 1, quesition: "What is the capital of Vietnam ?",
        dapan: ["Ha Noi", "Da Nang", "Hai Phong", "TP HCM"],
        answer: "Ha Noi"
    },
    {
        id: 2, quesition: "Inside which HTML element do we put the JavaScript?",
        dapan: ["<script>", "<javascript>", "<scripting>", "<js>"],
        answer: "<js>"
    },
    {
        id: 3, quesition: "Which of the following is a disadvantage of using JavaScript?",
        dapan: ["Client-side JavaScript does not allow the reading or writing of files.", "JavaScript can not be used for Networking applications because there is no such support available.", "JavaScript doesn't have any multithreading or multiprocess capabilities.", "All of the above."],
        answer: "JavaScript doesn't have any multithreading or multiprocess capabilities."
    },
    {
        id: 4, quesition: "How does a WHILE loop start?",
        dapan: ["while i = 1 to 10", "while (i <= 10; i++)", "while (i <= 10)"],
        answer: "while (i <= 10; i++)"
    }
];
var arrayAnswer = [{}];
// Set the date we're counting down to
var countDownDate = Date.now() + 6000;

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    // var timenow = Date.now();
    console.log(distance);
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("time").innerHTML = "Time: " + minutes + " m " + seconds + "s ";

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("time").innerHTML = "Hết giờ";
        var link = document.getElementById("btn-nopbai");
        link.click();
    }
}, 1000);

createList(arrayQuesition);
// check();
function createList(arrayCH) {
    console.log(arrayCH);
    for (let cauhoi of arrayCH) {
        let h5 = document.createElement("h5");
        h5.className = "mt-3";
        h5.appendChild(document.createTextNode("Câu hỏi " + cauhoi.id + " : " + cauhoi.quesition))
        document.getElementById("myQuiz").appendChild(h5);
        for (let i = 0;i < cauhoi.dapan.length;i++) {
            let div = document.createElement("div");
            div.className = "form-check";
            let input = document.createElement("input");
            input.className = "form-check-input";
            input.type = "radio";
            input.id = "quesition" + cauhoi.id;
            input.name = "cauhoi" + cauhoi.id;
            input.value = cauhoi.dapan[i];
            div.appendChild(input);
            let label = document.createElement("label");
            let txt = document.createTextNode(cauhoi.dapan[i])
            label.className = "form-check-label";
            label.appendChild(txt);
            div.appendChild(label);
            document.getElementById("myQuiz").appendChild(div);
        }
    }
}
function getCheckedValue(radioName) {
    var radios = document.getElementsByName(radioName); // Get radio group by-name
    for (let rd of radios)
        if (rd.checked) return rd.value; // return the checked value
}
function check() {
    clearInterval(x);
    var score = 0;
    for (let ch of arrayQuesition) {
        console.log("cauhoi" + ch.id);
        if (getCheckedValue("cauhoi" + ch.id) == ch.answer) score++;
    }
    var diem = "Số điểm của bạn là " + score / arrayQuesition.length * 10;
    var span = document.createElement("span");
    span.appendChild(document.createTextNode(diem));
    var kq = "Bạn trả lời đúng " + score + "/" + arrayQuesition.length + " câu hỏi";
    var span1 = document.createElement("span");
    span1.appendChild(document.createTextNode(kq));
    document.getElementById("txt-ketqua").innerHTML = '';
    document.getElementById("txt-ketqua").appendChild(span);
    var br = document.createElement("br");
    document.getElementById("txt-ketqua").appendChild(br);
    document.getElementById("txt-ketqua").appendChild(span1);

}
function hiddenbtn() {
    document.getElementById("btn-nopbai").style.display = "none";
    var btn = document.createElement("button");
    var a = document.createElement("a");
    btn.className = "btn btn-primary";
    btn.type = "button";
    btn.id = "btn-lamlai";
    a.href = "index.html";
    a.appendChild(document.createTextNode("Làm lại"));
    a.style.color = "#fff";
    a.style.textDecoration = "none";
    btn.appendChild(a);
    document.getElementById("group-btn").appendChild(btn);
}