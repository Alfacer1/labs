'use strict';

// Create and return a new array without duplicate elements
// Don't modify initial array

const unique = (array) => {
  const newArray = [];
  for(let i = 0; i < array.length; i++){
    const item = array[i]
    if (!newArray.includes(item)) {
      newArray.push(item);
    }
  }
  return newArray
};


const result = unique([2, 1, 1, 3, 2]);
console.log(result);
// Результат: [2, 1, 3]


module.exports = { unique };
