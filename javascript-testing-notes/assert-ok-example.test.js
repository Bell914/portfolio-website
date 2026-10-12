const assert = require('assert');

describe('subtraction', () => {
  it('returns the difference of two numbers', () => {
    const bigNum = 100;
    const smallNum = 4;
    const expected = 96;

    const result = bigNum - smallNum;

    assert.ok(result === expected);
  });
});
