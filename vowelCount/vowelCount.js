/*
 * Write a function that returns the count of the total number of vowels in a string.
 * Example: 'Hello World!' -> 3
 */

const vowelCount = (str) => {
  let counter = null;
  splitString = str.split('');
  splitString.forEach((e, i) => {
    if (splitString[i] === 'a' || splitString[i] === 'e' || splitString[i] === 'i' || splitString[i] === 'o' || splitString[i] === 'u')
      counter++;
  });
  return counter;
}

vowelCount('Hello World!');