const twelveHourClockTime = "08:53 PM";
const twentyFourHourClockTime = "20:53";

// The twelveHourClockTime variable should store the time in 12 hour clock format
// The twentyFourHourClockTime variable should store the time in 24 hour clock format
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the variable declarations to get the correct values stored in each variable    

console.log(`12h: ${twelveHourClockTime}`);
console.log(`24h: ${twentyFourHourClockTime}`);

// **Source code:** ```javascript
// const twelveHourClockTime = "08:53 PM";
// const twentyFourHourClockTime = "20:53";
// Error: SyntaxError: Unexpected number or Unexpected identifier.
// Physics of the glitch: The engine sees numbers and thinks they're math. But then it encounters a colon : and the letters PM, which don't make sense in a mathematical expression.
// Your solution: The data is wrapped in quotation marks "". Times and dates in this form are purely textual information (strings).