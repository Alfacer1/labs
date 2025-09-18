'use strict';

const countTypesInArray = (arr) => {
  const dict = {};
  for (const item of arr) {
    const type = typeof item;
    dict[type] = dict[type] + 1 || 1;
  }
  return dict;
};

const arr = [true, 'hello', 5, 12, -200, false, false, 'word', 51, 52, 52];
const result = countTypesInArray(arr);

console.dir(arr);
console.dir(result);

module.exports = { countTypesInArray };
