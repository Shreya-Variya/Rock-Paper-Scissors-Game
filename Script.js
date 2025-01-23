let userScore = 0;
let comScore = 0;

const choice = document.querySelectorAll(".ch");
const msg = document.querySelector("#msg");

const userS = document.querySelector("#user-score");
const comS = document.querySelector("#com-score");

//Generate computer choice
const genComputerChoice = () => 
{
    let op = ["rock" , "paper" , "scissors"];
    const randIdx =  Math.floor(Math.random() * 3);
    return op[randIdx];
}

//Function for game drawn
const drawGame = () => 
{
    msg.innerText = "Game was Drawn. Play again.";
    msg.style.backgroundColor = "#f5bf42";
}

//Function for showing winner
const showWinner = (userWin, userCh, comCh) => 
{
    if(userWin)
    {
        userScore++;
        userS.innerText = userScore;
        msg.innerText = `You win! Your ${userCh} beats ${comCh}.`;
        msg.style.backgroundColor = "green";
    }
    else
    {
        comScore++;
        comS.innerText = comScore;
        msg.innerText = `You lose! ${comCh} beats your ${userCh}.`;
        msg.style.backgroundColor = "red";
    }
}

//Function for play game / Main function
const playGame = (userCh) =>
{
    //console.log("User choice = ",userCh);

    //Generate computer choice

    const comCh =  genComputerChoice();
    //console.log("Computer choice = ",comCh);

    if(userCh === comCh)
    {
        //Drawn game
        drawGame();
    }
    else
    {
        let userWin = true;
        if(userCh === "rock") 
        {
            //paper, scissors
           userWin = comCh === "paper" ? false : true;
        }
        else if(userCh === "paper")
        {
            //scissors, rock
            userWin = comCh === "scissors" ? false : true;
        }
        else
        {
            //rock, paper
            userWin = comCh === "rock" ? false : true;
        }
        showWinner(userWin, userCh, comCh);
    }
}

//Access user choice
choice.forEach((ch) => {
    console.log(ch);
    ch.addEventListener("click", () => {
        const userCh = ch.getAttribute("id");
        playGame(userCh);
    })
})