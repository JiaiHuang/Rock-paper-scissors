const rockVal = 1;
const scissorsVal = 2;
const paperVal = 3;
let scoreCount = 0;
let userSelection;
let computerSelection;
let score = document.querySelector(".scoreCnt")
let gameMessage = document.querySelector(".gameMessTxt")
let gameMessageHouse = document.querySelector(".gameMessTxtTwo")
let rockSelect = document.querySelector(".rock");
let scissorsSelect = document.querySelector(".scissors");
let paperSelect = document.querySelector(".paper")

function randNum(){
    computerSelection = Math.floor(1 + Math.random() * 4);
}

rockSelect.addEventListener("click", () =>{
    userSelection = 1;
    randNum();
    if(userSelection == computerSelection){
        gameMessage.innerHTML = "Tie!";
        gameMessageHouse.innerHTML = "House Chose Rock";
    }
    else if(computerSelection == 2){
        gameMessage.innerHTML = "Win!";
        gameMessageHouse.innerHTML = "House Chose Scissors";
        scoreCount++;
        score.innerHTML = scoreCount;
    }
    else if(computerSelection == 3){
        gameMessage.innerHTML = "Lose!";
        gameMessageHouse.innerHTML = "House Chose Paper";
        scoreCount--;
        score.innerHTML = scoreCount;
    }
})

scissorsSelect.addEventListener("click", ()=>{
    userSelection = 2;
    randNum();
    if(userSelection == computerSelection){
        gameMessage.innerHTML = "Tie!";
        gameMessageHouse.innerHTML = "House Chose Scissors";
    }
    else if(computerSelection == 1){
        gameMessage.innerHTML = "Lose!";
        gameMessageHouse.innerHTML = " House Chose Rock";
        scoreCount--;
        score.innerHTML = scoreCount;
    }
    else if(computerSelection == 3){
        gameMessage.innerHTML = "Win!";
        gameMessageHouse.innerHTML = "House Chose Paper";
        scoreCount++;
        score.innerHTML = scoreCount;
    }
})

paperSelect.addEventListener("click", ()=>{
    userSelection = 3;
    randNum();
    if(userSelection == computerSelection){
        gameMessage.innerHTML = "Tie!";
        gameMessageHouse.innerHTML = "House Chose Paper";
    }
    else if(computerSelection == 2){
        gameMessage.innerHTML = "Lose!";
        gameMessageHouse.innerHTML = "House Chose Scissors";
        scoreCount--;
        score.innerHTML = scoreCount;
    }
    else if(computerSelection == 1){
        gameMessage.innerHTML = "Win!";
        gameMessageHouse.innerHTML = "House Chose Rock";
        scoreCount++;
        score.innerHTML = scoreCount;
    }
})
