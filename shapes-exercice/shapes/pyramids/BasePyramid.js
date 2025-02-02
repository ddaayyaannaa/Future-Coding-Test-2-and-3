const ShapeValidator = require('../BaseValidator');

class Pyramid extends ShapeValidator {
  constructor(height) {
    super();
    ShapeValidator.validatePositiveNumber(height);
    this.height = height;
  }

  getVolume() {
    return (this.getBaseArea() * this.height) / 3;
  }
}

module.exports = Pyramid;