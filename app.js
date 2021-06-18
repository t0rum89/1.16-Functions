// 1.

function multiply() {
  let result = 1;

  if (arguments.length === 0) return 0;

  for (let i = 0; i < arguments.length; i++) {
    result *= arguments[i];
  }
  return result;
}

console.log(multiply(2, 4, 5, 6));
console.log(multiply());

// 2.

function reverseString(str) {
  let string = String(str);
  let result = "";

  for (let i = string.length; i--; ) {
    result += string[i];
  }
  return result;
}

console.log(reverseString("test"));
console.log(reverseString(""));
console.log(reverseString(null));
console.log(reverseString(undefined));
console.log(reverseString());

// 3.

function getCodeStringFromText(str) {
  let string = String(str);
  let result = "";

  for (let i = 0; i < string.length; i++) {
    result += string[i].charCodeAt() + " ";
  }
  return result.trim();
}

console.log(getCodeStringFromText(" hello "));
console.log(getCodeStringFromText(""));
console.log(getCodeStringFromText(null));
console.log(getCodeStringFromText(undefined));
console.log(getCodeStringFromText(32));

// 4.

function guessTheNumber(num) {
  let number = Number(num);

  if (typeof number !== "number" || isNaN(number))
    return Error("Please provide a valid number");
  if (number < 0 || number > 10)
    return Error("Please provide number in range 0 - 10");

  let random = Math.ceil(Math.random() * 10);

  if (random === number) return "You win!";

  return `You are lose, your number is ${number}, the random number is ${random}`;
}

console.log(guessTheNumber("3"));
