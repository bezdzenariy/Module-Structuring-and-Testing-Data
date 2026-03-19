function pad(num) {
  return num.toString().padStart(2, "0");
}

function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60;
  const totalMinutes = (seconds - remainingSeconds) / 60;
  const remainingMinutes = totalMinutes % 60;
  const totalHours = (totalMinutes - remainingMinutes) / 60;

  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`;
}

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============> 3 

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> 0

// c) What is the return value of pad is called for the first time?
// =============> "00"

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> 1

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> "01"


function pad(num) {
  console.log(`pad(${num})`);
  return num.toString().padStart(2, "0");
}

function formatTimeDisplay(seconds) {
  // initial log to show the input value
  console.log(`=== formatTimeDisplay(${seconds}) ===`);
  // calculate remaining seconds
  const remainingSeconds = seconds % 60;
  // operation to calculate total minutes from seconds
  console.log(`remainingSeconds = ${remainingSeconds}`);
  // calculate total resulting minutes from seconds
  
  const totalMinutes = (seconds - remainingSeconds) / 60;
  // log the total minutes calculated
  console.log(`totalMinutes = ${totalMinutes}`);
  // calculate remaining minutes from total minutes
  const remainingMinutes = totalMinutes % 60;
  // log the remaining minutes calculated
  console.log(`remainingMinutes = ${remainingMinutes}`);
  // calculate total hours from total minutes
  
  const totalHours = (totalMinutes - remainingMinutes) / 60;
  // log the total hours calculated
  console.log(`totalHours = ${totalHours}`);
  // return the formatted time string using the pad function for hours, minutes, and seconds
  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`;
  // log the final formatted time string before returning
  // 0.toString() → "0"
  // "0".padStart(2, "0") → "00"
  // 1.toString() → "1"
  // "1".padStart(2, "0") → "01"
  // 1.toString() → "1"
  // "1".padStart(2, "0") → "01"
}


console.log(formatTimeDisplay(61));
console.log(formatTimeDisplay(3661));
console.log(formatTimeDisplay(7322));