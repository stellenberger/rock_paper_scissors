let playerScore = 0;
let computerScore = 0;

document.getElementById("plscore").innerHTML = playerScore;
document.getElementById("cpscore").innerHTML = computerScore

function computerPlay() {
  let choices = ["Rock", "Paper", "Scissors"];
  const randomChoice = Math.floor(Math.random() * 3);
  return choices[randomChoice];
}
document.querySelector('#rock').addEventListener('click', function(){
  document.getElementById("playerchoice").innerHTML = "Rock";
  document.getElementById("computerchoice").innerHTML = computerPlay();
  game();
})
document.querySelector('#paper').addEventListener('click', function(){
  document.getElementById("playerchoice").innerHTML = "Paper";
  document.getElementById("computerchoice").innerHTML = computerPlay();
  game();
})
document.querySelector('#scissors').addEventListener('click', function(){
  document.getElementById("playerchoice").innerHTML = "Scissors";
  document.getElementById("computerchoice").innerHTML = computerPlay();
  game();
})

function game() {
  let player = document.getElementById("playerchoice").innerHTML;
  let computer = document.getElementById("computerchoice").innerHTML;

  switch (player + computer) {
    case "RockRock":
    case "PaperPaper":
    case "ScissorsScissors":
      document.getElementById("final").innerHTML = "Its a tie."
      break;
    case "RockScissors":
    case "ScissorsPaper":
    case "PaperRock":
      document.getElementById("final").innerHTML = "Player wins. " + player
      + " beats " + computer;
      playerScore += 1;
      document.getElementById("plscore").innerHTML = playerScore;
      break;
    case "ScissorsRock":
    case "PaperScissors":
    case "RockPaper":
      document.getElementById("final").innerHTML = "Computer wins. " + computer
      + " beats " + player;
      computerScore += 1;
      document.getElementById("cpscore").innerHTML = computerScore
      break;
  }
  if (playerScore == 5) {
    alert("Game Over! Player Wins!");
    computerScore = 0;
    document.getElementById("cpscore").innerHTML = computerScore;
    playerScore = 0;
    document.getElementById("plscore").innerHTML = playerScore;
  }

  else if (computerScore == 5) {
    alert("Game Over! Computer Wins!");
    computerScore = 0;
    document.getElementById("cpscore").innerHTML = computerScore;
    playerScore = 0;
    document.getElementById("plscore").innerHTML = playerScore;
  }
  else return;
}
