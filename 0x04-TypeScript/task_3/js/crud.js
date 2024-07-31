/**
 * Inserts a new row.
 * @param {Object} row - The row element to be inserted.
 * @returns {number} The ID of the newly inserted row.
 */
export function insertRow(row) {
  console.log('Insert row', row);
  // Simulate insertion by returning a random ID
  return Math.floor(Math.random() * Math.floor(1000));
}

/**
 * Deletes a row.
 * @param {number} rowId - The ID of the row to be deleted.
 */
export function deleteRow(rowId) {
  console.log('Delete row id', rowId);
  // Simulate deletion (no return value needed)
  return;
}

/**
 * Updates an existing row.
 * @param {number} rowId - The ID of the row to be updated.
 * @param {Object} row - The new row element data.
 * @returns {number} The ID of the updated row.
 */
export function updateRow(rowId, row) {
  console.log(`Update row ${rowId}`, row);
  // Simulate update by returning the same row ID
  return rowId;
}
