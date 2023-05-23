/* 
Challenge 01 - Create an algorithm that runs through a one-dimensional array containing letters and numbers: [ “a”, 10, “b”, “hola”, 122, 15] */

// I have made in two ways, one with for loop and the other with HOF
// We could also use Switch case

// With for loop
const readArray = (array, type) => {
  const newArray = []
  if(type === 'letters') {
    for(let i = 0;  i < array.length; i ++ ) {
      if(typeof array[i] === 'string') newArray.push(array[i])
    }
  } else if (type === 'numbers') {
    for(let i = 0;  i < array.length; i ++ ) {
      if(typeof array[i] === 'number') newArray.push(array[i])
    }
  } else if (type === 'highest') {
    for(let i = 0;  i < array.length; i ++ ) {
      if(typeof array[i] === 'number') newArray.push(array[i])
    }
    const highest = Math.max(...newArray);
    return highest;
  }

  return newArray
}

// With HOF
const readArrayHOF = (array, type) => {
  if(type === 'letters') {
    return array.filter((item) => typeof item === 'string' );
  } else if (type === 'numbers') {
    return array.filter((item) => typeof item === 'number' );
  } else if (type === 'highest') {
    const numberArray = array.filter((item) => typeof item === 'number' );
    return Math.max(...numberArray);
  }
  return newArray
}

module.exports = readArray;