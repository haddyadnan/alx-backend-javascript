/* eslint no-underscore-dangle: 0 */
export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const Species = this.constructor[Symbol.species];

    return typeof Species;
  }
}
