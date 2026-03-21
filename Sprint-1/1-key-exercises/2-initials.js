let firstName = "Creola";
let middleName = "Katherine";
let lastName = "Johnson";

// Declare a variable called initials that stores the first character of each string.
// This should produce the string "CKJ", but you must not write the characters C, K, or J in the code of your solution.

let initials = `${firstName[0]}${middleName[0]}${lastName[0]}`;

console.log(initials); // output: "CKJ"

// https://www.google.com/search?q=get+first+character+of+string+mdn

// string in java always starts with index 0, so first character is at index 0, second character is at index 1, and so on.
// we use ``) to create a template literal, which allows us to embed expressions inside a string using ${} syntax.
// ${} dynamically evaluates the expression inside it and inserts the result into the string.