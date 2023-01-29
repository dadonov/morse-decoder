const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
  "**********": " ",
};

// copying initial dictionary
let dictionary = Object.assign(MORSE_TABLE);

// converting morse to binary
(function morseToBin(list) {
  for (let key in list) {
    list[key.replace(/[-]/gi, 11).replace(/[.]/gi, 10).padStart(10, "0")] = list[key];
    delete list[key];
    list["**********"] = " ";
  }
  return list;
})(dictionary);

function decode(expression) {
  let decodedExpression = "";
  let expressionChars = expression.split("");
  let encodedLetters = [];
  // dividing expression into equal strings with the length of 10
  for (let i = 0; i < expressionChars.length; i += 10) {
    encodedLetters.push(expressionChars.slice(i, i + 10).join(""));
  }
  //decoding encoded letters
  for (let i = 0; i < encodedLetters.length; i++) {
    decodedExpression += dictionary[encodedLetters[i]];
  }
  return decodedExpression;
}

module.exports = {
    decode,
};
