var Lay_gia_tri_cu = () => document.getElementById("gia_tri_cu").innerText;
var In_gia_tri_cu = (so) => document.getElementById("gia_tri_cu").innerText = so;
var Lay_ket_qua = () => document.getElementById("gia_tri_xuat").innerText;
var In_Ket_qua = (so) => {
    if (so == "") {
        document.getElementById("gia_tri_xuat").innerText = so;
    } else {
        document.getElementById("gia_tri_xuat").innerText = Dinh_dang_chuoi(so);
    }
}
var Dinh_dang_chuoi = (so) => {
    if (so == "-") {
        return "";
    }
    //var n = Number(so);
    //console.log(n);
    var gia_tri = so.toString();
    return gia_tri;
}
var he_thong = document.getElementsByClassName('he_thong');

for (let ht of he_thong) {
    ht.addEventListener('click', function () {
        if (this.id == "xoa_tat_ca") {
            In_Ket_qua("");
            In_gia_tri_cu("");
        }
        else if (this.id == "xoa_tung_so") {
            let ket_qua = Xoa_Dinh_dang_chuoi(Lay_ket_qua()).toString();
            if (ket_qua) {
                ket_qua = ket_qua.substr(0, ket_qua.length - 1)
                In_Ket_qua(ket_qua)
            }
        }
        else {
            var ket_qua = Lay_ket_qua();
            var ket_qua_cu = Lay_gia_tri_cu();
            if (ket_qua != "") {
                ket_qua_cu = (ket_qua_cu + ket_qua).replace("--", "- -");
                if (this.id == "=") {
                    var ket_qua_cuoi = eval(ket_qua_cu);
                    In_Ket_qua(ket_qua_cuoi)
                    In_gia_tri_cu("")
                } else
                    if (this.id == "%") {
                        ket_qua = Number(ket_qua) / 100;
                        In_Ket_qua(ket_qua);
                    }
                    else {
                        ket_qua_cu = ket_qua_cu + this.id;
                        In_gia_tri_cu(ket_qua_cu)
                        In_Ket_qua("")
                    }
            }
        }
    })
}
var con_so = document.getElementsByClassName('con_so');

for (let cs of con_so) {
    cs.addEventListener('click', function () {
        var ket_qua = Lay_ket_qua();//Xoa_Dinh_dang_chuoi(Lay_ket_qua())
        if (ket_qua != NaN) {
            if (this.id == "reverse") {
                if (ket_qua.indexOf("-") == -1) {
                    ket_qua = "-" + ket_qua;
                }
                else {
                    ket_qua = ket_qua.slice(1);
                }
            }
            else {
                ket_qua = ket_qua + this.id;
            }

            console.log(ket_qua.toString());
            In_Ket_qua(ket_qua)
        }
    })
}
// Dark & Light Mode
let checkbox = document.querySelector('input[name=theme]');
checkbox.addEventListener('change', function () {
    if (this.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
})
