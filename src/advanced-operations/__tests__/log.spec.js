const { log }  = require('../log');

describe('Log', () => {
  it('should calculate the logarithm of 10', () => {
    expect(log(10)).toBe(2.302585092994046);
  });
});
