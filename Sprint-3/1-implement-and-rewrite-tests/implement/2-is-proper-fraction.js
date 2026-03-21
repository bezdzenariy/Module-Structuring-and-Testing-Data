// Implement a function isProperFraction
// Write assertions for your function to check it works in different cases
// Terms:
// Fractions: https://www.bbc.co.uk/bitesize/topics/zt9n6g8/articles/zjxpp4j
// Written here like this: 1/2 == Numerator/Denominator
// the first test and first case is written for you
// complete the rest of the tests and cases
// write one test at a time, and make it pass, build your solution up methodically

function isProperFraction(numerator, denominator) {
  // if (numerator < denominator) {
  //  return true;
  // }

  // calculate the absolute values ​​(modules) of numbers, discarding minuses.
  // return the result of the strict comparison (true or false).
  return Math.abs(numerator) < Math.abs(denominator);
}

// The line below allows us to load the isProperFraction function into tests in other files.
// This will be useful in the "rewrite tests with jest" step.
module.exports = isProperFraction;

// here's our helper again
function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}

// Acceptance criteria:

// Proper Fraction check:
// Input: numerator = 2, denominator = 3
// target output: true
// Explanation: The fraction 2/3 is a proper fraction, where the numerator is less than the denominator. The function should return true.
const properFraction = isProperFraction(2, 3);
assertEquals(properFraction, true);

// Improper Fraction check:
// Input: numerator = 5, denominator = 2
// target output: false
// Explanation: The fraction 5/2 is an improper fraction, where the numerator is greater than or equal to the denominator. The function should return false.
const improperFraction = isProperFraction(5, 2);
assertEquals(improperFraction, false);

// Negative Fraction check:
// Input: numerator = -4, denominator = 7
// target output: true
// Explanation: The fraction -4/7 is a proper fraction because the absolute value of the numerator (4) is less than the denominator (7). The function should return true.
const negativeFraction = isProperFraction(-4, 7);
// ====> complete with your assertion
assertEquals(negativeFraction, true);

// Equal Numerator and Denominator check:
// Input: numerator = 3, denominator = 3
// target output: false
// Explanation: The fraction 3/3 is not a proper fraction because the numerator is equal to the denominator. The function should return false.
const equalFraction = isProperFraction(3, 3);
assertEquals(equalFraction, false);
// ====> complete with your assertion


// Stretch:
// What other scenarios could you test for?
// Zero Numerator check:
const zeroNumerator = isProperFraction(0, 5);
assertEquals(zeroNumerator, true);
// 0/5 is a proper fraction because the numerator is less than the denominator, and it represents the value 0. The function should return true.

// Zero Denominator check:
const zeroDenominator = isProperFraction(5, 0);
assertEquals(zeroDenominator, false);
// 5/0 is not a proper fraction because division by zero is undefined. The function should return false or throw an error, depending on how you choose to handle this case in your implementation.  

// negative Denominator check:
const negativeDenominator = isProperFraction(4, -6 );
assertEquals(negativeDenominator, true);
// 4/-6 is a proper fraction because the absolute value of the numerator (4) is less than the absolute value of the denominator (6). The function should return true. 