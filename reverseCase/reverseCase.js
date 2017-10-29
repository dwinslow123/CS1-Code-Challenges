/*
 * Write a function that reverses the case of each letter in the strings that it receives.
 * Example: 'Hello World' -> 'hELLO wORLD'
 * Assume that each string will contain only spaces and letters.
 */

const reverseCase = (str) => {
  let reversed = ''
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase()) {
      reversed += str[i].toUpperCase();
    } else if (str[i] === str[i].toUpperCase()) {
      reversed += str[i].toLowerCase();
    }
  }
  return reversed;
}

console.log(reverseCase('Hello World'));
