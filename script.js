// Get the DOM elements and initialise the game
const input = document.querySelector("input"),
    guess = document.querySelector(".guess"),
    checkButton = document.querySelector(".button"),
    remainChances = document.querySelector(".chances"),
    replayButton = document.querySelector(".replay");

// Set the focus on the input field
input.focus();

let randomNumber = Math.floor(Math.random() * 101);
chance = 10;

replayButton.addEventListener("click", () => window.location.reload());

// Listen for the click event on the check button
checkButton.addEventListener("click", () => {
    // Decrease the chance variable on every click
    chance--;
    // Get the value from the input field
    let inputValue = input.value;
    // Check if the input value equals the random number
    if (inputValue == randomNumber) {
        [guess.textContent, input.disabled] = ["Congratulations", true];
        [guess.style.color]  = ["#333"];
        [replayButton.style.display] = ["block"];
    } else if (inputValue > randomNumber && inputValue < 101) {
        [guess.textContent, remainChances.textContent] = ["Your guess is too high", chance];
    } else if (inputValue < randomNumber && inputValue > 0) {
        [guess.textContent, remainChances.textContent] = ["Your guess is too low", chance];
    } else {
        [guess.textContent, remainChances.textContent] = ["Your number is invalid", chance];
        guess.style.color = "#DE0611";
    }
    // Check if no chances remaining
    if (chance == 0) {
        [input.disabled, inputValue] = [true, ""];
        [guess.textContent, guess.style.color]  = ["Game Over", "#DE0611"];
    }
    if (chance < 0 ) {
        window.location.reload();
    }
});
