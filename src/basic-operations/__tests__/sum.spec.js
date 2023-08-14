const sum = require("../sum");

describe("Sum", () => {
  it("should sum 1 and 2", () => {
    expect(sum(1, 2)).toBe(3);
  });
})

