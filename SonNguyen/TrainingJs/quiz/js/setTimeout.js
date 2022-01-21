let m = 15;
let s = 00;
let timeout = 1000;
start = function() {


    if (m === null) {
        m = parseInt(document.getElementById("m_val").value);
        s = parseInt(document.getElementById("s_val").value);
    }
    if (s === -1) {
        m -= 1;
        s = 59;
    }
    if (m === -1) {
        clearTimeout(getTimeout);
        alert("Hết giờ");
        document.getElementById("submit_Exam").click()
    }
    document.getElementById("m").innerText = m.toString();
    document.getElementById("s").innerText = s.toString();
    getTimeout = setTimeout(function() {
        s--;
        start();
    }, timeout);
}