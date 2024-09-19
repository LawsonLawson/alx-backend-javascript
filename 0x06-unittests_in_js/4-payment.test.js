/**
 * Test suite for the sendPaymentRequestToApi function.
 *
 * This test suite checks if the `sendPaymentRequestToApi` function correctly
 * logs the total cost calculated using the `calculateNumber` method from the
 * `Utils` module, and verifies the interactions with `console.log`.
 */

const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  /**
   * Test case: Verifies that sendPaymentRequestToApi logs the correct total cost.
   *
   * This test case ensures that when `sendPaymentRequestToApi` is called, it correctly
   * uses the `calculateNumber` method from the `Utils` module with the expected arguments,
   * and logs the calculated total to the console.
   */
  it('sendPaymentRequestToApi calls console.log with the right arguments', () => {
    // Create a spy on the console object to monitor the usage of the log method
    const bigBrother = sinon.spy(console);

    // Create a stub on the Utils.calculateNumber method to control its behavior
    const dummy = sinon.stub(Utils, 'calculateNumber');

    // Configure the stub to return 10 whenever called
    dummy.returns(10);

    // Call the sendPaymentRequestToApi function with test arguments
    sendPaymentRequestToApi(100, 20);

    // Assert that calculateNumber was called with 'SUM', 100, and 20 as arguments
    expect(dummy.calledWith('SUM', 100, 20)).to.be.true;

    // Assert that calculateNumber was called exactly once
    expect(dummy.callCount).to.be.equal(1);

    // Assert that console.log was called with the correct message
    expect(bigBrother.log.calledWith('The total is: 10')).to.be.true;

    // Assert that console.log was called exactly once
    expect(bigBrother.log.callCount).to.be.equal(1);

    // Restore the original state of the calculateNumber method and console.log
    dummy.restore();
    bigBrother.log.restore();
  });
});
