## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
// ƒ log() { [native code] }
Now enter just `console` in the Console, what output do you get back?
// console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}
Try also entering `typeof console`
'object'
Answer the following questions:

What does `console` store?
// console is a global object (container). stores a collection of built-in functions (methods) and data that the browser or Node.js provides to the developer for displaying service information, errors, and debugging.
What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
// "." is the access operator (dot notation).
It's an instruction to the engine: "look inside."

// https://developer.chrome.com/docs/devtools/console/log