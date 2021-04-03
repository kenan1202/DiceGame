//Roll Button
const rollBtn = document.querySelector('.rollDice');
//New Game Button
const restartBtn = document.querySelector('.newGame');
//Hold Button
const holdBtn = document.querySelector('.hold');
//Dice Box
const diceBox = document.querySelector('.diceBox');
//Current Score
const currentScore = document.querySelectorAll('.currentDice');
//Total Score
const totalScore = document.querySelectorAll('.totalScore');
//Player
const players = document.querySelectorAll('.player');


let sum = 0;
let queue = 0;
let totalSum = [0, 0];
let working = true;

function changeDice() {
    sum = 0;
    currentScore[queue].innerHTML = sum;
    queue = queue === 0 ? 1 : 0;
    players[queue].style.backgroundColor = 'rgba(230,230,230,0.8)';
}


rollBtn.addEventListener("click", function() {
    if(working) {
        let dice = Math.trunc(Math.random() * 6) + 1;
        sum += dice;
        diceBox.style.display = 'flex';
        diceBox.innerHTML = dice;
    
        currentScore[queue].innerHTML = sum;
    
        if(dice === 1) {
            diceBox.style.display = 'none';
            players[queue].style.backgroundColor = 'rgba(230,230,230,0.4)';
            changeDice();
        }
    }
});


holdBtn.addEventListener("click", function() {
    if(working) {
        totalSum[queue] += sum;
        totalScore[queue].innerHTML = totalSum[queue];
        players[queue].style.backgroundColor = 'rgba(230,230,230,0.4)';
    
        if(totalSum[queue] >= 101) {
            players[queue].style.backgroundColor = 'rgba(0,0,0,0.5)';
            diceBox.style.display = 'none';
            working = false;
        }

        changeDice();
    }
});


restartBtn.addEventListener("click", function() {
    console.log('Clicked');
    queue = 0;
    totalSum = [0,0];
    sum = 0;
    diceBox.style.display = 'none';
    working = true;

    currentScore[queue].innerHTML = '0';
    currentScore[queue + 1].innerHTML = '0';
    totalScore[queue].innerHTML = '0';
    totalScore[queue + 1].innerHTML = '0';
    players[queue].style.backgroundColor = 'rgba(230,230,230,0.8)';
    players[queue + 1].style.backgroundColor = 'rgba(230,230,230,0.4)';
});
