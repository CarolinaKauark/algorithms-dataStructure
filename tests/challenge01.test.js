const readArray = require("../challenge01");

describe('Test challenge 01', () => {
  it('Checks if the function getting the type of letters returns an array of letters', () => {
    expect(readArray([3, 4, 'a', 'b', 'c', 5], 'letters')).toEqual(['a', 'b', 'c']);
    expect(readArray(['a', 'b', 'c', 'd', 'e'], 'letters')).toEqual(['a', 'b', 'c', 'd', 'e']);    
    expect(readArray([1, 2, { a: 1}, 'a'], 'letters')).toEqual(['a']);
  });

  it('Checks if the function getting the type of numbers returns an array of numbers', () => {
    expect(readArray([1, 2, 3, '4', 5], 'numbers')).toEqual([1, 2, 3, 5]);
    expect(readArray(['one', 'two', 'three'], 'numbers')).toEqual([]);
    expect(readArray([1, 2, '3'], 'numbers')).toEqual([1, 2]);
  });

  it('Checks if the function getting the type of highest returns the highest number', () => {
    expect(readArray([1, 2, 3, '4', 5], 'highest')).toEqual(5);
    expect(readArray([1, 2, 3, '4', -5], 'highest')).toEqual(3);
    expect(readArray([1, 2, '13', 4, '10'], 'highest')).toEqual(4);
  });
});
