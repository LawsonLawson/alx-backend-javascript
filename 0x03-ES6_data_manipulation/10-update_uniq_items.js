/**
 * Updates the quantity of unique grocery items to 100 if their current
 * quantiry is 1.
 *
 * This function iterates through a `Map` of grocery items and their quantities
 * If an item's quantity is exactly 1, it updates that quantiry is 100. The
 * function modifies the input map in place.
 *
 * @function
 * @name updateUniqueItems
 * @param {Map<string, number>} - A `Map` where keys are grocery names and
 * values are their quantities.
 * @throws {Error} If the input is not a `Map`.
 */
export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  map.forEach((value, key) => {
    if (value === 1) {
      map.set(key, 100);
    }
  });
}
