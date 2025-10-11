'use strict';

const sum = (...args) => {
  if(args.length === 0) return 0;
  let total = 0;
  let i = 0;
  do{
    total += args[i];
    i++
  } while (i<args.length);
  return total
};

module.exports = { sum };
