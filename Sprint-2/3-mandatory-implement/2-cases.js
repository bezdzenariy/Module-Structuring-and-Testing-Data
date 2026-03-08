// A set of words can be grouped together in different cases.

// For example, "hello there" in snake case would be written "hello_there"
// UPPER_SNAKE_CASE means taking a string and writing it in all caps with underscores instead of spaces.

// Implement a function that:

// Given a string input like "hello there"
// When we call this function with the input string
// it returns the string in UPPER_SNAKE_CASE, so "HELLO_THERE"

// Another example: "lord of the rings" should be "LORD_OF_THE_RINGS"

// You will need to come up with an appropriate name for the function
// Use the MDN string documentation to help you find a solution
// This might help https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase

function convertToUpperSnakeCase(text) {
    //return text.replace(/ /g, '_').toUpperCase();
    return text.replaceAll(" ", "_").toUpperCase();
}

console.log(convertToUpperSnakeCase("hello there")); // Output: "HELLO_THERE"
console.log(convertToUpperSnakeCase("lord of the rings")); // Output: "LORD_OF_THE_RINGS"

// This program defines a function called convertToUpperSnakeCase that takes a string input and converts it to UPPER_SNAKE_CASE format. The function uses the replaceAll method to replace all spaces in the input string with underscores, and then converts the entire string to uppercase using the toUpperCase method. Finally, it returns the modified string. The console.log statements demonstrate how the function works with different input strings.