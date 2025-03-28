const calculator = require('./calculator'); // ✅ Correct import

test('calculator add should return the sum of two numbers', () => {
    expect(calculator.add(2, 3)).toBe(5);
    expect(calculator.add(-1, 1)).toBe(0);
});

test('calculator subtract should return the difference of two numbers', () => {
    expect(calculator.subtract(5, 3)).toBe(2);
    expect(calculator.subtract(3, 5)).toBe(-2);
});

test('calculator multiply should return the product of two numbers', () => {
    expect(calculator.multiply(4, 3)).toBe(12);
    expect(calculator.multiply(0, 5)).toBe(0);
});

test('calculator divide should return the quotient of two numbers', () => {
    expect(calculator.divide(10, 2)).toBe(5);
    expect(calculator.divide(5, 0)).toBe("Cannot divide by zero"); 
});
