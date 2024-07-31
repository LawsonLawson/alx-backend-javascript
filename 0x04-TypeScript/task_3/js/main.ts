/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

// Create a new row element with first name and last name
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

// Insert the new row and store the returned row ID
const newRowID: RowID = CRUD.insertRow(row);

// Create an updated row element by adding an age property
const updatedRow: RowElement = { ...row, age: 23 };

// Update the previously inserted row with the new row data
CRUD.updateRow(newRowID, updatedRow);

// Delete the row with the specified row ID
CRUD.deleteRow(newRowID);
