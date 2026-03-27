function getOrdinalNumber(num) {
  //
  const lastTwoDigits = num % 100;
  //
  const lastDIgit = num % 10;

  // 
  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    return num + "th";
  }

  //
  switch (lastDIgit) {
    case 1:
      return num + "st";
    case 2:
      return num + "nd";
    case 3:
      return num + "rd";
    default:
      return num + "th";
  }
}


module.exports = getOrdinalNumber;
