import {questions} from './db.js';
import {answers} from './db.js';

const formQuestion = document.querySelector('.questions');
formQuestion.innerHTML += '<div class="questions-tabs"></div>';
formQuestion.innerHTML += '<div class="questions-list"></div>';
const eleListQuestion = document.querySelector('.questions-list');
const eleQuestionTabs = document.querySelector('.questions-tabs');
let totalQuestions = 5;
let currentIndex = 0;

// Lấy random ra 5 câu hỏi
getRandomQuestion(totalQuestions);
function getRandomQuestion(number) {
    var arrIndex = [];
    while (arrIndex.length < number) {
        var randomIndex = Math.floor(Math.random() * questions.length);
        if (arrIndex.indexOf(randomIndex) === -1) {
            arrIndex.push(randomIndex);
        }
    }

    //In ra list câu hỏi
    arrIndex.forEach((item, index) => {
        eleListQuestion.innerHTML += `<div class=\"questions-item\"><strong>Câu ${index + 1}: </strong>${
            questions[item].title
        }</div>`;
        let eleQuestionItem = document.querySelectorAll('.questions-item');
        let listAnswers = '';
        listAnswers = answers.filter((answer) => answer.questionId == questions[item].id);

        //In ra các tab để click đến từng câu hỏi
        eleQuestionTabs.innerHTML += `<div class=\"questions-tabs-item\">${index + 1}</div>`;
        //In ra list đáp án theo từng câu hỏi
        listAnswers.forEach((answer) => {
            eleQuestionItem[
                index
            ].innerHTML += `<div class=\"questions-answer\"><label><input type=\"radio\" name=\"quiz-${index + 1}\"> ${
                answer.name
            }</label></div>`;
        });
    });
}

// Thêm btn prev next question
formQuestion.innerHTML +=
    '<div class="group-btn"><div class="btn-prev"><i class="fa-solid fa-angle-left"></i></div><div class="btn-next"><i class="fa-solid fa-angle-right"></i></div></div>';

const eleQuestionItems = document.querySelectorAll('.questions-item');
eleQuestionItems[currentIndex].classList.add('active');

const eleTabItems = document.querySelectorAll('.questions-tabs-item');
eleTabItems[currentIndex].classList.add('active');

function setStatusQuestion(status) {
    if (status === 1) {
        eleTabItems[currentIndex].classList.add('active');
        eleQuestionItems[currentIndex].classList.add('active');
    }
    if (status === -1) {
        eleTabItems[currentIndex].classList.remove('active');
        eleQuestionItems[currentIndex].classList.remove('active');
    }
}

const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
function setStatusBtn(status) {
    if (status === 0) {
        btnPrev.style.display = 'none';
    } else {
        btnPrev.style.display = 'flex';
    }
}
if (currentIndex === 0) {
    btnPrev.style.display = 'none';
}

btnNext.addEventListener('click', () => hanleChangeQuestion(1));
btnPrev.addEventListener('click', () => hanleChangeQuestion(-1));

function hanleChangeQuestion(num) {
    setStatusQuestion(-1);
    if (num === 1) {
        if (currentIndex >= totalQuestions - 1) {
            currentIndex = 0;
            setStatusBtn(currentIndex);
            setStatusQuestion(1);
            return;
        }
    }
    currentIndex += num;
    setStatusBtn(currentIndex);
    setStatusQuestion(1);
}

eleTabItems.forEach((tab, index) => {
    tab.addEventListener('click', function () {
        setStatusQuestion(-1);
        currentIndex = index;
        setStatusBtn(currentIndex);
        setStatusQuestion(1);
    });
});
