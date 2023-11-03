// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function generatePassword() {
  var userpassword = "";
  var passwordChar = "";
  var lowercase = "abcdefghijklmnop"
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var symbols = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

  var pwlength = window.prompt("Enter a number from 8 to 128 for password length.");
  pwlength = parseInt(pwlength);

  if (pwlength < 8) {
    window.alert("Password must be 8 or more characters.");
    return;
  }

  if (pwlength > 128) {
    window.alert("Password must be less than 128 characters.");
    return;
  }

var lowercaseUserChoice = window.confirm("Use lowercase letters?");

if (lowercaseUserChoice) {
  passwordChar += lowercase;
}

var uppercaseUserChoice = window.confirm("Use uppercase letters?");

if (uppercaseUserChoice) {
  passwordChar += uppercase;
}

var numbersUserChoice = window.confirm("Use numbers in password?");

if (numbersUserChoice) {
  passwordChar += numbers;
}

var symbolsUserChoice = window.confirm("Use special characters?");

if (symbolsUserChoice) {
  passwordChar += symbols;
}

for (var i = 0; i < pwlength; i++) {
  userpassword += passwordChar[Math.floor(Math.random() * passwordChar.length)]

}
console.log(userpassword);
return userpassword;
}

function writePassword() {
var password = generatePassword();
var pwTextArea = document.getElementById("password");
pwTextArea.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)