import {questions} from './db.js';
import {answers} from './db.js';

const eleQuestions = document.querySelector('.questions');
eleQuestions.innerHTML += '<div class="questions-tabs"></div>';
eleQuestions.innerHTML += '<div class="questions-list"></div>';
const eleListQuestion = document.querySelector('.questions-list');
const eleQuestionTabs = document.querySelector('.questions-tabs');
let totalQuestions = 5;
let currentIndex = 0;
let arrIndex = [];

// Lấy random ra 5 câu hỏi
getRandomQuestion(totalQuestions);
function getRandomQuestion(number) {
    while (arrIndex.length < number) {
        var randomIndex = Math.ceil(Math.random() * questions.length);
        if (arrIndex.indexOf(randomIndex) === -1) {
            arrIndex.push(randomIndex);
        }
    }
    //In ra list câu hỏi
    arrIndex.forEach((questionId, index) => {
        const question = questions.find((question) => question.id == questionId);
        eleListQuestion.innerHTML += `<div class=\"questions-item\"><strong>Câu ${index + 1}: </strong>${
            question.title
        }</div>`;

        let eleQuestionItems = document.querySelectorAll('.questions-item');
        eleQuestionItems[index].innerHTML += '<div class="answers-list"></div>';
        const eleAnswerList = document.querySelectorAll('.answers-list');
        let listAnswers = '';
        listAnswers = answers.filter((answer) => answer.questionId == questionId);

        //In ra các tab để click đến từng câu hỏi
        eleQuestionTabs.innerHTML += `<div class=\"questions-tabs-item\">${index + 1}</div>`;
        //In ra list đáp án theo từng câu hỏi
        listAnswers.forEach((answer) => {
            eleAnswerList[
                index
            ].innerHTML += `<div class=\"questions-answer\"><label><input type=\"radio\" class=\"checked-${
                index + 1
            }\" data-id=\"${answer.id}\" name=\"quiz-${index + 1}\"> ${answer.name}</label></div>`;
        });
    });
}

// Thêm btn prev next question
eleQuestions.innerHTML +=
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

let initBtnSubmit = document.createElement('button');
initBtnSubmit.classList.add('btn-submit');
initBtnSubmit.innerText = 'Nộp bài';
eleQuestions.appendChild(initBtnSubmit);
const btnSubmit = document.querySelector('.btn-submit');

const eleAnswerList = document.querySelectorAll('.answers-list');
eleAnswerList.forEach((answer, index) => {
    const childs = answer.childNodes;
    childs.forEach((child) => {
        child.addEventListener('click', function () {
            this.classList.add('checked');
            console.log(this);
        });
    });
});

// eleRadios.forEach((item, index) => {
//     const tabActive = eleTabItems[index];
//     item.addEventListener('click', function () {
//         console.log(index);
//         this.classList.add('cheked');
//         tabActive.style = 'color: green; border-color: green;';
//     });
// });

btnSubmit.addEventListener('click', () => {
    let indexRequired = '';
    let arrAnswersResult = [];
    let answerSubmit = {};
    arrIndex.forEach((questionId, index) => {
        let answerId = 0;

        // let statusCheckeds = document.querySelectorAll('.questions-item input[type=radio]:checked');
        // console.log(statusCheckeds);
        // if (!statusCheckeds[index]) {
        //     indexRequired += index + ',';
        //     return;
        // }
        let eleCheckeds = document.querySelectorAll(`.checked-${index + 1}`);
        eleCheckeds.forEach((item, index) => {
            if (eleCheckeds[index].checked) {
                answerId = eleCheckeds[index].dataset.id;
            }
        });
        let statusAnswer = false;
        let getStatusAnswersResult = answers.find((answer) => answer.id == answerId);
        if (getStatusAnswersResult) {
            statusAnswer = getStatusAnswersResult.status;
        }
        let answerTrue = answers.find((answer) => answer.questionId == questionId && answer.status == true);
        answerSubmit = {
            userId: 1,
            questionId: questionId,
            answerId: answerId,
            answerTrueId: answerTrue.id,
        };
        arrAnswersResult.push(answerSubmit);
    });

    // if (indexRequired.length > 0) {
    //     alert(`Bạn còn các câu ${indexRequired.slice(0, -1)} chưa làm`);
    //     return;
    // }
    arrAnswersResult.forEach((item) => {
        if (item.answerId == item.answerTrueId) {
            console.log('đáp án đúng');
        }
    });
});
