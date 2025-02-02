class ShapeValidator {
    static validatePositiveNumber(...values) {
        values.forEach(value => {
            if (typeof value !== 'number' || value <= 0 || !Number.isFinite(value)) {
                throw new Error('All dimensions must be positive finite numbers');
            }
        });
    }
}

module.exports = ShapeValidator;