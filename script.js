/* Pseudo Code
Prompt user to input desired length of password
  IF length >= 8 || <= 128 then store in variable
    ELSE alert 



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

 



/*
// recursion???????? calling a function within a function
// boolean confirm = true/yes, cancel = false/no

//at bottom return() finished password


// # of characters
// lower case?
// upper case?
// symbols?
// numbers?

//Steps
// Prompt to ask how many characters -- store within a variable 
// Prompt do you want to use lowercase? boolean yes = true --> put it in variable
// Same with uppercase, symbols, numbers, Use confirms for all of them 

// can put all variables in a string or an array 
// use random element out of an array 
// use for loop to go # of characters employer wants 
// */