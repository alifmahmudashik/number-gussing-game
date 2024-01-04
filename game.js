

const min = 1;
const max = 10;
let answer = Math.ceil(Math.random() * (max));

let guess;
let attempts = 0;

let resultBox = document.getElementById("resultBox");  
let showResult = document.getElementById("showResult");  
let attemptResults = document.getElementById("attemptResults");
let resetBox = document.getElementById("reset");

function result(){
    resultBox.style.display = "inline-block";
    guess = Number(document.getElementById("guess").value);

    if(isNaN(guess)){
        attempts++;
        showResult.textContent = "Please enter a number 🔢";
        attemptResults.textContent = `Your Total attempt is ${attempts} 😁`;

    }else if(min > guess || guess > max){
        attempts++;
        showResult.textContent = "Value should be 1 - 10 🤐";
        attemptResults.textContent = `Your Total attempt is ${attempts} 😁`;
    }else if(answer > guess){
        attempts++;
        showResult.textContent = "TOO Small, try again 😉";
        attemptResults.textContent = `Your Total attempt is ${attempts} 😁`;
    }else if(answer < guess){
        attempts++;
        showResult.textContent = "TOO Large, try again 😉";
        attemptResults.textContent = `Your Total attempt is ${attempts} 😁`;
    }else if(answer === guess){
        attempts++;
        showResult.textContent = `Correct! the answer is ${answer} 🏆`;
        attemptResults.textContent = `Your Total attempt is ${attempts} 😁`;
        resetBox.style.display = "inline-block";
    }

    
}


// reset the game
resetBox.onclick = function(){
    resultBox.style.display = "none";
    guess = document.getElementById("guess").value = "";
    answer = Math.ceil(Math.random() * (max));
    attempts = 0;
    resetBox.style.display = "none";
}

// open how to play pop up

function openHowToPlay(){
    document.getElementById("popUp").style.display = "block";
}


function closeHowToPlay(){
    document.getElementById("popUp").style.display = "none";
}
