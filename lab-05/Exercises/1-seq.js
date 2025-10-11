'use strict';

const seq = (fn) =>{
  const fns = [fn];

  const chain = (arg) => {
    if(typeof arg === 'function'){
      fns.push(arg);
      return chain;
    } else {
      return fns.reduce((res, f) => f(res), arg);
    }
  }
  return chain
};

module.exports = { seq };

