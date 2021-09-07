createList(arrayElement);
// Hiển thị danh sách To do List
function createList(arrayElem) {
    console.log(arrayElem);
    for (let element of arrayElem) {
        if (element.title !== '') {
            var li = document.createElement("li");
            li.id = element.id;
            li.onclick = function () {
                element.isCompleted = !element.isCompleted;
                document.getElementById("myUL").innerHTML = '';
                createList(arrayElem);
            }
            var span = document.createElement("SPAN");
            var txt = document.createTextNode("\u00D7");
            span.className = "close";
            span.appendChild(txt);
            span.onclick = function () {
                let index = arrayElem.findIndex(a => a.id == element.id);
                arrayElem.splice(index, 1);
                document.getElementById("myUL").innerHTML = '';
                createList(arrayElem);
            };
            li.appendChild(span);
            if (element.isCompleted == true) {
                li.classList.add("checked");
            }
            var inputValue = element.title;
            var t = document.createTextNode(inputValue);
            li.appendChild(t);
            document.getElementById("myUL").appendChild(li);
        }

    }
}
// Thêm mới Element
var newElement = () => {
    var inputValue = document.getElementById("myInput").value;
    if (inputValue === '') {
        alert("Nội dung trống!");
    } else {
        let maxId = Math.max(...arrayElement.map(x => x.id));
        if (maxId == "-Infinity") {
            maxId = 0;
        }
        var newItem = { id: maxId + 1, title: inputValue, isCompleted: false }
        arrayElement.push(newItem);
    }
    document.getElementById("myInput").value = "";
    document.getElementById("myUL").innerHTML = '';
    createList(arrayElement);
}