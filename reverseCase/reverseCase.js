/*
 * Write a function that reverses the case of each letter in the strings that it receives.
 * Example: 'Hello World' -> 'hELLO wORLD'
 * Assume that each string will contain only spaces and letters.
 */

const reverseCase = (str) => {
  str.forEach(element => {
    if (str[element] === str[element].toUpperCase()) {
      return str[element].toLowerCase();
    } else if (str[element] === str[element].toLowerCase()) {
      return str[element].toUpperCase;
    }
  })
  return str;
}