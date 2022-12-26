/* eslint no-underscore-dangle: 0 */
export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  get name() {
    return this.name;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('name must be a string');
    }
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(code) {
    if (typeof code !== 'string') {
      throw new TypeError('code must be a string');
    }
    this._code = code;
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }
}
