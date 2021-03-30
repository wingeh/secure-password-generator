// Assignment Code

// Generate Button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", passwordPrompt);


var passwordLength;


// Function to generate password via Javascript prompts
function passwordPrompt() {


 var password="";

// asking user desired password length
var passwordLength = prompt("How many characters would you like in your password? (Must be between 8 and 128 characters)");


// make sure the value entered is a number
if (isNaN(passwordLength)===true){
  alert("Password length must be a number.");
  return;
};

// make sure password length is correct
if (passwordLength < 8 || passwordLength > 128) {
  alert("Your password must be between 8 and 128 characters.");
  return;
}; 


// if the data is good proceed with character selection
  var includeLowerCase = confirm("Would you like to include lowercase characters?"); 
  var includeUpperCase = confirm("Would you like to include UPPERCASE characters?");
  var includeNumbers = confirm("Would you like to include numbers?");
  var includeSpecial = confirm("Final question! Would you like to include special characters?");

//make sure at least one character type was selected
if (includeLowerCase === false && includeUpperCase === false && includeNumbers === false && includeSpecial === false) {
    alert ("Password creation failed. Please select at least one character type to include.");
    return;
    };


//Random math to select characters
for (var i = 0; i < passwordLength; i++){

  var r= Math.floor(Math.random()*3);

    if (includeUpperCase === true && r=== 0){
        password += getRandomUpper();
    } else if (includeLowerCase === true && r=== 1){
      password += getRandomLower();
    } else if (includeSpecial === true && r=== 2){
      password += getRandomSpecial();
    } else if (includeNumbers === true && r=== 3){
     password += getRandomNumber();
    } else {
      i--;
    }
  
  };

  //Write the password to the screen
  var passwordText = document.querySelector("#password");
    passwordText.value = password;
};

// Create Random Characters
function getRandomSpecial() {
  return String.fromCharCode(Math.floor(Math.random()*15)+33);
};

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random()*26)+65);
};

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random()*26)+97);
};

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random()*10)+48);
};