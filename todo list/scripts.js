//thêm nút clode và nối nó vào mỗi list item
var myNodeList = document.getElementsByTagName('LI');
var i;
for(i = 0; i < myNodeList.length; i++){
	var span = document.createElement("SPAN");
	var txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	myNodeList[i].appendChild(span);
}
//kích vào nút clode để ẩn list item đó
var close = document.getElementsByClassName("close");
var i;
for(i=0; i < close.length; i++){
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.display = "none";
    }
}
//thêm biểu tượng đã check khi click vào một item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev){
    if(ev.target.tagName === 'LI'){
        ev.target.classList.toggle('checked');
    }
}, false);
//thêm một item mới khi click vào nút add
function newElement(){
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue === ''){
        alert('Bạn phải viết gì đó');
    }else{
        document.getElementById('myUl').appendChild(li);
    }
    document.getElementById('myInput').value = "";

    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for(i = 0; i < close.length; i++){
        close[i].onclick = function(){
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

