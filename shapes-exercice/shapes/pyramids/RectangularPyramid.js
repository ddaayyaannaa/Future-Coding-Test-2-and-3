const Pyramid = require('./BasePyramid');
const ShapeValidator = require('../BaseValidator')

class RectangularPyramid extends Pyramid {
  constructor(baseLength, baseWidth, height) {
    super(height);
    ShapeValidator.validatePositiveNumber(baseLength, baseWidth);
    this.baseLength = baseLength;
    this.baseWidth = baseWidth;
  }

  getBaseArea() {
    return this.baseLength * this.baseWidth;
  }
}

module.exports = RectangularPyramid;