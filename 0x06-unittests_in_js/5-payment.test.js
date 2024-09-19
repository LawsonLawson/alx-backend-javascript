/**
 * Test suite for the sendPaymentRequestToApi function.
 *
 * This test suite verifies that the `sendPaymentRequestToApi` function correctly
 * calculates the total cost using the `Utils.calculateNumber` method and logs
 * the result to the console.
 */

const chai = require('chai');
const sinon = require('sinon');
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./5-payment.js');

describe('sendPaymentRequestToApi function', () => {
  // Variable to hold the spy on console.log
  let spyConsole;

  /**
   * Set up: Creates a spy on console.log before each test.
   *
   * This hook is called before each test case in this suite. It creates a spy
   * on the `console.log` method to monitor its usage during the test.
   */
  beforeEach(() => {
    spyConsole = sinon.spy(console, 'log');
  });

  /**
   * Tear down: Restores the original console.log after each test.
   *
   * This hook is called after each test case in this suite. It restores the
   * `console.log` method to its original state to ensure that the spy does not
   * affect other tests.
   */
  afterEach(() => {
    spyConsole.restore();
  });

  /**
   * Test case: Verifies logging for sendPaymentRequestToApi(100, 20).
   *
   * This test case checks if the `sendPaymentRequestToApi` function correctly
   * logs the total cost when called with arguments 100 and 20. It expects the
   * log to display "The total is: 120".
   */
  it('sendPaymentRequestToAPI(100, 20)', () => {
    // Call the function with test arguments
    sendPaymentRequestToApi(100, 20);

    // Assert that console.log was called exactly once
    chai.expect(spyConsole.calledOnce).to.be.true;

    // Assert that console.log was called with the correct message
    chai.expect(spyConsole.calledWith('The total is: 120')).to.be.true;
  });

  /**
   * Test case: Verifies logging for sendPaymentRequestToApi(10, 10).
   *
   * This test case checks if the `sendPaymentRequestToApi` function correctly
   * logs the total cost when called with arguments 10 and 10. It expects the
   * log to display "The total is: 20".
   */
  it('sendPaymentRequestToAPI(10, 10)', () => {
    // Call the function with test arguments
    sendPaymentRequestToApi(10, 10);

    // Assert that console.log was called exactly once
    chai.expect(spyConsole.calledOnce).to.be.true;

    // Assert that console.log was called with the correct message
    chai.expect(spyConsole.calledWith('The total is: 20')).to.be.true;
  });
});
