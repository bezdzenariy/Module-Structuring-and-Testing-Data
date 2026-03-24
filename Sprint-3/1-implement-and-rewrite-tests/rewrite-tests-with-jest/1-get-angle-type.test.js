// This statement loads the getAngleType function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getAngleType = require("../implement/1-get-angle-type");

test("should identify right angle (90°)", () => {
  expect(getAngleType(90)).toEqual("Right angle");
});
// test("description", () => { ... }) — performs a test capsule.
// expect(function_call) — accepts the actual result.
// .toEqual(expected_value) — performs a mathematical comparison.

// Case 2: Identify Acute Angles:
test("should identify acute angle (less than 90°)", () => {
  expect(getAngleType(45)).toEqual("Acute angle");
  expect(getAngleType(10)).toEqual("Acute angle");
});

// Case 3: Identify Obtuse Angles:
test("should identify obtuse angle (between 90° and 180°)", () => {
  expect(getAngleType(120)).toEqual("Obtuse angle");
  expect(getAngleType(179)).toEqual("Obtuse angle");
});

// Case 4: Identify Straight Angles:
test("should identify straight angle (exactly 180°)", () => {
  expect(getAngleType(180)).toEqual("Straight angle");
});

// Case 5: Identify Reflex Angles:
test("should identify reflex angle (between 180° and 360°)", () => {
  expect(getAngleType(270)).toEqual("Reflex angle");
  expect(getAngleType(350)).toEqual("Reflex angle");
});