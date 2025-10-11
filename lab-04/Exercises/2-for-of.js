'use strict';

const sum = (...args) => {
  let total = 0;
for(const num of args){
  total += num
};
  return total;
};

module.exports = { sum };
