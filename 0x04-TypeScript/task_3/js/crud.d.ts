import { RowID, RowElement } from './interface';

/**
 * Inserts a new row.
 * @param row - The row element to be inserted.
 * @returns The ID of the newly inserted row.
 */
export function insertRow(row: RowElement): number;

/**
 * Deletes a row.
 * @param rowId - The ID of the row to be deleted.
 */
export function deleteRow(rowId: RowID): void;

/**
 * Updates an existing row.
 * @param rowId - The ID of the row to be updated.
 * @param row - The new row element data.
 * @returns The ID of the updated row.
 */
export function updateRow(rowId: RowID, row: RowElement): RowID;
