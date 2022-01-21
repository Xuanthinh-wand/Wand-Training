var screen_result = document.getElementById('screen-result');

number = (num) => {
    let numberContent = num.innerHTML;
    valueScreen = screen_result.innerHTML + numberContent;
    screen_result.innerHTML = valueScreen;
    return caculation = (cacul) => {
        let caculContent = cacul.innerHTML;
        screen_result.innerHTML = screen_result.innerHTML + caculContent;
    }

}
calculate = () => {
    var result = eval(screen_result.innerHTML);
    screen_result.innerHTML = result;
}

var removeContent = () => {
    screen_result.innerHTML = "";
}

del = () => {
    let str = screen_result.innerHTML;
    let del = str.slice(0, -1);
    screen_result.innerHTML = del;
}