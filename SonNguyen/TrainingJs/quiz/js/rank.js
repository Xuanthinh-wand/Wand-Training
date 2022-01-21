let listData = JSON.parse(localStorage.getItem("rank"));
let lengthData = listData.length;
let close = document.getElementById("close-popup");
let popup = document.getElementById("popup-detail");
let showData = () => {
  for (i = 0; i < lengthData; i++) {
    let newDiv = document.createElement("div");
    newDiv.className = "rank-detail-group";

    //khởi tạo div hiển thị nội dung
    let newDivName = document.createElement("div");
    newDivName.className = "rank-name detail";
    newDivName.innerHTML = listData[i].name;
    newDiv.appendChild(newDivName);

    //khởi tạo div hiển thị ngày làm
    let newDivTime = document.createElement("div");
    newDivTime.className = "rank-date detail";
    newDivTime.innerHTML = listData[i].time;
    newDiv.appendChild(newDivTime);

    //khởi tạo div hiển thị ngày tạo
    let newDivPoint = document.createElement("div");
    newDivPoint.className = "rank-point detail";
    newDivPoint.innerHTML = listData[i].point;
    newDiv.appendChild(newDivPoint);

    //khởi tạo div tùy chọn
    let newDivOption = document.createElement("div");
    newDivOption.className = "rank-option detail";
    newDivOption.innerHTML = "Xem chi tiết";
    newDivOption.setAttribute("onclick", "showDetail(" + i + ")");

    newDiv.appendChild(newDivOption);

    let rank_content = document.getElementById("rank-content");
    rank_content.insertBefore(newDiv, rank_content.childNodes[1]);
  }
};
showData();

let appenDetail = document.getElementById("detail-exam");
function showDetail(n) {
  popup.style.display = "block";
  let ArrQue = listData[n].finalRandom;
  let ArrChoose = listData[n].arr;
  if (typeof ArrQue !== "undefined") {
    let newArrQue = JSON.parse(JSON.stringify(ArrQue));
    lengthArrQue = newArrQue.length;
    for (let j = 0; j < lengthArrQue; j++) {
      let num = j + 1;
      let newDivQuesGroup = document.createElement("div");
      newDivQuesGroup.className = "ques-group";

      let newDivQuestion = document.createElement("div");
      newDivQuestion.className = "ques-details";
      newDivQuestion.id = "ques-" + newArrQue[j].id;
      newDivQuestion.innerHTML = num + ". " + newArrQue[j].question;
      newDivQuesGroup.appendChild(newDivQuestion);
      appenDetail.appendChild(newDivQuesGroup);
      newArrQue[j].ans.forEach((data) => {
        if (data.key == newArrQue[j].ansId) {
          let newDivAnsGroup = document.createElement("div");
          newDivAnsGroup.className = "ans-group";
          appenDetail.appendChild(newDivAnsGroup);

          let newCorrect = document.createElement("p");
          newCorrect.className = "correct p-inline";
          newCorrect.innerHTML = "Đáp án đúng :";
          newDivAnsGroup.appendChild(newCorrect);

          let newLabel = document.createElement("p");
          newLabel.className = "p-inline";
          newLabel.innerHTML = data.value;
          newDivAnsGroup.appendChild(newLabel);
        }
        if(data.key == ArrChoose[j]){
          let newDivAnsGroup = document.createElement("div");
          newDivAnsGroup.className = "ans-group";
          appenDetail.appendChild(newDivAnsGroup);

          let newChoose = document.createElement("p");
          newChoose.className = "choose p-inline";
          newChoose.innerHTML = "Bạn chọn :";
          newDivAnsGroup.appendChild(newChoose);

          let newLabel = document.createElement("p");
          newLabel.className = "p-inline";
          newLabel.innerHTML = data.value;
          newDivAnsGroup.appendChild(newLabel);
        }
      });
    }
  }
}

close.addEventListener("click", () => {
window.location.href = "rank.html"
})


