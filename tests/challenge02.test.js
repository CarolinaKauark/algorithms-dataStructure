const hashMap = require("../challenge02");

describe('Test challenge 02', () => {
  it('Checks if the function is working as expected', () => {
    expect(hashMap.addition([3, 4, 5])).toEqual(12);
    expect(hashMap.subtraction([3, 4, 5])).toEqual(-6);    
    expect(hashMap.multiplication(4, 5)).toEqual(20);
    expect(hashMap.division(4, 2)).toEqual(2);
    expect(() => {hashMap.division(4, 0)}).toThrow(new Error('0 is not allowed as a dividend'));
    expect(hashMap.division(0, 2)).toEqual(0);
  });
});
