
const start_btn = document.querySelector(".start_btn button");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");

// click vào nút start
start_btn.onclick = ()=>{
    quiz_box.classList.add("activeQuiz"); //hiện bài trắc nghiệm
    showQuetions(0);
    queCounter(1);
    startTimer(15);
    startTimerLine(0);
}

let timeValue =  15;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

// click nút bắt đầu lại
restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz"); //hiện bài trắc nghiệm
    result_box.classList.remove("activeResult"); //ẩn hộp kết quả
    timeValue = 15; 
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(que_count);
    queCounter(que_numb);
    clearInterval(counter);
    clearInterval(counterLine);
    startTimer(timeValue);
    startTimerLine(widthValue);
    timeText.textContent = "Thời gian còn lại";
    next_btn.classList.remove("show");
}

// nếu nút thoát đc click
quit_quiz.onclick = ()=>{
    window.location.reload(); //tải lại
}

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

// click nút tiếp
next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){ //nếu số câu bé hơn tổng số câu
        que_count++;
        que_numb++;
        showQuetions(que_count);
        queCounter(que_numb);
        clearInterval(counter);
        clearInterval(counterLine);
        startTimer(timeValue);
        startTimerLine(widthValue);
        timeText.textContent = "Thời gian còn lại";
        next_btn.classList.remove("show");
    }else{
        clearInterval(counter);
        clearInterval(counterLine);
        showResult();
    }
}

//lấy câu hỏi và lựa chọn từ mảng
function showQuetions(index){
    const que_text = document.querySelector(".que_text");
    let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag; //thêm span mới vào que_tag
    option_list.innerHTML = option_tag; //thêm div mới vào option_tag
    
    const option = option_list.querySelectorAll(".option");

    // thêm thuộc tính onclick vào các option
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}
// thêm div cho icon
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

//nếu ng dùng click vào option
function optionSelected(answer){
    clearInterval(counter); //xóa bộ đém
    clearInterval(counterLine); //xóa dòng đếm
    let userAns = answer.textContent; //lấy lựa chọn của ng dùng
    let correcAns = questions[que_count].answer; //lấy đáp án đúng
    const allOptions = option_list.children.length; //lấy tất cả option
    
    if(userAns == correcAns){ 
        userScore += 1; 
        answer.classList.add("correct");
        answer.insertAdjacentHTML("beforeend", tickIconTag); //thêm icon
        console.log("Câu trả lời đúng");
        console.log("Điểm của bạn = " + userScore);
    }else{
        answer.classList.add("incorrect"); 
        answer.insertAdjacentHTML("beforeend", crossIconTag); 
        console.log("Trả lời sai");

        for(i=0; i < allOptions; i++){
            if(option_list.children[i].textContent == correcAns){
                option_list.children[i].setAttribute("class", "option correct");
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag);
                console.log("Tự động trả lời.");
            }
        }
    }
    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled"); //ng dùng chọn rồi thì vô hiệu hóa những đáp án còn lại
    }
    next_btn.classList.add("show"); //hiển thị nút next sau khi ng dùng chọn đáp án
}

function showResult(){
    quiz_box.classList.remove("activeQuiz"); 
    result_box.classList.add("activeResult");
    const scoreText = result_box.querySelector(".score_text");
    let scoreTag = '<span>Số câu bạn làm được là <p>'+ userScore +'</p> / <p>'+ questions.length +'</p></span>';
    scoreText.innerHTML = scoreTag; 
}

function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time;
        time--;
        if(time < 9){ 
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero; 
        }
        if(time < 0){ 
            clearInterval(counter); 
            timeText.textContent = "Hết giờ";
            const allOptions = option_list.children.length;
            let correcAns = questions[que_count].answer; //lấy câu trả lời đúng
            option_list.children[i].setAttribute("class", "option correct");
            for(i=0; i < allOptions; i++){
                if(option_list.children[i].textContent == correcAns){
                    option_list.children[i].setAttribute("class", "option correct"); 
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag);
                    console.log("Hết giờ: Tự động trả lời.");
                }
            }
            for(i=0; i < allOptions; i++){
                option_list.children[i].classList.add("disabled");
            }
            next_btn.classList.add("show");
        }
    }
}

function startTimerLine(time){
    counterLine = setInterval(timer, 29);
    function timer(){
        time += 1;
        time_line.style.width = time + "px";
        if(time > 549){
            clearInterval(counterLine);
        }
    }
}

function queCounter(index){
    //thêm thẻ span số cấu hỏi và tổng số câu
    let totalQueCounTag = '<span><p>Câu '+ index +'</p> trên <p>'+ questions.length +'</p></span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;
}