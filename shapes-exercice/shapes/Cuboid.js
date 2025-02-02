const ShapeValidator = require('./BaseValidator');

class Cuboid extends ShapeValidator {
  constructor(length, width, height) {
    super();
    ShapeValidator.validatePositiveNumber(length, width, height);
    this.length = length;
    this.width = width;
    this.height = height;
  }

  getVolume() {
    return this.length * this.width * this.height;
  }
}

module.exports = Cuboid;