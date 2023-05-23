describe('Test challenge 03', () => {
  it('Checks if the function is working as expected', () => {
    expect(randomPattern('AA-BB-CC-DD')).toHaveLength(11);
    expect(randomPattern('AAAA-BBBB-CCCC-DDDD')).toHaveLength(19);
    expect(randomPattern()).toHaveLength(19);
    expect(randomPattern('AAA-BBB-CCC-DDD')).toHaveLength(15);
  });
});
