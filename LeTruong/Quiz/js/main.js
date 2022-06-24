import {questions} from './db.js';
import {answers} from './db.js';

const formQuestion = document.querySelector('.questions');
formQuestion.innerHTML += '<div class="questions-list"></div>';
const eleListQuestion = document.querySelector('.questions-list');

// Lấy random ra 5 câu hỏi
getRandomQuestion(5);
function getRandomQuestion(number) {
    var arrIndex = [];
    while (arrIndex.length < number) {
        var randomIndex = Math.floor(Math.random() * questions.length);
        if (arrIndex.indexOf(randomIndex) === -1) {
            arrIndex.push(randomIndex);
        }
    }
    arrIndex.forEach((item, index) => {
        eleListQuestion.innerHTML += `<div class=\"questions-item\"><strong>Câu ${index + 1}: </strong>${
            questions[item].title
        }</div>`;
        let eleQuestionItem = document.querySelectorAll('.questions-item');
        let listAnswers = '';
        listAnswers = answers.filter((answer) => answer.questionId == questions[item].id);

        listAnswers.forEach((answer) => {
            eleQuestionItem[
                index
            ].innerHTML += `<div class=\"questions-answer\"><label><input type=\"radio\" name=\"quiz-${index + 1}\"> ${
                answer.name
            }</label></div>`;
        });
    });
}

// Sự kiện nộp bài
formQuestion.addEventListener('submit', (e) => {
    e.preventDefault();
});
