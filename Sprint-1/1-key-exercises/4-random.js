const minimum = 1;
const maximum = 100;

// 1. Math.random() generates a random decimal number between 0 (inclusive) and 1 (exclusive). So it can be any value from 0 up to but not including 1.
// 2. (maximum - minimum + 1) is the range of possible values we want to generate. In this case, it's 100 - 1 + 1 = 100, which means we want to generate a number between 1 and 100 inclusive.
// 3. Math.random() * (maximum - minimum + 1) scales the random decimal to the desired range. It gives us a random decimal number between 0 and 100 (exclusive).
// 4. Math.floor() rounds the scaled random decimal down to the nearest whole number, giving us an integer between 0 and 99 inclusive.
// 5. Finally, we add minimum (which is 1) to shift the range from 0-99 to 1-100 inclusive. So num will be a random integer between 1 and 100 inclusive.

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

console.log(num);

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing