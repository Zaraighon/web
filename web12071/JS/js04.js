function giai(){
    var A = document.getElementById("num1").value;
    var a = parseFloat(A);
    var B = document.getElementById("num2").value;
    var b = parseFloat(B);  
    var c;

    const checkedradio =document.querySelector('input[name="math"]:checked');
    const checkedradiovalue = checkedradio.value;
    if(checkedradiovalue == 'cong'){
        c = a+b;
    } else if(checkedradiovalue=='tru'){
        c = a-b;
    } else if(checkedradiovalue=='nhan'){
        c = a*b;
    } else {
        c = a/b;
    }
    document.getElementById("kq").innerText = c;
}