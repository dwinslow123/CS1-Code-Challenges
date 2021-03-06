// String Compression: Implement a method to perform basic string compression using
// the counts of repeated characters.
// For example, the string aabcccccaaa would become a2b1c5a3.
// If the "compressed" string would not become smaller than the original string,
// your method should return the original string.
// You can assume the string has only uppercase and lowercase letters (a - z).

const stringCompression = (str) => {
  let charCount = 1;
  let currentChar = null;
  let compressedStr = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === currentChar) charCount++;
    if (currentChar === null) currentChar = str[i];
    if (str[i] !== currentChar || currentChar === undefined) {
      compressedStr += currentChar += charCount;
      charCount = 1;
      currentChar = str[i];
    }
  }
  compressedStr += currentChar += charCount;
  return compressedStr.length > str.length ? str : compressedStr;
};

console.log(stringCompression('aabcccccaaa'));
