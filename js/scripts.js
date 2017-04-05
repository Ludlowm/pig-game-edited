//Business Logic
function player(userRoll, playerTotal) {
this.userRoll = [];
this.playerTotal = total;
}

function diceRoll(currentRoll) {
  return Math.floor(Math.random() * 6 + 1);
}

var rollArray = [];




//User Interface Logic
$(document).ready(function(){

  $("#roll").click(function() {
    var currentRoll = diceRoll(currentRoll);
    rollArray.push(currentRoll);

    if (currentRoll === 1) {
      rollArray = [];
    }
    var sum = rollArray.reduce((a, b) => a + b, 0);

    $("#output").text(sum);
    $("#hold").click(function() {
      $("#totalOutput").text(sum)
    console.log(currentRoll);
  });
  });
});
