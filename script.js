let secretNum= Math.floor(Math.random()*100)+1;

const guessInput = document.getElementById("guess");
const message = document.getElementById("message");


function checkGuess(){
    const guess = parseInt(guessInput.value);

    if(guess===secretNum){
        message.innerHTML = "Congratulation You are Right. you have choosen good number and Decision is preciously Taken !!!";
        message.style.color="brown";
    }
    else if(guess>secretNum){
        message.innerHTML = "NO, You are Going too High may be try go low as you can ";
        message.style.color="#ff3333";
    }
    else if(guess<secretNum){
        message.innerHTML = "NO, You are Going too Low may be try go high as you can ";
        message.style.color="#ff3333";
    }
}

function checkreset(){
    secretNum = Math.floor(Math.random()*100)+1;
    guessInput.value = "";
    message.innerHTML="";
}