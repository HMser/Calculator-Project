    function getNum(butValue) {
      document.getElementById("calDisplay").value += butValue;
      console.log(butValue);
    }
    function clrDisplay() {
      document.getElementById("calDisplay").value = "";
    }
    function eqbtn(){
      result=document.getElementById("calDisplay").value;
      text=eval(result);
      document.getElementById("calDisplay").value=text;
    }
