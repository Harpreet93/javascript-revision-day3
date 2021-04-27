// IIFE  - Immediately Invoked function expression
/// Javascript DOM / Window Events
(function() {
    
  let start =  () => {
      console.log("%c App started","font-size:40px; color:red");
      changeHeadingColorOnClick("8em");
  }
  window.addEventListener("load", start);
  function changeHeadingColorOnClick(fontsize) {
      let mainHeading  = document.getElementById("mainHeading");
      mainHeading.addEventListener("click", function() {
          mainHeading.style.color = 'red';
          mainHeading.style.fontSize = fontsize;
      });
  }   
  let textBoxnumber1 = document.getElementById("number1");
  textBoxnumber1.addEventListener("change",function() {
      let number1 = textBoxnumber1.value;
      let number2 = document.getElementById("number2").value;
      document.getElementById("total").value = parseInt(number1) + parseInt(number2);
  });
  let textBoxnumber2 = document.getElementById("number2");
  textBoxnumber2.addEventListener("change",function() {
      let number2 = textBoxnumber2.value;
      let number1 = document.getElementById("number1").value;
      document.getElementById("total").value = parseInt(number1) + parseInt(number2);
  });
  // let button = document.getElementById("btnAdd");
  // button.addEventListener("click", addTwoNumber());
  // function addTwoNumber() {
  //     let number1 = document.getElementById("number1").textContent;
  //     let number2 = document.getElementById("number2").textContent;
  //     let total = number1 + number2;
  //     document.getElementById("total").textContent = total;
  // }
})();