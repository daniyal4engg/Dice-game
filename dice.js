/* GAME RULES :
YOUR 3 CHALLENGES
Change the game to follow these rules:
1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/

var scores, roundScore, activePlayer, gamePlaying;

init();

document.querySelector(".btn-roll").addEventListener("click", function() {
  if (gamePlaying) {
    //1. random number
    var dice = Math.floor(Math.random() * 6) + 1;

    //2. display the result
    var diceDOM = document.querySelector(".dice");

    diceDOM.style.display = "block";
    diceDOM.src = "dice-" + dice + ".png";

    //update roundscore if rolled no. is not 1
    if (dice !== 1) {
      roundScore += dice;
      document.querySelector(
        "#current-" + activePlayer
      ).textContent = roundScore;
    } else {
      //next players turn
      nextPlayer();
    }
  }
});

document.querySelector(".btn-hold").addEventListener("click", function() {
  if (gamePlaying) {
    // current score to global score
    scores[activePlayer] += roundScore;

    // update the User interface
    document.querySelector("#score-" + activePlayer).textContent =
      scores[activePlayer];

    //check if player won the game
    if (scores[activePlayer] >= 15) {
      document.querySelector("#name-" + activePlayer).textContent = "Winner!";
      document.querySelector(".dice").style.display = "none";
      document
        .querySelector(".player-" + activeplayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activeplayer + "-panel")
        .classList.add("active");
      gamePlaying = false;
    } else {
      //next players turn
      nextPlayer();
    }
  }
});

function nextPlayer() {
  //next players turn
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  //  document.querySelector(".player-0-panel").classList.remove("active");
  // document.querySelector(".player-1-panel").classList.add("active");

  document.querySelector(".dice").style.display = "none";
}

document.querySelector(".btn-new").addEventListener("click", init);

function init() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;

  document.querySelector(".dice").style.display = "none";

  document.getElementById("score-0").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  document.getElementById("name-0").textContent = "player 1";
  document.getElementById("name-1").textContent = "player 2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
}
