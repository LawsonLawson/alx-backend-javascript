/**
 * Test suite for the getPaymentTokenFromAPI function.
 *
 * This test suite checks if the `getPaymentTokenFromAPI` function correctly returns a
 * promise that resolves with a success message when called with the `success` parameter
 * set to `true`.
 */

const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  /**
   * Test case: Verifies that getPaymentTokenFromAPI(true) returns the correct success message.
   *
   * This test case ensures that when `getPaymentTokenFromAPI` is called with the `success`
   * parameter set to `true`, it returns a promise that resolves to an object containing the
   * success message `{ data: 'Successful response from the API' }`.
   *
   * The `done` callback is used to indicate that the asynchronous test has completed.
   *
   * @param {Function} done - Callback to indicate when the test is finished. Required for
   *                          handling asynchronous code in Mocha.
   */
  it('getPaymentTokenFromAPI(success), where success == true', (done) => {
    // Call the getPaymentTokenFromAPI function with success == true
    getPaymentTokenFromAPI(true)
      .then((res) => {
        // Assert that the resolved value matches the expected success message
        expect(res).to.deep.equal({ data: 'Successful response from the API' });

        // Call the done callback to indicate the test is complete
        done();
      });
  });
});
