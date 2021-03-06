/*
 * Write a function that accepts a tree data structure and a value to search for.
 * Search for the value using a breadth-first search algorithm.
 * You can read about it here: https://en.wikipedia.org/wiki/Breadth-first_search
 * Example:
 * const tree = {
 *	x: 1,
 *	y: 1,
 *	z: {
 *		x: 1,
 *		y: 1,
 *		z: 1,
 *		},
 *	a: 2,
 * };
 * breadthFirstSearch(tree, 2);// will return true before it recursively searches `z`
 */

const breadthFirstSearch = (tree, searchTerm) => {
  let queue = Object.values(tree);
  while (queue.length > 0) {
    const item = queue.shift();
    if (item === searchTerm) return true;
    if (typeof item === 'object' && item !== null && !Array.isArray(item)) {
      const values = Object.values(item);
      queue = queue.concat(values);
    }
  }
  return false;
}

const tree = {
  x: 1,
  y: 1,
  z: {
    x: 1,
    y: 1,
    z: 1,
  },
  a: 2,
};