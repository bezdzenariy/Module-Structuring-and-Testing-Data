// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

//console.log(`I was born in ${cityOfBirth}`);
const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);

// Source code: ```javascript
// console.log(I was born in ${cityOfBirth});
// const cityOfBirth = "Bolton";

// Error:`ReferenceError: Cannot access 'cityOfBirth' before initialization`
// Crash Physics: Code is executed strictly top-down. Using `let` and `const` variables before their physical declaration line is impossible. This zone, from the beginning of the file to the declaration line, is called the Temporal Dead Zone.
// Solution: The call to `console.log` has been moved below the variable initialization.