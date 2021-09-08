const  game = ()=> {
    let pScore = 0;
    let cScore = 0;
    let round = 1;
    

    const playMatch = ()=> {
        const buttons = document.querySelectorAll(".button");
        const computerOption = [ "rock", "paper", "scissors" ];
        
        buttons.forEach(button => {
          button.addEventListener("click",function(){
            //Computer Random
            const computerPlay= Math.floor(Math.random()*3);
            const computerSelection= computerOption[computerPlay];
            //Start Compare Hand 
            playRound(this.textContent, computerSelection);
            //End Game
            if (pScore === 5 || cScore === 5 ){
                declareWinner();
            }
            if (round === 2){
                document.body.style.backgroundColor = "rgb(102, 133, 143)";
            }
            declareWinner = () => {
                round = 1;
                if (pScore > cScore){
                    winner.textContent = "You Win The Game!";
                    document.body.style.backgroundColor= "darkblue";
                } else {
                    winner.textContent = "You Lost...Try Again";
                    document.body.style.backgroundColor= "black";
                };
                pScore = 0;
                cScore = 0;
            };
            })
        })
    };

    //Update Intro
    const winner = document.querySelector(".winner");
    const numberRound = document.querySelector('.round');
    const playRound = (playerSelection, computerSelection)=> { 
        playerSelection.toString();
        computerSelection.toString();
        numberRound.textContent = 'Round ' + round;
        round++;
        if (computerSelection == playerSelection){
            winner.textContent = "It is a tie"
            updateScore();
            return;
        } 
        //Player Pick Rock
        if (playerSelection === "rock"){
            if (computerSelection === "scissors"){r
                winner.textContent = "You Win! Rock beat Scissors";
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "You Lose! Paper eat Rock";
                cScore++;
                updateScore();
                return;
            }
        }
        //Player Pick Paper
        if (playerSelection === "paper"){
            if (computerSelection === "rock"){
                winner.textContent = "You Win! Paper beat Rock";
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "You Lose! Scissors beat Paper";
                cScore++;
                updateScore();
                return;
            }
        }
        //Player Pick Scissors
        if (playerSelection === "scissors"){
            if (computerSelection === "paper"){
                winner.textContent = " You Win! Scissors beat Paper";
                pScore++;
                updateScore();
                return; 
            } else {
                winner.textContent = "You Lose! Rock beat Scissors";
                cScore++;
                updateScore();
                return;
            }
        }
    }

    //Update Score
    const updateScore = () => {
        const playerScore= document.querySelector(".playerScore")
        const computerScore= document.querySelector(".computerScore")
        playerScore.textContent= pScore;
        computerScore.textContent= cScore;
        };
    playMatch();
};
game();