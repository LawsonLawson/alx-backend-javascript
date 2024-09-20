/**
 * API Integration Test Suite.
 *
 * This test suite uses the `request` and `chai` libraries to perform integration testing
 * on the Payment System API. It checks the correctness of the responses from various API
 * endpoints, ensuring that the application behaves as expected.
 */

const request = require('request');
const { expect } = require('chai');

/**
 * Describe block for grouping API integration tests.
 *
 * This block contains all the tests related to the Payment System API, with individual
 * test cases for each endpoint being tested.
 */
describe('API integration test', () => {
  const API_URL = 'http://localhost:7865';

  /**
   * Test case: GET / should return the correct welcome message.
   *
   * This test sends a GET request to the root URL and verifies that the response status code
   * is 200 and the body contains the expected welcome message.
   *
   * @param {Function} done - The callback function to indicate that the test is complete.
   */
  it('GET / returns correct response', (done) => {
    request.get(`${API_URL}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  /**
   * Test case: GET /cart/:id should return the correct response for a valid cart ID.
   *
   * This test sends a GET request to the /cart/:id endpoint with a valid cart ID (47).
   * It verifies that the response status code is 200 and the body contains the expected message.
   *
   * @param {Function} done - The callback function to indicate that the test is complete.
   */
  it('GET /cart/:id returns correct response for valid :id', (done) => {
    request.get(`${API_URL}/cart/47`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 47');
      done();
    });
  });

  /**
   * Test case: GET /cart/:id should return a 404 response for negative values in :id.
   *
   * This test sends a GET request to the /cart/:id endpoint with a negative cart ID (-47).
   * It verifies that the response status code is 404 (Not Found).
   *
   * @param {Function} done - The callback function to indicate that the test is complete.
   */
  it('GET /cart/:id returns 404 response for negative number values in :id', (done) => {
    request.get(`${API_URL}/cart/-47`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  /**
   * Test case: GET /cart/:id should return a 404 response for non-numeric values in :id.
   *
   * This test sends a GET request to the /cart/:id endpoint with a non-numeric cart ID.
   * It verifies that the response status code is 404 (Not Found).
   *
   * @param {Function} done - The callback function to indicate that the test is complete.
   */
  it('GET /cart/:id returns 404 response for non-numeric values in :id', (done) => {
    request.get(`${API_URL}/cart/d200-44a5-9de6`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  /**
   * Test case: POST /login should return a valid response with the provided username.
   *
   * This test sends a POST request to the /login endpoint with a JSON payload containing
   * a username. It verifies that the response status code is 200 and the body contains
   * a personalized welcome message.
   *
   * @param {Function} done - The callback function to indicate that the test is complete.
   */
  it('POST /login returns valid response', (done) => {
    request.post(`${API_URL}/login`, { json: { userName: 'Pinkbrook' } }, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome Pinkbrook');
      done();
    });
  });

  /**
   * Test case: GET /available_payments should return a valid response with payment methods.
   *
   * This test sends a GET request to the /available_payments endpoint.
   * It verifies that the response status code is 200 and the body contains a JSON object
   * with the correct payment methods information.
   *
   * @param {Function} done - The callback function to indicate that the test is complete.
   */
  it('GET /available_payments returns valid response', (done) => {
    request.get(`${API_URL}/available_payments`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      // Check for correct response body with deep equality for nested object
      expect(JSON.parse(body)).to.be.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      });
      done();
    });
  });
});
