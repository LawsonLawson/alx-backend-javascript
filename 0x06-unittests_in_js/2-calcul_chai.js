/**
 * Performs arithmetic operations on two numbers after rounding them.
 * Supports three operations: 'SUM', 'SUBTRACT', and 'DIVIDE'.
 *
 * @param {string} type - The type of operation to perform.
 *                        It must be one of 'SUM', 'SUBTRACT', or 'DIVIDE'.
 * @param {number} a - The first number in the operation.
 * @param {number} b - The second number in the operation.
 *
 * @returns {number|string} - Returns the result of the operation:
 *                            - The sum if type is 'SUM'.
 *                            - The difference if type is 'SUBTRACT'.
 *                            - The quotient if type is 'DIVIDE'.
 *                            - 'Error' if trying to divide by 0.
 *                            - Returns 0 if the operation type is not recognized.
 */
const calculateNumber = (type, a, b) => {
  // Perform 'SUM' operation: add the rounded values of a and b.
  if (type === 'SUM') {
    return Math.round(a) + Math.round(b);
  }

  // Perform 'SUBTRACT' operation: subtract the rounded value of b from a.
  if (type === 'SUBTRACT') {
    return Math.round(a) - Math.round(b);
  }

  // Perform 'DIVIDE' operation: divide the rounded value of a by b,
  // but if b rounds to 0, return 'Error' to avoid division by zero.
  if (type === 'DIVIDE') {
    return Math.round(b) === 0 ? 'Error' : Math.round(a) / Math.round(b);
  }

  // If no valid operation type is provided, return 0 as a default value.
  return 0;
};

module.exports = calculateNumber;
