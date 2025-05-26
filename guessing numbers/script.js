 const secretNumber = Math.floor(Math.random() *11);
    let attempts = 0;

    function checkGuess() {
      const userGuess = Number(document.getElementById('guessInput').value);
      attempts++;

      if (userGuess < 0 || userGuess > 10) {
        document.getElementById('feedback').textContent = "Please enter a number between 0 and 10.";
      } else if (userGuess < secretNumber) {
        document.getElementById('feedback').textContent = "Too low! Try again.";
      } else if (userGuess > secretNumber) {
        document.getElementById('feedback').textContent = "Too high! Try again.";
      } else {
        document.getElementById('feedback').textContent = `🎉 Correct! You guessed it in ${attempts} attempts.`;
      }
    }
    //revisit javacript functions, this function checkGuess gets its input from the user
    // check the if the user input is greater than 0 AND less than 10
    // if the input is less than the random then display too low and vice versa until you match the random number to the input

function addnumbers(){
    num1:2;
    num2:4;
    sum=num1+num2;
    
}
return addnumbers;
