const ShapeValidator = require('./BaseValidator');

class Cylinder extends ShapeValidator {
  constructor(radius, height) {
    super();
    ShapeValidator.validatePositiveNumber(radius, height);
    this.radius = radius;
    this.height = height;
  }

  getVolume() {
    return parseFloat((Math.PI * Math.pow(this.radius, 2) * this.height).toFixed(2));
  }

}

module.exports = Cylinder;