const subtract = require('../subtract');

describe('Subtract', () => {
  it('should subtract 1 and 2', () => {
    expect(subtract(1, 2)).toBe(-1);
  });
});
