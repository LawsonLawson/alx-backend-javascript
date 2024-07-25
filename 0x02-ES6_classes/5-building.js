export default class Building {
  constructor(sqft) {
    /* Creates a new instance of building. */
    if (this.constructor !== Building && !this.evacuationWarningMessage) throw Error('Class extending Building must override evacuationWarningMessage');

    /* Gets the square footage of the building */
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }
}
