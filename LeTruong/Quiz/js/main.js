import {questions} from './db.js';
import {answers} from './db.js';

const eleQuestions = document.querySelector('.questions');
let totalQuestions = 5;
let currentIndex = 0;
let arrIndex = [];
let storedAnswerIds = [];
let storedQuestionIds = JSON.parse(localStorage.getItem('arrIndex'));
// Lấy random ra 5 câu hỏi
randomQuestionsId(totalQuestions);
function randomQuestionsId(number) {
    storedQuestionIds = JSON.parse(localStorage.getItem('arrIndex'));
    if (!storedQuestionIds) {
        getRandomIndex(totalQuestions);
    } else {
        while (storedQuestionIds.length < number) {
            let randomIndex = Math.ceil(Math.random() * questions.length);
            if (arrIndex.indexOf(randomIndex) === -1) {
                arrIndex.push(randomIndex);
                localStorage.setItem('arrIndex', JSON.stringify(arrIndex));
            }
        }
    }

    getAnswersByIdQuestion();
}

function getRandomIndex(number) {
    while (arrIndex.length < number) {
        let randomIndex = Math.ceil(Math.random() * questions.length);
        if (arrIndex.indexOf(randomIndex) === -1) {
            arrIndex.push(randomIndex);
            localStorage.setItem('arrIndex', JSON.stringify(arrIndex));
        }
    }
}

function getAnswersByIdQuestion() {
    let initTabs = document.createElement('div');
    initTabs.classList.add('questions-tabs');
    eleQuestions.appendChild(initTabs);

    let initList = document.createElement('div');
    initList.classList.add('questions-list');
    eleQuestions.appendChild(initList);
    const eleListQuestion = document.querySelector('.questions-list');
    const eleQuestionTabs = document.querySelector('.questions-tabs');
    storedQuestionIds = JSON.parse(localStorage.getItem('arrIndex'));
    //In ra list câu hỏi
    storedQuestionIds.forEach((questionId, index) => {
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
            eleAnswerList[index].innerHTML += `<div class=\"questions-answer\"><label class=\"checked-${
                index + 1
            }\" ><input type=\"radio\"  data-id=\"${answer.id}\" name=\"quiz-${index + 1}\"> ${
                answer.name
            }</label></div>`;
        });
    });
}

// Thêm btn prev next question
eleQuestions.innerHTML +=
    '<div class="group-btn"><div class="btn-prev"><i class="fa-solid fa-angle-left"></i></div><div class="btn-next"><i class="fa-solid fa-angle-right"></i></div></div>';

let initBtnSubmit = document.createElement('button');
initBtnSubmit.classList.add('btn-submit');
initBtnSubmit.innerText = 'Nộp bài';
eleQuestions.appendChild(initBtnSubmit);

let initBtnReset = document.createElement('button');
initBtnReset.classList.add('btn-reset');
initBtnReset.innerText = 'Làm lại';
eleQuestions.appendChild(initBtnReset);
const btnReset = document.querySelector('.btn-reset');
btnReset.style.display = 'none';

const btnSubmit = document.querySelector('.btn-submit');

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
        console.log(tab);
        setStatusQuestion(-1);
        currentIndex = index;
        setStatusBtn(currentIndex);
        setStatusQuestion(1);
    });
});
function hanleChangeAnswer() {
    storedAnswerIds = JSON.parse(localStorage.getItem('arrAnswersResult'));
    let arrAnswersResult = [];
    storedQuestionIds.forEach((questionId, index) => {
        const tabActive = eleTabItems[index];
        let eleCheckeds = document.querySelectorAll(`.checked-${index + 1}`);
        let answerSubmit = {
            userId: 1,
            questionId: questionId,
            answerId: -1,
            answerTrueId: -1,
        };
        arrAnswersResult.push(answerSubmit);
        eleCheckeds.forEach((label) => {
            label.addEventListener('click', function () {
                const child = this.children[0];
                tabActive.style = 'color: green; border-color: green;';
                if (storedAnswerIds == null) {
                    answerSubmit.answerId = child.dataset.id;
                    localStorage.setItem('arrAnswersResult', JSON.stringify(arrAnswersResult));
                    return;
                }
                storedAnswerIds[index].answerId = child.dataset.id;
                localStorage.setItem('arrAnswersResult', JSON.stringify(storedAnswerIds));
            });
        });
    });
    setActiveQuestion();
}
hanleChangeAnswer();

function setActiveQuestion() {
    if (storedAnswerIds) {
        storedAnswerIds.forEach((item, index) => {
            const tabActive = eleTabItems[index];
            const eleChecked = document.querySelector(`[data-id="${item.answerId}"]`);
            if (eleChecked) {
                eleChecked.checked = true;
                tabActive.style = 'color: green; border-color: green;';
            }
        });
    }
}

btnSubmit.addEventListener('click', () => {
    storedAnswerIds = JSON.parse(localStorage.getItem('arrAnswersResult'));
    let indexRequired = '';
    if (storedAnswerIds) {
        storedAnswerIds.forEach((item, index) => {
            if (item.answerId == -1) {
                indexRequired += `${index + 1 + ','}`;
                return;
            }
            let answerTrue = answers.find((answer) => answer.questionId == item.questionId && answer.status == true);
            item.answerTrueId = answerTrue.id;
            localStorage.setItem('arrAnswersResult', JSON.stringify(storedAnswerIds));
        });
        if (indexRequired.length > 0) {
            alert(`Bạn còn các câu ${indexRequired.slice(0, -1)} chưa làm`);
            return;
        }
        let point = 0;
        storedAnswerIds.forEach((item, index) => {
            if (item.answerId == item.answerTrueId) {
                point++;
                let initAleartTrue = document.createElement('div');
                initAleartTrue.classList.add('alert-true');
                initAleartTrue.innerText = 'Câu trả lời đúng';
                eleQuestionItems[index].appendChild(initAleartTrue);
                return;
            }
            let answerTrue = answers.find((answer) => answer.id == item.answerTrueId);
            let initAleartFalse = document.createElement('div');
            initAleartFalse.classList.add('alert-false');
            initAleartFalse.innerText = `Câu trả lời sai (Đáp án đúng là: ${answerTrue.name})`;
            eleQuestionItems[index].appendChild(initAleartFalse);
        });
        let initAleartPoint = document.createElement('div');
        initAleartPoint.classList.add('alert-point');
        initAleartPoint.innerText = `Số câu trả lời đúng của bạn: ${point} / ${totalQuestions}`;
        eleQuestions.appendChild(initAleartPoint);
        btnSubmit.style.display = 'none';

        const listInput = document.querySelectorAll('input');
        listInput.forEach((item) => {
            item.disabled = true;
        });
        btnReset.style.display = 'block';
        return;
    }
    alert(`Vui lòng trả lời các câu hỏi !!!`);
});

btnReset.addEventListener('click', () => {
    eleQuestions.innerHTML = '';
    arrIndex = [];
    localStorage.removeItem('arrIndex');
    localStorage.removeItem('arrAnswersResult');
    randomQuestionsId(totalQuestions);
    getRandomIndex(totalQuestions);

    eleTabItems.forEach((tab, index) => {
        tab.addEventListener('click', function () {
            console.log(tab);
            setStatusQuestion(-1);
            currentIndex = index;
            setStatusBtn(currentIndex);
            setStatusQuestion(1);
        });
    });
});
