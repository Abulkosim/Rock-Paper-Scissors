let me; 
let myScore = 0;
let opponent;
let opponentScore = 0;

let choices = ['rock', 'paper', 'scissors'];

window.onload = function() {
  for (let i = 0; i < 3; i++) {
      let choice = document.createElement("img");
      choice.id = choices[i];
      choice.src = choices[i] + ".png";
      choice.addEventListener('click', selectChoice);
      document.querySelector("#choices").append(choice);
  }
}

function selectChoice() {
  me = this.id;
  document.querySelector("#my-choice").src = me + ".png";

  opponent = choices[Math.floor(Math.random() * 3)];
  document.querySelector("#opponent-choice").src = opponent + ".png";

  if (me == opponent) {
    myScore += 1;
    opponentScore += 1;
  } else if (opponent == 'rock') {
    if (me == 'scissors') {
      opponentScore += 1;
    } else {
      myScore += 1;
    }
  } else if (opponent == 'scissors') {
    if (me =='paper') {
      opponentScore += 1;
    } else {
      myScore += 1;
    }
  } else if (opponent == 'paper') {
    if (me == 'rock') {
      opponentScore += 1;
    } else {
      myScore += 1;
    }
  }

  document.querySelector('#my-score').textContent = myScore;
  document.querySelector('#opponent-score').textContent = opponentScore;
}

