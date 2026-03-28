const isValidCreditCard = require('./credit-card-validator');

describe('Credit Card Validator', () => {

    // valid cc
    test('should return true for valid card: 9999777788880000', () => {
        expect(isValidCreditCard('9999777788880000')).toBe(true);
    });

    test('should return true for valid card: 6666666666661666', () => {
        expect(isValidCreditCard('6666666666661666')).toBe(true);
    });

    // invalid: contains non-numeric char
    test('should return false for card with invalid characters: a92332119c011112', () => {
        expect(isValidCreditCard('a92332119c011112')).toBe(false);
    });

    // invalid: only one type of number
    test('should return false for card with only one digit type: 4444444444444444', () => {
        expect(isValidCreditCard('4444444444444444')).toBe(false);
    });

    // invalid: sum less than 16
    test('should return false for card with sum <= 16: 1111111111111110', () => {
        expect(isValidCreditCard('1111111111111110')).toBe(false);
    });

    // invalid: odd final number
    test('should return false for card with odd final digit: 6666666666666661', () => {
        expect(isValidCreditCard('6666666666666661')).toBe(false);
    });

    // edge cases
    test('should return false for card shorter than 16 digits', () => {
        expect(isValidCreditCard('123412341234123')).toBe(false);
    });

    test('should return false for card longer than 16 digits', () => {
        expect(isValidCreditCard('12341234123412345')).toBe(false);
    });

    test('should return false for empty string', () => {
        expect(isValidCreditCard('')).toBe(false);
    });
});