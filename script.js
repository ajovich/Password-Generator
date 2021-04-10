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
  for loop

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

// Created variables based on README criteria that needs to be met for secure password.
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";

// Used \ to add certain special characters to the string.
var symbols = " !\"#$%\&\'()*+,-./:;<=>?@[]^_`{|}~ ";

// Empty array to store user input.
securePassword = [];

function writePassword() {
 
  var passwordLength = prompt("Please enter the desired password length");
  if (passwordLength >= 8 && passwordLength <= 128) {
    console.log(passwordLength)
  } else {
    alert("Password must be between 8 - 128 characters. Please input again.");
    writePassword();
  }

  var uppercase = confirm("Would you like to use uppercase letters?");



  var lowercase = confirm("Would you like to use lowercase letters?");



  var numbers = confirm("Would you like to use numbers?");


  
  var symbols = confirm("Would you like to use special characters?");

  }