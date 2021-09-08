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
    },
    {
        id: 5, quesition: "What is 10 + 4?",
        dapan: ["12", "14", "16"],
        answer: "14"
    },
    {
        id: 6, quesition: "What is 20 - 9",
        dapan: ["7", "13", "11"],
        answer: "11"
    },
    {
        id: 7, quesition: "What is 7 x 3?",
        dapan: ["21", "24", "25"],
        answer: "21"
    },
    {
        id: 8, quesition: "What is 8 / 2?",
        dapan: ["10", "2", "4"],
        answer: "4"
    },
];
var arrayselected = [];
var arrTam = [];
var x;
var inventory = [
    { name: 'apples', quantity: 2 },
    { name: 'bananas', quantity: 0 },
    { name: 'orange', quantity: 5 }
];

console.log(inventory.find(a => a.name === 'app'));

document.getElementById("sum-quesition").appendChild(document.createTextNode("Tổng số câu hỏi là: " + arrayQuesition.length));
document.getElementById("btn-nopbai").style.display = "none";
function start() {
    document.getElementById("btn-nopbai").style.display = "block";
    document.getElementById("btn-start").style.display = "none";
    createList(arrayQuesition);
    timeStart();
}

function createList(arrayCH) {
    for (var i = 0;i < 4;i++) {
        var cauhoi = arrayCH[Math.floor(Math.random() * arrayCH.length)];
        var index = arrayCH.findIndex(a => a.id == cauhoi.id);
        if (index >= 0) {
            arrayCH.splice(index, 1);
            arrayselected.push(cauhoi);
        }
        let h5 = document.createElement("h5");
        h5.className = "mt-3";
        h5.appendChild(document.createTextNode("Câu hỏi " + (i + 1) + " : " + cauhoi.quesition))
        document.getElementById("myQuiz").appendChild(h5);
        var arrayDAselected = [];
        for (let i = 0;i < cauhoi.dapan.length;i++) {
            do { var dap = cauhoi.dapan[Math.floor(Math.random() * cauhoi.dapan.length)]; }
            while (arrayDAselected.find(b => b === dap) !== undefined)
            arrayDAselected.push(dap);
            console.log(dap);
            let div = document.createElement("div");
            div.className = "form-check";

            let input = document.createElement("input");
            input.className = "form-check-input";
            input.type = "radio";
            input.id = "quesition" + cauhoi.id;
            input.name = "cauhoi" + cauhoi.id;
            input.value = dap;
            div.appendChild(input);
            let label = document.createElement("label");
            let txt = document.createTextNode(dap)
            label.className = "form-check-label";
            label.id = dap;
            label.appendChild(txt);
            div.appendChild(label);
            document.getElementById("myQuiz").appendChild(div);
        }
    }
    for (let selected of arrayselected) {
        arrayCH.push(selected);
    }
}
function timeStart() {
    var countDownDate = Date.now() + 120000;
    x = setInterval(function () {

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
}
function getCheckedValue(radioName) {
    var radios = document.getElementsByName(radioName); // Get radio group by-name
    for (let rd of radios)
        if (rd.checked) return rd.value; // return the checked value
}
function check() {
    clearInterval(x);
    var score = 0;
    for (let ch of arrayselected) {
        var item = document.getElementById(ch.answer);
        item.style.color = "springgreen";
        if (getCheckedValue("cauhoi" + ch.id) == ch.answer) {

            score++;
        } else if (getCheckedValue("cauhoi" + ch.id) != undefined) {
            var it = document.getElementById(getCheckedValue("cauhoi" + ch.id));
            it.style.color = "red";
        };
    }
    var diem = "Số điểm của bạn là " + score / arrayselected.length * 10 + "/10";
    var span = document.createElement("span");
    span.appendChild(document.createTextNode(diem));
    var kq = "Bạn trả lời đúng " + score + "/" + arrayselected.length + " câu hỏi";
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