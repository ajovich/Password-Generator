/* Pseudo Code
Declare variables: passwordLength, uppercase, lowercase, numbers, symbols

Declare empty array to store user input

Prompt user to input desired length of password
  if passwordlength >= 8 || passwordLength <= 128 
    store within array
  else alert "Please input again." 
    writePassword(); function recall
  END IF

Prompt user to select cancel || confirm if they desire above criteria. Cancel = false/no, Confirm = true/yes. If none confirmed, alert window "You must confirm one"
Need to provide every option w/ if - else if - else statement
  if uppercase === true && lowercase === true && numbers === true && symbols === true 
    store within array
    else if ...
    store within array
    else if ... 
    store within array
    ...
    else alert "Must select one"
  END IF 

Random math selection
  for loop with Math.Random

Return password
*/


// Assignment Code.
var generateBtn = document.querySelector("#generate");

// Write password to the #password input.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button.
generateBtn.addEventListener("click", writePassword);

// Declared variables and defined in strings based on README criteria that needs to be met for secure password.
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";

// Used \ to add certain special characters to the string.
var symbols = " !\"#$%\&\'()*+,-./:;<=>?@[]^_`{|}~ ";

// Empty array to store user input.
let securePassword = [];

// Empty array to store secure generated password at the end. 
let newPassword = [];

// Begins with function writePassword()
// Prompts user to input the desired length for password
// If the length does not meet criteria below, an alert pops up with criteria that needs to be met prior to continuing to the next question.
function writePassword() {
 
  var passwordLength = prompt("Please enter the desired password length");
  if (passwordLength >= 8 && passwordLength <= 128) {
    console.log(passwordLength)
  } else {
    alert("Password must be between 8 - 128 characters. Please input again.");
    writePassword();
  }

  // If user clicks "confirm" on alert window for any of the below criteria === true.
  var uppercase = confirm("Would you like to use uppercase letters?");
  var lowercase = confirm("Would you like to use lowercase letters?");
  var numbers = confirm("Would you like to use numbers?");
  var symbols = confirm("Would you like to use special characters?");

// if - else if - else statments for every possibility. 
// Is there any easier way to do this?? 64 possible combinations?
if (uppercase === true && lowercase === true && numbers === true && symbols === true) {
  securePassword.push();
} else if (uppercase === false && lowercase === true && numbers === true && symbols === true) {
  securePassword.push();
} else if (uppercase === false && lowercase === false && numbers === true && symbols === false) {
  securePassword.push();
} else if (uppercase === false && lowercase === false && numbers === true && symbols === false) {
  securePassword.push();
} else if (uppercase === true && lowercase === false && numbers === true && symbols === true) {
  securePassword.push();
} else if (uppercase === true && lowercase === false && numbers === true && symbols === false) {
  securePassword.push();
} else if (uppercase === true && lowercase === false && numbers === false && symbols === false) {
  securePassword.push();
} else if (uppercase === true && lowercase === true && numbers === false && symbols === false) {
  securePassword.push();
} else if (uppercase === true && lowercase === true && numbers === false && symbols === true) {
  securePassword.push();
} else if (uppercase === true && lowercase === true && numbers === false && symbols === true) {
  securePassword.push();
} else {
  alert("Must select one of the following: uppercase, lowercase, numbers, or symbols. Please input again.");
  writePassword();
}

// Created for loop. 
// Math.random does not provide cryptographically secure random numbers. Is there a better way to do this for added security? -- window.crypto.getRandomValues()
for (var i = 0; i < passwordLength; i++) {
  var randomNum = Math.floor(Math.random() * securePassword.length)
    password += securePassword[randomNum];
}

// Returns generated password into textbox.
return newPassword;

}