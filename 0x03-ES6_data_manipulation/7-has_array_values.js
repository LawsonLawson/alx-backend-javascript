/**
 * Checks if a set contains each element in an array.
 * 
 * This function accepts a set and an array, and returns a boolean indication
 * whether the set contains all elements in the array.
 *
 * @function
 * @name hasValuesFromArray
 * @param {Set} set - The collection of unique items.
 * @param {Array} array - The array of items.
 * @returns {Boolean} `true` if the set contains all elements in the array,
 * `false` otherwise.
 * @throws {TypeError} If the first parameter is not a set or the second
 * parameter is not an array.
 */
export default function hasValuesFromArray(set, array) {
  return array.every((value) => set.has(value));
}
