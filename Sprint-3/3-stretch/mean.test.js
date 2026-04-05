const calculateMean = require(`./mean`);

describe(`calculateMean: calc arithmetic mean`, () => {

    test(`should return the mean of an array of positive numbers`, () => {
        expect(calculateMean([1, 2, 3, 4, 5])).toBe(3);
    });

    test(`should work correctly with fractional numbers`, () => {
        expect(calculateMean([1.5, 2.5, 3.5, 4.5])).toBe(3);
    });

    test(`should return 0 for an empty array (edge ​​case)`, () => {
        expect(calculateMean([])).toBe(0);
    });

    test(`should return the number itself if there is one element in the array`, () => {
        expect(calculateMean([42])).toBe(42);
    });
    
    test(`should not modify (mutate) the original array`, () => {
        const numbers = [1, 2, 3];
        calculateMean(numbers);
        expect(numbers).toEqual([1, 2, 3]);
    });
});
