// The diagram below shows the different names for parts of a file path on a Unix operating system

// ┌─────────────────────┬────────────┐
// │          dir        │    base    │
// ├──────┬              ├──────┬─────┤
// │ root │              │ name │ ext │
// "  /    home/user/dir / file  .txt "
// └──────┴──────────────┴──────┴─────┘

// (All spaces in the "" line should be ignored. They are purely for formatting.)

const filePath = "/Users/mitch/cyf/Module-JS1/week-1/interpret/file.txt";
const lastSlashIndex = filePath.lastIndexOf("/");
const base = filePath.slice(lastSlashIndex + 1);
console.log(`The base part of ${filePath} is ${base}`);

// Create a variable to store the dir part of the filePath variable
// Create a variable to store the ext part of the variable

const dir = filePath.slice(0, lastSlashIndex);
const ext = filePath.slice(filePath.lastIndexOf(".") + 1);

// check work by logging the dir and ext variables to the console:
console.log(`Directory: ${dir}`);
console.log(`Extension: ${ext}`);

// https://www.google.com/search?q=slice+mdn

// method slice(start, end) extracts a section of a text
// we ask slice to start from the index of the last slash + 1, which gives us the base part of the file path   
// for dir, we slice from the start of the string (index 0) to the index of the last slash, which gives us everything before the base
// for ext, we slice from the index of the last dot + 1 to the end of the string, which gives us the extension without the dot
// slash and dot are not included in the results because we start slicing after them (with +1)

// 1. lastIndexOf() is a string method that returns the index of the last occurrence of a specified value in a string.
// 2. plus 1 is used to move the starting index of the slice to the character immediately after the last slash, ensuring that we get only the base name without the preceding directory path.
// 3. slice() with one argument takes everything from new position to the end of the string, which is how we get the extension without the dot.
