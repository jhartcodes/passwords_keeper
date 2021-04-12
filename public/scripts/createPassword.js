$(document).ready(function () {
  console.log("documents ready!");
  const resultEl = document.getElementById("result");
  const lengthEl = document.getElementById("length");
  const uppercaseEl = document.getElementById("uppercase");
  const lowercaseEl = document.getElementById("lowercase");
  const numbersEl = document.getElementById("numbers");
  const symbolsEl = document.getElementById("symbols");
  const generateEl = document.getElementById("generate");
  const clipboardEl = document.getElementById("clipboard");
   //object storing functions that create letters, characters etc.
  const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
  }
  //copy password to clipboard.
  clipboardEl.addEventListener("click", () => {
    const textarea = document.createElement("textarea");
    const password = resultEl.innerText;
    if (!password) {
      return;
    }
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Password copied to clipboard");
  });
  generate.addEventListener("click", () => {
    const length = +lengthEl.value;
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;
    console.log(hasLower, hasUpper, hasSymbol, hasNumber);
   const password = generatePassword(
      hasLower,
      hasUpper,
      hasNumber,
      hasSymbol,
      length
    );
    resultEl.innerText = password;
    document.getElementById("usersPassword").value= password;
  });
  // Generate password function.
  function generatePassword(lower, upper, number, symbol, length) {
    //1. create password variable.
    //Filter out types that arent checked.
    //loop over the length of the password and call generator function for each type.
    //add final pw to the pw var and return it.
    let generatedPassword = "";
    const typesCount = lower + upper + number + symbol;
    const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter
      (
        item => Object.values(item)[0]
    );
    console.log('typesArr:', typesArr);
    // if none are checked dont return the string.
    if (typesCount === 0) {
      return "";
    }
    // create a loop that will call the function to create the
    for (let i = 0; i < length; i += typesCount) {
      typesArr.forEach(type => {
        const funcName = Object.keys(type)[0];
        generatedPassword += randomFunc[funcName]();
      });
    }
    // console.log(generatedPassword.slice(0,length));
    const finalPassword = generatedPassword.slice(0, length);
    // console.log("final password", finalPassword);
    return finalPassword;
  }
  //generator functions letters are from http://www.net-comber.com/charset.html
  function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }
  function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }
  function getRandomNumber() {
    return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }
  function getRandomSymbol() {
    const symbols = "!@#$%^&*(){}[]=<>/,.";
    return symbols[Math.floor(Math.random() * symbols.length)];
  }



});
