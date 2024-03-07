export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('sqft must be a number');
    }
    if (new.target.evacuationWarningMessage === undefined) {
      Object.prototype.evacuationWarningMessage();
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  static evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
