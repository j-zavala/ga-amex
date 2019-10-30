const removeLastItem = require('./arrayItem');

it('should remove the last item of the array', () => {
    expect(removeLastItem([1, 2, 3, 4])).toEqual([1, 2, 3]);
});