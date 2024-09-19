/*
  Import the 'request' module.
  'request' is used to make HTTP requests from Node.js.
  It's commonly used for testing and interacting with APIs.
*/
const request = require('request');

/*
  Import the 'expect' assertion style from the 'chai' library.
  'expect' is used to write readable and flexible assertions for testing.
*/
const { expect } = require('chai');

/*
  Describe block for grouping related tests.
  Here, we are conducting integration tests for the API.
*/
describe('API integration test', () => {
  /*
    Define the base URL for the API being tested.
    The API is running locally on port 7865.
  */
  const API_URL = 'http://localhost:7865';

  /*
    Test case to verify that a GET request to the root URL ('/')
    returns the correct response.
    The 'done' callback is used to signal the end of an asynchronous test.
  */
  it('GET / returns correct response', (done) => {
    /*
      Make a GET request to the root URL of the API.
      The callback function handles the response.
      Parameters of the callback:
      - _err: Error object if the request fails (ignored here using '_').
      - res: The response object containing status and headers.
      - body: The response body, expected to be a string in this case.
    */
    request.get(`${API_URL}/`, (_err, res, body) => {
      /*
        Assert that the response status code is 200.
        This means the request was successful.
      */
      expect(res.statusCode).to.be.equal(200);

      /*
        Assert that the response body is 'Welcome to the payment system'.
        This checks if the API returns the expected message for a GET request.
      */
      expect(body).to.be.equal('Welcome to the payment system');

      /*
        Call the 'done' function to indicate that the test has completed.
        This is necessary for asynchronous tests in Mocha.
      */
      done();
    });
  });
});
