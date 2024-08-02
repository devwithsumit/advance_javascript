var generateBtn = document.getElementById('generateBtn');
var lengthInput = document.getElementById('length');
var includeUppercaseInput = document.getElementById('includeUppercase');
var includeNumbersInput = document.getElementById('includeNumbers');
var includeSymbolsInput = document.getElementById('includeSymbols');
var passwordDisplay = document.getElementById('password');

var lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
var uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers = '0123456789';
var symbols = '!@#$%&*_-,?/';

generateBtn.addEventListener('click', e => {
    let length = lengthInput.value
    let includeNumbers = includeNumbersInput.checked
    let includeSymbols = includeSymbolsInput.checked
    let includeUppercase = includeUppercaseInput.checked
    let password = ''
    let reqArray = lowercaseLetters
    if (includeNumbers) {
        reqArray += numbers
    }
    if (includeSymbols) {
        reqArray += symbols
    }
    if (includeUppercase) {
        reqArray += uppercaseLetters
    }
    console.log(reqArray);
    for (i = 0; i < length; i++) {
        password += reqArray[Math.floor(Math.random() * reqArray.length)]

    }
    passwordDisplay.textContent = password
})