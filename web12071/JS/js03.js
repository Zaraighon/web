function solve() {
    
    var a = parseFloat(document.getElementById("a").value);
    var b = parseFloat(document.getElementById("b").value);
    var c = parseFloat(document.getElementById("c").value);
  
    
    if (a === 0) {
      document.getElementById("result").innerText = "Hệ số a phải khác 0 để là phương trình bậc hai.";
      return;
    }
  
    
    var delta = b * b - 4 * a * c;
  
    
    if (delta > 0) {
      var x1 = (-b + Math.sqrt(delta)) / (2 * a);
      var x2 = (-b - Math.sqrt(delta)) / (2 * a);
      document.getElementById("result").innerText = "Có hai nghiệm phân biệt: x1 = " + x1 + ", x2 = " + x2;
    } else if (delta === 0) {
      var x = -b / (2 * a);
      document.getElementById("result").innerText = "Có một nghiệm kép: x = " + x;
    } else {
      document.getElementById("result").innerText = "Phương trình không có nghiệm thực.";
    }
  }
  function resetInputs() {
    
    document.getElementById("a").value = "";
    document.getElementById("b").value = "";
    document.getElementById("c").value = "";
  
    
    document.getElementById("result").innerText = "";
  }