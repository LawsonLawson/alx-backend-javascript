const assert = require('assert');
const calculateNumber = require('./0-calcul');

/**
 * Unit tests for the calculateNumber function using Mocha and Node's built-in assert module.
 * This test suite verifies if calculateNumber correctly handles rounding of floating-point numbers.
 */
describe('calculateNumber', () => {
  /**
   * Test case: When both inputs are whole numbers (no rounding needed).
   */
  it('floating point whole numbers', () => {
    assert.strictEqual(calculateNumber(1.0, 2.0), 3);
  });

  /**
   * Test case: When `b` is a floating-point number with a fractional part that rounds down.
   */
  it('rounding down b\'s floating point fractional number', () => {
    assert.strictEqual(calculateNumber(1.0, 2.4), 3);
  });

  /**
   * Test case: When both `a` and `b` are floating-point numbers with fractional parts that round down.
   */
  it('rounding down a and b\'s floating point fractional number', () => {
    assert.strictEqual(calculateNumber(1.4, 2.4), 3);
  });

  /**
   * Test case: When `a` is a floating-point number with a fractional part that rounds down.
   */
  it('rounding down a\'s floating point fractional number', () => {
    assert.strictEqual(calculateNumber(1.4, 2.0), 3);
  });

  /**
   * Test case: When `b` is a floating-point number with a fractional part that rounds up.
   */
  it('rounding up b\'s floating point fractional numbers', () => {
    assert.strictEqual(calculateNumber(1.0, 2.5), 4);
  });

  /**
   * Test case: When both `a` and `b` are floating-point numbers with fractional parts that round up.
   */
  it('rounding up a and b\'s floating point fractional numbers', () => {
    assert.strictEqual(calculateNumber(2.6, 2.5), 6);
  });

  /**
   * Test case: When `a` is a floating-point number with a fractional part that rounds up.
   */
  it('rounding up a\'s floating point fractional numbers', () => {
    assert.strictEqual(calculateNumber(2.6, 2.0), 5);
  });

  /**
   * Test case: When both `a` and `b` are floating-point numbers that should round down despite trailing decimal 9's.
   */
  it('rounding down a and b floating point fractional numbers with trailing 9\'s', () => {
    assert.strictEqual(calculateNumber(2.499999, 3.499999), 5);
  });
});
