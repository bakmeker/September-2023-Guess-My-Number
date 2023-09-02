


let secretNumber = Math.trunc(Math.random() * 20 ) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
    document.querySelector(`.message`).textContent = message;
}

const displayScore = function(score) {
    document.querySelector(`.score`).textContent = score;
}

const displayNumber = function(number) {
    document.querySelector(`.number`).textContent = number;
}

// When player click on Again 

document.querySelector(`.again`).addEventListener(`click`, function() {
    secretNumber = Math.trunc(Math.random() * 20 ) + 1;
    displayScore(20)
    displayMessage(`Start guessing..`);
    document.querySelector(`body`).style.backgroundColor = `#222`;
    displayNumber(`?`);
    let guessInput = document.querySelector(`.guess`);
    guessInput.placeholder = `Guess here`;
    guessInput.value = ``; 
    
} )

document.querySelector(`.check`).addEventListener(`click`, function() {
    const guess = Number(document.querySelector(`.guess`).value);
    console.log(guess, typeof guess);


// When there is no input

    if (!guess) {
    displayMessage(`No Number!`);
    }
// When player wins

    else if (guess === secretNumber) { 
    displayMessage(`Correct number!`);
    displayNumber(secretNumber);
     
    document.querySelector(`body`).style.backgroundColor = `#60b347`;

    document.querySelector(`.number`).style.width = `30rem`


    if(score>highscore) {
        highscore = score;
        document.querySelector(`.highscore`).textContent = highscore;
    }

}

     // When guess is to high

    else if (guess > secretNumber) {
        if (score > 1) {
    displayMessage(`Too high`) ;
    score--;
    displayScore(score);
     } else { displayMessage(`You lost the game`)
    }
     }

    else if (guess < secretNumber) {
    displayMessage(`Too low`);
    score--;
    document.querySelector(`.score`).textContent = score;

    }
});


// WHEN PRESSING ON AGAIN - PUT A RANDOM NUMBER TO .GUESS CLASS //? Done
// How can i refresh number inside a field after you click on again?   //? Done

// DELETE NUMBER FROM CHECK FIELD //? Done
// Write a message in input field //? Done

