const Pyramid = require('./BasePyramid');
const ShapeValidator = require('../BaseValidator');

class SquarePyramid extends Pyramid {
  constructor(baseSide, height) {
    super(height);
    ShapeValidator.validatePositiveNumber(baseSide);
    this.baseSide = baseSide;
  }

  getBaseArea() {
    return Math.pow(this.baseSide, 2);
  }
}

module.exports = SquarePyramid;
