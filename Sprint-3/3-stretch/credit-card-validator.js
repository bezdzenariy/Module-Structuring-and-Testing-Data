/**
 * validates a cc number based on specific rules.
 
    rules:
    1. must be exactly 16 digits (all numbers)
    2. must have at least 2 different digits
    3. final digit must be even
    4. sum of all digits must be greater than 16

    @param {string} cardNumber - the cc number to validate
    @returns {boolean} - true if valid, false otherwise
 */
function isValidCreditCard(cardNumber) {
    // rule 1
    if (cardNumber.length !==16 || !/^\d+$/.test(cardNumber)) {
        return false;
    }
    // !/^\d+$/.test(cardNumber) — regular expression:
    //  ^ — start of string
    //  \d+ — one or more digits (0-9)
    //  $ — end of string
    // ! — inverts the result (returns true if NOT a match)
    
    // rule 2
    const uniqueDigits = new Set(cardNumber);
    if (uniqueDigits.size < 2) {
        return false;
    }
    // A Set is a collection of unique values. 
    // Duplicate elements are automatically removed.

    // rule 3
    const lastDigit = Number(cardNumber[cardNumber.length - 1]);
    if (lastDigit % 2 !== 0) {
        return false;
    }
    // get the last character
    // convert from string to number
    // check for oddness (remainder after division by 2)

    //rule 4
    let sum = 0;
    for (let i = 0; i < cardNumber.length; i++) {
        sum += Number(cardNumber[i]);
    }
    if (sum <= 16) {
        return false;
    }
    // 


    // if all checks pass, the card is valid
    return true;
}

module.exports = isValidCreditCard;