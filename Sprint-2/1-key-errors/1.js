// Predict and explain first...
// error message: SyntaxError: Identifier 'decimalNumber' has already been declared
// Why will an error occur when this program runs?
// =============> write your prediction here
//variable 'decimalNumber' is being declared twice in the same scope. The first declaration is as a parameter of the function 'convertToPercentage', and the second declaration is inside the function body. In JavaScript, you cannot declare a variable with the same name as a parameter within the same scope, which leads to a syntax error. To fix this error, we can simply remove the second declaration of 'decimalNumber' inside the function body, as it is not necessary to redeclare it. The corrected code would be:

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  // =============> deleted const percentage. new code here
  return `${decimalNumber * 100}%`;
}

console.log(convertToPercentage(0.5));   // "50%" ✓
console.log(convertToPercentage(0.25));  // "25%" ✓

// =============> write your explanation here

// Finally, correct the code to fix the problem
// =============> write your new code here
