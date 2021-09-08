const questionNumber = document.querySelector('.question-number')
const questionText = document.querySelector('.question-text')
const optionContainer = document.querySelector('.option-container')
const homeBox = document.querySelector('.home-box')
const quizBox = document.querySelector('.quiz-box')
const resultBox = document.querySelector('.result-box')
const nextBtn = document.querySelector('.next-question-btn')
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");


homeBox.querySelector('.total-question').innerHTML = getElementsQuiz.length

let currentQuestion;
let questionCounter = 0;
let availableQuestion = [];
let availableOption = [];
let correctAnswer = 0;
let counter;
let timeValue = 20;


//push question into availableQuestion array
function setavailableQuestion() {
    const totalQuestion = getElementsQuiz.length;
    for (let i = 0; i < totalQuestion; i++) {
        availableQuestion.push(getElementsQuiz[i])
    }
    console.log(availableQuestion)
}

var myQuiz = document.getElementById('myQuiz')


//set question number, question and option
function getNewQuestion() {
    // set question number
    questionNumber.innerHTML = `Câu hỏi ${questionCounter + 1} trên tổng số ${getElementsQuiz.length}`
    //set question text
    //random question 
    const questionIndex = availableQuestion[Math.floor(Math.random() * availableQuestion.length)]

    currentQuestion = questionIndex
    questionText.innerHTML = currentQuestion.question

    // get the position 'questionIndex' from the availableQuestion array
    const index1 = availableQuestion.indexOf(questionIndex)
    //remove 'questionIndex' from the availableQuestion array, question not repeat
    availableQuestion.splice(index1, 1)

    //set option
    //get length option
    const optionNumber = currentQuestion.options.length;
    for (let i = 0; i < optionNumber; i++) {
        //push option into availableOption array
        availableOption.push(i)
    }
    optionContainer.innerHTML = ''
    for (let i = 0; i < optionNumber; i++) {
        //random option
        const optionIndex = availableOption[Math.floor(Math.random() * availableOption.length)]
        const index2 = availableOption.indexOf(optionIndex)
        availableOption.splice(index2, 1)

        //create div class option
        const option = document.createElement("div")
        option.classList.add("option")
        option.innerHTML = currentQuestion.options[optionIndex]
        option.id = optionIndex
        optionContainer.appendChild(option)
        option.setAttribute("onclick", "getResult(this)");

    }

    questionCounter++;
}
//get result
function getResult(optionItem) {
    clearInterval(counter);
    // console.log(optionItem.innerHTML)
    const id = parseInt(optionItem.id)
    // optionItem.classList.add("choose")
    if (id === currentQuestion.answer) {
        optionItem.classList.add("correct")
        correctAnswer++;
        nextBtn.classList.remove("hide")
    }
    else {
        optionItem.classList.add("wrong")
        nextBtn.classList.remove("hide")

        //if answer wrong, show answer correct
        const optionLen = optionContainer.children.length
        for (let i = 0; i < optionLen; i++) {
            if (parseInt(optionContainer.children[i].id) === currentQuestion.answer) {
                optionContainer.children[i].classList.add("correct")
            }
        }

    }
    unclickOption()
}

// unclick if choosed option
function unclickOption() {
    const optionLen = optionContainer.children.length;
    for (let i = 0; i < optionLen; i++) {
        optionContainer.children[i].classList.add("already-answed")
    }
}

//btn next question

function nextQuestion() {
    nextBtn.classList.add("hide")

    if (questionCounter === getElementsQuiz.length) {
        quizOver()

    }
    else {
        clearInterval(counter);
        startTimer(timeValue);
        getNewQuestion();

    }
}

function quizOver() {
    quizBox.classList.add("hide");
    resultBox.classList.remove("hide")
    quizResult()
}

function quizResult() {
    resultBox.querySelector('.total-question').innerHTML = getElementsQuiz.length
    resultBox.querySelector('.total-score').innerHTML = `${correctAnswer} / ${getElementsQuiz.length}`
    const total = parseFloat(correctAnswer / getElementsQuiz.length) * 10
    resultBox.querySelector('.total').innerHTML = `${total} điểm`
}

function resetQuiz() {
    questionCounter = 0;
    correctAnswer = 0;
}

function tryAgain() {
    resultBox.classList.add("hide")
    quizBox.classList.remove("hide")
    resetQuiz();
    start();
}

function goHome() {
    resultBox.classList.add("hide")
    homeBox.classList.remove("hide")
    resetQuiz()
}

function start() {
    homeBox.classList.add("hide")
    quizBox.classList.remove("hide")
    //push question into availableQuestion array
    setavailableQuestion();

    startTimer(timeValue)

    //call function set question number, question and option
    getNewQuestion()
}

// counter timer
function startTimer(time) {
    counter = setInterval(timer, 1000)
    function timer() {
        timeCount.textContent = time;
        time--;
        if (time < 0) {
            clearInterval(counter);
            timeCount.textContent = "0"
            // nextQuestion()
            nextBtn.classList.remove("hide")
            unclickOption()

        }
        if (time < 9) {
            let addZero = timeCount.textContent;
            timeCount.textContent = "0" + addZero
        }
    }

}

function seeAgain() {

}


var Quiz = {
    showAnswers: function () {
        //var content = '<h2>Answers</h2>';
        availableQuestion.forEach(function (q) {
            /* content += '<div>';
            content += '</div>'; */
            q.show();
            q.showUserAnswers();
            q.showCorrect();
            q.inputs.forEach(function (inp) {
                inp.disabled = true;
                inp.style.display = 'none';
            });
        });
    }
}
