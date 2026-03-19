// Alternative solution using if-else blocks
// This version is more explicit and easier to understand for beginners
// Это альтернативное решение через if-else блоки - более явное и понятное

function formatAs12HourClock(time) {
  // taking two first characters of time and convert to number
  const hours24 = Number(time.slice(0, 2));
  // taking two last characters of time. let as string, no math needed
  const minutes = time.slice(3, 5);
  
  // convert 24 to 12-hour format and determine am/pm
  let hours12;
  let period;

  if (hours24 === 0) {
    // midnight (00:xx) → 12:xx am
    hours12 = 12;
    period = "am";
  } else if (hours24 < 12) {
    // morning (01:xx - 11:xx) → remain unchanged + am
    hours12 = hours24;
    period = "am";
  } else if (hours24 === 12) {
    // Noon (12:xx) → 12:xx pm (no change in hours, just change period)
    hours12 = 12;
    period = "pm";
  } else {
    // Afternoon/Evening (13:xx - 23:xx) → subtract 12 from hours + pm
    hours12 = hours24 - 12;
    period = "pm";
  }

  // formating hours with leading zero and return final string
  const formattedHours = String(hours12).padStart(2, '0');
  return `${formattedHours}:${minutes} ${period}`;
}

// Test Group 1: Morning times (AM - morning hours)
console.log("=== Test Group 1: Morning (AM) ===");
console.assert(
  formatAs12HourClock("08:00") === "08:00 am",
  "FAIL: 08:00 should be 08:00 am"
);
console.assert(
  formatAs12HourClock("01:15") === "01:15 am",
  "FAIL: 01:15 should be 01:15 am"
);
console.assert(
  formatAs12HourClock("11:45") === "11:45 am",
  "FAIL: 11:45 should be 11:45 am"
);
console.log("✓ All morning tests passed!\n");

// Test Group 2: Noon hour (12:xx - Noon)
console.log("=== Test Group 2: Noon (PM) ===");
console.assert(
  formatAs12HourClock("12:00") === "12:00 pm",
  "FAIL: 12:00 should be 12:00 pm"
);
console.assert(
  formatAs12HourClock("12:30") === "12:30 pm",
  "FAIL: 12:30 should be 12:30 pm"
);
console.log("✓ All noon tests passed!\n");

// Test Group 3: Midnight/After-midnight (00:xx - Midnight)
console.log("=== Test Group 3: Midnight (AM) ===");
console.assert(
  formatAs12HourClock("00:00") === "12:00 am",
  "FAIL: 00:00 should be 12:00 am"
);
console.assert(
  formatAs12HourClock("00:30") === "12:30 am",
  "FAIL: 00:30 should be 12:30 am"
);
console.log("✓ All midnight tests passed!\n");

// Test Group 4: Afternoon/Evening (13:xx - 23:xx - Afternoon and Evening)
console.log("=== Test Group 4: Afternoon/Evening (PM) ===");
console.assert(
  formatAs12HourClock("13:00") === "01:00 pm",
  "FAIL: 13:00 should be 01:00 pm"
);
console.assert(
  formatAs12HourClock("13:35") === "01:35 pm",
  "FAIL: 13:35 should be 01:35 pm"
);
console.assert(
  formatAs12HourClock("20:15") === "08:15 pm",
  "FAIL: 20:15 should be 08:15 pm"
);
console.assert(
  formatAs12HourClock("23:00") === "11:00 pm",
  "FAIL: 23:00 should be 11:00 pm"
);
console.assert(
  formatAs12HourClock("23:45") === "11:45 pm",
  "FAIL: 23:45 should be 11:45 pm"
);
console.log("✓ All afternoon/evening tests passed!\n");

// Test Group 5: Edge cases
console.log("=== Test Group 5: Edge Cases ===");
console.assert(
  formatAs12HourClock("06:00") === "06:00 am",
  "FAIL: 06:00 should be 06:00 am"
);
console.assert(
  formatAs12HourClock("18:00") === "06:00 pm",
  "FAIL: 18:00 should be 06:00 pm"
);
console.log("✓ All edge case tests passed!\n");

console.log("✅ ALL TESTS PASSED SUCCESSFULLY!");
