const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"
// 1. const penceString = "399p": initializes a string variable with the value "399p"

// 2. const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1);
// Takes a string and truncates the last character ("p"). Result: "399".

// 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
// Protection mechanism. If the input was "5p", after truncation, "5" will remain.

// The padStart method will pad with zeros to a length of 3 characters: "005". For "399", it will leave "399".

// 4. const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2);
// Strips off the last two characters (pence), leaving everything before it (pounds). For "005", returns "0". For "399", returns "3".

// 5. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");
// Takes exactly the last two characters of the string. For "399", this is "99".

// 6. console.log(`£${pounds}.${pence}`);
// Assembles the final string using the template portal. Output: £3.99