const objHashMap = {
  addition: (array) => array.reduce((acc, current) => acc + current, 0),
  subtraction: (array) => array.reduce((acc, current) => (acc) - (current)),
  multiplication: (a, b) => a * b,
  division: (a, b) => {
    if(!b) {
      throw new Error('0 is not allowed as a dividend')
    }
    return a / b;
  }
}

module.exports = objHashMap;


