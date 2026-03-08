
// Predict and explain first BEFORE you run any code...
// error message: SyntaxError: Unexpected number '3'
// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
// error is occurring because the parameter '3' is not a valid variable name in JavaScript.

//function square(3) {
//   return num * num;
//}

// =============> write the error message here
// error message: SyntaxError: Unexpected number '3'
// =============> explain this error message here
// not allowed in JavaScript. Parameter names must be valid identifiers, and '3' is a number, not a valid identifier. To fix this error, we can change the parameter name to something valid, such as 'num'. The corrected code would be:
// Finally, correct the code to fix the problem

// =============> write your new code here
function square(num) {
    return num * num;
}
console.log(square(5)); // Output: 25



