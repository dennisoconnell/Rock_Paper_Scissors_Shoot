let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function main(){
    
    rock_div.addEventListener('click', function() {
        game("r");
    })

    paper_div.addEventListener('click', function() {
        game("p");
    })

    scissors_div.addEventListener('click', function() {
        game("s");
    })
}


function getComputerChoice(){
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = userChoice + " beats " + computerChoice + ". You win!";
    change_green(userChoice);
    setTimeout(change_back(userChoice), 2000);
}

    function change_green(userChoice){
        console.log("TEST");
        document.getElementById(userChoice).style.border = "8px solid green";
        
    }
    function change_back(userChoice){
        console.log("TEST");
        document.getElementById(userChoice).style.border = "2px solid white";
    }

function lose(userChoice, computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = userChoice + " loses to " + computerChoice + ". You lose!";
    document.getElementById(userChoice).style.border = "8px solid red";
}

function tie(userChoice, computerChoice){
    result_p.innerHTML = userChoice + " ties with " + computerChoice + ". You tied!";
}

function game(userChoice){
    const computerChoice = getComputerChoice();


    switch (userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice)
            break;
        case "rr":
        case "pp":
        case "ss":
            tie(userChoice, computerChoice);
            break;
        
    }
}

main();