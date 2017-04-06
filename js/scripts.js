//Business Logic
function player(n, tot) {
this.name = n;
this.tot = tot;
this.rollArray = [];
}

function diceRoll(currentRoll) {
  return Math.floor(Math.random() * 6 + 1);
}


var curSum;
var currentPlayer = 0;
var playerCount = 2;


function gameboy(){
    this.players = [];
    for (i = 0; i < playerCount; i++){
      this.players[i] = new player("(none-set)", 0);
    }
}

//User Interface Logic
$(document).ready(function(){
  var game = new gameboy();

  $("#roll").click(function() {
    var currentRoll = diceRoll(currentRoll);
    game.players[currentPlayer].rollArray.push(currentRoll);

    if (currentRoll == 1) {
      game.players[currentPlayer].rollArray = [];
      if (currentPlayer < (playerCount - 1))
        currentPlayer++;
      else
        currentPlayer = 0;
    }
    curSum = game.players[currentPlayer].rollArray.reduce((a, b) => a + b, 0);

    $("#output").text(curSum);

    console.log(currentRoll);
  });

  $("#hold").click(function() {
      if (game.players[currentPlayer].name == "(none-set)")
        game.players[currentPlayer] = new player($("#user-input").val(), (game.players[currentPlayer].tot + curSum));
      else
        game.players[currentPlayer] = new player(game.players[currentPlayer].name, (game.players[currentPlayer].tot + curSum));

      var outStr = "";
      for (i = 0; i < playerCount; i++){
        if (i + 1 == playerCount)
          outStr += game.players[i].name + " has scored " + game.players[i].tot;
        else
          outStr += game.players[i].name + " has scored " + game.players[i].tot + " | ";
      }
      $("#totalOutput").text(outStr);


      if (currentPlayer < (playerCount - 1))
        currentPlayer++;
      else
        currentPlayer = 0;
      //currentPlayer++;
      curSum = 0;
      $("#output").text(curSum);
      game.players[currentPlayer].rollArray = [];
  });
});
