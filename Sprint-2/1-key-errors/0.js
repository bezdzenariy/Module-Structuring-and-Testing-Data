// Predict and explain first...
//  =============> write your prediction here
// error occurring because of a variable name conflict. The parameter 'str' is being redeclared inside the function, which is not allowed in JavaScript. This will cause a syntax error because we cannot declare a variable with the same name as a parameter within the same scope.
// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  // =============> new code here
  let newCapitalisedStr = `${str[0].toUpperCase()}${str.slice(1)}`;
  return newCapitalisedStr;
}
console.log(capitalise("hello world"));
// =============> write your explanation here
// error message: SyntaxError: Identifier 'str' has already been declared
// occurs because the variable 'str' is being declared as a parameter and then again as a variable inside the function. In JavaScript, you cannot declare a variable with the same name as a parameter within the same scope. To fix this error, we can simply remove the 'let' keyword when declaring 'newCapitalisedStr' since it is not necessary to redeclare 'str'. The corrected code would be:
// =============> write your new code here