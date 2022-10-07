// This function is used to select button rate
var indexValue = 1;
function btn_rate(indexValue) {
  var buttonRate = document.querySelectorAll(".button-div .button");

  for (var i = 0; i < buttonRate.length; i++) {
      buttonRate[i].classList.remove("buttonClicked");
  }

  buttonRate[indexValue-1].classList.add("buttonClicked");

  // now submit botton can work
  document.querySelector(".btnSubmit").removeAttribute("disabled");
}

// To visualized vote
var numberOfButton = document.querySelectorAll(".button-div .button").length;

for (var i = 0; i < numberOfButton; i++) {
  document.querySelectorAll(".button-div .button")[i].addEventListener("click", function() {

  const nVote = this.value;
  document.getElementById("vote").innerText = nVote;
  });
}


function go() {
  document.querySelector(".text-div").classList.add("hidden");
  document.querySelector(".interactiveForm").classList.add("hidden");
  document.querySelector(".imgAndRate-div").classList.remove("hidden");
  document.querySelector(".thankYou-div").classList.remove("hidden");
}









// var vote = document.getElementsById("vote").innerText = vote;

//let vote = document.querySelector(".buttonClicked").value;
