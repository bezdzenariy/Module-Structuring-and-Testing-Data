// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

test("should return true for a proper fraction", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
});

test("should return false for an improper fraction", () => {
  expect(isProperFraction(5, 2)).toEqual(false);
});

test("should evaluate absolute values for negative fractions", () => {
  expect(isProperFraction(-4, 7)).toEqual(true);
  expect(isProperFraction(4, -6)).toEqual(true);
});

test("should return false when numerator and denominator are equal", () => {
  expect(isProperFraction(3, 3)).toEqual(false);
});

test("should return true when numerator is zero", () => {
  expect(isProperFraction(0, 5)).toEqual(true);
});

test("should return false when denominator is zero (division by zero)", () => {
  expect(isProperFraction(5, 0)).toEqual(false);
});