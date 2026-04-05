function find(str, char) {
  let index = 0;

  while (index < str.length) {
    if (str[index] === char) {
      return index;
    }
    index++;
  }
  return -1;
}

console.log(find("code your future", "u"));
console.log(find("code your future", "z"));

// The while loop statement allows us to do iteration - the repetition of a certain number of tasks according to some condition
// See the docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while

// Use the Python Visualiser to help you play computer with this example and observe how this code is executed
// Pay particular attention to the following:

// a) How the index variable updates during the call to find
// It starts at 0 and increases by exactly 1 each iteration of the loop thanks to the 
// increment operator (index++). This moves the reading "carriage" to the next letter.

// b) What is the if statement used to check
// checks for strict equality (===). Does the current letter in the string (str[index]) 
// match the letter we're looking for (char)? If so, the function immediately terminates
// and returns the position of that letter.

// c) Why is index++ being used?
// Infinite loop preventer. If we don't shift the index, the loop will endlessly 
// check for the zero letter, the processor will freeze, and the tab will crash.

// d) What is the condition index < str.length used for?
// The memory array boundary. If the word consists of 5 letters (length 5), 
// we should only check indices from 0 to 4. As soon as index 5 is reached, 
// the loop will stop, preventing the program from searching for characters 
// in the void (which would return undefined). If the loop ends and the letter 
// isn't found, the script goes to the last line and returns -1 (the standard no-result code).