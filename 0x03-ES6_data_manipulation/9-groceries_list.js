/**
 * Retrieves a map of grocery names and their quantities.
 *
 * This function creates and returns a `Map` where the keys are grocery names
 * (strings) and the values are their respective quantities (numbers). The map
 * is initialized with a predefined set of grocery items and their quantities.
 *
 * @function
 * @name groceriesList
 * @returns {Map<string, number>} A `Map` where keyes are grocery names and
 * values are their quantities.
 */
export default function groceriesList() {
  const values = [
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ];
  return new Map(values);
}
