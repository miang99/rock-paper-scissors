const computer = () =>{
    const choice = Math.floor(Math.random() *3);
    switch(choice){
        case 0: return 'rock'; break;
        case 1: return 'paper'; break;
        case 2: return 'scissors';
    }
}
const displayIcons = (player,computer) =>{
    document.getElementById('result').style.display = 'block';
    let playerResult =  document.getElementById('player');
    let computerResult = document.getElementById('computer');
    const info = [player, computer];
    const display = [playerResult, computerResult];
    for(let i = 0; i < info.length; i++){
        
        switch(info[i]){
            case "rock": 
            display[i].className = 'fas fa-hand-rock';
            break;
            case "paper":
            display[i].className = 'fas fa-hand-paper';
            break;
            case "scissors":
            display[i].className = 'fas fa-hand-scissors';
        }
    }
}
const getResult = (e) =>{
    const playerChoice = e.target.getAttribute('data-value');
    const computerChoice = computer();
    console.log(playerChoice,computerChoice);
    displayIcons(playerChoice,computerChoice);
    let result;
    let finalResult = document.getElementById('finalresult');
    if(playerChoice === computerChoice){ finalResult.textContent = "It's equal"}
    else{
        if(playerChoice === 'rock'){
            if(computerChoice === 'scissors'){ finalResult.textContent = 'You win'}
            else finalResult.textContent = "You lose"
        }
        else if(playerChoice === 'paper'){
            if(computerChoice === 'rock'){ finalResult.textContent= 'You win';}
            else finalResult.textContent = 'You lose';
        }
        else{
            if(computerChoice === 'paper'){ finalResult.textContent = 'You win';}
            else finalResult.textContent = 'You lose';
        }
    }

}
let theButton = document.getElementsByClassName("choice");
Array.from(theButton).forEach((element)=>{
    element.addEventListener('click', getResult);
});