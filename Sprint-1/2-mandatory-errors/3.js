const cardNumber = "4533787178994213";
const last4Digits = cardNumber.slice(-4);
console.log(last4Digits);


// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

// **Source code:** `const cardNumber = "4533787178994213";` (String data type, with quotes).
// **Error:** `TypeError: cardNumber.slice is not a function`
// **Crash physics:** The `Number` data type is intended for mathematics. Numbers do not physically have a `.slice()` method; it is only built into the prototype of strings (`String`) and arrays (`Array`).
// **Your solution:** The number is wrapped in quotes `"4533787178994213"`. It is now a string. The `slice(-4)` method correctly lops off the last 4 characters. *Additional fact: storing card, phone, and passport numbers as numbers is a serious database design error. They should always be strings, as they can start with a zero (which would be discarded in mathematics).*