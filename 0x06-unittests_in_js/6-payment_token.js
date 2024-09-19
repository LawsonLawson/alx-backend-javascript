/**
 * Retrieves a payment token from an external API.
 *
 * This function simulates an API call to retrieve a payment token. It returns a
 * promise that resolves with a success message if the `success` parameter is true.
 * The function is useful for testing scenarios where an API call is expected to
 * return a specific response based on the provided input.
 *
 * @param {boolean} success - Determines whether the API call should be successful.
 *                            If true, the promise will resolve with a success message.
 *                            If false or omitted, the promise will not resolve.
 *
 * @returns {Promise<Object>} A promise that resolves with an object containing the
 *                            success message if `success` is true.
 */
const getPaymentTokenFromAPI = (success) =>
  new Promise((resolve, _reject) => {
    if (success) {
      // Resolve the promise with a mock successful response
      resolve({ data: 'Successful response from the API' });
    }
  });

// Export the function to make it available for importing in other modules
module.exports = getPaymentTokenFromAPI;
