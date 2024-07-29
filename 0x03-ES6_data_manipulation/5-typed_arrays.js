/**
 * Creates a buffer array with a given position set to a given value.
 *
 * This function creates an `ArrayBuffer` of the specified length and returns a
 * `DateView` that allows manipulation of the buffer's content. It sets the
 * value at the specified position to the provided value. If the position is
 * outside the range of the buffer, it throws an error.
 *
 * @function
 * @name createInt8TypedArray
 * @param {Number} length - The length of the buffer.
 * @param {Number} position - The position to modify.
 * @param {Number} value - The value to be stored at the specified position.
 * @returns {DataView} A `DataView` of the created buffer with the specified
 * value set.
 * @throws {Error} If the position is outside the range of the buffer.
 */
export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const buf = new DataView(new ArrayBuffer(length), 0, length);
  buf.setInt8(position, value);
  return buf;
}
