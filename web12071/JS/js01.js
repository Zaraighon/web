function tinhtuoi(){
    const namsinh = document.getElementById("namsinh").value;
    const namhientai = new Date().getFullYear();
    const tuoi = namhientai - namsinh;
    const ten = document.getElementById("ten").value;

    document.getElementById("kqten").innerText=`Chào bạn ${ten}`;
document.getElementById("kqtuoi").innerText=`Bạn ${tuoi} tuổi`;
}

