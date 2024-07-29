/**
 * Creates a set from an array.
 *
 * This function accepts an array and returns a new Set containing the unique
 * elements from the array.
 *
 * @function
 * @name setFromArray
 * @param {Array} array - The source array.
 * @returns {Set} A Set contataining the unique elements from the array.
 * @throws {TypeError} If the input is not an array.
 */
export default function setFromArray(array) {
  return new Set(array);
}
