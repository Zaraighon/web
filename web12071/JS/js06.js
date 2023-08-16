function xuatkq(){
    var ten = document.getElementById("user").value;
    var matkhau = document.getElementById("pass").value;
    var dodai = matkhau.length;
    var nam = document.getElementById("male");
    var nu = document.getElementById("female");
    var gioitinh;
    var vande = document.getElementById("topic");
    var i = vande.selectedIndex;
    if(male.checked){
        gioitinh="Nam";
    } else {
        gioitinh="Nữ";
    }



    document.getElementById("kq").innerText = "Chào mừng "+ten+"\n Bạn là "+gioitinh+"\nMật khẩu của bạn có "+dodai+" ký tự"+"\n Vấn đề bạn quan tâm là "+vande.options[i].text;
}

