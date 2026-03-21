// trying to create an age variable and then reassign the value by 1

let age = 33;
age = age + 1;
console.log(age);


// Source code: const age = 33; age = age + 1;
// Error: TypeError: Assignment to constant variable.
// Physics of the glitch: The const keyword locks a memory location from being overwritten. Attempting to assign a new value to it causes a type error.
// Your solution: Replace const with let. This removes the hardware lock, allowing the variable's value to be incremented.