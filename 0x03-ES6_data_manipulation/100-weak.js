/**
 * A `WeakMap` to keep track of the number of times each API endpoint is
 * queried.
 *
 * @type {WeakMap<object, number>}
 */
export const weakMap = new WeakMap();

/**
 * Tracks the number of times an API endpoint is queried and throws an error if
 * the load is too high.
 *
 * This function increments the query count for a given endpoint and updates
 * the count in the `WeakMap`. If an endpoint is queried 5 or more times, it
 * throws an error indicating that the endpoint load is high.
 *
 * @function
 * @name queryAPI
 * @param {object} endpoint - The API endpoint object being queried.
 * @throws {Error} If the endpoint has been queried 5 or more times.
 * @returns {number} The number query count for the given endpoint.
 */
export function queryAPI(endpoint) {
  let query = weakMap.get(endpoint) || 0;

  query += 1;

  weakMap.set(endpoint, query);

  if (query >= 5) {
    throw Error('Endpoint load is high');
  }

  return query;
}
