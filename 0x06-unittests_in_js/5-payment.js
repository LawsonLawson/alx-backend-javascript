/**
 * Payment processing module.
 *
 * This module provides a function to handle payment requests by calculating the total
 * cost, including shipping, and sending this information to an external API
 * (simulated here by logging the result to the console).
 */

const Utils = require('./utils');

/**
 * Processes a payment request by calculating the total cost and logging it.
 *
 * This function computes the total cost of an order by summing the total amount
 * and total shipping cost using the `calculateNumber` method from the `Utils` module.
 * The result is then logged to the console, simulating the action of sending the
 * payment request to an external API.
 *
 * @param {number} totalAmount - The total amount for the order before shipping.
 *                               This value will be rounded to the nearest integer.
 * @param {number} totalShipping - The cost of shipping for the order.
 *                                 This value will be rounded to the nearest integer.
 */
const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  // Calculate the total cost by adding the rounded values of totalAmount and totalShipping
  const totalCost = Utils.calculateNumber('SUM', totalAmount, totalShipping);

  // Log the total cost to the console as a simulation of sending it to an external API
  console.log(`The total is: ${totalCost}`);
};

// Export the sendPaymentRequestToApi function to make it available for importing in other modules
module.exports = sendPaymentRequestToApi;
