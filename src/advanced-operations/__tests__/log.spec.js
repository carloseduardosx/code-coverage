const { log }  = require('../log');

describe('Log', () => {
  it('should calculate the logarithm of 10', () => {
    expect(log(10)).toBe(2.302585092994046);
  });

  it('should calculate the base 2 logarithm of 10', () => {
    expect(log(10, 2)).toBe(2.302585092994046);
  });
});
