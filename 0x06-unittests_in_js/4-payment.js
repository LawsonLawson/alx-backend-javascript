/**
 * Payment processing module.
 *
 * This module provides a function to handle payment requests by calculating the total
 * cost, including shipping, and sending this information to an external API.
 * The calculation is performed using the `calculateNumber` method from the `Utils` module.
 */

const Utils = require('./utils');

/**
 * Processes a payment request by calculating the total cost and logging it.
 *
 * This function computes the total cost of an order by adding the total amount and
 * total shipping cost. The calculation uses the `calculateNumber` method from the `Utils`
 * module, which rounds the values to the nearest integer before performing the operation.
 * After calculating the total cost, it logs the result to the console as a simulation
 * of sending the request to an external API.
 *
 * @param {number} totalAmount - The total cost of items in the order before shipping.
 *                               This value will be rounded to the nearest integer.
 * @param {number} totalShipping - The shipping cost for the order.
 *                                 This value will be rounded to the nearest integer.
 */
const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  // Calculate the total cost by adding the total amount and total shipping cost
  const totalCost = Utils.calculateNumber('SUM', totalAmount, totalShipping);

  // Log the total cost to the console as a simulation of sending it to an external API
  console.log(`The total is: ${totalCost}`);
};

// Export the sendPaymentRequestToApi function to make it available for importing in other modules
module.exports = sendPaymentRequestToApi;
