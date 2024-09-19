/**
 * API Integration Tests.
 *
 * This test suite verifies the functionality of the payment system API using HTTP
 * requests. It checks the responses from various endpoints to ensure they behave
 * as expected.
 */

const request = require('request');
const { expect } = require('chai');

describe('API integration test', () => {
  const API_URL = 'http://localhost:7865'; // Define the base URL for the API

  /**
   * Test case: Verifies that the root endpoint returns the correct response.
   *
   * This test checks that a GET request to the root endpoint (/) responds with a
   * status code of 200 and the correct welcome message.
   *
   * @param {Function} done - Callback to indicate when the test is finished.
   */
  it('GET / returns correct response', (done) => {
    // Send a GET request to the root endpoint
    request.get(`${API_URL}/`, (_err, res, body) => {
      // Assert that the response status code is 200 (OK)
      expect(res.statusCode).to.be.equal(200);
      // Assert that the response body matches the expected welcome message
      expect(body).to.be.equal('Welcome to the payment system');
      done(); // Call done to indicate the test is complete
    });
  });

  /**
   * Test case: Verifies that the cart endpoint returns the correct response for a valid cart ID.
   *
   * This test checks that a GET request to /cart/:id with a valid numeric ID responds with
   * a status code of 200 and the correct payment methods message.
   *
   * @param {Function} done - Callback to indicate when the test is finished.
   */
  it('GET /cart/:id returns correct response for valid :id', (done) => {
    // Send a GET request to the cart endpoint with a valid ID
    request.get(`${API_URL}/cart/47`, (_err, res, body) => {
      // Assert that the response status code is 200 (OK)
      expect(res.statusCode).to.be.equal(200);
      // Assert that the response body matches the expected message for cart 47
      expect(body).to.be.equal('Payment methods for cart 47');
      done(); // Call done to indicate the test is complete
    });
  });

  /**
   * Test case: Verifies that the cart endpoint returns a 404 response for negative ID values.
   *
   * This test checks that a GET request to /cart/:id with a negative ID responds with
   * a status code of 404 (Not Found).
   *
   * @param {Function} done - Callback to indicate when the test is finished.
   */
  it('GET /cart/:id returns 404 response for negative number values in :id', (done) => {
    // Send a GET request to the cart endpoint with a negative ID
    request.get(`${API_URL}/cart/-47`, (_err, res, _body) => {
      // Assert that the response status code is 404 (Not Found)
      expect(res.statusCode).to.be.equal(404);
      done(); // Call done to indicate the test is complete
    });
  });

  /**
   * Test case: Verifies that the cart endpoint returns a 404 response for non-numeric ID values.
   *
   * This test checks that a GET request to /cart/:id with a non-numeric ID responds with
   * a status code of 404 (Not Found).
   *
   * @param {Function} done - Callback to indicate when the test is finished.
   */
  it('GET /cart/:id returns 404 response for non-numeric values in :id', (done) => {
    // Send a GET request to the cart endpoint with a non-numeric ID
    request.get(`${API_URL}/cart/d200-44a5-9de6`, (_err, res, _body) => {
      // Assert that the response status code is 404 (Not Found)
      expect(res.statusCode).to.be.equal(404);
      done(); // Call done to indicate the test is complete
    });
  });
});
