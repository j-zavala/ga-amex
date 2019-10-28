const pow = require("./pow");

test('it should square 2', () => {
    expect(pow(2, 2)).toBe(4);
});

test('it should square 3', () => {
    expect(pow(2, 3)).toBe(8);
});

test('it should square 2', () => {
    expect(pow(3, 2)).toBe(9);
});