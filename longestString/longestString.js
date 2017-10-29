/*
 * Write a function that accepts an array of strings.
 * Return the longest string in the array.
 */

const longestString = (arr) => {
  let temp = '';
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > temp.length) temp = arr[i]
  }
  return temp;
}

console.log(longestString(['banana', 'tree', 'hello', 'superb']));
