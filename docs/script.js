let rangeSlider = document.getElementById("rangeSlider");
let rangeValue = document.getElementById("rangeValue");
let passBox = document.getElementById("passBox");
let upperCase = document.getElementById("upperCase");
let lowerCase = document.getElementById("lowerCase");
let number = document.getElementById("number");
let symbol = document.getElementById("symbol");
let button = document.getElementById("btn");
let strength = document.getElementById("strength");
let copyPassword = document.getElementById("copy");

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%&*?/:-+~";

// showing input slider value
rangeValue.textContent = rangeSlider.value;
rangeSlider.addEventListener ('input', () => {
rangeValue.textContent = rangeSlider.value; 
});

// genPassword () creation
const genPassword = () => {

// checking of chosen characters
let allChars = "";
allChars += upperCase.checked ? uppercase : "";
allChars += lowerCase.checked ? lowercase : "";
allChars += number.checked ? numbers : "";
allChars += symbol.checked ? symbols : "";

let password = "";

if (allChars === "" || allChars.length == 0) {
    strength.innerText = "Please choose at least one checkbox!";
    return "";
} else {
    let i=1;
    while (i <= rangeSlider.value) {
    let randomNumber = Math.floor(Math.random () * allChars.length);
    let generatePassword = allChars [randomNumber];
    password += generatePassword;
    i++;
    };
    return password;
}
};

// copy icon function
const copypassword = () => {
    navigator.clipboard.writeText (passBox.value);
};

button.addEventListener ('click', () => {
strength.innerText = rangeSlider.value < 8 ? "Weak Password!" : "Strong Password!";
passBox.value = genPassword ();
});


copyPassword.addEventListener ("click", () => {
    if (passBox.value != "" || passBox.value.length >= 1) {
        copypassword();
        copyPassword.innerText ="check";
        copyPassword.title = "Password is copied to the clipboard.";
        alert ("Password is copied to the clipboard.");
        
        setTimeout (() => {
            copyPassword.innerText ="content_copy";
            copyPassword.title = "";
        },2500)
    };
});