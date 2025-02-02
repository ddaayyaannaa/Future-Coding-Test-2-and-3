const Pyramid = require('./BasePyramid');
const ShapeValidator = require('../BaseValidator');

class TriangularPyramid extends Pyramid {
    constructor(baseLength, baseHeight, pyramidHeight) {
        super(pyramidHeight);
        ShapeValidator.validatePositiveNumber(baseLength, baseHeight);
        this.baseLength = baseLength;
        this.baseHeight = baseHeight;
    }

    getBaseArea() {
        return (this.baseLength * this.baseHeight) / 2;
    }
}

module.exports = TriangularPyramid;
