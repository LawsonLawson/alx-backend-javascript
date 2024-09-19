/**
 * Payment request handler module.
 *
 * This module provides a function to calculate the total cost of an order
 * by summing the total amount and the shipping cost, then sending the total
 * to an external API (simulated by logging the result).
 */

const Utils = require('./utils');

/**
 * Calculates the total cost of an order and sends the result to the API.
 *
 * This function uses the `calculateNumber` method from the `Utils` module to
 * compute the total cost by adding the total amount and total shipping cost.
 * It then logs the total cost to the console as a simulation of sending the
 * request to an API.
 *
 * @param {number} totalAmount - The total amount of the order before shipping.
 *                               This value will be rounded to the nearest integer.
 * @param {number} totalShipping - The shipping cost for the order.
 *                                 This value will be rounded to the nearest integer.
 */
const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  // Calculate the total cost by adding the total amount and total shipping cost
  const totalCost = Utils.calculateNumber('SUM', totalAmount, totalShipping);

  // Log the total cost to the console as a simulation of sending it to an API
  console.log(`The total is: ${totalCost}`);
};

// Export the sendPaymentRequestToApi function to make it available for importing in other modules
module.exports = sendPaymentRequestToApi;
