/* eslint no-underscore-dangle: 0 */
export default class Currency {
  constructor(code, name) {
    this.name = name;
    this.code = code;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be string');
    }
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(code) {
    if (typeof code !== 'string') {
      throw new TypeError('Code must be string');
    }
    this._code = code;
  }

  displayFullCurrency() {
    return `${this.name} (${this._code})`;
  }
}
