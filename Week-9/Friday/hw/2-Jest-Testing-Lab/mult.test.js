const mult = require('./mult');

test('it should multiply 2 and 3', () => {
    expect(mult(2, 3)).toBe(6);
});

test('it should multiply 5 and 20', () => {
    expect(mult(5, 20)).toBe(100);
});

test('it should multiply 2 and 7', () => {
    expect(mult(2, 7)).toBe(14);
});

test('it should multiply 3 and 9', () => {
    expect(mult(3, 9)).toBe(27);
});