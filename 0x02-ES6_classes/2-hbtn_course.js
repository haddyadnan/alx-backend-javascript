/* eslint no-underscore-dangle: 0 */
export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }

  get length() {
    return this._length;
  }

  set length(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = length;
  }

  get students() {
    return this._students;
  }

  set students(students) {
    if (!(students instanceof Array)) {
      throw new ('Students must be an Array of Strings')();
    }
    if (!students.every((s) => typeof s === 'string')) {
      throw new ('Students must be an Array of Strings')();
    }
    this._students = students;
  }
}
