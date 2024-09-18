/**
 * Rounds two numbers and returns their sum.
 *
 * This function takes two floating-point numbers, rounds each to the nearest integer,
 * and then returns the sum of the rounded values.
 *
 * - If the fractional part of the number is 0.5 or greater, it rounds up.
 * - If the fractional part is less than 0.5, it rounds down.
 *
 * @param {number} a - The first number to be rounded and added.
 * @param {number} b - The second number to be rounded and added.
 * @returns {number} - The sum of the two rounded numbers.
 *
 * @example
 * // Example usage:
 * const sum = calculateNumber(1.4, 2.6);
 * console.log(sum); // 4
 */
const calculateNumber = (a, b) => Math.round(a) + Math.round(b);

module.exports = calculateNumber;
