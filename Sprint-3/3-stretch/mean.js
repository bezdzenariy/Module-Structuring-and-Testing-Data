function calculateMean(arr) {
  // 1. Check for an empty array (to pass the third test)
  if (arr.length === 0) {
    return 0;
  }

  // 2. Start box
  let sum = 0;

  // 3. LOOP: iterate over the array that was passed to the function as input
  for (let i = 0; i < arr.length; i++) { // ~ i = i + 1
    sum += arr[i]; // put each element in the sum box. ~ sum = sum + arr[i]
  }


  // 4. Return the result of dividing the sum by the length of the array
  return sum / arr.length;
}

module.exports = calculateMean;