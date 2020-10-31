var ElForm = document.querySelector(".calc-form");
var ElNumber = document.querySelector(".calc-display");
var ElResult = document.querySelector(".result");
var ElBtn = document.querySelector(".calc-button");

ElForm.addEventListener('submit' , function(evt){
  evt.preventDefault();
  var ElFormas = parseFloat(ElNumber.value.trim() , 10);

  if (isNaN(ElFormas)){
    ElResult.textContent = "Error";
    return;
  }
var resultInF = ElFormas * 9 / 5 + 32;
ElResult.textContent = resultInF;

});
