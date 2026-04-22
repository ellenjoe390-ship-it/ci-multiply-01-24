const divide = require('../index');

test('деление', () => {
    expect(divide(10, 2)).toBe(5);
});

test('деление на ноль', () => {
    expect(() => divide(10, 0)).toThrow();
});