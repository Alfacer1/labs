'use strict';

const sum = (...args) => {
  return args.reduce((acc, num) => acc + num, 0)
};


module.exports = { sum };
