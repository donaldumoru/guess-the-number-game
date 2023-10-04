// Class declaration
class Player {
    constructor(name, age, occupation, country) {
        this.name = name;
        this.age = age;
        this.occupation = occupation;
        this.country = country;
        this.chances = 4;
    }
}

let players = [
    new Player("Player One", 20, "Programmer", "Netherlands"),
    new Player("Player Two", 19, "Engineer", "Netherlands")
];



// Declare variables for the game

let randomNumber = Math.floor(Math.random() * 21);;
let currentPlayer = 0;
let infoMessage = document.getElementById("game-info");
let chancesLeft = document.getElementById("chances-left");
let yourGuess = document.getElementById("your-guess");
let guessCheck = document.getElementById("too-high")
let playerName = document.getElementById("player-name")

// Chances and game info to begin with
chancesLeft.innerHTML = "CHANCES LEFT: " + players[currentPlayer].chances;
infoMessage.innerHTML = players[currentPlayer].name + ", Your Turn.";

function playGame() {

    // IF statement to check if there are any chances left
    if (players[currentPlayer].chances === 0) {
        infoMessage.innerHTML = "Game Over! " + "The random number is " + randomNumber;
        yourGuess.disabled = true;
        return;
    }

    // Get the player's guess and store it in the playerGuess variable
    let playerGuess = parseInt(yourGuess.value);

    console.log(players[currentPlayer].name + " Player Guess: " + playerGuess)

    // Check if guess is same as random number
    if (playerGuess === randomNumber) {
        infoMessage.innerHTML = players[currentPlayer].name + " Won!";
        yourGuess.disabled = true;

        //  Remove guessCheck variable from HTML when game has been won
        guessCheck.innerHTML = ""


    } else {

        // To let players know if guess was higher or lower than random number
        if (playerGuess > randomNumber) {

            guessCheck.innerHTML = players[currentPlayer].name + ", your guess was higher than the random number. Keep it low next time 😊";
        } else {
            guessCheck.innerHTML = players[currentPlayer].name + ", your guess was lower than the random number. Keep it high next time 😊";
        }

        // Decrement chances by 1 after a wrong guess
        players[currentPlayer].chances--;

        // Display message and switch to the next player
        infoMessage.innerHTML = "Wrong guess, " + players[currentPlayer].name + ". " + players[(currentPlayer + 1) % players.length].name + ", Your Turn.";
        currentPlayer = (currentPlayer + 1) % players.length;



        // console.log(players[currentPlayer].name + " Chances left: " + players[currentPlayer].chances);

        chancesLeft.innerHTML = "CHANCES LEFT: " + players[currentPlayer].chances;

    }
}
