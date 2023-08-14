const pow = require('../pow');

describe('Pow', () => {
  it('should calculate the power of 2 to 3', () => {
    expect(pow(2, 3)).toBe(8);
  });

  it('should calculate the power of 3 to 3', () => {
    expect(pow(3, 3)).toBe(27);
  });
});
