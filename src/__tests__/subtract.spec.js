const subtract = require("../subtract");

describe("Subtract", () => {
  it("should subtract 2 and 1", () => {
    expect(subtract(2, 1)).toBe(1);
  });
})
