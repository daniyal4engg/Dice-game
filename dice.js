var score = [0, 0];
var roundScore = 0;
var activePlayer = 1;
dice = Math.floor(Math.random() * 6) + 1;

document.querySelector("#current" + activePlayer).textContent = dice;

var x = document.querySelector("#score-0").textContent;
console.log(x);

document.querySelector("dice").style.display = "none";
