/**
 * Test suite for the sendPaymentRequestToApi function.
 *
 * This test suite checks if the `sendPaymentRequestToApi` function correctly
 * utilizes the `calculateNumber` method from the `Utils` module when calculating
 * the total cost of an order.
 */

const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  /**
   * Test case: Verifies that sendPaymentRequestToApi uses the calculateNumber method of Utils.
   *
   * This test case ensures that when `sendPaymentRequestToApi` is called, it correctly invokes
   * the `calculateNumber` method from the `Utils` module with the expected arguments and call count.
   */
  it('sendPaymentRequestToApi uses the calculateNumber method of Utils', () => {
    // Create a spy on the Utils object to monitor the usage of its methods
    const bigBrother = sinon.spy(Utils);

    // Call the sendPaymentRequestToApi function with test arguments
    sendPaymentRequestToApi(100, 20);

    // Assert that calculateNumber was called with 'SUM', 100, and 20 as arguments
    expect(bigBrother.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;

    // Assert that calculateNumber was called exactly once
    expect(bigBrother.calculateNumber.callCount).to.be.equal(1);

    // Restore the original state of the calculateNumber method
    bigBrother.calculateNumber.restore();
  });
});
