const reverse = require('./reverse.js');

it('should reverse a string', () => {
    expect(reverse('Johnny')).toBe('ynnhoJ');
})