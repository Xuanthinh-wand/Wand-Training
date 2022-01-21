import { account } from '../db/account.js';
import { listQuestion } from '../db/listQuestion.js';
import { rank, a } from '../db/rank.js';

let button_login = document.getElementById("button-login");
let exam_content = document.getElementById("exam-content");
let exam_login = document.getElementById("exam-login");
let appen = document.getElementById("exam-content-question");
let queIndex = 1;
let questionNumber = 5;
let long = 0;
let arrRandom = [];
let finalRandom = [];
let arrResult = [];
let resultVal = [];

let pad2 = (n) => {
    return (n < 10 ? "0" : "") + n;
};
pad2();

let date = new Date();
let month = pad2(date.getMonth() + 1);
let day = pad2(date.getDate());
let year = date.getFullYear();
let formattedDate = year + "-" + month + "-" + day;

button_login.addEventListener('click', function() {
    let checkName = document.getElementById("username").value;
    let checkPass = document.getElementById("password").value;
    for (let i = 0; i < account.length; i++) {
        let username = account[i].username;
        let password = account[i].password;

        if (checkName == username && checkPass == password) {
            document.getElementById("name").innerHTML = checkName;
            exam_login.style.display = "none";
            exam_content.style.display = "block";
        }
    }
})


//random question
while (long < questionNumber) {
    arrRandom[long] = listQuestion[Math.floor(Math.random() * listQuestion.length)];
    finalRandom = [...new Set(arrRandom)];
    long = finalRandom.length;
}

//show question
for (let i = 0; i < long; i++) {
    arrResult.push(finalRandom[i].ansId);
    let num = i + 1;
    let newDivQuesGroup = document.createElement("div");
    newDivQuesGroup.className = "ques-group";
    let newDivQuestion = document.createElement("div");
    newDivQuestion.className = "ques-details";
    newDivQuestion.id = "ques-" + finalRandom[i].id;
    newDivQuestion.innerHTML = num + ". " + finalRandom[i].question;
    newDivQuesGroup.appendChild(newDivQuestion);
    let newDivAns = document.createElement("div");
    newDivAns.className = "ans";

    finalRandom[i].ans.forEach((data) => {
        resultVal.push(data.value);
        let newDivAnsGroup = document.createElement("div");
        newDivAnsGroup.className = "ans-group";
        newDivAns.appendChild(newDivAnsGroup);

        let newInput = document.createElement("input");
        newInput.id = "ans-" + finalRandom[i].id + "-" + data.key;

        newInput.setAttribute("type", "radio");
        newInput.setAttribute("name", "ques-" + i);
        newInput.setAttribute("value", data.key);
        newDivAnsGroup.appendChild(newInput);

        let newLabel = document.createElement("label");
        newLabel.setAttribute("for", "ans-" + finalRandom[i].id + "-" + data.key);

        newLabel.innerHTML = data.value;
        newDivAnsGroup.appendChild(newLabel);
    });
    newDivQuesGroup.appendChild(newDivAns);
    appen.appendChild(newDivQuesGroup);
}



//load point

var listData = JSON.parse(localStorage.getItem("rank"));
if (listData == null) {
    localStorage.setItem("rank", JSON.stringify(rank));
}
let submit_Exam = document.getElementById("submit_Exam");
submit_Exam.addEventListener('click', function() {
    let Send = confirm("Xác nhận nộp bài");
    if (Send == true) {
        let arr = [];
        let count = 0;
        let point = 0;
        for (let j = 0; j < questionNumber; j++) {
            let checkbox = document.getElementsByName("ques-" + j);

            for (let i = 0; i < checkbox.length; i++) {
                if (checkbox[i].checked === true) {
                    arr.push(JSON.parse(checkbox[i].value));
                }
            }
        }
        let arrLength = arr.length;
        for (let i = 0; i < arrLength; i++) {
            if (arr[i] == arrResult[i]) {
                count++;
            }
        }
        point = (count * 10) / questionNumber;
        let newPoint = parseFloat(point).toFixed(2);
        alert("Thành công");
        if (typeof Storage !== "undefined") {
            let name = document.getElementById("username").value;

            let newData = {
                name: name,
                point: newPoint,
                time: formattedDate,
            };
            let mergedObj = {...newData, finalRandom, arr };
            listData.push(mergedObj);
            localStorage.setItem("rank", JSON.stringify(listData));
        }
        window.location.href = "rank.html";
    }
});

showQuestion(queIndex);



function showQuestion(n) {
    var i;
    let que = document.getElementsByClassName("ques-group");
    for (i = 0; i < questionNumber; i++) {
        que[i].style.display = "none";
    }

    if (queIndex > questionNumber) {
        queIndex = questionNumber;
    }
    if (n < 1) {
        queIndex = 1;
    }
    que[queIndex - 1].style.display = "block";
    document.getElementById("total-que").innerHTML = queIndex + "/" + questionNumber;
}
//next question
let prev = document.getElementById('prev')
prev.addEventListener('click', function() {
    showQuestion(queIndex -= 1);
})
let next = document.getElementById('next')
next.addEventListener('click', function() {
    showQuestion(queIndex += 1);
})