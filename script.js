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
var passwordChoices = [];

// Empty array to store newly generated secure password
var securePassword = [];

// Begins with function writePassword()
// Prompts user to input the desired length for password
// If the length does not meet criteria below, an alert pops up with criteria that needs to be met prior to continuing to the next question.
function writePassword() {
 
  var passwordLength = prompt("Please enter the desired password length");
  if (passwordLength >= 8 && passwordLength <= 128) {
  } else {
    alert("Password must be between 8 - 128 characters. Please input again.");
    writePassword();
  };

  // If user clicks "confirm" on alert window for any of the below criteria === true.
  var confirmUppercase = confirm("Would you like to use uppercase letters?");
  var confirmLowercase = confirm("Would you like to use lowercase letters?");
  var confirmNumbers = confirm("Would you like to use numbers?");
  var confirmSymbols = confirm("Would you like to use special characters?");

// If user inputs "confirm", then adds to array passwordChoices.
// If user does not "confirm" any, then an alert pops up with criteria that needs to be met prior to generating secure password. 
if (confirmUppercase === true && confirmLowercase === true && confirmNumbers === true && confirmSymbols === true) {
  paswordChoices = uppercase.concat(lowercase, numbers, symbols);
} else if (confirmUppercase === false && confirmLowercase === true && confirmNumbers === true && confirmSymbols === true) {
  paswordChoices = lowercase.concat(numbers, symbols);
} else if (confirmUppercase === false && confirmLowercase === false && confirmNumbers === true && confirmSymbols === false) {
  paswordChoices = numbers;
} else if (confirmUppercase === false && confirmLowercase === false && confirmNumbers === true && confirmSymbols === false) {
  paswordChoices = numbers;
} else if (confirmUppercase === true && confirmLowercase === false && confirmNumbers === true && confirmSymbols === true) {
  paswordChoices = uppercase.concat(numbers, symbols);
} else if (confirmUppercase === true && confirmLowercase === false && confirmNumbers === true && confirmSymbols === false) {
  paswordChoices = uppercase.concat(numbers);
} else if (confirmUppercase === true && confirmLowercase === false && confirmNumbers === false && confirmSymbols === false) {
  paswordChoices = uppercase;
} else if (confirmUppercase === true && confirmLowercase === true && confirmNumbers === false && confirmSymbols === false) {
  paswordChoices = uppercase.concat(lowercase);
} else if (confirmUppercase === true && confirmLowercase === true && confirmNumbers === false && confirmSymbols === true) {
  paswordChoices = uppercase.concat(lowercase, symbols);
} else if (confirmUppercase === true && confirmLowercase === true && confirmNumbers === false && confirmSymbols === true) {
  paswordChoices = uppercase.concat(lowercase, symbols);
} else { (!confirmUppercase && !confirmLowercase && !confirmNumbers && !confirmSymbols);
  alert("Must select at least one of the following: uppercase, lowercase, numbers, or symbols. Please input again.");
  writePassword();
}

console.log(passwordChoices);

// Created for loop to create randomized password based on user preferences. 
// Math.random does not provide cryptographically secure random numbers. Is there a better way to do this for added security? -- window.crypto.getRandomValues()
for (var i = 0; i < passwordLength; i++) {
  var randomNumber = Math.floor(Math.random() * passwordChoices)
    securePassword += passwordChoices[randomNumber];
}

// Returns newly generated secure password
return securePassword;
}