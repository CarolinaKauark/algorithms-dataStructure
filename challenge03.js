// Create an algorithm that generates the following random ID pattern: XXXX-AAAA-BBBB-CCCC


const randomPattern = (string = 'XXXX-AAAA-BBBB-CCCC') => {
  let pattern = '';
  for(let j = 0; j < string.length; j ++) {
    if(string[j] === '-') {
      pattern += '-';
    } else {
      pattern += (Math.floor(Math.random() * 36).toString(36));
    }
  }

  return pattern;
}

module.exports = randomPattern;
