const movieLength = 65; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const pad = (num) => String(num).padStart(2, "0");

const result = `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions
// 
// a) How many variable declarations are there in this program?
// 6
// b) How many function calls are there?
// 1
// c) Using documentation, explain what the expression movieLength % 60 represents
// calculates the remaining seconds after dividing the total movie length in seconds by 60. The modulus operator (%) returns the remainder of the division, which in this case gives us the number of seconds that are left after accounting for the full minutes in the movie length.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// calculating total minutes by subtracting the remaining seconds from the movie length and then dividing by 60 to convert seconds to minutes.
// e) What do you think the variable result represents? Can you think of a better name for this variable?
// formatted duration of the movie in hours, minutes, and seconds. A better name for this variable could be formattedDuration or movieDurationFormatted to make it more descriptive and clear about its purpose.
// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// yes, this code will work for all values of movieLength as it calculates the hours, minutes, and seconds based on the total length of the movie in seconds. However, if movieLength is negative or not a number, it may produce unexpected results or errors.