// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Function to generate password via Javascript prompts
function generatePassword() {

  // asking user desired password length
var passwordLength = prompt("How many characters would you like in your password");

if (typeof(passwordLength) = "number"){
console.log("Number");
}else{
  console.log ("Fail");
}}
// passwords must be between 8 and 128 characters, else display alert and restart
if (passwordLength >= 8 && passwordLength <= 128) {

  if (confirm("Your password must be between 8 and 128 characters. Click OK to restart.")) {
    generatePassword();
  } else{
    return;
  }

} else{
  
  if (confirm("Would you like to include lowercase characters?")) {
    //use lowercase characters
    var includeLowerCase = true;
  } else {
    //do not use lowercase characters
    var includeLowerCase = false;
  }

  if (confirm("Would you like to include UPPERCASE characters?")) {
    //use uppercase characters
    var includeUpperCase = true;
  } else {
    //do not use uppercase characters
    var includeUpperCase = false;
  }

  if (confirm("Would you like to include numbers?")) {
    //use numerals
    var includeNumbers = true;
  } else {
    //do not use numberals
    var includeNumbers = false;
  }

  if (confirm("Final question! Would you like to include special characters?")) {
    //use special characters
    var includeSpecial = true;
  } else {
    //do not use special characters
    var includeSpecial = false;
  }

  //make sure at least one character type was selected

}

return;
}
