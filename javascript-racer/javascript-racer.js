
// document.addEventListener("DOMContentLoaded", function () {
  var player1 = document.getElementById("player1_strip");
  console.log(player1);
  var player2 = document.getElementById("player2_strip");
  console.log(player2);

  var player1_items = player1.querySelectorAll("td")
  var player2_items = player2.querySelectorAll("td")

 
// find the code for the pressed key
  document.onkeyup = function(e){
    console.log(e.which);
  };

// Set start state of the game
function startGame(playerItems){
  for(var i = 0; i < playerItems.length; i++ ){
    // console.log(playerItems[i])
    playerItems[i].className = "";
    playerItems[0].className = "active";
  };
};
startGame(player1_items);
startGame(player2_items);
alert("Press 'Q' to move player 1 and 'P' to move player 2")

// update player position function
function updatePlayerPosition(player){
  for(var i = 0; i < player.length; i++ ){
    if(player[i].className === "active"){
      nextElement = player[i].nextElementSibling;
      // console.log(nextElement);
      if(player[i] === player[3]){
        alert("Game Over")
        startGame(player1_items);
        startGame(player2_items);
      }else{
        nextElement.className = "active";
        player[i].className = "";
      };
    break;
    };
  };
};

// run the update player funtion based on the key press
document.onkeyup = function whichKey(e){
  if (e.which === 81) {
    updatePlayerPosition(player1_items)
  }else if (e.which === 80){
    updatePlayerPosition(player2_items)
  }else{
    alert("Press 'Q' to move player 1 and 'P' to move player 2")
  };
};

// });