// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");

test("should return 11 for Ace of Spades", () => {
  const aceofSpades = getCardValue("A♠");
  expect(aceofSpades).toEqual(11);
});

test("should handle Ace (A) and return 11", () => {
  expect(getCardValue("A♠")).toEqual(11);
});

test("should handle Number Cards (2-9) and return their numeric value", () => {
  expect(getCardValue("5♥")).toEqual(5);
  expect(getCardValue("2♣")).toEqual(2);
  expect(getCardValue("9♦")).toEqual(9);
});

test("should handle Face Cards (J, Q, K, 10) and return 10", () => {
  expect(getCardValue("J♠")).toEqual(10);
  expect(getCardValue("K♦")).toEqual(10);
  expect(getCardValue("Q♠")).toEqual(10);
  expect(getCardValue("10♣")).toEqual(10);
});

test("should throw an error for Invalid Cards", () => {
  expect(() => {
    getCardValue("1♠");
  }).toThrow("Invalid card rank");

  expect(() => {
    getCardValue("X♦");
  }).toThrow("Invalid card rank");
});
