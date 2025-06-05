const passwordBox = document.getElementById("Password");
const lenght = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~|}{[]<>/-=";
const allchar = upperCase + lowerCase + number + symbol;
function createPassword() {
  let Password = "";
  Password += upperCase[Math.floor(Math.random() * upperCase.length)];
  Password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  Password += number[Math.floor(Math.random() * number.length)];
  Password += symbol[Math.floor(Math.random() * symbol.length)];
  while (lenght > Password.length) {
    Password += allchar[Math.floor(Math.random() * allchar.length)];
  }
  passwordBox.value = Password;
}
generateBtn = document.getElementById("generate");
generateBtn.addEventListener("click", createPassword);

function copyPassword() {
  passwordBox.select();
  document.execCommand("copy");
  alert("Password Copied");
}

copyBtn = document.getElementById("copy-btn");
copyBtn.addEventListener("click", copyPassword);
