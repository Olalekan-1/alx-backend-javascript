export default class Airport {
  constructor(name, code) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new TypeError('Name must be a string.');
    }

    if (typeof code === 'string') {
      this._code = code;
    } else {
      throw new TypeError('Code must be a string.');
    }
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName === 'string') {
      this._name = newName;
    } else {
      throw new TypeError('Name must be a string.');
    }
  }

  get code() {
    return this._code;
  }

  set code(newCode) {
    if (typeof newName === 'string') {
      this._code = newCode;
    } else {
      throw new TypeError('Code must be a string.');
    }
  }

  get [Symbol.toStringTag]() {
    return `${this._code}`;
  }

  toString() {
    return `[object ${this._code}]`;
  }
}
